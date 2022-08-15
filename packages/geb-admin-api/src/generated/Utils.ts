/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class Utils extends BaseContractAPI {
    addr(string: string): Promise<string>
    addr(string: string, multicall: true): MulticallRequest<string>
    addr(
        string: string,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"addr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [string], multicall)
    }

    addressList(uinteger: BigNumberish): Promise<string>
    addressList(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    addressList(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    addressListLength(): Promise<BigNumber>
    addressListLength(multicall: true): MulticallRequest<BigNumber>
    addressListLength(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"addressListLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
