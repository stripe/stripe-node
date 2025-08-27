// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Billing {
        namespace Intents {
          interface ActionRetrieveParams {}
        }
      }

      namespace Billing {
        namespace Intents {
          interface ActionListParams {
            /**
             * Optionally set the maximum number of results per page. Defaults to 10.
             */
            limit?: number;
          }
        }
      }

      namespace Billing {
        namespace Intents {
          class ActionsResource {
            /**
             * Retrieve a Billing Intent Action.
             */
            retrieve(
              intentId: string,
              id: string,
              params?: ActionRetrieveParams,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.IntentAction>>;
            retrieve(
              intentId: string,
              id: string,
              options?: RequestOptions
            ): Promise<Stripe.Response<Stripe.V2.Billing.IntentAction>>;

            /**
             * List Billing Intent Actions.
             */
            list(
              id: string,
              params?: ActionListParams,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.IntentAction>;
            list(
              id: string,
              options?: RequestOptions
            ): ApiListPromise<Stripe.V2.Billing.IntentAction>;
          }
        }
      }
    }
  }
}
