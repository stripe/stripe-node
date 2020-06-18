declare module 'stripe' {
  namespace Stripe {
    /**
     * The AccountLink object.
     */
    interface AccountLink {
      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'account_link';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The timestamp at which this account link will expire.
       */
      expires_at: number;

      /**
       * The URL for the account link.
       */
      url: string;
    }

    interface AccountLinkCreateParams {
      /**
       * The identifier of the account to create an account link for.
       */
      account: string;

      /**
       * The type of account link the user is requesting. Possible values are `custom_account_verification` or `custom_account_update`.
       */
      type: AccountLinkCreateParams.Type;

      /**
       * Which information the platform needs to collect from the user. One of `currently_due` or `eventually_due`. Default is `currently_due`.
       */
      collect?: AccountLinkCreateParams.Collect;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Alternate name for refresh_url to ensure backwards compatibility
       */
      failure_url?: string;

      /**
       * The URL that the user will be redirected to if the account link is no longer valid. Your `refresh_url` should trigger a method on your server to create a new account link using this API, with the same parameters, and redirect the user to the new account link.
       */
      refresh_url?: string;

      /**
       * The URL that the user will be redirected to upon leaving or completing the linked flow.
       */
      return_url?: string;

      /**
       * Alternate name for return_url to ensure backwards compatibility
       */
      success_url?: string;
    }

    namespace AccountLinkCreateParams {
      type Collect = 'currently_due' | 'eventually_due';

      type Type = 'custom_account_update' | 'custom_account_verification';
    }

    class AccountLinksResource {
      /**
       * Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.
       */
      create(
        params: AccountLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.AccountLink>;
    }
  }
}
