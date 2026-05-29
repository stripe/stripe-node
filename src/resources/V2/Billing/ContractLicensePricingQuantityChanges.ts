// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface ContractLicensePricingQuantityChange {
  /**
   * The ID of the quantity change object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract_license_pricing_quantity_change';

  /**
   * The timestamp when this quantity change object was created.
   */
  created: string;

  /**
   * The timestamp when this quantity change takes effect.
   */
  effective_at: string;

  /**
   * The ID of the license pricing.
   */
  license_pricing_id: string;

  /**
   * The type of the license pricing.
   */
  license_pricing_type: V2.Billing.ContractLicensePricingQuantityChange.LicensePricingType;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The ID of the pricing line associated with this quantity change.
   */
  pricing_line: string;

  /**
   * The quantity at the effective time.
   */
  quantity: number;
}
export namespace V2 {
  export namespace Billing {
    export namespace ContractLicensePricingQuantityChange {
      export type LicensePricingType = 'license_fee' | 'price';
    }
  }
}
