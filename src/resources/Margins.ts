// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {MetadataParam, PaginationParams, Metadata} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class MarginResource extends StripeResource {
  /**
   * Retrieve a list of your margins.
   */
  list(
    params?: MarginListParams,
    options?: RequestOptions
  ): ApiListPromise<Margin> {
    return this._makeRequest('GET', '/v1/billing/margins', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a margin object to be used with invoices, invoice items, and invoice line items for a customer to represent a partner discount. A margin has a percent_off which is the percent that will be taken off the subtotal after all items and other discounts and promotions) of any invoices for a customer. Calculation of prorations do not include any partner margins applied on the original invoice item.
   */
  create(
    params: MarginCreateParams,
    options?: RequestOptions
  ): Promise<Response<Margin>> {
    return this._makeRequest(
      'POST',
      '/v1/billing/margins',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a margin object with the given ID.
   */
  retrieve(
    id: string,
    params?: MarginRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Margin>> {
    return this._makeRequest(
      'GET',
      `/v1/billing/margins/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Update the specified margin object. Certain fields of the margin object are not editable.
   */
  update(
    id: string,
    params?: MarginUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Margin>> {
    return this._makeRequest(
      'POST',
      `/v1/billing/margins/${id}`,
      params,
      options
    ) as any;
  }
}
export interface Margin {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'margin';

  /**
   * Whether the margin can be applied to invoices, invoice items, or invoice line items. Defaults to `true`.
   */
  active: boolean;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata | null;

  /**
   * Name of the margin that's displayed on, for example, invoices.
   */
  name: string | null;

  /**
   * Percent that will be taken off the subtotal before tax (after all other discounts and promotions) of any invoice to which the margin is applied.
   */
  percent_off: number;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
}
export interface MarginCreateParams {
  /**
   * Percent that will be taken off the subtotal before tax (after all other discounts and promotions) of any invoice to which the margin is applied.
   */
  percent_off: number;

  /**
   * Whether the margin can be applied to invoices, invoice items, or invoice line items or not. Defaults to `true`.
   */
  active?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * Name of the margin, which is displayed to customers, such as on invoices.
   */
  name?: string;
}
export interface MarginRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface MarginUpdateParams {
  /**
   * Whether the margin can be applied to invoices, invoice items, or invoice line items or not.
   */
  active?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;

  /**
   * Name of the margin, which is displayed to customers, such as on invoices.
   */
  name?: string;
}
export interface MarginListParams extends PaginationParams {
  /**
   * Only return margins that are active or inactive. For example, pass `true` to only list active margins.
   */
  active?: boolean;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
