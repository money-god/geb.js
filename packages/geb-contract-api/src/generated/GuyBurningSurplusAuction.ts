/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'

export class GuyBurningSurplusAuction extends BaseContractAPI {
    increaseBidSize(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        bid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"increaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, bid])
    }

    settleAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    try_increaseBidSize(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        bid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"try_increaseBidSize","outputs":[{"internalType":"bool","name":"ok","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, bid])
    }

    try_restartAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"try_restartAuction","outputs":[{"internalType":"bool","name":"ok","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    try_settleAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"try_settleAuction","outputs":[{"internalType":"bool","name":"ok","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }
}
