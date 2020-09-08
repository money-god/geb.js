import {
    GebProviderInterface,
    AbiDefinition,
    Inputs,
} from './chain-provider-interface'
import { BigNumber } from '@ethersproject/bignumber'

export declare type TransactionRequest = {
    to?: string
    from?: string
    nonce?: number
    gasLimit?: BigNumber
    gasPrice?: BigNumber
    data?: string
    value?: BigNumber
    chainId?: number
}

export declare type MulticallRequest<ReturnType> = {
    abi: AbiDefinition
    data: string
    to: string
}

export class BaseContractAPI {
    constructor(
        public address: string,
        public chainProvider: GebProviderInterface
    ) {}

    protected ethCall(
        abiFragment: AbiDefinition,
        params: Inputs
    ): Promise<any> {
        const data = this.chainProvider.encodeFunctionData(params, abiFragment)

        return this.chainProvider.ethCall({
            to: this.address,
            data,
        })
    }

    protected getTransactionRequest(
        abiFragment: AbiDefinition,
        params: Inputs,
        ethValue?: BigNumber
    ): TransactionRequest {
        const data = this.chainProvider.encodeFunctionData(params, abiFragment)
        return {
            to: this.address,
            data,
            value: ethValue,
        }
    }

    protected getMulticallRequest(
        abiFragment: AbiDefinition,
        params: Inputs
    ): MulticallRequest<any> {
        const data = this.chainProvider.encodeFunctionData(params, abiFragment)
        return {
            abi: abiFragment,
            to: this.address,
            data,
        }
    }

    protected ethCallOrMulticall(
        abiFragment: AbiDefinition,
        params: Inputs,
        multicall?: true
    ): Promise<any> | MulticallRequest<any> {
        if (multicall) {
            return this.getMulticallRequest(abiFragment, params)
        } else {
            return this.ethCall(abiFragment, params)
        }
    }
}
