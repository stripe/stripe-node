// File generated from our OpenAPI spec

import {BalanceTransaction} from './BalanceTransactions.js';
import {Refund} from './Refunds.js';
import {Transfer} from './Transfers.js';
import {Metadata} from '../shared.js';
import {RequestOptions} from '../lib.js';
export interface TransferReversal {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'transfer_reversal';

  /**
   * Amount, in cents (or local equivalent).
   */
  amount: number;

  /**
   * Balance transaction that describes the impact on your account balance.
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Linked payment refund for the transfer reversal.
   */
  destination_payment_refund: string | Refund | null;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * ID of the refund responsible for the transfer reversal.
   */
  source_refund: string | Refund | null;

  /**
   * ID of the transfer that was reversed.
   */
  transfer: string | Transfer;
}
