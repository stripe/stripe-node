// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * AccountLinks are the means by which a Merchant grants an Account permission to access Stripe-hosted applications, such as Recipient Onboarding. This API is only available for users enrolled in the public preview for Accounts v2.
         */
        interface AccountLink {
          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.account_link';

          /**
           * The ID of the Account the link was created for.
           */
          account: string;

          /**
           * The timestamp at which this AccountLink was created.
           */
          created: string;

          /**
           * The timestamp at which this AccountLink will expire.
           */
          expires_at: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * The URL for the AccountLink.
           */
          url: string;

          /**
           * The use case of AccountLink the user is requesting.
           */
          use_case: AccountLink.UseCase;
        }

        namespace AccountLink {
          interface UseCase {
            /**
             * Open Enum. The type of AccountLink the user is requesting.
             */
            type: UseCase.Type;

            /**
             * Indicates that the AccountLink provided should onboard an account.
             */
            account_onboarding: UseCase.AccountOnboarding | null;

            /**
             * Indicates that the AccountLink provided should update a previously onboarded account.
             */
            account_update: UseCase.AccountUpdate | null;
          }

          namespace UseCase {
            interface AccountOnboarding {
              /**
               * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
               */
              collection_options: AccountOnboarding.CollectionOptions | null;

              /**
               * Open Enum. A v2/core/account can be configured to enable certain functionality. The configuration param targets the v2/core/account_link to collect information for the specified v2/core/account configuration/s.
               */
              configurations: Array<AccountOnboarding.Configuration>;

              /**
               * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
               */
              refresh_url: string;

              /**
               * The URL that the user will be redirected to upon completing the linked flow.
               */
              return_url: string | null;
            }

            namespace AccountOnboarding {
              interface CollectionOptions {
                /**
                 * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
                 */
                fields: CollectionOptions.Fields | null;

                /**
                 * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
                 */
                future_requirements: CollectionOptions.FutureRequirements | null;
              }

              namespace CollectionOptions {
                type Fields = 'currently_due' | 'eventually_due';

                type FutureRequirements = 'include' | 'omit';
              }

              type Configuration =
                | 'customer'
                | 'merchant'
                | 'recipient'
                | 'storer';
            }

            interface AccountUpdate {
              /**
               * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
               */
              collection_options: AccountUpdate.CollectionOptions | null;

              /**
               * Open Enum. A v2/account can be configured to enable certain functionality. The configuration param targets the v2/account_link to collect information for the specified v2/account configuration/s.
               */
              configurations: Array<AccountUpdate.Configuration>;

              /**
               * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
               */
              refresh_url: string;

              /**
               * The URL that the user will be redirected to upon completing the linked flow.
               */
              return_url: string | null;
            }

            namespace AccountUpdate {
              interface CollectionOptions {
                /**
                 * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
                 */
                fields: CollectionOptions.Fields | null;

                /**
                 * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
                 */
                future_requirements: CollectionOptions.FutureRequirements | null;
              }

              namespace CollectionOptions {
                type Fields = 'currently_due' | 'eventually_due';

                type FutureRequirements = 'include' | 'omit';
              }

              type Configuration =
                | 'customer'
                | 'merchant'
                | 'recipient'
                | 'storer';
            }

            type Type = 'account_onboarding' | 'account_update';
          }
        }
      }
    }
  }
}
