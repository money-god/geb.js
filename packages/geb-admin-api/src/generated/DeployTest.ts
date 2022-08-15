/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'

export class DeployTest extends BaseContractAPI {
    IS_TEST(): Promise<boolean>
    IS_TEST(multicall: true): MulticallRequest<boolean>
    IS_TEST(multicall?: true): Promise<boolean> | MulticallRequest<boolean> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"IS_TEST","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

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

    coinJoin(): Promise<string>
    coinJoin(multicall: true): MulticallRequest<string>
    coinJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"coinJoin","outputs":[{"internalType":"contract CoinJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    collateralAuctionHouseEthA(): Promise<string>
    collateralAuctionHouseEthA(multicall: true): MulticallRequest<string>
    collateralAuctionHouseEthA(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralAuctionHouseEthA","outputs":[{"internalType":"contract IncreasingDiscountCollateralAuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    debtAuctionHouse(): Promise<string>
    debtAuctionHouse(multicall: true): MulticallRequest<string>
    debtAuctionHouse(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"debtAuctionHouse","outputs":[{"internalType":"contract DebtAuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    debtPopperRewards(): Promise<string>
    debtPopperRewards(multicall: true): MulticallRequest<string>
    debtPopperRewards(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"debtPopperRewards","outputs":[{"internalType":"contract DebtPopperRewardsLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    esm(): Promise<string>
    esm(multicall: true): MulticallRequest<string>
    esm(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"esm","outputs":[{"internalType":"contract ESMLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    ethAJoin(): Promise<string>
    ethAJoin(multicall: true): MulticallRequest<string>
    ethAJoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"ethAJoin","outputs":[{"internalType":"contract CollateralJoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    failed(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"failed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    getExtcodehash(target: string): Promise<string>
    getExtcodehash(target: string, multicall: true): MulticallRequest<string>
    getExtcodehash(
        target: string,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"getExtcodehash","outputs":[{"internalType":"bytes32","name":"codehash","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [target], multicall)
    }

    globalSettlement(): Promise<string>
    globalSettlement(multicall: true): MulticallRequest<string>
    globalSettlement(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"globalSettlement","outputs":[{"internalType":"contract GlobalSettlementLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    initializeContracts(deployScript: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"deployScript","type":"address"}],"name":"initializeContracts","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [deployScript])
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

    pause(): Promise<string>
    pause(multicall: true): MulticallRequest<string>
    pause(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"pause","outputs":[{"internalType":"contract DSPauseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    pauseAuthority(): Promise<string>
    pauseAuthority(multicall: true): MulticallRequest<string>
    pauseAuthority(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"pauseAuthority","outputs":[{"internalType":"contract DSRolesLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    protocolToken(): Promise<string>
    protocolToken(multicall: true): MulticallRequest<string>
    protocolToken(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolToken","outputs":[{"internalType":"contract ProtocolTokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    protocolTokenAuthority(): Promise<string>
    protocolTokenAuthority(multicall: true): MulticallRequest<string>
    protocolTokenAuthority(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolTokenAuthority","outputs":[{"internalType":"contract DSRolesLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    proxyRegistry(): Promise<string>
    proxyRegistry(multicall: true): MulticallRequest<string>
    proxyRegistry(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"proxyRegistry","outputs":[{"internalType":"contract ProxyRegistryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    rateCalculator(): Promise<string>
    rateCalculator(multicall: true): MulticallRequest<string>
    rateCalculator(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"rateCalculator","outputs":[{"internalType":"contract PIRawPerSecondCalculatorLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    rateSetter(): Promise<string>
    rateSetter(multicall: true): MulticallRequest<string>
    rateSetter(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"rateSetter","outputs":[{"internalType":"contract RateSetterLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    rateSetterRelayer(): Promise<string>
    rateSetterRelayer(multicall: true): MulticallRequest<string>
    rateSetterRelayer(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"rateSetterRelayer","outputs":[{"internalType":"contract RateSetterRelayerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

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

    safeManager(): Promise<string>
    safeManager(multicall: true): MulticallRequest<string>
    safeManager(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeManager","outputs":[{"internalType":"contract GebSafeManagerLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    setUp(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"setUp","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    surplusAuctionHouse(): Promise<string>
    surplusAuctionHouse(multicall: true): MulticallRequest<string>
    surplusAuctionHouse(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"surplusAuctionHouse","outputs":[{"internalType":"contract SurplusAuctionHouseLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    systemCoin(): Promise<string>
    systemCoin(multicall: true): MulticallRequest<string>
    systemCoin(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"systemCoin","outputs":[{"internalType":"contract SystemCoinLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

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

    test_deploy(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"test_deploy","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    test_deploy_collaterals(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"test_deploy_collaterals","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }

    treasury(): Promise<string>
    treasury(multicall: true): MulticallRequest<string>
    treasury(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasury","outputs":[{"internalType":"contract StabilityFeeTreasuryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    weth(): Promise<string>
    weth(multicall: true): MulticallRequest<string>
    weth(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"weth","outputs":[{"internalType":"contract TokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
