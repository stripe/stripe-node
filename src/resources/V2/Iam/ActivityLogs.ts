// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class ActivityLogResource extends StripeResource {
  /**
   * List activity logs of an account.
   */
  list(
    params?: V2.Iam.ActivityLogListParams,
    options?: RequestOptions
  ): V2ListPromise<ActivityLog> {
    return this._makeRequest('GET', '/v2/iam/activity_logs', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieve an activity log.
   */
  retrieve(
    id: string,
    params?: V2.Iam.ActivityLogRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ActivityLog>> {
    return this._makeRequest(
      'GET',
      `/v2/iam/activity_logs/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
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
  actor: ActivityLog.Actor;

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
  details: ActivityLog.Details;

  /**
   * Whether the action was performed in live mode.
   */
  livemode: boolean;

  /**
   * The object related to the activity log entry.
   */
  related_object?: ActivityLog.RelatedObject;

  /**
   * The API request that instigated the action.
   */
  request?: ActivityLog.Request;

  /**
   * The type of action that was performed.
   */
  type: ActivityLog.Type;
}
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
     * Details of an account security action.
     */
    account_security?: Details.AccountSecurity;

    /**
     * Details of an API key action.
     */
    api_key?: Details.ApiKey;

    /**
     * Details of an authentication action.
     */
    authentication?: Details.Authentication;

    /**
     * Details of a SCIM action.
     */
    scim?: Details.Scim;

    /**
     * Details of an SSO action.
     */
    sso?: Details.Sso;

    /**
     * The action group type of the activity log entry.
     */
    type: Details.Type;

    /**
     * Details of a user access action.
     */
    user_access?: Details.UserAccess;

    /**
     * Details of a user invite action.
     */
    user_invite?: Details.UserInvite;

    /**
     * Details of a user profile action.
     */
    user_profile?: Details.UserProfile;

    /**
     * Details of a user role change action.
     */
    user_roles?: Details.UserRoles;
  }

  export interface RelatedObject {
    /**
     * Unique identifier of the object.
     */
    id: string;

    /**
     * Type of the object.
     */
    type: RelatedObject.Type;
  }

  export interface Request {
    /**
     * ID of the API request.
     */
    id: string;
  }

  export type Type =
    | 'anomaly_detection_settings_updated'
    | 'api_key_created'
    | 'api_key_deleted'
    | 'api_key_updated'
    | 'api_key_viewed'
    | 'issuing_activated'
    | 'issuing_balance_transfer_created'
    | 'issuing_cardholder_created'
    | 'issuing_cardholder_updated'
    | 'issuing_card_created'
    | 'issuing_card_sensitive_details_viewed'
    | 'issuing_card_updated'
    | 'issuing_dispute_created'
    | 'issuing_dispute_submitted'
    | 'issuing_dispute_updated'
    | 'manual_payouts_disabled'
    | 'manual_payouts_enabled'
    | 'payout_destination_added'
    | 'payout_destination_removed'
    | 'payout_destination_updated'
    | 'payout_schedule_edits_disabled'
    | 'payout_schedule_edits_enabled'
    | 'scim_group_deleted'
    | 'scim_group_member_added'
    | 'scim_group_member_removed'
    | 'scim_group_roles_updated'
    | 'scim_group_updated'
    | 'sso_domain_verified'
    | 'sso_settings_created'
    | 'sso_settings_deleted'
    | 'sso_settings_updated'
    | 'two_step_authentication_mandate_disabled'
    | 'two_step_authentication_mandate_enabled'
    | 'user_access_started'
    | 'user_auth_challenge_failed'
    | 'user_email_changed'
    | 'user_email_verified'
    | 'user_express_phone_number_changed'
    | 'user_google_account_connected'
    | 'user_google_account_disconnected'
    | 'user_invite_accepted'
    | 'user_invite_created'
    | 'user_invite_deleted'
    | 'user_passkey_added'
    | 'user_passkey_removed'
    | 'user_passkey_updated'
    | 'user_passkey_upgraded'
    | 'user_password_changed'
    | 'user_password_initialized'
    | 'user_password_reset_failed'
    | 'user_password_reset_requested'
    | 'user_password_reset_succeeded'
    | 'user_roles_deleted'
    | 'user_roles_updated'
    | 'user_two_step_authentication_backup_code_used'
    | 'user_two_step_authentication_method_added'
    | 'user_two_step_authentication_method_removed'
    | 'user_two_step_authentication_method_reset'
    | 'user_two_step_authentication_method_updated'
    | 'user_two_step_authentication_reset_requested'
    | OtherString;

  export namespace Actor {
    export interface ApiKey {
      /**
       * Unique identifier of the API key.
       */
      id: string;
    }

    export type Type = 'api_key' | 'stripe_action' | 'user';

    export interface User {
      /**
       * Email address of the user.
       */
      email: string;
    }
  }

  export namespace Details {
    export interface AccountSecurity {
      /**
       * Anomaly detection settings after the change.
       */
      new_anomaly_settings?: AccountSecurity.NewAnomalySettings;

      /**
       * Anomaly detection settings before the change.
       */
      old_anomaly_settings?: AccountSecurity.OldAnomalySettings;
    }

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

    export interface Authentication {
      /**
       * Backup email address involved in the authentication.
       */
      backup_email?: string;

      /**
       * Type of challenge used for the authentication.
       */
      challenge_type?: Authentication.ChallengeType;

      /**
       * Surface where the authentication occurred.
       */
      surface?: Authentication.Surface;

      /**
       * Target email address involved in the authentication.
       */
      target_email?: string;
    }

    export interface Scim {
      /**
       * Name of the SCIM group.
       */
      group_name: string;

      /**
       * Group roles after the change; only set for the group roles-updated action (scim_group_roles_updated).
       */
      new_roles: Array<string>;

      /**
       * Group roles before the change; only set for the group roles-updated action (scim_group_roles_updated).
       */
      old_roles: Array<string>;

      /**
       * The context the roles were assigned in.
       */
      role_assigned_context?: string;

      /**
       * Email address of the affected member.
       */
      user_email?: string;
    }

    export interface Sso {
      /**
       * SSO enforcement level.
       */
      mandate?: Sso.Mandate;
    }

    export type Type =
      | 'account_security'
      | 'api_key'
      | 'authentication'
      | 'issuing'
      | 'payout'
      | 'scim'
      | 'sso'
      | 'user_access'
      | 'user_invite'
      | 'user_profile'
      | 'user_roles'
      | OtherString;

    export interface UserAccess {
      /**
       * Authentication details for the user access action.
       */
      authentication: UserAccess.Authentication;

      /**
       * Dashboard client details for the user access action.
       */
      dashboard_client?: UserAccess.DashboardClient;

      /**
       * Timestamp when the user access expires.
       */
      expires_at: string;

      /**
       * Network details for the user access action.
       */
      network: UserAccess.Network;

      /**
       * Risk details for the user access action.
       */
      risk: UserAccess.Risk;

      /**
       * Roles associated with the user access action.
       */
      roles: Array<string>;

      /**
       * Session fingerprint for the user access action.
       */
      session_fingerprint: string;

      /**
       * Surface where the user access action started.
       */
      surface: UserAccess.Surface;
    }

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

    export interface UserProfile {
      /**
       * Email address after the change.
       */
      new_email?: string;

      /**
       * Redacted phone number after the change.
       */
      new_redacted_phone_number?: string;

      /**
       * Email address before the change.
       */
      old_email?: string;

      /**
       * Redacted phone number before the change.
       */
      old_redacted_phone_number?: string;
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
       * Source of the role change.
       */
      source: UserRoles.Source;

      /**
       * Email address of the user whose roles were changed.
       */
      user_email: string;
    }

    export namespace AccountSecurity {
      export interface NewAnomalySettings {
        /**
         * Whether dormant API key protection is enabled.
         */
        dormant_api_key_protection_enabled?: boolean;

        /**
         * Whether money movement anomaly detection is enabled.
         */
        money_movement_anomaly_detection_enabled?: boolean;

        /**
         * Whether request-level anomaly detection is enabled.
         */
        request_level_anomaly_detection_enabled?: boolean;
      }

      export interface OldAnomalySettings {
        /**
         * Whether dormant API key protection is enabled.
         */
        dormant_api_key_protection_enabled?: boolean;

        /**
         * Whether money movement anomaly detection is enabled.
         */
        money_movement_anomaly_detection_enabled?: boolean;

        /**
         * Whether request-level anomaly detection is enabled.
         */
        request_level_anomaly_detection_enabled?: boolean;
      }
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
        type: ManagedBy.Type;
      }

      export type Type = 'publishable_key' | 'secret_key';

      export namespace ManagedBy {
        export interface Application {
          /**
           * Identifier of the application.
           */
          id: string;
        }

        export type Type = 'application' | OtherString;
      }
    }

    export namespace Authentication {
      export type ChallengeType =
        | 'external_account_code'
        | 'oauth'
        | 'previous_account_number'
        | 'reverse_sms'
        | 'sms'
        | 'stripe_identity'
        | 'totp'
        | 'webauthn'
        | OtherString;

      export type Surface = 'dashboard' | 'express' | OtherString;
    }

    export namespace Sso {
      export type Mandate = 'off' | 'optional' | 'required';
    }

    export namespace UserAccess {
      export interface Authentication {
        /**
         * Primary authentication factor.
         */
        primary_factor: Authentication.PrimaryFactor;

        /**
         * Secondary authentication factors.
         */
        secondary_factors: Array<Authentication.SecondaryFactor>;
      }

      export interface DashboardClient {
        /**
         * Browser used for the user access action.
         */
        browser: string;

        /**
         * Browser version used for the user access action.
         */
        browser_version: string;

        /**
         * Device type used for the user access action.
         */
        device_type: string;

        /**
         * Operating system used for the user access action.
         */
        os: string;
      }

      export interface Network {
        /**
         * City for the user access action.
         */
        city: string;

        /**
         * Country for the user access action.
         */
        country: string;

        /**
         * IP address for the user access action.
         */
        ip_address: string;

        /**
         * Region for the user access action.
         */
        region: string;
      }

      export interface Risk {
        /**
         * Risk level for the user access action.
         */
        level: Risk.Level;

        /**
         * Risk signals for the user access action.
         */
        signals: Array<Risk.Signal>;
      }

      export type Surface = 'dashboard' | 'express' | OtherString;

      export namespace Authentication {
        export interface PrimaryFactor {
          /**
           * SSO provider for the authentication factor.
           */
          sso_provider?: string;

          /**
           * Type of authentication factor.
           */
          type: PrimaryFactor.Type;
        }

        export interface SecondaryFactor {
          /**
           * SSO provider for the authentication factor.
           */
          sso_provider?: string;

          /**
           * Type of authentication factor.
           */
          type: SecondaryFactor.Type;
        }

        export namespace PrimaryFactor {
          export type Type =
            | 'backup_code'
            | 'email_code'
            | 'oauth'
            | 'passkey'
            | 'password'
            | 'phone_code'
            | 'saml'
            | 'sms'
            | 'totp'
            | 'web_authn'
            | OtherString;
        }

        export namespace SecondaryFactor {
          export type Type =
            | 'backup_code'
            | 'email_code'
            | 'oauth'
            | 'passkey'
            | 'password'
            | 'phone_code'
            | 'saml'
            | 'sms'
            | 'totp'
            | 'web_authn'
            | OtherString;
        }
      }

      export namespace Risk {
        export type Level = 'high' | 'low' | 'medium' | OtherString;

        export interface Signal {
          /**
           * The user access action used a novel device.
           */
          novel_device?: Signal.NovelDevice;

          /**
           * Type of risk signal.
           */
          type: Signal.Type;
        }

        export namespace Signal {
          export interface NovelDevice {}

          export type Type = 'novel_device' | OtherString;
        }
      }
    }

    export namespace UserRoles {
      export type Source = 'dashboard' | 'scim' | 'sso' | OtherString;
    }
  }

  export namespace RelatedObject {
    export type Type =
      | 'balance_transfer'
      | 'bank_account'
      | 'blockchain_address'
      | 'card'
      | 'issuing.card'
      | 'issuing.cardholder'
      | 'issuing.dispute'
      | OtherString;
  }
}
export namespace V2 {
  export namespace Iam {
    export interface ActivityLogRetrieveParams {}
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
      export type ActionGroup =
        | 'account_security'
        | 'api_key'
        | 'authentication'
        | 'issuing'
        | 'payout'
        | 'scim'
        | 'sso'
        | 'user_access'
        | 'user_invite'
        | 'user_profile'
        | 'user_roles'
        | OtherString;

      export type Action =
        | 'anomaly_detection_settings_updated'
        | 'api_key_created'
        | 'api_key_deleted'
        | 'api_key_updated'
        | 'api_key_viewed'
        | 'issuing_activated'
        | 'issuing_balance_transfer_created'
        | 'issuing_cardholder_created'
        | 'issuing_cardholder_updated'
        | 'issuing_card_created'
        | 'issuing_card_sensitive_details_viewed'
        | 'issuing_card_updated'
        | 'issuing_dispute_created'
        | 'issuing_dispute_submitted'
        | 'issuing_dispute_updated'
        | 'manual_payouts_disabled'
        | 'manual_payouts_enabled'
        | 'payout_destination_added'
        | 'payout_destination_removed'
        | 'payout_destination_updated'
        | 'payout_schedule_edits_disabled'
        | 'payout_schedule_edits_enabled'
        | 'scim_group_deleted'
        | 'scim_group_member_added'
        | 'scim_group_member_removed'
        | 'scim_group_roles_updated'
        | 'scim_group_updated'
        | 'sso_domain_verified'
        | 'sso_settings_created'
        | 'sso_settings_deleted'
        | 'sso_settings_updated'
        | 'two_step_authentication_mandate_disabled'
        | 'two_step_authentication_mandate_enabled'
        | 'user_access_started'
        | 'user_auth_challenge_failed'
        | 'user_email_changed'
        | 'user_email_verified'
        | 'user_express_phone_number_changed'
        | 'user_google_account_connected'
        | 'user_google_account_disconnected'
        | 'user_invite_accepted'
        | 'user_invite_created'
        | 'user_invite_deleted'
        | 'user_passkey_added'
        | 'user_passkey_removed'
        | 'user_passkey_updated'
        | 'user_passkey_upgraded'
        | 'user_password_changed'
        | 'user_password_initialized'
        | 'user_password_reset_failed'
        | 'user_password_reset_requested'
        | 'user_password_reset_succeeded'
        | 'user_roles_deleted'
        | 'user_roles_updated'
        | 'user_two_step_authentication_backup_code_used'
        | 'user_two_step_authentication_method_added'
        | 'user_two_step_authentication_method_removed'
        | 'user_two_step_authentication_method_reset'
        | 'user_two_step_authentication_method_updated'
        | 'user_two_step_authentication_reset_requested'
        | OtherString;
    }
  }
}
