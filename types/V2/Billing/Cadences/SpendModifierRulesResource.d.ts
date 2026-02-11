// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace Cadences {
          interface SpendModifierRuleRetrieveParams {}
        }
      }

      namespace Billing {
        namespace Cadences {
          interface SpendModifierRuleListParams {
            /**
             * Return only spend modifiers that are effective at the specified timestamp.
             */
            effective_at?: string;

            /**
             * Optionally set the maximum number of results per page. Defaults to 20.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace Cadences {
          class SpendModifierRulesResource {
            /**
             * Retrieve a Spend Modifier associated with a Billing Cadence.
             */
            retrieve(
              cadenceId: string,
              id: string,
              params?: SpendModifierRuleRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.CadenceSpendModifier>>;
            retrieve(
              cadenceId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.CadenceSpendModifier>>;

            /**
             * List all Spend Modifiers associated with a Billing Cadence.
             */
            list(
              id: string,
              params?: SpendModifierRuleListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.CadenceSpendModifier>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.CadenceSpendModifier>;
          }
        }
      }
    }
  }
}
