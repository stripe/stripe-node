// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace PricingPlans {
          interface ComponentCreateParams {
            /**
             * The type of the PricingPlanComponent.
             */
            type: ComponentCreateParams.Type;

            /**
             * Details if this component is a LicenseFee.
             */
            license_fee?: ComponentCreateParams.LicenseFee;

            /**
             * An identifier that can be used to find this component.
             */
            lookup_key?: string;

            /**
             * Set of key-value pairs that you can attach to an object.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * Details if this component is a RateCard.
             */
            rate_card?: ComponentCreateParams.RateCard;

            /**
             * Details if this component is a ServiceAction.
             */
            service_action?: ComponentCreateParams.ServiceAction;
          }

          namespace ComponentCreateParams {
            interface LicenseFee {
              /**
               * The ID of the LicenseFee.
               */
              id: string;

              /**
               * The version of the LicenseFee.
               */
              version: string;
            }

            interface RateCard {
              /**
               * The ID of the RateCard.
               */
              id: string;

              /**
               * The version of the RateCard.
               */
              version: string;
            }

            interface ServiceAction {
              /**
               * The ID of the ServiceAction.
               */
              id: string;

              /**
               * The version of the ServiceAction.
               */
              version: string;
            }

            type Type = 'license_fee' | 'rate_card' | 'service_action';
          }
        }
      }

      namespace Billing {
        namespace PricingPlans {
          interface ComponentRetrieveParams {}
        }
      }

      namespace Billing {
        namespace PricingPlans {
          interface ComponentUpdateParams {
            /**
             * An identifier that can be used to find this component. Maximum length of 200 characters.
             */
            lookup_key?: string;

            /**
             * Set of key-value pairs that you can attach to an object.
             */
            metadata?: Stripe.MetadataParam;
          }
        }
      }

      namespace Billing {
        namespace PricingPlans {
          interface ComponentListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;

            /**
             * Filter by lookup keys. Mutually exclusive with `pricing_plan_version`.
             * You can specify up to 10 lookup keys.
             */
            lookup_keys?: Array<string>;

            /**
             * The ID of the PricingPlanVersion to list components for. Will use the latest version if not provided.
             * Mutually exclusive with `lookup_keys`.
             */
            pricing_plan_version?: string;
          }
        }
      }

      namespace Billing {
        namespace PricingPlans {
          interface ComponentDeleteParams {}
        }
      }

      namespace Billing {
        namespace PricingPlans {
          class ComponentsResource {
            /**
             * Create a PricingPlanComponent object.
             */
            create(
              id: string,
              params: ComponentCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;

            /**
             * Retrieve a PricingPlanComponent object.
             */
            retrieve(
              pricingPlanId: string,
              id: string,
              params?: ComponentRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;
            retrieve(
              pricingPlanId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;

            /**
             * Update a PricingPlanComponent object.
             */
            update(
              pricingPlanId: string,
              id: string,
              params?: ComponentUpdateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;

            /**
             * List all PricingPlanComponent objects for a PricingPlan.
             */
            list(
              id: string,
              params?: ComponentListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.PricingPlanComponent>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.PricingPlanComponent>;

            /**
             * Remove a PricingPlanComponent from the latest version of a PricingPlan.
             */
            del(
              pricingPlanId: string,
              id: string,
              params?: ComponentDeleteParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;
            del(
              pricingPlanId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;
          }
        }
      }
    }
  }
}
