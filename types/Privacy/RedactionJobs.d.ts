// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      /**
       * Redaction Jobs store the status of a redaction request. They are created
       * when a redaction request is made and track the redaction validation and execution.
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
         * The objects at the root level that are subject to redaction.
         */
        objects?: Stripe.Privacy.RedactionJobRootObjects | null;

        /**
         * The status field represents the current state of the redaction job. It can take on any of the following values: VALIDATING, READY, REDACTING, SUCCEEDED, CANCELED, FAILED.
         */
        status: string;

        /**
         * Default is "error". If "error", we will make sure all objects in the graph are redactable in the 1st traversal, otherwise error. If "fix", where possible, we will auto-fix any validation errors (e.g. by auto-transitioning objects to a terminal state, etc.) in the 2nd traversal before redacting
         */
        validation_behavior: string | null;
      }
    }
  }
}
