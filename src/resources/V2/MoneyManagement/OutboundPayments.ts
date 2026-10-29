// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {
  MetadataParam,
  OtherString,
  LegacyV2DateTimeRangeQueryParam,
  Metadata,
} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class OutboundPaymentResource extends StripeResource {
  /**
   * Returns a list of OutboundPayments that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.OutboundPaymentListParams,
    options?: RequestOptions
  ): V2ListPromise<OutboundPayment> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/outbound_payments',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates an OutboundPayment.
   * @throws Stripe.BlockedByStripeError
   * @throws Stripe.InsufficientFundsError
   * @throws Stripe.CapabilityNotEnabledError
   * @throws Stripe.QuotaExceededError
   * @throws Stripe.RecipientNotNotifiableError
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.OutboundPaymentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/outbound_payments',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment create or list response.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.OutboundPaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/outbound_payments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancels an OutboundPayment. Only processing OutboundPayments can be canceled.
   * @throws Stripe.AlreadyCanceledError
   * @throws Stripe.NotCancelableError
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.OutboundPaymentCancelParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/outbound_payments/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
}
export interface OutboundPayment {
  /**
   * Unique identifier for the OutboundPayment.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.outbound_payment';

  /**
   * The amount and currency requested for this OutboundPayment.
   */
  amount: V2Amount;

  /**
   * Returns true if the OutboundPayment can be canceled, and false otherwise.
   */
  cancelable: boolean;

  /**
   * Time at which the OutboundPayment was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * An arbitrary string attached to the OutboundPayment. Often useful for displaying to users.
   */
  description?: string;

  /**
   * The date when funds are expected to arrive in the payout method. This field is not set if the payout method is in a `failed`, `canceled`, or `returned` state.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  expected_arrival_date?: string;

  /**
   * The FinancialAccount that funds were pulled from.
   */
  from: OutboundPayment.From;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The PayoutIntent ID that triggered this OutboundPayment.
   */
  payout_intent?: string;

  /**
   * Details about the OutboundPayment notification settings for recipient.
   */
  recipient_notification: OutboundPayment.RecipientNotification;

  /**
   * The ID of the RecipientVerification for this OutboundPayment. Required where recipient-name verification is mandated before creating an OutboundPayment.
   */
  recipient_verification?: string;

  /**
   * The description that appears on the receiving end of an OutboundPayment (for example, on a bank statement). Defaults to `STRIPE` if not configured in the account settings.
   */
  statement_descriptor: string;

  /**
   * Current status of the OutboundPayment.
   * An OutboundPayment is `processing` after creation. It becomes `posted` when funds leave the account,
   * `failed` if it cannot be sent, `canceled` if canceled before posting, or `returned` if the funds are returned.
   */
  status: OutboundPayment.Status;

  /**
   * Status details for an OutboundPayment in a `processing`, `failed`, or `returned` state.
   */
  status_details?: OutboundPayment.StatusDetails;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: OutboundPayment.StatusTransitions;

  /**
   * To which payout method the OutboundPayment was sent.
   */
  to: OutboundPayment.To;

  /**
   * Information to track this OutboundPayment with the recipient bank.
   */
  tracking_details?: OutboundPayment.TrackingDetails;
}
export namespace OutboundPayment {
  export interface From {
    /**
     * The monetary amount debited from the sender, only set on responses.
     */
    debited: V2Amount;

    /**
     * The FinancialAccount that funds were pulled from.
     */
    financial_account: string;
  }

  export interface RecipientNotification {
    /**
     * Closed Enum. Configuration option to enable or disable notifications to recipients.
     * Do not send notifications when `setting` is `none`. Use the account setting when `setting` is `configured` or omitted.
     */
    setting: RecipientNotification.Setting;
  }

  export type Status =
    | 'canceled'
    | 'failed'
    | 'posted'
    | 'processing'
    | 'returned';

  export interface StatusDetails {
    /**
     * The `failed` status reason.
     */
    failed?: StatusDetails.Failed;

    /**
     * The `processing` status details.
     */
    processing?: StatusDetails.Processing;

    /**
     * The `returned` status reason.
     */
    returned?: StatusDetails.Returned;
  }

  export interface StatusTransitions {
    /**
     * Timestamp describing when an OutboundPayment changed status to `canceled`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    canceled_at?: string;

    /**
     * Timestamp describing when an OutboundPayment changed status to `failed`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    failed_at?: string;

    /**
     * Timestamp describing when an OutboundPayment changed status to `posted`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    posted_at?: string;

    /**
     * Timestamp describing when an OutboundPayment changed status to `returned`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    returned_at?: string;
  }

  export interface To {
    /**
     * The monetary amount being credited to the destination.
     */
    credited: V2Amount;

