// File generated from our OpenAPI spec

import {ActiveEntitlement} from './ActiveEntitlements.js';
import {RequestOptions, ApiList} from '../../lib.js';
export interface ActiveEntitlementSummary {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'entitlements.active_entitlement_summary';

  /**
   * The customer that is entitled to this feature.
   */
  customer: string;

  /**
   * The list of entitlements this customer has.
   */
  entitlements: ApiList<ActiveEntitlement>;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
