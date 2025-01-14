/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumber } from '@ethersproject/bignumber'

export class DebtCeilingSetterLike extends BaseContractAPI {
    autoUpdateCeiling(address: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"autoUpdateCeiling","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [address])
    }

    blockDecreaseWhenDevalue(): Promise<BigNumber>
    blockDecreaseWhenDevalue(multicall: true): MulticallRequest<BigNumber>
    blockDecreaseWhenDevalue(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"blockDecreaseWhenDevalue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    blockIncreaseWhenRevalue(): Promise<BigNumber>
    blockIncreaseWhenRevalue(multicall: true): MulticallRequest<BigNumber>
    blockIncreaseWhenRevalue(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"blockIncreaseWhenRevalue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getNextCollateralCeiling(): Promise<BigNumber>
    getNextCollateralCeiling(multicall: true): MulticallRequest<BigNumber>
    getNextCollateralCeiling(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getNextCollateralCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lastUpdateTime(): Promise<BigNumber>
    lastUpdateTime(multicall: true): MulticallRequest<BigNumber>
    lastUpdateTime(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
