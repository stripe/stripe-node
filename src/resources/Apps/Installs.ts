// File generated from our OpenAPI spec

import {OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
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

  authorized_content_security_policy: Install.AuthorizedContentSecurityPolicy;

  /**
   * The endpoint URLs authorized by the installer.
   */
  authorized_endpoints: Array<string>;

  /**
   * The permissions authorized by the installer.
   */
  authorized_permissions: Array<string>;

  /**
   * The distribution channel associated with the app install.
   */
  channel: string;

  /**
   * The content security policy entries authorized by the installer.
   */
  content_security_policy_granted: Install.ContentSecurityPolicyGranted | null;

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
  endpoints_granted: Array<string> | null;

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
  permissions_granted: Array<string> | null;

  /**
   * The permissions requested by the latest app version that the installer has not authorized.
   */
  permissions_pending: Array<string>;

  /**
   * The status of the app install.
   */
  state: string;

  /**
   * The status of the app install.
   */
  status: Install.Status | null;
}
export namespace Install {
  export interface AuthorizedContentSecurityPolicy {
    connect_src: Array<string> | null;

    image_src: Array<string> | null;

    purpose: string | null;
  }

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
