// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class AccountLinkResource extends StripeResource {
  /**
   * Creates an AccountLink object that includes a single-use URL that an account can use to access a Stripe-hosted flow for collecting or updating required information.
   * @throws Stripe.RateLimitError
   */
  create(
    params: V2.Core.AccountLinkCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountLink>> {
    return this._makeRequest(
      'POST',
      '/v2/core/account_links',
      params,
      options
    ) as any;
  }
}
export interface AccountLink {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.account_link';

  /**
   * The ID of the connected account this Account Link applies to.
   */
  account: string;

  /**
   * The timestamp at which this Account Link was created.
   */
  created: string;

  /**
   * The timestamp at which this Account Link will expire.
   */
  expires_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The URL at which the account can access the Stripe-hosted flow.
   */
  url: string;

  /**
   * Describes the Stripe-hosted flow for this Account Link, including its type and flow-specific configuration.
   */
  use_case: AccountLink.UseCase;
}
export namespace AccountLink {
  export interface UseCase {
    /**
     * Hash containing configuration options for an Account Link object that onboards a new account.
     */
    account_onboarding?: UseCase.AccountOnboarding;

    /**
     * Hash containing configuration options for an Account Link that updates an existing account.
     */
    account_update?: UseCase.AccountUpdate;

    /**
     * Hash containing configuration options for an Account Link object that onboards a new recipient.
     */
    recipient_onboarding?: UseCase.RecipientOnboarding;

    /**
     * Hash containing configuration options for an Account Link that updates an existing recipient.
     */
    recipient_update?: UseCase.RecipientUpdate;

    /**
     * Open Enum. The type of Account Link the user is requesting.
     */
    type: UseCase.Type;
  }

  export namespace UseCase {
    export interface AccountOnboarding {
      /**
       * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
       */
      collection_options?: AccountOnboarding.CollectionOptions;

      /**
       * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
       */
      refresh_url: string;

      /**
       * The URL that the user will be redirected to upon completing the linked flow.
       */
      return_url?: string;
    }

    export interface AccountUpdate {
      /**
       * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
       */
      collection_options?: AccountUpdate.CollectionOptions;

      /**
       * The URL the user will be redirected to if the Account Link is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new Account Link with the same parameters used to create the original Account Link, then redirect the user to the new Account Link URL so they can continue the flow. Make sure to authenticate the user before redirecting to the new Account Link, in case the URL leaks to a third party. If a new Account Link can't be generated, or if the redirect fails, you should display a useful error to the user.
       */
      refresh_url: string;

      /**
       * The URL that the user will be redirected to upon completing the linked flow.
       */
      return_url?: string;
    }

    export interface RecipientOnboarding {
      /**
       * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
       */
      collection_options?: RecipientOnboarding.CollectionOptions;

      /**
       * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
       */
      refresh_url: string;

      /**
       * The URL that the user will be redirected to upon completing the linked flow.
       */
      return_url?: string;
    }

    export interface RecipientUpdate {
      /**
       * Specifies the requirements that Stripe collects from v2/core/accounts in the Update flow.
       */
      collection_options?: RecipientUpdate.CollectionOptions;

      /**
       * The URL the user will be redirected to if the Account Link is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new Account Link with the same parameters used to create the original Account Link, then redirect the user to the new Account Link URL so they can continue the flow. Make sure to authenticate the user before redirecting to the new Account Link, in case the URL leaks to a third party. If a new Account Link can't be generated, or if the redirect fails, you should display a useful error to the user.
       */
      refresh_url: string;

      /**
       * The URL that the user will be redirected to upon completing the linked flow.
       */
      return_url?: string;
    }

    export type Type =
      | 'account_onboarding'
      | 'account_update'
      | 'recipient_onboarding'
      | 'recipient_update'
      | OtherString;

    export namespace AccountOnboarding {
      export interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
         */
        fields?: CollectionOptions.Fields;

        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
      }

      export namespace CollectionOptions {
        export type Fields = 'currently_due' | 'eventually_due' | OtherString;

        export type FutureRequirements = 'include' | 'omit' | OtherString;
      }
    }

