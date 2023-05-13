// All keys are mandatory
export type ContractKey =
    | 'ETH_FROM'
    | 'STARTING_BLOCK_NUMBER'
    | 'PROXY_DEPLOYER'
    | 'COIN_TYPE'
    | 'GOVERNANCE_TYPE'
    | 'MULTICALL'
    | 'FAUCET'
    | 'GEB_MULTISIG'
    | 'GEB_MULTISIG_PROXY'
    | 'GEB_DEPLOY'
    | 'GEB_PROT'
    | 'PROTOCOL_TOKEN_AUTHORITY'
    | 'GEB_PAUSE_AUTHORITY'
    | 'GEB_POLLING_EMITTER'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_PAUSE'
    | 'GEB_PAUSE_PROXY'
    | 'GEB_GOV_ACTIONS'
    | 'GEB_COIN'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_ESM'
    | 'GEB_ESM_TOKEN_BURNER'
    | 'PROXY_ACTIONS'
    | 'PROXY_ACTIONS_GLOBAL_SETTLEMENT'
    | 'SAFE_MANAGER'
    | 'GET_SAFES'
    | 'FSM_GOV_INTERFACE'
    //| 'PROXY_FACTORY'
    | 'PROXY_REGISTRY'
    | 'ETH'
    | 'MEDIANIZER_ETH'
    | 'FEED_SECURITY_MODULE_ETH'
    | 'FSM_WRAPPER_ETH'
    | 'GEB_JOIN_ETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_A'
    | 'PROXY_PAUSE_ACTIONS'
    | 'PROXY_PAUSE_SCHEDULE_ACTIONS'
    | 'PROXY_DEPLOYER'
    | 'UNISWAP_FACTORY'
    | 'UNISWAP_ROUTER'
    | 'GEB_DS_COMPARE'
    | 'GEB_TX_MANAGER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_SETTER_RELAYER'
    | 'MEDIANIZER_RAI'
    | 'MEDIANIZER_RAI_REWARDS_RELAYER'
    | 'GEB_RRFM_CALCULATOR'
    | 'GEB_DUMMY_RRFM_CALCULATOR'
    | 'PROXY_ACTIONS_INCENTIVES'
    | 'SPOT_RAI'
    | 'SPOT_FEED_SECURITY_MODULE_RAI'
    | 'GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A'
    | 'GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY'
    | 'GEB_COIN_UNISWAP_POOL'
    | 'GEB_INCENTIVES_MINER'
    | 'LEVERAGE_PROXY_ACTION'
    | 'PROXY_DEBT_AUCTION_ACTIONS'
    | 'PROXY_SURPLUS_AUCTION_ACTIONS'
    | 'GEB_STAKED_TOKEN_PROXY_ACTIONS'
    | 'PROXY_SAVIOUR_ACTIONS'
    | 'GEB_SINGLE_CEILING_SETTER'
    | 'MERKLE_DISTRIBUTOR_FACTORY'
    | 'COLLATERAL_AUCTION_THROTTLER'
    | 'SAFE_SAVIOUR_REGISTRY'
    | 'ESM_THRESHOLD_SETTER'
    | 'GEB_UNISWAP_SAVIOUR_LIQUIDITY_MANAGER'
    | 'GEB_SAVIOUR_CRATIO_SETTER'
    | 'GEB_COIN_ETH_UNISWAP_V2_POOL_SAVIOUR'
    | 'DEBT_POPPER_REWARDS'
    | 'GEB_UNISWAP_TWO_TRANCHE_MANAGER'
    | 'GEB_COIN_UNISWAP_V3_POOL'
    | 'GEB_STAKING'
    | 'GEB_STAKED_PROT'
    | 'GEB_STAKING_TOKEN'
    | 'GEB_STAKING_AUCTION_HOUSE'
    | 'GEB_STAKING_REWARDS_ESCROW'
    | 'GEB_DEBT_FLOOR_ADJUSTER'
    | 'GEB_DEBT_AUCTION_INITIAL_PARAM_SETTER'
    | 'GEB_AUTO_SURPLUS_AUCTIONED'
    | 'GEB_AUTO_SURPLUS_BUFFER'
    | 'GEB_STAKED_TOKENS_TO_KEEP_SETTER'
    | 'GEB_STAKE_RECYCLING_TRIGGER'
    | 'GEB_STAKE_RECYCLING_SURPLUS_AUCTION_HOUSE'
    | 'GEB_COIN_CURVE_V1_MAX_SAVIOUR'
    | 'GEB_YEARN_CURVE_MAX_SAVIOUR'

