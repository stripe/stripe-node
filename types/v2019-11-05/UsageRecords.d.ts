declare namespace Stripe {
  /**
   * The UsageRecord object.
   */
  interface UsageRecord {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object?: 'usage_record';

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode?: boolean;

    /**
     * The usage quantity for the specified date.
     */
    quantity?: number;

    /**
     * The ID of the subscription item this usage record contains data for.
     */
    subscription_item?: string;

    /**
     * The timestamp when this usage occurred.
     */
    timestamp?: number;
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
  interface UsageRecordCreateParams {
    /**
     * Valid values are `increment` (default) or `set`. When using `increment` the specified `quantity` will be added to the usage at the specified timestamp. The `set` action will overwrite the usage quantity at that timestamp. If the subscription has [billing thresholds](https://stripe.com/docs/api/subscriptions/object#subscription_object-billing_thresholds), `increment` is the only allowed value.
     */
    action?: UsageRecordCreateParams.Action;

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

  namespace UsageRecordCreateParams {
    type Action = 'increment' | 'set'
  }
}