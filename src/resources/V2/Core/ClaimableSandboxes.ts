// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ClaimableSandboxResource extends StripeResource {
  /**
   * Create a claimable sandbox with prefilled data. The response includes an onboarding link that lets
   * a user claim the sandbox into a new or existing Stripe account.
   * @throws Stripe.RateLimitError
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
      `/v2/core/claimable_sandboxes/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Renew the claimable sandbox onboarding link. This invalidates the existing onboarding link.
   * The endpoint only works on a claimable sandbox with status `unclaimed` or `claimed`.
   */
  renewOnboardingLink(
    id: string,
    params?: V2.Core.ClaimableSandboxRenewOnboardingLinkParams,
    options?: RequestOptions
  ): Promise<Response<ClaimableSandbox>> {
    return this._makeRequest(
      'POST',
      `/v2/core/claimable_sandboxes/${encodeURIComponent(
        id
      )}/renew_onboarding_link`,
      params,
      options
    ) as any;
  }
}
export interface ClaimableSandbox {
  /**
   * Unique identifier for the claimable sandbox.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.claimable_sandbox';

  /**
   * The distribution channel used to pre-install your Stripe App on the claimable sandbox.
   * Use `testing` to install your app's external test version or `public` to install its published version.
   */
  channel: ClaimableSandbox.Channel;

  /**
   * Time at which the sandbox was claimed. Set when the status is `claimed` or `live`.
   * Represented as an RFC 3339 timestamp in UTC with millisecond precision,
   * for example `2022-09-18T13:22:18.123Z`.
   */
  claimed_at?: string;

  /**
   * Time at which the sandbox was created. Represented as an RFC 3339 timestamp in UTC
   * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
   */
  created: string;

  /**
   * Time at which the unclaimed sandbox expires. Null when the status is `claimed` or `live`.
   * Represented as an RFC 3339 timestamp in UTC with millisecond precision,
   * for example `2022-09-18T13:22:18.123Z`.
   */
  expires_at?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Details about the onboarding link.
   * Null when the sandbox status is `live` or `expired`.
   */
  onboarding_link_details?: ClaimableSandbox.OnboardingLinkDetails;

  /**
   * Details about the live mode owner account of the sandbox.
   * This will be null until the sandbox is claimed.
   */
  owner_details?: ClaimableSandbox.OwnerDetails;

  /**
   * Values prefilled during the creation of the sandbox. When a user claims the sandbox, they will be able to update these values.
   */
  prefill: ClaimableSandbox.Prefill;

  /**
   * Data about the Stripe sandbox object.
   */
  sandbox_details: ClaimableSandbox.SandboxDetails;

  /**
   * Status of the sandbox.
   */
  status: ClaimableSandbox.Status;
}
export namespace ClaimableSandbox {
  export type Channel = 'public' | 'testing';

  export interface OnboardingLinkDetails {
    /**
     * Time at which the onboarding link expires. Represented as an RFC 3339 timestamp in UTC
     * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
     */
    expires_at: string;

    /**
     * The URL the user will be redirected to if the onboarding link is expired or invalid.
     * The URL specified should attempt to generate a new onboarding link,
     * and re-direct the user to this new onboarding link so that they can proceed with the onboarding flow.
     */
    refresh_url: string;

    /**
     * The URL offered to the user as a way back to your app after they claim the sandbox.
     */
    return_url?: string;

    /**
     * The URL that lets a user claim the sandbox or continue onboarding their Stripe account,
     * depending on the sandbox's status.
     */
    url: string;
  }

  export interface OwnerDetails {
    /**
     * The ID of the live mode Stripe account that owns the sandbox.
     * This field is only set when `owner_details.app_install_status` is `installed`.
     */
    account?: string;

    /**
     * Indicates whether the platform app is installed on the sandbox's live mode owner account.
     */
    app_install_status?: OwnerDetails.AppInstallStatus;
  }

  export interface Prefill {
    /**
     * Country in which the account holder resides, or in which the business is legally established.
     * Use two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
     */
    country: string;

    /**
     * Email address of the user who will claim the sandbox.
     * Stripe sends this address an invitation to claim the sandbox and a reminder before the unclaimed sandbox expires.
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
     * Keys that can be used to set up an integration for this sandbox and operate on the account.
     * Present in the create response. To fetch this field in the retrieve response,
     * pass `sandbox_details.api_keys` in the `include` parameter.
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
       * Object hash for the sandbox's MCP key.
       * Null unless `enable_mcp_access: true` was passed in the creation request.
       */
      mcp?: ApiKeys.Mcp;

      /**
       * Object hash for the sandbox's publishable key.
       */
      publishable: ApiKeys.Publishable;

      /**
       * Object hash for the sandbox's secret key.
       */
      secret: ApiKeys.Secret;
    }

