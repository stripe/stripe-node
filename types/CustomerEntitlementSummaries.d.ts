// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * A summary of a customer's entitlements.
     */
    interface CustomerEntitlementSummary {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'customer_entitlement_summary';

      /**
       * The customer that is entitled to this feature.
       */
      customer: string;

      /**
       * The list of entitlements this customer has.
       */
      entitlements: ApiList<Stripe.CustomerEntitlement>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;
    }
  }
}