// All keys are mandatory
export type MultiCollateralContractKey =
    | 'ETH_FROM'
    | 'STARTING_BLOCK_NUMBER'
    | 'PROXY_DEPLOYER'
    | 'COIN_TYPE'
    | 'GOVERNANCE_TYPE'
    | 'MULTICALL'
    | 'FAUCET'
    | 'GEB_MULTISIG'
    | 'GEB_MULTISIG_PROXY'
    | 'GEB_DEPLOY'
    | 'GEB_PROT'
    | 'GEB_PROT_EMITTER'
    | 'GEB_PINGER_ABSTRACTOR'
    | 'GEB_DEBT_REWARDS'
    | 'GEB_DEBT_REWARD_DRIPPER'
    | 'PROTOCOL_TOKEN_AUTHORITY'
    | 'GEB_PAUSE_AUTHORITY'
    | 'GEB_SAFE_ENGINE'
    | 'GEB_TAX_COLLECTOR'
    | 'GEB_LIQUIDATION_ENGINE'
    | 'GEB_ACCOUNTING_ENGINE'
    | 'GEB_COIN_JOIN'
    | 'GEB_SURPLUS_AUCTION_HOUSE'
    | 'GEB_DEBT_AUCTION_HOUSE'
    | 'GEB_COIN_ETH_INCENTIVES_UNI_PAIR'
    | 'GEB_BUNNI_INCENTIVES_TOKEN'
    | 'BUNNI_HUB'
    | 'GEB_LIQUIDITY_REWARDS'
    | 'GEB_LIQUIDITY_REWARD_DRIPPER'
    | 'GEB_PAUSE'
    | 'GEB_PAUSE_PROXY'
    | 'GEB_GOV_ACTIONS'
    | 'GEB_COIN'
    | 'GEB_ORACLE_RELAYER'
    | 'GEB_GLOBAL_SETTLEMENT'
    | 'GEB_STABILITY_FEE_TREASURY'
    | 'GEB_ESM'
    | 'GEB_ESM_TOKEN_BURNER'
    | 'PROXY_ACTIONS'
    | 'PROXY_ACTIONS_INCENTIVES'
    | 'PROXY_ACTIONS_GLOBAL_SETTLEMENT'
    | 'SAFE_MANAGER'
    | 'GET_SAFES'
    //| 'FSM_GOV_INTERFACE'
    //| 'PROXY_FACTORY'
    | 'PROXY_REGISTRY'
    | 'ETH'
    | 'COLLATERAL_ORACLE_ETH'
    | 'FEED_SECURITY_MODULE_ETH'
    | 'GEB_JOIN_ETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_A'
    | 'GEB_JOIN_ETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_B'
    | 'GEB_JOIN_ETH_C'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_C'
    | 'WSTETH'
    | 'COLLATERAL_ORACLE_ETH'
    | 'FEED_SECURITY_MODULE_WSTETH'
    | 'GEB_JOIN_WSTETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_WSTETH_A'
    | 'GEB_JOIN_WSTETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_WSTETH_B'
    | 'RETH'
    | 'COLLATERAL_ORACLE_RETH'
    | 'FEED_SECURITY_MODULE_RETH'
    | 'GEB_JOIN_RETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_RETH_A'
    | 'GEB_JOIN_RETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_RETH_B'
    | 'RAI'
    | 'COLLATERAL_ORACLE_RAI'
    | 'FEED_SECURITY_MODULE_RAI'
    | 'GEB_JOIN_RAI_A'
    | 'COLLATERAL_AUCTION_HOUSE_RAI_A'
    //| 'PROXY_PAUSE_ACTIONS'
    //| 'PROXY_PAUSE_SCHEDULE_ACTIONS'
    | 'PROXY_DEPLOYER'
    //| 'UNISWAP_FACTORY'
    //| 'UNISWAP_ROUTER'
    //| 'GEB_DS_COMPARE'
    //| 'GEB_TX_MANAGER'
    | 'GEB_RRFM_SETTER'
    | 'GEB_RRFM_SETTER_RELAYER'
    //| 'MEDIANIZER_RAI'
    //| 'MEDIANIZER_RAI_REWARDS_RELAYER'
    | 'GEB_RRFM_CALCULATOR'
    //| 'GEB_DUMMY_RRFM_CALCULATOR'
    //| 'PROXY_ACTIONS_INCENTIVES'
    //| 'SPOT_RAI'
    //| 'SPOT_FEED_SECURITY_MODULE_RAI'
    //| 'GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A'
    //| 'GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY'
    //| 'GEB_COIN_UNISWAP_POOL'
    //| 'GEB_INCENTIVES_MINER'
    | 'LEVERAGE_PROXY_ACTION'
    //| 'PROXY_DEBT_AUCTION_ACTIONS'
    //| 'PROXY_SURPLUS_AUCTION_ACTIONS'
    //| 'GEB_STAKED_TOKEN_PROXY_ACTIONS'
    //| 'PROXY_SAVIOUR_ACTIONS'
    //| 'GEB_SINGLE_CEILING_SETTER'
    //| 'MERKLE_DISTRIBUTOR_FACTORY'
    //| 'COLLATERAL_AUCTION_THROTTLER'
    //| 'SAFE_SAVIOUR_REGISTRY'
    //| 'ESM_THRESHOLD_SETTER'
    //| 'GEB_UNISWAP_SAVIOUR_LIQUIDITY_MANAGER'
    //| 'GEB_SAVIOUR_CRATIO_SETTER'
    //| 'GEB_COIN_ETH_UNISWAP_V2_POOL_SAVIOUR'
    | 'DEBT_POPPER_REWARDS'
    //| 'GEB_UNISWAP_TWO_TRANCHE_MANAGER'
    //| 'GEB_COIN_UNISWAP_V3_POOL'
    //| 'GEB_STAKING'
    //| 'GEB_STAKED_PROT'
    //| 'GEB_STAKING_TOKEN'
    //| 'GEB_STAKING_AUCTION_HOUSE'
    //| 'GEB_STAKING_REWARDS_ESCROW'
    //| 'GEB_DEBT_FLOOR_ADJUSTER'
    //| 'GEB_DEBT_AUCTION_INITIAL_PARAM_SETTER'
    //| 'GEB_AUTO_SURPLUS_AUCTIONED'
    //| 'GEB_AUTO_SURPLUS_BUFFER'
    //| 'GEB_STAKED_TOKENS_TO_KEEP_SETTER'
    //| 'GEB_STAKE_RECYCLING_TRIGGER'
    //| 'GEB_STAKE_RECYCLING_SURPLUS_AUCTION_HOUSE'
    //| 'GEB_COIN_CURVE_V1_MAX_SAVIOUR'
    //| 'GEB_YEARN_CURVE_MAX_SAVIOUR'
    | 'SURPLUS_AUCTION_RECEIVER'
    | 'SYSTEM_COIN_ORACLE'
    | 'GEB_ESM_THRESHOLD_SETTER'
    | 'COLLATERAL_ORACLE_ETH'
    | 'COLLATERAL_ORACLE_WSTETH'
    | 'FEED_SECURITY_MODULE_WSTETH'
    | 'WSTETH'
    | 'COLLATERAL_ORACLE_RETH'
    | 'FEED_SECURITY_MODULE_RETH'
    | 'RETH'
    | 'COLLATERAL_ORACLE_RAI'
    | 'FEED_SECURITY_MODULE_RAI'
    | 'RAI'
    | 'PAUSE_EXECUTOR'
    | 'GEB_JOIN_ETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_A'
    | 'GEB_JOIN_ETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_B'
    | 'GEB_JOIN_ETH_C'
    | 'COLLATERAL_AUCTION_HOUSE_ETH_C'
    | 'GEB_JOIN_WSTETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_WSTETH_A'
    | 'GEB_JOIN_WSTETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_WSTETH_B'
    | 'GEB_JOIN_RETH_A'
    | 'COLLATERAL_AUCTION_HOUSE_RETH_A'
    | 'GEB_JOIN_RETH_B'
    | 'COLLATERAL_AUCTION_HOUSE_RETH_B'
    | 'GEB_JOIN_RAI_A'
    | 'COLLATERAL_AUCTION_HOUSE_RAI_A'

export type ContractList = {
    [key in ContractKey]: string
}

export type MultiCollateralContractList = {
    [key in MultiCollateralContractKey]: string
}

export declare type GebDeployment = 'mainnet' | 'local' | ContractList

export declare type MultiCollateralGebDeployment =
    | 'goerli'
    | 'mainnet'
    | 'local'
    | MultiCollateralContractList

