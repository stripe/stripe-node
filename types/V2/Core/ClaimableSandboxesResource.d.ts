// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        interface ClaimableSandboxCreateParams {
          /**
           * If true, returns a key that can be used with [Stripe's MCP server](https://docs.stripe.com/mcp).
           */
          enable_mcp_access: boolean;

          /**
           * Values that are prefilled when a user claims the sandbox. When a user claims the sandbox, they will be able to update these values.
           */
          prefill: ClaimableSandboxCreateParams.Prefill;
        }

        namespace ClaimableSandboxCreateParams {
          interface Prefill {
            /**
             * Country in which the account holder resides, or in which the business is legally established.
             * Use two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country: string;

            /**
             * Email that this sandbox is meant to be claimed by. Stripe will
             * notify this email address before the sandbox expires.
             */
            email: string;

            /**
             * Name for the sandbox. If not provided, this will be generated.
             */
            name?: string;
          }
        }
      }

      namespace Core {
        interface ClaimableSandboxRetrieveParams {}
      }

      namespace Core {
        class ClaimableSandboxesResource {
          /**
           * Create an anonymous, claimable sandbox. This sandbox can be prefilled with data. The response will include
           * a claim URL that allow a user to claim the account.
           */
          create(
            params: ClaimableSandboxCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ClaimableSandbox>>;

          /**
           * Retrieves the details of a claimable sandbox that was previously been created.
           * Supply the unique claimable sandbox ID that was returned from your creation request,
           * and Stripe will return the corresponding sandbox information.
           */
          retrieve(
            id: string,
            params?: ClaimableSandboxRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ClaimableSandbox>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Core.ClaimableSandbox>>;
        }
      }
    }
  }
}
