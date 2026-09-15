// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {ApplyExpandListItem, ApplyExpand, PaginationParams} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class ExchangeRateResource extends StripeResource {
  /**
   * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
   *
   * Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.
   * @deprecated
   */
  list<E extends string = never>(
    params?: ExchangeRateListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<ExchangeRate, E>> {
    return this._makeRequest('GET', '/v1/exchange_rates', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * [Deprecated] The ExchangeRate APIs are deprecated. Please use the [FX Quotes API](https://docs.stripe.com/payments/currencies/localize-prices/fx-quotes-api) instead.
   *
   * Retrieves the exchange rates from the given currency to every supported currency.
   * @deprecated
   */
  retrieve<E extends string = never>(
    id: string,
    params?: ExchangeRateRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ExchangeRate, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/exchange_rates/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
export interface ExchangeRateRetrieveParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface ExchangeRateListParams<E extends string = string>
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
