// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {V2Amount} from './../../V2Amounts.js';
import {OtherString, Decimal} from '../../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';
import {HistoryResource} from './Alerts/History.js';
import {Stripe} from '../../../../stripe.core.js';
export class AlertResource extends StripeResource {
  history: HistoryResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.history = new HistoryResource(stripe);
  }
  /**
   * Retrieves a list of health alerts.
   */
  list(
    params?: V2.Core.Health.AlertListParams,
    options?: RequestOptions
  ): V2ListPromise<Alert> {
    return this._makeRequest('GET', '/v2/core/health/alerts', params, options, {
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                api_error: {
                  kind: 'object',
                  fields: {
                    impacted_requests_percentage: {kind: 'decimal_string'},
                    top_impacted_accounts: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          impacted_requests_percentage: {
                            kind: 'decimal_string',
                          },
                        },
                      },
                    },
                  },
                },
                api_latency: {
                  kind: 'object',
                  fields: {
                    impacted_requests_percentage: {kind: 'decimal_string'},
                    top_impacted_accounts: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          impacted_requests_percentage: {
                            kind: 'decimal_string',
                          },
                        },
                      },
                    },
                  },
                },
                authorization_rate_drop: {
                  kind: 'object',
                  fields: {
                    current_percentage: {kind: 'decimal_string'},
                    previous_percentage: {kind: 'decimal_string'},
                  },
                },
                invoice_count_dropped: {
                  kind: 'object',
                  fields: {
                    observed_count: {kind: 'decimal_string'},
                    threshold_count: {kind: 'decimal_string'},
                  },
                },
                payment_method_error: {
                  kind: 'object',
                  fields: {
                    impacted_requests_percentage: {kind: 'decimal_string'},
                    top_impacted_accounts: {
                      kind: 'array',
                      element: {
                        kind: 'object',
                        fields: {
                          impacted_requests_percentage: {
                            kind: 'decimal_string',
                          },
                        },
                      },
                    },
                  },
                },
                sepa_debit_delayed: {
                  kind: 'object',
                  fields: {
                    impacted_payments_percentage: {kind: 'decimal_string'},
                  },
                },
              },
            },
          },
        },
      },
    }) as any;
  }
  /**
   * Retrieves a health alert by ID.
   */
  retrieve(
    id: string,
    params?: V2.Core.Health.AlertRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Alert>> {
    return this._makeRequest(
      'GET',
      `/v2/core/health/alerts/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            api_error: {
              kind: 'object',
              fields: {
                impacted_requests_percentage: {kind: 'decimal_string'},
                top_impacted_accounts: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                    },
                  },
                },
              },
            },
            api_latency: {
              kind: 'object',
              fields: {
                impacted_requests_percentage: {kind: 'decimal_string'},
                top_impacted_accounts: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                    },
                  },
                },
              },
            },
            authorization_rate_drop: {
              kind: 'object',
              fields: {
                current_percentage: {kind: 'decimal_string'},
                previous_percentage: {kind: 'decimal_string'},
              },
            },
            invoice_count_dropped: {
              kind: 'object',
              fields: {
                observed_count: {kind: 'decimal_string'},
                threshold_count: {kind: 'decimal_string'},
              },
            },
            payment_method_error: {
              kind: 'object',
              fields: {
                impacted_requests_percentage: {kind: 'decimal_string'},
                top_impacted_accounts: {
                  kind: 'array',
                  element: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                    },
                  },
                },
              },
            },
            sepa_debit_delayed: {
              kind: 'object',
              fields: {impacted_payments_percentage: {kind: 'decimal_string'}},
            },
          },
        },
      }
    ) as any;
  }
}
export interface Alert {
  /**
   * Unique identifier for the health alert.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.core.health.alert';

  /**
   * Populated when type is api_error.
   */
  api_error?: Alert.ApiError;

  /**
   * Populated when type is api_latency.
   */
  api_latency?: Alert.ApiLatency;

  /**
   * Populated when type is authorization_rate_drop.
   */
  authorization_rate_drop?: Alert.AuthorizationRateDrop;

  /**
   * Time at which the health alert was created.
   */
  created: string;

  /**
   * Links to relevant documentation for diagnosing and resolving the alert.
   */
  documentation_links: Array<Alert.DocumentationLink>;

  /**
   * Populated when type is elements_error.
   */
  elements_error?: Alert.ElementsError;

  /**
   * Populated when type is event_generation_failure.
   */
  event_generation_failure?: Alert.EventGenerationFailure;

  /**
   * Populated when type is fraud_rate.
   */
  fraud_rate?: Alert.FraudRate;

  /**
   * The grouping key for the alert.
   */
  grouping_key: string;

  /**
   * Whether the alert is linked to an incident or is a self-contained problem.
   */
  grouping_type: Alert.GroupingType;

  /**
   * Populated when type is invoice_count_dropped.
   */
  invoice_count_dropped?: Alert.InvoiceCountDropped;

  /**
   * Populated when type is issuing_authorization_request_errors.
   */
  issuing_authorization_request_errors?: Alert.IssuingAuthorizationRequestErrors;

  /**
   * Populated when type is issuing_authorization_request_timeout.
   */
  issuing_authorization_request_timeout?: Alert.IssuingAuthorizationRequestTimeout;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Populated when type is meter_event_summaries_delayed.
   */
  meter_event_summaries_delayed?: Alert.MeterEventSummariesDelayed;

  /**
   * Populated when type is metronome_notification_latency.
   */
  metronome_notification_latency?: Alert.MetronomeNotificationLatency;

  /**
   * Populated when type is payment_method_error.
   */
  payment_method_error?: Alert.PaymentMethodError;

  /**
   * The time when the user experience has returned to expected levels. Null if the alert is still open.
   */
  resolved_at?: string;

  /**
   * Populated when type is sepa_debit_delayed.
   */
  sepa_debit_delayed?: Alert.SepaDebitDelayed;

  /**
   * The severity of the alert.
   */
  severity: Alert.Severity;

  /**
   * The time when impact on the user experience was first detected.
   */
  started_at: string;

  /**
   * The current status of the alert.
   */
  status: Alert.Status;

  /**
   * A short description of the alert.
   */
  summary: string;

  /**
   * Populated when type is traffic_volume_drop.
   */
  traffic_volume_drop?: Alert.TrafficVolumeDrop;

  /**
   * The type of the alert. Determines which sub-hash field is populated.
   */
  type: Alert.Type;

  /**
   * Populated when type is webhook_latency.
   */
  webhook_latency?: Alert.WebhookLatency;
}
export namespace Alert {
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

  export interface DocumentationLink {
    /**
     * A human-readable label for the link.
     */
    label: string;

    /**
     * The URL of the documentation.
     */
    url: string;
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

  export type GroupingType = 'incident' | 'standalone' | OtherString;

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

  export type Severity = 'critical' | 'non_critical' | OtherString;

  export type Status = 'open' | 'resolved' | OtherString;

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
    | 'webhook_latency'
    | OtherString;

  export interface WebhookLatency {
    /**
     * The number of impacted requests.
     */
    impacted_requests: number;
  }

  export namespace ApiError {
    export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT' | OtherString;

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
    export type HttpMethod = 'DELETE' | 'GET' | 'POST' | 'PUT' | OtherString;

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
    export type ChargeType = 'money_moving' | 'validation' | OtherString;

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
      | 'zip'
      | OtherString;
  }

  export namespace ElementsError {
    export type ElementType = 'expressCheckout' | 'payment' | OtherString;
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
    export type AttackType = 'spike' | 'sustained_attack' | OtherString;
  }

  export namespace MetronomeNotificationLatency {
    export type Pipeline =
      | 'configuration_triggered'
      | 'high_cardinality_usage_triggered'
      | 'standard_usage_triggered'
      | 'time_triggered'
      | OtherString;
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
      | 'zip'
      | OtherString;

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
export namespace V2 {
  export namespace Core {
    export namespace Health {
      export interface AlertRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Core {
    export namespace Health {
      export interface AlertListParams {
        /**
         * Filter for alerts created at the specified timestamp.
         */
        created?: string;

        /**
         * Filter for alerts created after the specified timestamp.
         */
        created_gt?: string;

        /**
         * Filter for alerts created on or after the specified timestamp.
         */
        created_gte?: string;

        /**
         * Filter for alerts created before the specified timestamp.
         */
        created_lt?: string;

        /**
         * Filter for alerts created on or before the specified timestamp.
         */
        created_lte?: string;

        /**
         * The page limit.
         */
        limit?: number;

        /**
         * Filter by alert severity.
         */
        severity?: AlertListParams.Severity;

        /**
         * Filter by alert status.
         */
        status?: AlertListParams.Status;

        /**
         * Filter by alert types.
         */
        types?: Array<AlertListParams.Type>;
      }

      export namespace AlertListParams {
        export type Severity = 'critical' | 'non_critical' | OtherString;

        export type Status = 'open' | 'resolved' | OtherString;

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
          | 'webhook_latency'
          | OtherString;
      }
    }
  }
}
