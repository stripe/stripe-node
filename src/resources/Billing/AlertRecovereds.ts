// File generated from our OpenAPI spec

import {Alert} from './Alerts.js';
import {Decimal} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface AlertRecovered {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.alert_recovered';

  /**
   * A billing alert is a resource that notifies you when a certain usage threshold on a meter is crossed. For example, you might create a billing alert to notify you when a certain user made 100 API requests.
   */
  alert: Alert;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Currency for the threshold value
   */
  currency?: string | null;

  /**
   * Custom pricing unit for the threshold value
   */
  custom_pricing_unit?: string | null;

  /**
   * ID of customer for which the alert recovered
   */
  customer: string;

  /**
   * External customer ID for the customer for which the alert recovered
   */
  external_customer_id?: string | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The value at which the alert recovered
   */
  value: Decimal;
}
