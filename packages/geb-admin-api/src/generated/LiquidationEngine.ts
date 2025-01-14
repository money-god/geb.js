/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class LiquidationEngine extends BaseContractAPI {
    accountingEngine(): Promise<string>
    accountingEngine(multicall: true): MulticallRequest<string>
    accountingEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accountingEngine","outputs":[{"internalType":"contract AccountingEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

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

    chosenSAFESaviour(bytes: BytesLike, address: string): Promise<string>
    chosenSAFESaviour(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<string>
    chosenSAFESaviour(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"chosenSAFESaviour","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    collateralTypes(
        bytes: BytesLike
    ): Promise<{
        collateralAuctionHouse: string
        liquidationPenalty: BigNumber
        liquidationQuantity: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<{
        collateralAuctionHouse: string
        liquidationPenalty: BigNumber
        liquidationQuantity: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall?: true
    ):
        | Promise<{
              collateralAuctionHouse: string
              liquidationPenalty: BigNumber
              liquidationQuantity: BigNumber
          }>
        | MulticallRequest<{
              collateralAuctionHouse: string
              liquidationPenalty: BigNumber
              liquidationQuantity: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTypes","outputs":[{"internalType":"address","name":"collateralAuctionHouse","type":"address"},{"internalType":"uint256","name":"liquidationPenalty","type":"uint256"},{"internalType":"uint256","name":"liquidationQuantity","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    connectSAFESaviour(saviour: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"saviour","type":"address"}],"name":"connectSAFESaviour","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [saviour])
    }

    contractEnabled(): Promise<BigNumber>
    contractEnabled(multicall: true): MulticallRequest<BigNumber>
    contractEnabled(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    currentOnAuctionSystemCoins(): Promise<BigNumber>
    currentOnAuctionSystemCoins(multicall: true): MulticallRequest<BigNumber>
    currentOnAuctionSystemCoins(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"currentOnAuctionSystemCoins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    disconnectSAFESaviour(saviour: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"saviour","type":"address"}],"name":"disconnectSAFESaviour","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [saviour])
    }

    getLimitAdjustedDebtToCover(
        collateralType: BytesLike,
        safe: string
    ): Promise<BigNumber>
    getLimitAdjustedDebtToCover(
        collateralType: BytesLike,
        safe: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    getLimitAdjustedDebtToCover(
        collateralType: BytesLike,
        safe: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"}],"name":"getLimitAdjustedDebtToCover","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [collateralType, safe], multicall)
    }

    liquidateSAFE(collateralType: BytesLike, safe: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"}],"name":"liquidateSAFE","outputs":[{"internalType":"uint256","name":"auctionId","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, safe])
    }

    modifyParameters__Bytes32Bytes32Address(
        collateralType: BytesLike,
        parameter: BytesLike,
        data: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            parameter,
            data,
        ])
    }

    modifyParameters__Bytes32Address(
        parameter: BytesLike,
        data: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"data","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    modifyParameters__Bytes32Bytes32Uint256(
        collateralType: BytesLike,
        parameter: BytesLike,
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            parameter,
            data,
        ])
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

    mutex(bytes: BytesLike, address: string): Promise<number>
    mutex(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<number>
    mutex(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"mutex","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    onAuctionSystemCoinLimit(): Promise<BigNumber>
    onAuctionSystemCoinLimit(multicall: true): MulticallRequest<BigNumber>
    onAuctionSystemCoinLimit(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"onAuctionSystemCoinLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    protectSAFE(
        collateralType: BytesLike,
        safe: string,
        saviour: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"saviour","type":"address"}],"name":"protectSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, safe, saviour])
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    removeCoinsFromAuction(rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"removeCoinsFromAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [rad])
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    safeSaviours(address: string): Promise<BigNumber>
    safeSaviours(address: string, multicall: true): MulticallRequest<BigNumber>
    safeSaviours(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"safeSaviours","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }
}
