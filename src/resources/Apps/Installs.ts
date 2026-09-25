// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {OtherString, PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class InstallResource extends StripeResource {
  /**
   * Returns a list of app installs. An app developer or embedding platform filtering by its own app sees the installs across the accounts that installed it; other callers see the installs on their own account. The key selects the environment: a live key lists live installs, a sandbox API key lists the installs on that sandbox, and the key of an app's managed sandbox filtering by app lists that app's installs across every sandbox. For existing accounts that still use legacy test mode, a test mode key lists legacy test mode installs.
   */
  list(
    params?: Apps.InstallListParams,
    options?: RequestOptions
  ): ApiListPromise<Install> {
    return this._makeRequest('GET', '/v1/apps/installs', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Creates an app install. An account installs its own private app with its own key; public and testing installs are made from the Dashboard. An app developer or embedding platform acting on a connected account through Stripe-Account installs or reinstalls its app there. Creating an install for a private app that is already installed at the channel's current version with nothing pending returns the existing install.
   */
  create(
    params: Apps.InstallCreateParams,
    options?: RequestOptions
  ): Promise<Response<Install>> {
    return this._makeRequest(
      'POST',
      '/v1/apps/installs',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves an app install. The installing account, the app's developer (with the keys of the account that owns the app or of the app's managed sandbox), and the embedding platform that created the install can retrieve it.
   */
  retrieve(
    id: string,
    params?: Apps.InstallRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Install>> {
    return this._makeRequest(
      'GET',
      `/v1/apps/installs/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Reauthorizes an app install. The installer grants the permissions, content security policy entries, and endpoints that the latest published version of the app requests. An account reauthorizes its own installs on any channel with its own key; app developers and embedding platforms reauthorize installs on connected accounts through Stripe-Account. For private apps, install a new version from the Dashboard to grant its permissions.
   */
  update(
    id: string,
    params?: Apps.InstallUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Install>> {
    return this._makeRequest(
      'POST',
      `/v1/apps/installs/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Uninstalls an app from the account that installed it.
   */
  uninstall(
    id: string,
    params?: Apps.InstallUninstallParams,
    options?: RequestOptions
  ): Promise<Response<Install>> {
    return this._makeRequest(
      'POST',
      `/v1/apps/installs/${encodeURIComponent(id)}/uninstall`,
      params,
      options
    ) as any;
  }
}
export interface Install {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'apps.install';

  /**
   * The ID of the account that the app install belongs to.
   */
  account: string;

  /**
   * The ID of the app installed.
   */
  app: string;

  /**
   * Whether the installer must authorize pending permissions, content security policy entries, or endpoints. For private apps, `approval_required` stays `false`. Install a new version from the Dashboard to grant its permissions.
   */
  approval_required: boolean;

  /**
   * The authorization code for an oauth app install.
   */
  auth_code: string | null;

  /**
   * The distribution channel associated with the app install.
   */
  channel: Install.Channel;

  content_security_policy_granted: Install.ContentSecurityPolicyGranted;

  content_security_policy_pending: Install.ContentSecurityPolicyPending;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The ID of the embedding platform that created the install, if applicable.
   */
  created_by: string | null;

  /**
   * The endpoint URLs authorized by the installer.
   */
  endpoints_granted: Array<string>;

  /**
   * The endpoint URLs requested by the latest app version that the installer has not authorized.
   */
  endpoints_pending: Array<string>;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The permissions authorized by the installer.
   */
  permissions_granted: Array<string>;

  /**
   * The permissions requested by the latest app version that the installer has not authorized.
   */
  permissions_pending: Array<string>;

  /**
   * The status of the app install.
   */
  status: Install.Status;
}
export namespace Install {
  export type Channel =
    | 'private_live'
    | 'private_test'
    | 'public'
    | 'review'
    | 'testing'
    | OtherString;

  export interface ContentSecurityPolicyGranted {
    /**
     * The URLs that the app can make network requests to.
     */
    connect_src: Array<string>;

    /**
     * The URLs that the app can load images from.
     */
    image_src: Array<string>;
  }

  export interface ContentSecurityPolicyPending {
    /**
     * The URLs that the app can make network requests to.
     */
    connect_src: Array<string>;

    /**
     * The URLs that the app can load images from.
     */
    image_src: Array<string>;
  }

  export type Status =
    | 'install_failed'
    | 'installed'
    | 'installing'
    | 'uninstall_failed'
    | 'uninstalling'
    | OtherString;
}
export namespace Apps {
  export interface InstallCreateParams {
    /**
     * The ID of the app to install.
     */
    app: string;

    /**
     * The distribution channel to install from. Defaults to `public`. A private app must be installed on `private_test` or `private_live`, matching the mode of the API key.
     */
    channel?: InstallCreateParams.Channel;

    /**
     * For OAuth apps, the PKCE code challenge used to issue the `auth_code` returned on the install. Must be 43 to 128 characters and contain only letters, numbers, `-`, `.`, `_`, and `~`. Only applies to installs made by the app developer or an embedding platform; ignored when an account installs its own private app.
     */
    code_challenge?: string;

    /**
     * The method used to derive `code_challenge`. Required when `code_challenge` is provided, and must be `S256`.
     */
    code_challenge_method?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace InstallCreateParams {
    export type Channel =
      | 'private_live'
      | 'private_test'
      | 'public'
      | 'testing'
      | OtherString;
  }
}
export namespace Apps {
  export interface InstallRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Apps {
  export interface InstallUpdateParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Apps {
  export interface InstallListParams extends PaginationParams {
    /**
     * Only return installs made by this account. Only useful to app developers and embedding platforms, whose lists span the accounts that installed their app.
     */
    account?: string;

    /**
     * Only return installs for the app specified by this app ID.
     */
    app?: string;

    /**
     * Only return installs whose installer must authorize pending permissions, content security policy entries, or endpoints.
     */
    approval_required?: boolean;

    /**
     * Only return installs in the distribution channel specified by this channel name.
     */
    channel?: InstallListParams.Channel;

    /**
     * Only return app installs that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Only return installs created by the embedding platform specified by this account ID.
     */
    created_by?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return installs with the given status.
     */
    status?: InstallListParams.Status;
  }

  export namespace InstallListParams {
    export type Channel =
      | 'private_live'
      | 'private_test'
      | 'public'
      | 'testing'
      | OtherString;

    export type Status =
      | 'install_failed'
      | 'installed'
      | 'installing'
      | 'uninstall_failed'
      | 'uninstalling'
      | OtherString;
  }
}
export namespace Apps {
  export interface InstallUninstallParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
