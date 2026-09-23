// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface Provider {
  /**
   * Unique identifier for the provider.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.provider';

  /**
   * Capabilities supported by the provider.
   */
  capabilities: Array<string>;

  /**
   * Categories the provider belongs to.
   */
  categories: Array<string>;

  /**
   * Schema describing the configuration accepted by this provider.
   */
  configuration_schema: Provider.ConfigurationSchema;

  /**
   * Time at which the provider was created.
   */
  created: string;

  /**
   * Deep-link purposes supported by the provider.
   */
  deep_link_purposes: Array<string>;

  /**
   * Description of the provider.
   */
  description: string;

  /**
   * proto3 scalar defaults apply: if unset, this value is `false`.
   */
  development: boolean;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * URL of additional context about the provider intended for LLM consumption.
   */
  llm_context?: string;

  /**
   * Human-readable name of the provider.
   */
  name: string;

  /**
   * URL of the provider's privacy policy.
   */
  privacy_policy_url?: string;

  /**
   * URL of the provider's terms of service.
   */
  tos_url?: string;

  /**
   * URL of the provider's website.
   */
  website_url?: string;
}
export namespace Provider {
  export type ConfigurationSchema = {
    [key: string]: unknown;
  };
}
