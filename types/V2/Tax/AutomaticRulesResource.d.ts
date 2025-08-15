// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Tax {
        interface AutomaticRuleCreateParams {
          /**
           * The BillableItem ID to set automatic Tax configuration for.
           */
          billable_item: string;

          /**
           * The TaxCode object to be used for automatic tax calculations.
           */
          tax_code: string;
        }
      }

      namespace Tax {
        interface AutomaticRuleRetrieveParams {}
      }

      namespace Tax {
        interface AutomaticRuleUpdateParams {
          /**
           * The TaxCode object to be used for automatic tax calculations.
           */
          tax_code: string;
        }
      }

      namespace Tax {
        interface AutomaticRuleDeactivateParams {}
      }

      namespace Tax {
        interface AutomaticRuleFindParams {
          /**
           * The BillableItem ID to search by.
           */
          billable_item: string;
        }
      }

      namespace Tax {
        class AutomaticRulesResource {
          /**
           * Creates an AutomaticRule object.
           */
          create(
            params: AutomaticRuleCreateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;

          /**
           * Retrieves an AutomaticRule object by ID.
           */
          retrieve(
            id: string,
            params?: AutomaticRuleRetrieveParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;
          retrieve(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;

          /**
           * Updates the automatic Tax configuration for an AutomaticRule object.
           */
          update(
            id: string,
            params: AutomaticRuleUpdateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;

          /**
           * Deactivates an AutomaticRule object. Deactivated AutomaticRule objects are ignored in future tax calculations.
           */
          deactivate(
            id: string,
            params?: AutomaticRuleDeactivateParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;
          deactivate(
            id: string,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;

          /**
           * Finds an AutomaticRule object by BillableItem ID.
           */
          find(
            params: AutomaticRuleFindParams,
            options?: RequestOptions
          ): Promise<Stripe.Response<Stripe.V2.Tax.AutomaticRule>>;
        }
      }
    }
  }
}
