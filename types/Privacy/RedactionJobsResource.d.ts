// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      interface RedactionJobCreateParams {
        /**
         * The objects at the root level that are subject to redaction.
         */
        objects: RedactionJobCreateParams.Objects;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Default is "error". If "error", we will make sure all objects in the graph are
         * redactable in the 1st traversal, otherwise error. If "fix", where possible, we will
         * auto-fix any validation errors (e.g. by auto-transitioning objects to a terminal
         * state, etc.) in the 2nd traversal before redacting
         */
        validation_behavior?: RedactionJobCreateParams.ValidationBehavior;
      }

      namespace RedactionJobCreateParams {
        interface Objects {
          charges?: Array<string>;

          checkout_sessions?: Array<string>;

          customers?: Array<string>;

          identity_verification_sessions?: Array<string>;

          invoices?: Array<string>;

          issuing_cardholders?: Array<string>;

          issuing_cards?: Array<string>;

          payment_intents?: Array<string>;

          radar_value_list_items?: Array<string>;

          setup_intents?: Array<string>;
        }

        type ValidationBehavior = 'error' | 'fix';
      }

      interface RedactionJobRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RedactionJobUpdateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        validation_behavior?: RedactionJobUpdateParams.ValidationBehavior;
      }

      namespace RedactionJobUpdateParams {
        type ValidationBehavior = 'error' | 'fix';
      }

      interface RedactionJobListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        status?: RedactionJobListParams.Status;
      }

      namespace RedactionJobListParams {
        type Status =
          | 'canceled'
          | 'canceling'
          | 'created'
          | 'failed'
          | 'ready'
          | 'redacting'
          | 'succeeded'
          | 'validating';
      }

      interface RedactionJobCancelParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RedactionJobListValidationErrorsParams
        extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RedactionJobRunParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface RedactionJobValidateParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class RedactionJobsResource {
        /**
         * Create redaction job method
         */
        create(
          params: RedactionJobCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * Retrieve redaction job method
         */
        retrieve(
          id: string,
          params?: RedactionJobRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * Update redaction job method
         */
        update(
          id: string,
          params?: RedactionJobUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * List redaction jobs method...
         */
        list(
          params?: RedactionJobListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJob>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJob>;

        /**
         * Cancel redaction job method
         */
        cancel(
          id: string,
          params?: RedactionJobCancelParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;
        cancel(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * List validation errors method
         */
        listValidationErrors(
          id: string,
          params?: RedactionJobListValidationErrorsParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJobValidationError>;
        listValidationErrors(
          id: string,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJobValidationError>;

        /**
         * Run redaction job method
         */
        run(
          id: string,
          params?: RedactionJobRunParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;
        run(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * Validate redaction job method
         */
        validate(
          id: string,
          params?: RedactionJobValidateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;
        validate(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;
      }
    }
  }
}
