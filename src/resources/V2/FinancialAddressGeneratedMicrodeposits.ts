// File generated from our OpenAPI spec

import {V2Amount} from './V2Amounts.js';
import {RequestOptions} from '../../lib.js';
export interface FinancialAddressGeneratedMicrodeposits {
  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'financial_address_generated_microdeposits';

  /**
   * The amounts of the microdeposits that were generated.
   */
  amounts: Array<V2Amount>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Closed Enum. The status of the request.
   */
  status: 'accepted';
}
