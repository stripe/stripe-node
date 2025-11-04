// File generated from our OpenAPI spec

namespace Apps {
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

  namespace SecretCreateParams {
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

    namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
namespace Apps {
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

  namespace SecretListParams {
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

    namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
namespace Apps {
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

  namespace SecretDeleteWhereParams {
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

    namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
namespace Apps {
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

  namespace SecretFindParams {
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

    namespace Scope {
      export type Type = 'account' | 'user';
    }
  }
}
