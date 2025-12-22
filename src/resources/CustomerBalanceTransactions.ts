// File generated from our OpenAPI spec

import {CreditNote} from './CreditNotes.js';
import {Customer} from './Customers.js';
import {Invoice} from './Invoices.js';
import * as Checkout from './Checkout/index.js';
import {Metadata} from '../shared.js';
export interface CustomerBalanceTransaction {
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
   * The ID of the checkout session (if any) that created the transaction.
   */
  checkout_session: string | Checkout.Session | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The ID of the credit note (if any) related to the transaction.
   */
  credit_note: string | CreditNote | null;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The ID of the customer the transaction belongs to.
   */
  customer: string | Customer;

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
  invoice: string | Invoice | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_overpaid`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, `unapplied_from_invoice`, `checkout_session_subscription_payment`, or `checkout_session_subscription_payment_canceled`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.
   */
  type: CustomerBalanceTransaction.Type;
}
export namespace CustomerBalanceTransaction {
  export type Type =
    | 'adjustment'
    | 'applied_to_invoice'
    | 'checkout_session_subscription_payment'
    | 'checkout_session_subscription_payment_canceled'
    | 'credit_note'
    | 'initial'
    | 'invoice_overpaid'
    | 'invoice_too_large'
    | 'invoice_too_small'
    | 'migration'
    | 'unapplied_from_invoice'
    | 'unspent_receiver_credit';
}
