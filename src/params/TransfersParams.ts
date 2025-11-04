// File generated from our OpenAPI spec

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
  metadata?: Stripe.MetadataParam;

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
namespace TransferCreateParams {
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
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
export interface TransferListParams extends PaginationParams {
  /**
   * Only return transfers that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

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
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

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
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
