// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace SharedPayment {
        interface GrantedTokenCreateParams {
          /**
           * The PaymentMethod that is going to be shared by the SharedPaymentGrantedToken.
           */
          payment_method: string;

          /**
           * Limits on how this SharedPaymentGrantedToken can be used.
           */
          usage_limits: GrantedTokenCreateParams.UsageLimits;

          /**
           * The Customer that the SharedPaymentGrantedToken belongs to. Should match the Customer that the PaymentMethod is attached to if any.
           */
          customer?: string;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to the SharedPaymentGrantedToken.
           */
          shared_metadata?: Stripe.Emptyable<{
            [key: string]: string;
          }>;
        }

        namespace GrantedTokenCreateParams {
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
             * Max amount that can be captured using this SharedPaymentToken
             */
            max_amount: number;
          }
        }
      }

      namespace SharedPayment {
        interface GrantedTokenUpdateParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
        }
      }

      namespace SharedPayment {
        class GrantedTokensResource {
          /**
           * Creates a new test SharedPaymentGrantedToken object. This endpoint is only available in test mode and allows sellers to create SharedPaymentGrantedTokens for testing their integration
           */
          create(
            params: GrantedTokenCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.SharedPayment.GrantedToken>>;

          /**
           * Revokes a test SharedPaymentGrantedToken object. This endpoint is only available in test mode and allows sellers to revoke SharedPaymentGrantedTokens for testing their integration
           */
          update(
            id: string,
            params?: GrantedTokenUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.SharedPayment.GrantedToken>>;
        }
      }
    }
  }
}
