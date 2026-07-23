// File generated from our OpenAPI spec

import {OtherString} from '../../shared.js';
import {RequestOptions} from '../../lib.js';
export interface AlertNotification {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.alert_notification';

  /**
   * Whether the alert was triggered or recovered.
   */
  action: AlertNotification.Action;

  /**
   * End of the aggregation period for which this notification was sent. Only present for usage threshold alerts.
   */
  aggregation_period_end: number | null;

  /**
   * Start of the aggregation period for which this notification was sent. Only present for usage threshold alerts.
   */
  aggregation_period_start: number | null;

  /**
   * ID of the billing alert that generated this notification.
   */
  alert: string;

  /**
   * The type of billing alert that generated this notification.
   */
  alert_type: AlertNotification.AlertType;

  /**
   * The billing cadence associated with this notification. Only present for spend threshold alerts grouped by billing cadence.
   */
  cadence: string | null;

  /**
   * Three-letter ISO currency code for the value, in lowercase. Only present for spend and credit balance threshold alerts.
   */
  currency: string | null;

  /**
   * Custom pricing unit for the threshold value
   */
  custom_pricing_unit?: string | null;

  /**
   * ID of the customer for which the alert notification was sent.
   */
  customer: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * ID of the billing meter associated with this notification. Only present for usage threshold alerts.
   */
  meter: string | null;

  /**
   * ID of the event delivered for this notification. Retrievable via the Events API for a limited time; for long-term audit scenarios, capture the full event payload at webhook delivery time.
   */
  notification_event: string;

  /**
   * Time at which the notification was sent. Measured in seconds since the Unix epoch.
   */
  notified_at: number;

  /**
   * ID of the subscription associated with this notification. Only present for spend threshold alerts grouped by subscription.
   */
  subscription: string | null;

  /**
   * The value that triggered the alert. This may be a decimal string for custom pricing unit alerts. For usage threshold alerts, this is the meter event count. For credit balance and spend threshold alerts, this is the amount in the smallest currency unit.
   */
  value: string;
}
export namespace AlertNotification {
  export type Action = 'recovered' | 'triggered' | OtherString;

  export type AlertType =
    | 'credit_balance_threshold'
    | 'spend_threshold'
    | 'usage_threshold'
    | OtherString;
}
