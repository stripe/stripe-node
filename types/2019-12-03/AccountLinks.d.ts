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
       * The URL that the user will be redirected to if the account link is no longer valid.
       */
      failure_url: string;

      /**
       * The URL that the user will be redirected to upon leaving or completing the linked flow successfully.
       */
      success_url: string;

      /**
       * The type of account link the user is requesting. Possible values are `custom_account_verification` or `custom_account_update`.
       */
      type: string;

      /**
       * Which information the platform needs to collect from the user. One of `currently_due` or `eventually_due`. Default is `currently_due`.
       */
      collect?: AccountLinkCreateParams.Collect;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace AccountLinkCreateParams {
      type Collect = 'currently_due' | 'eventually_due';
    }

    class AccountLinksResource {
      /**
       * Creates an AccountLink object that returns a single-use Stripe URL that the user can redirect their user to in order to take them through the Connect Onboarding flow.
       */
      create(
        params: AccountLinkCreateParams,
        options?: RequestOptions
      ): Promise<Stripe.AccountLink>;
    }
  }
}
