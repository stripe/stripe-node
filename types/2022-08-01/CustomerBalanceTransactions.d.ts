// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    /**
     * Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
     * which denotes a debit or credit that's automatically applied to their next invoice upon finalization.
     * You may modify the value directly by using the [update customer API](https://stripe.com/docs/api/customers/update),
     * or by creating a Customer Balance Transaction, which increments or decrements the customer's `balance` by the specified `amount`.
     *
     * Related guide: [Customer Balance](https://stripe.com/docs/billing/customer/balance) to learn more.
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
      credit_note: string | Stripe.CreditNote | null;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
       */
      currency: string;

      /**
       * The ID of the customer the transaction belongs to.
       */
      customer: string | Stripe.Customer;

      /**
       * An arbitrary string attached to the object. Often useful for displaying to users.
       */
      description: string | null;

      /**
       * The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
       */
      ending_balance: number;

      /**
       * The ID of the invoice (if any) related to the transaction.
       */
      invoice: string | Stripe.Invoice | null;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: Stripe.Metadata | null;

      /**
       * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, or `unapplied_from_invoice`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
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
        | 'unspent_receiver_credit';
    }

    interface CustomerBalanceTransactionCreateParams {
      /**
       * The integer amount in **cents (or local equivalent)** to apply to the customer's credit balance.
       */
      amount: number;

      /**
       * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). Specifies the [`invoice_credit_balance`](https://stripe.com/docs/api/customers/object#customer_object-invoice_credit_balance) that this transaction will apply to. If the customer's `currency` is not set, it will be updated to this value.
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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
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
       * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
    }

    interface CustomerBalanceTransactionListParams extends PaginationParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