    export namespace AccountUpdate {
      export interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). The default value is `currently_due`.
         */
        fields?: CollectionOptions.Fields;

        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
      }

      export namespace CollectionOptions {
        export type Fields = 'currently_due' | 'eventually_due' | OtherString;

        export type FutureRequirements = 'include' | 'omit' | OtherString;
      }
    }

    export namespace RecipientOnboarding {
      export interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
         */
        fields?: CollectionOptions.Fields;

        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
      }

      export namespace CollectionOptions {
        export type Fields = 'currently_due' | 'eventually_due' | OtherString;

        export type FutureRequirements = 'include' | 'omit' | OtherString;
      }
    }

    export namespace RecipientUpdate {
      export interface CollectionOptions {
        /**
         * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). The default value is `currently_due`.
         */
        fields?: CollectionOptions.Fields;

        /**
         * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
         */
        future_requirements?: CollectionOptions.FutureRequirements;
      }

      export namespace CollectionOptions {
        export type Fields = 'currently_due' | 'eventually_due' | OtherString;

        export type FutureRequirements = 'include' | 'omit' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface AccountLinkCreateParams {
      /**
       * The ID of the Account to create link for.
       */
      account: string;

      /**
       * Specifies the Stripe-hosted flow for this Account Link. Set `type` and the matching options hash—for example,
       * `account_onboarding`—to configure the flow, including which Account configurations to collect information for and
       * any flow-specific collection or redirect options.
       */
      use_case: AccountLinkCreateParams.UseCase;
    }

    export namespace AccountLinkCreateParams {
      export interface UseCase {
        /**
         * Hash containing configuration options for an Account Link object that onboards a new account.
         */
        account_onboarding?: UseCase.AccountOnboarding;

        /**
         * Hash containing configuration options for an Account Link that updates an existing account.
         */
        account_update?: UseCase.AccountUpdate;

        /**
         * Hash containing configuration options for an Account Link object that onboards a new recipient.
         */
        recipient_onboarding?: UseCase.RecipientOnboarding;

        /**
         * Hash containing configuration options for an Account Link that updates an existing recipient.
         */
        recipient_update?: UseCase.RecipientUpdate;

        /**
         * Open Enum. The type of Account Link the user is requesting.
         */
        type: UseCase.Type;
      }

      export namespace UseCase {
        export interface AccountOnboarding {
          /**
           * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
           */
          collection_options?: AccountOnboarding.CollectionOptions;

          /**
           * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
           */
          refresh_url: string;

          /**
           * The URL that the user will be redirected to upon completing the linked flow.
           */
          return_url?: string;
        }

        export interface AccountUpdate {
          /**
           * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
           */
          collection_options?: AccountUpdate.CollectionOptions;

          /**
           * The URL the user will be redirected to if the Account Link is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new Account Link with the same parameters used to create the original Account Link, then redirect the user to the new Account Link URL so they can continue the flow. Make sure to authenticate the user before redirecting to the new Account Link, in case the URL leaks to a third party. If a new Account Link can't be generated, or if the redirect fails, you should display a useful error to the user.
           */
          refresh_url: string;

          /**
           * The URL that the user will be redirected to upon completing the linked flow.
           */
          return_url?: string;
        }

        export interface RecipientOnboarding {
          /**
           * Specifies the requirements that Stripe collects from v2/core/accounts in the Onboarding flow.
           */
          collection_options?: RecipientOnboarding.CollectionOptions;

          /**
           * The URL the user will be redirected to if the AccountLink is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new AccountLink with the same parameters used to create the original AccountLink, then redirect the user to the new AccountLink's URL so they can continue the flow. If a new AccountLink cannot be generated or the redirect fails you should display a useful error to the user. Please make sure to implement authentication before redirecting the user in case this URL is leaked to a third party.
           */
          refresh_url: string;

          /**
           * The URL that the user will be redirected to upon completing the linked flow.
           */
          return_url?: string;
        }

        export interface RecipientUpdate {
          /**
           * Specifies the requirements that Stripe collects from v2/core/accounts in the Update flow.
           */
          collection_options?: RecipientUpdate.CollectionOptions;

          /**
           * The URL the user will be redirected to if the Account Link is expired, has been used, or is otherwise invalid. The URL you specify should attempt to generate a new Account Link with the same parameters used to create the original Account Link, then redirect the user to the new Account Link URL so they can continue the flow. Make sure to authenticate the user before redirecting to the new Account Link, in case the URL leaks to a third party. If a new Account Link can't be generated, or if the redirect fails, you should display a useful error to the user.
           */
          refresh_url: string;

          /**
           * The URL that the user will be redirected to upon completing the linked flow.
           */
          return_url?: string;
        }

        export type Type =
          | 'account_onboarding'
          | 'account_update'
          | 'recipient_onboarding'
          | 'recipient_update'
          | OtherString;

        export namespace AccountOnboarding {
          export interface CollectionOptions {
            /**
             * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
             */
            fields?: CollectionOptions.Fields;

            /**
             * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
             */
            future_requirements?: CollectionOptions.FutureRequirements;
          }

          export namespace CollectionOptions {
            export type Fields =
              | 'currently_due'
              | 'eventually_due'
              | OtherString;

            export type FutureRequirements = 'include' | 'omit' | OtherString;
          }
        }

        export namespace AccountUpdate {
          export interface CollectionOptions {
            /**
             * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). The default value is `currently_due`.
             */
            fields?: CollectionOptions.Fields;

            /**
             * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
             */
            future_requirements?: CollectionOptions.FutureRequirements;
          }

          export namespace CollectionOptions {
            export type Fields =
              | 'currently_due'
              | 'eventually_due'
              | OtherString;

            export type FutureRequirements = 'include' | 'omit' | OtherString;
          }
        }

        export namespace RecipientOnboarding {
          export interface CollectionOptions {
            /**
             * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). If you don't specify collection_options, the default value is currently_due.
             */
            fields?: CollectionOptions.Fields;

            /**
             * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
             */
            future_requirements?: CollectionOptions.FutureRequirements;
          }

          export namespace CollectionOptions {
            export type Fields =
              | 'currently_due'
              | 'eventually_due'
              | OtherString;

            export type FutureRequirements = 'include' | 'omit' | OtherString;
          }
        }

        export namespace RecipientUpdate {
          export interface CollectionOptions {
            /**
             * Specifies whether the platform collects only currently_due requirements (`currently_due`) or both currently_due and eventually_due requirements (`eventually_due`). The default value is `currently_due`.
             */
            fields?: CollectionOptions.Fields;

            /**
             * Specifies whether the platform collects future_requirements in addition to requirements in Connect Onboarding. The default value is `omit`.
             */
            future_requirements?: CollectionOptions.FutureRequirements;
          }

          export namespace CollectionOptions {
            export type Fields =
              | 'currently_due'
              | 'eventually_due'
              | OtherString;

            export type FutureRequirements = 'include' | 'omit' | OtherString;
          }
        }
      }
    }
  }
}
