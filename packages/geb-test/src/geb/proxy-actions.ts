import assert from 'assert'

import { GebProxyRegistry } from '@money-god/geb-contract-api'
import {
    ContractList,
    MultiCollateralContractList,
    GebProviderInterface,
} from '@money-god/geb-contract-base'
import { GebProxyActions, utils } from 'mcgeb.js'
import { NULL_ADDRESS, ETH_A, ONE_ADDRESS, WAD } from '../const'

export const testsProxyActionWithGenericGebProvider = (
    gebProvider: GebProviderInterface,
    addresses: ContractList,
    networkName: 'mainnet' | 'goerli'
) => {
    describe(`Using a provider (Ethers OR web3) network ${networkName}`, async () => {
        const registry = new GebProxyRegistry(
            addresses.PROXY_REGISTRY,
            gebProvider
        )

        const proxy = new GebProxyActions(
            addresses.PROXY_DEPLOYER,
            networkName,
            gebProvider
        )

        it('Get proxy from registry', async () => {
            assert.equal(
                await registry.proxies(
                    '0x0000000000000000000000000000000000000123'
                ),
                NULL_ADDRESS
            )
            assert.equal(
                await registry.proxies(addresses.ETH_FROM),
                addresses.PROXY_DEPLOYER
            )
        })

        it('Test basic asserts', async () => {
            assert.equal(proxy.proxyAddress, addresses.PROXY_DEPLOYER)
            assert.equal(proxy.proxyActionCoreAddress, addresses.PROXY_ACTIONS)
            assert.equal(
                proxy.proxyActionGlobalSettlementAddress,
                addresses.PROXY_ACTIONS_GLOBAL_SETTLEMENT
            )
            assert.equal(
                proxy.proxyActionIncentiveAddress,
                addresses.PROXY_ACTIONS_INCENTIVES
            )
            assert.equal(
                proxy.proxyActionLeverageAddress,
                addresses.LEVERAGE_PROXY_ACTION
            )
            assert.equal(await proxy.proxy.owner(), addresses.ETH_FROM)
        })

        describe('Test proxy wraper', async () => {
            it('Test transfer proxy ownership', async () => {
                // Transfer proxy ownership
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                tx['from'] = addresses.ETH_FROM
                try {
                    await gebProvider.ethCall(tx)
                } catch {
                    assert.fail('Set Owner')
                }
            })

            it('Test transfer proxy ownership failed', async () => {
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                // Not the owner
                tx['from'] = NULL_ADDRESS
                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                    return
                }
            })

            it('Test simple proxy action function', async () => {
                const tx = await proxy.openSAFE(ETH_A, ONE_ADDRESS)
                tx['from'] = addresses.ETH_FROM

                try {
                    await gebProvider.ethCall(tx)
                } catch (err) {
                    assert.fail('openSAFE: ' + utils.getRequireString(err))
                }
            })

            it('Test complex payable proxy action function', async () => {
                if (
                    addresses.GEB_SAFE_ENGINE ===
                    '0xf0b7808b940b78bE81ad6F9E075Ce8be4A837E2c'
                ) {
                    return
                }

                const tx = await proxy.openLockETHAndGenerateDebt(
                    '0',
                    ETH_A,
                    WAD.mul(0) // 100 RAI debt
                )

                tx['from'] = addresses.ETH_FROM

                try {
                    await gebProvider.ethCall(tx)
                } catch (err) {
                    assert.fail(
                        'openLockETHAndGenerateDebt: ' +
                            utils.getRequireString(err)
                    )
                }
            })

            it('Test global settlement proxy action', async () => {
                const proxy = new GebProxyActions(
                    addresses.PROXY_DEPLOYER,
                    networkName,
                    gebProvider
                )

                const tx = proxy.freeTokenCollateralGlobalSettlement(
                    addresses.GEB_JOIN_ETH_A,
                    1
                )

                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                }
            })

            /*
            it('Test incentive proxy action', async () => {
                const proxy = new GebProxyActions(
                    addresses.PROXY_DEPLOYER,
                    networkName,
                    gebProvider
                )

                if (proxy.proxyActionIncentiveAddress === NULL_ADDRESS) {
                    // If the address is null it means that the proxy was not deploy for this network.
                    // Therefore, skip this test
                    return
                }

                const tx = proxy.provideLiquidityStake(
                    '1',
                    '1',
                    ['0', '0'],
                    NULL_ADDRESS
                )

                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                }
            })
	    */
        })
    })
}
export const testsMcProxyActionWithGenericGebProvider = (
    gebProvider: GebProviderInterface,
    addresses: MultiCollateralContractList,
    networkName: 'mainnet' | 'goerli'
) => {
    describe(`Using a provider (Ethers OR web3) network ${networkName}`, async () => {
        const registry = new GebProxyRegistry(
            addresses.PROXY_REGISTRY,
            gebProvider
        )

        const proxy = new GebProxyActions(
            addresses.PROXY_DEPLOYER,
            networkName,
            gebProvider
        )

        it('Get proxy from registry', async () => {
            assert.equal(
                await registry.proxies(
                    '0x0000000000000000000000000000000000000123'
                ),
                NULL_ADDRESS
            )
            assert.equal(
                await registry.proxies(addresses.ETH_FROM),
                addresses.PROXY_DEPLOYER
            )
        })

        it('Test basic asserts', async () => {
            assert.equal(proxy.proxyAddress, addresses.PROXY_DEPLOYER)
            assert.equal(proxy.proxyActionCoreAddress, addresses.PROXY_ACTIONS)
            assert.equal(
                proxy.proxyActionGlobalSettlementAddress,
                addresses.PROXY_ACTIONS_GLOBAL_SETTLEMENT
            )
            assert.equal(
                proxy.proxyActionIncentiveAddress,
                addresses.PROXY_ACTIONS_INCENTIVES
            )
            assert.equal(
                proxy.proxyActionLeverageAddress,
                addresses.LEVERAGE_PROXY_ACTION
            )
            assert.equal(await proxy.proxy.owner(), addresses.ETH_FROM)
        })

        describe('Test proxy wraper', async () => {
            it('Test transfer proxy ownership', async () => {
                // Transfer proxy ownership
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                tx['from'] = addresses.ETH_FROM
                try {
                    await gebProvider.ethCall(tx)
                } catch {
                    assert.fail('Set Owner')
                }
            })

            it('Test transfer proxy ownership failed', async () => {
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                // Not the owner
                tx['from'] = NULL_ADDRESS
                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                    return
                }
            })

            it('Test simple proxy action function', async () => {
                const tx = await proxy.openSAFE(ETH_A, ONE_ADDRESS)
                tx['from'] = addresses.ETH_FROM

                try {
                    await gebProvider.ethCall(tx)
                } catch (err) {
                    assert.fail('openSAFE: ' + utils.getRequireString(err))
                }
            })

            it('Test complex payable proxy action function', async () => {
                if (
                    addresses.GEB_SAFE_ENGINE ===
                    '0xf0b7808b940b78bE81ad6F9E075Ce8be4A837E2c'
                ) {
                    return
                }

                const tx = await proxy.openLockETHAndGenerateDebt(
                    '0',
                    ETH_A,
                    WAD.mul(0) // 100 RAI debt
                )

                tx['from'] = addresses.ETH_FROM

                try {
                    await gebProvider.ethCall(tx)
                } catch (err) {
                    assert.fail(
                        'openLockETHAndGenerateDebt: ' +
                            utils.getRequireString(err)
                    )
                }
            })

            it('Test global settlement proxy action', async () => {
                const proxy = new GebProxyActions(
                    addresses.PROXY_DEPLOYER,
                    networkName,
                    gebProvider
                )

                const tx = proxy.freeTokenCollateralGlobalSettlement(
                    addresses.GEB_JOIN_ETH_A,
                    1
                )

                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                }
            })

            /*
            it('Test incentive proxy action', async () => {
                const proxy = new GebProxyActions(
                    addresses.PROXY_DEPLOYER,
                    networkName,
                    gebProvider
                )

                if (proxy.proxyActionIncentiveAddress === NULL_ADDRESS) {
                    // If the address is null it means that the proxy was not deploy for this network.
                    // Therefore, skip this test
                    return
                }

                const tx = proxy.provideLiquidityStake(
                    '1',
                    '1',
                    ['0', '0'],
                    NULL_ADDRESS
                )

                try {
                    await gebProvider.ethCall(tx)
                    assert.fail()
                } catch (err) {
                    assert.ok(true)
                }
            })
	    */
        })
    })
}
