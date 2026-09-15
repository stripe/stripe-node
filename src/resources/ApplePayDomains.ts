// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {ApplyExpand, ApplyExpandListItem, PaginationParams} from '../shared.js';
import {RequestOptions, Response, ApiListPromise} from '../lib.js';

export class ApplePayDomainResource extends StripeResource {
  /**
   * Delete an apple pay domain.
   */
  del(
    id: string,
    params?: ApplePayDomainDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedApplePayDomain>> {
    return this._makeRequest(
      'DELETE',
      `/v1/apple_pay/domains/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieve an apple pay domain.
   */
  retrieve<E extends string = never>(
    id: string,
    params?: ApplePayDomainRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ApplePayDomain, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/apple_pay/domains/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * List apple pay domains.
   */
  list<E extends string = never>(
    params?: ApplePayDomainListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<ApplePayDomain, E>> {
    return this._makeRequest('GET', '/v1/apple_pay/domains', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create an apple pay domain.
   */
  create<E extends string = never>(
    params: ApplePayDomainCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ApplePayDomain, E>>> {
    return this._makeRequest(
      'POST',
      '/v1/apple_pay/domains',
      params,
      options
    ) as any;
  }
}
export interface ApplePayDomain {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'apple_pay_domain';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  domain_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export interface DeletedApplePayDomain {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'apple_pay_domain';

  /**
   * Always true for a deleted object
   */
  deleted: true;
}
export interface ApplePayDomainCreateParams<E extends string = string> {
  domain_name: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface ApplePayDomainRetrieveParams<E extends string = string> {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface ApplePayDomainListParams<E extends string = string>
  extends PaginationParams {
  domain_name?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<E>;
}
export interface ApplePayDomainDeleteParams {}
