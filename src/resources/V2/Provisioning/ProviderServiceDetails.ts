// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface ProviderServiceDetail {
  /**
   * Unique identifier for the provider service.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.provisioning.provider_service_detail';

  /**
   * Updates allowed for resources using this service.
   */
  allowed_updates: Array<ProviderServiceDetail.AllowedUpdate>;

  /**
   * Availability of the service.
   */
  availability: ProviderServiceDetail.Availability;

  /**
   * Categories the service belongs to.
   */
  categories: Array<string>;

  /**
   * Schema describing the configuration accepted by this service.
   */
  configuration_schema: ProviderServiceDetail.ConfigurationSchema;

  /**
   * Constraints on resources using this service.
   */
  constraints: Array<ProviderServiceDetail.Constraint>;

  /**
   * Time at which the service was created.
   */
  created: string;

  /**
   * Description of the service.
   */
  description: string;

  /**
   * Denormalized from the parent Provider. If a Provider's partition changes, re-sync its services.
   * proto3 scalar defaults apply: if unset, this value is `false`.
   */
  development: boolean;

  /**
   * Group the service belongs to, used to organize related services.
   */
  group?: string;

  /**
   * Kind of the service.
   */
  kind: ProviderServiceDetail.Kind;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * URL of additional context about the service intended for LLM consumption.
   */
  llm_context?: string;

  /**
   * Pricing details for the service.
   */
  pricing: ProviderServiceDetail.Pricing;

  /**
   * Identifier of the provider that offers this service.
   */
  provider: string;

  /**
   * Human-readable name of the provider that offers this service.
   */
  provider_name: string;

  /**
   * Scope of the service.
   */
  scope: ProviderServiceDetail.Scope;

  /**
   * Identifier of the service, unique within its provider.
   */
  service_id: string;

  /**
   * Deprecated: use allowed_updates instead.
   */
  updateable_to: Array<string>;
}
export namespace ProviderServiceDetail {
  export interface AllowedUpdate {
    direction: AllowedUpdate.Direction;

    service: string;
  }

  export type Availability = 'available' | 'not_in_country' | 'unavailable';

  export type ConfigurationSchema = {
    [key: string]: unknown;
  };

  export interface Constraint {
    count?: Constraint.Count;

    mutual_exclusion_allowed_updates?: boolean;

    type: Constraint.Type;
  }

  export type Kind = 'deployable' | 'plan';

  export interface Pricing {
    component: Pricing.Component;

    /**
     * Legacy compatibility field for top-level paid pricing.
     * Mirrors the single paid pricing entry when only one exists, or the entry marked
     * `is_default`. If multiple paid pricing entries exist and none is default, this field
     * is unset.
     */
    paid: Pricing.Paid;

    /**
     * Canonical top-level paid pricing entries for this service.
     * When multiple entries are present, callers should read this field instead of `paid`.
     */
    paid_pricing: Array<Pricing.PaidPricing>;

    type: Pricing.Type;
  }

  export type Scope = 'account' | 'project';

  export namespace AllowedUpdate {
    export type Direction = 'any' | 'down' | 'up';
  }

  export namespace Constraint {
    export interface Count {
      at_most: number;
    }

    export type Type = 'count' | 'mutual_exclusion_allowed_updates';
  }

  export namespace Pricing {
    export interface Component {
      options: Array<Component.Option>;
    }

    export interface Paid {
      description?: string;

      freeform?: string;

      type: Paid.Type;
    }

    export interface PaidPricing {
      configuration: PaidPricing.Configuration;

      description?: string;

      freeform?: string;

      is_default?: boolean;

      type: PaidPricing.Type;
    }

    export type Type = 'component' | 'free' | 'paid';

    export namespace Component {
      export interface Option {
        is_default?: boolean;

        paid: Option.Paid;

        parent_services: Array<string>;

        type: Option.Type;
      }

      export namespace Option {
        export interface Paid {
          description?: string;

          freeform?: string;

          type: Paid.Type;
        }

        export type Type = 'free' | 'paid';

        export namespace Paid {
          export type Type = 'free' | 'freeform';
        }
      }
    }

    export namespace Paid {
      export type Type = 'free' | 'freeform';
    }

    export namespace PaidPricing {
      export type Configuration = {
        [key: string]: unknown;
      };

      export type Type = 'free' | 'freeform';
    }
  }
}
