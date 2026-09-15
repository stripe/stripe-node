// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {TransferReversal} from './TransferReversals.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {Account} from './Accounts.js';
import {Charge} from './Charges.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  MetadataParam,
  OtherString,
  Emptyable,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response, ApiList} from '../lib.js';

export class TransferResource extends StripeResource {
  /**
   * Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.
   */
  list<E extends string = never>(
    params?: TransferListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<Transfer, E>> {
    return this._makeRequest('GET', '/v1/transfers', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * To send funds from your Stripe account to a connected account, you create a new transfer object. Your [Stripe balance](https://docs.stripe.com/api#balance) must be able to cover the transfer amount, or you'll receive an “Insufficient Funds” error.
   */
  create<E extends string = never>(
    params: TransferCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Transfer, E>>> {
    return this._makeRequest('POST', '/v1/transfers', params, options) as any;
  }
  /**
   * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.
   */
  retrieve<E extends string = never>(
    id: string,
    params?: TransferRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Transfer, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/transfers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request accepts only metadata as an argument.
   */
  update<E extends string = never>(
    id: string,
    params?: TransferUpdateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Transfer, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/transfers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional reversals.
   */
  listReversals<E extends string = never>(
    id: string,
    params?: TransferListReversalsParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<TransferReversal, E>> {
    return this._makeRequest(
      'GET',
      `/v1/transfers/${encodeURIComponent(id)}/reversals`,
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * When you create a new reversal, you must specify a transfer to create it on.
   *
   * When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.
   *
   * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.
   */
  createReversal<E extends string = never>(
    id: string,
    params?: TransferCreateReversalParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TransferReversal, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/transfers/${encodeURIComponent(id)}/reversals`,
      params,
      options
    ) as any;
  }
  /**
   * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.
   */
  retrieveReversal<E extends string = never>(
    transferId: string,
    id: string,
    params?: TransferRetrieveReversalParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TransferReversal, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/transfers/${encodeURIComponent(
        transferId
      )}/reversals/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata and description as arguments.
   */
  updateReversal<E extends string = never>(
    transferId: string,
    id: string,
    params?: TransferUpdateReversalParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TransferReversal, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/transfers/${encodeURIComponent(
        transferId
      )}/reversals/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Transfer {
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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
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
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group: string | null;
}
export interface TransferCreateParams<E extends string = string> {
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
  expand?: Array<E>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-availability) for details.
   */
  source_transaction?: string;

  /**
   * The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
   */
  source_type?: TransferCreateParams.SourceType;

  /**
   * A string that identifies this transaction as part of a group. See the [Connect documentation](https://docs.stripe.com/connect/separate-charges-and-transfers#transfer-options) for details.
   */
  transfer_group?: string;
}
export namespace TransferCreateParams {
  export type SourceType = 'bank_account' | 'card' | 'fpx' | OtherString;
}
export interface TransferRetrieveParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface TransferUpdateParams<E extends string = string> {
  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
export interface TransferListParams<E extends string = string>
  extends PaginationParams {
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
  expand?: Array<E>;

  /**
   * Only return transfers with the specified transfer group.
   */
  transfer_group?: string;
}
export interface TransferCreateReversalParams<E extends string = string> {
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
  expand?: Array<E>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
   */
  refund_application_fee?: boolean;
}
export interface TransferListReversalsParams<E extends string = string>
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface TransferRetrieveReversalParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface TransferUpdateReversalParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
