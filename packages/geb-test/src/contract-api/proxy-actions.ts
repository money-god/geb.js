import assert from 'assert'

import {
    KOVAN_ADDRESSES,
    GebProxyRegistry,
    GebProxyActions,
    ContractApis,
} from '@reflexer-finance/geb-contract-api'
import { ChainProviderInterface } from '@reflexer-finance/geb-provider'
import { NULL_ADDRESS, ETH_A, ONE_ADDRESS, WAD } from './../const'

export const testsProxyActionWithGenericGebProvider = (
    gebProvider: ChainProviderInterface
) => {
    describe('Using a provider (Ethers OR web3)', async () => {
        // let proxyAction: GebProxyActions

        // beforeEach(() => {
        //     const proxyAction = new GebProxyActions('', gebProvider)
        // })

        const registry = new GebProxyRegistry(
            KOVAN_ADDRESSES.PROXY_REGISTRY,
            gebProvider
        )

        const proxy = new GebProxyActions(
            KOVAN_ADDRESSES.PROXY_DEPLOYER,
            'kovan',
            gebProvider
        )

        it('Get proxy from registry', async () => {
            assert.equal(await registry.proxies(NULL_ADDRESS), NULL_ADDRESS)
            assert.equal(
                await registry.proxies(KOVAN_ADDRESSES.ETH_FROM),
                KOVAN_ADDRESSES.PROXY_DEPLOYER
            )
        })

        it('Test basic asserts', async () => {
            assert.equal(proxy.proxyAddress, KOVAN_ADDRESSES.PROXY_DEPLOYER)
            assert.equal(
                // @ts-ignore For test purposes, access private members
                proxy.proxyActionAddress,
                KOVAN_ADDRESSES.PROXY_ACTIONS
            )
            assert.equal(proxy.address, KOVAN_ADDRESSES.PROXY_ACTIONS)
            assert.equal(await proxy.proxy.owner(), KOVAN_ADDRESSES.ETH_FROM)
        })

        describe('Test proxy wraper', async () => {
            it('Test transfer proxy ownership', async () => {
                // Transfer proxy ownership
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                tx['from'] = KOVAN_ADDRESSES.ETH_FROM
                try {
                    await gebProvider.ethCallRequest(tx)
                } catch {
                    assert.fail('Set Owner')
                }
            })

            it('Test transfer proxy ownership failed', async () => {
                let tx = await proxy.proxy.setOwner(NULL_ADDRESS)
                // Not the owner
                tx['from'] = NULL_ADDRESS
                try {
                    await gebProvider.ethCallRequest(tx)
                    assert.fail()
                } catch (err) {
                    assert.equal(
                        gebProvider.decodeError(err),
                        'ds-auth-unauthorized'
                    )
                }
            })

            it('Test simple proxy action function', async () => {
                const contracts = new ContractApis('kovan', gebProvider)
                const tx = await proxy.openSAFE(
                    contracts.safeManager.address,
                    ETH_A,
                    ONE_ADDRESS
                )
                tx['from'] = KOVAN_ADDRESSES.ETH_FROM

                try {
                    await gebProvider.ethCallRequest(tx)
                } catch (err) {
                    assert.fail('openSAFE: ' + gebProvider.decodeError(err))
                }
            })

            it('Test complex payable proxy action function', async () => {
                const contracts = new ContractApis('kovan', gebProvider)
                const tx = await proxy.openLockETHAndGenerateDebt(
                    WAD,
                    contracts.safeManager.address,
                    contracts.taxCollector.address,
                    contracts.joinETH_A.address,
                    contracts.joinCoin.address,
                    ETH_A,
                    WAD.mul(20)
                )

                tx['from'] = KOVAN_ADDRESSES.ETH_FROM

                try {
                    await gebProvider.ethCallRequest(tx)
                } catch (err) {
                    assert.fail(
                        'openLockETHAndGenerateDebt: ' +
                            gebProvider.decodeError(err)
                    )
                }
            })
        })
    })
}