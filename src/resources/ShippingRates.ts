// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../Types.js';
import {TaxCode} from './TaxCodes.js';
import {
  MetadataParam,
  Emptyable,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ShippingRateResource extends StripeResource {
  /**
   * Returns a list of your shipping rates.
   */
  list(
    params?: ShippingRateListParams,
    options?: RequestOptions
  ): ApiListPromise<ShippingRate>;
  list(options?: RequestOptions): ApiListPromise<ShippingRate>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/shipping_rates',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new shipping rate object.
   */
  create(
    params: ShippingRateCreateParams,
    options?: RequestOptions
  ): Promise<Response<ShippingRate>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/shipping_rates',
    }).call(this, ...args);
  }

  /**
   * Returns the shipping rate object with the given ID.
   */
  retrieve(
    id: string,
    params?: ShippingRateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ShippingRate>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ShippingRate>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing shipping rate object.
   */
  update(
    id: string,
    params?: ShippingRateUpdateParams,
    options?: RequestOptions
  ): Promise<Response<ShippingRate>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/shipping_rates/{shipping_rate_token}',
    }).call(this, ...args);
  }
}
export /**
 * Shipping rates describe the price of shipping presented to your customers and
 * applied to a purchase. For more information, see [Charge for shipping](https://stripe.com/docs/payments/during-payment/charge-shipping).
 */
interface ShippingRate {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'shipping_rate';

  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active: boolean;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  delivery_estimate: ShippingRate.DeliveryEstimate | null;

  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  display_name: string | null;

  fixed_amount?: ShippingRate.FixedAmount;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  tax_behavior: ShippingRate.TaxBehavior | null;

  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  tax_code: string | TaxCode | null;

  /**
   * The type of calculation to use on the shipping rate.
   */
  type: 'fixed_amount';
}
export namespace ShippingRate {
  export interface DeliveryEstimate {
    /**
     * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
     */
    maximum: DeliveryEstimate.Maximum | null;

    /**
     * The lower bound of the estimated range. If empty, represents no lower bound.
     */
    minimum: DeliveryEstimate.Minimum | null;
  }

  export interface FixedAmount {
    /**
     * A non-negative integer in cents representing how much to charge.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: {
      [key: string]: FixedAmount.CurrencyOptions;
    };
  }

  export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

  export namespace DeliveryEstimate {
    export interface Maximum {
      /**
       * A unit of time.
       */
      unit: Maximum.Unit;

      /**
       * Must be greater than 0.
       */
      value: number;
    }

    export interface Minimum {
      /**
       * A unit of time.
       */
      unit: Minimum.Unit;

      /**
       * Must be greater than 0.
       */
      value: number;
    }

    export namespace Maximum {
      export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
    }

    export namespace Minimum {
      export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
    }
  }

  export namespace FixedAmount {
    export interface CurrencyOptions {
      /**
       * A non-negative integer in cents representing how much to charge.
       */
      amount: number;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior: CurrencyOptions.TaxBehavior;
    }

    export namespace CurrencyOptions {
      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }
  }
}
export interface ShippingRateCreateParams {
  /**
   * The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  display_name: string;

  /**
   * The estimated range for how long shipping will take, meant to be displayable to the customer. This will appear on CheckoutSessions.
   */
  delivery_estimate?: ShippingRateCreateParams.DeliveryEstimate;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixed_amount?: ShippingRateCreateParams.FixedAmount;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  tax_behavior?: ShippingRateCreateParams.TaxBehavior;

  /**
   * A [tax code](https://stripe.com/docs/tax/tax-categories) ID. The Shipping tax code is `txcd_92010001`.
   */
  tax_code?: string;

  /**
   * The type of calculation to use on the shipping rate.
   */
  type?: 'fixed_amount';
}
export namespace ShippingRateCreateParams {
  export interface DeliveryEstimate {
    /**
     * The upper bound of the estimated range. If empty, represents no upper bound i.e., infinite.
     */
    maximum?: DeliveryEstimate.Maximum;

    /**
     * The lower bound of the estimated range. If empty, represents no lower bound.
     */
    minimum?: DeliveryEstimate.Minimum;
  }

  export interface FixedAmount {
    /**
     * A non-negative integer in cents representing how much to charge.
     */
    amount: number;

    /**
     * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency: string;

    /**
     * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: {
      [key: string]: FixedAmount.CurrencyOptions;
    };
  }

  export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

  export namespace DeliveryEstimate {
    export interface Maximum {
      /**
       * A unit of time.
       */
      unit: Maximum.Unit;

      /**
       * Must be greater than 0.
       */
      value: number;
    }

    export interface Minimum {
      /**
       * A unit of time.
       */
      unit: Minimum.Unit;

      /**
       * Must be greater than 0.
       */
      value: number;
    }

    export namespace Maximum {
      export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
    }

    export namespace Minimum {
      export type Unit = 'business_day' | 'day' | 'hour' | 'month' | 'week';
    }
  }

  export namespace FixedAmount {
    export interface CurrencyOptions {
      /**
       * A non-negative integer in cents representing how much to charge.
       */
      amount: number;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: CurrencyOptions.TaxBehavior;
    }

    export namespace CurrencyOptions {
      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }
  }
}
export interface ShippingRateRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ShippingRateUpdateParams {
  /**
   * Whether the shipping rate can be used for new purchases. Defaults to `true`.
   */
  active?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Describes a fixed amount to charge for shipping. Must be present if type is `fixed_amount`.
   */
  fixed_amount?: ShippingRateUpdateParams.FixedAmount;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: Emptyable<MetadataParam>;

  /**
   * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
   */
  tax_behavior?: ShippingRateUpdateParams.TaxBehavior;
}
export namespace ShippingRateUpdateParams {
  export interface FixedAmount {
    /**
     * Shipping rates defined in each available currency option. Each key must be a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) and a [supported currency](https://stripe.com/docs/currencies).
     */
    currency_options?: {
      [key: string]: FixedAmount.CurrencyOptions;
    };
  }

  export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';

  export namespace FixedAmount {
    export interface CurrencyOptions {
      /**
       * A non-negative integer in cents representing how much to charge.
       */
      amount?: number;

      /**
       * Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`.
       */
      tax_behavior?: CurrencyOptions.TaxBehavior;
    }

    export namespace CurrencyOptions {
      export type TaxBehavior = 'exclusive' | 'inclusive' | 'unspecified';
    }
  }
}
export interface ShippingRateListParams extends PaginationParams {
  /**
   * Only return shipping rates that are active or inactive.
   */
  active?: boolean;

  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: RangeQueryParam | number;

  /**
   * Only return shipping rates for the given currency.
   */
  currency?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
