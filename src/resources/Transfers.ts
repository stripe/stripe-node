// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {TransferReversal} from './TransferReversals.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {Account} from './Accounts.js';
import {Charge} from './Charges.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response, ApiList} from '../lib.js';
const stripeMethod = StripeResource.method;
export class TransferResource extends StripeResource {
  /**
   * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
   */
  list(
    params?: TransferListParams,
    options?: RequestOptions
  ): ApiListPromise<Transfer>;
  list(options?: RequestOptions): ApiListPromise<Transfer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/transfers',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://docs.stripe.com/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
   */
  create(
    params: TransferCreateParams,
    options?: RequestOptions
  ): Promise<Response<Transfer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/transfers',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
   */
  retrieve(
    id: string,
    params?: TransferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transfer>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Transfer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/transfers/{transfer}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request accepts only metadata as an argument.
   */
  update(
    id: string,
    params?: TransferUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Transfer>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/transfers/{transfer}',
    }).call(this, ...args);
  }

  /**
   * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
   */
  listReversals(
    id: string,
    params?: TransferListReversalsParams,
    options?: RequestOptions
  ): ApiListPromise<TransferReversal>;
  listReversals(
    id: string,
    options?: RequestOptions
  ): ApiListPromise<TransferReversal>;
  listReversals(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/transfers/{id}/reversals',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * When you create a new reversal, you must specify a transfer to create it on.
   *
   * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
   *
   * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
   */
  createReversal(
    id: string,
    params?: TransferCreateReversalParams,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  createReversal(
    id: string,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  createReversal(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/transfers/{id}/reversals',
    }).call(this, ...args);
  }

  /**
   * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
   */
  retrieveReversal(
    transferId: string,
    id: string,
    params?: TransferRetrieveReversalParams,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  retrieveReversal(
    transferId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  retrieveReversal(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata and description as arguments.
   */
  updateReversal(
    transferId: string,
    id: string,
    params?: TransferUpdateReversalParams,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  updateReversal(
    transferId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<TransferReversal>>;
  updateReversal(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/transfers/{transfer}/reversals/{id}',
    }).call(this, ...args);
  }
}
export /**
 * A `Transfer` object is created when you move funds between Stripe accounts as
 * part of Connect.
 *
 * Before April 6, 2017, transfers also represented movement of funds from a
 * Stripe account to a card or bank account. This behavior has since been split
 * out into a [Payout](https://stripe.com/docs/api#payout_object) object, with corresponding payout endpoints. For more
 * information, read about the
 * [transfer/payout split](https://stripe.com/docs/transfer-payout-split).
 *
 * Related guide: [Creating separate charges and transfers](https://stripe.com/docs/connect/separate-charges-and-transfers)
 */
interface Transfer {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'transfer';

  /**
   * Amount in cents (or local equivalent) to be transferred.
   */
  amount: number;

  /**
   * Amount in cents (or local equivalent) reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
   */
  amount_reversed: number;

  /**
   * Balance transaction that describes the impact of this transfer on your account balance.
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * Time that this record of the transfer was first created.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * ID of the Stripe account the transfer was sent to.
   */
  destination: string | Account | null;

  /**
   * If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
   */
  destination_payment?: string | Charge;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * A list of reversals that have been applied to the transfer.
   */
  reversals: ApiList<TransferReversal>;

  /**
   * Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
   */
  reversed: boolean;

  /**
   * ID of the charge that was used to fund the transfer. If null, the transfer was funded from the available balance.
   */
  source_transaction: string | Charge | null;

  /**
   * The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
   */
  source_type?: string;

  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group: string | null;
}
export interface TransferCreateParams {
  /**
   * Three-letter [ISO code for currency](https://www.iso.org/iso-4217-currency-codes.html) in lowercase. Must be a [supported currency](https://docs.stripe.com/currencies).
   */
  currency: string;

  /**
   * The ID of a connected Stripe account. [See the Connect documentation](https://docs.stripe.com/docs/connect/separate-charges-and-transfers) for details.
   */
  destination: string;

  /**
   * A positive integer in cents (or local equivalent) representing how much to transfer.
   */
  amount?: number;

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
  metadata?: MetadataParam;

  /**
   * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-availability) for details.
   */
  source_transaction?: string;

  /**
   * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
   */
  source_type?: TransferCreateParams.SourceType;

  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group?: string;
}
export namespace TransferCreateParams {
  export type SourceType = 'bank_account' | 'card' | 'fpx';
}
export interface TransferRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface TransferUpdateParams {
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
  metadata?: Emptyable<MetadataParam>;
}
export interface TransferListParams extends PaginationParams {
  /**
   * Only return transfers that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return transfers for the destination specified by this account ID.
   */
  destination?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return transfers with the specified transfer group.
   */
  transfer_group?: string;
}
export interface TransferCreateReversalParams {
  /**
   * A positive integer in cents (or local equivalent) representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
   */
  amount?: number;

  /**
   * An arbitrary string which you can attach to a reversal object. This will be unset if you POST an empty value.
   */
  description?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
   */
  refund_application_fee?: boolean;
}
export interface TransferListReversalsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface TransferRetrieveReversalParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface TransferUpdateReversalParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
