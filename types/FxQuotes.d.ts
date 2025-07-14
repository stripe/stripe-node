// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * The FX Quotes API provides three functions:
     * - View Stripe's current exchange rate for any given currency pair.
     * - Extend quoted rates for a 1-hour period or a 24-hour period, minimizing uncertainty from FX fluctuations.
     * - Preview the FX fees Stripe will charge on your FX transaction, allowing you to anticipate specific settlement amounts before payment costs.
     *
     * [View the docs](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api)
     */
    interface FxQuote {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'fx_quote';

      /**
       * Time at which the quote was created, measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The duration the exchange rate quote remains valid from creation time. Allowed values are none, hour, and day. Note that for the test mode API available in alpha, you can request an extended quote, but it won't be usable for any transactions.
       */
      lock_duration: FxQuote.LockDuration;

      /**
       * Time at which the quote will expire, measured in seconds since the Unix epoch.
       *
       * If lock_duration is set to ‘none' this field will be set to null.
       */
      lock_expires_at: number | null;

      /**
       * Lock status of the quote. Transitions from active to expired once past the lock_expires_at timestamp.
       *
       * Can return value none, active, or expired.
       */
      lock_status: FxQuote.LockStatus;

      /**
       * Information about the rates.
       */
      rates: {
        [key: string]: FxQuote.Rates;
      };

      /**
       * The currency to convert into, typically this is the currency that you want to settle to your Stripe balance. Three-letter ISO currency code, in lowercase. Must be a supported currency.
       */
      to_currency: string;

      usage: FxQuote.Usage;
    }

    namespace FxQuote {
      type LockDuration = 'day' | 'five_minutes' | 'hour' | 'none';

      type LockStatus = 'active' | 'expired' | 'none';

      interface Rates {
        /**
         * The rate that includes the FX fee rate.
         */
        exchange_rate: number;

        rate_details: Rates.RateDetails;
      }

      namespace Rates {
        interface RateDetails {
          /**
           * The rate for the currency pair.
           */
          base_rate: number;

          /**
           * The fee for locking the conversion rates.
           */
          duration_premium: number;

          /**
           * The FX fee for the currency pair.
           */
          fx_fee_rate: number;

          /**
           * A reference rate for the currency pair provided by the reference rate provider.
           */
          reference_rate: number | null;

          /**
           * The reference rate provider.
           */
          reference_rate_provider: 'ecb' | null;
        }
      }

      interface Usage {
        /**
         * The details required to use an FX Quote for a payment
         */
        payment: Usage.Payment | null;

        /**
         * The details required to use an FX Quote for a transfer
         */
        transfer: Usage.Transfer | null;

        /**
         * The transaction type for which the FX Quote will be used.
         *
         * Can be 'payment' or 'transfer'.
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
          destination: string | null;

          /**
           * The Stripe account ID that these funds are intended for.
           *
           * This field must match the account ID that would be used in the PaymentIntent's on_behalf_of field.
           */
          on_behalf_of: string | null;
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
  }
}
