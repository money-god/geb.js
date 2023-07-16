import {
    AccountingEngine,
    BunniHub,
    TaxCollector,
    LiquidationEngine,
    OracleRelayer,
    GlobalSettlement,
    DebtAuctionHouse,
    DebtRewards,
    LiquidityRewards,
    Coin,
    GebSafeManager,
    GetSafes,
    BasicCollateralJoin,
    CoinJoin,
    GebProxyRegistry,
    IncreasingDiscountCollateralAuctionHouse,
    Weth9,
    SafeEngine,
    ChainlinkRelayer,
    UniswapConsecutiveSlotsMedianRaiusd,
    ExternallyFundedOsm,
    StabilityFeeTreasury,
    DsDelegateToken,
    StakingRewardsFactory,
    UniswapV2Pair,
    BurningSurplusAuctionHouse,
    UniswapLiquidityManagerLike,
    NativeUnderlyingUniswapSafeSaviour,
    SaviourCRatioSetter,
    UniswapV3Pool,
    GebUniswapV3TwoTrancheManager,
    GebLenderFirstResort,
    StakedTokenAuctionHouse,
    DsDelegateTokenNoTransfer,
    StakingRewardsEscrow,
    YearnCurveMaxSafeSaviour,
    ProtEmitter,
    Sablier,
} from '.'
import {
    GebProviderInterface,
    MultiCollateralGebDeployment,
    GebDeployment,
    getMcAddressList,
    getAddressList,
} from '@money-god/geb-contract-base'
import { PiRateSetter } from './generated/PIRateSetter'
import { PRawPerSecondCalculator } from './generated/PRawPerSecondCalculator'
import { MerkleDistributorFactory } from './generated/MerkleDistributorFactory'
import { Erc20 } from './generated/ERC20'

// Container class used to instantiate most GEB contracts
// prettier-ignore
export class ContractApis {
    public safeEngine: SafeEngine
    public accountingEngine: AccountingEngine
    public taxCollector: TaxCollector
    public liquidationEngine: LiquidationEngine
    public oracleRelayer: OracleRelayer
    public globalSettlement: GlobalSettlement
    public debtAuctionHouse: DebtAuctionHouse
    public surplusAuctionHouse: BurningSurplusAuctionHouse
    public stabilityFeeTreasury: StabilityFeeTreasury
    public safeManager: GebSafeManager
    public getSafes: GetSafes
    public joinETH_A: BasicCollateralJoin
    public joinCoin: CoinJoin
    public coin: Coin
    public proxyRegistry: GebProxyRegistry
    public collateralAuctionHouseETH_A: IncreasingDiscountCollateralAuctionHouse
    public protocolToken: DsDelegateToken
    public medianizerEth: ChainlinkRelayer
    public medianizerCoin: UniswapConsecutiveSlotsMedianRaiusd
    public rateSetter: PiRateSetter
    public piCalculator: PRawPerSecondCalculator
    public fsmEth: ExternallyFundedOsm
    public weth: Weth9
    public stakingRewardFactory: StakingRewardsFactory
    public uniswapPairCoinEth: UniswapV2Pair
    public merkleDistributorFactory: MerkleDistributorFactory
    public coinNativeUniswapSaviour: NativeUnderlyingUniswapSafeSaviour
    public yearnCurveMaxSafeSaviour: YearnCurveMaxSafeSaviour
    public saviourCRatioSetter: SaviourCRatioSetter
    public saviourUniswapLiquidityManager: UniswapLiquidityManagerLike
    public uniswapV3PairCoinEth: UniswapV3Pool
    public uniswapV3TwoTrancheLiquidityManager: GebUniswapV3TwoTrancheManager
    public stakingFirstResort: GebLenderFirstResort
    public stakingAuctionHouse: StakedTokenAuctionHouse
    public stakingToken: Erc20
    public stakedProt: DsDelegateTokenNoTransfer
    public stakingEscrow: StakingRewardsEscrow

