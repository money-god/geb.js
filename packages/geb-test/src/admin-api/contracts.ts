import { GebEthersProvider } from '@money-god/geb-ethers-provider'
import { verifyContract } from '../utils'
import { ethers } from 'ethers'
import { MultiCollateralGebDeployment } from '@money-god/geb-contract-base'
import { AdminApis } from '@money-god/geb-admin-api'

export const testContractPresence = (
    network: MultiCollateralGebDeployment,
    ethNode: string
) => {
    describe(`Test that contracts are present at their expected address. Network ${network}`, () => {
        const provider = new GebEthersProvider(
            new ethers.providers.StaticJsonRpcProvider(ethNode)
        )
        const contractsApi = new AdminApis(network, provider)

        Object.values(contractsApi)
            // Skip this object since it's not a contract
            .filter((x) => x.constructor.name !== 'GebEthersProvider')
            // Don't check gnosis safe because at the address it's just an empty proxy, implementation is
            // elsewhere and is being delegate called to.
            .filter((x) => x.constructor.name !== 'GnosisSafe')
            .forEach((contract) =>
                it(`Check ${contract.constructor.name} contract address`, async () => {
                    await verifyContract(contract, ethNode)
                })
            )
    })
}