// prettier-ignore
export const LOCAL_ADDRESSES: ContractList = {
    "ETH_FROM": "0x7BCd5C864a0aC07EFee60a1A18f9d5c99Ff7fD4d",
    "STARTING_BLOCK_NUMBER": "23275958",
    "PROXY_DEPLOYER": "0x3D223a697b7ca376c8289431d4946ebD26CA80ae",
    "COIN_TYPE": "INDEX",
    "GOVERNANCE_TYPE": "MULTISIG-SAFE",
    "MULTICALL": "0x551283ecB1257B5aE0A4b2DFe42e06E5F29b8068",
    "FAUCET": "0x0000000000000000000000000000000000000000",
    "GEB_MULTISIG": "0x5CCFc908D9810E32DDC6B1Df1f24c67A2Cfcfd83",
    "GEB_MULTISIG_PROXY": "0xDcceA20B82f43BDDaa55dB54a40C031C9948e296",
    "GEB_DEPLOY": "0x5feC3771419d0D2A027854e41de62722d9182c1d",
    "GEB_PROT": "0x6e6eA84bb2fcE17AfCE8e1117DdC708142ef51c9",
    "PROTOCOL_TOKEN_AUTHORITY": "0xacB478e8e657fb1eF78Ad3dF3B537466642f9faD",
    "GEB_PAUSE_AUTHORITY": "0x68BE18B496Fb2472E4bD05dF8cC6d566C401be9B",
    "GEB_POLLING_EMITTER": "0x5Bc73aff8aADdD3A340a61DeaE885205088AAe68",
    "GEB_SAFE_ENGINE": "0x7f63fE955fFF8EA474d990f1Fc8979f2C650edbE",
    "GEB_TAX_COLLECTOR": "0xc1a94C5ad9FCD79b03F79B34d8C0B0C8192fdc16",
    "GEB_LIQUIDATION_ENGINE": "0x75A807a667FbcB303f46c0F8Ca45fdfEF8fdC9AC",
    "GEB_ACCOUNTING_ENGINE": "0x6073E8FE874B53732b5DdD469a2De4047f33C64B",
    "GEB_COIN_JOIN": "0x7d4fe9659D80970097E604727a2BA3F094B00758",
    "GEB_SURPLUS_AUCTION_HOUSE": "0xCdaA2ec0975eD41202E1078b21a4833E414f6379",
    "GEB_DEBT_AUCTION_HOUSE": "0x6AcE594C5A421E468c13715AD62A183200C320a6",
    "GEB_PAUSE": "0x2ef5240F19B45C02c6eb53211e034bD504Ea1f82",
    "GEB_PAUSE_PROXY": "0xe074d33128CecaA74ef137cF2ACAB353843e7821",
    "GEB_GOV_ACTIONS": "0x9Dc31eCDf2553d28ffc615B74f7d1D4B7C65EBc8",
    "GEB_COIN": "0x76b06a2f6dF6f0514e7BEC52a9AfB3f603b477CD",
    "GEB_ORACLE_RELAYER": "0xE5Ae4E49bEA485B5E5172EE6b1F99243cB15225c",
    "GEB_GLOBAL_SETTLEMENT": "0x9cc56ae3fbf4feebb428b981a787d31f039b3fc5",
    "GEB_STABILITY_FEE_TREASURY": "0xE8B3b96D632D7257639de137FB6aD191F0515c8d",
    "GEB_ESM": "0xe3Ea20bDeF87Bb75162CF79eB491243eF790DFa8",
    "GEB_ESM_TOKEN_BURNER": "0x41d4D7AB0a80864A59acc7A25b5e6bDD07E7FFB3",
    "GEB_RRFM_CALCULATOR": "0xDCa42df4C02DC16dbA80f4893203F91fADbC5018",
    "GEB_DUMMY_RRFM_CALCULATOR": "0x750f2b976F8e233AFcCDee2f8213996cB7D3D798",
    "GEB_RRFM_SETTER": "0x97533CD0c5997bce2504378CB29a091830de0F94",
    "GEB_RRFM_SETTER_RELAYER": "0xED26c78563f98f60B718f7d39e9BFB03A725b015",
    "PROXY_ACTIONS": "0x938291470A786f73Ae69A4E67246E3396D1118eC",
    "PROXY_ACTIONS_INCENTIVES": "0x3D36CA69b16f31C8F5E4f391Df95Ef5eC4ab663f",
    "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0x771f6CA88935989A635981E42dE00B8cfa1258d0",
    "PROXY_DEBT_AUCTION_ACTIONS": "0x1B921381621826Ff3a9A2C240e7F2F83fC5F5C62",
    "PROXY_SURPLUS_AUCTION_ACTIONS": "0xcc1e243b4C280BfdB9AeFe49F1bF85072C3dDf5B",
    "GEB_STAKED_TOKEN_PROXY_ACTIONS": "0xE2F560Cd0E3115dA27fE2b2B620F8e86dAeeb40f",
    "PROXY_SAVIOUR_ACTIONS": "0xD9a9F95FA771f6BF19E664Fe6B1D5Ae52C230A46",
    "SAFE_MANAGER": "0x807C8eCb73d9c8203d2b1369E678098B9370F2EA",
    "GET_SAFES": "0x702dcf4a8C3bBBd243477D5704fc45F2762D3826",
    "FSM_GOV_INTERFACE": "0x355DA9a2A54007A850e823651a29CFF8f0afdC02",
    //"PROXY_FACTORY": "0xe11E3b391F7E8bC47247866aF32AF67Dd58Dc800",
    "PROXY_REGISTRY": "0x64A436ae831C1672AE81F674CAb8B6775df3475C",
    "MEDIANIZER_RAI": "0xcede0Fa68bCCc0910d5355725BfDb7AdAfC7Aeb3",
    "MEDIANIZER_RAI_REWARDS_RELAYER": "0x6f2ae2ed721e2b0cb5254eff4e0982b3fb812b56",
    "SPOT_RAI": "0xFDba7b009C096f2b38CdDfd746644bBAEdE06922",
    "SPOT_FEED_SECURITY_MODULE_RAI": "0x0000000000000000000000000000000000000000",
    "ETH": "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    "MEDIANIZER_ETH": "0x395A96E956164A0C76759a686ebC6296fe5Ee6f9",
    "FEED_SECURITY_MODULE_ETH": "0xD047A920140390b16A0aB8A77c4aa2FCBa5C6675",
    "FSM_WRAPPER_ETH": "0x656590A7C9aD09319134C2b9B956945d8Cb955B1",
    "GEB_JOIN_ETH_A": "0xad4AB4Cb7b8aDC45Bf2873507fC8700f3dFB9Dd3",
    "COLLATERAL_AUCTION_HOUSE_ETH_A": "0xC72Ad1D01D7c0E19934677Cb60bE99AEc8A22e46",
    "GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A": "0x9cC49b574070379B71817Aa34643CB78Ad90A932",
    "GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY": "0xe29fEfa1ECD4b1Ca55deC29A7EfDBc622998FD99",
    "PROXY_PAUSE_ACTIONS": "0xfbD93C8E9c428447ccb8fE386A8de1df2075c962",
    "PROXY_PAUSE_SCHEDULE_ACTIONS": "0xFde9047Ec24166d2d2F9522f69aF81DF478dd276",
    "GEB_INCENTIVES_MINER": "0xEB03d9ACdd445f7DfA914eE99aC73Bd6888677EC",
    "UNISWAP_FACTORY": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UNISWAP_ROUTER": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "GEB_DS_COMPARE": "0xde1766FE0D4A00f1C45875EB76D819E9A37585b1",
    "GEB_TX_MANAGER": "0x3876f196A072533A5262Af485c64Fa9B50951991",
    "GEB_COIN_UNISWAP_POOL": "0x052AE8b0F7E5c610937920e46ED265c2063Cb7B8",
    "GEB_COIN_UNISWAP_V3_POOL": "0xE25Df12AA3d86118E5Fcfd6cf573fBA7648A2f2D",
    "GEB_SINGLE_CEILING_SETTER": "0x8637682C5f7EF0A60Ed685Cf335aEC747991EfFb",
    "SAFE_SAVIOUR_REGISTRY": "0xB19bc2e13Bd6BAeeE8c0D8282387221D7f9b8833",
    "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
    "MERKLE_DISTRIBUTOR_FACTORY": "0x11614138187314448fBbBA4c7094E4d5eA0dc1f7",
    "COLLATERAL_AUCTION_THROTTLER": "0xB64a4106bF6ACf5128b5010F37aC1AFE6868aB1d",
    "ESM_THRESHOLD_SETTER": "0x18cd95e59fff3fef4a6cbf82d1bfc8e572b44749",
    "DEBT_POPPER_REWARDS": "0x488d76dB8767c9c78e99473530CEc2112d12b60b",
    "GEB_UNISWAP_SAVIOUR_LIQUIDITY_MANAGER": "0x387f9BD28F906CD63155F3094c2e0A2c3Aa56B81",
    "GEB_SAVIOUR_CRATIO_SETTER": "0x78AFBE751d3C3fcb6c60d62E1900c1ae80BA26A4",
    "GEB_COIN_ETH_UNISWAP_V2_POOL_SAVIOUR": "0x6a25F6dD623cA6e534108EFb3DF9e9E485DD46fb",
    "GEB_COIN_CURVE_V1_MAX_SAVIOUR" : "0x33ac6e64c0a6fc1cf5f2a486fc0bb287cae4a541",
    "GEB_UNISWAP_TWO_TRANCHE_MANAGER": "0x1675FE1e0192B9eb8fCC9127c983Bb3dAcA36A69",
    "GEB_STAKING": "0x9A40f84B2dE91b69622fF9132F0E8d30881Ef749",
    "GEB_STAKED_PROT": "0x4c4b5B97f28bcb7698C1FFC2c01F494ACa639094",
    "GEB_STAKING_TOKEN": "0x392708e11ab3ce8a4746bba467306d80ba49513e",
    "GEB_STAKING_AUCTION_HOUSE": "0x63e5455824F23e1a0d6157F4C6f400A782Ab9eF1",
    "GEB_DEBT_FLOOR_ADJUSTER": "0xf79cc27b8DCf9A945187F860912bF4D7985e6722",
    "GEB_STAKING_REWARDS_ESCROW": "0x7b954d88cFf6929F540f309836f9d24933953e1a",
    "GEB_DEBT_AUCTION_INITIAL_PARAM_SETTER": "0x0000000000000000000000000000000000000000",
    "GEB_AUTO_SURPLUS_AUCTIONED": "0x0000000000000000000000000000000000000000",
    "GEB_AUTO_SURPLUS_BUFFER": "0x0000000000000000000000000000000000000000",
    "GEB_STAKED_TOKENS_TO_KEEP_SETTER": "0x0000000000000000000000000000000000000000",
    "GEB_STAKE_RECYCLING_SURPLUS_AUCTION_HOUSE": "0x0000000000000000000000000000000000000000",
    "GEB_STAKE_RECYCLING_TRIGGER": "0x0000000000000000000000000000000000000000",
    "GEB_YEARN_CURVE_MAX_SAVIOUR": "0xd6892A2DF85955B75279afEEe2D38E276F372F35",
    
}

