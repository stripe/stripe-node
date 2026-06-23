// File generated from our OpenAPI spec

import {V2Amount} from './../../V2Amounts.js';
import {Decimal} from '../../../../shared.js';
import {RequestOptions} from '../../../../lib.js';
export interface AlertHistoryEntry {
  /**
   * Unique identifier for the alert history entry.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.health.alert_history_entry';

  /**
   * Populated when type is api_error.
   */
  api_error?: V2.Core.Health.AlertHistoryEntry.ApiError;

  /**
   * Populated when type is api_latency.
   */
  api_latency?: V2.Core.Health.AlertHistoryEntry.ApiLatency;

  /**
   * The time at which this transition occurred.
   */
  at: string;

  /**
   * Populated when type is authorization_rate_drop.
   */
  authorization_rate_drop?: V2.Core.Health.AlertHistoryEntry.AuthorizationRateDrop;

  /**
   * Populated when type is elements_error.
   */
  elements_error?: V2.Core.Health.AlertHistoryEntry.ElementsError;

  /**
   * Populated when type is event_generation_failure.
   */
  event_generation_failure?: V2.Core.Health.AlertHistoryEntry.EventGenerationFailure;

  /**
   * Populated when type is fraud_rate.
   */
  fraud_rate?: V2.Core.Health.AlertHistoryEntry.FraudRate;

  /**
   * Populated when type is invoice_count_dropped.
   */
  invoice_count_dropped?: V2.Core.Health.AlertHistoryEntry.InvoiceCountDropped;

  /**
   * Populated when type is issuing_authorization_request_errors.
   */
  issuing_authorization_request_errors?: V2.Core.Health.AlertHistoryEntry.IssuingAuthorizationRequestErrors;

  /**
   * Populated when type is issuing_authorization_request_timeout.
   */
  issuing_authorization_request_timeout?: V2.Core.Health.AlertHistoryEntry.IssuingAuthorizationRequestTimeout;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Populated when type is meter_event_summaries_delayed.
   */
  meter_event_summaries_delayed?: V2.Core.Health.AlertHistoryEntry.MeterEventSummariesDelayed;

  /**
   * Populated when type is metronome_notification_latency.
   */
  metronome_notification_latency?: V2.Core.Health.AlertHistoryEntry.MetronomeNotificationLatency;

  /**
   * Populated when type is payment_method_error.
   */
  payment_method_error?: V2.Core.Health.AlertHistoryEntry.PaymentMethodError;

  /**
   * Populated when type is sepa_debit_delayed.
   */
  sepa_debit_delayed?: V2.Core.Health.AlertHistoryEntry.SepaDebitDelayed;

  /**
   * Populated when type is traffic_volume_drop.
   */
  traffic_volume_drop?: V2.Core.Health.AlertHistoryEntry.TrafficVolumeDrop;

  /**
   * The type of transition that occurred.
   */
  transition: V2.Core.Health.AlertHistoryEntry.Transition;

  /**
   * The type of the alert. Determines which sub-hash field is populated.
   */
  type: V2.Core.Health.AlertHistoryEntry.Type;

  /**
   * Populated when type is webhook_latency.
   */
  webhook_latency?: V2.Core.Health.AlertHistoryEntry.WebhookLatency;
}
export namespace V2 {
  export namespace Core {
    export namespace Health {
      export namespace AlertHistoryEntry {
        export interface ApiError {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The error code.
           */
          error_code?: string;

          /**
           * The HTTP method.
           */
          http_method: ApiError.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: Decimal;

          /**
           * The top impacted connected accounts (only for platforms).
           */
          top_impacted_accounts?: Array<ApiError.TopImpactedAccount>;
        }

        export interface ApiLatency {
          /**
           * The canonical path.
           */
          canonical_path: string;

          /**
           * The HTTP method.
           */
          http_method: ApiLatency.HttpMethod;

          /**
           * The HTTP status.
           */
          http_status: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: Decimal;

          /**
           * The top impacted connected accounts (only for platforms).
           */
          top_impacted_accounts?: Array<ApiLatency.TopImpactedAccount>;
        }

        export interface AuthorizationRateDrop {
          /**
           * The type of the charge.
           */
          charge_type: AuthorizationRateDrop.ChargeType;

