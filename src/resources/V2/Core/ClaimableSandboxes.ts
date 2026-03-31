// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class ClaimableSandboxResource extends StripeResource {
  /**
   * Create an anonymous, claimable sandbox. This sandbox can be prefilled with data. The response will include
   * a claim URL that allow a user to claim the account.
   */
  create(
    params: V2.Core.ClaimableSandboxCreateParams,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/core/claimable_sandboxes',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of a claimable sandbox that was previously been created.
   * Supply the unique claimable sandbox ID that was returned from your creation request,
   * and Stripe will return the corresponding sandbox information.
   */
  retrieve(
    id: string,
    params?: V2.Core.ClaimableSandboxRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/core/claimable_sandboxes/{id}',
    }).call(this, ...args);
  }
}
export interface ClaimableSandbox {
  /**
   * Unique identifier for the Claimable sandbox.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.claimable_sandbox';

  /**
   * URL for user to claim sandbox into their existing Stripe account.
   * The value will be null if the sandbox status is `claimed` or `expired`.
   */
  claim_url?: string;

  /**
   * The timestamp the sandbox was claimed. The value will be null if the sandbox status is not `claimed`.
   */
  claimed_at?: string;

  /**
   * When the sandbox is created.
   */
  created: string;

  /**
   * The timestamp the sandbox will expire. The value will be null if the sandbox is `claimed`.
   */
  expires_at?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Values prefilled during the creation of the sandbox. When a user claims the sandbox, they will be able to update these values.
   */
  prefill: V2.Core.ClaimableSandbox.Prefill;

  /**
   * Data about the Stripe sandbox object.
   */
  sandbox_details: V2.Core.ClaimableSandbox.SandboxDetails;

  /**
   * Status of the sandbox. One of `unclaimed`, `expired`, `claimed`.
   */
  status: V2.Core.ClaimableSandbox.Status;
}
export namespace V2 {
  export namespace Core {
    export namespace ClaimableSandbox {
      export interface Prefill {
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

      export interface SandboxDetails {
        /**
         * The sandbox's Stripe account ID.
         */
        account: string;

        /**
         * Keys that can be used to set up an integration for this sandbox and operate on the account. This will be present only in the create response, and will be null in subsequent retrieve responses.
         */
        api_keys?: SandboxDetails.ApiKeys;

        /**
         * The livemode sandbox Stripe account ID. This field is only set if the user activates their sandbox
         * and chooses to install your platform's Stripe App in their live account.
         */
        owner_account?: string;
      }

      export type Status = 'claimed' | 'expired' | 'unclaimed';

      export namespace SandboxDetails {
        export interface ApiKeys {
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
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxCreateParams {
      /**
       * If true, returns a key that can be used with [Stripe's MCP server](https://docs.stripe.com/mcp).
       */
      enable_mcp_access: boolean;

      /**
       * Values that are prefilled when a user claims the sandbox. When a user claims the sandbox, they will be able to update these values.
       */
      prefill: ClaimableSandboxCreateParams.Prefill;
    }

    export namespace ClaimableSandboxCreateParams {
      export interface Prefill {
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
         * Name for the sandbox.
         */
        name?: string;
      }
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxRetrieveParams {}
  }
}
