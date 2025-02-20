/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class BasefeeOsmDeviationCallBundler extends BaseContractAPI {
    acceptedDeviation(): Promise<BigNumber>
    acceptedDeviation(multicall: true): MulticallRequest<BigNumber>
    acceptedDeviation(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"acceptedDeviation","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

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

    callDelay(): Promise<BigNumber>
    callDelay(multicall: true): MulticallRequest<BigNumber>
    callDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"callDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    coin(): Promise<string>
    coin(multicall: true): MulticallRequest<string>
    coin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    coinOracle(): Promise<string>
    coinOracle(multicall: true): MulticallRequest<string>
    coinOracle(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinOracle","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralA(): Promise<string>
    collateralA(multicall: true): MulticallRequest<string>
    collateralA(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralA","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralB(): Promise<string>
    collateralB(multicall: true): MulticallRequest<string>
    collateralB(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralB","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralC(): Promise<string>
    collateralC(multicall: true): MulticallRequest<string>
    collateralC(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralC","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    ethOracle(): Promise<string>
    ethOracle(multicall: true): MulticallRequest<string>
    ethOracle(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ethOracle","outputs":[{"internalType":"contract OracleLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    fixedReward(): Promise<BigNumber>
    fixedReward(multicall: true): MulticallRequest<BigNumber>
    fixedReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"fixedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    lastCallMade(): Promise<BigNumber>
    lastCallMade(multicall: true): MulticallRequest<BigNumber>
    lastCallMade(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"lastCallMade","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    modifyParameters__Bytes32Address(
        parameter: BytesLike,
        val: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"val","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, val])
    }

    modifyParameters__Bytes32Uint256(
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    oracleRelayer(): Promise<string>
    oracleRelayer(multicall: true): MulticallRequest<string>
    oracleRelayer(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"oracleRelayer","outputs":[{"internalType":"contract OracleRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    osm(): Promise<string>
    osm(multicall: true): MulticallRequest<string>
    osm(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"osm","outputs":[{"internalType":"contract OSMLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    treasury(): Promise<string>
    treasury(multicall: true): MulticallRequest<string>
    treasury(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasury","outputs":[{"internalType":"contract StabilityFeeTreasuryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
