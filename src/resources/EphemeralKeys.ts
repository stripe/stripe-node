// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {RequestOptions, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class EphemeralKeyResource extends StripeResource {
  /**
   * Invalidates a short-lived API key for a given resource.
   */
  del(
    id: string,
    params?: EphemeralKeyDeleteParams,
    options?: RequestOptions
  ): Promise<Response<EphemeralKey>>;
  del(id: string, options?: RequestOptions): Promise<Response<EphemeralKey>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/ephemeral_keys/{key}',
    }).call(this, ...args);
  }

  create(
    params?: EphemeralKeyCreateParams,
    options?: RequestOptions
  ): Promise<Response<EphemeralKey>>;
  create(options?: RequestOptions): Promise<Response<EphemeralKey>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/ephemeral_keys',
      validator: (data, options) => {
        if (!options.headers || !options.headers['Stripe-Version']) {
          throw new Error(
            'Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node'
          );
        }
      },
    }).call(this, ...args);
  }
}
export interface EphemeralKey {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'ephemeral_key';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Time at which the key will expire. Measured in seconds since the Unix epoch.
   */
  expires: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The key's secret. You can use this value to make authorized requests to the Stripe API.
   */
  secret?: string;
}
export interface EphemeralKeyCreateParams {
  /**
   * The ID of the Customer you'd like to modify using the resulting ephemeral key.
   */
  customer?: string;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * The ID of the Issuing Card you'd like to access using the resulting ephemeral key.
   */
  issuing_card?: string;

  /**
   * A single-use token, created by Stripe.js, used for creating ephemeral keys for Issuing Cards without exchanging sensitive information.
   */
  nonce?: string;

  /**
   * The ID of the Identity VerificationSession you'd like to access using the resulting ephemeral key
   */
  verification_session?: string;
}
export interface EphemeralKeyDeleteParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
