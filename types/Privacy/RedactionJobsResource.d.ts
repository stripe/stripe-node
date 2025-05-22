// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      interface RedactionJobCreateParams {
        /**
         * The objects to redact. These root objects and their related ones will be validated for redaction.
         */
        objects: RedactionJobCreateParams.Objects;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Determines the validation behavior of the job. Default is `error`.
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

        /**
         * Determines the validation behavior of the job. Default is `error`.
         */
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
         * Creates a redaction job. When a job is created, it will start to validate.
         */
        create(
          params: RedactionJobCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * Retrieves the details of a previously created redaction job.
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
         * Updates the properties of a redaction job without running or canceling the job.
         *
         * If the job to update is in a failed status, it will not automatically start to validate. Once you applied all of the changes, use the validate API to start validation again.
         */
        update(
          id: string,
          params?: RedactionJobUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Privacy.RedactionJob>>;

        /**
         * Returns a list of redaction jobs.
         */
        list(
          params?: RedactionJobListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJob>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Privacy.RedactionJob>;

        /**
         * You can cancel a redaction job when it's in one of these statuses: ready, failed.
         *
         * Canceling the redaction job will abandon its attempt to redact the configured objects. A canceled job cannot be used again.
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
         * Returns a list of validation errors for the specified redaction job.
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
         * Run a redaction job in a ready status.
         *
         * When you run a job, the configured objects will be redacted asynchronously. This action is irreversible and cannot be canceled once started.
         *
         * The status of the job will move to redacting. Once all of the objects are redacted, the status will become succeeded. If the job's validation_behavior is set to fix, the automatic fixes will be applied to objects at this step.
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
         * Validate a redaction job when it is in a failed status.
         *
         * When a job is created, it automatically begins to validate on the configured objects' eligibility for redaction. Use this to validate the job again after its validation errors are resolved or the job's validation_behavior is changed.
         *
         * The status of the job will move to validating. Once all of the objects are validated, the status of the job will become ready. If there are any validation errors preventing the job from running, the status will become failed.
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
