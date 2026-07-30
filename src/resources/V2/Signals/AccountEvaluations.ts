// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString, Decimal} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class AccountEvaluationResource extends StripeResource {
  /**
   * Creates a new account evaluation to request signal evaluations on an account, customer, or inline account data.
   */
  create(
    params: V2.Signals.AccountEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>> {
    return this._makeRequest(
      'POST',
      '/v2/signals/account_evaluations',
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            evaluated_signals: {
              kind: 'object',
              fields: {
                user_account_sharing: {
                  kind: 'object',
                  fields: {score: {kind: 'decimal_string'}},
                },
                user_multi_accounting: {
                  kind: 'object',
                  fields: {score: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Retrieves an AccountEvaluation by its ID.
   */
  retrieve(
    id: string,
    params?: V2.Signals.AccountEvaluationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>> {
    return this._makeRequest(
      'GET',
      `/v2/signals/account_evaluations/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            evaluated_signals: {
              kind: 'object',
              fields: {
                user_account_sharing: {
                  kind: 'object',
                  fields: {score: {kind: 'decimal_string'}},
                },
                user_multi_accounting: {
                  kind: 'object',
                  fields: {score: {kind: 'decimal_string'}},
                },
              },
            },
          },
        },
      }
    ) as any;
  }
}
export interface AccountEvaluation {
  /**
   * Unique identifier for the account evaluation.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.signals.account_evaluation';

  /**
   * Account activity recorded alongside this evaluation, when applicable.
   */
  account_activity_details?: AccountEvaluation.AccountActivityDetails;

  /**
   * The account, customer, or inline account data being evaluated.
   */
  account_details: AccountEvaluation.AccountDetails;

  /**
   * Timestamp at which the evaluation was created.
   */
  created: string;

  /**
   * Signal results that are available for the evaluation.
   */
  evaluated_signals?: AccountEvaluation.EvaluatedSignals;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * List of signals still pending evaluation.
   */
  pending_signals: Array<AccountEvaluation.PendingSignal>;

  /**
   * List of signals requested for evaluation.
   */
  requested_signals: Array<AccountEvaluation.RequestedSignal>;
}
export namespace AccountEvaluation {
  export interface AccountActivityDetails {
    /**
     * The ID of the account activity created or associated with the evaluation.
     */
    account_activity?: string;
  }

  export interface AccountDetails {
    /**
     * The v2 account ID of the account.
     */
    account?: string;

    /**
     * The v1 customer ID of the account, for users not yet migrated to v2/accounts.
     */
    customer?: string;

    /**
     * Inline account data to evaluate without creating a v2 account.
     */
    data?: AccountDetails.Data;
  }

  export interface EvaluatedSignals {
    /**
     * Fraudulent website result for the evaluation, when available.
     */
    fraudulent_website?: EvaluatedSignals.FraudulentWebsite;

    /**
     * User account-sharing result for the evaluation, when available.
     */
    user_account_sharing?: EvaluatedSignals.UserAccountSharing;

    /**
     * User multi-accounting result for the evaluation, when available.
     */
    user_multi_accounting?: EvaluatedSignals.UserMultiAccounting;
  }

  export type PendingSignal =
    | 'fraudulent_website'
    | 'user_account_sharing'
    | 'user_multi_accounting'
    | OtherString;

  export type RequestedSignal =
    | 'fraudulent_website'
    | 'user_account_sharing'
    | 'user_multi_accounting'
    | OtherString;

  export namespace AccountDetails {
    export interface Data {
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

  export namespace EvaluatedSignals {
    export interface FraudulentWebsite {
      /**
       * Human-readable details about the fraudulent website evaluation, when available.
       */
      details?: string;

      /**
       * Timestamp at which the signal was evaluated.
       */
      evaluated_at?: string;

      /**
       * Categorical assessment of the fraudulent website risk.
       */
      risk_level: FraudulentWebsite.RiskLevel;

      /**
       * The account signal ID containing the full fraudulent website signal result.
       */
      signal?: string;
    }

    export interface UserAccountSharing {
      /**
       * Timestamp at which the signal was evaluated.
       */
      evaluated_at?: string;

      /**
       * Categorical assessment of the account-sharing risk.
       */
      risk_level: UserAccountSharing.RiskLevel;

      /**
       * The specific risk score for the account, between 0.00 and 100.00, when available.
       */
      score?: Decimal;

      /**
       * The account signal ID containing the full user account-sharing signal result.
       */
      signal?: string;
    }

    export interface UserMultiAccounting {
      /**
       * Timestamp at which the signal was evaluated.
       */
      evaluated_at?: string;

      /**
       * Categorical assessment of the multi-accounting risk.
       */
      risk_level: UserMultiAccounting.RiskLevel;

      /**
       * The specific risk score for the account, between 0.00 and 100.00, when available.
       */
      score?: Decimal;

      /**
       * The account signal ID containing the full user multi-accounting signal result.
       */
      signal?: string;
    }

    export namespace FraudulentWebsite {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';
    }

    export namespace UserAccountSharing {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';
    }

    export namespace UserMultiAccounting {
      export type RiskLevel =
        | 'elevated'
        | 'highest'
        | 'low'
        | 'normal'
        | 'not_assessed'
        | 'unknown';
    }
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountEvaluationCreateParams {
      /**
       * The account, customer, or inline account data to evaluate.
       */
      account_details: AccountEvaluationCreateParams.AccountDetails;

      /**
       * List of signals to evaluate.
       */
      requested_signals: Array<AccountEvaluationCreateParams.RequestedSignal>;

      /**
       * Account activity to record alongside this evaluation.
       */
      account_activity_details?: AccountEvaluationCreateParams.AccountActivityDetails;
    }

    export namespace AccountEvaluationCreateParams {
      export interface AccountDetails {
        /**
         * The v2 account ID of the account.
         */
        account?: string;

        /**
         * The v1 customer ID of the account, for users not yet migrated to v2/accounts.
         */
        customer?: string;

        /**
         * Inline account data to evaluate without creating a v2 account.
         */
        data?: AccountDetails.Data;
      }

      export type RequestedSignal =
        | 'fraudulent_website'
        | 'user_account_sharing'
        | 'user_multi_accounting'
        | OtherString;

      export interface AccountActivityDetails {
        /**
         * The ID of an existing account activity to associate with the evaluation.
         */
        account_activity?: string;

        /**
         * Inline activity data used to create a new account activity for the evaluation.
         */
        data?: AccountActivityDetails.Data;
      }

      export namespace AccountActivityDetails {
        export interface Data {
          /**
           * Details for the login attempt. Provide only when type is login_attempt.
           */
          login_attempt?: Data.LoginAttempt;

          /**
           * Timestamp at which the activity occurred. Defaults to the created time if not provided.
           */
          occurred_at?: string;

          /**
           * Details for the registration attempt. Provide only when type is registration_attempt.
           */
          registration_attempt?: Data.RegistrationAttempt;

          /**
           * The type of activity. Must be registration_attempt or login_attempt.
           */
          type: Data.Type;
        }

        export namespace Data {
          export interface LoginAttempt {
            /**
             * Client details captured for the attempt.
             */
            client_details: LoginAttempt.ClientDetails;
          }

          export interface RegistrationAttempt {
            /**
             * Client details captured for the attempt.
             */
            client_details: RegistrationAttempt.ClientDetails;
          }

          export type Type =
            | 'login_attempt'
            | 'login_decision'
            | 'registration_attempt'
            | 'registration_decision'
            | OtherString;

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
        }
      }

      export namespace AccountDetails {
        export interface Data {
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
    }
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountEvaluationRetrieveParams {}
  }
}
