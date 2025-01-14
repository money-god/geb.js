/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BytesLike } from '@ethersproject/bytes'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class StakingRewardsFactory extends BaseContractAPI {
    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

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

    deploy(
        stakingToken: string,
        rewardAmount: BigNumberish,
        duration: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"stakingToken","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"duration","type":"uint256"}],"name":"deploy","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            stakingToken,
            rewardAmount,
            duration,
        ])
    }

    lastCampaignEndTime(address: string): Promise<BigNumber>
    lastCampaignEndTime(
        address: string,
        multicall: true
    ): MulticallRequest<BigNumber>
    lastCampaignEndTime(
        address: string,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastCampaignEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [address], multicall)
    }

    modifyParameters(
        campaign: BigNumberish,
        parameter: BytesLike,
        val: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"campaign","type":"uint256"},{"internalType":"bytes32","name":"parameter","type":"bytes32"},{"internalType":"uint256","name":"val","type":"uint256"}],"name":"modifyParameters","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [campaign, parameter, val])
    }

    notifyRewardAmount(campaignNumber: BigNumberish): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"campaignNumber","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [campaignNumber])
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    rewardsToken(): Promise<string>
    rewardsToken(multicall: true): MulticallRequest<string>
    rewardsToken(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    stakingRewardsInfo(
        uinteger: BigNumberish
    ): Promise<{
        stakingRewards: string
        rewardAmount: BigNumber
    }>
    stakingRewardsInfo(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<{
        stakingRewards: string
        rewardAmount: BigNumber
    }>
    stakingRewardsInfo(
        uinteger: BigNumberish,
        multicall?: true
    ):
        | Promise<{
              stakingRewards: string
              rewardAmount: BigNumber
          }>
        | MulticallRequest<{
              stakingRewards: string
              rewardAmount: BigNumber
          }> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingRewardsInfo","outputs":[{"internalType":"address","name":"stakingRewards","type":"address"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    stakingTokens(uinteger: BigNumberish): Promise<string>
    stakingTokens(
        uinteger: BigNumberish,
        multicall: true
    ): MulticallRequest<string>
    stakingTokens(
        uinteger: BigNumberish,
        multicall?: true
    ): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingTokens","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [uinteger], multicall)
    }

    totalCampaignCount(): Promise<BigNumber>
    totalCampaignCount(multicall: true): MulticallRequest<BigNumber>
    totalCampaignCount(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalCampaignCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    transferTokenOut(
        token: string,
        receiver: string,
        amount: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTokenOut","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [token, receiver, amount])
    }
}
