// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {MetadataParam, OtherString, Metadata} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';
import {DeletedObject} from './../../V2/DeletedObject.js';

export class AccountActivityResource extends StripeResource {
  /**
   * Creates a new account activity to report account registration, login, or evaluation follow-up activity.
   */
  create(
    params: V2.Signals.AccountActivityCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountActivity>> {
    return this._makeRequest(
      'POST',
      '/v2/signals/account_activities',
      params,
      options
    ) as any;
  }
  /**
   * Deletes an AccountActivity by its ID.
   */
  del(
    id: string,
    params?: V2.Signals.AccountActivityDeleteParams,
    options?: RequestOptions
  ): Promise<Response<DeletedObject>> {
    return this._makeRequest(
      'DELETE',
      `/v2/signals/account_activities/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Retrieves an AccountActivity by its ID.
   */
  retrieve(
    id: string,
    params?: V2.Signals.AccountActivityRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountActivity>> {
    return this._makeRequest(
      'GET',
      `/v2/signals/account_activities/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface AccountActivity {
  /**
   * Unique identifier for the account activity.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.signals.account_activity';

  /**
   * The account, customer, or inline account data associated with the activity.
   */
  account_details?: AccountActivity.AccountDetails;

  /**
   * The account evaluation this activity is associated with, when applicable.
   */
  account_evaluation?: string;

  /**
   * Details for the account restriction. Present only when type is account_restricted. The activity
   * requires an existing account_details.account or account_details.customer; inline data is unsupported.
   */
  account_restricted?: AccountActivity.AccountRestricted;

  /**
   * Details for the account review. Present only when type is account_reviewed. The activity
   * requires an existing account_details.account or account_details.customer; inline data is unsupported.
   */
  account_reviewed?: AccountActivity.AccountReviewed;

  /**
   * Details for the account suspension. Present only when type is account_suspended. The activity
   * requires an existing account_details.customer; account_details.account and inline data are unsupported.
   */
  account_suspended?: AccountActivity.AccountSuspended;

  /**
   * Details for the merchant's takeover confirmation. Present only when type is account_takeover_confirmation.
   */
  account_takeover_confirmation?: AccountActivity.AccountTakeoverConfirmation;

  /**
   * Details for the account holder's takeover report. Present only when type is account_takeover_report.
   */
  account_takeover_report?: AccountActivity.AccountTakeoverReport;

  /**
   * Timestamp at which the account activity was created.
   */
  created: string;

  /**
   * Details for the credential change. Present only when type is credential_change.
   */
  credential_change?: AccountActivity.CredentialChange;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details for the login attempt. Present only when type is login_attempt.
   */
  login_attempt?: AccountActivity.LoginAttempt;

  /**
   * Details for the login decision. Present only when type is login_decision.
   */
  login_decision?: AccountActivity.LoginDecision;

  /**
   * Additional information about the activity.
   */
  metadata?: Metadata;

  /**
   * Details for the MFA addition. Present only when type is mfa_addition.
   */
  mfa_addition?: AccountActivity.MfaAddition;

  /**
   * Details for the MFA removal. Present only when type is mfa_removal.
   */
  mfa_removal?: AccountActivity.MfaRemoval;

  /**
   * Timestamp at which the activity occurred. Defaults to the created time if not provided.
   */
  occurred_at: string;

  /**
   * Details for the registration attempt. Present only when type is registration_attempt.
   */
  registration_attempt?: AccountActivity.RegistrationAttempt;

  /**
   * Details for the registration decision. Present only when type is registration_decision.
   */
  registration_decision?: AccountActivity.RegistrationDecision;

  /**
   * The type of activity.
   */
  type: AccountActivity.Type;
}
export namespace AccountActivity {
  export interface AccountDetails {
    /**
     * The v2 account ID of the account.
     */
    account?: string;

    /**
     * The v1 customer ID of the account, for users not yet migrated to v2 accounts.
     */
    customer?: string;

    /**
     * Inline account data to evaluate without creating a v2 account.
     */
    data?: AccountDetails.Data;
  }

  export interface AccountRestricted {
    /**
     * The reason the account or customer was restricted.
     */
    reason: AccountRestricted.Reason;
  }

  export interface AccountReviewed {
    /**
     * The outcome of the merchant review.
     */
    outcome: AccountReviewed.Outcome;
  }

  export interface AccountSuspended {
    /**
     * The reason the customer was suspended.
     */
    reason: AccountSuspended.Reason;
  }

  export interface AccountTakeoverConfirmation {
    /**
     * The type of credential involved in the confirmed takeover.
     */
    credential_type: AccountTakeoverConfirmation.CredentialType;
  }

  export interface AccountTakeoverReport {
    /**
     * The type of credential involved in the reported takeover.
     */
    credential_type: AccountTakeoverReport.CredentialType;
  }

  export interface CredentialChange {
    /**
     * The type of credential that changed.
     */
    credential_type: CredentialChange.CredentialType;
  }

  export interface LoginAttempt {
    /**
     * Client details captured for the attempt.
     */
    client_details: LoginAttempt.ClientDetails;
  }

  export interface LoginDecision {
    /**
     * The action the merchant took following the evaluation.
     */
    status: LoginDecision.Status;
  }

  export interface MfaAddition {
    /**
     * The authentication method added to the account.
     */
    mfa_type: MfaAddition.MfaType;
  }

  export interface MfaRemoval {
    /**
     * The authentication method removed from the account.
     */
    mfa_type: MfaRemoval.MfaType;
  }

  export interface RegistrationAttempt {
    /**
     * Client details captured for the attempt.
     */
    client_details: RegistrationAttempt.ClientDetails;
  }

  export interface RegistrationDecision {
    /**
     * The action the merchant took following the evaluation.
     */
    status: RegistrationDecision.Status;
  }

  export type Type =
    | 'account_restricted'
    | 'account_reviewed'
    | 'account_suspended'
    | 'account_takeover_confirmation'
    | 'account_takeover_mitigation'
    | 'account_takeover_report'
    | 'credential_change'
    | 'login_attempt'
    | 'login_decision'
    | 'mfa_addition'
    | 'mfa_removal'
    | 'registration_attempt'
    | 'registration_decision'
    | OtherString;

  export namespace AccountDetails {
    export interface Data {
      /**
       * The account's contact email.
       */
      contact_email?: string;

      /**
       * Default account settings.
       */
      defaults?: Data.Defaults;

      /**
       * Identity data.
       */
      identity?: Data.Identity;
    }

    export namespace Data {
      export interface Defaults {
        /**
         * Account profile data.
         */
        profile: Defaults.Profile;
      }

      export interface Identity {
        /**
         * Business details for identity data.
         */
        business_details: Identity.BusinessDetails;
      }

      export namespace Defaults {
        export interface Profile {
          /**
           * The business URL.
           */
          business_url: string;

          /**
           * Doing business as (DBA) name.
           */
          doing_business_as?: string;

          /**
           * Description of the account's product or service.
           */
          product_description?: string;
        }
      }

      export namespace Identity {
        export interface BusinessDetails {
          /**
           * Registered business name.
           */
          registered_name?: string;
        }
      }
    }
  }

  export namespace AccountRestricted {
    export type Reason = 'abuse' | 'other' | OtherString;
  }

  export namespace AccountReviewed {
    export type Outcome = 'trusted' | OtherString;
  }

  export namespace AccountSuspended {
    export type Reason = 'abuse' | 'other' | OtherString;
  }

  export namespace AccountTakeoverConfirmation {
    export type CredentialType =
      | 'api_key'
      | 'login_password'
      | 'other'
      | OtherString;
  }

  export namespace AccountTakeoverReport {
    export type CredentialType =
      | 'api_key'
      | 'login_password'
      | 'other'
      | OtherString;
  }

  export namespace CredentialChange {
    export type CredentialType =
      | 'api_key'
      | 'login_password'
      | 'other'
      | OtherString;
  }

  export namespace LoginAttempt {
    export interface ClientDetails {
      /**
       * Raw client details for the activity, when a Radar session is not available.
       */
      data?: ClientDetails.Data;

      /**
       * The Radar session ID capturing client details for the activity.
       */
      radar_session?: string;
    }

    export namespace ClientDetails {
      export interface Data {
        /**
         * The IP address associated with the activity.
         */
        ip: string;

        /**
         * The referrer associated with the activity.
         */
        referrer?: string;

        /**
         * The user agent associated with the activity.
         */
        user_agent?: string;
      }
    }
  }

  export namespace LoginDecision {
    export type Status = 'allowed' | 'blocked' | 'restricted';
  }

  export namespace MfaAddition {
    export type MfaType =
      | 'authenticator_app'
      | 'email'
      | 'hardware_key'
      | 'other'
      | 'sms'
      | OtherString;
  }

  export namespace MfaRemoval {
    export type MfaType =
      | 'authenticator_app'
      | 'email'
      | 'hardware_key'
      | 'other'
      | 'sms'
      | OtherString;
  }

  export namespace RegistrationAttempt {
    export interface ClientDetails {
      /**
       * Raw client details for the activity, when a Radar session is not available.
       */
      data?: ClientDetails.Data;

      /**
       * The Radar session ID capturing client details for the activity.
       */
      radar_session?: string;
    }

    export namespace ClientDetails {
      export interface Data {
        /**
         * The IP address associated with the activity.
         */
        ip: string;

        /**
         * The referrer associated with the activity.
         */
        referrer?: string;

        /**
         * The user agent associated with the activity.
         */
        user_agent?: string;
      }
    }
  }

  export namespace RegistrationDecision {
    export type Status = 'allowed' | 'blocked' | 'restricted';
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountActivityCreateParams {
      /**
       * The type of activity.
       */
      type: AccountActivityCreateParams.Type;

      /**
       * The account, customer, or inline account data associated with the activity.
       */
      account_details?: AccountActivityCreateParams.AccountDetails;

      /**
       * The account evaluation this activity is associated with, when applicable.
       */
      account_evaluation?: string;

      /**
       * Details for the account restriction. Provide only when type is account_restricted. The activity
       * requires an existing account_details.account or account_details.customer; inline data is unsupported.
       */
      account_restricted?: AccountActivityCreateParams.AccountRestricted;

      /**
       * Details for the account review. Provide only when type is account_reviewed. The activity
       * requires an existing account_details.account or account_details.customer; inline data is unsupported.
       */
      account_reviewed?: AccountActivityCreateParams.AccountReviewed;

      /**
       * Details for the account suspension. Provide only when type is account_suspended. The activity
       * requires an existing account_details.customer; account_details.account and inline data are unsupported.
       */
      account_suspended?: AccountActivityCreateParams.AccountSuspended;

      /**
       * Required when type is account_takeover_confirmation. Requires an existing customer or account with a customer configuration.
       */
      account_takeover_confirmation?: AccountActivityCreateParams.AccountTakeoverConfirmation;

      /**
       * Required when type is account_takeover_report. Requires an existing customer or account with a customer configuration.
       */
      account_takeover_report?: AccountActivityCreateParams.AccountTakeoverReport;

      /**
       * Required when type is credential_change. Requires an existing customer or account with a customer configuration.
       */
      credential_change?: AccountActivityCreateParams.CredentialChange;

      /**
       * Details for the login attempt. Provide only when type is login_attempt.
       */
      login_attempt?: AccountActivityCreateParams.LoginAttempt;

      /**
       * Details for the login decision. Provide only when type is login_decision.
       */
      login_decision?: AccountActivityCreateParams.LoginDecision;

      /**
       * Additional information about the activity.
       */
      metadata?: MetadataParam;

      /**
       * Required when type is mfa_addition. Requires an existing customer or account with a customer configuration.
       */
      mfa_addition?: AccountActivityCreateParams.MfaAddition;

      /**
       * Required when type is mfa_removal. Requires an existing customer or account with a customer configuration.
       */
      mfa_removal?: AccountActivityCreateParams.MfaRemoval;

      /**
       * Timestamp at which the activity occurred. Defaults to the created time if not provided.
       */
      occurred_at?: string;

      /**
       * Details for the registration attempt. Provide only when type is registration_attempt.
       */
      registration_attempt?: AccountActivityCreateParams.RegistrationAttempt;

      /**
       * Details for the registration decision. Provide only when type is registration_decision.
       */
      registration_decision?: AccountActivityCreateParams.RegistrationDecision;
    }

    export namespace AccountActivityCreateParams {
      export type Type =
        | 'account_restricted'
        | 'account_reviewed'
        | 'account_suspended'
        | 'account_takeover_confirmation'
        | 'account_takeover_mitigation'
        | 'account_takeover_report'
        | 'credential_change'
        | 'login_attempt'
        | 'login_decision'
        | 'mfa_addition'
        | 'mfa_removal'
        | 'registration_attempt'
        | 'registration_decision'
        | OtherString;

      export interface AccountDetails {
        /**
         * The v2 account ID of the account.
         */
        account?: string;

        /**
         * The v1 customer ID of the account, for users not yet migrated to v2 accounts.
         */
        customer?: string;

        /**
         * Inline account data to evaluate without creating a v2 account.
         */
        data?: AccountDetails.Data;
      }

      export interface AccountRestricted {
        /**
         * The reason the account or customer was restricted.
         */
        reason: AccountRestricted.Reason;
      }

      export interface AccountReviewed {
        /**
         * The outcome of the merchant review.
         */
        outcome: AccountReviewed.Outcome;
      }

      export interface AccountSuspended {
        /**
         * The reason the customer was suspended.
         */
        reason: AccountSuspended.Reason;
      }

      export interface AccountTakeoverConfirmation {
        /**
         * The type of credential involved in the confirmed takeover.
         */
        credential_type: AccountTakeoverConfirmation.CredentialType;
      }

      export interface AccountTakeoverReport {
        /**
         * The type of credential involved in the reported takeover.
         */
        credential_type: AccountTakeoverReport.CredentialType;
      }

      export interface CredentialChange {
        /**
         * The type of credential that changed.
         */
        credential_type: CredentialChange.CredentialType;
      }

      export interface LoginAttempt {
        /**
         * Client details captured for the attempt.
         */
        client_details: LoginAttempt.ClientDetails;
      }

      export interface LoginDecision {
        /**
         * The action the merchant took following the evaluation.
         */
        status: LoginDecision.Status;
      }

      export interface MfaAddition {
        /**
         * The authentication method added to the account.
         */
        mfa_type: MfaAddition.MfaType;
      }

      export interface MfaRemoval {
        /**
         * The authentication method removed from the account.
         */
        mfa_type: MfaRemoval.MfaType;
      }

      export interface RegistrationAttempt {
        /**
         * Client details captured for the attempt.
         */
        client_details: RegistrationAttempt.ClientDetails;
      }

      export interface RegistrationDecision {
        /**
         * The action the merchant took following the evaluation.
         */
        status: RegistrationDecision.Status;
      }

      export namespace AccountDetails {
        export interface Data {
          /**
           * The account's contact email.
           */
          contact_email?: string;

          /**
           * Default account settings.
           */
          defaults?: Data.Defaults;

          /**
           * Identity data.
           */
          identity?: Data.Identity;
        }

        export namespace Data {
          export interface Defaults {
            /**
             * Account profile data.
             */
            profile: Defaults.Profile;
          }

          export interface Identity {
            /**
             * Business details for identity data.
             */
            business_details: Identity.BusinessDetails;
          }

          export namespace Defaults {
            export interface Profile {
              /**
               * The business URL.
               */
              business_url: string;

              /**
               * Doing business as (DBA) name.
               */
              doing_business_as?: string;

              /**
               * Description of the account's product or service.
               */
              product_description?: string;
            }
          }

          export namespace Identity {
            export interface BusinessDetails {
              /**
               * Registered business name.
               */
              registered_name?: string;
            }
          }
        }
      }

      export namespace AccountRestricted {
        export type Reason = 'abuse' | 'other' | OtherString;
      }

      export namespace AccountReviewed {
        export type Outcome = 'trusted' | OtherString;
      }

      export namespace AccountSuspended {
        export type Reason = 'abuse' | 'other' | OtherString;
      }

      export namespace AccountTakeoverConfirmation {
        export type CredentialType =
          | 'api_key'
          | 'login_password'
          | 'other'
          | OtherString;
      }

      export namespace AccountTakeoverReport {
        export type CredentialType =
          | 'api_key'
          | 'login_password'
          | 'other'
          | OtherString;
      }

      export namespace CredentialChange {
        export type CredentialType =
          | 'api_key'
          | 'login_password'
          | 'other'
          | OtherString;
      }

      export namespace LoginAttempt {
        export interface ClientDetails {
          /**
           * Raw client details for the activity, when a Radar session is not available.
           */
          data?: ClientDetails.Data;

          /**
           * The Radar session ID capturing client details for the activity.
           */
          radar_session?: string;
        }

        export namespace ClientDetails {
          export interface Data {
            /**
             * The IP address associated with the activity.
             */
            ip: string;

            /**
             * The referrer associated with the activity.
             */
            referrer?: string;

            /**
             * The user agent associated with the activity.
             */
            user_agent?: string;
          }
        }
      }

      export namespace LoginDecision {
        export type Status = 'allowed' | 'blocked' | 'restricted';
      }

      export namespace MfaAddition {
        export type MfaType =
          | 'authenticator_app'
          | 'email'
          | 'hardware_key'
          | 'other'
          | 'sms'
          | OtherString;
      }

      export namespace MfaRemoval {
        export type MfaType =
          | 'authenticator_app'
          | 'email'
          | 'hardware_key'
          | 'other'
          | 'sms'
          | OtherString;
      }

      export namespace RegistrationAttempt {
        export interface ClientDetails {
          /**
           * Raw client details for the activity, when a Radar session is not available.
           */
          data?: ClientDetails.Data;

          /**
           * The Radar session ID capturing client details for the activity.
           */
          radar_session?: string;
        }

        export namespace ClientDetails {
          export interface Data {
            /**
             * The IP address associated with the activity.
             */
            ip: string;

            /**
             * The referrer associated with the activity.
             */
            referrer?: string;

            /**
             * The user agent associated with the activity.
             */
            user_agent?: string;
          }
        }
      }

      export namespace RegistrationDecision {
        export type Status = 'allowed' | 'blocked' | 'restricted';
      }
    }
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountActivityRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountActivityDeleteParams {}
  }
}