    export namespace ApiKeys {
      export interface Mcp {
        /**
         * Time at which the API key was created. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        created: string;

        /**
         * Time at which the API key expires. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        expires_at?: string;

        /**
         * Unique identifier of the API key.
         */
        id: string;

        /**
         * Token for the secret key. Present only in the create response;
         * null in subsequent retrieve responses.
         */
        secret_key?: Mcp.SecretKey;

        /**
         * Current status of the API key.
         */
        status: Mcp.Status;

        /**
         * Type of the API key.
         */
        type: Mcp.Type;
      }

      export interface Publishable {
        /**
         * Time at which the API key was created. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        created: string;

        /**
         * Time at which the API key expires. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        expires_at?: string;

        /**
         * Unique identifier of the API key.
         */
        id: string;

        /**
         * Token for the publishable key. Present only in the create response;
         * null in subsequent retrieve responses.
         */
        publishable_key?: Publishable.PublishableKey;

        /**
         * Current status of the API key.
         */
        status: Publishable.Status;

        /**
         * Type of the API key.
         */
        type: Publishable.Type;
      }

      export interface Secret {
        /**
         * Time at which the API key was created. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        created: string;

        /**
         * Time at which the API key expires. Represented as an RFC 3339 timestamp in UTC
         * with millisecond precision, for example `2022-09-18T13:22:18.123Z`.
         */
        expires_at?: string;

        /**
         * Unique identifier of the API key.
         */
        id: string;

        /**
         * Token for the secret key. Present only in the create response;
         * null in subsequent retrieve responses.
         */
        secret_key?: Secret.SecretKey;

        /**
         * Current status of the API key.
         */
        status: Secret.Status;

        /**
         * Type of the API key.
         */
        type: Secret.Type;
      }

      export namespace Mcp {
        export interface SecretKey {
          /**
           * The plaintext token for the API key.
           */
          token?: string;
        }

        export type Status = 'active' | 'expired' | OtherString;

        export type Type = 'secret_key' | OtherString;
      }

      export namespace Publishable {
        export interface PublishableKey {
          /**
           * The plaintext token for the API key.
           */
          token?: string;
        }

        export type Status = 'active' | 'expired' | OtherString;

        export type Type = 'publishable_key' | OtherString;
      }

      export namespace Secret {
        export interface SecretKey {
          /**
           * The plaintext token for the API key.
           */
          token?: string;
        }

        export type Status = 'active' | 'expired' | OtherString;

        export type Type = 'secret_key' | OtherString;
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
       * The distribution channel used to pre-install your Stripe App on the claimable sandbox.
       * Use `testing` to install your app's external test version or `public` to install its published version.
       * This field defaults to `public` if omitted.
       */
      channel?: ClaimableSandboxCreateParams.Channel;
    }

    export namespace ClaimableSandboxCreateParams {
      export interface OnboardingLinkDetails {
        /**
         * The URL the user will be redirected to if the onboarding link is expired or invalid.
         * The URL specified should attempt to generate a new onboarding link,
         * and re-direct the user to this new onboarding link so that they can proceed with the onboarding flow.
         */
        refresh_url: string;

        /**
         * The URL offered to the user as a way back to your app after they claim the sandbox.
         */
        return_url?: string;
      }

      export interface Prefill {
        /**
         * Country in which the account holder resides, or in which the business is legally established.
         * Use two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
         */
        country: string;

        /**
         * Email address of the user who will claim the sandbox.
         * Stripe sends this address an invitation to claim the sandbox and a reminder before the unclaimed sandbox expires.
         */
        email: string;

        /**
         * Name for the sandbox.
         */
        name?: string;
      }

      export type Channel = 'public' | 'testing';
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxRetrieveParams {
      /**
       * Additional fields to include in the response.
       */
      include?: Array<'sandbox_details.api_keys'>;
    }
  }
}
export namespace V2 {
  export namespace Core {
    export interface ClaimableSandboxRenewOnboardingLinkParams {
      /**
       * Details about the onboarding link. If omitted, existing details are reused.
       * Omitted URL fields retain their existing values.
       */
      onboarding_link_details?: ClaimableSandboxRenewOnboardingLinkParams.OnboardingLinkDetails;
    }

    export namespace ClaimableSandboxRenewOnboardingLinkParams {
      export interface OnboardingLinkDetails {
        /**
         * The URL the user will be redirected to if the onboarding link is expired or invalid.
         * If omitted, the existing refresh URL is retained.
         * The URL should generate a new onboarding link and redirect the user to it.
         */
        refresh_url?: string;

        /**
         * The URL offered to the user as a way back to your app after they claim the sandbox.
         * If omitted, the existing return URL is retained. Set to null to clear it.
         */
        return_url?: string;
      }
    }
  }
}