// prettier-ignore
export const MAINNET_ADDRESSES: ContractList = {
    "ETH_FROM": "0x7FAfc11677649DB6AbFEC127B4B776D585520ae1",
    "STARTING_BLOCK_NUMBER": "11848304",
    "PROXY_DEPLOYER": "0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4",
    "COIN_TYPE": "INDEX",
    "GOVERNANCE_TYPE": "MULTISIG-SAFE",
    "MULTICALL": "0x51812e07497586ce025D798Bb44b6d11bBEe3a01",
    "FAUCET": "0x0000000000000000000000000000000000000000",
    "GEB_MULTISIG": "0x427A277eA53e25143B3b509C684aA4D0EB8bA01b",
    "GEB_MULTISIG_PROXY": "0x2695b1dC32899c07d177A287f006b6569216a5a1",
    "GEB_DEPLOY": "0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f",
    "GEB_PROT": "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
    "PROTOCOL_TOKEN_AUTHORITY": "0xcb8479840A5576B1cafBb3FA7276e04Df122FDc7",
    "GEB_PAUSE_AUTHORITY": "0x1490a828957f1E23491c8d69273d684B15c6E25A",
    "GEB_POLLING_EMITTER": "0xf7Da963B88194a9bc6775e93d39c70c6e3f04f6F",
    "GEB_SAFE_ENGINE": "0xCC88a9d330da1133Df3A7bD823B95e52511A6962",
    "GEB_TAX_COLLECTOR": "0xcDB05aEda142a1B0D6044C09C64e4226c1a281EB",
    "GEB_LIQUIDATION_ENGINE": "0x4fFbAA89d648079Faafc7852dE49EA1dc92f9976",
    "GEB_ACCOUNTING_ENGINE": "0xcEe6Aa1aB47d0Fb0f24f51A3072EC16E20F90fcE",
    "GEB_COIN_JOIN": "0x0A5653CCa4DB1B6E265F47CAf6969e64f1CFdC45",
    "GEB_SURPLUS_AUCTION_HOUSE": "0x4EEfDaE928ca97817302242a851f317Be1B85C90",
    "GEB_DEBT_AUCTION_HOUSE": "0x1896adBE708bF91158748B3F33738Ba497A69e8f",
    "GEB_PAUSE": "0x2cDE6A1147B0EE61726b86d83Fd548401B1162c7",
    "GEB_PAUSE_PROXY": "0xa57A4e6170930ac547C147CdF26aE4682FA8262E",
    "GEB_GOV_ACTIONS": "0xD0a2068D337d082d8289856F9238a570BeB2e302",
    "GEB_COIN": "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
    "GEB_ORACLE_RELAYER": "0x4ed9C0dCa0479bC64d8f4EB3007126D5791f7851",
    "GEB_GLOBAL_SETTLEMENT": "0xee4cf96e5359d9619197fd82b6ef2a9eae7b91e1",
    "GEB_STABILITY_FEE_TREASURY": "0x83533fdd3285f48204215E9CF38C785371258E76",
    "GEB_ESM": "0xa33Ea2Ac39902d4A206D6A1F8D38c7330C80f094",
    "GEB_ESM_TOKEN_BURNER": "0xB10409FC293F987841964C4FcFEf887D9ece799B",
    "GEB_RRFM_CALCULATOR": "0x5CC4878eA3E6323FdA34b3D28551E1543DEe54C6",
    "GEB_DUMMY_RRFM_CALCULATOR": "0x9F02ddBFb4B045Df83D45c4d644027FBD7d72A6D",
    "GEB_RRFM_SETTER": "0x7acfc14dbf2decd1c9213db32ae7784626daeb48",
    "GEB_RRFM_SETTER_RELAYER": "0xd52da90c20c4610fef8faade2a1281ffa54eb6fb",
    "PROXY_ACTIONS": "0x880CECbC56F48bCE5E0eF4070017C0a4270F64Ed",
    "PROXY_ACTIONS_INCENTIVES": "0x88A77b8Ff53329f88B8B6F9e29835FEc287349e0",
    "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0x17b5d9914194a08c7Ef14451BA15E8aE4f92Cb93",
    "PROXY_DEBT_AUCTION_ACTIONS": "0x943C6Bb9FD652f6e4a9dA32894075e5aBECAd394",
    "PROXY_SURPLUS_AUCTION_ACTIONS": "0x16B0BF0Bf031A3691f4bD600e5340fEDd149C0ED",
    "GEB_STAKED_TOKEN_PROXY_ACTIONS": "0x0000000000000000000000000000000000000000",
    "PROXY_SAVIOUR_ACTIONS": "0x8bcb98529ACf08580F23e35912566143E3f9B370",
    "SAFE_MANAGER": "0xEfe0B4cA532769a3AE758fD82E1426a03A94F185",
    "GET_SAFES": "0xdf4BC9aA98cC8eCd90Ba2BEe73aD4a1a9C8d202B",
    "FSM_GOV_INTERFACE": "0xe24F8B30fd28c90462c9BbC87A9A2a823636F533",
    //"PROXY_FACTORY": "0xA26e15C895EFc0616177B7c1e7270A4C7D51C997",
    "PROXY_REGISTRY": "0x4678f0a6958e4D2Bc4F1BAF7Bc52E8F3564f3fE4",
    "MEDIANIZER_RAI": "0xFbF4849a06F6e6F53EcB31D2f8BD61aA7874b268",
    "MEDIANIZER_RAI_REWARDS_RELAYER": "0xE8063b122Bef35d6723E33DBb3446092877C685",
    "SPOT_RAI": "0x7235a0094eD56eB2Bd0de168d307C8990233645f",
    "SPOT_FEED_SECURITY_MODULE_RAI": "0x0000000000000000000000000000000000000000",
    "ETH": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "MEDIANIZER_ETH": "0xb825e25856bD98b3f2FAF2aEb6Cb8742B38C4025",
    "FEED_SECURITY_MODULE_ETH": "0xD4A0E3EC2A937E7CCa4A192756a8439A8BF4bA91",
    "FSM_WRAPPER_ETH": "0x105b857583346E250FBD04a57ce0E491EB204BA3",
    "GEB_JOIN_ETH_A": "0x2D3cD7b81c93f188F3CB8aD87c8Acc73d6226e3A",
    "COLLATERAL_AUCTION_HOUSE_ETH_A": "0x7fFdF1Dfef2bfeE32054C8E922959fB235679aDE",
    "GEB_UNISWAP_SINGLE_KEEPER_FLASH_PROXY_ETH_A": "0xC2Da0417f2A78Ad100FE092B58Fb10314Bd8F157",
    "GEB_UNISWAP_MULTI_COLLATERAL_KEEPER_FLASH_PROXY": "0x12F906E4854EEDFdB1BD2DAA9100D1C3b0Cb7631",
    "PROXY_PAUSE_ACTIONS": "0x27a54e99dE813CE2E41BAa7F44d1F19FBA22B36D",
    "PROXY_PAUSE_SCHEDULE_ACTIONS": "0x534c3283059Fb3D62a93496a6aba8f97A37dAcCC",
    "GEB_INCENTIVES_MINER": "0xa706d4c39c315288113020f3e2D7e1095e912a20",
    "UNISWAP_FACTORY": "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "UNISWAP_ROUTER": "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    "GEB_DS_COMPARE": "0x10122261ff9520C590c0c3A679b7E3dFC8B09C64",
    "GEB_TX_MANAGER": "0xB7272627825D1cb633f705BC269F8e11126D7A25",
    "GEB_COIN_UNISWAP_POOL": "0x8aE720a71622e824F576b4A8C03031066548A3B1",
    "GEB_COIN_UNISWAP_V3_POOL": "0x0000000000000000000000000000000000000000",
    "GEB_SINGLE_CEILING_SETTER": "0xB2df48A0C4A07031F538353AA35D7fFa24e25eC1",
    "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
    "SAFE_SAVIOUR_REGISTRY": "0x2C6F6784585B45906Fce24f30C99f8ad6d94b5d4",
    "MERKLE_DISTRIBUTOR_FACTORY": "0xb5Ed650eF207e051453B68A2138D7cb67CC85E41",
    "COLLATERAL_AUCTION_THROTTLER": "0x709310eB91d1902A9b5EDEdf793b057f0da8DECb",
    "ESM_THRESHOLD_SETTER": "0x0000000000000000000000000000000000000000",
    "GEB_UNISWAP_SAVIOUR_LIQUIDITY_MANAGER": "0x5D447CbE791E2F4c11d82f1F3E901DEc76f61763",
    "GEB_SAVIOUR_CRATIO_SETTER": "0xD58e867E1548D8294bc6C77585AF4015ab457880",
    "GEB_COIN_ETH_UNISWAP_V2_POOL_SAVIOUR": "0xA9402De5ce3F1E03Be28871b914F77A4dd5e4364",
    "GEB_COIN_CURVE_V1_MAX_SAVIOUR": "0x0000000000000000000000000000000000000000",
    "DEBT_POPPER_REWARDS": "0xe1d5181F0DD039aA4f695d4939d682C4cF874086",
    "GEB_UNISWAP_TWO_TRANCHE_MANAGER": "0x0000000000000000000000000000000000000000",
    "GEB_STAKING": "0x69c6C08B91010c88c95775B6FD768E5b04EFc106",
    "GEB_STAKED_PROT": "0x353EFAC5CaB823A41BC0d6228d7061e92Cf9Ccb0",
    "GEB_STAKING_TOKEN": "0xd6F3768E62Ef92a9798E5A8cEdD2b78907cEceF9",
    "GEB_STAKING_AUCTION_HOUSE": "0x27da9f90255E56c2bcEC5F6360ed260BE70F3ab2",
    "GEB_DEBT_FLOOR_ADJUSTER": "0x0000000000000000000000000000000000000000",
    "GEB_STAKING_REWARDS_ESCROW": "0x8017F897AAaAbD5701b63D819590062A87732Ba0",
    "GEB_DEBT_AUCTION_INITIAL_PARAM_SETTER": "0x840E4e438711962DAc1a0c37B0588C08C92c29A5",
    "GEB_AUTO_SURPLUS_AUCTIONED": "0xfCD7BcC44C3778880AEd0E025fd0aE5f7ce5Ba44",
    "GEB_AUTO_SURPLUS_BUFFER": "0x1450f40E741F2450A95F9579Be93DD63b8407a25",
    "GEB_STAKED_TOKENS_TO_KEEP_SETTER": "0xaa5f19B87cC8F8A17D20f0697F1B37E112930Ae4",
    "GEB_STAKE_RECYCLING_SURPLUS_AUCTION_HOUSE": "0xAe402576187cc68098F74E14253c9816346eb932",
    "GEB_STAKE_RECYCLING_TRIGGER": "0xaE09AFE44fCeA8e93338bdC492A6B038F4092818",
    "GEB_YEARN_CURVE_MAX_SAVIOUR": "0x0000000000000000000000000000000000000000",
    
}