          /**
           * The current authorization rate percentage.
           */
          current_percentage: Decimal;

          /**
           * Dimensions that describe what subset of payments are impacted.
           */
          dimensions?: Array<AuthorizationRateDrop.Dimension>;

          /**
           * The type of the payment method.
           */
          payment_method_type: AuthorizationRateDrop.PaymentMethodType;

          /**
           * The previous authorization rate percentage.
           */
          previous_percentage: Decimal;
        }

        export interface ElementsError {
          /**
           * The type of the element.
           */
          element_type?: ElementsError.ElementType;

          /**
           * The number of impacted sessions.
           */
          impacted_sessions: number;
        }

        export interface EventGenerationFailure {
          /**
           * The context the event should have been generated for. Only present when the account is a connected account.
           */
          context?: string;

          /**
           * The type of event that Stripe failed to generate.
           */
          event_type: string;

          /**
           * The related object details.
           */
          related_object: EventGenerationFailure.RelatedObject;
        }

        export interface FraudRate {
          /**
           * Fraud attack type.
           */
          attack_type: FraudRate.AttackType;

          /**
           * The number of impacted requests which are detected.
           */
          impacted_requests: number;

          /**
           * Estimated aggregated amount for the impacted requests.
           */
          realized_fraud_amount: V2Amount;
        }

        export interface InvoiceCountDropped {
          /**
           * The observed number of invoices within the time window.
           */
          observed_count: Decimal;

          /**
           * The expected threshold number of invoices within the time window.
           */
          threshold_count: Decimal;

          /**
           * The size of the observation time window.
           */
          time_window: string;
        }

        export interface IssuingAuthorizationRequestErrors {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        export interface IssuingAuthorizationRequestTimeout {
          /**
           * Estimated aggregated amount for the approved requests.
           */
          approved_amount?: V2Amount;

          /**
           * The number of approved requests which are impacted.
           */
          approved_impacted_requests?: number;

          /**
           * Estimated aggregated amount for the declined requests.
           */
          declined_amount?: V2Amount;

          /**
           * The number of declined requests which are impacted.
           */
          declined_impacted_requests?: number;
        }

        export interface MeterEventSummariesDelayed {
          /**
           * The ingestion method.
           */
          ingestion_method?: 'import_sets';
        }

        export interface MetronomeNotificationLatency {
          /**
           * The impacted Metronome billing pipeline.
           */
          pipeline: MetronomeNotificationLatency.Pipeline;
        }

        export interface PaymentMethodError {
          /**
           * The returned error code.
           */
          error_code?: string;

          /**
           * The number of impacted requests.
           */
          impacted_requests: number;

          /**
           * The percentage of impacted requests.
           */
          impacted_requests_percentage?: Decimal;

          /**
           * The type of the payment method.
           */
          payment_method_type: PaymentMethodError.PaymentMethodType;

          /**
           * The top impacted connected accounts (only for platforms).
           */
          top_impacted_accounts?: Array<PaymentMethodError.TopImpactedAccount>;
        }

        export interface SepaDebitDelayed {
          /**
           * The number of impacted payments.
           */
          impacted_payments: number;

          /**
           * The percentage of impacted payments.
           */
          impacted_payments_percentage: Decimal;
        }

        export interface TrafficVolumeDrop {
          /**
           * The total volume of payment requests within the latest observation time window.
           */
          actual_traffic: number;

          /**
           * The canonical path.
           */
          canonical_path?: string;

          /**
           * The expected volume of payment requests within the latest observation time window.
           */
          expected_traffic?: number;

          /**
           * The size of the observation time window.
           */
          time_window: string;
        }

        export type Transition = 'impact_updated' | 'opened' | 'resolved';

        export type Type =
          | 'api_error'
          | 'api_latency'
          | 'authorization_rate_drop'
          | 'elements_error'
          | 'event_generation_failure'
          | 'fraud_rate'
          | 'invoice_count_dropped'
          | 'issuing_authorization_request_errors'
          | 'issuing_authorization_request_timeout'
          | 'meter_event_summaries_delayed'
          | 'metronome_notification_latency'
          | 'payment_method_error'
          | 'sepa_debit_delayed'
          | 'traffic_volume_drop'
          | 'webhook_latency';

