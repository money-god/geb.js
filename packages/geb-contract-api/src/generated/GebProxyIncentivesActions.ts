/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class GebProxyIncentivesActions extends BaseContractAPI {
    allowHandler(
        manager: string,
        usr: string,
        ok: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"ok","type":"uint256"}],"name":"allowHandler","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, usr, ok])
    }

    allowSAFE(
        manager: string,
        safe: BigNumberish,
        usr: string,
        ok: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"ok","type":"uint256"}],"name":"allowSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, usr, ok])
    }

    approveSAFEModification(
        safeEngine: string,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safeEngine","type":"address"},{"internalType":"address","name":"usr","type":"address"}],"name":"approveSAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safeEngine, usr])
    }

    coinJoin_join(
        apt: string,
        safeHandler: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safeHandler","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"coinJoin_join","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [apt, safeHandler, wad])
    }

    denySAFEModification(safeEngine: string, usr: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"safeEngine","type":"address"},{"internalType":"address","name":"usr","type":"address"}],"name":"denySAFEModification","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [safeEngine, usr])
    }

    enterSystem(
        manager: string,
        src: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"src","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"enterSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, src, safe])
    }

    ethJoin_join__AddressAddress(
        ethValue: BigNumberish,
        apt: string,
        safe: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safe","type":"address"}],"name":"ethJoin_join","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [apt, safe],
            BigNumber.from(ethValue)
        )
    }

    ethJoin_join__AddressAddressUint256(
        ethValue: BigNumberish,
        apt: string,
        safe: string,
        value: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"apt","type":"address"},{"internalType":"address","name":"safe","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"ethJoin_join","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [apt, safe, value],
            BigNumber.from(ethValue)
        )
    }

    exitAndRemoveLiquidity(
        coinJoin: string,
        incentives: string,
        uniswapRouter: string,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"exitAndRemoveLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            incentives,
            uniswapRouter,
            minTokenAmounts,
        ])
    }

    exitETH(
        manager: string,
        ethJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"exitETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, ethJoin, safe, wad])
    }

    exitMine(incentives: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"}],"name":"exitMine","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [incentives])
    }

    exitRemoveLiquidityRepayDebt(
        manager: string,
        coinJoin: string,
        safe: BigNumberish,
        incentives: string,
        uniswapRouter: string,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"exitRemoveLiquidityRepayDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            coinJoin,
            safe,
            incentives,
            uniswapRouter,
            minTokenAmounts,
        ])
    }

    freeETH(
        manager: string,
        ethJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"freeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, ethJoin, safe, wad])
    }

    generateDebt(
        manager: string,
        taxCollector: string,
        coinJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"generateDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            taxCollector,
            coinJoin,
            safe,
            wad,
        ])
    }

    generateDebtAndProvideLiquidityStake(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        coinJoin: string,
        uniswapRouter: string,
        incentives: string,
        safe: BigNumberish,
        wad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"generateDebtAndProvideLiquidityStake","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                coinJoin,
                uniswapRouter,
                incentives,
                safe,
                wad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    generateDebtAndProvideLiquidityUniswap(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        coinJoin: string,
        uniswapRouter: string,
        safe: BigNumberish,
        wad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"generateDebtAndProvideLiquidityUniswap","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                coinJoin,
                uniswapRouter,
                safe,
                wad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    getRewards(incentives: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"}],"name":"getRewards","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [incentives])
    }

    getWethPair(uniswapRouter: string, token: string): Promise<string>
    getWethPair(
        uniswapRouter: string,
        token: string,
        multicall: true
    ): MulticallRequest<string>
    getWethPair(
        uniswapRouter: string,
        token: string,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getWethPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uniswapRouter, token], multicall)
    }

    lockETH(
        ethValue: BigNumberish,
        manager: string,
        ethJoin: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"lockETH","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [manager, ethJoin, safe],
            BigNumber.from(ethValue)
        )
    }

    lockETHAndGenerateDebt(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        safe: BigNumberish,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"lockETHAndGenerateDebt","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [manager, taxCollector, ethJoin, coinJoin, safe, deltaWad],
            BigNumber.from(ethValue)
        )
    }

    lockETHGenerateDebtProvideLiquidityStake(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        uniswapRouter: string,
        incentives: string,
        safe: BigNumberish,
        deltaWad: BigNumberish,
        liquidityWad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"},{"internalType":"uint256","name":"liquidityWad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"lockETHGenerateDebtProvideLiquidityStake","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                uniswapRouter,
                incentives,
                safe,
                deltaWad,
                liquidityWad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    lockETHGenerateDebtProvideLiquidityUniswap(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        uniswapRouter: string,
        safe: BigNumberish,
        deltaWad: BigNumberish,
        liquidityWad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"},{"internalType":"uint256","name":"liquidityWad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"lockETHGenerateDebtProvideLiquidityUniswap","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                uniswapRouter,
                safe,
                deltaWad,
                liquidityWad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    migrateCampaign(
        _oldIncentives: string,
        _newIncentives: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"_oldIncentives","type":"address"},{"internalType":"address","name":"_newIncentives","type":"address"}],"name":"migrateCampaign","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [_oldIncentives, _newIncentives])
    }

    modifySAFECollateralization(
        manager: string,
        safe: BigNumberish,
        deltaCollateral: BigNumberish,
        deltaDebt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"int256","name":"deltaCollateral","type":"int256"},{"internalType":"int256","name":"deltaDebt","type":"int256"}],"name":"modifySAFECollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            safe,
            deltaCollateral,
            deltaDebt,
        ])
    }

    moveSAFE(
        manager: string,
        safeSrc: BigNumberish,
        safeDst: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safeSrc","type":"uint256"},{"internalType":"uint256","name":"safeDst","type":"uint256"}],"name":"moveSAFE","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safeSrc, safeDst])
    }

    openLockETHAndGenerateDebt(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        collateralType: BytesLike,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"openLockETHAndGenerateDebt","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                collateralType,
                deltaWad,
            ],
            BigNumber.from(ethValue)
        )
    }

    openLockETHGenerateDebtProvideLiquidityStake(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        uniswapRouter: string,
        incentives: string,
        collateralType: BytesLike,
        deltaWad: BigNumberish,
        liquidityWad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"deltaWad","type":"uint256"},{"internalType":"uint256","name":"liquidityWad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"openLockETHGenerateDebtProvideLiquidityStake","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                uniswapRouter,
                incentives,
                collateralType,
                deltaWad,
                liquidityWad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    openLockETHGenerateDebtProvideLiquidityUniswap(
        ethValue: BigNumberish,
        manager: string,
        taxCollector: string,
        ethJoin: string,
        coinJoin: string,
        uniswapRouter: string,
        collateralType: BytesLike,
        deltaWad: BigNumberish,
        liquidityWad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"taxCollector","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"deltaWad","type":"uint256"},{"internalType":"uint256","name":"liquidityWad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"openLockETHGenerateDebtProvideLiquidityUniswap","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [
                manager,
                taxCollector,
                ethJoin,
                coinJoin,
                uniswapRouter,
                collateralType,
                deltaWad,
                liquidityWad,
                minTokenAmounts,
            ],
            BigNumber.from(ethValue)
        )
    }

    openSAFE(
        manager: string,
        collateralType: BytesLike,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"address","name":"usr","type":"address"}],"name":"openSAFE","outputs":[{"internalType":"uint256","name":"safe","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, collateralType, usr])
    }

    provideLiquidityStake(
        ethValue: BigNumberish,
        coinJoin: string,
        uniswapRouter: string,
        incentives: string,
        wad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"provideLiquidityStake","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [coinJoin, uniswapRouter, incentives, wad, minTokenAmounts],
            BigNumber.from(ethValue)
        )
    }

    provideLiquidityUniswap(
        ethValue: BigNumberish,
        coinJoin: string,
        uniswapRouter: string,
        wad: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"provideLiquidityUniswap","outputs":[],"stateMutability":"payable","type":"function"}

        return this.getTransactionRequest(
            abi,
            [coinJoin, uniswapRouter, wad, minTokenAmounts],
            BigNumber.from(ethValue)
        )
    }

    quitSystem(
        manager: string,
        safe: BigNumberish,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"quitSystem","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst])
    }

    removeLiquidityUniswap(
        uniswapRouter: string,
        systemCoin: string,
        value: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"systemCoin","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"removeLiquidityUniswap","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            uniswapRouter,
            systemCoin,
            value,
            minTokenAmounts,
        ])
    }

    repayDebt(
        manager: string,
        coinJoin: string,
        safe: BigNumberish,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"repayDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, coinJoin, safe, wad])
    }

    repayDebtAndFreeETH(
        manager: string,
        ethJoin: string,
        coinJoin: string,
        safe: BigNumberish,
        collateralWad: BigNumberish,
        deltaWad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"uint256","name":"collateralWad","type":"uint256"},{"internalType":"uint256","name":"deltaWad","type":"uint256"}],"name":"repayDebtAndFreeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            ethJoin,
            coinJoin,
            safe,
            collateralWad,
            deltaWad,
        ])
    }

    stakeInMine(incentives: string, wad: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"stakeInMine","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [incentives, wad])
    }

    transfer(
        collateral: string,
        dst: string,
        amt: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"collateral","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amt","type":"uint256"}],"name":"transfer","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [collateral, dst, amt])
    }

    transferCollateral(
        manager: string,
        safe: BigNumberish,
        dst: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst, wad])
    }

    transferInternalCoins(
        manager: string,
        safe: BigNumberish,
        dst: string,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"transferInternalCoins","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, dst, rad])
    }

    transferSAFEOwnership(
        manager: string,
        safe: BigNumberish,
        usr: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"usr","type":"address"}],"name":"transferSAFEOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [manager, safe, usr])
    }

    transferSAFEOwnershipToProxy(
        proxyRegistry: string,
        manager: string,
        safe: BigNumberish,
        dst: string
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"proxyRegistry","type":"address"},{"internalType":"address","name":"manager","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"dst","type":"address"}],"name":"transferSAFEOwnershipToProxy","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            proxyRegistry,
            manager,
            safe,
            dst,
        ])
    }

    withdrawAndHarvest(
        incentives: string,
        value: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"withdrawAndHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [incentives, value])
    }

    withdrawAndRemoveLiquidity(
        coinJoin: string,
        incentives: string,
        value: BigNumberish,
        uniswapRouter: string,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"withdrawAndRemoveLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            incentives,
            value,
            uniswapRouter,
            minTokenAmounts,
        ])
    }

    withdrawFromMine(
        incentives: string,
        value: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"withdrawFromMine","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [incentives, value])
    }

    withdrawHarvestRemoveLiquidity(
        incentives: string,
        uniswapRouter: string,
        systemCoin: string,
        value: BigNumberish,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incentives","type":"address"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"address","name":"systemCoin","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"withdrawHarvestRemoveLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            incentives,
            uniswapRouter,
            systemCoin,
            value,
            minTokenAmounts,
        ])
    }

    withdrawRemoveLiquidityRepayDebt(
        manager: string,
        coinJoin: string,
        safe: BigNumberish,
        incentives: string,
        value: BigNumberish,
        uniswapRouter: string,
        minTokenAmounts: [BigNumberish, BigNumberish]
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"},{"internalType":"address","name":"incentives","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"uniswapRouter","type":"address"},{"internalType":"uint256[2]","name":"minTokenAmounts","type":"uint256[2]"}],"name":"withdrawRemoveLiquidityRepayDebt","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            coinJoin,
            safe,
            incentives,
            value,
            uniswapRouter,
            minTokenAmounts,
        ])
    }
}
