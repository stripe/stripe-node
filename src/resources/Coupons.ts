// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {
  Emptyable,
  MetadataParam,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {Response, ApiListPromise} from '../lib.js';
const stripeMethod = StripeResource.method;
export class CouponResource extends StripeResource {
  /**
   * You can delete coupons via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons via the API.
   */
  del(
    id: string,
    params?: CouponDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedCoupon>>;
  del(id: string, options?: RequestOptions): Promise<Response<DeletedCoupon>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/coupons/{coupon}',
    }).call(this, ...args);
  }

  /**
   * Retrieves the coupon with the given ID.
   */
  retrieve(
    id: string,
    params?: CouponRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Coupon>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<Coupon>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/coupons/{coupon}',
    }).call(this, ...args);
  }

  /**
   * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
   */
  update(
    id: string,
    params?: CouponUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Coupon>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/coupons/{coupon}',
    }).call(this, ...args);
  }

  /**
   * Returns a list of your coupons.
   */
  list(
    params?: CouponListParams,
    options?: RequestOptions
  ): ApiListPromise<Coupon>;
  list(options?: RequestOptions): ApiListPromise<Coupon>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/coupons',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * You can create coupons easily via the [coupon management](https://dashboard.stripe.com/coupons) page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.
   *
   * A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of 100 will have a final total of 0 if a coupon with an amount_off of 200 is applied to it and an invoice with a subtotal of 300 will have a final total of 100 if a coupon with an amount_off of 200 is applied to it.
   */
  create(
    params?: CouponCreateParams,
    options?: RequestOptions
  ): Promise<Response<Coupon>>;
  create(options?: RequestOptions): Promise<Response<Coupon>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/coupons',
    }).call(this, ...args);
  }
}
export interface Coupon {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'coupon';

  /**
   * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
   */
  amount_off: number | null;

  applies_to?: Coupon.AppliesTo;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
   */
  currency: string | null;

  /**
   * Coupons defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currency_options?: {
    [key: string]: Coupon.CurrencyOptions;
  };

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * One of `forever`, `once`, or `repeating`. Describes how long a customer who applies this coupon will get the discount.
   */
  duration: Coupon.Duration;

  /**
   * If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
   */
  duration_in_months: number | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
   */
  max_redemptions: number | null;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Name of the coupon displayed to customers on for instance invoices or receipts.
   */
  name: string | null;

  /**
   * Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a $ (or local equivalent)100 invoice $ (or local equivalent)50 instead.
   */
  percent_off: number | null;

  /**
   * Date after which the coupon can no longer be redeemed.
   */
  redeem_by: number | null;

  /**
   * Number of times this coupon has been applied to a customer.
   */
  times_redeemed: number;

  /**
   * Taking account of the above properties, whether this coupon can still be applied to a customer.
   */
  valid: boolean;
}
export interface DeletedCoupon {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'coupon';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
export namespace Coupon {
  export interface AppliesTo {
    /**
     * A list of product IDs this coupon applies to
     */
    products: Array<string>;
  }

  export interface CurrencyOptions {
    /**
     * Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
     */
    amount_off: number;
  }

  export type Duration = 'forever' | 'once' | 'repeating';
}
export interface CouponCreateParams {
  /**
   * A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
   */
  amount_off?: number;

  /**
   * A hash containing directions for what this Coupon will apply discounts to.
   */
  applies_to?: CouponCreateParams.AppliesTo;

  /**
   * Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
   */
  currency?: string;

  /**
   * Coupons defined in each available currency option (only supported if `amount_off` is passed). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currency_options?: {
    [key: string]: CouponCreateParams.CurrencyOptions;
  };

  /**
   * Specifies how long the discount will be in effect if used on a subscription. Defaults to `once`.
   */
  duration?: CouponCreateParams.Duration;

  /**
   * Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
   */
  duration_in_months?: number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
   */
  id?: string;

  /**
   * A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
   */
  max_redemptions?: number;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string;

  /**
   * A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
   */
  percent_off?: number;

  /**
   * Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.
   */
  redeem_by?: number;
}
export namespace CouponCreateParams {
  export interface AppliesTo {
    /**
     * An array of Product IDs that this Coupon will apply to.
     */
    products?: Array<string>;
  }

  export interface CurrencyOptions {
    /**
     * A positive integer representing the amount to subtract from an invoice total.
     */
    amount_off: number;
  }

  export type Duration = 'forever' | 'once' | 'repeating';
}
export interface CouponRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CouponUpdateParams {
  /**
   * Coupons defined in each available currency option (only supported if the coupon is amount-based). Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
   */
  currency_options?: {
    [key: string]: CouponUpdateParams.CurrencyOptions;
  };

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string;
}
export namespace CouponUpdateParams {
  export interface CurrencyOptions {
    /**
     * A positive integer representing the amount to subtract from an invoice total.
     */
    amount_off: number;
  }
}
export interface CouponListParams extends PaginationParams {
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CouponDeleteParams {}
