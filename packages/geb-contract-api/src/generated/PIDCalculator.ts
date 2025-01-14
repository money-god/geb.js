/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BaseContractAPI } from '@money-god/geb-contract-base'
import { MulticallRequest } from '@money-god/geb-contract-base'
import { TransactionRequest } from '@money-god/geb-contract-base'
import { BigNumberish } from '@ethersproject/bignumber'
import { BigNumber } from '@ethersproject/bignumber'

export class PidCalculator extends BaseContractAPI {
    computeRate(
        uinteger1: BigNumberish,
        uinteger2: BigNumberish,
        uinteger3: BigNumberish
    ): TransactionRequest {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"computeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}

        return this.getTransactionRequest(abi, [
            uinteger1,
            uinteger2,
            uinteger3,
        ])
    }

    pscl(): Promise<BigNumber>
    pscl(multicall: true): MulticallRequest<BigNumber>
    pscl(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"pscl","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }

    rt(
        uinteger1: BigNumberish,
        uinteger2: BigNumberish,
        uinteger3: BigNumberish
    ): Promise<BigNumber>
    rt(
        uinteger1: BigNumberish,
        uinteger2: BigNumberish,
        uinteger3: BigNumberish,
        multicall: true
    ): MulticallRequest<BigNumber>
    rt(
        uinteger1: BigNumberish,
        uinteger2: BigNumberish,
        uinteger3: BigNumberish,
        multicall?: true
    ): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"rt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(
            abi,
            [uinteger1, uinteger2, uinteger3],
            multicall
        )
    }

    tlv(): Promise<BigNumber>
    tlv(multicall: true): MulticallRequest<BigNumber>
    tlv(multicall?: true): Promise<BigNumber> | MulticallRequest<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"tlv","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.ethCallOrMulticall(abi, [], multicall)
    }
}
