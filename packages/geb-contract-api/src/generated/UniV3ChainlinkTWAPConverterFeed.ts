/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class UniV3ChainlinkTwapConverterFeed extends BaseContractAPI {
    chainlinkTWAP(): Promise<string>
    chainlinkTWAP(multicall: true): MulticallRequest<string>
    chainlinkTWAP(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"chainlinkTWAP","outputs":[{"internalType":"contract ChainlinkTWAPLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    converterFeedScalingFactor(): Promise<BigNumber>
    converterFeedScalingFactor(multicall: true): MulticallRequest<BigNumber>
    converterFeedScalingFactor(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"converterFeedScalingFactor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getResultWithValidity(): Promise<{
        value: BigNumber
        valid: boolean
    }>
    getResultWithValidity(
        multicall: true
    ): MulticallRequest<{
        value: BigNumber
        valid: boolean
    }>
    getResultWithValidity(
        multicall?: true
    ):
        | Promise<{
              value: BigNumber
              valid: boolean
          }>
        | MulticallRequest<{
              value: BigNumber
              valid: boolean
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getResultWithValidity","outputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bool","name":"valid","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    read(): Promise<BigNumber>
    read(multicall: true): MulticallRequest<BigNumber>
    read(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"read","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    subtract(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    subtract(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    subtract(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"subtract","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    uniV3TWAP(): Promise<string>
    uniV3TWAP(multicall: true): MulticallRequest<string>
    uniV3TWAP(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"uniV3TWAP","outputs":[{"internalType":"contract UniV3TWAPLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
