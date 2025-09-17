// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * A claimable sandbox represents a Stripe sandbox that is anonymous.
         * When it is created, it can be prefilled with specific metadata, such as email, name, or country.
         * Claimable sandboxes can be claimed through a URL. When a user claims a sandbox through this URL,
         * it will prompt them to create a new Stripe account. Or, it will allow them to claim this sandbox in their
         * existing Stripe account.
         * Claimable sandboxes have 60 days to be claimed. After this expiration time has passed,
         * if the sandbox is not claimed, it will be deleted.
         */
        interface ClaimableSandbox {
          /**
           * Unique identifier for the Claimable sandbox.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.core.claimable_sandbox';

          /**
           * Keys that can be used to set up an integration for this sandbox and operate on the account.
           */
          api_keys: ClaimableSandbox.ApiKeys;

          /**
           * URL for user to claim sandbox into their existing Stripe account.
           */
          claim_url: string;

          /**
           * When the sandbox is created.
           */
          created: string;

          /**
           * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
           */
          livemode: boolean;

          /**
           * Values prefilled during the creation of the sandbox.
           */
          prefill: ClaimableSandbox.Prefill;
        }

        namespace ClaimableSandbox {
          interface ApiKeys {
            /**
             * Used to communicate with [Stripe's MCP server](https://docs.stripe.com/mcp).
             * This allows LLM agents to securely operate on a Stripe account.
             */
            mcp?: string;

            /**
             * Publicly accessible in a web or mobile app client-side code.
             */
            publishable: string;

            /**
             * Should be stored securely in server-side code (such as an environment variable).
             */
            secret: string;
          }

          interface Prefill {
            /**
             * Country in which the account holder resides, or in which the business is legally established.
             * Use two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * Email that this sandbox is meant to be claimed by. Stripe will
             * send an email to this email address before the sandbox expires.
             */
            email: string;

            /**
             * Name for the sandbox.
             */
            name: string;
          }
        }
      }
    }
  }
}
