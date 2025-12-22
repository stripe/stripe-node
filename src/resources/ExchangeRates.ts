// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {PaginationParams} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ExchangeRateResource extends StripeResource {
  /**
   * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
   *
   * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
   * @deprecated
   */
  list(
    params?: ExchangeRateListParams,
    options?: RequestOptions
  ): ApiListPromise<ExchangeRate>;
  list(options?: RequestOptions): ApiListPromise<ExchangeRate>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/exchange_rates',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
   *
   * Retrieves the exchange rates from the given currency to every supported currency.
   * @deprecated
   */
  retrieve(
    id: string,
    params?: ExchangeRateRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ExchangeRate>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ExchangeRate>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/exchange_rates/{rate_id}',
    }).call(this, ...args);
  }
}
export interface ExchangeRate {
  /**
   * Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'exchange_rate';

  /**
   * Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.
   */
  rates: {
    [key: string]: number;
  };
}
export interface ExchangeRateRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ExchangeRateListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
