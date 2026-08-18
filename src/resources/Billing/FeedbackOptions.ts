// File generated from our OpenAPI spec

import {RequestOptions} from '../../lib.js';
export interface FeedbackOption {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.feedback_option';

  /**
   * An arbitrary string attached to the object. Often useful for displaying to users.
   */
  description: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The feedback option's status.
   */
  status: FeedbackOption.Status;

  status_transitions: FeedbackOption.StatusTransitions;
}
export namespace FeedbackOption {
  export type Status = 'active' | 'inactive';

  export interface StatusTransitions {
    /**
     * The time the feedback option was deactivated, if any. Measured in seconds since Unix epoch.
     */
    deactivated_at: number | null;
  }
}
