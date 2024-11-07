// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * A fraud liability debit occurs when Stripe debits a platform's account for fraud losses on Issuing transactions.
       */
      interface FraudLiabilityDebit {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.fraud_liability_debit';

        /**
         * Debited amount. This is equal to the disputed amount and is given in the card's currency and in the smallest currency unit.
         */
        amount: number;

        /**
         * ID of the [balance transaction](https://stripe.com/docs/api/balance_transactions) associated with this debit.
         */
        balance_transaction: string | Stripe.BalanceTransaction | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * The currency of the debit. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        /**
         * The ID of the linked dispute.
         */
        dispute: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;
      }
    }
  }
}
