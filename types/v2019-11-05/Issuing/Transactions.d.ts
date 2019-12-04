declare namespace Stripe {
  namespace Issuing {
    /**
     * The Transaction object.
     */
    interface Transaction {
      /**
       * Unique identifier for the object.
       */
      id?: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.transaction';

      /**
       * The amount of this transaction in your currency. This is the amount that your balance will be updated by.
       */
      amount?: number;

      /**
       * The `Authorization` object that led to this transaction.
       */
      authorization?: string | Issuing.Authorization | null;

      balance_transaction?: string | BalanceTransaction | null;

      /**
       * The card used to make this transaction.
       */
      card?: string | Issuing.Card;

      /**
       * The cardholder to whom this transaction belongs.
       */
      cardholder?: string | Issuing.Cardholder | null;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created?: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency?: string;

      dispute?: string | Issuing.Dispute | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode?: boolean;

      /**
       * The amount that the merchant will receive, denominated in `merchant_currency`. It will be different from `amount` if the merchant is taking payment in a different currency.
       */
      merchant_amount?: number;

      /**
       * The currency with which the merchant is taking payment.
       */
      merchant_currency?: string;

      merchant_data?: Transaction.MerchantData;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * One of `capture`, `refund`, `cash_withdrawal`, `refund_reversal`, `dispute`, or `dispute_loss`.
       */
      type?: string;
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
        city?: string | null;

        /**
         * Country where the seller is located
         */
        country?: string | null;

        /**
         * Name of the seller
         */
        name?: string | null;

        /**
         * Identifier assigned to the seller by the card brand
         */
        network_id: string;

        /**
         * Postal code where the seller is located
         */
        postal_code?: string | null;

        /**
         * State where the seller is located
         */
        state?: string | null;

        /**
         * The url an online purchase was made from
         */
        url?: string | null;
      }
    }

    /**
     * Retrieves an Issuing Transaction object.
     */
    interface TransactionRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
    interface TransactionUpdateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      metadata?:
        | {
          [key: string]: string;
        }
        | '';
    }

    /**
     * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface TransactionListParams {
      /**
       * Only return issuing transactions that belong to the given card.
       */
      card?: string;

      /**
       * Only return authorizations belonging to the given cardholder.
       */
      cardholder?: string;

      /**
       * Only return transactions that were created during the given date interval.
       */
      created?: number | TransactionListParams.Created;

      /**
       * Only return transactions that originate from a given dispute.
       */
      dispute?: string;

      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }

    namespace TransactionListParams {
      interface Created {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }
    }

    class TransactionsResource {
      /**
       * Retrieves an Issuing Transaction object.
       */
      retrieve(
        id: string,
        params?: TransactionRetrieveParams,
        options?: RequestOptions
      ): Promise<Issuing.Transaction>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Issuing.Transaction>;

      /**
       * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: TransactionUpdateParams,
        options?: RequestOptions
      ): Promise<Issuing.Transaction>;

      /**
       * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: TransactionListParams,
        options?: RequestOptions
      ): ApiListPromise<Issuing.Transaction>;
      list(options?: RequestOptions): ApiListPromise<Issuing.Transaction>;
    }
  }
}