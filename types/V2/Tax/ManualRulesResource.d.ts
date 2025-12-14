// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Tax {
        interface ManualRuleCreateParams {
          /**
           * Tax rates to be applied.
           */
          scheduled_tax_rates: Array<ManualRuleCreateParams.ScheduledTaxRate>;

          /**
           * Location where the rule applies.
           */
          location?: ManualRuleCreateParams.Location;

          /**
           * Products associated with the rule.
           */
          products?: Array<ManualRuleCreateParams.Product>;
        }

        namespace ManualRuleCreateParams {
          interface Location {
            /**
             * Country ISO-3166.
             */
            country: string;

            /**
             * State ISO-3166.
             */
            state?: string;
          }

          interface Product {
            /**
             * The type of the product.
             */
            type: Product.Type;

            /**
             * The licensed item identifier.
             */
            licensed_item?: string;

            /**
             * The metered item identifier.
             */
            metered_item?: string;

            /**
             * The tax code for the product.
             */
            tax_code?: string;
          }

          namespace Product {
            type Type = 'licensed_item' | 'metered_item' | 'tax_code';
          }

          interface ScheduledTaxRate {
            /**
             * The tax rates to be applied.
             */
            rates: Array<ScheduledTaxRate.Rate>;

            /**
             * The start time for the tax rate.
             */
            starts_at?: string;
          }

          namespace ScheduledTaxRate {
            interface Rate {
              /**
               * Country of the tax rate.
               */
              country?: string;

              /**
               * Description of the tax rate.
               */
              description?: string;

              /**
               * Display name of the tax rate as it will be shown on the invoice.
               */
              display_name: string;

              /**
               * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
               */
              jurisdiction?: string;

              /**
               * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
               */
              percentage: string;

              /**
               * State of the tax rate.
               */
              state?: string;
            }
          }
        }
      }

      namespace Tax {
        interface ManualRuleRetrieveParams {}
      }

      namespace Tax {
        interface ManualRuleUpdateParams {
          /**
           * Tax rates to be applied.
           */
          scheduled_tax_rates: Array<ManualRuleUpdateParams.ScheduledTaxRate>;

          /**
           * Location where the rule applies.
           */
          location?: ManualRuleUpdateParams.Location;

          /**
           * Products associated with the rule.
           */
          products?: Array<ManualRuleUpdateParams.Product>;
        }

        namespace ManualRuleUpdateParams {
          interface Location {
            /**
             * Country ISO-3166.
             */
            country: string;

            /**
             * State ISO-3166.
             */
            state?: string;
          }

          interface Product {
            /**
             * The type of the product.
             */
            type: Product.Type;

            /**
             * The licensed item identifier.
             */
            licensed_item?: string;

            /**
             * The metered item identifier.
             */
            metered_item?: string;

            /**
             * The tax code for the product.
             */
            tax_code?: string;
          }

          namespace Product {
            type Type = 'licensed_item' | 'metered_item' | 'tax_code';
          }

          interface ScheduledTaxRate {
            /**
             * The tax rates to be applied.
             */
            rates: Array<ScheduledTaxRate.Rate>;

            /**
             * The start time for the tax rate.
             */
            starts_at?: string;
          }

          namespace ScheduledTaxRate {
            interface Rate {
              /**
               * Country of the tax rate.
               */
              country?: string;

              /**
               * Description of the tax rate.
               */
              description?: string;

              /**
               * Display name of the tax rate as it will be shown on the invoice.
               */
              display_name: string;

              /**
               * Jurisdiction of the tax rate should apply as it will be shown on the invoice.
               */
              jurisdiction?: string;

              /**
               * Percentage of the tax rate. Must be positive and maximum of 4 decimal points.
               */
              percentage: string;

              /**
               * State of the tax rate.
               */
              state?: string;
            }
          }
        }
      }

      namespace Tax {
        interface ManualRuleListParams {
          /**
           * Optionally set the maximum number of results per page. Defaults to 20.
           */
          limit?: number;
        }
      }

      namespace Tax {
        interface ManualRuleDeactivateParams {}
      }

      namespace Tax {
        class ManualRulesResource {
          /**
           * Creates a ManualRule object.
           */
          create(
            params: ManualRuleCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;

          /**
           * Retrieves a ManualRule object by ID.
           */
          retrieve(
            id: string,
            params?: ManualRuleRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;

          /**
           * Updates the Tax configuration for a ManualRule object.
           */
          update(
            id: string,
            params: ManualRuleUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;

          /**
           * List all ManualRule objects.
           */
          list(
            params?: ManualRuleListParams,
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Tax.ManualRule>;
          list(
            options?: RequestOptions
          ): ApiListPromise<Stripe.V2.Tax.ManualRule>;

          /**
           * Deactivates a ManualRule object.
           */
          deactivate(
            id: string,
            params?: ManualRuleDeactivateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;
          deactivate(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.ManualRule>>;
        }
      }
    }
  }
}
