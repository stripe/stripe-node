// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {CustomPricingUnit} from './CustomPricingUnits.js';
import {V2Amount} from './../V2Amounts.js';
import {Decimal} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class ServiceActionResource extends StripeResource {
  /**
   * Create a Service Action object.
   */
  create(
    params: V2.Billing.ServiceActionCreateParams,
    options?: RequestOptions
  ): Promise<Response<ServiceAction>> {
    return this._makeRequest(
      'POST',
      '/v2/billing/service_actions',
      params,
      options,
      {
        requestSchema: {
          kind: 'object',
          fields: {
            credit_grant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
            credit_grant_per_tenant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
        responseSchema: {
          kind: 'object',
          fields: {
            credit_grant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
            credit_grant_per_tenant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Retrieve a Service Action object.
   */
  retrieve(
    id: string,
    params?: V2.Billing.ServiceActionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<ServiceAction>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/service_actions/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            credit_grant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
            credit_grant_per_tenant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
  /**
   * Update a ServiceAction object.
   */
  update(
    id: string,
    params?: V2.Billing.ServiceActionUpdateParams,
    options?: RequestOptions
  ): Promise<Response<ServiceAction>> {
    return this._makeRequest(
      'POST',
      `/v2/billing/service_actions/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            credit_grant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
            credit_grant_per_tenant: {
              kind: 'object',
              fields: {
                amount: {
                  kind: 'object',
                  fields: {
                    custom_pricing_unit: {
                      kind: 'object',
                      fields: {value: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      }
    ) as any;
  }
}
export interface ServiceAction {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.service_action';

  /**
   * Timestamp of when the object was created.
   */
  created: string;

  /**
   * Details for the credit grant. Provided only if `type` is "credit_grant".
   */
  credit_grant?: V2.Billing.ServiceAction.CreditGrant;

  /**
   * Details for the credit grant per tenant. Provided only if `type` is "credit_grant_per_tenant".
   */
  credit_grant_per_tenant?: V2.Billing.ServiceAction.CreditGrantPerTenant;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * An internal key you can use to search for this service action.
   */
  lookup_key?: string;

  /**
   * The interval for assessing service.
   */
  service_interval: V2.Billing.ServiceAction.ServiceInterval;

  /**
   * The length of the interval for assessing service.
   */
  service_interval_count: number;

  /**
   * The type of the service action.
   */
  type: V2.Billing.ServiceAction.Type;
}
export namespace V2 {
  export namespace Billing {
    export namespace ServiceAction {
      export interface CreditGrant {
        /**
         * The amount of the credit grant.
         */
        amount: CreditGrant.Amount;

        /**
         * Defines the scope where the credit grant is applicable.
         */
        applicability_config: CreditGrant.ApplicabilityConfig;

        /**
         * The category of the credit grant.
         */
        category?: CreditGrant.Category;

        /**
         * The expiry configuration for the credit grant.
         */
        expiry_config: CreditGrant.ExpiryConfig;

        /**
         * A descriptive name shown in dashboard.
         */
        name: string;

        /**
         * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
         */
        priority?: number;
      }

      export interface CreditGrantPerTenant {
        /**
         * The amount of the credit grant.
         */
        amount: CreditGrantPerTenant.Amount;

        /**
         * Defines the scope where the credit grant is applicable.
         */
        applicability_config: CreditGrantPerTenant.ApplicabilityConfig;

        /**
         * The category of the credit grant.
         */
        category?: CreditGrantPerTenant.Category;

        /**
         * The expiry configuration for the credit grant.
         */
        expiry_config: CreditGrantPerTenant.ExpiryConfig;

        /**
         * Customer-facing name for the credit grant.
         */
        name: string;

        /**
         * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
         */
        priority?: number;
      }

      export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

      export type Type = 'credit_grant' | 'credit_grant_per_tenant';

      export namespace CreditGrant {
        export interface Amount {
          /**
           * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
           */
          custom_pricing_unit?: Amount.CustomPricingUnit;

          /**
           * The monetary amount of the credit grant. Required if `type` is `monetary`.
           */
          monetary?: V2Amount;

          /**
           * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
           */
          type: Amount.Type;
        }

        export interface ApplicabilityConfig {
          /**
           * The applicability scope of the credit grant.
           */
          scope: ApplicabilityConfig.Scope;
        }

        export type Category = 'paid' | 'promotional';

        export interface ExpiryConfig {
          /**
           * The type of the expiry configuration. We currently support `end_of_service_period`.
           */
          type: 'end_of_service_period';
        }

        export namespace Amount {
          export interface CustomPricingUnit {
            /**
             * The Custom Pricing Unit object.
             */
            custom_pricing_unit_details?: CustomPricingUnit;

            /**
             * The id of the custom pricing unit.
             */
            id: string;

            /**
             * The value of the credit grant, decimal value represented as a string.
             */
            value: Decimal;
          }

          export type Type = 'custom_pricing_unit' | 'monetary';
        }

        export namespace ApplicabilityConfig {
          export interface Scope {
            /**
             * The billable items to apply the credit grant to.
             */
            billable_items?: Array<string>;

            /**
             * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
             */
            price_type?: 'metered';
          }
        }
      }

      export namespace CreditGrantPerTenant {
        export interface Amount {
          /**
           * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
           */
          custom_pricing_unit?: Amount.CustomPricingUnit;

          /**
           * The monetary amount of the credit grant. Required if `type` is `monetary`.
           */
          monetary?: V2Amount;

          /**
           * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
           */
          type: Amount.Type;
        }

        export interface ApplicabilityConfig {
          /**
           * The applicability scope of the credit grant.
           */
          scope: ApplicabilityConfig.Scope;
        }

        export type Category = 'paid' | 'promotional';

        export interface ExpiryConfig {
          /**
           * The type of the expiry configuration. We currently support `end_of_service_period`.
           */
          type: 'end_of_service_period';
        }

        export namespace Amount {
          export interface CustomPricingUnit {
            /**
             * The Custom Pricing Unit object.
             */
            custom_pricing_unit_details?: CustomPricingUnit;

            /**
             * The id of the custom pricing unit.
             */
            id: string;

            /**
             * The value of the credit grant, decimal value represented as a string.
             */
            value: Decimal;
          }

          export type Type = 'custom_pricing_unit' | 'monetary';
        }

        export namespace ApplicabilityConfig {
          export interface Scope {
            /**
             * The billable items to apply the credit grant to.
             */
            billable_items?: Array<string>;

            /**
             * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
             */
            price_type?: 'metered';
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ServiceActionCreateParams {
      /**
       * The interval for assessing service.
       */
      service_interval: ServiceActionCreateParams.ServiceInterval;

      /**
       * The length of the interval for assessing service.
       */
      service_interval_count: number;

      /**
       * The type of the service action.
       */
      type: ServiceActionCreateParams.Type;

      /**
       * Details for the credit grant. Required if `type` is `credit_grant`.
       */
      credit_grant?: ServiceActionCreateParams.CreditGrant;

      /**
       * Details for the credit grant per tenant. Required if `type` is `credit_grant_per_tenant`.
       */
      credit_grant_per_tenant?: ServiceActionCreateParams.CreditGrantPerTenant;

      /**
       * An internal key you can use to search for this service action. Maximum length of 200 characters.
       */
      lookup_key?: string;
    }

    export namespace ServiceActionCreateParams {
      export type ServiceInterval = 'day' | 'month' | 'week' | 'year';

      export type Type = 'credit_grant' | 'credit_grant_per_tenant';

      export interface CreditGrant {
        /**
         * The amount of the credit grant.
         */
        amount: CreditGrant.Amount;

        /**
         * Defines the scope where the credit grant is applicable.
         */
        applicability_config: CreditGrant.ApplicabilityConfig;

        /**
         * The category of the credit grant.
         */
        category?: CreditGrant.Category;

        /**
         * The expiry configuration for the credit grant.
         */
        expiry_config: CreditGrant.ExpiryConfig;

        /**
         * A descriptive name shown in dashboard.
         */
        name: string;

        /**
         * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
         */
        priority?: number;
      }

      export interface CreditGrantPerTenant {
        /**
         * The amount of the credit grant.
         */
        amount: CreditGrantPerTenant.Amount;

        /**
         * Defines the scope where the credit grant is applicable.
         */
        applicability_config: CreditGrantPerTenant.ApplicabilityConfig;

        /**
         * The category of the credit grant.
         */
        category?: CreditGrantPerTenant.Category;

        /**
         * The expiry configuration for the credit grant.
         */
        expiry_config: CreditGrantPerTenant.ExpiryConfig;

        /**
         * The grant condition for the credit grant.
         */
        grant_condition: CreditGrantPerTenant.GrantCondition;

        /**
         * Customer-facing name for the credit grant.
         */
        name: string;

        /**
         * The desired priority for applying this credit grant. If not specified, it will be set to the default value of 50. The highest priority is 0 and the lowest is 100.
         */
        priority?: number;
      }

      export namespace CreditGrant {
        export interface Amount {
          /**
           * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
           */
          custom_pricing_unit?: Amount.CustomPricingUnit;

          /**
           * The monetary amount of the credit grant. Required if `type` is `monetary`.
           */
          monetary?: V2Amount;

          /**
           * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
           */
          type: Amount.Type;
        }

        export interface ApplicabilityConfig {
          /**
           * The applicability scope of the credit grant.
           */
          scope: ApplicabilityConfig.Scope;
        }

        export type Category = 'paid' | 'promotional';

        export interface ExpiryConfig {
          /**
           * The type of the expiry configuration. We currently support `end_of_service_period`.
           */
          type: 'end_of_service_period';
        }

        export namespace Amount {
          export interface CustomPricingUnit {
            /**
             * The id of the custom pricing unit.
             */
            id: string;

            /**
             * The value of the credit grant, decimal value represented as a string.
             */
            value: Decimal;
          }

          export type Type = 'custom_pricing_unit' | 'monetary';
        }

        export namespace ApplicabilityConfig {
          export interface Scope {
            /**
             * The billable items to apply the credit grant to.
             */
            billable_items?: Array<string>;

            /**
             * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
             */
            price_type?: 'metered';
          }
        }
      }

      export namespace CreditGrantPerTenant {
        export interface Amount {
          /**
           * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
           */
          custom_pricing_unit?: Amount.CustomPricingUnit;

          /**
           * The monetary amount of the credit grant. Required if `type` is `monetary`.
           */
          monetary?: V2Amount;

          /**
           * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
           */
          type: Amount.Type;
        }

        export interface ApplicabilityConfig {
          /**
           * The applicability scope of the credit grant.
           */
          scope: ApplicabilityConfig.Scope;
        }

        export type Category = 'paid' | 'promotional';

        export interface ExpiryConfig {
          /**
           * The type of the expiry configuration. We currently support `end_of_service_period`.
           */
          type: 'end_of_service_period';
        }

        export interface GrantCondition {
          /**
           * The grant condition for the meter event first per period.
           */
          meter_event_first_per_period?: GrantCondition.MeterEventFirstPerPeriod;

          /**
           * The type of the grant condition. We currently support `meter_event_first_per_period`.
           */
          type: 'meter_event_first_per_period';
        }

        export namespace Amount {
          export interface CustomPricingUnit {
            /**
             * The id of the custom pricing unit.
             */
            id: string;

            /**
             * The value of the credit grant, decimal value represented as a string.
             */
            value: Decimal;
          }

          export type Type = 'custom_pricing_unit' | 'monetary';
        }

        export namespace ApplicabilityConfig {
          export interface Scope {
            /**
             * The billable items to apply the credit grant to.
             */
            billable_items?: Array<string>;

            /**
             * The price type that credit grants can apply to. We currently only support the `metered` price type. This will apply to metered prices and rate cards. Cannot be used in combination with `billable_items`.
             */
            price_type?: 'metered';
          }
        }

        export namespace GrantCondition {
          export interface MeterEventFirstPerPeriod {
            /**
             * The meter segment conditions for the grant condition.
             */
            meter_segment_conditions: Array<
              MeterEventFirstPerPeriod.MeterSegmentCondition
            >;
          }

          export namespace MeterEventFirstPerPeriod {
            export interface MeterSegmentCondition {
              /**
               * Dimension-based meter segment condition.
               */
              dimension?: MeterSegmentCondition.Dimension;

              /**
               * The type of the meter segment condition. We currently support `dimension`.
               */
              type: 'dimension';
            }

            export namespace MeterSegmentCondition {
              export interface Dimension {
                /**
                 * The payload key for the dimension.
                 */
                payload_key: string;

                /**
                 * The value for the dimension.
                 */
                value: string;
              }
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ServiceActionRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Billing {
    export interface ServiceActionUpdateParams {
      /**
       * Details for the credit grant. Can only be set if the service action's `type` is `credit_grant`.
       */
      credit_grant?: ServiceActionUpdateParams.CreditGrant;

      /**
       * Details for the credit grant per tenant. Can only be set if the service action's `type` is `credit_grant_per_tenant`.
       */
      credit_grant_per_tenant?: ServiceActionUpdateParams.CreditGrantPerTenant;

      /**
       * An internal key you can use to search for this service action. Maximum length of 200 characters.
       */
      lookup_key?: string;
    }

    export namespace ServiceActionUpdateParams {
      export interface CreditGrant {
        /**
         * A descriptive name shown in dashboard.
         */
        name?: string;
      }

      export interface CreditGrantPerTenant {
        /**
         * A descriptive name shown in dashboard.
         */
        name?: string;
      }
    }
  }
}
