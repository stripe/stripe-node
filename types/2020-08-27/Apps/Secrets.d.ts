// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Apps {
      /**
       * The Secret object.
       */
      interface Secret {
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
        payload: string | null;

        scope: Secret.Scope;
      }

      namespace Secret {
        interface Scope {
          /**
           * The secret scope type.
           */
          type: Scope.Type;

          /**
           * The user ID, if type is set to "user"
           */
          user?: string;
        }

        namespace Scope {
          type Type = 'account' | 'user';
        }
      }

      interface SecretCreateParams {
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
      }

      namespace SecretCreateParams {
        interface Scope {
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
          type Type = 'account' | 'user';
        }
      }

      interface SecretListParams extends PaginationParams {
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
        interface Scope {
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
          type Type = 'account' | 'user';
        }
      }

      interface SecretDeleteWhereParams {
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
        interface Scope {
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
          type Type = 'account' | 'user';
        }
      }

      interface SecretFindParams {
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
        interface Scope {
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
          type Type = 'account' | 'user';
        }
      }

      class SecretsResource {
        /**
         * Create or replace a secret in the secret store.
         */
        create(
          params: SecretCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;

        /**
         * List all secrets stored on the given scope.
         */
        list(
          params: SecretListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Apps.Secret>;

        /**
         * Deletes a secret from the secret store by name and scope.
         */
        deleteWhere(
          params: SecretDeleteWhereParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;

        /**
         * Finds a secret in the secret store by name and scope.
         */
        find(
          params: SecretFindParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Apps.Secret>>;
      }
    }
  }
}
