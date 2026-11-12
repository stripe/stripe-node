// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString, Decimal} from '../../../shared.js';
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
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                details: {
                  kind: 'object',
                  fields: {
                    radar: {
                      kind: 'object',
                      fields: {
                        new_rules: {
                          kind: 'array',
                          element: {
                            kind: 'object',
                            fields: {
                              rollout_percentage: {kind: 'decimal_string'},
                            },
                          },
                        },
                        old_rules: {
                          kind: 'array',
                          element: {
                            kind: 'object',
                            fields: {
                              rollout_percentage: {kind: 'decimal_string'},
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
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
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            details: {
              kind: 'object',
              fields: {
                radar: {
                  kind: 'object',
                  fields: {
                    new_rules: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {rollout_percentage: {kind: 'decimal_string'}},
                      },
                    },
                    old_rules: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {rollout_percentage: {kind: 'decimal_string'}},
                      },
                    },
                  },
                },
              },
            },
          },
        },
      }
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
     * Set when a display name is available for an action performed by Stripe.
     */
    stripe_action?: Actor.StripeAction;

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
     * Details of a Connect action.
     */
    connect?: Details.Connect;

    /**
     * Details of a data export action.
     */
    data_export?: Details.DataExport;

    /**
     * Details of an event destination action.
     */
    event_destination?: Details.EventDestination;

    /**
     * Details of a Radar action.
     */
    radar?: Details.Radar;

    /**
     * Details of a SCIM action.
     */
    scim?: Details.Scim;

    /**
     * Details of an SSO action.
     */
    sso?: Details.Sso;

    /**
     * Details of a Stripe access action.
     */
    stripe_access?: Details.StripeAccess;

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
    | 'application_authorized'
    | 'application_created'
    | 'application_deauthorized'
    | 'app_installed'
    | 'app_uninstalled'
    | 'connect_express_branding_updated'
    | 'connect_oauth_disabled'
    | 'connect_oauth_enabled'
    | 'connect_settings_updated'
    | 'connect_site_link_updated'
    | 'data_export_requested'
    | 'event_destination_added'
    | 'event_destination_removed'
    | 'event_destination_updated'
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
    | 'payout_schedule_updated'
    | 'radar_adaptive_3ds_disabled'
    | 'radar_dynamic_risk_thresholds_disabled'
    | 'radar_early_fraud_warning_disabled'
    | 'radar_for_setup_intents_disabled'
    | 'radar_fraud_dispute_protection_disabled'
    | 'radar_rule_added'
    | 'radar_rule_disabled'
    | 'radar_rule_enabled'
    | 'radar_rule_removed'
    | 'radar_rule_updated'
    | 'scim_group_deleted'
    | 'scim_group_member_added'
    | 'scim_group_member_removed'
    | 'scim_group_roles_updated'
    | 'scim_group_updated'
    | 'sso_domain_verified'
    | 'sso_settings_created'
    | 'sso_settings_deleted'
    | 'sso_settings_updated'
    | 'stripe_access_started'
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

    export interface StripeAction {
      /**
       * Public display name captured when the action occurs.
       */
      display_name: string;
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

    export interface Connect {
      /**
       * The Connect application.
       */
      application?: Connect.Application;

      /**
       * Express Dashboard branding settings after the change. Set for the connect_express_branding_updated action.
       */
      new_express_branding_settings?: Connect.NewExpressBrandingSettings;

      /**
       * Connect settings after the change. Set for the connect_settings_updated action.
       */
      new_settings?: Connect.NewSettings;

      /**
       * Express Dashboard branding settings before the change. Set for the connect_express_branding_updated action.
       */
      old_express_branding_settings?: Connect.OldExpressBrandingSettings;

      /**
       * Connect settings before the change. Set for the connect_settings_updated action.
       */
      old_settings?: Connect.OldSettings;

      /**
       * The site link route. Set for the connect_site_link_updated action.
       */
      site_link_route?: Connect.SiteLinkRoute;
    }

    export interface DataExport {
      /**
       * Name of export type.
       */
      type: string;
    }

    export interface EventDestination {
      /**
       * Configuration after the change. Set for added and updated actions, absent for removed actions.
       */
      new_configuration?: EventDestination.NewConfiguration;

      /**
       * Configuration before the change. Set for updated and removed actions, absent for added actions.
       */
      old_configuration?: EventDestination.OldConfiguration;

      /**
       * Type of the event destination.
       */
      type: EventDestination.Type;
    }

    export interface Radar {
      /**
       * Risk preference after a preference switch carried by a protection-toggle action.
       */
      new_risk_preference?: Radar.NewRiskPreference;

      /**
       * Rules after the change. Set for add, update, enable, and disable actions; absent for remove actions.
       */
      new_rules?: Array<Radar.NewRule>;

      /**
       * Risk preference before a preference switch carried by a protection-toggle action.
       */
      old_risk_preference?: Radar.OldRiskPreference;

      /**
       * Rules before the change. Set for update, removal, enable, and disable actions; absent for add actions.
       */
      old_rules?: Array<Radar.OldRule>;
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

    export interface StripeAccess {
      /**
       * The level of Dashboard access granted.
       */
      access_type: StripeAccess.AccessType;

      /**
       * The reason for granting Stripe access.
       */
      reason: StripeAccess.Reason;
    }

    export type Type =
      | 'account_security'
      | 'api_key'
      | 'app'
      | 'authentication'
      | 'connect'
      | 'data_export'
      | 'event_destination'
      | 'issuing'
      | 'payout'
      | 'radar'
      | 'scim'
      | 'sso'
      | 'stripe_access'
      | 'user_access'
      | 'user_invite'
      | 'user_profile'
      | 'user_roles'
      | OtherString;

    export interface UserAccess {
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

    export namespace Connect {
      export interface Application {
        /**
         * Identifier of the application.
         */
        id: string;
      }

      export interface NewExpressBrandingSettings {
        /**
         * Border radius for the Express Dashboard.
         */
        border_radius?: string;

        /**
         * Primary button background color for the Express Dashboard.
         */
        primary_button_background_color?: string;

        /**
         * Primary color for the Express Dashboard.
         */
        primary_color?: string;

        /**
         * Secondary button background color for the Express Dashboard.
         */
        secondary_button_background_color?: string;
      }

      export interface NewSettings {
        /**
         * The display name shown on the onboarding experience and Dashboard. This is different from the business legal name.
         */
        business_name?: string;

        /**
         * Whether platform branding is copied to new connected accounts. These also appear on invoices, receipts, and other Stripe products.
         */
        copy_platform_branding_to_new_connected_accounts?: boolean;

        /**
         * Whether the support email is hidden on onboarding surfaces.
         */
        hide_onboarding_support_email?: boolean;

        /**
         * Whether the support phone number is hidden on onboarding surfaces.
         */
        hide_onboarding_support_phone?: boolean;

        /**
         * Whether the support URL is hidden on onboarding surfaces.
         */
        hide_onboarding_support_url?: boolean;

        /**
         * Identifier of the icon file (file_* ID).
         */
        icon?: string;

        /**
         * Identifier of the logo file (file_* ID).
         */
        logo?: string;

        /**
         * The platform's default payout statement descriptor. It appears on the bank statements of the platform's connected accounts for their payouts.
         */
        payout_statement_descriptor?: string;

        /**
         * A CSS hex color value representing the primary branding color, applied to the onboarding experience and the Stripe Dashboard.
         */
        primary_color?: string;

        /**
         * A CSS hex color value representing the secondary branding color, applied to the onboarding experience and the Stripe Dashboard.
         */
        secondary_color?: string;
      }

      export interface OldExpressBrandingSettings {
        /**
         * Border radius for the Express Dashboard.
         */
        border_radius?: string;

        /**
         * Primary button background color for the Express Dashboard.
         */
        primary_button_background_color?: string;

        /**
         * Primary color for the Express Dashboard.
         */
        primary_color?: string;

        /**
         * Secondary button background color for the Express Dashboard.
         */
        secondary_button_background_color?: string;
      }

      export interface OldSettings {
        /**
         * The display name shown on the onboarding experience and Dashboard. This is different from the business legal name.
         */
        business_name?: string;

        /**
         * Whether platform branding is copied to new connected accounts. These also appear on invoices, receipts, and other Stripe products.
         */
        copy_platform_branding_to_new_connected_accounts?: boolean;

        /**
         * Whether the support email is hidden on onboarding surfaces.
         */
        hide_onboarding_support_email?: boolean;

        /**
         * Whether the support phone number is hidden on onboarding surfaces.
         */
        hide_onboarding_support_phone?: boolean;

        /**
         * Whether the support URL is hidden on onboarding surfaces.
         */
        hide_onboarding_support_url?: boolean;

        /**
         * Identifier of the icon file (file_* ID).
         */
        icon?: string;

        /**
         * Identifier of the logo file (file_* ID).
         */
        logo?: string;

        /**
         * The platform's default payout statement descriptor. It appears on the bank statements of the platform's connected accounts for their payouts.
         */
        payout_statement_descriptor?: string;

        /**
         * A CSS hex color value representing the primary branding color, applied to the onboarding experience and the Stripe Dashboard.
         */
        primary_color?: string;

        /**
         * A CSS hex color value representing the secondary branding color, applied to the onboarding experience and the Stripe Dashboard.
         */
        secondary_color?: string;
      }

      export type SiteLinkRoute =
        | 'account_management'
        | 'balances'
        | 'documents'
        | 'financial_accounts'
        | 'issuing_card_transactions'
        | 'notification_banner'
        | 'payments'
        | 'payouts'
        | OtherString;
    }

    export namespace EventDestination {
      export interface NewConfiguration {
        /**
         * Amazon EventBridge configuration.
         */
        amazon_eventbridge?: NewConfiguration.AmazonEventbridge;

        /**
         * Azure Event Grid configuration.
         */
        azure_event_grid?: NewConfiguration.AzureEventGrid;

        /**
         * Event types subscribed to by the destination. ["*"] subscribes to all V1 webhook events.
         */
        enabled_events: Array<string>;

        /**
         * Event source selectors: @self, @accounts, @organization_members, or @organization_members/@accounts.
         */
        events_from: Array<string>;

        /**
         * Status of the event destination.
         */
        status: NewConfiguration.Status;

        /**
         * Webhook endpoint configuration.
         */
        webhook_endpoint?: NewConfiguration.WebhookEndpoint;
      }

      export interface OldConfiguration {
        /**
         * Amazon EventBridge configuration.
         */
        amazon_eventbridge?: OldConfiguration.AmazonEventbridge;

        /**
         * Azure Event Grid configuration.
         */
        azure_event_grid?: OldConfiguration.AzureEventGrid;

        /**
         * Event types subscribed to by the destination. ["*"] subscribes to all V1 webhook events.
         */
        enabled_events: Array<string>;

        /**
         * Event source selectors: @self, @accounts, @organization_members, or @organization_members/@accounts.
         */
        events_from: Array<string>;

        /**
         * Status of the event destination.
         */
        status: OldConfiguration.Status;

        /**
         * Webhook endpoint configuration.
         */
        webhook_endpoint?: OldConfiguration.WebhookEndpoint;
      }

      export type Type =
        | 'amazon_eventbridge'
        | 'azure_event_grid'
        | 'webhook_endpoint'
        | OtherString;

      export namespace NewConfiguration {
        export interface AmazonEventbridge {
          /**
           * AWS account ID configured for the event destination.
           */
          aws_account_id: string;

          /**
           * ARN of the AWS event source configured for the event destination.
           */
          aws_event_source_arn: string;

          /**
           * AWS region configured for the event destination.
           */
          aws_region: string;
        }

        export interface AzureEventGrid {
          /**
           * Azure partner topic name configured for the event destination.
           */
          azure_partner_topic_name: string;

          /**
           * Azure region configured for the event destination.
           */
          azure_region: string;

          /**
           * Azure resource group name configured for the event destination.
           */
          azure_resource_group_name: string;

          /**
           * Azure subscription ID configured for the event destination.
           */
          azure_subscription_id: string;
        }

        export type Status = 'disabled' | 'enabled' | OtherString;

        export interface WebhookEndpoint {
          /**
           * URL configured for the webhook endpoint.
           */
          url: string;
        }
      }

      export namespace OldConfiguration {
        export interface AmazonEventbridge {
          /**
           * AWS account ID configured for the event destination.
           */
          aws_account_id: string;

          /**
           * ARN of the AWS event source configured for the event destination.
           */
          aws_event_source_arn: string;

          /**
           * AWS region configured for the event destination.
           */
          aws_region: string;
        }

        export interface AzureEventGrid {
          /**
           * Azure partner topic name configured for the event destination.
           */
          azure_partner_topic_name: string;

          /**
           * Azure region configured for the event destination.
           */
          azure_region: string;

          /**
           * Azure resource group name configured for the event destination.
           */
          azure_resource_group_name: string;

          /**
           * Azure subscription ID configured for the event destination.
           */
          azure_subscription_id: string;
        }

        export type Status = 'disabled' | 'enabled' | OtherString;

        export interface WebhookEndpoint {
          /**
           * URL configured for the webhook endpoint.
           */
          url: string;
        }
      }
    }

    export namespace Radar {
      export type NewRiskPreference =
        | 'balanced'
        | 'custom'
        | 'high_growth'
        | 'low_risk'
        | OtherString;

      export interface NewRule {
        /**
         * Action performed when the rule matches.
         */
        action: NewRule.Action;

        /**
         * Whether the rule is enabled.
         */
        enabled?: boolean;

        /**
         * Identifier of the rule.
         */
        id: string;

        /**
         * Objective of the rule.
         */
        objective?: string;

        /**
         * Rule expression evaluated to determine whether the rule matches.
         */
        predicate?: string;

        /**
         * Percentage of matching traffic to which the rule applies, between 0 and 100, serialized as a decimal string.
         */
        rollout_percentage?: Decimal;

        /**
         * Type of entity evaluated by the rule.
         */
        type?: NewRule.Type;
      }

      export type OldRiskPreference =
        | 'balanced'
        | 'custom'
        | 'high_growth'
        | 'low_risk'
        | OtherString;

      export interface OldRule {
        /**
         * Action performed when the rule matches.
         */
        action: OldRule.Action;

        /**
         * Whether the rule is enabled.
         */
        enabled?: boolean;

        /**
         * Identifier of the rule.
         */
        id: string;

        /**
         * Objective of the rule.
         */
        objective?: string;

        /**
         * Rule expression evaluated to determine whether the rule matches.
         */
        predicate?: string;

        /**
         * Percentage of matching traffic to which the rule applies, between 0 and 100, serialized as a decimal string.
         */
        rollout_percentage?: Decimal;

        /**
         * Type of entity evaluated by the rule.
         */
        type?: OldRule.Type;
      }

      export namespace NewRule {
        export type Action =
          | 'allow'
          | 'block'
          | 'block_fa_outbound'
          | 'manual_review'
          | 'payout_pause'
          | 'raise_review'
          | 'request_credentials'
          | 'resolve_dispute'
          | OtherString;

        export type Type = 'account' | 'payment' | OtherString;
      }

      export namespace OldRule {
        export type Action =
          | 'allow'
          | 'block'
          | 'block_fa_outbound'
          | 'manual_review'
          | 'payout_pause'
          | 'raise_review'
          | 'request_credentials'
          | 'resolve_dispute'
          | OtherString;

        export type Type = 'account' | 'payment' | OtherString;
      }
    }

    export namespace Sso {
      export type Mandate = 'off' | 'optional' | 'required';
    }

    export namespace StripeAccess {
      export type AccessType =
        | 'dashboard_read_only'
        | 'dashboard_read_write'
        | OtherString;

      export interface Reason {
        /**
         * Set when access is granted through an access request.
         */
        access_request?: Reason.AccessRequest;

        /**
         * Set when access is granted through a support relationship.
         */
        support_relationship?: Reason.SupportRelationship;

        /**
         * Set when access is granted through a support ticket.
         */
        support_ticket?: Reason.SupportTicket;

        /**
         * The type of reason for granting access.
         */
        type: Reason.Type;
      }

      export namespace Reason {
        export interface AccessRequest {
          /**
           * Identifier of the access request.
           */
          id: string;
        }

        export interface SupportRelationship {
          /**
           * Identifier of the support relationship.
           */
          id: string;

          /**
           * Name of the support contact, when available.
           */
          name?: string;

          /**
           * Role of the support contact, when available.
           */
          role?: string;
        }

        export interface SupportTicket {
          /**
           * Identifier of the support ticket.
           */
          id: string;
        }

        export type Type =
          | 'access_request'
          | 'support_relationship'
          | 'support_ticket'
          | OtherString;
      }
    }

    export namespace UserAccess {
      export interface DashboardClient {
        /**
         * User-Agent header for the user access action.
         */
        user_agent: string;
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
         * Risk signals for the user access action.
         */
        signals: Array<Risk.Signal>;
      }

      export type Surface = 'dashboard' | 'embedded' | 'express' | OtherString;

      export namespace Risk {
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
      | 'apps.install'
      | 'balance_transfer'
      | 'bank_account'
      | 'blockchain_address'
      | 'card'
      | 'v2.core.event_destination'
      | 'issuing.card'
      | 'issuing.cardholder'
      | 'issuing.dispute'
      | 'webhook_endpoint'
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

      /**
       * Controls which activity logs an organization-level request returns. Specify `@self` to return logs recorded in the organization context and `@organization_members` to return logs recorded in accounts that belong to the organization. Specify both values to return logs from both sources. Defaults to `["@self"]` when omitted. Cannot be empty.
       */
      logs_from?: Array<string>;
    }

    export namespace ActivityLogListParams {
      export type ActionGroup =
        | 'account_security'
        | 'api_key'
        | 'app'
        | 'authentication'
        | 'connect'
        | 'data_export'
        | 'event_destination'
        | 'issuing'
        | 'payout'
        | 'radar'
        | 'scim'
        | 'sso'
        | 'stripe_access'
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
        | 'application_authorized'
        | 'application_created'
        | 'application_deauthorized'
        | 'app_installed'
        | 'app_uninstalled'
        | 'connect_express_branding_updated'
        | 'connect_oauth_disabled'
        | 'connect_oauth_enabled'
        | 'connect_settings_updated'
        | 'connect_site_link_updated'
        | 'data_export_requested'
        | 'event_destination_added'
        | 'event_destination_removed'
        | 'event_destination_updated'
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
        | 'payout_schedule_updated'
        | 'radar_adaptive_3ds_disabled'
        | 'radar_dynamic_risk_thresholds_disabled'
        | 'radar_early_fraud_warning_disabled'
        | 'radar_for_setup_intents_disabled'
        | 'radar_fraud_dispute_protection_disabled'
        | 'radar_rule_added'
        | 'radar_rule_disabled'
        | 'radar_rule_enabled'
        | 'radar_rule_removed'
        | 'radar_rule_updated'
        | 'scim_group_deleted'
        | 'scim_group_member_added'
        | 'scim_group_member_removed'
        | 'scim_group_roles_updated'
        | 'scim_group_updated'
        | 'sso_domain_verified'
        | 'sso_settings_created'
        | 'sso_settings_deleted'
        | 'sso_settings_updated'
        | 'stripe_access_started'
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
