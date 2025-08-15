// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      interface AccountLinkCreateParams {
        /**
         * The ID of the Account to create link for.
         */
        account: string;

        /**
         * The use case of the AccountLink.
         */
        use_case: AccountLinkCreateParams.UseCase;
      }

      namespace AccountLinkCreateParams {
        interface UseCase {
          /**
           * Open Enum. The type of AccountLink the user is requesting.
           */
          type: UseCase.Type;

          /**
           * Indicates that the AccountLink provided should onboard an account.
           */
          account_onboarding?: UseCase.AccountOnboarding;

          /**
           * Indicates that the AccountLink provided should update a previously onboarded account.
           */
          account_update?: UseCase.AccountUpdate;
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
            return_url?: string;
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
            return_url?: string;
          }

          type Type = 'account_onboarding' | 'account_update';
        }
      }

      class AccountLinksResource {
        /**
         * Creates an AccountLink object that includes a single-use Stripe URL that the merchant can redirect their user to in order to take them to a Stripe-hosted application such as Recipient Onboarding.
         */
        create(
          params: AccountLinkCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.V2.AccountLink>>;
      }
    }
  }
}
