// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        interface ServiceActionCreateParams {
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

        namespace ServiceActionCreateParams {
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
             * The grant condition for the credit grant.
             */
            grant_condition: CreditGrantPerTenant.GrantCondition;

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

            interface GrantCondition {
              /**
               * The type of the grant condition. We currently support `meter_event_first_per_period`.
               */
              type: 'meter_event_first_per_period';

              /**
               * The grant condition for the meter event first per period.
               */
              meter_event_first_per_period?: GrantCondition.MeterEventFirstPerPeriod;
            }

            namespace GrantCondition {
              interface MeterEventFirstPerPeriod {
                /**
                 * The meter segment conditions for the grant condition.
                 */
                meter_segment_conditions: Array<
                  MeterEventFirstPerPeriod.MeterSegmentCondition
                >;
              }

              namespace MeterEventFirstPerPeriod {
                interface MeterSegmentCondition {
                  /**
                   * The type of the meter segment condition. We currently support `dimension`.
                   */
                  type: 'dimension';

                  /**
                   * Dimension-based meter segment condition.
                   */
                  dimension?: MeterSegmentCondition.Dimension;
                }

                namespace MeterSegmentCondition {
                  interface Dimension {
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

          type ServiceInterval = 'day' | 'month' | 'week' | 'year';

          type Type = 'credit_grant' | 'credit_grant_per_tenant';
        }
      }

      namespace Billing {
        interface ServiceActionRetrieveParams {}
      }

      namespace Billing {
        class ServiceActionsResource {
          /**
           * Create a Service Action object.
           */
          create(
            params: ServiceActionCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.ServiceAction>>;

          /**
           * Retrieve a Service Action object.
           */
          retrieve(
            id: string,
            params?: ServiceActionRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.ServiceAction>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Billing.ServiceAction>>;
        }
      }
    }
  }
}
