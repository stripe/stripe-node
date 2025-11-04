// File generated from our OpenAPI spec

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
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

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
namespace CouponCreateParams {
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
  metadata?: Stripe.Emptyable<Stripe.MetadataParam>;

  /**
   * Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
   */
  name?: string;
}
namespace CouponUpdateParams {
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
  created?: Stripe.RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface CouponDeleteParams {}
