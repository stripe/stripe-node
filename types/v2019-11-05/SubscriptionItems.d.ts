declare namespace Stripe {
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
    metadata: {
      [key: string]: string;
    };

    plan: Plan;

    /**
     * The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
     */
    quantity: number;

    /**
     * The `subscription` this `subscription_item` belongs to.
     */
    subscription: string;

    /**
     * The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
     */
    tax_rates: Array<TaxRate> | null;
  }

  namespace SubscriptionItem {
    interface BillingThresholds {
      /**
       * Usage threshold that triggers the subscription to create an invoice
       */
      usage_gte?: number | null;
    }
  }

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

  /**
   * The UsageRecord object.
   */
  interface UsageRecord {}

  /**
   * Adds a new item to an existing subscription. No existing items will be changed or replaced.
   */
  interface SubscriptionItemCreateParams {
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: '' | SubscriptionItemCreateParams.BillingThresholds;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

    /**
     * Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
     *
     * Use `error_if_incomplete` if you want Stripe to return an HTTP 402 status code if a subscription's first invoice cannot be paid. For example, if a payment method requires 3DS authentication due to SCA regulation and further user action is needed, this parameter does not create a subscription and returns an error instead. This was the default behavior for API versions prior to 2019-03-14. See the [changelog](https://stripe.com/docs/upgrades#2019-03-14) to learn more.
     */
    payment_behavior?: SubscriptionItemCreateParams.PaymentBehavior;

    /**
     * The identifier of the plan to add to the subscription.
     */
    plan: string;

    /**
     * Flag indicating whether to [prorate](https://stripe.com/docs/billing/subscriptions/prorations) switching plans during a billing cycle.
     */
    prorate?: boolean;

    /**
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.
     */
    proration_date?: number;

    /**
     * The quantity you'd like to apply to the subscription item you're creating.
     */
    quantity?: number;

    /**
     * The identifier of the subscription to modify.
     */
    subscription: string;

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
      | 'pending_if_incomplete'
  }

  /**
   * Retrieves the invoice item with the given ID.
   */
  interface SubscriptionItemRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  /**
   * Updates the plan or quantity of an item on a current subscription.
   */
  interface SubscriptionItemUpdateParams {
    /**
     * Define thresholds at which an invoice will be sent, and the subscription advanced to a new billing period. When updating, pass an empty string to remove previously-defined thresholds.
     */
    billing_thresholds?: '' | SubscriptionItemUpdateParams.BillingThresholds;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };

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
     * Flag indicating whether to [prorate](https://stripe.com/docs/billing/subscriptions/prorations) switching plans during a billing cycle.
     */
    prorate?: boolean;

    /**
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.
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
      | 'pending_if_incomplete'
  }

  /**
   * Returns a list of your subscription items for a given subscription.
   */
  interface SubscriptionItemListParams {
    /**
     * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
     */
    ending_before?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
     */
    limit?: number;

    /**
     * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
     */
    starting_after?: string;

    /**
     * The ID of the subscription whose items will be retrieved.
     */
    subscription: string;
  }

  /**
   * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
   */
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
     * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.
     */
    proration_date?: number;
  }

  /**
   * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
   *
   * Usage records provide quantity information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the [metered billing](https://stripe.com/docs/billing/subscriptions/metered-billing) plan, Stripe helps you send accurate invoices to your customers.
   *
   * The default calculation for usage is to add up all the quantity values of the usage records within a billing period. You can change this default behavior with the billing plan's aggregate_usage [parameter](https://stripe.com/docs/api/plans/create#create_plan-aggregate_usage). When there is more than one usage record with the same timestamp, Stripe adds the quantity values together. In most cases, this is the desired resolution, however, you can change this behavior with the action parameter.
   *
   * The default pricing model for metered billing is [per-unit pricing. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing](https://stripe.com/docs/api/plans/object#plan_object-billing_scheme) model.
   */
  interface SubscriptionItemCreateUsageRecordParams {
    /**
     * Valid values are `increment` (default) or `set`. When using `increment` the specified `quantity` will be added to the usage at the specified timestamp. The `set` action will overwrite the usage quantity at that timestamp. If the subscription has [billing thresholds](https://stripe.com/docs/api/subscriptions/object#subscription_object-billing_thresholds), `increment` is the only allowed value.
     */
    action?: SubscriptionItemCreateUsageRecordParams.Action;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The usage quantity for the specified timestamp.
     */
    quantity: number;

    /**
     * The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided `subscription_item`.
     */
    timestamp: number;
  }

  namespace SubscriptionItemCreateUsageRecordParams {
    type Action = 'increment' | 'set'
  }

  class SubscriptionItemsResource {
    /**
     * Adds a new item to an existing subscription. No existing items will be changed or replaced.
     */
    create(
      params: SubscriptionItemCreateParams,
      options?: RequestOptions
    ): Promise<SubscriptionItem>;

    /**
     * Retrieves the invoice item with the given ID.
     */
    retrieve(
      id: string,
      params?: SubscriptionItemRetrieveParams,
      options?: RequestOptions
    ): Promise<SubscriptionItem>;
    retrieve(id: string, options?: RequestOptions): Promise<SubscriptionItem>;

    /**
     * Updates the plan or quantity of an item on a current subscription.
     */
    update(
      id: string,
      params?: SubscriptionItemUpdateParams,
      options?: RequestOptions
    ): Promise<SubscriptionItem>;

    /**
     * Returns a list of your subscription items for a given subscription.
     */
    list(
      params: SubscriptionItemListParams,
      options?: RequestOptions
    ): ApiListPromise<SubscriptionItem>;

    /**
     * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
     */
    del(
      id: string,
      params?: SubscriptionItemDeleteParams,
      options?: RequestOptions
    ): Promise<DeletedSubscriptionItem>;
    del(id: string, options?: RequestOptions): Promise<DeletedSubscriptionItem>;

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
      params: SubscriptionItemCreateUsageRecordParams,
      options?: RequestOptions
    ): Promise<UsageRecord>;
  }
}