// File generated from our OpenAPI spec

import {Metadata, OtherString, Decimal} from '../../../shared.js';
export interface ContractTerm {
  /**
   * The stable ID of the term.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract_term';

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The lookup key, unique across all term types on this contract.
   */
  lookup_key?: string;

  /**
   * Set of key-value pairs attached to the term.
   */
  metadata?: Metadata;

  /**
   * Present when type is pricing_override.
   */
  pricing_override?: ContractTerm.PricingOverride;

  /**
   * Present when type is recurring_price.
   */
  recurring_price?: ContractTerm.RecurringPrice;

  /**
   * Present when type is scheduled_fee.
   */
  scheduled_fee?: ContractTerm.ScheduledFee;

  /**
   * The type of this term.
   */
  type: ContractTerm.Type;
}
export namespace ContractTerm {
  export interface PricingOverride {
    /**
     * Recurring or scheduled_fee terms selected by this override. An override without criteria applies to all recurring and scheduled_fee terms.
     */
    criteria: Array<PricingOverride.Criterion>;

    /**
     * The exclusive end of the validity window. Null for an open end.
     */
    ends_at?: PricingOverride.EndsAt;

    /**
     * Present when type is multiply.
     */
    multiply?: PricingOverride.Multiply;

    /**
     * Present when type is overwrite.
     */
    overwrite?: PricingOverride.Overwrite;

    /**
     * Lower numbers win. Equal priorities resolve by display order; overrides do not stack.
     */
    priority: number;

    /**
     * The inclusive start of the override's validity window.
     */
    starts_at: PricingOverride.StartsAt;

    /**
     * The pricing operation.
     */
    type: PricingOverride.Type;
  }

  export interface RecurringPrice {
    /**
     * The exclusive end of the term. Null for an open end.
     */
    ends_at?: RecurringPrice.EndsAt;

    /**
     * The V1 recurring Price.
     */
    price: string;

    /**
     * Current licensed quantity. Null for metered Prices; history is available separately.
     */
    quantity?: Decimal;

    /**
     * The inclusive start of the term.
     */
    starts_at: RecurringPrice.StartsAt;
  }

  export interface ScheduledFee {
    /**
     * Explicit bill dates and amounts, including billed history.
     */
    bill_schedule: ScheduledFee.BillSchedule;

    /**
     * The V1 Product being billed.
     */
    product: string;

    /**
     * Informational invoice and revenue-recognition period with timestamp objects; does not affect billing or proration.
     */
    service_period?: ScheduledFee.ServicePeriod;
  }

  export type Type =
    | 'pricing_override'
    | 'recurring_price'
    | 'scheduled_fee'
    | OtherString;

  export namespace PricingOverride {
    export interface Criterion {
      /**
       * Resolved IDs of recurring or scheduled_fee terms. Override terms are not valid targets.
       */
      terms?: Array<string>;

      /**
       * Whether to include or exclude the selected recurring or scheduled_fee terms.
       */
      type: Criterion.Type;
    }

    export interface EndsAt {
      /**
       * The timestamp when the item ends.
       */
      timestamp: string;
    }

    export interface Multiply {
      /**
       * The multiplier, for example 0.85 for a 15% discount.
       */
      factor: Decimal;
    }

    export interface Overwrite {
      /**
       * Whether the replacement pricing is per unit or tiered.
       */
      billing_scheme?: Overwrite.BillingScheme;

      /**
       * Replacement pricing tiers.
       */
      tiers?: Array<Overwrite.Tier>;

      /**
       * How the pricing tiers are applied.
       */
      tiers_mode?: Overwrite.TiersMode;

      /**
       * The replacement per-unit amount in minor currency units.
       */
      unit_amount_decimal?: Decimal;
    }

    export interface StartsAt {
      /**
       * The timestamp when the item starts.
       */
      timestamp: string;
    }

    export type Type = 'multiply' | 'overwrite' | OtherString;

    export namespace Criterion {
      export type Type = 'exclude' | 'include' | OtherString;
    }

    export namespace Overwrite {
      export type BillingScheme = 'per_unit' | 'tiered';

      export interface Tier {
        /**
         * Flat amount in minor currency units.
         */
        flat_amount_decimal?: Decimal;

        /**
         * Per-unit amount in minor currency units.
         */
        unit_amount_decimal?: Decimal;

        /**
         * Inclusive whole-number upper bound. Omitted for an unbounded final tier.
         */
        up_to?: bigint;
      }

      export type TiersMode = 'graduated' | 'volume';
    }
  }

  export namespace RecurringPrice {
    export interface EndsAt {
      /**
       * The timestamp when the item ends.
       */
      timestamp: string;
    }

    export interface StartsAt {
      /**
       * The timestamp when the item starts.
       */
      timestamp: string;
    }
  }

  export namespace ScheduledFee {
    export interface BillSchedule {
      /**
       * Scheduled installments and billed history.
       */
      custom: Array<BillSchedule.Custom>;

      /**
       * The type of billing schedule.
       */
      type: BillSchedule.Type;
    }

    export interface ServicePeriod {
      /**
       * The exclusive end of the service period.
       */
      ends_at: ServicePeriod.EndsAt;

      /**
       * The inclusive start of the service period.
       */
      starts_at: ServicePeriod.StartsAt;
    }

    export namespace BillSchedule {
      export interface Custom {
        /**
         * The resolved bill date.
         */
        bill_at: Custom.BillAt;

        /**
         * Resolved installment quantity. Always present; defaults to 1 when omitted on input.
         */
        quantity: Decimal;

        /**
         * Unit price in minor units of the contract's currency, before multiplying by quantity.
         */
        unit_amount_decimal: Decimal;
      }

      export type Type = 'custom' | OtherString;

      export namespace Custom {
        export interface BillAt {
          /**
           * The timestamp at which the fee will be billed.
           */
          timestamp: string;
        }
      }
    }

    export namespace ServicePeriod {
      export interface EndsAt {
        /**
         * The timestamp when the item ends.
         */
        timestamp: string;
      }

      export interface StartsAt {
        /**
         * The timestamp when the item starts.
         */
        timestamp: string;
      }
    }
  }
}