    constructor(
        network: GebDeployment,
        public chainProvider: GebProviderInterface
    )
    {
        // Set the contract address list
        let addressList = getAddressList(network)

        this.safeEngine = new SafeEngine(addressList.GEB_SAFE_ENGINE, this.chainProvider)
        this.accountingEngine = new AccountingEngine(addressList.GEB_ACCOUNTING_ENGINE, this.chainProvider)
        this.taxCollector = new TaxCollector(addressList.GEB_TAX_COLLECTOR, this.chainProvider)
        this.liquidationEngine = new LiquidationEngine(addressList.GEB_LIQUIDATION_ENGINE, this.chainProvider)
        this.oracleRelayer = new OracleRelayer(addressList.GEB_ORACLE_RELAYER, this.chainProvider)
        this.globalSettlement = new GlobalSettlement(addressList.GEB_GLOBAL_SETTLEMENT, this.chainProvider)
        this.debtAuctionHouse = new DebtAuctionHouse(addressList.GEB_DEBT_AUCTION_HOUSE, this.chainProvider)
        this.surplusAuctionHouse = new BurningSurplusAuctionHouse(addressList.GEB_SURPLUS_AUCTION_HOUSE, this.chainProvider)
        this.stabilityFeeTreasury = new StabilityFeeTreasury(addressList.GEB_STABILITY_FEE_TREASURY, this.chainProvider)
        this.safeManager = new GebSafeManager(addressList.SAFE_MANAGER, this.chainProvider)
        this.getSafes = new GetSafes(addressList.GET_SAFES, this.chainProvider)
        this.joinETH_A = new BasicCollateralJoin(addressList.GEB_JOIN_ETH_A, this.chainProvider)
        this.joinCoin = new CoinJoin(addressList.GEB_COIN_JOIN, this.chainProvider)
        this.coin = new Coin(addressList.GEB_COIN, this.chainProvider)
        this.proxyRegistry = new GebProxyRegistry(addressList.PROXY_REGISTRY, this.chainProvider)
        this.collateralAuctionHouseETH_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_ETH_A, this.chainProvider)
        this.medianizerEth = new ChainlinkRelayer(addressList.MEDIANIZER_ETH, this.chainProvider)
        this.medianizerCoin = new UniswapConsecutiveSlotsMedianRaiusd(addressList.MEDIANIZER_RAI, this.chainProvider)
        this.rateSetter = new PiRateSetter(addressList.GEB_RRFM_SETTER, this.chainProvider)
        this.piCalculator = new PRawPerSecondCalculator(addressList.GEB_RRFM_CALCULATOR, this.chainProvider)
        this.fsmEth = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_ETH, this.chainProvider)
        this.weth = new Weth9(addressList.ETH, this.chainProvider)
        this.protocolToken = new DsDelegateToken(addressList.GEB_PROT, this.chainProvider)
        this.stakingRewardFactory = new StakingRewardsFactory(addressList.GEB_INCENTIVES_MINER, this.chainProvider)
        this.uniswapPairCoinEth = new UniswapV2Pair(addressList.GEB_COIN_UNISWAP_POOL, this.chainProvider)
        this.merkleDistributorFactory = new MerkleDistributorFactory(addressList.MERKLE_DISTRIBUTOR_FACTORY, this.chainProvider)
        this.coinNativeUniswapSaviour = new NativeUnderlyingUniswapSafeSaviour(addressList.GEB_COIN_ETH_UNISWAP_V2_POOL_SAVIOUR, this.chainProvider)
        this.yearnCurveMaxSafeSaviour = new YearnCurveMaxSafeSaviour(addressList.GEB_YEARN_CURVE_MAX_SAVIOUR, this.chainProvider)
        this.saviourCRatioSetter = new SaviourCRatioSetter(addressList.GEB_SAVIOUR_CRATIO_SETTER, this.chainProvider)
        this.saviourUniswapLiquidityManager = new UniswapLiquidityManagerLike(addressList.GEB_UNISWAP_SAVIOUR_LIQUIDITY_MANAGER, this.chainProvider)
        this.uniswapV3PairCoinEth = new UniswapV3Pool(addressList.GEB_COIN_UNISWAP_V3_POOL, this.chainProvider)
        this.uniswapV3TwoTrancheLiquidityManager = new GebUniswapV3TwoTrancheManager(addressList.GEB_UNISWAP_TWO_TRANCHE_MANAGER, this.chainProvider)
        this.stakingFirstResort = new GebLenderFirstResort(addressList.GEB_STAKING, this.chainProvider)
        this.stakingAuctionHouse = new StakedTokenAuctionHouse(addressList.GEB_STAKING_AUCTION_HOUSE, this.chainProvider)
        this.stakingToken = new Erc20(addressList.GEB_STAKING_TOKEN, this.chainProvider)
        this.stakedProt = new DsDelegateTokenNoTransfer(addressList.GEB_STAKED_PROT, this.chainProvider)
        this.stakingEscrow = new StakingRewardsEscrow(addressList.GEB_STAKING_REWARDS_ESCROW, this.chainProvider)
    }
}

