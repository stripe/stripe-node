// File generated from our OpenAPI spec

import {Alert} from './Alerts.js';
import {Decimal} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface AlertTriggered {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.alert_triggered';

  /**
   * The aggregation period for which this alert triggered
   */
  aggregation_period?: Billing.AlertTriggered.AggregationPeriod | null;

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
   * ID of customer for which the alert triggered
   */
  customer: string;

  /**
   * External customer ID for the customer for which the alert triggered
   */
  external_customer_id?: string | null;

  /**
   * Populated specifically for spend alerts to notify merchants which group_by entity has the exceeded spend
   */
  group_by?: Billing.AlertTriggered.GroupBy | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Timestamp at which the threshold was crossed
   */
  triggered_at?: number | null;

  /**
   * The value triggering the alert
   */
  value: Decimal;
}
export namespace Billing {
  export namespace AlertTriggered {
    export interface AggregationPeriod {
      /**
       * End time of the aggregation period
       */
      ends_at: number;

      /**
       * Start time of the aggregation period
       */
      starts_at: number;
    }

    export interface GroupBy {
      /**
       * The billing cadence ID, populated when type is `billing_cadence`
       */
      billing_cadence: string | null;

      /**
       * The pricing plan subscription ID, populated when type is `pricing_plan_subscription`
       */
      pricing_plan_subscription: string | null;

      /**
       * The type of grouping used for this alert notification
       */
      type: GroupBy.Type;
    }

    export namespace GroupBy {
      export type Type = 'billing_cadence' | 'pricing_plan_subscription';
    }
  }
}
