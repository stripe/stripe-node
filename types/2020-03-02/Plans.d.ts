declare module 'stripe' {
  namespace Stripe {
    /**
     * The Plan object.
     */
    interface Plan {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'plan';

      /**
       * Whether the plan can be used for new purchases.
       */
      active: boolean;

      /**
       * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
       */
      aggregate_usage: Plan.AggregateUsage | null;

      /**
       * The unit amount in %s to be charged, represented as a whole integer if possible.
       */
      amount: number | null;

      /**
       * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places.
       */
      amount_decimal: string | null;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme: Plan.BillingScheme;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      deleted?: void;

      /**
       * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
       */
      interval: Plan.Interval;

      /**
       * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
       */
      interval_count: number;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      /**
       * A brief description of the plan, hidden from customers.
       */
      nickname: string | null;

      /**
       * The product whose pricing this plan determines.
       */
      product: string | Stripe.Product | Stripe.DeletedProduct | null;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers: Array<Plan.Tier> | null;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
       */
      tiers_mode: Plan.TiersMode | null;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
       */
      transform_usage: Plan.TransformUsage | null;

      /**
       * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
       */
      trial_period_days: number | null;

      /**
       * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
       */
      usage_type: Plan.UsageType;
    }

    namespace Plan {
      type AggregateUsage = 'last_during_period' | 'last_ever' | 'max' | 'sum';

      type BillingScheme = 'per_unit' | 'tiered';

      type Interval = 'day' | 'month' | 'week' | 'year';

      interface Tier {
        /**
         * Price for the entire tier.
         */
        flat_amount: number | null;

        /**
         * Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
         */
        flat_amount_decimal: string | null;

        /**
         * Per unit price for units relevant to the tier.
         */
        unit_amount: number | null;

        /**
         * Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
         */
        unit_amount_decimal: string | null;

        /**
         * Up to and including to this quantity will be contained in the tier.
         */
        up_to: number | null;
      }

      type TiersMode = 'graduated' | 'volume';

      interface TransformUsage {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformUsage.Round;
      }

      namespace TransformUsage {
        type Round = 'down' | 'up';
      }

      type UsageType = 'licensed' | 'metered';
    }

    /**
     * The DeletedPlan object.
     */
    interface DeletedPlan {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'plan';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface PlanCreateParams {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
       */
      interval: PlanCreateParams.Interval;

      /**
       * Whether the plan is currently available for new subscriptions. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
       */
      aggregate_usage?: PlanCreateParams.AggregateUsage;

      /**
       * A positive integer in %s (or 0 for a free plan) representing how much to charge on a recurring basis.
       */
      amount?: number;

      /**
       * Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.
       */
      amount_decimal?: string;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme?: PlanCreateParams.BillingScheme;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.
       */
      id?: string;

      /**
       * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
       */
      interval_count?: number;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * A brief description of the plan, hidden from customers.
       */
      nickname?: string;

      product?: PlanCreateParams.Product | string;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers?: Array<PlanCreateParams.Tier>;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
       */
      tiers_mode?: PlanCreateParams.TiersMode;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
       */
      transform_usage?: PlanCreateParams.TransformUsage;

      /**
       * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
       */
      trial_period_days?: number;

      /**
       * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
       */
      usage_type?: PlanCreateParams.UsageType;
    }

    namespace PlanCreateParams {
      type AggregateUsage = 'last_during_period' | 'last_ever' | 'max' | 'sum';

      type BillingScheme = 'per_unit' | 'tiered';

      type Interval = 'day' | 'month' | 'week' | 'year';

      interface Product {
        /**
         * Whether the product is currently available for purchase. Defaults to `true`.
         */
        active?: boolean;

        /**
         * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
         */
        id?: string;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
         */
        name: string;

        /**
         * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
         *
         * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
         */
        statement_descriptor?: string;

        /**
         * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
         */
        unit_label?: string;
      }

      interface Tier {
        /**
         * The flat billing amount for an entire tier, regardless of the number of units in the tier.
         */
        flat_amount?: number;

        /**
         * Same as `flat_amount`, but accepts a decimal value representing an integer in the minor units of the currency. Only one of `flat_amount` and `flat_amount_decimal` can be set.
         */
        flat_amount_decimal?: string;

        /**
         * The per unit billing amount for each individual unit for which this tier applies.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;

        /**
         * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
         */
        up_to: 'inf' | number;
      }

      type TiersMode = 'graduated' | 'volume';

      interface TransformUsage {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformUsage.Round;
      }

      namespace TransformUsage {
        type Round = 'down' | 'up';
      }

      type UsageType = 'licensed' | 'metered';
    }

    interface PlanRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PlanUpdateParams {
      /**
       * Whether the plan is currently available for new subscriptions.
       */
      active?: boolean;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam | null;

      /**
       * A brief description of the plan, hidden from customers.
       */
      nickname?: string;

      /**
       * The product the plan belongs to. Note that after updating, statement descriptors and line items of the plan in active subscriptions will be affected.
       */
      product?: string;

      /**
       * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
       */
      trial_period_days?: number;
    }

    interface PlanListParams extends PaginationParams {
      /**
       * Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
       */
      active?: boolean;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: RangeQueryParam | number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return plans for the given product.
       */
      product?: string;
    }

    interface PlanDeleteParams {}

    class PlansResource {
      /**
       * You can create plans using the API, or in the Stripe [Dashboard](https://dashboard.stripe.com/subscriptions/products).
       */
      create(
        params: PlanCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Plan>;

      /**
       * Retrieves the plan with the given ID.
       */
      retrieve(
        id: string,
        params?: PlanRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Plan>;
      retrieve(id: string, options?: RequestOptions): Promise<Stripe.Plan>;

      /**
       * Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan's ID, amount, currency, or billing cycle.
       */
      update(
        id: string,
        params?: PlanUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Plan>;

      /**
       * Returns a list of your plans.
       */
      list(
        params?: PlanListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Plan>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Plan>;

      /**
       * Deleting plans means new subscribers can't be added. Existing subscribers aren't affected.
       */
      del(
        id: string,
        params?: PlanDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.DeletedPlan>;
      del(id: string, options?: RequestOptions): Promise<Stripe.DeletedPlan>;
    }
  }
}
