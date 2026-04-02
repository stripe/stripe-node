// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {PaginationParams} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class TaxCodeResource extends StripeResource {
  /**
   * A list of [all tax codes available](https://stripe.com/docs/tax/tax-categories) to add to Products in order to allow specific tax calculations.
   */
  list(
    params?: TaxCodeListParams,
    options?: RequestOptions
  ): ApiListPromise<TaxCode> {
    return this._makeRequest('GET', '/v1/tax_codes', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves the details of an existing tax code. Supply the unique tax code ID and Stripe will return the corresponding tax code information.
   */
  retrieve(
    id: string,
    params?: TaxCodeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TaxCode>> {
    return this._makeRequest(
      'GET',
      `/v1/tax_codes/${id}`,
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

  /**
   * An object that describes more information about the tax location required for this tax code. Some [tax codes](https://docs.stripe.com/tax/tax-for-tickets/integration-guide#types-of-products) require a tax location of type `performance` to calculate tax correctly.
   */
  requirements?: TaxCode.Requirements | null;
}
export namespace TaxCode {
  export interface Requirements {
    /**
     * Describes whether a performance location is required for a successful tax calculation with a tax code.
     */
    performance_location?: Requirements.PerformanceLocation;
  }

  export namespace Requirements {
    export type PerformanceLocation = 'optional' | 'required';
  }
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
