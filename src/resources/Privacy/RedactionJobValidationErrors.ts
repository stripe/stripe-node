// File generated from our OpenAPI spec

import {RequestOptions} from '../../lib.js';
export interface RedactionJobValidationError {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'privacy.redaction_job_validation_error';

  /**
   * A code indicating the reason for the error.
   */
  code: Privacy.RedactionJobValidationError.Code;

  /**
   * If the error is related to a specific object, this field includes the object's identifier and object type.
   */
  erroring_object: Privacy.RedactionJobValidationError.ErroringObject | null;

  /**
   * A human-readable message providing more details about the error.
   */
  message: string;
}
export namespace Privacy {
  export namespace RedactionJobValidationError {
    export type Code =
      | 'invalid_cascading_source'
      | 'invalid_file_purpose'
      | 'invalid_state'
      | 'locked_by_other_job'
      | 'too_many_objects';

    export interface ErroringObject {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * Erroring object type
       */
      object_type: string;
    }
  }
}
