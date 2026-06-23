// File generated from our OpenAPI spec

import {RequestOptions} from '../../../lib.js';
export interface FinancialAddressDebitSimulation {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.financial_address_debit_simulation';

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The status of the request, signifying whether a simulated debit was initiated.
   */
  status: string;
}
