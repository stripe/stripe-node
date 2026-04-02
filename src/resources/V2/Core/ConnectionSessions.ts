// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ConnectionSessionResource extends StripeResource {
  /**
   * Create a new ConnectionSession.
   */
  create(
    params: V2.Core.ConnectionSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<ConnectionSession>> {
    return this._makeRequest(
      'POST',
      '/v2/core/connection_sessions',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a ConnectionSession.
   */
  retrieve(
    id: string,
    params?: V2.Core.ConnectionSessionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ConnectionSession>> {
    return this._makeRequest(
      'GET',
      `/v2/core/connection_sessions/${id}`,
      params,
      options
    ) as any;
  }
}
export interface ConnectionSession {
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
  connection?: V2.Core.ConnectionSession.Connection;

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
export namespace V2 {
  export namespace Core {
    export namespace ConnectionSession {
      export interface Connection {
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
export namespace V2 {
  export namespace Core {
    export interface ConnectionSessionCreateParams {
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
}
export namespace V2 {
  export namespace Core {
    export interface ConnectionSessionRetrieveParams {}
  }
}
