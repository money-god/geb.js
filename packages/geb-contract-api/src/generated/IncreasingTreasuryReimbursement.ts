/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class IncreasingTreasuryReimbursement extends BaseContractAPI {
    RAY(): Promise<BigNumber>
    RAY(multicall: true): MulticallRequest<BigNumber>
    RAY(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"RAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

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

    addAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    addition(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    addition(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    addition(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"addition","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
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

    baseUpdateCallerReward(): Promise<BigNumber>
    baseUpdateCallerReward(multicall: true): MulticallRequest<BigNumber>
    baseUpdateCallerReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"baseUpdateCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    getCallerReward(
        timeOfLastUpdate: BigNumberish,
        defaultDelayBetweenCalls: BigNumberish
    ): Promise<BigNumber>
    getCallerReward(
        timeOfLastUpdate: BigNumberish,
        defaultDelayBetweenCalls: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    getCallerReward(
        timeOfLastUpdate: BigNumberish,
        defaultDelayBetweenCalls: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"timeOfLastUpdate","type":"uint256"},{"internalType":"uint256","name":"defaultDelayBetweenCalls","type":"uint256"}],"name":"getCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [timeOfLastUpdate, defaultDelayBetweenCalls],
            multicall
        )
    }

    maxRewardIncreaseDelay(): Promise<BigNumber>
    maxRewardIncreaseDelay(multicall: true): MulticallRequest<BigNumber>
    maxRewardIncreaseDelay(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"maxRewardIncreaseDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    maxUpdateCallerReward(): Promise<BigNumber>
    maxUpdateCallerReward(multicall: true): MulticallRequest<BigNumber>
    maxUpdateCallerReward(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"maxUpdateCallerReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    minimum(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    minimum(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    minimum(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"minimum","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    multiply(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    multiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    multiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    perSecondCallerRewardIncrease(): Promise<BigNumber>
    perSecondCallerRewardIncrease(multicall: true): MulticallRequest<BigNumber>
    perSecondCallerRewardIncrease(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"perSecondCallerRewardIncrease","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    rad(x: BigNumberish): Promise<BigNumber>
    rad(x: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    rad(
        x: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"rad","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x], multicall)
    }

    ray(x: BigNumberish): Promise<BigNumber>
    ray(x: BigNumberish, multicall: true): MulticallRequest<BigNumber>
    ray(
        x: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"}],"name":"ray","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x], multicall)
    }

    rdivide(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    rdivide(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    rdivide(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"rdivide","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    removeAuthorization(account: string): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [account])
    }

    rmultiply(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    rmultiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    rmultiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"rmultiply","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    rpower(
        x: BigNumberish,
        n: BigNumberish,
        base: BigNumberish
    ): Promise<BigNumber>
    rpower(
        x: BigNumberish,
        n: BigNumberish,
        base: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    rpower(
        x: BigNumberish,
        n: BigNumberish,
        base: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"n","type":"uint256"},{"internalType":"uint256","name":"base","type":"uint256"}],"name":"rpower","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, n, base], multicall)
    }

    subtract(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    subtract(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    subtract(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"subtract","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    treasury(): Promise<string>
    treasury(multicall: true): MulticallRequest<string>
    treasury(multicall?: true): Promise<string> | MulticallRequest<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasury","outputs":[{"internalType":"contract StabilityFeeTreasuryLike","name":"","type":"address"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    treasuryAllowance(): Promise<BigNumber>
    treasuryAllowance(multicall: true): MulticallRequest<BigNumber>
    treasuryAllowance(
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"treasuryAllowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    wdivide(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    wdivide(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    wdivide(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"wdivide","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }

    wmultiply(x: BigNumberish, y: BigNumberish): Promise<BigNumber>
    wmultiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    wmultiply(
        x: BigNumberish,
        y: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"x","type":"uint256"},{"internalType":"uint256","name":"y","type":"uint256"}],"name":"wmultiply","outputs":[{"internalType":"uint256","name":"z","type":"uint256"}],"stateMutability":"pure","type":"function"}

        return this.ethCallOrMulticall(abi, [x, y], multicall)
    }
}
