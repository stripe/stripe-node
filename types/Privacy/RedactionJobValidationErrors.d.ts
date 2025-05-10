// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Privacy {
      /**
       * Validation errors
       */
      interface RedactionJobValidationError {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'privacy.redaction_job_validation_error';

        code: RedactionJobValidationError.Code;

        erroring_object: {
          [key: string]: string;
        } | null;

        message: string;
      }

      namespace RedactionJobValidationError {
        type Code =
          | 'invalid_cascading_source'
          | 'invalid_file_purpose'
          | 'invalid_state'
          | 'locked_by_other_job'
          | 'too_many_objects';
      }
    }
  }
}
