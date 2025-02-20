/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'

export class GebProxyStakedTokenAuctionActions extends BaseContractAPI {
    claimProxyFunds(tokenAddress: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"claimProxyFunds","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [tokenAddress])
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

    increaseBidSize(
        coinJoin: string,
        auctionHouse_: string,
        auctionId: BigNumberish,
        bidSize: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"auctionHouse_","type":"address"},{"internalType":"uint256","name":"auctionId","type":"uint256"},{"internalType":"uint256","name":"bidSize","type":"uint256"}],"name":"increaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            coinJoin,
            auctionHouse_,
            auctionId,
            bidSize,
        ])
    }

    settleAuction(
        auctionHouse_: string,
        auctionId: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"auctionHouse_","type":"address"},{"internalType":"uint256","name":"auctionId","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [auctionHouse_, auctionId])
    }

    startAndIncreaseBidSize(
        coinJoin: string,
        stakingPool: string,
        bidSize: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"coinJoin","type":"address"},{"internalType":"address","name":"stakingPool","type":"address"},{"internalType":"uint256","name":"bidSize","type":"uint256"}],"name":"startAndIncreaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [coinJoin, stakingPool, bidSize])
    }
}
