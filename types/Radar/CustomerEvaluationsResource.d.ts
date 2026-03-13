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
        event_type: CustomerEvaluationCreateParams.EventType;

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

        type EventType = 'login' | 'registration';
      }

      interface CustomerEvaluationUpdateParams {
        /**
         * The type of event to report.
         */
        type: CustomerEvaluationUpdateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Event payload for login_failed.
         */
        login_failed?: CustomerEvaluationUpdateParams.LoginFailed;

        /**
         * Event payload for registration_failed.
         */
        registration_failed?: CustomerEvaluationUpdateParams.RegistrationFailed;

        /**
         * Event payload for registration_success.
         */
        registration_success?: CustomerEvaluationUpdateParams.RegistrationSuccess;
      }

      namespace CustomerEvaluationUpdateParams {
        interface LoginFailed {
          /**
           * The reason why this login failed.
           */
          reason: LoginFailed.Reason;
        }

        namespace LoginFailed {
          type Reason = 'other' | 'suspected_account_sharing';
        }

        interface RegistrationFailed {
          /**
           * The reason why this registration failed.
           */
          reason: RegistrationFailed.Reason;
        }

        namespace RegistrationFailed {
          type Reason = 'other' | 'suspected_multi_accounting';
        }

        interface RegistrationSuccess {
          /**
           * Stripe customer ID to attach to an entity-less registration evaluation.
           */
          customer?: string;
        }

        type Type =
          | 'login_failed'
          | 'login_success'
          | 'registration_failed'
          | 'registration_success';
      }

      class CustomerEvaluationsResource {
        /**
         * Creates a new CustomerEvaluation object.
         */
        create(
          params: CustomerEvaluationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.CustomerEvaluation>>;

        /**
         * Reports an event on a CustomerEvaluation object.
         */
        update(
          id: string,
          params: CustomerEvaluationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.CustomerEvaluation>>;
      }
    }
  }
}
