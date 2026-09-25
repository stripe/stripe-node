// File generated from our OpenAPI spec

import {OtherString} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface EarnedCreditSimulation {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.earned_credit_simulation';

  /**
   * Has the value true if the object exists in live mode.
   */
  livemode: boolean;

  /**
   * The status of the request, signifying whether simulated EarnedCredit creation was initiated.
   */
  status: EarnedCreditSimulation.Status;
}
export namespace EarnedCreditSimulation {
  export type Status = 'accepted' | OtherString;
}
