// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The ConnectionToken object.
       */
      interface ConnectionToken {
        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.connection_token';

        /**
         * The id of the location that this connection token is scoped to. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
         */
        location?: string;

        /**
         * Your application should pass this token to the Stripe Terminal SDK.
         */
        secret: string;
      }

      interface ConnectionTokenCreateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers. Note that location scoping only applies to internet-connected readers. For more details, see [the docs on scoping connection tokens](https://stripe.com/docs/terminal/fleet/locations#connection-tokens).
         */
        location?: string;
      }

      class ConnectionTokensResource {
        /**
         * To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.
         */
        create(
          params?: ConnectionTokenCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.ConnectionToken>>;
        create(
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Terminal.ConnectionToken>>;
      }
    }
  }
}
