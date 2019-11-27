declare namespace Stripe {
  namespace Issuing {
    /**
     * The Transaction object.
     */
    interface Transaction {
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
       * Unique identifier for the object.
       */
      id?: string;

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

      merchant_data?: Issuing.MerchantData;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object?: 'issuing.transaction';

      /**
       * One of `capture`, `refund`, `cash_withdrawal`, `refund_reversal`, `dispute`, or `dispute_loss`.
       */
      type?: string;
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
      created?: range_query_specs | number;

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

    class TransactionsResource {
      /**
       * Returns a list of Issuing Transaction objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: TransactionListParams,
        options?: HeaderOptions
      ): Promise<ApiList<Issuing.Transaction>>;

      /**
       * Retrieves an Issuing Transaction object.
       */
      retrieve(
        id: string,
        params?: TransactionRetrieveParams,
        options?: HeaderOptions
      ): Promise<Issuing.Transaction>;

      /**
       * Updates the specified Issuing Transaction object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: TransactionUpdateParams,
        options?: HeaderOptions
      ): Promise<Issuing.Transaction>;
    }
  }
}