/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BytesLike } from '@ethersproject/bytes'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { BaseContractAPI } from '@reflexer-finance/geb-provider'

export class DebtAuctionHouse<TX_OBJ> extends BaseContractAPI<TX_OBJ> {
    AUCTION_HOUSE_TYPE(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    accountingEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"accountingEngine","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    activeDebtAuctions(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"activeDebtAuctions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Add auth to an account
     * @param account Account to add auth to
     */
    addAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    amountSoldIncrease(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"amountSoldIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    auctionsStarted(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    authorizedAccounts(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    bidDecrease(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDecrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    bidDuration(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDuration","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    bids(
        arg0: BigNumberish
    ): Promise<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
    }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"address","name":"highBidder","type":"address"},{"internalType":"uint48","name":"bidExpiry","type":"uint48"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    contractEnabled(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"contractEnabled","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Decrease the protocol token amount you're willing to receive in        exchange for providing the same amount of system coins being raised by the auction
     * @param amountToBuy Amount of protocol tokens to buy (must be smaller than the previous proposed amount) (wad)
     * @param bid New system coin bid (must always equal the total amount raised by the auction) (rad)
     * @param id ID of the auction for which you want to submit a new bid
     */
    decreaseSoldAmount(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        bid: BigNumberish
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"bid","type":"uint256"}],"name":"decreaseSoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            id,
            amountToBuy,
            bid,
        ])
    }

    /**
     * Disable the auction house (usually called by the AccountingEngine)
     */
    disableContract(): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"disableContract","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [])
    }

    /**
     * Change addresses of integrated contracts
     * @param addr New contract address
     * @param parameter The name of the oracle contract modified
     */
    modifyParameters(parameter: BytesLike, addr: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"address","name":"addr","type":"address"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [parameter, addr])
    }

    protocolToken(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"protocolToken","outputs":[{"internalType":"contract TokenLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Remove auth from an account
     * @param account Account to remove auth from
     */
    removeAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    /**
     * Restart an auction if no bids were submitted for it
     * @param id ID of the auction to restart
     */
    restartAuction(id: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"restartAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id])
    }

    safeEngine(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    /**
     * Settle/finish an auction
     * @param id ID of the auction to settle
     */
    settleAuction(id: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id])
    }

    /**
     * Start a new debt auction
     * @param amountToSell Amount of protocol tokens to sell (wad)
     * @param incomeReceiver Who receives the auction proceeds
     * @param initialBid Initial bid size (rad)
     */
    startAuction(
        incomeReceiver: string,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"incomeReceiver","type":"address"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            incomeReceiver,
            amountToSell,
            initialBid,
        ])
    }

    /**
     * Terminate an auction prematurely.
     * @param id ID of the auction to terminate
     */
    terminateAuctionPrematurely(id: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"terminateAuctionPrematurely","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [id])
    }

    totalAuctionLength(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }
}