// prettier-ignore
// This deployment doesn't exist. Adding for comptability issues
export const MC_MAINNET_ADDRESSES: MultiCollateralContractList = {
  "STARTING_BLOCK_NUMBER": "11848304",
  "PROXY_DEPLOYER": "0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4",
  "COIN_TYPE": "INDEX",
  "GOVERNANCE_TYPE": "GOVERNOR-BRAVO",
  "MULTICALL": "0x51812e07497586ce025D798Bb44b6d11bBEe3a01",
  "FAUCET": "0x0000000000000000000000000000000000000000",
  "GEB_MULTISIG_PROXY": "0x2695b1dC32899c07d177A287f006b6569216a5a1",
  "GEB_DEPLOY": "0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f",
  "GEB_DEBT_REWARDS": "0xfd5c782529cadbfac29dd7c80ddce8e0db45c688",
  "GEB_DEBT_REWARD_DRIPPER": "0xf33d7047f0e140e77347afd55d4cfd412321ffad",
  "PROXY_ACTIONS_INCENTIVES": "0x3D36CA69b16f31C8F5E4f391Df95Ef5eC4ab663f",
  "GET_SAFES": "0xB165B8efEbB285326f3146B0dA2FF1fa59a78071",

  "GEB_COIN_ETH_INCENTIVES_UNI_PAIR": "0x5d02d1bddec967e0e4211a28fe3889a880fc0ecb",
  "GEB_BUNNI_INCENTIVES_TOKEN": "0xd97C43bB019c03026ec9b9fDd7624D7dF47Cdb9d",
  "BUNNI_HUB": "0xb5087f95643a9a4069471a28d32c569d9bd57fe4",
  "GEB_LIQUIDITY_REWARDS": "0x11378105b356039fC1C264019EF182EbE581e390",
  "GEB_LIQUIDITY_REWARD_DRIPPER": "0x961BAAF20e95B549527a030F23E00A5f00F91D7B",

  "ETH_FROM": "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  "GEB_MULTISIG": "0x0000000000000000000000000000000000000003",
  "SURPLUS_AUCTION_RECEIVER": "0x0000000000000000000000000000000000000001",
  "GEB_PROT_EMITTER": "0x0000000000000000000000000000000000000001",
  "GEB_PINGER_ABSTRACTOR": "0x0000000000000000000000000000000000000001",
  "GEB_PAUSE_AUTHORITY": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  "GEB_PAUSE": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  "GEB_PAUSE_PROXY": "0xCafac3dD18aC6c6e92c921884f9E4176737C052c",
  "GEB_PROT": "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
  "PROTOCOL_TOKEN_AUTHORITY": "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  "GEB_SAFE_ENGINE": "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  "GEB_ORACLE_RELAYER": "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  "GEB_COIN": "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
  "GEB_COIN_JOIN": "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
  "SYSTEM_COIN_ORACLE": "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
  "GEB_TAX_COLLECTOR": "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE",
  "GEB_SURPLUS_AUCTION_HOUSE": "0x3Aa5ebB10DC797CAC828524e59A333d0A371443c",
  "GEB_DEBT_AUCTION_HOUSE": "0x59b670e9fA9D0A427751Af201D676719a970857b",
  "GEB_ACCOUNTING_ENGINE": "0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44",
  "GEB_STABILITY_FEE_TREASURY": "0x4A679253410272dd5232B3Ff7cF5dbB88f295319",
  "GEB_LIQUIDATION_ENGINE": "0x09635F643e140090A9A8Dcd712eD6285858ceBef",
  "GEB_GLOBAL_SETTLEMENT": "0x67d269191c92Caf3cD7723F116c85e6E9bf55933",
  "GEB_ESM_TOKEN_BURNER": "0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690",
  "GEB_ESM_THRESHOLD_SETTER": "0x84eA74d481Ee0A5332c457a4d796187F6Ba67fEB",
  "GEB_ESM": "0x9E545E3C0baAB3E08CdfD552C960A1050f373042",
  "GEB_RRFM_CALCULATOR": "0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8",
  "GEB_RRFM_SETTER_RELAYER": "0xf5059a5D33d5853360D16C683c16e67980206f36",
  "GEB_RRFM_SETTER": "0x998abeb3E57409262aE5b751f60747921B33613E",
  "GEB_GOV_ACTIONS": "0x4826533B4897376654Bb4d4AD88B7faFD0C98528",
  "PROXY_ACTIONS": "0x99bbA657f2BbC93c02D617f8bA121cB8Fc104Acf",
  "SAFE_MANAGER": "0x0E801D84Fa97b50751Dbf25036d067dCf18858bF",
  //"PROXY_FACTORY": "0x8f86403A4DE0BB5791fa46B8e795C547942fE4Cf",
  "PROXY_REGISTRY": "0x9d4454B023096f34B160D6B654540c56A1F81688",
  "PROXY_ACTIONS_GLOBAL_SETTLEMENT": "0x0000000000000000000000000000000000000000",
  "LEVERAGE_PROXY_ACTION": "0x0000000000000000000000000000000000000000",
  "DEBT_POPPER_REWARDS": "0x5eb3Bc0a489C5A8288765d2336659EbCA68FCd00",
  "COLLATERAL_ORACLE_ETH": "0x4c5859f0F772848b2D91F1D83E2Fe57935348029",
  "FEED_SECURITY_MODULE_ETH": '0xb7278a61aa25c888815afc32ad3cc52ff24fe575',
  "ETH": "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1",
  "COLLATERAL_ORACLE_WSTETH": "0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3",
  "FEED_SECURITY_MODULE_WSTETH": "0xc351628EB244ec633d5f21fBD6621e1a683B1181",
  "WSTETH": "0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc",
  "COLLATERAL_ORACLE_RETH": "0xB0D4afd8879eD9F52b28595d31B441D079B2Ca07",
  "FEED_SECURITY_MODULE_RETH": "0x5081a39b8A5f0E35a8D959395a630b68B74Dd30f",
  "RETH": "0xdbC43Ba45381e02825b14322cDdd15eC4B3164E6",
  "COLLATERAL_ORACLE_RAI": "0x4C4a2f8c81640e47606d3fd77B353E87Ba015584",
  "FEED_SECURITY_MODULE_RAI": "0xD8a5a9b31c3C0232E196d518E89Fd8bF83AcAd43",
  "RAI": "0x51A1ceB83B83F1985a81C295d1fF28Afef186E02",
  "PAUSE_EXECUTOR": "0x8198f5d8F8CfFE8f9C413d98a0A55aEB8ab9FbB7",
  "GEB_JOIN_ETH_A": "0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB",
  "COLLATERAL_AUCTION_HOUSE_ETH_A": "0x172076E0166D1F9Cc711C77Adf8488051744980C",
  "GEB_JOIN_ETH_B": "0xD84379CEae14AA33C123Af12424A37803F885889",
  "COLLATERAL_AUCTION_HOUSE_ETH_B": "0xfbC22278A96299D91d41C453234d97b4F5Eb9B2d",
  "GEB_JOIN_ETH_C": "0x1c85638e118b37167e9298c2268758e058DdfDA0",
  "COLLATERAL_AUCTION_HOUSE_ETH_C": "0x4C2F7092C2aE51D986bEFEe378e50BD4dB99C901",
  "GEB_JOIN_WSTETH_A": "0x4631BCAbD6dF18D94796344963cB60d44a4136b6",
  "COLLATERAL_AUCTION_HOUSE_WSTETH_A": "0xA4899D35897033b927acFCf422bc745916139776",
  "GEB_JOIN_WSTETH_B": "0x5c74c94173F05dA1720953407cbb920F3DF9f887",
  "COLLATERAL_AUCTION_HOUSE_WSTETH_B": "0xe8D2A1E88c91DCd5433208d4152Cc4F399a7e91d",
  "GEB_JOIN_RETH_A": "0x4b6aB5F819A515382B0dEB6935D793817bB4af28",
  "COLLATERAL_AUCTION_HOUSE_RETH_A": "0xD5ac451B0c50B9476107823Af206eD814a2e2580",
  "GEB_JOIN_RETH_B": "0xc96304e3c037f81dA488ed9dEa1D8F2a48278a75",
  "COLLATERAL_AUCTION_HOUSE_RETH_B": "0xD0141E899a65C95a556fE2B27e5982A6DE7fDD7A",
  "GEB_JOIN_RAI_A": "0xA7c59f010700930003b33aB25a7a0679C860f29c",
  "COLLATERAL_AUCTION_HOUSE_RAI_A": "0x276C216D241856199A83bf27b2286659e5b877D3"
}
export const MC_GOERLI_ADDRESSES: MultiCollateralContractList = {
    STARTING_BLOCK_NUMBER: '8538100',
    PROXY_DEPLOYER: '0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4',
    COIN_TYPE: 'INDEX',
    GOVERNANCE_TYPE: 'GOVERNOR-BRAVO',
    FAUCET: '0x0000000000000000000000000000000000000000',
    GEB_MULTISIG_PROXY: '0x2695b1dC32899c07d177A287f006b6569216a5a1',
    GEB_DEPLOY: '0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f',
    LEVERAGE_PROXY_ACTION: '0x0000000000000000000000000000000000000000',
    PROXY_ACTIONS_GLOBAL_SETTLEMENT:
        '0x0000000000000000000000000000000000000000',
    ETH_FROM: '0xe75b8a5ba47ca7458cbc4db1dd52df5e2ebc42cf',
    GEB_MULTISIG: '0x336281cb29d22914242edfc4467e1f458fb378c7',
    SURPLUS_AUCTION_RECEIVER: '0x0000000000000000000000000000000000000001',
    MULTICALL: '0x91be09d1cc00fdc2e5e22b2e6dfb9898a647347a',
    GEB_PAUSE_AUTHORITY: '0x3ffe98fdaf23361eb42feb95056d31fc20dcd047',
    GEB_PAUSE: '0x0801cc1f563bc3ec5c924810bd3a54bc9ca8800a',
    GEB_PAUSE_PROXY: '0x4de48f6de6374659fd375c48de3c529d10125355',
    GEB_PROT: '0xa6fc01e3f539dafed4b7aa3593938425706a4daa',
    PROTOCOL_TOKEN_AUTHORITY: '0xaab1243f94c432ea362d606af6f69091fd61bf3c',
    GEB_PROT_EMITTER: '0x0bebe3aa6fa0a3d558f9acd8d0318e1409b86c31',
    GEB_SAFE_ENGINE: '0x39b2bfee7cd3329f213ec1ce464f415efe743d4b',
    GEB_DEBT_REWARDS: '0xdedbcdfdc5dde913c81d8362648688e715cce07e',
    GEB_DEBT_REWARD_DRIPPER: '0x8b55d0fe9710aac0a16ddbec6b8ae0d5482b3112',
    GEB_ORACLE_RELAYER: '0x14f4ba19e4fda58bfa30c11d0390c6027c155d5f',
    GEB_COIN: '0x752001fd47365d7fb84a5fdb0b3212f56d5ee4e0',
    GEB_COIN_JOIN: '0x213935c1fed5ad9a04326be5a50dc9c0c0f3f65a',
    SYSTEM_COIN_ORACLE: '0xbdcce39b84a2fe6412db32974b2f75561174eb08',
    GEB_TAX_COLLECTOR: '0xb0581eee3864236f8f481042616460f0d3b23a08',
    GEB_SURPLUS_AUCTION_HOUSE: '0xe236678af30273dcb2ef0a92352d9549225dc282',
    GEB_DEBT_AUCTION_HOUSE: '0xac5bc1cd1e9165bcb2193dd3d721c91c0b17322b',
    GEB_ACCOUNTING_ENGINE: '0x806980971f4aa78cf785c71515452487a449ca81',
    GEB_STABILITY_FEE_TREASURY: '0xe99939177675066504e566bb437d19e639306ac0',
    GEB_LIQUIDATION_ENGINE: '0xadda40bde5413904fa3c4280aa06bc42d2282f8b',
    GEB_GLOBAL_SETTLEMENT: '0x075b28fc5c90a3a2f7dca5bdce15fd7749bb4791',
    GEB_ESM_TOKEN_BURNER: '0x73eb1f34643eae7bc79fc0e70302fed23f593ed8',
    GEB_ESM_THRESHOLD_SETTER: '0x87a714cbb679f49916784abe602b9f0a19e08264',
    GEB_ESM: '0x7a137f5d7c02aee72d487a071d3e45067c53e78d',
    GEB_RRFM_CALCULATOR: '0xcf5c2662917d38c136cc3f00e9a0d2d1bd6d9df2',
    GEB_RRFM_SETTER_RELAYER: '0xcb34ea19fb5e6836c835fd0c0274db6bb940afad',
    GEB_RRFM_SETTER: '0xb8631e852ccfdc4d52c9c656985c8198b16aa999',
    GEB_GOV_ACTIONS: '0xfcfb32119cb18cb413c433b18cfee9778bfa98b0',
    PROXY_ACTIONS: '0x8feb9cd2f09c8bb7be283eeca2ea48b9706f13cc',
    PROXY_ACTIONS_INCENTIVES: '0xfe69aa27cf68862d8c17ae5242c439dd6a037210',
    SAFE_MANAGER: '0x4c6943c1be8f2515efab5e6b12ec45c4ff94f1f2',
    PROXY_REGISTRY: '0x0d3b5cfdbfa2390bb8edd7b420291f28836ac556',
    DEBT_POPPER_REWARDS: '0xb0ce3c92ca31120f46adf33ebd479f7a123fe3e8',
    GEB_COIN_ETH_INCENTIVES_UNI_PAIR:
        '0xce733dc269af4c2181b53fb8c431839f096d0431',
    GEB_BUNNI_INCENTIVES_TOKEN: '0x8beca7c7f177fea036707e9a16220a057210fb0d',
    BUNNI_HUB: '0xb5087f95643a9a4069471a28d32c569d9bd57fe4',
    GEB_LIQUIDITY_REWARDS: '0x9e9009f7876318c359b3f5f8f5c8b575b72731d8',
    GEB_LIQUIDITY_REWARD_DRIPPER: '0x8b55d0fe9710aac0a16ddbec6b8ae0d5482b3112',
    COLLATERAL_ORACLE_ETH: '0xfce9f3e16a291f0e7e47190c581c2447bfb5eba9',
    FEED_SECURITY_MODULE_ETH: '0xc798f55c99d81a21317ec39a5b3f1e02cc20d81c',
    ETH: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    COLLATERAL_ORACLE_WSTETH: '0x862aba9d6b11bf164a4b53d7d8d65a5346989030',
    FEED_SECURITY_MODULE_WSTETH: '0x80c216a4187da3e315254bef5e0ea0d6a37d4c95',
    WSTETH: '0xf000322855db5f20e1702b136b2845cc7addd25f',
    COLLATERAL_ORACLE_RETH: '0xb3e6dc592764ca07209be495dd5a3cc785a5da51',
    FEED_SECURITY_MODULE_RETH: '0x2c9ebd7de7c31d378cd0842837b66ce893f679ae',
    RETH: '0x6a41a5856f2cf481fcf84610de6a90e3fb57d514',
    COLLATERAL_ORACLE_RAI: '0xc3183ef5a3668113f3beab91e3be6d1b51365517',
    FEED_SECURITY_MODULE_RAI: '0x3b4bd08f0aa38038eb65719665c299452e2f9b36',
    RAI: '0x8c96beb6a913945107730f85acef21c240c21985',
    PAUSE_EXECUTOR: '0xce36ff4188a4bdf879b3a6b84edeef1c3ade8ee2',
    GEB_PINGER_ABSTRACTOR: '0xb8cf8fa4d3746e0cbfc07290f368bd90980d2697',
    GEB_JOIN_ETH_A: '0x374dbdb92b5952b4475161a347560105b9732a73',
    COLLATERAL_AUCTION_HOUSE_ETH_A:
        '0x69d38db212b4a06696173fcc00c60a70456aac05',
    GEB_JOIN_ETH_B: '0x37dd209de868264f4ae7b16988a920b5322f30ad',
    COLLATERAL_AUCTION_HOUSE_ETH_B:
        '0xf7e8199664a7b03f2e28cea0411eb5bc2b3c27cd',
    GEB_JOIN_ETH_C: '0x7aa339b539453abaa5eccf2eea74969bf70b4ba9',
    COLLATERAL_AUCTION_HOUSE_ETH_C:
        '0x3ebb52785df9e1c9a1789e329874732b4ed415cc',
    GEB_JOIN_WSTETH_A: '0xa2fad7f9173df8e38f215f2a1dff45beffe17484',
    COLLATERAL_AUCTION_HOUSE_WSTETH_A:
        '0xcf1e169a562e48599b9f7d9c143dcf9dffe40955',
    GEB_JOIN_WSTETH_B: '0xd2382c11f152d82a6f81090b0953a5e58c405804',
    COLLATERAL_AUCTION_HOUSE_WSTETH_B:
        '0x92db5281b4d9c2ed57589e725b4ea29159d7ab1b',
    GEB_JOIN_RETH_A: '0x310236063561bdc8dbf53ee5df5b2c871b44e3cf',
    COLLATERAL_AUCTION_HOUSE_RETH_A:
        '0x2d15958a058df29f5cefef0d00681ce82093a77e',
    GEB_JOIN_RETH_B: '0x62ffc348bacba996cd77d9a68aa464225a384d10',
    COLLATERAL_AUCTION_HOUSE_RETH_B:
        '0xa6c7e6d27d8978c1f0a981a4801a0bf2e972c41d',
    GEB_JOIN_RAI_A: '0x8098ca838751f81fa4e71d7efda97495965070cb',
    COLLATERAL_AUCTION_HOUSE_RAI_A:
        '0xfb89fca4ec7b4bb4ef0e678659d2d6eca0690321',
    GET_SAFES: '0x1631065f2aef6e24581c5ca37b8fc193301314d0',
}

