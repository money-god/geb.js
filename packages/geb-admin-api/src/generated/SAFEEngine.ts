/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@reflexer-finance/geb-contract-base'
import { MulticallRequest } from '@reflexer-finance/geb-contract-base'
import { TransactionRequest } from '@reflexer-finance/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class SafeEngine extends BaseContractAPI {
    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    approveSAFEModification(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"approveSAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

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

    canModifySAFE(safe: string, account: string): Promise<boolean>
    canModifySAFE(
        safe: string,
        account: string,
        multicall: true
    ): MulticallRequest<boolean>
    canModifySAFE(
        safe: string,
        account: string,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"account","type":"address"}],"name":"canModifySAFE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [safe, account], multicall)
    }

    coinBalance(address: string): Promise<BigNumber>
    coinBalance(address: string, multicall: true): MulticallRequest<BigNumber>
    coinBalance(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"coinBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    collateralTypes(
        bytes: BytesLike
    ): Promise<{
        debtAmount: BigNumber
        accumulatedRate: BigNumber
        safetyPrice: BigNumber
        debtCeiling: BigNumber
        debtFloor: BigNumber
        liquidationPrice: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall: true
    ): MulticallRequest<{
        debtAmount: BigNumber
        accumulatedRate: BigNumber
        safetyPrice: BigNumber
        debtCeiling: BigNumber
        debtFloor: BigNumber
        liquidationPrice: BigNumber
    }>
    collateralTypes(
        bytes: BytesLike,
        multicall?: true
    ):
        | Promise<{
              debtAmount: BigNumber
              accumulatedRate: BigNumber
              safetyPrice: BigNumber
              debtCeiling: BigNumber
              debtFloor: BigNumber
              liquidationPrice: BigNumber
          }>
        | MulticallRequest<{
              debtAmount: BigNumber
              accumulatedRate: BigNumber
              safetyPrice: BigNumber
              debtCeiling: BigNumber
              debtFloor: BigNumber
              liquidationPrice: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"collateralTypes","outputs":[{"internalType":"uint256","name":"debtAmount","type":"uint256"},{"internalType":"uint256","name":"accumulatedRate","type":"uint256"},{"internalType":"uint256","name":"safetyPrice","type":"uint256"},{"internalType":"uint256","name":"debtCeiling","type":"uint256"},{"internalType":"uint256","name":"debtFloor","type":"uint256"},{"internalType":"uint256","name":"liquidationPrice","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes], multicall)
    }

    confiscateSAFECollateralAndDebt(
        collateralType: BytesLike,
        safe: string,
        collateralCounterparty: string,
        debtCounterparty: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"collateralCounterparty","type":"address"},{"internalType":"address","name":"debtCounterparty","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"confiscateSAFECollateralAndDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safe,
            collateralCounterparty,
            debtCounterparty,
            deltaCollateral,
            deltaDebt,
        ])
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

    createUnbackedDebt(
        debtDestination: string,
        coinDestination: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"debtDestination","type":"address"},{"internalType":"address","name":"coinDestination","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"createUnbackedDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            debtDestination,
            coinDestination,
            rad,
        ])
    }

    debtBalance(address: string): Promise<BigNumber>
    debtBalance(address: string, multicall: true): MulticallRequest<BigNumber>
    debtBalance(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"debtBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    denySAFEModification(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"denySAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    disableContract(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    globalDebt(): Promise<BigNumber>
    globalDebt(multicall: true): MulticallRequest<BigNumber>
    globalDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    globalDebtCeiling(): Promise<BigNumber>
    globalDebtCeiling(multicall: true): MulticallRequest<BigNumber>
    globalDebtCeiling(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalDebtCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    globalUnbackedDebt(): Promise<BigNumber>
    globalUnbackedDebt(multicall: true): MulticallRequest<BigNumber>
    globalUnbackedDebt(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalUnbackedDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    initializeCollateralType(collateralType: BytesLike): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"initializeCollateralType","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType])
    }

    modifyCollateralBalance(
        collateralType: BytesLike,
        account: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"account","type":"address"},{"internalType":"int256","name":"wad","type":"int256"}],"name":"modifyCollateralBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, account, wad])
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

    modifySAFECollateralization(
        collateralType: BytesLike,
        safe: string,
        collateralSource: string,
        debtDestination: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"address","name":"collateralSource","type":"address"},{"internalType":"address","name":"debtDestination","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"modifySAFECollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safe,
            collateralSource,
            debtDestination,
            deltaCollateral,
            deltaDebt,
        ])
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    safeDebtCeiling(): Promise<BigNumber>
    safeDebtCeiling(multicall: true): MulticallRequest<BigNumber>
    safeDebtCeiling(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeDebtCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    safeRights(address1: string, address2: string): Promise<BigNumber>
    safeRights(
        address1: string,
        address2: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    safeRights(
        address1: string,
        address2: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"safeRights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address1, address2], multicall)
    }

    safes(
        bytes: BytesLike,
        address: string
    ): Promise<{
        lockedCollateral: BigNumber
        generatedDebt: BigNumber
    }>
    safes(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<{
        lockedCollateral: BigNumber
        generatedDebt: BigNumber
    }>
    safes(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ):
        | Promise<{
              lockedCollateral: BigNumber
              generatedDebt: BigNumber
          }>
        | MulticallRequest<{
              lockedCollateral: BigNumber
              generatedDebt: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"safes","outputs":[{"internalType":"uint256","name":"lockedCollateral","type":"uint256"},{"internalType":"uint256","name":"generatedDebt","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    settleDebt(rad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"settleDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [rad])
    }

    tokenCollateral(bytes: BytesLike, address: string): Promise<BigNumber>
    tokenCollateral(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    tokenCollateral(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"tokenCollateral","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }

    transferCollateral(
        collateralType: BytesLike,
        src: string,
        dst: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateralType, src, dst, wad])
    }

    transferInternalCoins(
        src: string,
        dst: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"transferInternalCoins","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [src, dst, rad])
    }

    transferSAFECollateralAndDebt(
        collateralType: BytesLike,
        src: string,
        dst: string,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"transferSAFECollateralAndDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            src,
            dst,
            deltaCollateral,
            deltaDebt,
        ])
    }

    updateAccumulatedRate(
        collateralType: BytesLike,
        surplusDst: string,
        rateMultiplier: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"surplusDst","type":"address"},{"internalType":"int256","name":"rateMultiplier","type":"int256"}],"name":"updateAccumulatedRate","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            surplusDst,
            rateMultiplier,
        ])
    }
}