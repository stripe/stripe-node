// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ProviderConnectionResource extends StripeResource {
  /**
   * Lists the provider connections for the account.
   */
  list(
    params?: V2.Provisioning.ProviderConnectionListParams,
    options?: RequestOptions
  ): V2ListPromise<ProviderConnection> {
    return this._makeRequest(
      'GET',
      '/v2/provisioning/provider_connections',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Unlinks a provider connection so it can no longer be used to create resources.
   */
  unlink(
    id: string,
    params?: V2.Provisioning.ProviderConnectionUnlinkParams,
    options?: RequestOptions
  ): Promise<Response<ProviderConnection>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/provider_connections/${encodeURIComponent(id)}/unlink`,
      params,
      options
    ) as any;
  }
}
export interface ProviderConnection {
  /**
   * Unique identifier for the provider connection.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.provider_connection';

  /**
   * Time at which the provider connection was created.
   */
  created?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Identifier of the provider this connection is linked to.
   */
  provider: string;

  /**
   * Identifier of the connected account at the provider, if one has been established.
   */
  provider_account?: string;

  /**
   * Details about the connected provider account.
   */
  provider_account_details?: ProviderConnection.ProviderAccountDetails;

  /**
   * Current status of the provider connection.
   */
  status: ProviderConnection.Status;
}
export namespace ProviderConnection {
  export interface ProviderAccountDetails {
    /**
     * Services active for the connected account.
     */
    active_services: Array<ProviderAccountDetails.ActiveService>;

    /**
     * True when the provider explicitly supplied active_services, including an empty array.
     */
    active_services_provided: boolean;

    /**
     * Display name of the connected account.
     */
    display_name?: string;

    /**
     * Identifier of the connected account at the provider.
     */
    id: string;

    /**
     * Action taken when the account was linked.
     */
    link_action?: ProviderAccountDetails.LinkAction;

    /**
     * Primary email address of the connected account.
     */
    primary_email?: string;
  }

  export type Status = 'active' | 'expired' | 'unknown';

  export namespace ProviderAccountDetails {
    export interface ActiveService {
      /**
       * Display name of the service.
       */
      display_name?: string;

      /**
       * Identifier of the resource at the provider that backs this service, if any.
       */
      provider_resource_id?: string;

      /**
       * Identifier of the service at the provider.
       */
      service_id: string;

      /**
       * Current status of the service.
       */
      status: ActiveService.Status;
    }

    export type LinkAction = 'created' | 'linked_existing';

    export namespace ActiveService {
      export type Status = 'active' | 'inactive' | 'pending';
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProviderConnectionListParams {
      /**
       * Maximum number of provider connections to return.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProviderConnectionUnlinkParams {}
  }
}
