import { BigNumber, FixedNumber } from '@ethersproject/bignumber'
import { ContractApis } from '@reflexer-finance/geb-contract-api'
import { RAY } from '../utils'

/**
 * This object represents a GEB safe. It has the entire SAFE state and provides helper functions to calculate its liquidation price, collateralization ratio etc.
 */
export class Safe {
    constructor(
        private contracts: ContractApis,

        /**
         * SAFE handler in the SAFE Engine
         */
        public handler: string,
        /**
         * Amount of debt generated by the SAFE (WAD)
         */
        public debt: BigNumber,
        /**
         * Amount of collateral locked in the SAFE (WAD)
         */
        public collateral: BigNumber,
        /**
         * SAFE collateral type
         */
        public collateralType: string,
        /**
         * Whether the safe was opened using a SAFE manager or not
         */
        public isManaged: boolean,
        /**
         * Safe incremental ID, only for managed safes
         */
        public safeId?: number
    ) {}

    /**
     * Ratio used to calculate the amount of debt that can be drawn. Returns null is ratio is +Infinity. !! Uses unsafe division that can lead to precision loss.
     * @returns Promise<FixedNumber> CRatio
     */
    public async getCRatio(): Promise<FixedNumber | null> {
        if (this.collateral.isZero()) {
            return FixedNumber.from('0')
        }

        if (this.debt.isZero()) {
            return null
        }
        const {
            liquidationCRatio,
        } = await this.contracts.oracleRelayer.collateralTypes(
            this.collateralType
        )

        const {
            accumulatedRate,
            safetyPrice,
        } = await this.contracts.safeEngine.collateralTypes(this.collateralType)

        return FixedNumber.from(
            this.collateral.mul(safetyPrice).mul(liquidationCRatio).div(RAY)
        ).divUnsafe(FixedNumber.from(this.debt.mul(accumulatedRate)))
    }

    /**
     * Price at which the SAFE will get liquidated.
     * @returns <FixedNumber> Liquidation price
     */
    public async liquidationPrice(): Promise<FixedNumber | null> {
        if (this.collateral.isZero()) {
            return FixedNumber.from('0')
        }

        if (this.debt.isZero()) {
            return null
        }

        const {
            accumulatedRate,
        } = await this.contracts.safeEngine.collateralTypes(this.collateralType)
        const redemptionPrice = await this.contracts.oracleRelayer.redemptionPrice_readOnly()
        const liqCRatio = (
            await this.contracts.oracleRelayer.collateralTypes(
                this.collateralType
            )
        ).liquidationCRatio

        // Formula:
        // (debt x accumulatedRate x redemptionPrice x liquidationCRatio) / collateral

        const numerator = this.debt
            .mul(accumulatedRate)
            .mul(redemptionPrice)
            .mul(liqCRatio)
            .div(RAY.pow(3)) // Make it a WAD
        return FixedNumber.from(numerator).divUnsafe(
            FixedNumber.from(this.collateral)
        )
    }
}
