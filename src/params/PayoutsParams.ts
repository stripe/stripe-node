// File generated from our OpenAPI spec

export interface PayoutCreateParams {
  /**
   * A positive integer in cents representing how much to payout.
   */
  amount: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The ID of a bank account or a card to send the payout to. If you don't provide a destination, we use the default external account for the specified currency.
   */
  destination?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.MetadataParam;

  /**
   * The method used to send this payout, which is `standard` or `instant`. We support `instant` for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method?: PayoutCreateParams.Method;

  /**
   * The ID of a v2 FinancialAccount to send funds to.
   */
  payout_method?: string;

  /**
   * The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the Balances API. One of `bank_account`, `card`, or `fpx`.
   */
  source_type?: PayoutCreateParams.SourceType;

  /**
   * A string that displays on the recipient's bank or card statement (up to 22 characters). A `statement_descriptor` that's longer than 22 characters return an error. Most banks truncate this information and display it inconsistently. Some banks might not display it at all.
   */
  statement_descriptor?: string;
}
namespace PayoutCreateParams {
  export type Method = 'instant' | 'standard';

  export type SourceType = 'bank_account' | 'card' | 'fpx';
}
export interface PayoutRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PayoutUpdateParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;
}
export interface PayoutListParams extends PaginationParams {
  /**
   * Only return payouts that are expected to arrive during the given date interval.
   */
  arrival_date?: Stripe.RangeQueryParam | number;

  /**
   * Only return payouts that were created during the given date interval.
   */
  created?: Stripe.RangeQueryParam | number;

  /**
   * The ID of an external account - only return payouts sent to this external account.
   */
  destination?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.
   */
  status?: string;
}
export interface PayoutCancelParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface PayoutReverseParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Stripe.MetadataParam;
}
