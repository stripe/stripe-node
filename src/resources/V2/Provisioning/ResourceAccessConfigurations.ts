// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface ResourceAccessConfiguration {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.resource_access_configuration';

  /**
   * Provider-defined configuration names mapped to their secret string values.
   */
  configuration: {
    [key: string]: string;
  };

  /**
   * Time at which this credential generation became current.
   */
  created: string;

  /**
   * Time at which these credentials cease to be valid, when supplied by the Provider.
   */
  expires_at?: string;

  /**
   * Whether the referenced Resource uses Stripe live-mode objects.
   */
  livemode: boolean;

  /**
   * Provisioning Resource to which this access configuration belongs.
   */
  resource: string;
}
