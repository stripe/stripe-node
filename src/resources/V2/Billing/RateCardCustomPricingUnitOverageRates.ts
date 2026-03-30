// File generated from our OpenAPI spec

import {OneTimeItem} from './OneTimeItems.js';
import {Metadata} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface RateCardCustomPricingUnitOverageRate {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.rate_card_custom_pricing_unit_overage_rate';

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * The ID of the custom pricing unit this overage rate applies to.
   */
  custom_pricing_unit: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * A one-time item represents a product that can be charged as a one-time line item,
   * used for overage charges when custom pricing unit credits are exhausted.
   */
  one_time_item: OneTimeItem;

  /**
   * The ID of the Rate Card this overage rate belongs to.
   */
  rate_card: string;

  /**
   * The ID of the Rate Card Version this overage rate was created on.
   */
  rate_card_version: string;

  /**
   * The per-unit amount to charge for overages, represented as a decimal string in minor currency units with at most 12 decimal places.
   */
  unit_amount: string;
}