export const MC_LOCAL_ADDRESSES: MultiCollateralContractList = {
    STARTING_BLOCK_NUMBER: '1',
    PROXY_DEPLOYER: '0x631e38D6Dc0F4A26F6BE0d3d0E4ebA3d02033aB4',
    COIN_TYPE: 'INDEX',
    GOVERNANCE_TYPE: 'GOVERNOR-BRAVO',
    FAUCET: '0x0000000000000000000000000000000000000000',
    GEB_MULTISIG_PROXY: '0x2695b1dC32899c07d177A287f006b6569216a5a1',
    GEB_DEPLOY: '0x24AcC85528e6dd5B9C297fb8821522D36B1Ae09f',

    GEB_COIN_ETH_INCENTIVES_UNI_PAIR:
        '0x5d02d1bddec967e0e4211a28fe3889a880fc0ecb',
    GEB_BUNNI_INCENTIVES_TOKEN: '0xd97C43bB019c03026ec9b9fDd7624D7dF47Cdb9d',
    BUNNI_HUB: '0xb5087f95643a9a4069471a28d32c569d9bd57fe4',
    GEB_LIQUIDITY_REWARDS: '0x11378105b356039fC1C264019EF182EbE581e390',
    GEB_LIQUIDITY_REWARD_DRIPPER: '0x961BAAF20e95B549527a030F23E00A5f00F91D7B',

    GEB_PROT_EMITTER: '0x0000000000000000000000000000000000000001',
    GEB_PINGER_ABSTRACTOR: '0x0000000000000000000000000000000000000001',
    PROXY_ACTIONS_INCENTIVES: '0x3D36CA69b16f31C8F5E4f391Df95Ef5eC4ab663f',
    GET_SAFES: '0xB165B8efEbB285326f3146B0dA2FF1fa59a78071',
    ETH_FROM: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
    GEB_MULTISIG: '0x336281cB29D22914242edFC4467E1f458FB378c7',
    SURPLUS_AUCTION_RECEIVER: '0x0000000000000000000000000000000000000001',
    MULTICALL: '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    GEB_PAUSE_AUTHORITY: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    GEB_PAUSE: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    GEB_PAUSE_PROXY: '0x75537828f2ce51be7289709686A69CbFDbB714F1',
    GEB_PROT: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    PROTOCOL_TOKEN_AUTHORITY: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    GEB_SAFE_ENGINE: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
    GEB_DEBT_REWARDS: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
    GEB_DEBT_REWARD_DRIPPER: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
    GEB_ORACLE_RELAYER: '0x0B306BF915C4d645ff596e518fAf3F9669b97016',
    GEB_COIN: '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE',
    GEB_COIN_JOIN: '0x3Aa5ebB10DC797CAC828524e59A333d0A371443c',
    SYSTEM_COIN_ORACLE: '0x59b670e9fA9D0A427751Af201D676719a970857b',
    GEB_TAX_COLLECTOR: '0x322813Fd9A801c5507c9de605d63CEA4f2CE6c44',
    GEB_SURPLUS_AUCTION_HOUSE: '0x4A679253410272dd5232B3Ff7cF5dbB88f295319',
    GEB_DEBT_AUCTION_HOUSE: '0x09635F643e140090A9A8Dcd712eD6285858ceBef',
    GEB_ACCOUNTING_ENGINE: '0x67d269191c92Caf3cD7723F116c85e6E9bf55933',
    GEB_STABILITY_FEE_TREASURY: '0xc3e53F4d16Ae77Db1c982e75a937B9f60FE63690',
    GEB_LIQUIDATION_ENGINE: '0x9E545E3C0baAB3E08CdfD552C960A1050f373042',
    GEB_GLOBAL_SETTLEMENT: '0x1613beB3B2C4f22Ee086B2b38C1476A3cE7f78E8',
    GEB_ESM_TOKEN_BURNER: '0xf5059a5D33d5853360D16C683c16e67980206f36',
    GEB_ESM_THRESHOLD_SETTER: '0x95401dc811bb5740090279Ba06cfA8fcF6113778',
    GEB_ESM: '0x998abeb3E57409262aE5b751f60747921B33613E',
    GEB_RRFM_CALCULATOR: '0x4826533B4897376654Bb4d4AD88B7faFD0C98528',
    GEB_RRFM_SETTER_RELAYER: '0x0E801D84Fa97b50751Dbf25036d067dCf18858bF',
    GEB_RRFM_SETTER: '0x9d4454B023096f34B160D6B654540c56A1F81688',
    GEB_GOV_ACTIONS: '0x36C02dA8a0983159322a80FFE9F24b1acfF8B570',
    PROXY_ACTIONS: '0x809d550fca64d94Bd9F66E60752A544199cfAC3D',
    SAFE_MANAGER: '0x4c5859f0F772848b2D91F1D83E2Fe57935348029',
    //PROXY_FACTORY: '0x1291Be112d480055DaFd8a610b7d1e203891C274',
    PROXY_REGISTRY: '0x5f3f1dBD7B74C6B46e8c44f98792A1dAf8d69154',
    DEBT_POPPER_REWARDS: '0xb7278A61aa25c888815aFC32Ad3cC52fF24fE575',
    COLLATERAL_ORACLE_ETH: '0x2bdCC0de6bE1f7D2ee689a0342D76F52E8EFABa3',
    FEED_SECURITY_MODULE_ETH: '0xc351628EB244ec633d5f21fBD6621e1a683B1181',
    ETH: '0xcbEAF3BDe82155F56486Fb5a1072cb8baAf547cc',
    COLLATERAL_ORACLE_WSTETH: '0x1429859428C0aBc9C2C47C8Ee9FBaf82cFA0F20f',
    FEED_SECURITY_MODULE_WSTETH: '0x922D6956C99E12DFeB3224DEA977D0939758A1Fe',
    WSTETH: '0x1fA02b2d6A771842690194Cf62D91bdd92BfE28d',
    COLLATERAL_ORACLE_RETH: '0x04C89607413713Ec9775E14b954286519d836FEf',
    FEED_SECURITY_MODULE_RETH: '0x2E2Ed0Cfd3AD2f1d34481277b3204d807Ca2F8c2',
    RETH: '0xDC11f7E700A4c898AE5CAddB1082cFfa76512aDD',
    COLLATERAL_ORACLE_RAI: '0x36b58F5C1969B7b6591D752ea6F5486D069010AB',
    FEED_SECURITY_MODULE_RAI: '0x202CCe504e04bEd6fC0521238dDf04Bc9E8E15aB',
    RAI: '0x172076E0166D1F9Cc711C77Adf8488051744980C',
    PAUSE_EXECUTOR: '0xBEc49fA140aCaA83533fB00A2BB19bDdd0290f25',
    GEB_JOIN_ETH_A: '0x2B0d36FACD61B71CC05ab8F3D2355ec3631C0dd5',
    COLLATERAL_AUCTION_HOUSE_ETH_A:
        '0x46b142DD1E924FAb83eCc3c08e4D46E82f005e0E',
    GEB_JOIN_ETH_B: '0x367761085BF3C12e5DA2Df99AC6E1a824612b8fb',
    COLLATERAL_AUCTION_HOUSE_ETH_B:
        '0x7A9Ec1d04904907De0ED7b6839CcdD59c3716AC9',
    GEB_JOIN_ETH_C: '0x86A2EE8FAf9A840F7a2c64CA3d51209F9A02081D',
    COLLATERAL_AUCTION_HOUSE_ETH_C:
        '0xf953b3A269d80e3eB0F2947630Da976B896A8C5b',
    GEB_JOIN_WSTETH_A: '0x720472c8ce72c2A2D711333e064ABD3E6BbEAdd3',
    COLLATERAL_AUCTION_HOUSE_WSTETH_A:
        '0x5067457698Fd6Fa1C6964e416b3f42713513B3dD',
    GEB_JOIN_WSTETH_B: '0xCace1b78160AE76398F486c8a18044da0d66d86D',
    COLLATERAL_AUCTION_HOUSE_WSTETH_B:
        '0xF8e31cb472bc70500f08Cd84917E5A1912Ec8397',
    GEB_JOIN_RETH_A: '0x34B40BA116d5Dec75548a9e9A8f15411461E8c70',
    COLLATERAL_AUCTION_HOUSE_RETH_A:
        '0x07882Ae1ecB7429a84f1D53048d35c4bB2056877',
    GEB_JOIN_RETH_B: '0xfaAddC93baf78e89DCf37bA67943E1bE8F37Bb8c',
    COLLATERAL_AUCTION_HOUSE_RETH_B:
        '0x3347B4d90ebe72BeFb30444C9966B2B990aE9FcB',
    GEB_JOIN_RAI_A: '0xffa7CA1AEEEbBc30C874d32C7e22F052BbEa0429',
    COLLATERAL_AUCTION_HOUSE_RAI_A:
        '0xab16A69A5a8c12C732e0DEFF4BE56A70bb64c926',

    PROXY_ACTIONS_GLOBAL_SETTLEMENT:
        '0x0000000000000000000000000000000000000000',
    LEVERAGE_PROXY_ACTION: '0x0000000000000000000000000000000000000000',
}

export const getAddressList = (network: GebDeployment): ContractList => {
    if (network === 'mainnet') {
        return MAINNET_ADDRESSES
    } else if (network === 'local') {
        return LOCAL_ADDRESSES
    } else {
        return network
    }
}

export const getMcAddressList = (
    network: MultiCollateralGebDeployment
): MultiCollateralContractList => {
    if (network === 'mainnet') {
        return MC_MAINNET_ADDRESSES
    } else if (network === 'goerli') {
        return MC_GOERLI_ADDRESSES
    } else if (network === 'local') {
        return MC_LOCAL_ADDRESSES
    } else {
        return network
    }
}
