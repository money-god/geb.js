import { TransactionRequest } from './base-contract-api'
import { BigNumber } from '@ethersproject/bignumber'

export interface AbiDefinition {
    name: string
    // constant: boolean;
    // payable: boolean;
    stateMutability?: string
    inputs: AbiParameter[]
    outputs: AbiParameter[]
    type: string
}
interface AbiParameter {
    name: string
    type: string
    internalType?: string
    components?: AbiParameter[]
}

export interface Inputs extends ReadonlyArray<any> {
    readonly [key: string]: any
}

export interface GebProviderInterface {
    ethCall(
        address: string,
        abiFragment: AbiDefinition,
        params: Inputs
    ): Promise<any>
    ethSend(
        address: string,
        abiFragment: AbiDefinition,
        params: Inputs,
        ethValue?: BigNumber
    ): Promise<TransactionRequest>

    decodeError(error: any): string

    estimateGas(transaction: TransactionRequest): Promise<BigNumber>

    ethCallRequest(transaction: TransactionRequest): Promise<any>

    chainId(): Promise<number>
}