    /**
     * The payout method which the OutboundPayment uses to send payout.
     */
    payout_method?: string;

    /**
     * Payout method options for the OutboundPayment.
     */
    payout_method_options?: To.PayoutMethodOptions;

    /**
     * To which account the OutboundPayment is sent.
     */
    recipient: string;
  }

  export interface TrackingDetails {
    /**
     * Bank account tracking details.
     */
    bank_account?: TrackingDetails.BankAccount;

    /**
     * Card tracking details.
     */
    card?: TrackingDetails.Card;

    /**
     * The status of the tracking details for this OutboundPayment.
     */
    status: TrackingDetails.Status;

    /**
     * The type of tracking details for this OutboundPayment.
     */
    type: TrackingDetails.Type;
  }

  export namespace RecipientNotification {
    export type Setting = 'configured' | 'none';
  }

  export namespace StatusDetails {
    export interface Failed {
      /**
       * Open Enum. The `failed` status reason.
       */
      reason: Failed.Reason;
    }

    export interface Processing {
      /**
       * Open Enum. The `processing` status reason.
       */
      reason: Processing.Reason;
    }

    export interface Returned {
      /**
       * Open Enum. The `returned` status reason.
       */
      reason: Returned.Reason;
    }

    export namespace Failed {
      export type Reason =
        | 'fx_rate_drift_exceeded_after_review'
        | 'payout_method_amount_limit_exceeded'
        | 'payout_method_declined'
        | 'payout_method_does_not_exist'
        | 'payout_method_expired'
        | 'payout_method_unsupported'
        | 'payout_method_usage_frequency_limit_exceeded'
        | 'review_rejected'
        | 'unknown_failure'
        | OtherString;
    }

    export namespace Processing {
      export type Reason = 'under_review' | OtherString;
    }

    export namespace Returned {
      export type Reason =
        | 'payout_method_canceled_by_customer'
        | 'payout_method_closed'
        | 'payout_method_currency_unsupported'
        | 'payout_method_does_not_exist'
        | 'payout_method_holder_address_incorrect'
        | 'payout_method_holder_details_incorrect'
        | 'payout_method_holder_name_incorrect'
        | 'payout_method_invalid_account_number'
        | 'payout_method_restricted'
        | 'recalled'
        | 'unknown_failure'
        | OtherString;
    }
  }

  export namespace To {
    export interface PayoutMethodOptions {
      /**
       * Options for bank account payout methods.
       */
      bank_account?: PayoutMethodOptions.BankAccount;
    }

    export namespace PayoutMethodOptions {
      export interface BankAccount {
        /**
         * Per-network configuration options.
         */
        preferred_network_options?: BankAccount.PreferredNetworkOptions;

        /**
         * The preferred networks to use for this OutboundPayment.
         */
        preferred_networks?: Array<BankAccount.PreferredNetwork>;
      }

      export namespace BankAccount {
        export interface PreferredNetworkOptions {
          /**
           * ACH-specific network options.
           */
          ach?: PreferredNetworkOptions.Ach;
        }

        export type PreferredNetwork =
          | 'ach'
          | 'fedwire'
          | 'fps'
          | 'rtp'
          | 'sepa'
          | 'swift'
          | OtherString;

        export namespace PreferredNetworkOptions {
          export interface Ach {
            /**
             * Open Enum. ACH submission timing.
             */
            submission?: Ach.Submission;

            /**
             * The transaction purpose for this ACH payment.
             */
            transaction_purpose?: Ach.TransactionPurpose;
          }

          export namespace Ach {
            export type Submission = 'next_day' | 'same_day' | OtherString;

            export type TransactionPurpose = 'payroll' | OtherString;
          }
        }
      }
    }
  }

  export namespace TrackingDetails {
    export interface BankAccount {
      /**
       * A unique identifier that can be used to track this OutboundPayment with the recipient bank. Banks might call this a “reference number” or something similar.
       */
      trace_id?: string;
    }

    export interface Card {
      /**
       * A unique identifier that can be used to track this OutboundPayment with the recipient card.
       */
      retrieval_reference?: string;
    }

    export type Status = 'pending' | 'supported' | 'unsupported' | OtherString;

