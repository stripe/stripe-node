// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Balance transfers represent funds moving between balance types on your Stripe account.
     * They currently support moving funds between your Stripe balance and your [Issuing](https://docs.stripe.com/issuing) balance and between your [Allocated Funds](https://docs.stripe.com/connect/funds-segregation) balance and your Stripe balance.
     */
    interface BalanceTransfer {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'balance_transfer';

      /**
       * A positive integer representing how much was transferred in the smallest currency unit.
       */
      amount: number;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The balance that funds were transferred to.
       */
      destination_balance: BalanceTransfer.DestinationBalance | null;

      /**
       * A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
       */
      hosted_regulatory_receipt_url: string | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata;

      /**
       * The balance that funds were transferred from. One of `card`, `fpx`, or `bank_account`.
       */
      source_balance: BalanceTransfer.SourceBalance | null;
    }

    namespace BalanceTransfer {
      interface DestinationBalance {
        issuing?: DestinationBalance.Issuing;

        payments?: DestinationBalance.Payments;

        /**
         * Destination balance type to adjust for the Balance Transfer. One of `payments`, `issuing`, or `allocated_funds`.
         */
        type: string;
      }

      namespace DestinationBalance {
        interface Issuing {
          /**
           * Identifier for the balance_transaction that increased the destination balance.
           */
          balance_transaction?: string | Stripe.BalanceTransaction;
        }

        interface Payments {
          /**
           * Identifier for the balance_transaction that increased the destination balance.
           */
          balance_transaction?: string | Stripe.BalanceTransaction;
        }
      }

      interface SourceBalance {
        issuing?: SourceBalance.Issuing;

        payments?: SourceBalance.Payments;

        /**
         * Source balance type to adjust for the Balance Transfer. One of `payments`, `issuing`, or `allocated_funds`.
         */
        type: string;
      }

      namespace SourceBalance {
        interface Issuing {
          /**
           * Identifier for the balance_transaction that decreased the source balance.
           */
          balance_transaction?: string | Stripe.BalanceTransaction;
        }

        interface Payments {
          /**
           * Identifier for the balance_transaction that decreased the source balance.
           */
          balance_transaction: string | Stripe.BalanceTransaction;

          /**
           * The payments balance type that this BalanceTransfer pulled funds from. One of `card`, `fpx`, or `bank_account`.
           */
          source_type?: string;
        }
      }
    }
  }
}
