// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      /**
       * An active entitlement describes access to a feature for a customer.
       */
      interface ActiveEntitlement {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'entitlements.active_entitlement';

        /**
         * The [Feature](https://docs.stripe.com/api/entitlements/feature) that the customer is entitled to.
         */
        feature: string | Stripe.Entitlements.Feature;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;

        /**
         * A unique key you provide as your own system identifier. This may be up to 80 characters.
         */
        lookup_key: string;
      }
    }
  }
}
