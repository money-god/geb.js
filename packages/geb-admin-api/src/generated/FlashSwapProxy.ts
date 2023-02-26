/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'

export class FlashSwapProxy extends BaseContractAPI {
    canCall(src: string, dst: string, sig: BytesLike): Promise<boolean>
    canCall(
        src: string,
        dst: string,
        sig: BytesLike,
        multicall: true
    ): MulticallRequest<boolean>
    canCall(
        src: string,
        dst: string,
        sig: BytesLike,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"bytes4","name":"sig","type":"bytes4"}],"name":"canCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [src, dst, sig], multicall)
    }

    proxy(): Promise<string>
    proxy(multicall: true): MulticallRequest<string>
    proxy(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"proxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    uniswapPair(): Promise<string>
    uniswapPair(multicall: true): MulticallRequest<string>
    uniswapPair(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"uniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    uniswapV2Call(
        _sender: string,
        _amount0: BigNumberish,
        _amount1: BigNumberish,
        _data: BytesLike
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"_sender","type":"address"},{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV2Call","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            _sender,
            _amount0,
            _amount1,
            _data,
        ])
    }
}
