import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { Response } from '../../lib.js';
export declare class ConnectionTokenResource extends StripeResource {
    /**
     * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
     */
    create(params?: Terminal.ConnectionTokenCreateParams, options?: RequestOptions): Promise<Response<ConnectionToken>>;
    create(options?: RequestOptions): Promise<Response<ConnectionToken>>;
}
export /**
 * A Connection Token is used by the Stripe Terminal SDK to connect to a reader.
 *
 * Related guide: [Fleet management](https://stripe.com/docs/terminal/fleet/locations)
 */ interface ConnectionToken {
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
export declare namespace Terminal {
    interface ConnectionTokenCreateParams {
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
