/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'

export class GebProxyActionsGlobalSettlement extends BaseContractAPI {
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

    freeETH(
        manager: string,
        ethJoin: string,
        globalSettlement: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"globalSettlement","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"freeETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            ethJoin,
            globalSettlement,
            safe,
        ])
    }

    freeTokenCollateral(
        manager: string,
        collateralJoin: string,
        globalSettlement: string,
        safe: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"manager","type":"address"},{"internalType":"address","name":"collateralJoin","type":"address"},{"internalType":"address","name":"globalSettlement","type":"address"},{"internalType":"uint256","name":"safe","type":"uint256"}],"name":"freeTokenCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            manager,
            collateralJoin,
            globalSettlement,
            safe,
        ])
    }

    prepareCoinsForRedeeming(
        coinJoin: string,
        globalSettlement: string,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"globalSettlement","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"prepareCoinsForRedeeming","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            globalSettlement,
            wad,
        ])
    }

    redeemETH(
        ethJoin: string,
        globalSettlement: string,
        collateralType: BytesLike,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"ethJoin","type":"address"},{"internalType":"address","name":"globalSettlement","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"redeemETH","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            ethJoin,
            globalSettlement,
            collateralType,
            wad,
        ])
    }

    redeemTokenCollateral(
        collateralJoin: string,
        globalSettlement: string,
        collateralType: BytesLike,
        wad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"collateralJoin","type":"address"},{"internalType":"address","name":"globalSettlement","type":"address"},{"internalType":"bytes32","name":"collateralType","type":"bytes32"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"redeemTokenCollateral","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            collateralJoin,
            globalSettlement,
            collateralType,
            wad,
        ])
    }
}