// Container class used to instantiate most MC GEB contracts
// prettier-ignore
export class MultiCollateralContractApis {
    public safeEngine: SafeEngine
    public accountingEngine: AccountingEngine
    public taxCollector: TaxCollector
    public liquidationEngine: LiquidationEngine
    public oracleRelayer: OracleRelayer
    public globalSettlement: GlobalSettlement
    public debtAuctionHouse: DebtAuctionHouse
    public debtRewards: DebtRewards
    public liquidityRewards: LiquidityRewards
    public surplusAuctionHouse: BurningSurplusAuctionHouse
    public stabilityFeeTreasury: StabilityFeeTreasury
    public safeManager: GebSafeManager
    public getSafes: GetSafes
    public joinETH_A: BasicCollateralJoin
    public joinETH_B: BasicCollateralJoin
    public joinETH_C: BasicCollateralJoin
    public joinWSTETH_A: BasicCollateralJoin
    public joinWSTETH_B: BasicCollateralJoin
    public joinRETH_A: BasicCollateralJoin
    public joinRETH_B: BasicCollateralJoin
    public joinCBETH_A: BasicCollateralJoin
    public joinCBETH_B: BasicCollateralJoin
    public joinRAI_A: BasicCollateralJoin
    public fsmEth: ExternallyFundedOsm
    public fsmWstEth: ExternallyFundedOsm
    public fsmREth: ExternallyFundedOsm
    public fsmCBEth: ExternallyFundedOsm
    public fsmRai: ExternallyFundedOsm
    public joinCoin: CoinJoin
    public coin: Coin
    public bunniHub: BunniHub
    public bunniToken: Erc20
    public uniswapV3PairCoinEth: UniswapV3Pool
    public proxyRegistry: GebProxyRegistry
    public collateralAuctionHouseETH_A: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseETH_B: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseETH_C: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseWSTETH_A: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseWSTETH_B: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseRETH_A: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseRETH_B: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseCBETH_A: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseCBETH_B: IncreasingDiscountCollateralAuctionHouse
    public collateralAuctionHouseRAI_A: IncreasingDiscountCollateralAuctionHouse
    public protocolToken: DsDelegateToken
    public rateSetter: PiRateSetter
    public piCalculator: PRawPerSecondCalculator
    public weth: Weth9
    public protEmitter: ProtEmitter
    public sablier: Sablier

