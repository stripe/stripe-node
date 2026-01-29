// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace Core {
        /**
         * The BatchJob object.
         */
        interface BatchJob {
          /**
           * Unique identifier for the batch job.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value.
           */
          object: 'v2.core.batch_job';

          /**
           * The URL to upload the JSONL file to.
           */
          url: string;
        }
      }
    }
  }
}
