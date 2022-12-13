import { ethers } from 'ethers'
import assert from 'assert'

import { ETH_A, NULL_ADDRESS, ONE_ADDRESS } from '../const'
import { Geb, GebErrorTypes, utils, contracts } from 'mcgeb.js'
import { sethCall } from '../utils'
import {
    ContractList,
    GebProviderInterface,
} from '@money-god/geb-contract-base'

export const testsGeb = (
    gebProvider: GebProviderInterface,
    rpcUrl: string,
    networkName: 'kovan' | 'mainnet',
    addresses: ContractList
) => {
    describe(`Generic provider and network. Using ${networkName} RPC: ${rpcUrl}`, async () => {
        let geb: Geb

        beforeEach(async () => {
            geb = new Geb(networkName, gebProvider)
        })

        it('Create geb with ethers', async () => {
            const provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl)
            geb = new Geb(networkName, provider)

            const rate = await geb.contracts.oracleRelayer.redemptionRate()
            assert.ok(rate)
        })

        it('Create geb with gebProvider and test redemption Rate', async () => {
            const value = await geb.contracts.oracleRelayer.redemptionRate()
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_ORACLE_RELAYER,
                'redemptionRate()(uint256)'
            )
            assert.equal(value.toString(), expected[0])
        })

        it('Test collateral types', async () => {
            const value = await geb.contracts.safeEngine.collateralTypes(ETH_A)
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_SAFE_ENGINE,
                'collateralTypes(bytes32)(uint256,uint256,uint256,uint256,uint256,uint256)',
                [ETH_A]
            )

            assert.equal(value.debtAmount, expected[0])
            assert.equal(value.accumulatedRate, expected[1])
            assert.equal(value.safetyPrice, expected[2])
            assert.equal(value.debtCeiling, expected[3])
            assert.equal(value.debtFloor, expected[4])
            assert.equal(value.liquidationPrice, expected[5])
        })

        it('Check a safe debt/collateral', async () => {
            const value = await geb.contracts.safeEngine.safes(
                ETH_A,
                NULL_ADDRESS
            )
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_SAFE_ENGINE,
                'safes(bytes32,address)(uint256,uint256)',
                [ETH_A, NULL_ADDRESS]
            )

            assert.equal(value.lockedCollateral, expected[0])
            assert.equal(value.generatedDebt, expected[1])
        })

        it('Get proxy action with geb', async () => {
            const proxy = await geb.getProxyAction(addresses.ETH_FROM)
            assert.equal(proxy.proxyAddress, addresses.PROXY_DEPLOYER)
        })

        it('Get safe owner by manager with id', async () => {
            const safe = await geb.getSafe(1)

            assert.equal(safe.collateralType, ETH_A)
            assert.equal(safe.handler, await geb.contracts.safeManager.safes(1))
            const expected = await geb.contracts.safeEngine.safes(
                ETH_A,
                safe.handler
            )
            assert.equal(safe.debt.toString(), expected.generatedDebt)
            assert.equal(safe.collateral.toString(), expected.lockedCollateral)
        })

        it('Check non-empty safe with debt and collateral', async () => {
            const safeId = 1
            const safe = await geb.getSafe(safeId)
            const handler = await geb.contracts.safeManager.safes(safeId)

            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_SAFE_ENGINE,
                'safes(bytes32,address)(uint256,uint256)',
                [ETH_A, handler]
            )
            assert.equal(safe.debt.toString(), expected[1])
            assert.equal(safe.collateral.toString(), expected[0])
        })

        it('Get safe by id error', async () => {
            const safeId = (await geb.contracts.safeManager.safei()).add(1)

            try {
                await geb.getSafe(safeId.toNumber())
                assert.fail()
            } catch (err) {
                assert.equal(err.code, GebErrorTypes.SAFE_DOES_NOT_EXIST)
            }
        })

        it('Get safe owner by manager with handler', async () => {
            const handler = await geb.contracts.safeManager.safes(1)

            const safe = await geb.getSafe(handler, ETH_A)

            assert.equal(safe.collateralType, ETH_A)
            assert.equal(safe.handler, handler, 'handler')
            const expected = await geb.contracts.safeEngine.safes(
                ETH_A,
                safe.handler
            )
            assert.equal(safe.debt.toString(), expected.generatedDebt)
            assert.equal(safe.collateral.toString(), expected.lockedCollateral)
        })

        it('Get CRatio ratio', async () => {
            const safe = await geb.getSafe(1)
            const cRatio = await safe.getCRatio()
            assert.ok(cRatio.toUnsafeFloat() > 1)
        })

        it('Liquidation Price', async () => {
            const safe = await geb.getSafe(1)
            const liqPrice = await safe.liquidationPrice()
            assert.ok(liqPrice.toUnsafeFloat() > 1)
        })

        it('multicall with 1 call', async () => {
            const res = await geb.multiCall([
                geb.contracts.safeEngine.globalDebt(true),
            ])

            // More than 1 wei of global debt
            assert.ok(res[0].gt('1'))
        })

        it('multicall with 2 calls', async () => {
            const res = await geb.multiCall([
                geb.contracts.safeEngine.globalDebt(true),
                geb.contracts.safeEngine.collateralTypes(ETH_A, true),
            ])

            // More than 1 wei of global debt
            assert.ok(res[0].gt('1'))

            // debtFloor
            const expectedDebFloor = (
                await sethCall(
                    rpcUrl,
                    addresses.GEB_SAFE_ENGINE,
                    'collateralTypes(bytes32)(uint256,uint256,uint256,uint256,uint256,uint256)',
                    [ETH_A]
                )
            )[4]
            assert.strictEqual(res[1].debtFloor.toString(), expectedDebFloor)
        })

        it('multicall with 3 calls', async () => {
            const res = await geb.multiCall([
                geb.contracts.safeEngine.globalDebt(true),
                geb.contracts.safeEngine.collateralTypes(ETH_A, true),
                geb.contracts.liquidationEngine.collateralTypes(ETH_A, true),
            ])

            // More than 1 wei of global debt
            assert.ok(res[0].gt('1'))

            // debtFloor
            const expectedDebFloor = (
                await sethCall(
                    rpcUrl,
                    addresses.GEB_SAFE_ENGINE,
                    'collateralTypes(bytes32)(uint256,uint256,uint256,uint256,uint256,uint256)',
                    [ETH_A]
                )
            )[4]
            assert.strictEqual(res[1].debtFloor.toString(), expectedDebFloor)

            // Should get the right ETH auction house
            assert.ok(
                res[2].collateralAuctionHouse,
                addresses.COLLATERAL_AUCTION_HOUSE_ETH_A
            )
        })

        it('ERC20 balance', async () => {
            const erc20 = geb.getErc20Contract(addresses.GEB_COIN)
            const balance = await erc20.balanceOf(NULL_ADDRESS)
            assert.equal(balance.toString(), '0')
        })

        it('ERC20 transfer', async () => {
            const erc20 = geb.getErc20Contract(addresses.GEB_COIN)
            const tx = erc20.transferFrom(NULL_ADDRESS, ONE_ADDRESS, '0')
            await gebProvider.ethCall(tx)
        })

        it('ERC20 transfer fail', async () => {
            const erc20 = geb.getErc20Contract(addresses.GEB_COIN)
            const tx = erc20.transferFrom(NULL_ADDRESS, ONE_ADDRESS, '1')
            try {
                await gebProvider.ethCall(tx)
                assert.fail()
            } catch (err) {
                assert.equal(
                    'Coin/insufficient-balance',
                    utils.getRequireString(err)
                )
            }
        })

        it('Test get gebContract', async () => {
            const or = geb.getGebContract(
                contracts.OracleRelayer,
                addresses.GEB_ORACLE_RELAYER
            )
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_ORACLE_RELAYER,
                'redemptionRate()(uint256)'
            )
            assert.equal((await or.redemptionRate()).toString(), expected[0])
        })

        it('Test get gebContract static gebProvider', async () => {
            const or = Geb.getGebContract(
                contracts.OracleRelayer,
                addresses.GEB_ORACLE_RELAYER,
                gebProvider
            )
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_ORACLE_RELAYER,
                'redemptionRate()(uint256)'
            )
            assert.equal((await or.redemptionRate()).toString(), expected[0])
        })

        it('Test get gebContract static ether', async () => {
            const provider = new ethers.providers.StaticJsonRpcProvider(rpcUrl)
            const or = Geb.getGebContract(
                contracts.OracleRelayer,
                addresses.GEB_ORACLE_RELAYER,
                provider
            )
            const expected = await sethCall(
                rpcUrl,
                addresses.GEB_ORACLE_RELAYER,
                'redemptionRate()(uint256)'
            )
            assert.equal((await or.redemptionRate()).toString(), expected[0])
        })

        it('Get safe from owner', async () => {
            const safeList = await geb.getSafeFromOwner(addresses.ETH_FROM)
            assert.strictEqual(safeList.length, 1)

            const expected = await geb.contracts.safeEngine.safes(
                ETH_A,
                safeList[0].handler
            )

            assert.ok(safeList[0].debt.eq(expected.generatedDebt))
            assert.ok(safeList[0].collateral.eq(expected.lockedCollateral))
        })
    })
}
