// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface AccountEvaluationCreateParams {
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

        namespace AccountEvaluationCreateParams {
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

      namespace Core {
        class AccountEvaluationsResource {
          /**
           * Creates a new account evaluation to trigger signal evaluations on an account or account data.
           */
          create(
            params: AccountEvaluationCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.AccountEvaluation>>;
        }
      }
    }
  }
}
