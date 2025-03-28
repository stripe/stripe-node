// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * AccountLinks are the means by which a Merchant grants an Account permission to access Stripe-hosted application, such as Recipient Onboarding.
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
               * Open Enum. A v2/account can be configured to enable certain functionality. The configuration param targets the v2/account_link to collect information for the specified v2/account configuration/s.
               */
              configurations: Array<'recipient'>;

              /**
               * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
               */
              refresh_url: string;

              /**
               * The URL that the user will be redirected to upon completing the linked flow.
               */
              return_url: string | null;
            }

            interface AccountUpdate {
              /**
               * Open Enum. A v2/account can be configured to enable certain functionality. The configuration param targets the v2/account_link to collect information for the specified v2/account configuration/s.
               */
              configurations: Array<'recipient'>;

              /**
               * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
               */
              refresh_url: string;

              /**
               * The URL that the user will be redirected to upon completing the linked flow.
               */
              return_url: string | null;
            }

            type Type = 'account_onboarding' | 'account_update';
          }
        }
      }
    }
  }
}
