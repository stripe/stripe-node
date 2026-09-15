// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {ApplyExpandListItem, ApplyExpand, PaginationParams} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class TaxCodeResource extends StripeResource {
  /**
   * A list of [all tax codes available](https://stripe.com/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
   */
  list<E extends string = never>(
    params?: TaxCodeListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<TaxCode, E>> {
    return this._makeRequest('GET', '/v1/tax_codes', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.
   */
  retrieve<E extends string = never>(
    id: string,
    params?: TaxCodeRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<TaxCode, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/tax_codes/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface TaxCode {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax_code';

  /**
   * A detailed description of which types of products the tax code represents.
   */
  description: string;

  /**
   * A short name for the tax code.
   */
  name: string;
}
export interface TaxCodeRetrieveParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface TaxCodeListParams<E extends string = string>
  extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
