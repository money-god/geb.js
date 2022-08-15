# Class: Geb

The main package used to interact with the GEB system. Includes [helper functions](geb.md#deployproxy) for safe
 management and the [contract interface object](geb.md#contracts) to directly call smart contracts.

## Constructors


\+ **new Geb**(`network`: MultiCollateralGebDeployment, `provider`: GebProviderInterface | Provider): *[Geb](geb.md)*

*Defined in [packages/geb/src/geb.ts:93](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L93)*

Constructor for the main Geb.js object.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`network` | MultiCollateralGebDeployment | Either `'kovan'`, `'mainnet'`, `'fantom'` or an actual list of contract addresses. |
`provider` | GebProviderInterface &#124; Provider | Either a Ethers.js provider or a Geb provider (support for Web3 will be added in the future)  |

**Returns:** *[Geb](geb.md)*

## Properties

###  contracts

• **contracts**: *MultiCollateralContractApis*

*Defined in [packages/geb/src/geb.ts:91](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L91)*

Object containing all GEB core smart contract instances for direct level interactions. All of the
following contract objects are one-to-one API typed to the underlying smart contracts. Read-only
functions that do not change blockchain state return a promise of the return data. State modifying
function will synchronously return a pre-filled transaction request object:
```
{
  to: "0x123abc.."
  data: "0xabab234ab..."
}
```
This object follow the [TransactionRequest model of ethers.js](https://docs.ethers.io/v5/api/providers/types/#providers-TransactionRequest) (also similar to the
[model used by web.js](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#id84)). The object can
be completed with properties such as ` from `, ` gasPrice `, ` gas ` (gas limit, web3.js ony) or
` gasLimit ` (gas limit, ethers.js only). The object can then be passed to the `sendTransaction` of
[ehters.js](https://docs.ethers.io/v5/api/signer/#Signer-sendTransaction) or
[web3.js](https://web3js.readthedocs.io/en/v1.3.0/web3-eth.html#sendtransaction)

 Example:
 ```typescript
 // Setup geb.js an ethers
 const provider = new ethers.providers.JsonRpcProvider('http://kovan.infura.io/<API KEY>')
 const wallet = new ethers.Wallet('<Private key>', provider)
 const geb = new Geb('kovan', provider)

 // Contract read function: fetch the debt ceiling
 const debtCeiling = await geb.contracts.safeEngine.globalDebtCeiling()

 // State changing function: manualy liquidate a SAFE
 const tx = geb.contracts.liquidationEngine.liquidateSAFE(ETH_A, '0x1234abc...')
 await wallet.sendTransaction(tx) // Send the Ethereum transaction
 ```

Currently the following contracts ae available in this property:
- SAFEEngine
- AccountingEngine
- TaxCollector
- LiquidationEngine
- OracleRelayer
- GlobalSettlement
- DebtAuctionHouse
- PostSettlementSurplusAuctionHouse
- SettlementSurplusAuctioneer
- GebSafeManager
- GetSafes
- BasicCollateralJoin
- CoinJoin
- Coin (System coin ERC20 contract)
- GebProxyRegistry
- IncreasingDiscountCollateralAuctionHouse
- Weth (ERC20)

For detailed information about the functions of each contract we recommend the smart contract
[code](https://github.com/reflexer-labs/geb) and [documentation](https://docs.reflexer.finance/)

## Methods

###  deployProxy

▸ **deployProxy**(): *TransactionRequest*

*Defined in [packages/geb/src/geb.ts:137](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L137)*

Deploy a new proxy owned by the sender.

**Returns:** *TransactionRequest*

___

###  getErc20Contract

▸ **getErc20Contract**(`tokenAddress`: string): *Erc20*

*Defined in [packages/geb/src/geb.ts:265](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L265)*

Returns an object that can be used to interact with an ERC20 token.
Example:
```typescript
const USDCAddress = "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
const USDC = geb.getErc20Contract(USDCAddress)

// Get 0xdefiisawesome's balance
const balance = USDC.balanceOf("0xdefiisawesome..")

// Send 1 USDC to 0xdefiisawesome (USDC is 6 decimals)
const tx = USDC.transfer("0xdefiisawesome..", "1000000")
await wallet.sendTransaction(tx)
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`tokenAddress` | string | Token contract address |

**Returns:** *Erc20*

Erc20

___

###  getGebContract

▸ **getGebContract**‹**T**›(`gebContractClass`: GebContractAPIConstructorInterface‹T›, `address`: string): *T*

*Defined in [packages/geb/src/geb.ts:455](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L455)*

Returns an instance of a specific GEB contract given a Geb contract API class at a specified address

```typescript
import { contracts } from "geb.js"
const safeEngine = geb.getGebContract(contracts.SafeEngine, "0xabcd123..")
const globalDebt = safeEngine.globalDebt()
```

**Type parameters:**

▪ **T**: *BaseContractAPI*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gebContractClass` | GebContractAPIConstructorInterface‹T› | Class from contracts or adminContracts |
`address` | string | Contract address of the instance  |

**Returns:** *T*

___

###  getProxyAction

▸ **getProxyAction**(`ownerAddress`: string): *Promise‹[GebProxyActions](gebproxyactions.md)‹››*

*Defined in [packages/geb/src/geb.ts:125](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L125)*

Given an address, it returns a GebProxyActions object used to execute bundled operations.
Important: This requires that the address deployed a GEB proxy through the proxy registry contract. It will throw a `DOES_NOT_OWN_HAVE_PROXY` error if the address specified does not have a proxy. Use the [deployProxy](geb.md#deployproxy) function to get a new proxy.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ownerAddress` | string | Externally owned user account aka Ethereum address that owns a GEB proxy.  |

**Returns:** *Promise‹[GebProxyActions](gebproxyactions.md)‹››*

___

###  getSafe

▸ **getSafe**(`idOrHandler`: string | number, `collateralType?`: string): *Promise‹[Safe](safe.md)›*

*Defined in [packages/geb/src/geb.ts:145](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L145)*

Get the SAFE object given a `safeManager` id or a `safeEngine` handler address.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`idOrHandler` | string &#124; number | Safe Id or SAFE handler  |
`collateralType?` | string | - |

**Returns:** *Promise‹[Safe](safe.md)›*

___

###  getSafeFromOwner

▸ **getSafeFromOwner**(`address`: string): *Promise‹[Safe](safe.md)[]›*

*Defined in [packages/geb/src/geb.ts:228](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L228)*

Fetch the list of safes owned by an address. This function will fetch safes owned directly
through the safeManager and safes owned through the safe manager by a proxy. Safes owned
directly by the address at the safeEngine level won't appear here.

Note that this function will make a lot of network calls and is therefore very slow. For
front-ends we recommend using pre-indexed data from a source such as the geb-subgraph.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`address` | string |   |

**Returns:** *Promise‹[Safe](safe.md)[]›*

___

###  multiCall

▸ **multiCall**‹**O1**, **O2**, **O3**›(`calls`: [MulticallRequest‹O1›, MulticallRequest‹O2›, MulticallRequest‹O3›]): *Promise‹[O1, O2, O3]›*

*Defined in [packages/geb/src/geb.ts:361](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L361)*

Bundles several read only GEB contract calls into a single RPC request. Useful for front-ends or apps that need to fetch many parameters from contracts but want to minimize network requests and the load on the underlying Ethereum node.
The function takes as input an Array of GEB view contract calls.
**IMPORTANT**: You have to set the `multicall` parameter of the contract function to `true`. It is the always the last function parameter.
Multicall works for all contracts in `Geb.contracts` and can be used with any contract that inherits `BaseContractApi`. Note that it does not support non-view calls (calls that require you pay gas and change blockchain state).

Example:
```typescript
import { ethers } from "ethers"
import { Geb } from "geb.js"

const provider = new ethers.providers.JsonRpcProvider("http://kovan.infura.io/...")
const geb = new Geb("kovan", provider);

const [ globalDebt, collateralInfo ] = await geb.multiCall([
    geb.contracts.safeEngine.globalDebt(true), // !! Note the last parameter set to true.
    geb.contracts.safeEngine.collateralTypes(ETH_A, true),
])

console.log(`Current global debt: ${globalDebt.toString()}`)
console.log(`Current ETH_A debt: ${collateralInfo.debtAmount}`)
```

**Type parameters:**

▪ **O1**

▪ **O2**

▪ **O3**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`calls` | [MulticallRequest‹O1›, MulticallRequest‹O2›, MulticallRequest‹O3›] | Call a read only GEB contract function. The GEB contract object needs to be called with the parameter `multicall` set to `true` as seen in the example above. |

**Returns:** *Promise‹[O1, O2, O3]›*

Promise<T[]> Array with results for the specified requests.

___

### `Static` getGebContract

▸ **getGebContract**‹**T**›(`gebContractClass`: GebContractAPIConstructorInterface‹T›, `address`: string, `provider`: GebProviderInterface | Provider): *T*

*Defined in [packages/geb/src/geb.ts:423](https://github.com/money-god/geb.js/blob/e3ac661/packages/geb/src/geb.ts#L423)*

Returns an instance of a specific geb contract given a Geb contract API class constructor at a specified address

**Type parameters:**

▪ **T**: *BaseContractAPI*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`gebContractClass` | GebContractAPIConstructorInterface‹T› | Class from contracts or adminContracts |
`address` | string | Contract address of the instance |
`provider` | GebProviderInterface &#124; Provider | Either a Ethers.js provider or a Geb provider  |

**Returns:** *T*
