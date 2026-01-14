// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Radar {
      interface AccountEvaluationCreateParams {
        /**
         * The type of evaluation requested.
         */
        type: AccountEvaluationCreateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Event payload for login_initiated.
         */
        login_initiated?: AccountEvaluationCreateParams.LoginInitiated;

        /**
         * Event payload for registration_initiated.
         */
        registration_initiated?: AccountEvaluationCreateParams.RegistrationInitiated;
      }

      namespace AccountEvaluationCreateParams {
        interface LoginInitiated {
          /**
           * Client device metadata details (e.g., radar_session).
           */
          client_device_metadata_details: LoginInitiated.ClientDeviceMetadataDetails;

          /**
           * Stripe customer ID
           */
          customer: string;
        }

        namespace LoginInitiated {
          interface ClientDeviceMetadataDetails {
            /**
             * ID for the Radar Session associated with the account evaluation.
             */
            radar_session: string;
          }
        }

        interface RegistrationInitiated {
          /**
           * Client device metadata details (e.g., radar_session).
           */
          client_device_metadata_details: RegistrationInitiated.ClientDeviceMetadataDetails;

          /**
           * Stripe customer ID
           */
          customer?: string;

          /**
           * Customer data
           */
          customer_data?: RegistrationInitiated.CustomerData;
        }

        namespace RegistrationInitiated {
          interface ClientDeviceMetadataDetails {
            /**
             * ID for the Radar Session associated with the account evaluation.
             */
            radar_session: string;
          }

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

        type Type = 'login_initiated' | 'registration_initiated';
      }

      interface AccountEvaluationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface AccountEvaluationUpdateParams {
        /**
         * The type of event to report.
         */
        type: AccountEvaluationUpdateParams.Type;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Event payload for login_failed.
         */
        login_failed?: AccountEvaluationUpdateParams.LoginFailed;

        /**
         * Event payload for registration_failed.
         */
        registration_failed?: AccountEvaluationUpdateParams.RegistrationFailed;
      }

      namespace AccountEvaluationUpdateParams {
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

        type Type =
          | 'login_failed'
          | 'login_succeeded'
          | 'registration_failed'
          | 'registration_succeeded';
      }

      class AccountEvaluationsResource {
        /**
         * Creates a new AccountEvaluation object.
         */
        create(
          params: AccountEvaluationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.AccountEvaluation>>;

        /**
         * Retrieves an AccountEvaluation object.
         */
        retrieve(
          id: string,
          params?: AccountEvaluationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.AccountEvaluation>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.AccountEvaluation>>;

        /**
         * Reports an event on an AccountEvaluation object.
         */
        update(
          id: string,
          params: AccountEvaluationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.AccountEvaluation>>;
      }
    }
  }
}
