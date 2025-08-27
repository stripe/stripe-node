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
             * Details if this component is a License Fee.
             */
            license_fee?: ComponentCreateParams.LicenseFee;

            /**
             * An identifier that can be used to find this component.
             */
            lookup_key?: string;

            /**
             * Set of [key-value pairs](https://docs.stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
             */
            metadata?: Stripe.MetadataParam;

            /**
             * Details if this component is a Rate Card.
             */
            rate_card?: ComponentCreateParams.RateCard;

            /**
             * Details if this component is a Service Action.
             */
            service_action?: ComponentCreateParams.ServiceAction;
          }

          namespace ComponentCreateParams {
            interface LicenseFee {
              /**
               * The ID of the License Fee.
               */
              id: string;

              /**
               * The version of the LicenseFee. Defaults to 'latest', if not specified.
               */
              version?: string;
            }

            interface RateCard {
              /**
               * The ID of the Rate Card.
               */
              id: string;

              /**
               * The version of the RateCard. Defaults to 'latest', if not specified.
               */
              version?: string;
            }

            interface ServiceAction {
              /**
               * The ID of the service action.
               */
              id: string;
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
             * The ID of the Pricing Plan Version to list components for. Will use the latest version if not provided.
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
             * Create a Pricing Plan Component object.
             */
            create(
              id: string,
              params: ComponentCreateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;

            /**
             * Retrieve a Pricing Plan Component object.
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
             * Update a Pricing Plan Component object.
             */
            update(
              pricingPlanId: string,
              id: string,
              params?: ComponentUpdateParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.PricingPlanComponent>>;

            /**
             * List all Pricing Plan Component objects for a Pricing Plan.
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
             * Remove a Pricing Plan Component from the latest version of a Pricing Plan.
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