    export type Type = 'bank_account' | 'card' | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentCreateParams {
      /**
       * The requested amount and currency for the OutboundPayment.
       */
      amount: V2Amount;

      /**
       * From which FinancialAccount and BalanceType to pull funds from.
       */
      from: OutboundPaymentCreateParams.From;

      /**
       * To which payout method to send the OutboundPayment.
       */
      to: OutboundPaymentCreateParams.To;

      /**
       * An arbitrary string attached to the OutboundPayment. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Details about the notification settings for the OutboundPayment recipient.
       */
      recipient_notification?: OutboundPaymentCreateParams.RecipientNotification;

      /**
       * The ID of the RecipientVerification for this OutboundPayment. Required where recipient-name verification is mandated before creating an OutboundPayment.
       */
      recipient_verification?: string;

      /**
       * The description that appears on the receiving end for an OutboundPayment (for example, on a bank statement). Must be between 3 and 22 characters long for most destinations (500 for FinancialAccount destinations), and not contain profanity.
       */
      statement_descriptor?: string;
    }

    export namespace OutboundPaymentCreateParams {
      export interface From {
        /**
         * Describes the FinancialAmount's currency drawn from.
         */
        currency: string;

        /**
         * The FinancialAccount that funds were pulled from.
         */
        financial_account: string;
      }

      export interface To {
        /**
         * Describes the currency to send to the recipient.
         * If included, this currency must match a currency supported by the destination.
         * Can be omitted in the following cases:
         * - destination only supports one currency
         * - destination supports multiple currencies and one matches `from.currency`
         * - destination supports multiple currencies and one matches `amount.currency`
         * When both `from.currency` and `amount.currency` are supported, Stripe selects `from.currency` to minimize currency conversion.
         */
        currency?: string;

        /**
         * The payout method which the OutboundPayment uses to send payout.
         */
        payout_method?: string;

        /**
         * Payout method options for the OutboundPayment.
         */
        payout_method_options?: To.PayoutMethodOptions;

        /**
         * To which account the OutboundPayment is sent.
         */
        recipient: string;
      }

      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when `setting` is `none`. Use the account setting when `setting` is `configured` or omitted.
         */
        setting: RecipientNotification.Setting;
      }

      export namespace RecipientNotification {
        export type Setting = 'configured' | 'none';
      }

      export namespace To {
        export interface PayoutMethodOptions {
          /**
           * Options for bank account payout methods.
           */
          bank_account?: PayoutMethodOptions.BankAccount;
        }

        export namespace PayoutMethodOptions {
          export interface BankAccount {
            /**
             * Per-network configuration options.
             */
            preferred_network_options?: BankAccount.PreferredNetworkOptions;

            /**
             * The preferred networks to use for this OutboundPayment.
             */
            preferred_networks?: Array<BankAccount.PreferredNetwork>;
          }

          export namespace BankAccount {
            export interface PreferredNetworkOptions {
              /**
               * ACH-specific network options.
               */
              ach?: PreferredNetworkOptions.Ach;
            }

            export type PreferredNetwork =
              | 'ach'
              | 'fedwire'
              | 'fps'
              | 'rtp'
              | 'sepa'
              | 'swift'
              | OtherString;

            export namespace PreferredNetworkOptions {
              export interface Ach {
                /**
                 * Open Enum. ACH submission timing.
                 */
                submission?: Ach.Submission;

                /**
                 * The transaction purpose for this ACH payment.
                 */
                transaction_purpose?: Ach.TransactionPurpose;
              }

              export namespace Ach {
                export type Submission = 'next_day' | 'same_day' | OtherString;

                export type TransactionPurpose = 'payroll' | OtherString;
              }
            }
          }
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentListParams {
      /**
       * Filter OutboundPayments by their creation time.
       */
      created?:
        | OutboundPaymentListParams.Created
        | LegacyV2DateTimeRangeQueryParam;

      /**
       * The maximum number of results to return.
       */
      limit?: number;

      /**
       * Only return OutboundPayments sent to this recipient.
       */
      recipient?: string;

      /**
       * Closed Enum. Only return OutboundPayments with this status.
       */
      status?: Array<OutboundPaymentListParams.Status>;
    }

    export namespace OutboundPaymentListParams {
      export interface Created {
        /**
         * Filter for objects created after the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        gt?: string;

        /**
         * Filter for objects created on or after the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        gte?: string;

        /**
         * Filter for objects created before the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        lt?: string;

        /**
         * Filter for objects created on or before the specified timestamp.
         * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
         */
        lte?: string;
      }

      export type Status =
        | 'canceled'
        | 'failed'
        | 'posted'
        | 'processing'
        | 'returned';
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentCancelParams {}
  }
}
