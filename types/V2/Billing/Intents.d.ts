// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The Intent object.
         */
        interface Intent {
          /**
           * Unique identifier for the BillingIntent.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.intent';

          /**
           * Breakdown of the amount for this BillingIntent.
           */
          amount_details: Intent.AmountDetails;

          /**
           * ID of an existing Cadence to use.
           */
          cadence: string | null;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Three-letter ISO currency code, in lowercase.
           */
          currency: string;

          /**
           * When the BillingIntent will take effect.
           */
          effective_at: Intent.EffectiveAt;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Current status of the BillingIntent.
           */
          status: Intent.Status;

          /**
           * Timestamps for status transitions of the BillingIntent.
           */
          status_transitions: Intent.StatusTransitions;
        }

        namespace Intent {
          interface AmountDetails {
            /**
             * Three-letter ISO currency code, in lowercase.
             */
            currency: string;

            /**
             * Amount of discount applied.
             */
            discount: string;

            /**
             * Amount of shipping charges.
             */
            shipping: string;

            /**
             * Subtotal amount before tax and discounts.
             */
            subtotal: string;

            /**
             * Amount of tax.
             */
            tax: string;

            /**
             * Total amount for the BillingIntent.
             */
            total: string;
          }

          type EffectiveAt =
            | 'current_billing_period_start'
            | 'on_commit'
            | 'on_reserve';

          type Status = 'canceled' | 'committed' | 'draft' | 'reserved';

          interface StatusTransitions {
            /**
             * Time at which the BillingIntent was canceled.
             */
            canceled_at: string | null;

            /**
             * Time at which the BillingIntent was committed.
             */
            committed_at: string | null;

            /**
             * Time at which the BillingIntent was drafted.
             */
            drafted_at: string | null;

            /**
             * Time at which the BillingIntent was reserved.
             */
            reserved_at: string | null;
          }
        }
      }
    }
  }
}
