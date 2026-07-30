// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
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
      '/v2/signals/account_activity',
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
      `/v2/signals/account_activity/${encodeURIComponent(id)}`,
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
      `/v2/signals/account_activity/${encodeURIComponent(id)}`,
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
   * Timestamp at which the account activity was created.
   */
  created: string;

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
     * The v1 customer ID of the account, for users not yet migrated to v2/accounts.
     */
    customer?: string;

    /**
     * Inline account data to evaluate without creating a v2 account.
     */
    data?: AccountDetails.Data;
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
    | 'login_attempt'
    | 'login_decision'
    | 'registration_attempt'
    | 'registration_decision'
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
       * Details for the login attempt. Provide only when type is login_attempt.
       */
      login_attempt?: AccountActivityCreateParams.LoginAttempt;

      /**
       * Details for the login decision. Provide only when type is login_decision.
       */
      login_decision?: AccountActivityCreateParams.LoginDecision;

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
        | 'login_attempt'
        | 'login_decision'
        | 'registration_attempt'
        | 'registration_decision'
        | OtherString;

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
