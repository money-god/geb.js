/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class YearnCurveMaxSafeSaviour extends BaseContractAPI {
    HUNDRED(): Promise<BigNumber>
    HUNDRED(multicall: true): MulticallRequest<BigNumber>
    HUNDRED(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"HUNDRED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    MAX_LOSS(): Promise<BigNumber>
    MAX_LOSS(multicall: true): MulticallRequest<BigNumber>
    MAX_LOSS(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"MAX_LOSS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    MAX_UINT(): Promise<BigNumber>
    MAX_UINT(multicall: true): MulticallRequest<BigNumber>
    MAX_UINT(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"MAX_UINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    ONE(): Promise<BigNumber>
    ONE(multicall: true): MulticallRequest<BigNumber>
    ONE(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ONE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    RAY(): Promise<BigNumber>
    RAY(multicall: true): MulticallRequest<BigNumber>
    RAY(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"RAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    THOUSAND(): Promise<BigNumber>
    THOUSAND(multicall: true): MulticallRequest<BigNumber>
    THOUSAND(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"THOUSAND","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    WAD(): Promise<BigNumber>
    WAD(multicall: true): MulticallRequest<BigNumber>
    WAD(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"WAD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    WAD_COMPLEMENT(): Promise<BigNumber>
    WAD_COMPLEMENT(multicall: true): MulticallRequest<BigNumber>
    WAD_COMPLEMENT(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"WAD_COMPLEMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    allowUser(usr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"allowUser","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [usr])
    }

    allowedUsers(address: string): Promise<BigNumber>
    allowedUsers(address: string, multicall: true): MulticallRequest<BigNumber>
    allowedUsers(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowedUsers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
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

    canSave(bytes: BytesLike, address: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"canSave","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [bytes, address])
    }

    coinJoin(): Promise<string>
    coinJoin(multicall: true): MulticallRequest<string>
    coinJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinJoin","outputs":[{"internalType":"contract CoinJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    curveLpToken(): Promise<string>
    curveLpToken(multicall: true): MulticallRequest<string>
    curveLpToken(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"curveLpToken","outputs":[{"internalType":"contract ERC20Like","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    curvePool(): Promise<string>
    curvePool(multicall: true): MulticallRequest<string>
    curvePool(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"curvePool","outputs":[{"internalType":"contract CurveV1PoolLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    curvePoolTokens(uinteger: BigNumberish): Promise<string>
    curvePoolTokens(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    curvePoolTokens(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"curvePoolTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    debtBelowFloor(
        collateralType: BytesLike,
        targetDebtAmount: BigNumberish
    ): Promise<boolean>
    debtBelowFloor(
        collateralType: BytesLike,
        targetDebtAmount: BigNumberish,
        multicall: true
    ): MulticallRequest<boolean>
    debtBelowFloor(
        collateralType: BytesLike,
        targetDebtAmount: BigNumberish,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"targetDebtAmount","type":"uint256"}],"name":"debtBelowFloor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [collateralType, targetDebtAmount],
            multicall
        )
    }

    defaultMaxLoss(): Promise<BigNumber>
    defaultMaxLoss(multicall: true): MulticallRequest<BigNumber>
    defaultMaxLoss(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"defaultMaxLoss","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    defaultMinTokensToWithdraw(uinteger: BigNumberish): Promise<BigNumber>
    defaultMinTokensToWithdraw(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    defaultMinTokensToWithdraw(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"defaultMinTokensToWithdraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    deposit(
        collateralType: BytesLike,
        safeID: BigNumberish,
        lpTokenAmount: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"safeID","type":"uint256"},{"internalType":"uint256","name":"lpTokenAmount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safeID,
            lpTokenAmount,
        ])
    }

    disallowUser(usr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"}],"name":"disallowUser","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [usr])
    }

    getAccumulatedRateAndLiquidationPrice(
        collateralType: BytesLike
    ): Promise<{
        accumulatedRate: BigNumber
        liquidationPrice: BigNumber
    }>
    getAccumulatedRateAndLiquidationPrice(
        collateralType: BytesLike,
        multicall: true
    ): MulticallRequest<{
        accumulatedRate: BigNumber
        liquidationPrice: BigNumber
    }>
    getAccumulatedRateAndLiquidationPrice(
        collateralType: BytesLike,
        multicall?: true
    ):
        | Promise<{
              accumulatedRate: BigNumber
              liquidationPrice: BigNumber
          }>
        | MulticallRequest<{
              accumulatedRate: BigNumber
              liquidationPrice: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"}],"name":"getAccumulatedRateAndLiquidationPrice","outputs":[{"internalType":"uint256","name":"accumulatedRate","type":"uint256"},{"internalType":"uint256","name":"liquidationPrice","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [collateralType], multicall)
    }

    getKeeperPayoutTokens(
        safeHandler: string,
        sysCoinsFromLP: BigNumberish
    ): Promise<BigNumber>
    getKeeperPayoutTokens(
        safeHandler: string,
        sysCoinsFromLP: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getKeeperPayoutTokens(
        safeHandler: string,
        sysCoinsFromLP: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safeHandler","type":"address"},{"internalType":"uint256","name":"sysCoinsFromLP","type":"uint256"}],"name":"getKeeperPayoutTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [safeHandler, sysCoinsFromLP],
            multicall
        )
    }

    getKeeperPayoutValue(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getKeeperPayoutValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    getReserves(
        safeID: BigNumberish,
        token: string,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"safeID","type":"uint256"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"dst","type":"address"}],"name":"getReserves","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safeID, token, dst])
    }

    getSystemCoinMarketPrice(): Promise<BigNumber>
    getSystemCoinMarketPrice(multicall: true): MulticallRequest<BigNumber>
    getSystemCoinMarketPrice(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"getSystemCoinMarketPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getTokensForSaving(
        collateralType: BytesLike,
        safeHandler: string,
        coinsLeft: BigNumberish
    ): Promise<BigNumber>
    getTokensForSaving(
        collateralType: BytesLike,
        safeHandler: string,
        coinsLeft: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getTokensForSaving(
        collateralType: BytesLike,
        safeHandler: string,
        coinsLeft: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safeHandler","type":"address"},{"internalType":"uint256","name":"coinsLeft","type":"uint256"}],"name":"getTokensForSaving","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [collateralType, safeHandler, coinsLeft],
            multicall
        )
    }

    keeperPayout(): Promise<BigNumber>
    keeperPayout(multicall: true): MulticallRequest<BigNumber>
    keeperPayout(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"keeperPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    keeperPayoutExceedsMinValue(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"keeperPayoutExceedsMinValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    liquidationEngine(): Promise<string>
    liquidationEngine(multicall: true): MulticallRequest<string>
    liquidationEngine(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"liquidationEngine","outputs":[{"internalType":"contract LiquidationEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    minKeeperPayoutValue(): Promise<BigNumber>
    minKeeperPayoutValue(multicall: true): MulticallRequest<BigNumber>
    minKeeperPayoutValue(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"minKeeperPayoutValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
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

    modifyParameters__Bytes32Uint256(
        parameter: BytesLike,
        val: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, val])
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

    payoutToSAFESize(): Promise<BigNumber>
    payoutToSAFESize(multicall: true): MulticallRequest<BigNumber>
    payoutToSAFESize(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"payoutToSAFESize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    removedCurveCoinLiquidity(uinteger: BigNumberish): Promise<BigNumber>
    removedCurveCoinLiquidity(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    removedCurveCoinLiquidity(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"removedCurveCoinLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    restrictUsage(): Promise<BigNumber>
    restrictUsage(multicall: true): MulticallRequest<BigNumber>
    restrictUsage(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"restrictUsage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    safeIsAfloat(
        collateralType: BytesLike,
        safeHandler: string
    ): Promise<boolean>
    safeIsAfloat(
        collateralType: BytesLike,
        safeHandler: string,
        multicall: true
    ): MulticallRequest<boolean>
    safeIsAfloat(
        collateralType: BytesLike,
        safeHandler: string,
        multicall?: true
    ): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safeHandler","type":"address"}],"name":"safeIsAfloat","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [collateralType, safeHandler],
            multicall
        )
    }

    safeManager(): Promise<string>
    safeManager(multicall: true): MulticallRequest<string>
    safeManager(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeManager","outputs":[{"internalType":"contract GebSafeManagerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    saveSAFE(
        keeper: string,
        collateralType: BytesLike,
        safeHandler: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"keeper","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"safeHandler","type":"address"}],"name":"saveSAFE","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            keeper,
            collateralType,
            safeHandler,
        ])
    }

    saviourRegistry(): Promise<string>
    saviourRegistry(multicall: true): MulticallRequest<string>
    saviourRegistry(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"saviourRegistry","outputs":[{"internalType":"contract SAFESaviourRegistryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    systemCoin(): Promise<string>
    systemCoin(multicall: true): MulticallRequest<string>
    systemCoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoin","outputs":[{"internalType":"contract ERC20Like","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    systemCoinOrcl(): Promise<string>
    systemCoinOrcl(multicall: true): MulticallRequest<string>
    systemCoinOrcl(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoinOrcl","outputs":[{"internalType":"contract PriceFeedLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    taxCollector(): Promise<string>
    taxCollector(multicall: true): MulticallRequest<string>
    taxCollector(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"taxCollector","outputs":[{"internalType":"contract TaxCollectorLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    tokenAmountUsedToSave(
        bytes: BytesLike,
        address: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"tokenAmountUsedToSave","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [bytes, address])
    }

    underlyingReserves(address1: string, address2: string): Promise<BigNumber>
    underlyingReserves(
        address1: string,
        address2: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    underlyingReserves(
        address1: string,
        address2: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"underlyingReserves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address1, address2], multicall)
    }

    withdraw(
        collateralType: BytesLike,
        safeID: BigNumberish,
        yvTokenAmount: BigNumberish,
        maxLoss: BigNumberish,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"safeID","type":"uint256"},{"internalType":"uint256","name":"yvTokenAmount","type":"uint256"},{"internalType":"uint256","name":"maxLoss","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralType,
            safeID,
            yvTokenAmount,
            maxLoss,
            dst,
        ])
    }

    yVault(): Promise<string>
    yVault(multicall: true): MulticallRequest<string>
    yVault(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"yVault","outputs":[{"internalType":"contract YVault3Like","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    yvTokenCover(bytes: BytesLike, address: string): Promise<BigNumber>
    yvTokenCover(
        bytes: BytesLike,
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    yvTokenCover(
        bytes: BytesLike,
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"yvTokenCover","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [bytes, address], multicall)
    }
}
