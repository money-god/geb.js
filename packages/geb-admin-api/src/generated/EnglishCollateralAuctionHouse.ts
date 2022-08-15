/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class EnglishCollateralAuctionHouse extends BaseContractAPI {
    AUCTION_HOUSE_TYPE(): Promise<string>
    AUCTION_HOUSE_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_HOUSE_TYPE(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_HOUSE_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    AUCTION_TYPE(): Promise<string>
    AUCTION_TYPE(multicall: true): MulticallRequest<string>
    AUCTION_TYPE(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"AUCTION_TYPE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    amountToRaise(id: BigNumberish): Promise<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    amountToRaise(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"amountToRaise","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    auctionsStarted(): Promise<BigNumber>
    auctionsStarted(multicall: true): MulticallRequest<BigNumber>
    auctionsStarted(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"auctionsStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
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

    bidAmount(id: BigNumberish): Promise<BigNumber>
    bidAmount(id: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    bidAmount(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"bidAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    bidDuration(): Promise<number>
    bidDuration(multicall: true): MulticallRequest<number>
    bidDuration(multicall?: true): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidDuration","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bidIncrease(): Promise<BigNumber>
    bidIncrease(multicall: true): MulticallRequest<BigNumber>
    bidIncrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"bidIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    bids(
        uinteger: BigNumberish
    ): Promise<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
        amountToRaise: BigNumber
    }>
    bids(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        bidAmount: BigNumber
        amountToSell: BigNumber
        highBidder: string
        bidExpiry: number
        auctionDeadline: number
        forgoneCollateralReceiver: string
        auctionIncomeRecipient: string
        amountToRaise: BigNumber
    }>
    bids(
        uinteger: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              bidAmount: BigNumber
              amountToSell: BigNumber
              highBidder: string
              bidExpiry: number
              auctionDeadline: number
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
              amountToRaise: BigNumber
          }>
        | MulticallRequest<{
              bidAmount: BigNumber
              amountToSell: BigNumber
              highBidder: string
              bidExpiry: number
              auctionDeadline: number
              forgoneCollateralReceiver: string
              auctionIncomeRecipient: string
              amountToRaise: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint256","name":"bidAmount","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"address","name":"highBidder","type":"address"},{"internalType":"uint48","name":"bidExpiry","type":"uint48"},{"internalType":"uint48","name":"auctionDeadline","type":"uint48"},{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    collateralType(): Promise<string>
    collateralType(multicall: true): MulticallRequest<string>
    collateralType(
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"collateralType","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    decreaseSoldAmount(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"decreaseSoldAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, rad])
    }

    forgoneCollateralReceiver(id: BigNumberish): Promise<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    forgoneCollateralReceiver(
        id: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"forgoneCollateralReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    increaseBidSize(
        id: BigNumberish,
        amountToBuy: BigNumberish,
        rad: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amountToBuy","type":"uint256"},{"internalType":"uint256","name":"rad","type":"uint256"}],"name":"increaseBidSize","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id, amountToBuy, rad])
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
        data: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"data","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [parameter, data])
    }

    raisedAmount(id: BigNumberish): Promise<BigNumber>
    raisedAmount(id: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    raisedAmount(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"raisedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    remainingAmountToSell(id: BigNumberish): Promise<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    remainingAmountToSell(
        id: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"remainingAmountToSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [id], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    restartAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"restartAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    safeEngine(): Promise<string>
    safeEngine(multicall: true): MulticallRequest<string>
    safeEngine(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"safeEngine","outputs":[{"internalType":"contract SAFEEngineLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    settleAuction(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"settleAuction","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    startAuction(
        forgoneCollateralReceiver: string,
        auctionIncomeRecipient: string,
        amountToRaise: BigNumberish,
        amountToSell: BigNumberish,
        initialBid: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"forgoneCollateralReceiver","type":"address"},{"internalType":"address","name":"auctionIncomeRecipient","type":"address"},{"internalType":"uint256","name":"amountToRaise","type":"uint256"},{"internalType":"uint256","name":"amountToSell","type":"uint256"},{"internalType":"uint256","name":"initialBid","type":"uint256"}],"name":"startAuction","outputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            forgoneCollateralReceiver,
            auctionIncomeRecipient,
            amountToRaise,
            amountToSell,
            initialBid,
        ])
    }

    terminateAuctionPrematurely(id: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"terminateAuctionPrematurely","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [id])
    }

    totalAuctionLength(): Promise<number>
    totalAuctionLength(multicall: true): MulticallRequest<number>
    totalAuctionLength(
        multicall?: true
    ): Promise<number> | MulticallRequest<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalAuctionLength","outputs":[{"internalType":"uint48","name":"","type":"uint48"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
