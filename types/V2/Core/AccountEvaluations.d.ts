// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * Account Evaluation resource.
         */
        interface AccountEvaluation {
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
          account_data?: AccountEvaluation.AccountData;

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

        namespace AccountEvaluation {
          interface AccountData {
            /**
             * Default account settings.
             */
            defaults?: AccountData.Defaults;

            /**
             * Identity data.
             */
            identity?: AccountData.Identity;
          }

          namespace AccountData {
            interface Defaults {
              /**
               * Account profile data.
               */
              profile: Defaults.Profile;
            }

            namespace Defaults {
              interface Profile {
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

            interface Identity {
              /**
               * Business details for identity data.
               */
              business_details: Identity.BusinessDetails;
            }

            namespace Identity {
              interface BusinessDetails {
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
}
