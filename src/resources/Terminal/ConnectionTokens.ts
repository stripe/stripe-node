// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {ApplyExpand} from '../../shared.js';
import {RequestOptions, Response} from '../../lib.js';

export class ConnectionTokenResource extends StripeResource {
  /**
   * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
   */
  create<E extends string = never>(
    params?: Terminal.ConnectionTokenCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<ConnectionToken, E>>> {
    return this._makeRequest(
      'POST',
      '/v1/terminal/connection_tokens',
      params,
      options
    ) as any;
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
  export interface ConnectionTokenCreateParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://docs.stripe.com/terminal/fleet/locations-and-zones?dashboard-or-api=api#connection-tokens).
     */
    location?: string;
  }
}
