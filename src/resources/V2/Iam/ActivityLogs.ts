// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';

export class ActivityLogResource extends StripeResource {
  /**
   * List activity logs of an account.
   */
  list(
    params?: V2.Iam.ActivityLogListParams,
    options?: RequestOptions
  ): ApiListPromise<ActivityLog> {
    return this._makeRequest('GET', '/v2/iam/activity_logs', params, options, {
      methodType: 'list',
    }) as any;
  }
}
export interface ActivityLog {
  /**
   * Unique identifier of the activity log entry.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.iam.activity_log';

  /**
   * The actor that performed the action.
   */
  actor: V2.Iam.ActivityLog.Actor;

  /**
   * The account on which the action was performed.
   */
  context: string;

  /**
   * Timestamp when the activity log entry was created.
   */
  created: string;

  /**
   * Action-specific details of the activity log entry.
   */
  details: V2.Iam.ActivityLog.Details;

  /**
   * Whether the action was performed in live mode.
   */
  livemode: boolean;

  /**
   * The type of action that was performed.
   */
  type: V2.Iam.ActivityLog.Type;
}
export namespace V2 {
  export namespace Iam {
    export namespace ActivityLog {
      export interface Actor {
        /**
         * Set when the actor is an API key.
         */
        api_key?: Actor.ApiKey;

        /**
         * The type of actor.
         */
        type: Actor.Type;

        /**
         * Set when the actor is a user.
         */
        user?: Actor.User;
      }

      export interface Details {
        /**
         * Details of an API key action.
         */
        api_key?: Details.ApiKey;

        /**
         * The action group type of the activity log entry.
         */
        type: Details.Type;

        /**
         * Details of a user invite action.
         */
        user_invite?: Details.UserInvite;

        /**
         * Details of a user role change action.
         */
        user_roles?: Details.UserRoles;
      }

      export type Type =
        | 'api_key_created'
        | 'api_key_deleted'
        | 'api_key_updated'
        | 'api_key_viewed'
        | 'user_invite_accepted'
        | 'user_invite_created'
        | 'user_invite_deleted'
        | 'user_roles_deleted'
        | 'user_roles_updated';

      export namespace Actor {
        export interface ApiKey {
          /**
           * Unique identifier of the API key.
           */
          id: string;
        }

        export type Type = 'api_key' | 'user';

        export interface User {
          /**
           * Email address of the user.
           */
          email: string;
        }
      }

      export namespace Details {
        export interface ApiKey {
          /**
           * Timestamp when the API key was created.
           */
          created: string;

          /**
           * Timestamp when the API key expires.
           */
          expires_at?: string;

          /**
           * Unique identifier of the API key.
           */
          id: string;

          /**
           * List of IP addresses allowed to use this API key.
           */
          ip_allowlist: Array<string>;

          /**
           * Information about the entity managing this API key.
           */
          managed_by?: ApiKey.ManagedBy;

          /**
           * Name of the API key.
           */
          name?: string;

          /**
           * Unique identifier of the new API key, set when this key was rotated.
           */
          new_key?: string;

          /**
           * Note or description for the API key.
           */
          note?: string;

          /**
           * Type of the API key.
           */
          type: ApiKey.Type;
        }

        export type Type = 'api_key' | 'user_invite' | 'user_roles';

        export interface UserInvite {
          /**
           * Email address of the invited user.
           */
          invited_user_email: string;

          /**
           * Roles assigned to the invited user.
           */
          roles: Array<string>;
        }

        export interface UserRoles {
          /**
           * Roles the user has after the change.
           */
          new_roles: Array<string>;

          /**
           * Roles the user had before the change.
           */
          old_roles: Array<string>;

          /**
           * Email address of the user whose roles were changed.
           */
          user_email: string;
        }

        export namespace ApiKey {
          export interface ManagedBy {
            /**
             * An application.
             */
            application?: ManagedBy.Application;

            /**
             * The type of entity.
             */
            type: 'application';
          }

          export type Type = 'publishable_key' | 'secret_key';

          export namespace ManagedBy {
            export interface Application {
              /**
               * Identifier of the application.
               */
              id: string;
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ActivityLogListParams {
      /**
       * Filter results to only include activity logs for the specified action group types.
       */
      action_groups?: Array<ActivityLogListParams.ActionGroup>;

      /**
       * Filter results to only include activity logs for the specified action types.
       */
      actions?: Array<ActivityLogListParams.Action>;

      /**
       * Maximum number of results to return per page.
       */
      limit?: number;
    }

    export namespace ActivityLogListParams {
      export type ActionGroup = 'api_key' | 'user_invite' | 'user_roles';

      export type Action =
        | 'api_key_created'
        | 'api_key_deleted'
        | 'api_key_updated'
        | 'api_key_viewed'
        | 'user_invite_accepted'
        | 'user_invite_created'
        | 'user_invite_deleted'
        | 'user_roles_deleted'
        | 'user_roles_updated';
    }
  }
}
