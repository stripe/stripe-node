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
           * Unique identifier for the object.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.billing.intent';

          /**
           * Breakdown of the amount for this Billing Intent.
           */
          amount_details: Intent.AmountDetails;

          /**
           * ID of an existing Cadence to use.
           */
          cadence?: string;

          /**
           * Time at which the object was created.
           */
          created: string;

          /**
           * Three-letter ISO currency code, in lowercase. Must be a supported currency.
           */
          currency: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Current status of the Billing Intent.
           */
          status: Intent.Status;

          /**
           * Timestamps for status transitions of the Billing Intent.
           */
          status_transitions: Intent.StatusTransitions;
        }

        namespace Intent {
          interface AmountDetails {
            /**
             * Three-letter ISO currency code, in lowercase. Must be a supported currency.
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
             * Total amount for the Billing Intent.
             */
            total: string;
          }

          type Status = 'canceled' | 'committed' | 'draft' | 'reserved';

          interface StatusTransitions {
            /**
             * Time at which the Billing Intent was canceled.
             */
            canceled_at?: string;

            /**
             * Time at which the Billing Intent was committed.
             */
            committed_at?: string;

            /**
             * Time at which the Billing Intent was drafted.
             */
            drafted_at?: string;

            /**
             * Time at which the Billing Intent was reserved.
             */
            reserved_at?: string;
          }
        }
      }
    }
  }
}
