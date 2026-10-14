// File generated from our OpenAPI spec

import {RequestOptions} from '../../lib.js';
export interface Rule {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object?: 'radar.rule';

  /**
   * The action taken on the payment.
   */
  action: string;

  /**
   * The predicate to evaluate the payment against.
   */
  predicate: string | null;
}
