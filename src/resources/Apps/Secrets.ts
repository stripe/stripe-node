// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {PaginationParams} from '../../shared.js';
import {ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class SecretResource extends StripeResource {
  /**
   * List all secrets stored on the given scope.
   */
  list(
    params: Apps.SecretListParams,
    options?: RequestOptions
  ): ApiListPromise<Secret>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/apps/secrets',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Create or replace a secret in the secret store.
   */
  create(
    params: Apps.SecretCreateParams,
    options?: RequestOptions
  ): Promise<Response<Secret>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/apps/secrets',
    }).call(this, ...args);
  }

  /**
   * Finds a secret in the secret store by name and scope.
   */
  find(
    params: Apps.SecretFindParams,
    options?: RequestOptions
  ): Promise<Response<Secret>>;
  find(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/apps/secrets/find',
    }).call(this, ...args);
  }

  /**
   * Deletes a secret from the secret store by name and scope.
   */
  deleteWhere(
    params: Apps.SecretDeleteWhereParams,
    options?: RequestOptions
  ): Promise<Response<Secret>>;
  deleteWhere(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/apps/secrets/delete',
    }).call(this, ...args);
  }
}
export interface Secret {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'apps.secret';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * If true, indicates that this secret has been deleted
   */
  deleted?: boolean;

  /**
   * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
   */
  expires_at: number | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * A name for the secret that's unique within the scope.
   */
  name: string;

  /**
   * The plaintext secret value to be stored.
   */
  payload?: string | null;

  scope: Apps.Secret.Scope;
}
export namespace Apps {
  export namespace Secret {
    export interface Scope {
      /**
       * The secret scope type.
       */
      type: Scope.Type;

      /**
       * The user ID, if type is set to "user"
       */
      user?: string;
    }

    export namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
export namespace Apps {
  export interface SecretCreateParams {
    /**
     * A name for the secret that's unique within the scope.
     */
    name: string;

    /**
     * The plaintext secret value to be stored.
     */
    payload: string;

    /**
     * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
     */
    scope: SecretCreateParams.Scope;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
     */
    expires_at?: number;
  }

  export namespace SecretCreateParams {
    export interface Scope {
      /**
       * The secret scope type.
       */
      type: Scope.Type;

      /**
       * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
       */
      user?: string;
    }

    export namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
export namespace Apps {
  export interface SecretListParams extends PaginationParams {
    /**
     * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
     */
    scope: SecretListParams.Scope;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace SecretListParams {
    export interface Scope {
      /**
       * The secret scope type.
       */
      type: Scope.Type;

      /**
       * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
       */
      user?: string;
    }

    export namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
export namespace Apps {
  export interface SecretDeleteWhereParams {
    /**
     * A name for the secret that's unique within the scope.
     */
    name: string;

    /**
     * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
     */
    scope: SecretDeleteWhereParams.Scope;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace SecretDeleteWhereParams {
    export interface Scope {
      /**
       * The secret scope type.
       */
      type: Scope.Type;

      /**
       * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
       */
      user?: string;
    }

    export namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
export namespace Apps {
  export interface SecretFindParams {
    /**
     * A name for the secret that's unique within the scope.
     */
    name: string;

    /**
     * Specifies the scoping of the secret. Requests originating from UI extensions can only access account-scoped secrets or secrets scoped to their own user.
     */
    scope: SecretFindParams.Scope;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace SecretFindParams {
    export interface Scope {
      /**
       * The secret scope type.
       */
      type: Scope.Type;

      /**
       * The user ID. This field is required if `type` is set to `user`, and should not be provided if `type` is set to `account`.
       */
      user?: string;
    }

    export namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