    constructor(
        network: MultiCollateralGebDeployment,
        public chainProvider: GebProviderInterface
    )
    {
        // Set the contract address list
        let addressList = getMcAddressList(network)

        this.safeEngine = new SafeEngine(addressList.GEB_SAFE_ENGINE, this.chainProvider)
        this.accountingEngine = new AccountingEngine(addressList.GEB_ACCOUNTING_ENGINE, this.chainProvider)
        this.taxCollector = new TaxCollector(addressList.GEB_TAX_COLLECTOR, this.chainProvider)
        this.liquidationEngine = new LiquidationEngine(addressList.GEB_LIQUIDATION_ENGINE, this.chainProvider)
        this.oracleRelayer = new OracleRelayer(addressList.GEB_ORACLE_RELAYER, this.chainProvider)
        this.globalSettlement = new GlobalSettlement(addressList.GEB_GLOBAL_SETTLEMENT, this.chainProvider)
        this.debtAuctionHouse = new DebtAuctionHouse(addressList.GEB_DEBT_AUCTION_HOUSE, this.chainProvider)
        this.debtRewards = new DebtRewards(addressList.GEB_DEBT_REWARDS, this.chainProvider)
        this.liquidityRewards = new LiquidityRewards(addressList.GEB_LIQUIDITY_REWARDS, this.chainProvider)
        this.surplusAuctionHouse = new BurningSurplusAuctionHouse(addressList.GEB_SURPLUS_AUCTION_HOUSE, this.chainProvider)
        this.stabilityFeeTreasury = new StabilityFeeTreasury(addressList.GEB_STABILITY_FEE_TREASURY, this.chainProvider)
        this.safeManager = new GebSafeManager(addressList.SAFE_MANAGER, this.chainProvider)
        this.getSafes = new GetSafes(addressList.GET_SAFES, this.chainProvider)
        this.joinETH_A = new BasicCollateralJoin(addressList.GEB_JOIN_ETH_A, this.chainProvider)
        this.joinETH_B = new BasicCollateralJoin(addressList.GEB_JOIN_ETH_B, this.chainProvider)
        this.joinETH_C = new BasicCollateralJoin(addressList.GEB_JOIN_ETH_C, this.chainProvider)
        this.joinWSTETH_A = new BasicCollateralJoin(addressList.GEB_JOIN_WSTETH_A, this.chainProvider)
        this.joinWSTETH_B = new BasicCollateralJoin(addressList.GEB_JOIN_WSTETH_B, this.chainProvider)
        this.joinRETH_A = new BasicCollateralJoin(addressList.GEB_JOIN_RETH_A, this.chainProvider)
        this.joinRETH_B = new BasicCollateralJoin(addressList.GEB_JOIN_RETH_B, this.chainProvider)
        this.joinCBETH_A = new BasicCollateralJoin(addressList.GEB_JOIN_CBETH_A, this.chainProvider)
        this.joinCBETH_B = new BasicCollateralJoin(addressList.GEB_JOIN_CBETH_B, this.chainProvider)
        this.joinRAI_A = new BasicCollateralJoin(addressList.GEB_JOIN_RAI_A, this.chainProvider)
        this.joinCoin = new CoinJoin(addressList.GEB_COIN_JOIN, this.chainProvider)
        this.coin = new Coin(addressList.GEB_COIN, this.chainProvider)
        this.bunniHub = new BunniHub(addressList.BUNNI_HUB, this.chainProvider)
        this.bunniToken = new Erc20(addressList.GEB_BUNNI_INCENTIVES_TOKEN, this.chainProvider)
        this.uniswapV3PairCoinEth = new UniswapV3Pool(addressList.GEB_COIN_ETH_INCENTIVES_UNI_PAIR, this.chainProvider)
        this.proxyRegistry = new GebProxyRegistry(addressList.PROXY_REGISTRY, this.chainProvider)
        this.protocolToken = new DsDelegateToken(addressList.GEB_PROT, this.chainProvider)
        this.collateralAuctionHouseETH_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_ETH_A, this.chainProvider)
        this.collateralAuctionHouseETH_B = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_ETH_B, this.chainProvider)
        this.collateralAuctionHouseETH_C = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_ETH_C, this.chainProvider)
        this.collateralAuctionHouseWSTETH_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_WSTETH_A, this.chainProvider)
        this.collateralAuctionHouseWSTETH_B = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_WSTETH_B, this.chainProvider)
        this.collateralAuctionHouseRETH_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_RETH_A, this.chainProvider)
        this.collateralAuctionHouseRETH_B = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_RETH_B, this.chainProvider)
        this.collateralAuctionHouseCBETH_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_CBETH_A, this.chainProvider)
        this.collateralAuctionHouseCBETH_B = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_CBETH_B, this.chainProvider)
        this.collateralAuctionHouseRAI_A = new IncreasingDiscountCollateralAuctionHouse(addressList.COLLATERAL_AUCTION_HOUSE_RAI_A, this.chainProvider)
        //this.medianizerCoin = new UniswapConsecutiveSlotsMedianRaiusd(addressList.MEDIANIZER_RAI, this.chainProvider)
        this.rateSetter = new PiRateSetter(addressList.GEB_RRFM_SETTER, this.chainProvider)
        this.piCalculator = new PRawPerSecondCalculator(addressList.GEB_RRFM_CALCULATOR, this.chainProvider)
        this.fsmEth = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_ETH, this.chainProvider)
        this.fsmWstEth = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_WSTETH, this.chainProvider)
        this.fsmREth = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_RETH, this.chainProvider)
        this.fsmCBEth = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_CBETH, this.chainProvider)
        this.fsmRai = new ExternallyFundedOsm(addressList.FEED_SECURITY_MODULE_RAI, this.chainProvider)
        this.weth = new Weth9(addressList.ETH, this.chainProvider)
        this.protEmitter = new ProtEmitter(addressList.GEB_PROT_EMITTER, this.chainProvider)
        this.sablier = new Sablier(addressList.SABLIER, this.chainProvider)
    }
}
