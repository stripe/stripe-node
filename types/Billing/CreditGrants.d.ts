// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Billing {
      /**
       * A credit grant is an API resource that documents the allocation of some billing credits to a customer.
       *
       * Related guide: [Billing credits](https://docs.stripe.com/billing/subscriptions/usage-based/billing-credits)
       */
      interface CreditGrant {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'billing.credit_grant';

        amount: CreditGrant.Amount;

        applicability_config: CreditGrant.ApplicabilityConfig;

        /**
         * The category of this credit grant. This is for tracking purposes and isn't displayed to the customer.
         */
        category: CreditGrant.Category;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * ID of the customer receiving the billing credits.
         */
        customer: string | Stripe.Customer | Stripe.DeletedCustomer;

        /**
         * The time when the billing credits become effective-when they're eligible for use.
         */
        effective_at: number | null;

        /**
         * The time when the billing credits expire. If not present, the billing credits don't expire.
         */
        expires_at: number | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Stripe.Metadata;

        /**
         * A descriptive name shown in dashboard.
         */
        name: string | null;

        /**
         * The priority for applying this credit grant. The highest priority is 0 and the lowest is 100.
         */
        priority?: number | null;

        /**
         * ID of the test clock this credit grant belongs to.
         */
        test_clock: string | Stripe.TestHelpers.TestClock | null;

        /**
         * Time at which the object was last updated. Measured in seconds since the Unix epoch.
         */
        updated: number;

        /**
         * The time when this credit grant was voided. If not present, the credit grant hasn't been voided.
         */
        voided_at: number | null;
      }

      namespace CreditGrant {
        interface Amount {
          /**
           * The monetary amount.
           */
          monetary: Amount.Monetary | null;

          /**
           * The type of this amount. We currently only support `monetary` billing credits.
           */
          type: 'monetary';
        }

        namespace Amount {
          interface Monetary {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * A positive integer representing the amount.
             */
            value: number;
          }
        }

        interface ApplicabilityConfig {
          scope: ApplicabilityConfig.Scope;
        }

        namespace ApplicabilityConfig {
          interface Scope {
            /**
             * The price type that credit grants can apply to. We currently only support the `metered` price type. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `prices`.
             */
            price_type?: 'metered';

            /**
             * The prices that credit grants can apply to. We currently only support `metered` prices. This refers to prices that have a [Billing Meter](https://docs.stripe.com/api/billing/meter) attached to them. Cannot be used in combination with `price_type`.
             */
            prices?: Array<Scope.Price>;
          }

          namespace Scope {
            interface Price {
              /**
               * Unique identifier for the object.
               */
              id: string | null;
            }
          }
        }

        type Category = 'paid' | 'promotional';
      }
    }
  }
}
