// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ResourceResource extends StripeResource {
  /**
   * Creates a new provider resource.
   */
  create(
    params: V2.Provisioning.ResourceCreateParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/resources',
      params,
      options
    ) as any;
  }
  /**
   * Links an existing provider resource to a project or account.
   */
  link(
    params: V2.Provisioning.ResourceLinkParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/resources/link',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves a provider resource.
   */
  retrieve(
    id: string,
    params?: V2.Provisioning.ResourceRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'GET',
      `/v2/provisioning/resources/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a resource's configuration or service.
   */
  update(
    id: string,
    params?: V2.Provisioning.ResourceUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/resources/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Removes a resource.
   */
  remove(
    id: string,
    params?: V2.Provisioning.ResourceRemoveParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/resources/${encodeURIComponent(id)}/remove`,
      params,
      options
    ) as any;
  }
  /**
   * Rotates a resource's credentials.
   */
  rotateCredentials(
    id: string,
    params?: V2.Provisioning.ResourceRotateCredentialsParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/resources/${encodeURIComponent(id)}/rotate_credentials`,
      params,
      options
    ) as any;
  }
  /**
   * Submits additional information requested by the provider for a resource.
   */
  submitInformation(
    id: string,
    params: V2.Provisioning.ResourceSubmitInformationParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/resources/${encodeURIComponent(id)}/submit_information`,
      params,
      options
    ) as any;
  }
  /**
   * Unlinks a resource without removing it from the provider.
   */
  unlink(
    id: string,
    params?: V2.Provisioning.ResourceUnlinkParams,
    options?: RequestOptions
  ): Promise<Response<Resource>> {
    return this._makeRequest(
      'POST',
      `/v2/provisioning/resources/${encodeURIComponent(id)}/unlink`,
      params,
      options
    ) as any;
  }
}
export interface Resource {
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.resource';

  catalog?: Resource.Catalog;

  created: string;

  environment: Resource.Environment;

  error_message?: string;

  /**
   * Whether this resource uses Stripe live-mode objects. This is independent of the provider
   * catalog and is immutable for the lifetime of the resource.
   */
  livemode: boolean;

  name?: string;

  needs_information_schema?: Resource.NeedsInformationSchema;

  provider: string;

  service_ref: string;

  status: Resource.Status;

  user_message?: Resource.UserMessage;
}
export namespace Resource {
  export type Catalog = 'dev' | 'prod' | 'testing';

  export type Environment = 'dev' | 'prod';

  export type NeedsInformationSchema = {
    [key: string]: unknown;
  };

  export type Status =
    | 'complete'
    | 'errored'
    | 'needs_information'
    | 'pending'
    | 'removed';

  export interface UserMessage {
    message: string;

    received_at: string;
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceCreateParams {
      /**
       * Provider-specific configuration payload for the resource.
       */
      configuration: ResourceCreateParams.Configuration;

      /**
       * Identifier of the provider to create the resource with.
       */
      provider: string;

      /**
       * Identifier of the provider service to create the resource from.
       */
      service_ref: string;

      /**
       * Catalog partition to create the resource in.
       */
      catalog?: ResourceCreateParams.Catalog;

      /**
       * Environment the resource should be created in.
       */
      environment?: ResourceCreateParams.Environment;

      /**
       * Whether the resource should use Stripe live-mode objects. When omitted, this resolves to true.
       */
      livemode?: boolean;

      /**
       * Human-readable name for the resource.
       */
      name?: string;

      /**
       * Identifier of the project to create the resource in.
       */
      project?: string;
    }

    export namespace ResourceCreateParams {
      export type Configuration = {
        [key: string]: unknown;
      };

      export type Catalog = 'dev' | 'prod' | 'testing';

      export type Environment = 'dev' | 'prod';
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceUpdateParams {
      /**
       * Catalog partition of the resource.
       */
      catalog?: ResourceUpdateParams.Catalog;

      /**
       * New provider-specific configuration payload for the resource.
       */
      configuration?: ResourceUpdateParams.Configuration;

      /**
       * Provider's service id to switch the resource to. If omitted, the resource's existing service
       * is retained and this is treated as a config-only update.
       */
      service_ref?: string;
    }

    export namespace ResourceUpdateParams {
      export type Catalog = 'dev' | 'prod' | 'testing';

      export type Configuration = {
        [key: string]: unknown;
      };
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceLinkParams {
      /**
       * Identifier of the provider that hosts the existing resource.
       */
      provider: string;

      /**
       * Identifier of the provider service the existing resource belongs to.
       */
      service_ref: string;

      /**
       * Catalog partition of the existing resource.
       */
      catalog?: ResourceLinkParams.Catalog;

      /**
       * Environment the existing resource runs in.
       */
      environment?: ResourceLinkParams.Environment;

      /**
       * Whether the resource should use Stripe live-mode objects. When omitted, this resolves to true.
       */
      livemode?: boolean;

      /**
       * Identifier of the project to link the resource to.
       */
      project?: string;
    }

    export namespace ResourceLinkParams {
      export type Catalog = 'dev' | 'prod' | 'testing';

      export type Environment = 'dev' | 'prod';
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceRemoveParams {}
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceRotateCredentialsParams {}
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceSubmitInformationParams {
      /**
       * Additional information being submitted for the resource.
       */
      submitted_information: ResourceSubmitInformationParams.SubmittedInformation;
    }

    export namespace ResourceSubmitInformationParams {
      export type SubmittedInformation = {
        [key: string]: unknown;
      };
    }
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ResourceUnlinkParams {}
  }
}
