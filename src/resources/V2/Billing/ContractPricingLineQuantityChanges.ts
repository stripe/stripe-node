// File generated from our OpenAPI spec

import {Decimal} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface ContractPricingLineQuantityChange {
  /**
   * The id of the quantity change object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract_pricing_line_quantity_change';

  /**
   * The timestamp when this quantity change object was created.
   */
  created: string;

  /**
   * The timestamp when this quantity change takes effect.
   */
  effective_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The pricing configuration for the associated pricing line.
   */
  pricing: ContractPricingLineQuantityChange.Pricing;

  /**
   * The id of the pricing line associated with this quantity change.
   */
  pricing_line: string;

  /**
   * The quantity at the effective time.
   */
  quantity: Decimal;
}
export namespace ContractPricingLineQuantityChange {
  export interface Pricing {
    /**
     * The ID of the V1 price. Present when `type` is `price`.
     */
    price?: string;

    /**
     * The type of pricing.
     */
    type: 'price';
  }
}
