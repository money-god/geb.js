/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'

export class AuctionHouseLike extends BaseContractAPI {
    AUCTION_TYPE(): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [])
    }
}
