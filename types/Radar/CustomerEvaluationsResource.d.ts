// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface CustomerEvaluationCreateParams {
        /**
         * Array of context entries for the evaluation.
         */
        evaluation_context: Array<
          CustomerEvaluationCreateParams.EvaluationContext
        >;

        /**
         * The type of evaluation event.
         */
        event_type: 'registration';

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      namespace CustomerEvaluationCreateParams {
        interface EvaluationContext {
          /**
           * Client details context.
           */
          client_details?: EvaluationContext.ClientDetails;

          /**
           * Customer details context.
           */
          customer_details?: EvaluationContext.CustomerDetails;

          /**
           * The type of context entry.
           */
          type: EvaluationContext.Type;
        }

        namespace EvaluationContext {
          interface ClientDetails {
            /**
             * ID for the Radar Session associated with the customer evaluation.
             */
            radar_session: string;
          }

          interface CustomerDetails {
            /**
             * Stripe customer ID
             */
            customer?: string;

            /**
             * Customer data
             */
            customer_data?: CustomerDetails.CustomerData;
          }

          namespace CustomerDetails {
            interface CustomerData {
              /**
               * Customer email
               */
              email?: string;

              /**
               * Customer name
               */
              name?: string;

              /**
               * Customer phone
               */
              phone?: string;
            }
          }

          type Type = 'client_details' | 'customer_details';
        }
      }

      class CustomerEvaluationsResource {
        /**
         * Creates a new CustomerEvaluation object.
         */
        create(
          params: CustomerEvaluationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.CustomerEvaluation>>;
      }
    }
  }
}
