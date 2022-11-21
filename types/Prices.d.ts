// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
     * [Products](https://stripe.com/docs/api#products) help you track inventory or provisioning, and prices help you track payment terms. Different physical goods or levels of service should be represented by products, and pricing options should be represented by prices. This approach lets you change prices without having to change your provisioning scheme.
     *
     * For example, you might have a single "gold" product that has prices for $10/month, $100/year, and €9 once.
     *
     * Related guides: [Set up a subscription](https://stripe.com/docs/billing/subscriptions/set-up-subscription), [create an invoice](https://stripe.com/docs/billing/invoices/create), and more about [products and prices](https://stripe.com/docs/products-prices/overview).
     */
    interface Price {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'price';

      /**
       * Whether the price can be used for new purchases.
       */
      active: boolean;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme: Price.BillingScheme;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: {
        [key: string]: Price.CurrencyOptions;
      };

      /**
       * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
       */
      custom_unit_amount: Price.CustomUnitAmount | null;

      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
       */
      lookup_key: string | null;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * A brief description of the price, hidden from customers.
       */
      nickname: string | null;

      /**
       * The ID of the product this price is associated with.
       */
      product: string | Stripe.Product | Stripe.DeletedProduct;

      /**
       * The recurring components of a price such as `interval` and `usage_type`.
       */
      recurring: Price.Recurring | null;

      /**
       * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior: Price.TaxBehavior | null;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers?: Array<Price.Tier>;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
       */
      tiers_mode: Price.TiersMode | null;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the amount billed. Cannot be combined with `tiers`.
       */
      transform_quantity: Price.TransformQuantity | null;

      /**
       * One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
       */
      type: Price.Type;

      /**
       * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
       */
      unit_amount: number | null;

      /**
       * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
       */
      unit_amount_decimal: string | null;
    }

    namespace Price {
      type BillingScheme = 'per_unit' | 'tiered';

      interface CurrencyOptions {
        /**
         * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
         */
        custom_unit_amount: CurrencyOptions.CustomUnitAmount | null;

        /**
         * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior: CurrencyOptions.TaxBehavior | null;

        /**
         * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
         */
        tiers?: Array<CurrencyOptions.Tier>;

        /**
         * The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`.
         */
        unit_amount: number | null;

        /**
         * The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`.
         */
        unit_amount_decimal: string | null;
      }

      namespace CurrencyOptions {
        interface CustomUnitAmount {
          /**
           * The maximum unit amount the customer can specify for this item.
           */
          maximum: number | null;

          /**
           * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
           */
          minimum: number | null;

          /**
           * The starting unit amount which can be updated by the customer.
           */
          preset: number | null;
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

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
      }

      interface CustomUnitAmount {
        /**
         * The maximum unit amount the customer can specify for this item.
         */
        maximum: number | null;

        /**
         * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
         */
        minimum: number | null;

        /**
         * The starting unit amount which can be updated by the customer.
         */
        preset: number | null;
      }

      interface Recurring {
        /**
         * Specifies a usage aggregation strategy for prices of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
         */
        aggregate_usage: Recurring.AggregateUsage | null;

        /**
         * The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
         */
        interval_count: number;

        /**
         * Default number of trial days when subscribing a customer to this price using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
         */
        trial_period_days: number | null;

        /**
         * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
         */
        usage_type: Recurring.UsageType;
      }

      namespace Recurring {
        type AggregateUsage =
          | 'last_during_period'
          | 'last_ever'
          | 'max'
          | 'sum';

        type Interval = 'day' | 'month' | 'week' | 'year';

        type UsageType = 'licensed' | 'metered';
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

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

      interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformQuantity.Round;
      }

      namespace TransformQuantity {
        type Round = 'down' | 'up';
      }

      type Type = 'one_time' | 'recurring';
    }

    /**
     * The DeletedPrice object.
     */
    interface DeletedPrice {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'price';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface PriceCreateParams {
      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * Whether the price can be used for new purchases. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
       */
      billing_scheme?: PriceCreateParams.BillingScheme;

      /**
       * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: {
        [key: string]: PriceCreateParams.CurrencyOptions;
      };

      /**
       * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
       */
      custom_unit_amount?: PriceCreateParams.CustomUnitAmount;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * A brief description of the price, hidden from customers.
       */
      nickname?: string;

      /**
       * The ID of the product that this price will belong to.
       */
      product?: string;

      /**
       * These fields can be used to create a new product that this price will belong to.
       */
      product_data?: PriceCreateParams.ProductData;

      /**
       * The recurring components of a price such as `interval` and `usage_type`.
       */
      recurring?: PriceCreateParams.Recurring;

      /**
       * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceCreateParams.TaxBehavior;

      /**
       * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
       */
      tiers?: Array<PriceCreateParams.Tier>;

      /**
       * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
       */
      tiers_mode?: PriceCreateParams.TiersMode;

      /**
       * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
       */
      transfer_lookup_key?: boolean;

      /**
       * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
       */
      transform_quantity?: PriceCreateParams.TransformQuantity;

      /**
       * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge. One of `unit_amount` or `custom_unit_amount` is required, unless `billing_scheme=tiered`.
       */
      unit_amount?: number;

      /**
       * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
       */
      unit_amount_decimal?: string;
    }

    namespace PriceCreateParams {
      type BillingScheme = 'per_unit' | 'tiered';

      interface CurrencyOptions {
        /**
         * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
         */
        custom_unit_amount?: CurrencyOptions.CustomUnitAmount;

        /**
         * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: CurrencyOptions.TaxBehavior;

        /**
         * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
         */
        tiers?: Array<CurrencyOptions.Tier>;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace CurrencyOptions {
        interface CustomUnitAmount {
          /**
           * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
           */
          enabled: boolean;

          /**
           * The maximum unit amount the customer can specify for this item.
           */
          maximum?: number;

          /**
           * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
           */
          minimum?: number;

          /**
           * The starting unit amount which can be updated by the customer.
           */
          preset?: number;
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

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
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;

          /**
           * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
           */
          up_to: 'inf' | number;
        }
      }

      interface CustomUnitAmount {
        /**
         * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
         */
        enabled: boolean;

        /**
         * The maximum unit amount the customer can specify for this item.
         */
        maximum?: number;

        /**
         * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
         */
        minimum?: number;

        /**
         * The starting unit amount which can be updated by the customer.
         */
        preset?: number;
      }

      interface ProductData {
        /**
         * Whether the product is currently available for purchase. Defaults to `true`.
         */
        active?: boolean;

        /**
         * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
         */
        id?: string;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: Stripe.MetadataParam;

        /**
         * The product's name, meant to be displayable to the customer.
         */
        name: string;

        /**
         * An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
         *
         * This may be up to 22 characters. The statement description may not include `<`, `>`, `\`, `"`, `'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped.
         */
        statement_descriptor?: string;

        /**
         * A [tax code](https://stripe.com/docs/tax/tax-categories) ID.
         */
        tax_code?: string;

        /**
         * A label that represents units of this product in Stripe and on customers' receipts and invoices. When set, this will be included in associated invoice line item descriptions.
         */
        unit_label?: string;
      }

      interface Recurring {
        /**
         * Specifies a usage aggregation strategy for prices of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
         */
        aggregate_usage?: Recurring.AggregateUsage;

        /**
         * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval: Recurring.Interval;

        /**
         * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
         */
        interval_count?: number;

        /**
         * Default number of trial days when subscribing a customer to this price using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
         */
        trial_period_days?: number;

        /**
         * Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.
         */
        usage_type?: Recurring.UsageType;
      }

      namespace Recurring {
        type AggregateUsage =
          | 'last_during_period'
          | 'last_ever'
          | 'max'
          | 'sum';

        type Interval = 'day' | 'month' | 'week' | 'year';

        type UsageType = 'licensed' | 'metered';
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

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
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;

        /**
         * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
         */
        up_to: 'inf' | number;
      }

      type TiersMode = 'graduated' | 'volume';

      interface TransformQuantity {
        /**
         * Divide usage by this number.
         */
        divide_by: number;

        /**
         * After division, either round the result `up` or `down`.
         */
        round: TransformQuantity.Round;
      }

      namespace TransformQuantity {
        type Round = 'down' | 'up';
      }
    }

    interface PriceRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface PriceUpdateParams {
      /**
       * Whether the price can be used for new purchases. Defaults to `true`.
       */
      active?: boolean;

      /**
       * Prices defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
       */
      currency_options?: Stripe.Emptyable<{
        [key: string]: PriceUpdateParams.CurrencyOptions;
      }>;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters.
       */
      lookup_key?: string;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * A brief description of the price, hidden from customers.
       */
      nickname?: string;

      /**
       * The recurring components of a price such as `interval` and `usage_type`.
       */
      recurring?: Stripe.Emptyable<PriceUpdateParams.Recurring>;

      /**
       * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
       */
      tax_behavior?: PriceUpdateParams.TaxBehavior;

      /**
       * If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
       */
      transfer_lookup_key?: boolean;
    }

    namespace PriceUpdateParams {
      interface CurrencyOptions {
        /**
         * When set, provides configuration for the amount to be adjusted by the customer during Checkout Sessions and Payment Links.
         */
        custom_unit_amount?: CurrencyOptions.CustomUnitAmount;

        /**
         * Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: CurrencyOptions.TaxBehavior;

        /**
         * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
         */
        tiers?: Array<CurrencyOptions.Tier>;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace CurrencyOptions {
        interface CustomUnitAmount {
          /**
           * Pass in `true` to enable `custom_unit_amount`, otherwise omit `custom_unit_amount`.
           */
          enabled: boolean;

          /**
           * The maximum unit amount the customer can specify for this item.
           */
          maximum?: number;

          /**
           * The minimum unit amount the customer can specify for this item. Must be at least the minimum charge amount.
           */
          minimum?: number;

          /**
           * The starting unit amount which can be updated by the customer.
           */
          preset?: number;
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

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
           * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
           */
          unit_amount_decimal?: string;

          /**
           * Specifies the upper bound of this tier. The lower bound of a tier is the upper bound of the previous tier adding one. Use `inf` to define a fallback tier.
           */
          up_to: 'inf' | number;
        }
      }

      interface Recurring {
        /**
         * Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
         */
        trial_period_days?: number;
      }

      type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }

    interface PriceListParams extends PaginationParams {
      /**
       * Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).
       */
      active?: boolean;

      /**
       * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
       */
      created?: Stripe.RangeQueryParam | number;

      /**
       * Only return prices for the given currency.
       */
      currency?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Only return the price with these lookup_keys, if any exist.
       */
      lookup_keys?: Array<string>;

      /**
       * Only return prices for the given product.
       */
      product?: string;

      /**
       * Only return prices with these recurring fields.
       */
      recurring?: PriceListParams.Recurring;

      /**
       * Only return prices of type `recurring` or `one_time`.
       */
      type?: PriceListParams.Type;
    }

    namespace PriceListParams {
      interface Recurring {
        /**
         * Filter by billing frequency. Either `day`, `week`, `month` or `year`.
         */
        interval?: Recurring.Interval;

        /**
         * Filter by the usage type for this price. Can be either `metered` or `licensed`.
         */
        usage_type?: Recurring.UsageType;
      }

      namespace Recurring {
        type Interval = 'day' | 'month' | 'week' | 'year';

        type UsageType = 'licensed' | 'metered';
      }

      type Type = 'one_time' | 'recurring';
    }

    interface PriceSearchParams {
      /**
       * The search query string. See [search query language](https://stripe.com/docs/search#search-query-language) and the list of supported [query fields for prices](https://stripe.com/docs/search#query-fields-for-prices).
       */
      query: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for pagination across multiple pages of results. Don't include this parameter on the first call. Use the next_page value returned in a previous response to request subsequent results.
       */
      page?: string;
    }

    class PricesResource {
      /**
       * Creates a new price for an existing product. The price can be recurring or one-time.
       */
      create(
        params: PriceCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Price>>;

      /**
       * Retrieves the price with the given ID.
       */
      retrieve(
        id: string,
        params?: PriceRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Price>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Price>>;

      /**
       * Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.
       */
      update(
        id: string,
        params?: PriceUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.Price>>;

      /**
       * Returns a list of your prices.
       */
      list(
        params?: PriceListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.Price>;
      list(options?: RequestOptions): ApiListPromise<Stripe.Price>;

      /**
       * Search for prices you've previously created using Stripe's [Search Query Language](https://stripe.com/docs/search#search-query-language).
       * Don't use search in read-after-write flows where strict consistency is necessary. Under normal operating
       * conditions, data is searchable in less than a minute. Occasionally, propagation of new or updated data can be up
       * to an hour behind during outages. Search functionality is not available to merchants in India.
       */
      search(
        params: PriceSearchParams,
        options?: RequestOptions
      ): ApiSearchResultPromise<Stripe.Price>;
    }
  }
}
