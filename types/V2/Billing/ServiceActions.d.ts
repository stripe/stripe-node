// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        /**
         * The ServiceAction object.
         */
        interface ServiceAction {
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
          credit_grant?: ServiceAction.CreditGrant;

          /**
           * Details for the credit grant per tenant. Provided only if `type` is "credit_grant_per_tenant".
           */
          credit_grant_per_tenant?: ServiceAction.CreditGrantPerTenant;

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
          service_interval: ServiceAction.ServiceInterval;

          /**
           * The length of the interval for assessing service.
           */
          service_interval_count: number;

          /**
           * The type of the service action.
           */
          type: ServiceAction.Type;
        }

        namespace ServiceAction {
          interface CreditGrant {
            /**
             * The amount of the credit grant.
             */
            amount: CreditGrant.Amount;

            /**
             * Defines the scope where the credit grant is applicable.
             */
            applicability_config: CreditGrant.ApplicabilityConfig;

            /**
             * The expiry configuration for the credit grant.
             */
            expiry_config: CreditGrant.ExpiryConfig;

            /**
             * A descriptive name shown in dashboard.
             */
            name: string;
          }

          namespace CreditGrant {
            interface Amount {
              /**
               * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
               */
              type: Amount.Type;

              /**
               * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
               */
              custom_pricing_unit?: Amount.CustomPricingUnit;

              /**
               * The monetary amount of the credit grant. Required if `type` is `monetary`.
               */
              monetary?: V2.Amount;
            }

            namespace Amount {
              interface CustomPricingUnit {
                /**
                 * The id of the custom pricing unit.
                 */
                id: string;

                /**
                 * The value of the credit grant, decimal value represented as a string.
                 */
                value: string;
              }

              type Type = 'custom_pricing_unit' | 'monetary';
            }

            interface ApplicabilityConfig {
              /**
               * The applicability scope of the credit grant.
               */
              scope: ApplicabilityConfig.Scope;
            }

            namespace ApplicabilityConfig {
              interface Scope {
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

            interface ExpiryConfig {
              /**
               * The type of the expiry configuration. We currently support `end_of_service_period`.
               */
              type: 'end_of_service_period';
            }
          }

          interface CreditGrantPerTenant {
            /**
             * The amount of the credit grant.
             */
            amount: CreditGrantPerTenant.Amount;

            /**
             * Defines the scope where the credit grant is applicable.
             */
            applicability_config: CreditGrantPerTenant.ApplicabilityConfig;

            /**
             * The expiry configuration for the credit grant.
             */
            expiry_config: CreditGrantPerTenant.ExpiryConfig;

            /**
             * Customer-facing name for the credit grant.
             */
            name: string;
          }

          namespace CreditGrantPerTenant {
            interface Amount {
              /**
               * The type of the credit grant amount. We currently support `monetary` and `custom_pricing_unit` billing credits.
               */
              type: Amount.Type;

              /**
               * The custom pricing unit amount of the credit grant. Required if `type` is `custom_pricing_unit`.
               */
              custom_pricing_unit?: Amount.CustomPricingUnit;

              /**
               * The monetary amount of the credit grant. Required if `type` is `monetary`.
               */
              monetary?: V2.Amount;
            }

            namespace Amount {
              interface CustomPricingUnit {
                /**
                 * The id of the custom pricing unit.
                 */
                id: string;

                /**
                 * The value of the credit grant, decimal value represented as a string.
                 */
                value: string;
              }

              type Type = 'custom_pricing_unit' | 'monetary';
            }

            interface ApplicabilityConfig {
              /**
               * The applicability scope of the credit grant.
               */
              scope: ApplicabilityConfig.Scope;
            }

            namespace ApplicabilityConfig {
              interface Scope {
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

            interface ExpiryConfig {
              /**
               * The type of the expiry configuration. We currently support `end_of_service_period`.
               */
              type: 'end_of_service_period';
            }
          }

          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type Type = 'credit_grant' | 'credit_grant_per_tenant';
        }
      }
    }
  }
}
