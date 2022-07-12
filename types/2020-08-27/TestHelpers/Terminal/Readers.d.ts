// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Terminal {
        interface ReaderPresentPaymentMethodParams {
          /**
           * Simulated data for the card_present payment method
           */
          card_present?: ReaderPresentPaymentMethodParams.CardPresent;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Simulated payment type
           */
          type?: 'card_present';
        }

        namespace ReaderPresentPaymentMethodParams {
          interface CardPresent {
            /**
             * Card Number
             */
            number?: string;
          }
        }
      }

      namespace Terminal {
        class ReadersResource {
          /**
           * Presents a payment method on a simulated reader. Can be used to simulate accepting a payment, saving a card or refunding a transaction.
           */
          presentPaymentMethod(
            id: string,
            params?: ReaderPresentPaymentMethodParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
          presentPaymentMethod(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
        }
      }
    }
  }
}