        export interface WebhookLatency {
          /**
           * The number of impacted requests.
           */
          impacted_requests: number;
        }

        export namespace ApiError {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

          export interface TopImpactedAccount {
            /**
             * The account ID of the impacted connected account.
             */
            account: string;

            /**
             * The number of impacted requests.
             */
            impacted_requests: number;

            /**
             * The percentage of impacted requests.
             */
            impacted_requests_percentage?: Decimal;
          }
        }

        export namespace ApiLatency {
          export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT';

          export interface TopImpactedAccount {
            /**
             * The account ID of the impacted connected account.
             */
            account: string;

            /**
             * The number of impacted requests.
             */
            impacted_requests: number;

            /**
             * The percentage of impacted requests.
             */
            impacted_requests_percentage?: Decimal;
          }
        }

        export namespace AuthorizationRateDrop {
          export type ChargeType = 'money_moving' | 'validation';

          export interface Dimension {
            /**
             * Populated when type is issuer.
             */
            issuer?: string;

            /**
             * The type of the dimension. Determines which field in dimension_details is populated.
             */
            type: 'issuer';
          }

          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';
        }

        export namespace ElementsError {
          export type ElementType = 'expressCheckout' | 'payment';
        }

        export namespace EventGenerationFailure {
          export interface RelatedObject {
            /**
             * The ID of the related object (e.g., "pi_...").
             */
            id: string;

            /**
             * The type of the related object (e.g., "payment_intent").
             */
            type: string;

            /**
             * The API URL for the related object (e.g., "/v1/payment_intents/pi_...").
             */
            url: string;
          }
        }

        export namespace FraudRate {
          export type AttackType = 'spike' | 'sustained_attack';
        }

        export namespace MetronomeNotificationLatency {
          export type Pipeline =
            | 'configuration_triggered'
            | 'high_cardinality_usage_triggered'
            | 'standard_usage_triggered'
            | 'time_triggered';
        }

        export namespace PaymentMethodError {
          export type PaymentMethodType =
            | 'acss_debit'
            | 'affirm'
            | 'afterpay_clearpay'
            | 'alipay'
            | 'alma'
            | 'amazon_pay'
            | 'apple_pay'
            | 'au_becs_debit'
            | 'bacs_debit'
            | 'bancontact'
            | 'billie'
            | 'blik'
            | 'boleto'
            | 'card'
            | 'card_present'
            | 'cartes_bancaires'
            | 'cashapp'
            | 'crypto'
            | 'dummy_passthrough_card'
            | 'eps'
            | 'fpx'
            | 'giropay'
            | 'grabpay'
            | 'ideal'
            | 'interac_present'
            | 'kakao_pay'
            | 'klarna'
            | 'konbini'
            | 'kriya'
            | 'kr_card'
            | 'link'
            | 'mb_way'
            | 'mobilepay'
            | 'mondu'
            | 'multibanco'
            | 'naver_pay'
            | 'ng_bank'
            | 'ng_bank_transfer'
            | 'ng_card'
            | 'ng_market'
            | 'ng_ussd'
            | 'ng_wallet'
            | 'oxxo'
            | 'p24'
            | 'paper_check'
            | 'payco'
            | 'paynow'
            | 'paypal'
            | 'paypay'
            | 'payto'
            | 'pay_by_bank'
            | 'pix'
            | 'promptpay'
            | 'rechnung'
            | 'revolut_pay'
            | 'samsung_pay'
            | 'satispay'
            | 'scalapay'
            | 'sepa_debit'
            | 'sequra'
            | 'sofort'
            | 'sunbit'
            | 'swish'
            | 'twint'
            | 'upi'
            | 'us_bank_account'
            | 'vipps'
            | 'wechat_pay'
            | 'zip';

          export interface TopImpactedAccount {
            /**
             * The account ID of the impacted connected account.
             */
            account: string;

            /**
             * The number of impacted requests.
             */
            impacted_requests: number;

            /**
             * The percentage of impacted requests.
             */
            impacted_requests_percentage?: Decimal;
          }
        }
      }
    }
  }
}
