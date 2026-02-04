// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * The ConnectionSession resource.
         */
        interface ConnectionSession {
          /**
           * The unique identifier for this ConnectionSession.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.connection_session';

          /**
           * The Account this Connection Session was created for.
           */
          account: string;

          /**
           * The Connection types that the Connection Session is allowed to establish.
           */
          allowed_connection_types?: Array<'link'>;

          /**
           * The client secret of this Connection Session. Used on the client to set up secure access to the given Account.
           */
          client_secret: string;

          /**
           * The Connection created by the ConnectionSession.
           */
          connection?: ConnectionSession.Connection;

          /**
           * Time at which the ConnectionSession was created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The access that is collected with the Connection Session.
           */
          requested_access?: Array<'payout_methods'>;
        }

        namespace ConnectionSession {
          interface Connection {
            /**
             * The access granted to the Account by the Connection.
             */
            granted_access?: Array<'payout_methods'>;

            /**
             * The type of the Connection.
             */
            type: 'link';
          }
        }
      }
    }
  }
}
