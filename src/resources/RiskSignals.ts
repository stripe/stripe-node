// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface RiskSignals {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'risk_signals';

  /**
   * Represents the status of risk signal session metadata collection. When false, the account has payouts and payments disabled.
   */
  session_metadata: boolean;
}
