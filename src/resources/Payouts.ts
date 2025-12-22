// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {ApplicationFee} from './ApplicationFees.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {ExternalAccount, DeletedExternalAccount} from './ExternalAccounts.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class PayoutResource extends StripeResource {
  /**
   * Returns a list of existing payouts sent to third-party bank accounts or payouts that Stripe sent to you. The payouts return in sorted order, with the most recently created payouts appearing first.
   */
  list(
    params?: PayoutListParams,
    options?: RequestOptions
  ): ApiListPromise<Payout>;
  list(options?: RequestOptions): ApiListPromise<Payout>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/payouts',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * To send funds to your own bank account, create a new payout object. Your [Stripe balance](https://docs.stripe.com/api#balance) must cover the payout amount. If it doesn't, you receive an “Insufficient Funds” error.
   *
   * If your API key is in test mode, money won't actually be sent, though every other action occurs as if you're in live mode.
   *
   * If you create a manual payout on a Stripe account that uses multiple payment source types, you need to specify the source type balance that the payout draws from. The [balance object](https://docs.stripe.com/api#balance_object) details available and pending amounts by source type.
   */
  create(
    params: PayoutCreateParams,
    options?: RequestOptions
  ): Promise<Response<Payout>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/payouts',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list. Stripe returns the corresponding payout information.
   */
  retrieve(
    id: string,
    params?: PayoutRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Payout>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Payout>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/payouts/{payout}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified payout by setting the values of the parameters you pass. We don't change parameters that you don't provide. This request only accepts the metadata as arguments.
   */
  update(
    id: string,
    params?: PayoutUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Payout>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/payouts/{payout}',
    }).call(this, ...args);
  }

  /**
   * You can cancel a previously created payout if its status is pending. Stripe refunds the funds to your available balance. You can't cancel automatic Stripe payouts.
   */
  cancel(
    id: string,
    params?: PayoutCancelParams,
    options?: RequestOptions
  ): Promise<Response<Payout>>;
  cancel(id: string, options?: RequestOptions): Promise<Response<Payout>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/payouts/{payout}/cancel',
    }).call(this, ...args);
  }

  /**
   * Reverses a payout by debiting the destination bank account. At this time, you can only reverse payouts for connected accounts to US and Canadian bank accounts. If the payout is manual and in the pending status, use /v1/payouts/:id/cancel instead.
   *
   * By requesting a reversal through /v1/payouts/:id/reverse, you confirm that the authorized signatory of the selected bank account authorizes the debit on the bank account and that no other authorization is required.
   */
  reverse(
    id: string,
    params?: PayoutReverseParams,
    options?: RequestOptions
  ): Promise<Response<Payout>>;
  reverse(id: string, options?: RequestOptions): Promise<Response<Payout>>;
  reverse(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/payouts/{payout}/reverse',
    }).call(this, ...args);
  }
}
export interface Payout {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'payout';

  /**
   * The amount (in cents (or local equivalent)) that transfers to your bank account or debit card.
   */
  amount: number;

  /**
   * The application fee (if any) for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  application_fee: string | ApplicationFee | null;

  /**
   * The amount of the application fee (if any) requested for the payout. [See the Connect documentation](https://stripe.com/docs/connect/instant-payouts#monetization-and-fees) for details.
   */
  application_fee_amount: number | null;

  /**
   * Date that you can expect the payout to arrive in the bank. This factors in delays to account for weekends or bank holidays.
   */
  arrival_date: number;

  /**
   * Returns `true` if the payout is created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule) and `false` if it's [requested manually](https://stripe.com/docs/payouts#manual-payouts).
   */
  automatic: boolean;

  /**
   * ID of the balance transaction that describes the impact of this payout on your account balance.
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
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string | null;

  /**
   * ID of the bank account or card the payout is sent to.
   */
  destination: string | ExternalAccount | DeletedExternalAccount | null;

  /**
   * If the payout fails or cancels, this is the ID of the balance transaction that reverses the initial balance transaction and returns the funds from the failed payout back in your balance.
   */
  failure_balance_transaction: string | BalanceTransaction | null;

  /**
   * Error code that provides a reason for a payout failure, if available. View our [list of failure codes](https://stripe.com/docs/api#payout_failures).
   */
  failure_code: string | null;

  /**
   * Message that provides the reason for a payout failure, if available.
   */
  failure_message: string | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * The method used to send this payout, which can be `standard` or `instant`. `instant` is supported for payouts to debit cards and bank accounts in certain countries. Learn more about [bank support for Instant Payouts](https://stripe.com/docs/payouts/instant-payouts-banks).
   */
  method: string;

  /**
   * If the payout reverses another, this is the ID of the original payout.
   */
  original_payout: string | Payout | null;

  /**
   * ID of the v2 FinancialAccount the funds are sent to.
   */
  payout_method: string | null;

  /**
   * If `completed`, you can use the [Balance Transactions API](https://stripe.com/docs/api/balance_transactions/list#balance_transaction_list-payout) to list all balance transactions that are paid out in this payout.
   */
  reconciliation_status: Payout.ReconciliationStatus;

  /**
   * If the payout reverses, this is the ID of the payout that reverses this payout.
   */
  reversed_by: string | Payout | null;

  /**
   * The source balance this payout came from, which can be one of the following: `card`, `fpx`, or `bank_account`.
   */
  source_type: string;

  /**
   * Extra information about a payout that displays on the user's bank statement.
   */
  statement_descriptor: string | null;

  /**
   * Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it's submitted to the bank, when it becomes `in_transit`. The status changes to `paid` if the transaction succeeds, or to `failed` or `canceled` (within 5 business days). Some payouts that fail might initially show as `paid`, then change to `failed`.
   */
  status: string;

  /**
   * A value that generates from the beneficiary's bank that allows users to track payouts with their bank. Banks might call this a "reference number" or something similar.
   */
  trace_id: Payout.TraceId | null;

  /**
   * Can be `bank_account` or `card`.
   */
  type: Payout.Type;
}
export namespace Payout {
  export type ReconciliationStatus =
    | 'completed'
    | 'in_progress'
    | 'not_applicable';

  export interface TraceId {
    /**
     * Possible values are `pending`, `supported`, and `unsupported`. When `payout.status` is `pending` or `in_transit`, this will be `pending`. When the payout transitions to `paid`, `failed`, or `canceled`, this status will become `supported` or `unsupported` shortly after in most cases. In some cases, this may appear as `pending` for up to 10 days after `arrival_date` until transitioning to `supported` or `unsupported`.
     */
    status: string;

    /**
     * The trace ID value if `trace_id.status` is `supported`, otherwise `nil`.
     */
    value: string | null;
  }

  export type Type = 'bank_account' | 'card';
}
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
  metadata?: MetadataParam;

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
export namespace PayoutCreateParams {
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
  metadata?: Emptyable<MetadataParam>;
}
export interface PayoutListParams extends PaginationParams {
  /**
   * Only return payouts that are expected to arrive during the given date interval.
   */
  arrival_date?: RangeQueryParam | number;

  /**
   * Only return payouts that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

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
  metadata?: MetadataParam;
}
