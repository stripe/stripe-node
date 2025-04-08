// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    interface FxQuoteCreateParams {
      /**
       * A list of three letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be [supported currencies](https://stripe.com/docs/currencies).
       */
      from_currencies: Array<string>;

      /**
       * The duration that you wish the quote to be locked for. The quote will be usable for the duration specified. The default is `none`. The maximum is 1 day.
       */
      lock_duration: FxQuoteCreateParams.LockDuration;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      to_currency: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The usage specific information for the quote.
       */
      usage?: FxQuoteCreateParams.Usage;
    }

    namespace FxQuoteCreateParams {
      type LockDuration = 'day' | 'five_minutes' | 'hour' | 'none';

      interface Usage {
        /**
         * The payment transaction details that are intended for the FX Quote.
         */
        payment?: Usage.Payment;

        /**
         * The transfer transaction details that are intended for the FX Quote.
         */
        transfer?: Usage.Transfer;

        /**
         * Which transaction the FX Quote will be used for
         *
         * Can be “payment” | “transfer”
         */
        type: Usage.Type;
      }

      namespace Usage {
        interface Payment {
          /**
           * The Stripe account ID that the funds will be transferred to.
           *
           * This field should match the account ID that would be used in the PaymentIntent's transfer_data[destination] field.
           */
          destination?: string;

          /**
           * The Stripe account ID that these funds are intended for.
           *
           * This field should match the account ID that would be used in the PaymentIntent's on_behalf_of field.
           */
          on_behalf_of?: string;
        }

        interface Transfer {
          /**
           * The Stripe account ID that the funds will be transferred to.
           *
           * This field should match the account ID that would be used in the Transfer's destination field.
           */
          destination: string;
        }

        type Type = 'payment' | 'transfer';
      }
    }

    interface FxQuoteRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    interface FxQuoteListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    class FxQuotesResource {
      /**
       * Creates an FX Quote object
       */
      create(
        params: FxQuoteCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FxQuote>>;

      /**
       * Retrieve an FX Quote object
       */
      retrieve(
        id: string,
        params?: FxQuoteRetrieveParams,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FxQuote>>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Stripe.Response<Stripe.FxQuote>>;

      /**
       * Returns a list of FX quotes that have been issued. The FX quotes are returned in sorted order, with the most recent FX quotes appearing first.
       */
      list(
        params?: FxQuoteListParams,
        options?: RequestOptions
      ): ApiListPromise<Stripe.FxQuote>;
      list(options?: RequestOptions): ApiListPromise<Stripe.FxQuote>;
    }
  }
}
