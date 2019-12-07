declare namespace Stripe {
  /**
   * The CustomerBalanceTransaction object.
   */
  interface CustomerBalanceTransaction {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'customer_balance_transaction';

    /**
     * The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
     */
    amount: number;

    /**
     * Time at which the object was created. Measured in seconds since the Unix epoch.
     */
    created: number;

    /**
     * The ID of the credit note (if any) related to the transaction.
     */
    credit_note?: string | CreditNote | null;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * The ID of the customer the transaction belongs to.
     */
    customer: string | Customer | DeletedCustomer;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string | null;

    /**
     * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
     */
    ending_balance: number;

    /**
     * The ID of the invoice (if any) related to the transaction.
     */
    invoice?: string | Invoice | DeletedInvoice | null;

    /**
     * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
     */
    livemode: boolean;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?:
      | {
        [key: string]: string;
      }
      | null;

    /**
     * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_too_large`, `invoice_too_small`, `unapplied_from_invoice`, or `unspent_receiver_credit`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
     */
    type: CustomerBalanceTransaction.Type;
  }

  namespace CustomerBalanceTransaction {
    type Type =
      | 'adjustment'
      | 'applied_to_invoice'
      | 'credit_note'
      | 'initial'
      | 'invoice_too_large'
      | 'invoice_too_small'
      | 'migration'
      | 'unapplied_from_invoice'
      | 'unspent_receiver_credit'
  }

  interface CustomerBalanceTransactionCreateParams {
    /**
     * The integer amount in **%s** to apply to the customer's balance. Pass a negative amount to credit the customer's balance, and pass in a positive amount to debit the customer's balance.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). If the customer's [`currency`](https://stripe.com/docs/api/customers/object#customer_object-currency) is set, this value must match it. If the customer's `currency` is not set, it will be updated to this value.
     */
    currency: string;

    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  interface CustomerBalanceTransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  interface CustomerBalanceTransactionUpdateParams {
    /**
     * An arbitrary string attached to the object. Often useful for displaying to users.
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
     */
    metadata?: {
      [key: string]: string;
    };
  }

  interface CustomerBalanceTransactionListParams {
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
}