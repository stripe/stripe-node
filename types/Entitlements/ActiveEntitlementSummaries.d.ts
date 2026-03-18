// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Entitlements {
      /**
       * A summary of a customer's active entitlements.
       */
      interface ActiveEntitlementSummary {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'entitlements.active_entitlement_summary';

        /**
         * The customer that is entitled to this feature.
         */
        customer: string;

        /**
         * The list of entitlements this customer has.
         */
        entitlements: ApiList<Stripe.Entitlements.ActiveEntitlement>;

        /**
         * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
         */
        livemode: boolean;
      }
    }
  }
}
