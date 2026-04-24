// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ClaimableSandboxResource extends StripeResource {
  /**
   * Create an anonymous, claimable sandbox. This sandbox can be prefilled with data. The response will include
   * a claim URL that allow a user to claim the account.
   */
  create(
    params: V2.Core.ClaimableSandboxCreateParams,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>> {
    return this._makeRequest(
      'POST',
      '/v2/core/claimable_sandboxes',
      params,
      options
    ) as any;
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
  ): Promise<Response<ClaimableSandbox>> {
    return this._makeRequest(
      'GET',
      `/v2/core/claimable_sandboxes/${id}`,
      params,
      options
    ) as any;
  }
  /**
   * Renew the claimable sandbox onboarding link. This will invalidate any existing onboarding links.
   * The endpoint only works on a claimable sandbox with status `unclaimed` or `claimed`.
   */
  renewOnboardingLink(
    id: string,
    params?: V2.Core.ClaimableSandboxRenewOnboardingLinkParams,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>> {
    return this._makeRequest(
      'POST',
      `/v2/core/claimable_sandboxes/${id}/renew_onboarding_link`,
      params,
      options
    ) as any;
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
   * The app channel that will be used when pre-installing your app on the claimable sandbox.
   */
  app_channel: V2.Core.ClaimableSandbox.AppChannel;

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
   * Details about the onboarding link.
   */
  onboarding_link_details: V2.Core.ClaimableSandbox.OnboardingLinkDetails;

  /**
   * Details about the livemode owner account of the sandbox.
   * This will be null until the sandbox is claimed.
   */
  owner_details?: V2.Core.ClaimableSandbox.OwnerDetails;

  /**
   * Values prefilled during the creation of the sandbox. When a user claims the sandbox, they will be able to update these values.
   */
  prefill: V2.Core.ClaimableSandbox.Prefill;

  /**
   * Data about the Stripe sandbox object.
   */
  sandbox_details: V2.Core.ClaimableSandbox.SandboxDetails;

  /**
   * Status of the sandbox.
   */
  status: V2.Core.ClaimableSandbox.Status;
}
export namespace V2 {
  export namespace Core {
    export namespace ClaimableSandbox {
      export type AppChannel = 'public' | 'testing';

      export interface OnboardingLinkDetails {
        /**
         * The timestamp the onboarding link expires.
         */
        expires_at: string;

        /**
         * The URL the user will be redirected to if the onboarding link is expired or invalid.
         * The URL specified should attempt to generate a new onboarding link,
         * and re-direct the user to this new onboarding link so that they can proceed with the onboarding flow.
         */
        refresh_url: string;

        /**
         * URL that will redirect the user to either claim or onboard the claimable sandbox depending on its status.
         */
        url: string;
      }

      export interface OwnerDetails {
        /**
         * The ID of the livemode Stripe account that owns the sandbox.
         * This field is only set when owner_details.app_install_status is `installed`.
         */
        account?: string;

        /**
         * Indicates whether the platform app is installed on the sandbox's livemode owner account.
         */
        app_install_status: OwnerDetails.AppInstallStatus;
      }

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
      }

      export type Status = 'claimed' | 'expired' | 'live' | 'unclaimed';

      export namespace OwnerDetails {
        export type AppInstallStatus =
          | 'installed'
          | 'pending_install'
          | 'pending_onboarding';
      }

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
       * Details about the onboarding link.
       */
      onboarding_link_details: ClaimableSandboxCreateParams.OnboardingLinkDetails;

      /**
       * Values that are prefilled when a user claims the sandbox. When a user claims the sandbox, they will be able to update these values.
       */
      prefill: ClaimableSandboxCreateParams.Prefill;

      /**
       * The app channel that will be used when pre-installing your app on the claimable sandbox.
       * This field defaults to `public` if omitted.
       */
      app_channel?: ClaimableSandboxCreateParams.AppChannel;
    }

    export namespace ClaimableSandboxCreateParams {
      export interface OnboardingLinkDetails {
        /**
         * The URL the user will be redirected to if the onboarding link is expired or invalid.
         * The URL specified should attempt to generate a new onboarding link,
         * and re-direct the user to this new onboarding link so that they can proceed with the onboarding flow.
         */
        refresh_url: string;
      }

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

      export type AppChannel = 'public' | 'testing';
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxRenewOnboardingLinkParams {
      /**
       * Details about the onboarding link.
       * If omitted, the existing onboarding link details will be reused.
       */
      onboarding_link_details?: ClaimableSandboxRenewOnboardingLinkParams.OnboardingLinkDetails;
    }

    export namespace ClaimableSandboxRenewOnboardingLinkParams {
      export interface OnboardingLinkDetails {
        /**
         * The URL the user will be redirected to if the onboarding link is expired or invalid.
         * The URL specified should attempt to generate a new onboarding link,
         * and re-direct the user to this new onboarding link so that they can proceed with the onboarding flow.
         */
        refresh_url: string;
      }
    }
  }
}
