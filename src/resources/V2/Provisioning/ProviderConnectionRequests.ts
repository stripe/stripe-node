// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {ProviderConnection} from './ProviderConnections.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ProviderConnectionRequestResource extends StripeResource {
  /**
   * Creates a new provider connection.
   */
  create(
    params: V2.Provisioning.ProviderConnectionRequestCreateParams,
    options?: RequestOptions
  ): Promise<Response<ProviderConnectionRequest>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/provider_connection_requests',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a provider connection.
   */
  retrieve(
    id: string,
    params?: V2.Provisioning.ProviderConnectionRequestRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ProviderConnectionRequest>> {
    return this._makeRequest(
      'GET',
      `/v2/provisioning/provider_connection_requests/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Submits additional information requested by the provider for a provider connection.
   */
  submitInformation(
    id: string,
    params: V2.Provisioning.ProviderConnectionRequestSubmitInformationParams,
    options?: RequestOptions
  ): Promise<Response<ProviderConnectionRequest>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/provider_connection_requests/${encodeURIComponent(
        id
      )}/submit_information`,
      params,
      options
    ) as any;
  }
}
export interface ProviderConnectionRequest {
  /**
   * Unique identifier for the provider connection request.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.provider_connection_request';

  /**
   * Time at which the provider connection request was created.
   */
  created?: string;

  /**
   * Error from the account-linking workflow, set when request_status is ERROR.
   */
  error?: ProviderConnectionRequest.Error;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Schema describing the information the provider still needs, set when request_status is
   * NEEDS_INFORMATION.
   */
  needs_information_schema?: ProviderConnectionRequest.NeedsInformationSchema;

  /**
   * Identifier of the provider this connection request is linked to.
   */
  provider: string;

  /**
   * A ProviderConnection represents a link between a project and a provider account that
   * resources can be created against; unlinking it prevents further resource creation.
   */
  provider_connection?: ProviderConnection;

  /**
   * URL the caller should redirect to in order to continue the account-linking workflow.
   */
  redirect_url?: string;

  /**
   * Status of the underlying account-linking workflow. Unset once the workflow completes; see
   * provider_connection for the resulting connection's status.
   */
  request_status: ProviderConnectionRequest.RequestStatus;

  /**
   * Scopes requested for the account-linking workflow.
   */
  scopes: Array<string>;
}
export namespace ProviderConnectionRequest {
  export interface Error {
    /**
     * Machine-readable error code.
     */
    code: string;

    /**
     * Human-readable error message.
     */
    message: string;
  }

  export type NeedsInformationSchema = {
    [key: string]: unknown;
  };

  export type RequestStatus =
    | 'complete'
    | 'error'
    | 'needs_information'
    | 'pending_auth'
    | 'requested';
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProviderConnectionRequestCreateParams {
      /**
       * Provider-specific configuration payload for the connection.
       */
      configuration: ProviderConnectionRequestCreateParams.Configuration;

      /**
       * PKCE code challenge: BASE64URL(SHA256(code_verifier)). Optional; when present the OAuth
       * callback must supply the matching code_verifier. Not a secret (it is a hash of the verifier).
       */
      code_challenge?: string;

      /**
       * PKCE code challenge method. Only "S256" is supported.
       */
      code_challenge_method?: string;

      /**
       * Project this provider connection is created for. Used to infer the catalog partition for provider
       * calls. Optional; when absent the provider connection defaults to the prod catalog.
       */
      project?: string;

      /**
       * Identifier of the provider to connect to.
       */
      provider?: string;

      /**
       * Deprecated identifier of the provider to connect to; use `provider` instead.
       */
      provider_name?: string;
    }

    export namespace ProviderConnectionRequestCreateParams {
      export type Configuration = {
        [key: string]: unknown;
      };
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProviderConnectionRequestRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProviderConnectionRequestSubmitInformationParams {
      /**
       * Information requested by the provider, matching the connection's needs_information_schema.
       */
      information: ProviderConnectionRequestSubmitInformationParams.Information;

      /**
       * Secret used to confirm the request when submitting on behalf of a resource without
       * an authenticated session.
       */
      confirmation_secret?: string;
    }

    export namespace ProviderConnectionRequestSubmitInformationParams {
      export type Information = {
        [key: string]: unknown;
      };
    }
  }
}
