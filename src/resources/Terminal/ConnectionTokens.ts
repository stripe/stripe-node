// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class ConnectionTokenResource extends StripeResource {
  /**
   * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
   */
  create(
    params?: Terminal.ConnectionTokenCreateParams,
    options?: RequestOptions
  ): Promise<Response<ConnectionToken>>;
  create(options?: RequestOptions): Promise<Response<ConnectionToken>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/terminal/connection_tokens',
    }).call(this, ...args);
  }
}
export interface ConnectionToken {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'terminal.connection_token';

  /**
   * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
   */
  location?: string;

  /**
   * Your application should pass this token to the Stripe Terminal SDK.
   */
  secret: string;
}
export namespace Terminal {
  export interface ConnectionTokenCreateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
     */
    location?: string;
  }
}
