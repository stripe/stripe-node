// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {FeeRefund} from './FeeRefunds.js';
import {Account} from './Accounts.js';
import {Application} from './Applications.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {Charge} from './Charges.js';
import {
  PaginationParams,
  RangeQueryParam,
  MetadataParam,
  Emptyable,
} from '../shared.js';
import {ApiListPromise, Response, ApiList} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ApplicationFeeResource extends StripeResource {
  /**
   * Returns a list of application fees you've previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.
   */
  list(
    params?: ApplicationFeeListParams,
    options?: RequestOptions
  ): ApiListPromise<ApplicationFee>;
  list(options?: RequestOptions): ApiListPromise<ApplicationFee>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/application_fees',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.
   */
  retrieve(
    id: string,
    params?: ApplicationFeeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ApplicationFee>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ApplicationFee>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/application_fees/{id}',
    }).call(this, ...args);
  }

  /**
   * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.
   */
  retrieveRefund(
    feeId: string,
    id: string,
    params?: ApplicationFeeRetrieveRefundParams,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  retrieveRefund(
    feeId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  retrieveRefund(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }).call(this, ...args);
  }

  /**
   * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   *
   * This request only accepts metadata as an argument.
   */
  updateRefund(
    feeId: string,
    id: string,
    params?: ApplicationFeeUpdateRefundParams,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  updateRefund(
    feeId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  updateRefund(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/application_fees/{fee}/refunds/{id}',
    }).call(this, ...args);
  }

  /**
   * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through additional refunds.
   */
  listRefunds(
    id: string,
    params?: ApplicationFeeListRefundsParams,
    options?: RequestOptions
  ): ApiListPromise<FeeRefund>;
  listRefunds(id: string, options?: RequestOptions): ApiListPromise<FeeRefund>;
  listRefunds(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/application_fees/{id}/refunds',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Refunds an application fee that has previously been collected but not yet refunded.
   * Funds will be refunded to the Stripe account from which the fee was originally collected.
   *
   * You can optionally refund only part of an application fee.
   * You can do so multiple times, until the entire fee has been refunded.
   *
   * Once entirely refunded, an application fee can't be refunded again.
   * This method will raise an error when called on an already-refunded application fee,
   * or when trying to refund more money than is left on an application fee.
   */
  createRefund(
    id: string,
    params?: ApplicationFeeCreateRefundParams,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  createRefund(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FeeRefund>>;
  createRefund(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/application_fees/{id}/refunds',
    }).call(this, ...args);
  }
}
export /**
 * The ApplicationFee object.
 */
interface ApplicationFee {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'application_fee';

  /**
   * ID of the Stripe account this fee was taken from.
   */
  account: string | Account;

  /**
   * Amount earned, in cents (or local equivalent).
   */
  amount: number;

  /**
   * Amount in cents (or local equivalent) refunded (can be less than the amount attribute on the fee if a partial refund was issued)
   */
  amount_refunded: number;

  /**
   * ID of the Connect application that earned the fee.
   */
  application: string | Application;

  /**
   * Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * ID of the charge that the application fee was taken from.
   */
  charge: string | Charge;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Polymorphic source of the application fee. Includes the ID of the object the application fee was created from.
   */
  fee_source: ApplicationFee.FeeSource | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
   */
  originating_transaction: string | Charge | null;

  /**
   * Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
   */
  refunded: boolean;

  /**
   * A list of refunds that have been applied to the fee.
   */
  refunds: ApiList<FeeRefund>;
}
export namespace ApplicationFee {
  export interface FeeSource {
    /**
     * Charge ID that created this application fee.
     */
    charge?: string;

    /**
     * Payout ID that created this application fee.
     */
    payout?: string;

    /**
     * Type of object that created the application fee.
     */
    type: FeeSource.Type;
  }

  export namespace FeeSource {
    export type Type = 'charge' | 'payout';
  }
}
export interface ApplicationFeeRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeListParams extends PaginationParams {
  /**
   * Only return application fees for the charge specified by this charge ID.
   */
  charge?: string;

  /**
   * Only return applications fees that were created during the given date interval.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeCreateRefundParams {
  /**
   * A positive integer, in _cents (or local equivalent)_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
   */
  amount?: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export interface ApplicationFeeListRefundsParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeRetrieveRefundParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplicationFeeUpdateRefundParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;
}
