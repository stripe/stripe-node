declare module 'stripe' {
  namespace Stripe {
    /**
     * The UsageRecord object.
     */
    interface UsageRecord {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'usage_record';

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The usage quantity for the specified date.
       */
      quantity: number;

      /**
       * The ID of the subscription item this usage record contains data for.
       */
      subscription_item: string;

      /**
       * The timestamp when this usage occurred.
       */
      timestamp: number;
    }

    interface UsageRecordCreateParams {
      /**
       * The usage quantity for the specified timestamp.
       */
      quantity: number;

      /**
       * The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided `subscription_item`.
       */
      timestamp: number;

      /**
       * Valid values are `increment` (default) or `set`. When using `increment` the specified `quantity` will be added to the usage at the specified timestamp. The `set` action will overwrite the usage quantity at that timestamp. If the subscription has [billing thresholds](https://stripe.com/docs/api/subscriptions/object#subscription_object-billing_thresholds), `increment` is the only allowed value.
       */
      action?: UsageRecordCreateParams.Action;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace UsageRecordCreateParams {
      type Action = 'increment' | 'set';
    }
  }
}
