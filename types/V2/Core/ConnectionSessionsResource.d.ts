// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface ConnectionSessionCreateParams {
          /**
           * The Account the ConnectionSession will create a connection for.
           */
          account: string;

          /**
           * The Connection types that the ConnectionSession is allowed to establish.
           */
          allowed_connection_types?: Array<'link'>;

          /**
           * The access that should be collected with the ConnectionSession.
           */
          requested_access?: Array<'payout_methods'>;
        }
      }

      namespace Core {
        interface ConnectionSessionRetrieveParams {}
      }

      namespace Core {
        class ConnectionSessionsResource {
          /**
           * Create a new ConnectionSession.
           */
          create(
            params: ConnectionSessionCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ConnectionSession>>;

          /**
           * Retrieve a ConnectionSession.
           */
          retrieve(
            id: string,
            params?: ConnectionSessionRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ConnectionSession>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ConnectionSession>>;
        }
      }
    }
  }
}
