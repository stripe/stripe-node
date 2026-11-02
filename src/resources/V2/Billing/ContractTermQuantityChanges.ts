// File generated from our OpenAPI spec

import {Decimal} from '../../../shared.js';
import {RequestOptions} from '../../../lib.js';
export interface ContractTermQuantityChange {
  /**
   * The ID of the quantity change.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.billing.contract_term_quantity_change';

  /**
   * The ID of the parent contract.
   */
  contract: string;

  /**
   * When this quantity change was created.
   */
  created: string;

  /**
   * When the quantity change takes effect.
   */
  effective_at: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The quantity at the effective time.
   */
  quantity: Decimal;

  /**
   * The ID of the recurring-price term.
   */
  term: string;
}
