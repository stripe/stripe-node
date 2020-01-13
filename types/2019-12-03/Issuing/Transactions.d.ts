declare module 'stripe' {
  namespace Stripe {
    namespace Issuing {
      /**
       * The Transaction object.
       */
      interface Transaction {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'issuing.transaction';

        /**
         * The amount of this transaction in your currency. This is the amount that your balance will be updated by.
         */
        amount: number;

        /**
         * The `Authorization` object that led to this transaction.
         */
        authorization: string | Stripe.Issuing.Authorization | null;

        balance_transaction: string | Stripe.BalanceTransaction | null;

        /**
         * The card used to make this transaction.
         */
        card: string | Stripe.Issuing.Card;

        /**
         * The cardholder to whom this transaction belongs.
         */
        cardholder: string | Stripe.Issuing.Cardholder | null;

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
         */
        currency: string;

        dispute: string | Stripe.Issuing.Dispute | null;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The amount that the merchant will receive, denominated in `merchant_currency`. It will be different from `amount` if the merchant is taking payment in a different currency.
         */
        merchant_amount: number;

        /**
         * The currency with which the merchant is taking payment.
         */
        merchant_currency: string;

        merchant_data: Transaction.MerchantData;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata;

        /**
         * The nature of the transaction.
         */
        type: Transaction.Type;
      }

      namespace Transaction {
        interface MerchantData {
          /**
           * A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
           */
          category: string;

          /**
           * City where the seller is located
           */
          city: string | null;

          /**
           * Country where the seller is located
           */
          country: string | null;

          /**
           * Name of the seller
           */
          name: string | null;

          /**
           * Identifier assigned to the seller by the card brand
           */
          network_id: string;

          /**
           * Postal code where the seller is located
           */
          postal_code: string | null;

          /**
           * State where the seller is located
           */
          state: string | null;

          /**
           * The url an online purchase was made from
           */
          url: string | null;
        }

        type Type =
          | 'capture'
          | 'cash_withdrawal'
          | 'dispute'
          | 'dispute_loss'
          | 'refund'
          | 'refund_reversal';
      }

      interface TransactionRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface TransactionUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam | '';
      }

      interface TransactionListParams extends PaginationParams {
        /**
         * Only return transactions that belong to the given card.
         */
        card?: string;

        /**
         * Only return transactions that belong to the given cardholder.
         */
        cardholder?: string;

        /**
         * Only return transactions that were created during the given date interval.
         */
        created?: RangeQueryParam | number;

        /**
         * Only return transactions that originate from a given dispute.
         */
        dispute?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class TransactionsResource {
        /**
         * Retrieves an Issuing Transaction object.
         */
        retrieve(
          id: string,
          params?: TransactionRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Transaction>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Transaction>;

        /**
         * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: TransactionUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Issuing.Transaction>;

        /**
         * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: TransactionListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Transaction>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Issuing.Transaction>;
      }
    }
  }
}
