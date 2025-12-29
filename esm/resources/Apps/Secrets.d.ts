import { StripeResource } from '../../StripeResource.js';
import { PaginationParams } from '../../shared.js';
import { RequestOptions, ApiListPromise, Response } from '../../lib.js';
export declare class SecretResource extends StripeResource {
    /**
     * List all secrets stored on the given scope.
     */
    list(params: Apps.SecretListParams, options?: RequestOptions): ApiListPromise<Secret>;
    /**
     * Create or replace a secret in the secret store.
     */
    create(params: Apps.SecretCreateParams, options?: RequestOptions): Promise<Response<Secret>>;
    /**
     * Finds a secret in the secret store by name and scope.
     */
    find(params: Apps.SecretFindParams, options?: RequestOptions): Promise<Response<Secret>>;
    /**
     * Deletes a secret from the secret store by name and scope.
     */
    deleteWhere(params: Apps.SecretDeleteWhereParams, options?: RequestOptions): Promise<Response<Secret>>;
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
export declare namespace Apps {
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
}
export declare namespace Apps {
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
        /**
         * The Unix timestamp for the expiry time of the secret, after which the secret deletes.
         */
        expires_at?: number;
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
}
export declare namespace Apps {
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
}
export declare namespace Apps {
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
}
export declare namespace Apps {
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
}
