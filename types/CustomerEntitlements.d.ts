// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A entitlement for a customer describes access to a feature.
     */
    interface CustomerEntitlement {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_entitlement';

      /**
       * The feature that the customer is entitled to.
       */
      feature: string;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * A unique key you provide as your own system identifier. This may be up to 80 characters.
       */
      lookup_key: string;

      /**
       * Contains information about entitlements relating to features with type=quantity. Required when the feature has type=quantity.
       */
      quantity: CustomerEntitlement.Quantity | null;

      /**
       * The type of feature.
       */
      type: CustomerEntitlement.Type;
    }

    namespace CustomerEntitlement {
      interface Quantity {
        /**
         * The total quantity available to the customer.
         */
        total_available: number;
      }

      type Type = 'quantity' | 'switch';
    }
  }
}
