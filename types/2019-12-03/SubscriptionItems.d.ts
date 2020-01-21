declare module 'stripe' {
  namespace Stripe {
    /**
     * The SubscriptionItem object.
     */
    interface SubscriptionItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_item';

      /**
       * Define thresholds at which an invoice will be sent, and the related subscription advanced to a new billing period
       */
      billing_thresholds: SubscriptionItem.BillingThresholds | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      deleted?: void;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Metadata;

      plan: Stripe.Plan;

      /**
       * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
       */
      quantity?: number;

      /**
       * The `subscription` this `subscription_item` belongs to.
       */
      subscription: string;

      /**
       * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
       */
      tax_rates: Array<Stripe.TaxRate> | null;
    }

    namespace SubscriptionItem {
      interface BillingThresholds {
        /**
         * Usage threshold that triggers the subscription to create an invoice
         */
        usage_gte: number | null;
      }
    }

    /**
     * The DeletedSubscriptionItem object.
     */
    interface DeletedSubscriptionItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'subscription_item';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    interface SubscriptionItemCreateParams {
      /**
       * The identifier of the subscription to modify.
       */
      subscription: string;

      /**
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: SubscriptionItemCreateParams.BillingThresholds | null;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not create a subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       */
      payment_behavior?: SubscriptionItemCreateParams.PaymentBehavior;

      /**
       * The identifier of the plan to add to the subscription.
       */
      plan?: string;

      /**
       * Flag indicating whether to [prorate](https://stripe.com/docs/billing/subscriptions/prorations) switching plans during a billing cycle. This field has been deprecated and will be removed in a future API version. Use `proration_behavior=create_prorations` as a replacement for `prorate=true` and `proration_behavior=none` for `prorate=false`.
       */
      prorate?: boolean;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
       *
       * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
       *
       * Prorations can be disabled by passing `none`.
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
      tax_rates?: Array<string> | '';
    }

    namespace SubscriptionItemCreateParams {
      interface BillingThresholds {
        /**
         * Usage threshold that triggers the subscription to advance to a new billing period
         */
        usage_gte: number;
      }

      type PaymentBehavior =
        | 'allow_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

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
       * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
       */
      billing_thresholds?: SubscriptionItemUpdateParams.BillingThresholds | null;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: MetadataParam;

      /**
       * Indicates if a customer is on or off-session while an invoice payment is attempted.
       */
      off_session?: boolean;

      /**
       * Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
       *
       * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not create a subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
       */
      payment_behavior?: SubscriptionItemUpdateParams.PaymentBehavior;

      /**
       * The identifier of the new plan for this subscription item.
       */
      plan?: string;

      /**
       * Flag indicating whether to [prorate](https://stripe.com/docs/billing/subscriptions/prorations) switching plans during a billing cycle. This field has been deprecated and will be removed in a future API version. Use `proration_behavior=create_prorations` as a replacement for `prorate=true` and `proration_behavior=none` for `prorate=false`.
       */
      prorate?: boolean;

      /**
       * Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
       *
       * Passing `create_prorations` will cause proration invoice items to be created when applicable. These proration items will only be invoiced immediately under [certain conditions](https://stripe.com/docs/subscriptions/upgrading-downgrading#immediate-payment). In order to always invoice immediately for prorations, pass `always_invoice`.
       *
       * Prorations can be disabled by passing `none`.
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
      tax_rates?: Array<string> | '';
    }

    namespace SubscriptionItemUpdateParams {
      interface BillingThresholds {
        /**
         * Usage threshold that triggers the subscription to advance to a new billing period
         */
        usage_gte: number;
      }

      type PaymentBehavior =
        | 'allow_incomplete'
        | 'error_if_incomplete'
        | 'pending_if_incomplete';

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
       * Flag indicating whether to [prorate](https://stripe.com/docs/billing/subscriptions/prorations) switching plans during a billing cycle.
       */
      prorate?: boolean;

      /**
       * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
       */
      proration_date?: number;
    }

    class SubscriptionItemsResource {
      /**
       * Adds a new item to an existing subscription. No existing items will be changed or replaced.
       */
      create(
        params: SubscriptionItemCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.SubscriptionItem>;

      /**
       * Retrieves the invoice item with the given ID.
       */
      retrieve(
        id: string,
        params?: SubscriptionItemRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.SubscriptionItem>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.SubscriptionItem>;

      /**
       * Updates the plan or quantity of an item on a current subscription.
       */
      update(
        id: string,
        params?: SubscriptionItemUpdateParams,
        options?: RequestOptions
      ): Promise<Stripe.SubscriptionItem>;

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
      ): Promise<Stripe.DeletedSubscriptionItem>;
      del(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.DeletedSubscriptionItem>;

      /**
       * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
       *
       * Usage records provide quantity information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the [metered billing](https://stripe.com/docs/billing/subscriptions/metered-billing) plan, Stripe helps you send accurate invoices to your customers.
       *
       * The default calculation for usage is to add up all the quantity values of the usage records within a billing period. You can change this default behavior with the billing plan's aggregate_usage [parameter](https://stripe.com/docs/api/plans/create#create_plan-aggregate_usage). When there is more than one usage record with the same timestamp, Stripe adds the quantity values together. In most cases, this is the desired resolution, however, you can change this behavior with the action parameter.
       *
       * The default pricing model for metered billing is [per-unit pricing. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing](https://stripe.com/docs/api/plans/object#plan_object-billing_scheme) model.
       */
      createUsageRecord(
        id: string,
        params: UsageRecordCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.UsageRecord>;

      /**
       * For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that's been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the billing plan's month of September).
       *
       * The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn't ended yet. Since new usage records can still be added, the returned summary information for the subscription item's ID should be seen as unstable until the subscription billing period ends.
       */
      listUsageRecordSummaries(
        id: string,
        params?: UsageRecordSummaryListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.UsageRecordSummary>;
      listUsageRecordSummaries(
        id: string,
        options?: RequestOptions
      ): ApiListPromise<Stripe.UsageRecordSummary>;
    }
  }
}
