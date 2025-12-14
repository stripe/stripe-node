// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace SharedPayment {
      /**
       * SharedPaymentGrantedToken is the view-only resource of a SharedPaymentIssuedToken, which is a limited-use reference to a PaymentMethod.
       * When another Stripe merchant shares a SharedPaymentIssuedToken with you, you can view attributes of the shared token using the SharedPaymentGrantedToken API, and use it with a PaymentIntent.
       */
      interface GrantedToken {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'shared_payment.granted_token';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Time at which this SharedPaymentGrantedToken expires and can no longer be used to confirm a PaymentIntent.
         */
        deactivated_at: number | null;

        /**
         * The reason why the SharedPaymentGrantedToken has been deactivated.
         */
        deactivated_reason: GrantedToken.DeactivatedReason | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Metadata about the SharedPaymentGrantedToken.
         */
        shared_metadata: {
          [key: string]: string;
        } | null;

        /**
         * Some details about how the SharedPaymentGrantedToken has been used already.
         */
        usage_details: GrantedToken.UsageDetails | null;

        /**
         * Limits on how this SharedPaymentGrantedToken can be used.
         */
        usage_limits: GrantedToken.UsageLimits | null;
      }

      namespace GrantedToken {
        type DeactivatedReason = 'consumed' | 'expired' | 'revoked';

        interface UsageDetails {
          /**
           * The total amount captured using this SharedPaymentToken.
           */
          amount_captured: UsageDetails.AmountCaptured | null;
        }

        namespace UsageDetails {
          interface AmountCaptured {
            /**
             * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
             */
            currency: string;

            /**
             * Integer value of the amount in the smallest currency unit.
             */
            value: number;
          }
        }

        interface UsageLimits {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * Time at which this SharedPaymentToken expires and can no longer be used to confirm a PaymentIntent.
           */
          expires_at: number;

          /**
           * Max amount that can be captured using this SharedPaymentToken.
           */
          max_amount: number;
        }
      }
    }
  }
}
