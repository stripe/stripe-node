// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface SubscriptionItemCreateParams {
      /**
       * The identifier of the subscription to modify.
       */
      subscription: string;

      /**
       * The coupons to redeem into discounts for the subscription item.
       */
      discounts?: Stripe.Emptyable<
        Array<SubscriptionItemCreateParams.Discount>
      >;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.MetadataParam;

      /**
       * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
       *
       * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       */
      payment_behavior?: SubscriptionItemCreateParams.PaymentBehavior;

      /**
       * The identifier of the plan to add to the subscription.
       */
      plan?: string;

      /**
       * The ID of the price object.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
       */
      price_data?: SubscriptionItemCreateParams.PriceData;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
       */
      proration_behavior?: SubscriptionItemCreateParams.ProrationBehavior;

      /**
       * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
       */
      proration_date?: number;

      /**
       * The quantity you'd like to apply to the subscription item you're creating.
       */
      quantity?: number;

      /**
       * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;
    }

    namespace SubscriptionItemCreateParams {
      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      type PaymentBehavior =
        | 'allow_incomplete'
        | 'default_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

      interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring: PriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: PriceData.TaxBehavior;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace PriceData {
        interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
    }

    interface SubscriptionItemRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SubscriptionItemUpdateParams {
      /**
       * The coupons to redeem into discounts for the subscription item.
       */
      discounts?: Stripe.Emptyable<
        Array<SubscriptionItemUpdateParams.Discount>
      >;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

      /**
       * Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `false` (on-session).
       */
      off_session?: boolean;

      /**
       * Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `default_incomplete` to transition the subscription to `status=past_due` when payment is required and await explicit confirmation of the invoice's payment intent. This allows simpler management of scenarios where additional user actions are needed to pay a subscription's invoice. Such as failed payments, [SCA regulation](https://stripe.com/docs/billing/migration/strong-customer-authentication), or collecting a mandate for a bank debit payment method.
       *
       * Use `pending_if_incomplete` to update the subscription using [pending updates](https://stripe.com/docs/billing/subscriptions/pending-updates). When you use `pending_if_incomplete` you can only pass the parameters [supported by pending updates](https://stripe.com/docs/billing/pending-updates-reference#supported-attributes).
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not update the subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       */
      payment_behavior?: SubscriptionItemUpdateParams.PaymentBehavior;

      /**
       * The identifier of the new plan for this subscription item.
       */
      plan?: string;

      /**
       * The ID of the price object. One of `price` or `price_data` is required. When changing a subscription item's price, `quantity` is set to 1 unless a `quantity` parameter is provided.
       */
      price?: string;

      /**
       * Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline. One of `price` or `price_data` is required.
       */
      price_data?: SubscriptionItemUpdateParams.PriceData;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
       */
      proration_behavior?: SubscriptionItemUpdateParams.ProrationBehavior;

      /**
       * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
       */
      proration_date?: number;

      /**
       * The quantity you'd like to apply to the subscription item you're creating.
       */
      quantity?: number;

      /**
       * A list of [Tax Rate](https://stripe.com/docs/api/tax_rates) ids. These Tax Rates will override the [`default_tax_rates`](https://stripe.com/docs/api/subscriptions/create#create_subscription-default_tax_rates) on the Subscription. When updating, pass an empty string to remove previously-defined tax rates.
       */
      tax_rates?: Stripe.Emptyable<Array<string>>;
    }

    namespace SubscriptionItemUpdateParams {
      interface Discount {
        /**
         * ID of the coupon to create a new discount for.
         */
        coupon?: string;

        /**
         * ID of an existing discount on the object (or one of its ancestors) to reuse.
         */
        discount?: string;

        /**
         * ID of the promotion code to create a new discount for.
         */
        promotion_code?: string;
      }

      type PaymentBehavior =
        | 'allow_incomplete'
        | 'default_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

      interface PriceData {
        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the [Product](https://docs.stripe.com/api/products) that this [Price](https://docs.stripe.com/api/prices) will belong to.
         */
        product: string;

        /**
         * The recurring components of a price such as `interval` and `interval_count`.
         */
        recurring: PriceData.Recurring;

        /**
         * Only required if a [default tax behavior](https://stripe.com/docs/tax/products-prices-tax-categories-tax-behavior#setting-a-default-tax-behavior-(recommended)) was not provided in the Stripe Tax settings. Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed.
         */
        tax_behavior?: PriceData.TaxBehavior;

        /**
         * A positive integer in cents (or local equivalent) (or 0 for a free price) representing how much to charge.
         */
        unit_amount?: number;

        /**
         * Same as `unit_amount`, but accepts a decimal value in cents (or local equivalent) with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.
         */
        unit_amount_decimal?: string;
      }

      namespace PriceData {
        interface Recurring {
          /**
           * Specifies billing frequency. Either `day`, `week`, `month` or `year`.
           */
          interval: Recurring.Interval;

          /**
           * The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of three years interval allowed (3 years, 36 months, or 156 weeks).
           */
          interval_count?: number;
        }

        namespace Recurring {
          type Interval = 'day' | 'month' | 'week' | 'year';
        }

        type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
      }

      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
    }

    interface SubscriptionItemListParams extends PaginationParams {
      /**
       * The ID of the subscription whose items will be retrieved.
       */
      subscription: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface SubscriptionItemDeleteParams {
      /**
       * Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
       */
      clear_usage?: boolean;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/billing/subscriptions/prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. The default value is `create_prorations`.
       */
      proration_behavior?: SubscriptionItemDeleteParams.ProrationBehavior;

      /**
       * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
       */
      proration_date?: number;
    }

    namespace SubscriptionItemDeleteParams {
      type ProrationBehavior = 'always_invoice' | 'create_prorations' | 'none';
    }

    class SubscriptionItemsResource {
      /**
       * Adds a new item to an existing subscription. No existing items will be changed or replaced.
       */
      create(
        params: SubscriptionItemCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionItem>>;

      /**
       * Retrieves the subscription item with the given ID.
       */
      retrieve(
        id: string,
        params?: SubscriptionItemRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionItem>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionItem>>;

      /**
       * Updates the plan or quantity of an item on a current subscription.
       */
      update(
        id: string,
        params?: SubscriptionItemUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.SubscriptionItem>>;

      /**
       * Returns a list of your subscription items for a given subscription.
       */
      list(
        params: SubscriptionItemListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.SubscriptionItem>;

      /**
       * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
       */
      del(
        id: string,
        params?: SubscriptionItemDeleteParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedSubscriptionItem>>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.DeletedSubscriptionItem>>;
    }
  }
}
