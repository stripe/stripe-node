// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class AccountEvaluationResource extends StripeResource {
  /**
   * Creates a new account evaluation to trigger signal evaluations on an account or account data.
   */
  create(
    params: V2.Core.AccountEvaluationCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountEvaluation>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/account_evaluations',
    }).call(this, ...args);
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
  object: 'v2.core.account_evaluation';

  /**
   * The account ID if this evaluation is for an existing account.
   */
  account?: string;

  /**
   * Account data if this evaluation is for an account without an existing Stripe entity.
   */
  account_data?: V2.Core.AccountEvaluation.AccountData;

  /**
   * Timestamp at which the evaluation was created.
   */
  created: string;

  /**
   * List of signals that were triggered for evaluation.
   */
  evaluations_triggered: Array<'fraudulent_website'>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace V2 {
  export namespace Core {
    export namespace AccountEvaluation {
      export interface AccountData {
        /**
         * Default account settings.
         */
        defaults?: AccountData.Defaults;

        /**
         * Identity data.
         */
        identity?: AccountData.Identity;
      }

      export namespace AccountData {
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
export namespace V2 {
  export namespace Core {
    export interface AccountEvaluationCreateParams {
      /**
       * List of signals to evaluate.
       */
      signals: Array<'fraudulent_website'>;

      /**
       * The account ID to evaluate. Exactly one of account or account_data must be provided.
       */
      account?: string;

      /**
       * Account data for entity-less evaluation. Exactly one of account or account_data must be provided.
       */
      account_data?: AccountEvaluationCreateParams.AccountData;
    }

    export namespace AccountEvaluationCreateParams {
      export interface AccountData {
        /**
         * Default account settings.
         */
        defaults?: AccountData.Defaults;

        /**
         * Identity data.
         */
        identity?: AccountData.Identity;
      }

      export namespace AccountData {
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
