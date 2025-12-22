// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {PaginationParams} from '../shared.js';
import {ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class TaxCodeResource extends StripeResource {
  /**
   * A list of [all tax codes available](https://stripe.com/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
   */
  list(
    params?: TaxCodeListParams,
    options?: RequestOptions
  ): ApiListPromise<TaxCode>;
  list(options?: RequestOptions): ApiListPromise<TaxCode>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax_codes',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.
   */
  retrieve(
    id: string,
    params?: TaxCodeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TaxCode>>;
  retrieve(id: string, options?: RequestOptions): Promise<Response<TaxCode>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/tax_codes/{id}',
    }).call(this, ...args);
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
export interface TaxCodeRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface TaxCodeListParams extends PaginationParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
