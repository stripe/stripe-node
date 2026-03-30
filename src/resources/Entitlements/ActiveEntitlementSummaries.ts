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
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
