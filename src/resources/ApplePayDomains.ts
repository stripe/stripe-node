// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions} from '../lib.js';
import {PaginationParams} from '../shared.js';
import {Response, ApiListPromise} from '../lib.js';
const stripeMethod = StripeResource.method;
export class ApplePayDomainResource extends StripeResource {
  /**
   * Delete an apple pay domain.
   */
  del(
    id: string,
    params?: ApplePayDomainDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedApplePayDomain>>;
  del(
    id: string,
    options?: RequestOptions
  ): Promise<Response<DeletedApplePayDomain>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/apple_pay/domains/{domain}',
    }).call(this, ...args);
  }

  /**
   * Retrieve an apple pay domain.
   */
  retrieve(
    id: string,
    params?: ApplePayDomainRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ApplePayDomain>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ApplePayDomain>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/apple_pay/domains/{domain}',
    }).call(this, ...args);
  }

  /**
   * List apple pay domains.
   */
  list(
    params?: ApplePayDomainListParams,
    options?: RequestOptions
  ): ApiListPromise<ApplePayDomain>;
  list(options?: RequestOptions): ApiListPromise<ApplePayDomain>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/apple_pay/domains',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create an apple pay domain.
   */
  create(
    params: ApplePayDomainCreateParams,
    options?: RequestOptions
  ): Promise<Response<ApplePayDomain>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/apple_pay/domains',
    }).call(this, ...args);
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
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
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
export interface ApplePayDomainCreateParams {
  domain_name: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainListParams extends PaginationParams {
  domain_name?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface ApplePayDomainDeleteParams {}
