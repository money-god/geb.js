/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { BytesLike } from '@ethersproject/bytes'
import { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import { BaseContractAPI } from '@reflexer-finance/geb-provider'

export class Coin<TX_OBJ> extends BaseContractAPI<TX_OBJ> {
    DOMAIN_SEPARATOR(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    PERMIT_TYPEHASH(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    addAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    allowance(arg0: string, arg1: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0, arg1])
    }

    approve(usr: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [usr, amount])
    }

    authorizedAccounts(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"authorizedAccounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    balanceOf(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    burn(usr: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [usr, amount])
    }

    decimals(): Promise<number> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    mint(usr: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [usr, amount])
    }

    move(src: string, dst: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"move","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [src, dst, amount])
    }

    name(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    nonces(arg0: string): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [arg0])
    }

    permit(
        holder: string,
        spender: string,
        nonce: BigNumberish,
        expiry: BigNumberish,
        allowed: boolean,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"holder","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"bool","name":"allowed","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [
            holder,
            spender,
            nonce,
            expiry,
            allowed,
            v,
            r,
            s,
        ])
    }

    pull(usr: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"pull","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [usr, amount])
    }

    push(usr: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"usr","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"push","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [usr, amount])
    }

    removeAuthorization(account: string): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeAuthorization","outputs":[],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [account])
    }

    symbol(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    totalSupply(): Promise<BigNumber> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }

    transfer(dst: string, amount: BigNumberish): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [dst, amount])
    }

    transferFrom(
        src: string,
        dst: string,
        amount: BigNumberish
    ): Promise<TX_OBJ> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}

        return this.chainProvider.ethSend(this.address, abi, [src, dst, amount])
    }

    version(): Promise<string> {
        // prettier-ignore
        // @ts-ignore
        const abi = {"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}

        return this.chainProvider.ethCall(this.address, abi, [])
    }
}
