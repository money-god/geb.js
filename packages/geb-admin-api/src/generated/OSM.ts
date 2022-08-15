/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class Osm extends BaseContractAPI {
    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    authorizedAccounts(address: string): Promise<BigNumber>
    authorizedAccounts(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    authorizedAccounts(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    changeDelay(delay: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint16","name":"delay","type":"uint16"}],"name":"changeDelay","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [delay])
    }

    changePriceSource(priceSource_: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"priceSource_","type":"address"}],"name":"changePriceSource","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [priceSource_])
    }

    getNextResultWithValidity(): Promise<{
        0: BigNumber
        1: boolean
    }>
    getNextResultWithValidity(
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: boolean
    }>
    getNextResultWithValidity(
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: boolean
          }>
        | MulticallRequest<{
              0: BigNumber
              1: boolean
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getNextResultWithValidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getResultWithValidity(): Promise<{
        0: BigNumber
        1: boolean
    }>
    getResultWithValidity(
        multicall: true
    ): MulticallRequest<{
        0: BigNumber
        1: boolean
    }>
    getResultWithValidity(
        multicall?: true
    ):
        | Promise<{
              0: BigNumber
              1: boolean
          }>
        | MulticallRequest<{
              0: BigNumber
              1: boolean
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getResultWithValidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lastUpdateTime(): Promise<BigNumber>
    lastUpdateTime(multicall: true): MulticallRequest<BigNumber>
    lastUpdateTime(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    passedDelay(): Promise<boolean>
    passedDelay(multicall: true): MulticallRequest<boolean>
    passedDelay(
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"passedDelay","outputs":[{"internalType":"bool","name":"ok","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    priceSource(): Promise<string>
    priceSource(multicall: true): MulticallRequest<string>
    priceSource(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"priceSource","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

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

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    restartValue(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"restartValue","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    start(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"start","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    stop(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"stop","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    stopped(): Promise<BigNumber>
    stopped(multicall: true): MulticallRequest<BigNumber>
    stopped(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"stopped","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    updateDelay(): Promise<number>
    updateDelay(multicall: true): MulticallRequest<number>
    updateDelay(multicall?: true): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"updateDelay","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    updateResult(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"updateResult","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }
}
