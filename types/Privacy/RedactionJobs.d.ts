// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      /**
       * The Redaction Job object is used to redact Stripe objects. It is used
       * to coordinate the removal of personal information from selected
       * objects, making them permanently inaccessible in the Stripe Dashboard
       * and API.
       */
      interface RedactionJob {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'privacy.redaction_job';

        /**
         * Time at which the object was created. Measured in seconds since the Unix epoch.
         */
        created: number;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * The objects to redact in this job.
         */
        objects?: RedactionJob.Objects | null;

        /**
         * The status of the job.
         */
        status: RedactionJob.Status;

        /**
         * Validation behavior determines how a job validates objects for redaction eligibility. Default is `error`.
         */
        validation_behavior: RedactionJob.ValidationBehavior | null;
      }

      namespace RedactionJob {
        interface Objects {
          /**
           * Charge object identifiers usually starting with `ch_`
           */
          charges: Array<string> | null;

          /**
           * CheckoutSession object identifiers starting with `cs_`
           */
          checkout_sessions: Array<string> | null;

          /**
           * Customer object identifiers starting with `cus_`
           */
          customers: Array<string> | null;

          /**
           * Identity VerificationSessions object identifiers starting with `vs_`
           */
          identity_verification_sessions: Array<string> | null;

          /**
           * Invoice object identifiers starting with `in_`
           */
          invoices: Array<string> | null;

          /**
           * Issuing Cardholder object identifiers starting with `ich_`
           */
          issuing_cardholders: Array<string> | null;

          /**
           * PaymentIntent object identifiers starting with `pi_`
           */
          payment_intents: Array<string> | null;

          /**
           * Fraud ValueListItem object identifiers starting with `rsli_`
           */
          radar_value_list_items: Array<string> | null;

          /**
           * SetupIntent object identifiers starting with `seti_`
           */
          setup_intents: Array<string> | null;
        }

        type Status =
          | 'canceled'
          | 'canceling'
          | 'created'
          | 'failed'
          | 'ready'
          | 'redacting'
          | 'succeeded'
          | 'validating';

        type ValidationBehavior = 'error' | 'fix';
      }
    }
  }
}
