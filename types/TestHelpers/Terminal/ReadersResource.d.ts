// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace TestHelpers {
      namespace Terminal {
        interface ReaderPresentPaymentMethodParams {
          /**
           * Simulated on-reader tip amount.
           */
          amount_tip?: number;

          /**
           * Simulated data for the card_present payment method.
           */
          card_present?: ReaderPresentPaymentMethodParams.CardPresent;

          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * Simulated data for the interac_present payment method.
           */
          interac_present?: ReaderPresentPaymentMethodParams.InteracPresent;

          /**
           * Simulated payment type.
           */
          type?: ReaderPresentPaymentMethodParams.Type;
        }

        namespace ReaderPresentPaymentMethodParams {
          interface CardPresent {
            /**
             * The card number, as a string without any separators.
             */
            number?: string;
          }

          interface InteracPresent {
            /**
             * Card Number
             */
            number?: string;
          }

          type Type = 'card_present' | 'interac_present';
        }
      }

      namespace Terminal {
        interface ReaderSucceedInputCollectionParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;

          /**
           * This parameter defines the skip behavior for input collection.
           */
          skip_non_required_inputs?: ReaderSucceedInputCollectionParams.SkipNonRequiredInputs;
        }

        namespace ReaderSucceedInputCollectionParams {
          type SkipNonRequiredInputs = 'all' | 'none';
        }
      }

      namespace Terminal {
        interface ReaderTimeoutInputCollectionParams {
          /**
           * Specifies which fields in the response should be expanded.
           */
          expand?: Array<string>;
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

          /**
           * Use this endpoint to trigger a successful input collection on a simulated reader.
           */
          succeedInputCollection(
            id: string,
            params?: ReaderSucceedInputCollectionParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
          succeedInputCollection(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;

          /**
           * Use this endpoint to complete an input collection with a timeout error on a simulated reader.
           */
          timeoutInputCollection(
            id: string,
            params?: ReaderTimeoutInputCollectionParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
          timeoutInputCollection(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.Terminal.Reader>>;
        }
      }
    }
  }
}
