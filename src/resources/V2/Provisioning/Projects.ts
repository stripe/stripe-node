// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ProjectResource extends StripeResource {
  /**
   * Creates a new project.
   */
  create(
    params: V2.Provisioning.ProjectCreateParams,
    options?: RequestOptions
  ): Promise<Response<Project>> {
    return this._makeRequest(
      'POST',
      '/v2/provisioning/projects',
      params,
      options
    ) as any;
  }
}
export interface Project {
  /**
   * Unique identifier for the project.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.project';

  /**
   * Catalog partition the project belongs to.
   */
  catalog: Project.Catalog;

  /**
   * Time at which the project was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Human-readable name of the project.
   */
  name: string;

  /**
   * Use the /v2/provisioning/identity endpoint instead for IAM information.
   */
  profile?: Project.Profile;

  /**
   * Identifier of the developer profile associated with the project.
   */
  project_profile?: string;
}
export namespace Project {
  export type Catalog = 'dev' | 'prod' | 'testing';

  export interface Profile {
    /**
     * Email address associated with the developer profile.
     */
    email?: string;

    /**
     * Fields of the developer profile that have been verified.
     */
    verified_fields: Array<Profile.VerifiedField>;
  }

  export namespace Profile {
    export type VerifiedField = 'country' | 'email' | 'name' | 'phone';
  }
}
export namespace V2 {
  export namespace Provisioning {
    export interface ProjectCreateParams {
      /**
       * Human-readable name for the new project.
       */
      name: string;

      /**
       * Catalog partition to create the project in.
       */
      catalog?: ProjectCreateParams.Catalog;

      /**
       * Identifier of the developer profile to associate with the new project.
       */
      project_profile?: string;
    }

    export namespace ProjectCreateParams {
      export type Catalog = 'dev' | 'prod' | 'testing';
    }
  }
}
