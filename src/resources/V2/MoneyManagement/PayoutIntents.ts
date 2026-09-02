// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, OtherString, Metadata} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class PayoutIntentResource extends StripeResource {
  /**
   * Returns a list of PayoutIntents.
   */
  list(
    params?: V2.MoneyManagement.PayoutIntentListParams,
    options?: RequestOptions
  ): V2ListPromise<PayoutIntent> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/payout_intents',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a PayoutIntent.
   * @throws Stripe.FeatureNotEnabledError
   */
  create(
    params: V2.MoneyManagement.PayoutIntentCreateParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/payout_intents',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing PayoutIntent by passing the unique PayoutIntent ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/payout_intents/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Updates a PayoutIntent. Only pending or requires_action PayoutIntents that are editable can be updated.
   * @throws Stripe.FeatureNotEnabledError
   */
  update(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Cancels a PayoutIntent. Only pending PayoutIntents, processing PayoutIntents with cancelable OutboundPayment/Transfer, or requires_action PayoutIntents can be canceled.
   * @throws Stripe.NotCancelableError
   */
  cancel(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentCancelParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(id)}/cancel`,
      params,
      options
    ) as any;
  }
  /**
   * Confirms a PayoutIntent that is in the requires_action state, transitioning it to pending.
   * @throws Stripe.FxQuoteNeedsRefreshError
   */
  confirm(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentConfirmParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(id)}/confirm`,
      params,
      options
    ) as any;
  }
  /**
   * Refreshes FX quote for a PayoutIntent.
   */
  fxQuote(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentFxQuoteParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(id)}/fx_quote`,
      params,
      options
    ) as any;
  }
}
export interface PayoutIntent {
  /**
   * Unique identifier for the PayoutIntent.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.payout_intent';

  /**
   * The monetary amount to be sent.
   */
  amount: V2Amount;

  /**
   * Controls whether the intent requires explicit confirmation before transitioning to pending.
   */
  confirmation_method: PayoutIntent.ConfirmationMethod;

  /**
   * Time at which the PayoutIntent was created.
   * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * An arbitrary string attached to the PayoutIntent. Often useful for displaying to users.
   */
  description?: string;

  /**
   * Estimated fees and taxes.
   */
  estimated_fees?: Array<PayoutIntent.EstimatedFee>;

  /**
   * The FinancialAccount that funds are pulled from.
   */
  from: PayoutIntent.From;

  /**
   * FX rate information for fee transparency.
   */
  fx_quote?: PayoutIntent.FxQuote;

  /**
   * Details about the latest payout associated with this PayoutIntent.
   */
  latest_payout: PayoutIntent.LatestPayout;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * Next action required for a PayoutIntent in the requires_action state. Populated when status is requires_action.
   */
  next_action?: PayoutIntent.NextAction;

  /**
   * Details about the OutboundPayment notification settings for recipient. Only applicable to OutboundPayment.
   */
  recipient_notification?: PayoutIntent.RecipientNotification;

  /**
   * Scheduling options for the payout. If this is nil, we assume immediate execution.
   */
  schedule_options?: PayoutIntent.ScheduleOptions;

  /**
   * The description that appears on the receiving end for the payout (for example, on a bank statement).
   */
  statement_descriptor?: string;

  /**
   * Open Enum. Current status of the PayoutIntent: `pending`, `processing`, `posted`, `canceled`, `requires_action`.
   */
  status: PayoutIntent.Status;

  /**
   * Hash containing timestamps of when transitioned to a particular status.
   */
  status_transitions?: PayoutIntent.StatusTransitions;

  /**
   * To which payout method the payout is sent.
   */
  to: PayoutIntent.To;
}
export namespace PayoutIntent {
  export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;

  export interface EstimatedFee {
    /**
     * The fee amount.
     */
    amount: V2Amount;

    /**
     * Tax charged for this fee, if applicable. Value expressed as a decimal string in major units.
     */
    tax_amount?: EstimatedFee.TaxAmount;

    /**
     * Open Enum. The type of fee.
     */
    type: EstimatedFee.Type;
  }

  export interface From {
    /**
     * The currency of the financial account.
     */
    currency: string;

    /**
     * Estimated amount to be debited from the financial account.
     */
    debited?: V2Amount;

    /**
     * The FinancialAccount that funds are pulled from.
     */
    financial_account: string;
  }

  export interface FxQuote {
    /**
     * Open Enum. Duration of the FX rate lock.
     */
    lock_duration: FxQuote.LockDuration;

    /**
     * Timestamp when the rate lock expires. Null when rate locking is not supported.
     */
    lock_expires_at?: string;

    /**
     * Open Enum. Lock status of the FX rate.
     */
    lock_status: FxQuote.LockStatus;

    /**
     * Key: source currency. Value: exchange rate from source currency to to_currency.
     */
    rates: {
      [key: string]: FxQuote.Rates;
    };

    /**
     * The destination currency.
     */
    to_currency: string;
  }

  export interface LatestPayout {
    /**
     * The ID of the OutboundPayment, if applicable.
     */
    outbound_payment?: string;

    /**
     * The ID of the OutboundTransfer, if applicable.
     */
    outbound_transfer?: string;

    /**
     * The type of payout.
     */
    type: LatestPayout.Type;
  }

  export interface NextAction {
    /**
     * Details about a confirmation required. Populated when type is confirm.
     */
    confirm?: NextAction.Confirm;

    /**
     * Details about a failure that requires user action. Populated when type is handle_failure.
     */
    handle_failure?: NextAction.HandleFailure;

    /**
     * Open Enum. The type of next action required.
     */
    type: NextAction.Type;
  }

  export interface RecipientNotification {
    /**
     * Closed Enum. Configuration option to enable or disable notifications to recipients.
     * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
     */
    setting: RecipientNotification.Setting;
  }

  export interface ScheduleOptions {
    /**
     * The date when the payout should be executed, in YYYY-MM-DD format.
     */
    execute_on?: string;
  }

  export type Status =
    | 'canceled'
    | 'pending'
    | 'posted'
    | 'processing'
    | 'requires_action'
    | OtherString;

  export interface StatusTransitions {
    /**
     * Timestamp describing when a PayoutIntent changed status to `canceled`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    canceled_at?: string;

    /**
     * Timestamp describing when a PayoutIntent changed status to `posted`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    posted_at?: string;

    /**
     * Timestamp describing when a PayoutIntent changed status to `processing`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    processing_at?: string;

    /**
     * Timestamp describing when a PayoutIntent changed status to `requires_action`.
     * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
     */
    requires_action_at?: string;
  }

  export interface To {
    /**
     * Estimated amount to be credited to the recipient in the destination currency.
     */
    credited?: V2Amount;

    /**
     * The currency to send to the recipient.
     */
    currency?: string;

    /**
     * The payout method ID. Optional for OutboundPayment if recipient has default payment method. Required for OutboundTransfer.
     */
    payout_method?: string;

    /**
     * Payout method options for the PayoutIntent.
     */
    payout_method_options?: To.PayoutMethodOptions;

    /**
     * The recipient ID. Only relevant for OutboundPayment.
     */
    recipient?: string;
  }

  export namespace EstimatedFee {
    export interface TaxAmount {
      /**
       * Currency code.
       */
      currency: string;

      /**
       * Tax amount value represented as a decimal string in major units.
       */
      value_decimal: string;
    }

    export type Type =
      | 'cross_border_fee'
      | 'foreign_exchange_fee'
      | 'instant_card_payout_fee'
      | 'next_day_payout_fee'
      | 'real_time_payout_fee'
      | 'stablecoin_payout_fee'
      | 'stablecoin_routing_fee'
      | 'standard_payout_fee'
      | 'wire_payout_fee'
      | OtherString;
  }

  export namespace FxQuote {
    export type LockDuration = 'five_minutes' | 'none' | OtherString;

    export type LockStatus = 'active' | 'expired' | 'none' | OtherString;

    export interface Rates {
      /**
       * The exchange rate going from_currency -> to_currency, represented as a decimal string
       * (e.g., "1.1520") to preserve the full precision of the rate.
       */
      exchange_rate: string;
    }
  }

  export namespace LatestPayout {
    export type Type = 'outbound_payment' | 'outbound_transfer' | OtherString;
  }

  export namespace NextAction {
    export interface Confirm {
      /**
       * Open Enum. The reason the PayoutIntent requires confirmation.
       */
      reason: Confirm.Reason;
    }

    export interface HandleFailure {
      /**
       * Open Enum. The reason for the failure.
       */
      failure_reason: HandleFailure.FailureReason;
    }

    export type Type = 'confirm' | 'handle_failure' | OtherString;

    export namespace Confirm {
      export type Reason =
        | 'automatically_required'
        | 'manually_requested'
        | OtherString;
    }

    export namespace HandleFailure {
      export type FailureReason =
        | 'account_not_configured_as_recipient'
        | 'currency_not_supported_for_financial_account_balance'
        | 'currency_required'
        | 'feature_not_active_for_recipient'
        | 'fx_rate_drift_exceeded_after_review'
        | 'insufficient_funds'
        | 'payout_method_account_type_incorrect'
        | 'payout_method_amount_limit_exceeded'
        | 'payout_method_canceled_by_customer'
        | 'payout_method_closed'
        | 'payout_method_currency_unsupported'
        | 'payout_method_declined'
        | 'payout_method_does_not_exist'
        | 'payout_method_expired'
        | 'payout_method_holder_address_incorrect'
        | 'payout_method_holder_details_incorrect'
        | 'payout_method_holder_name_incorrect'
        | 'payout_method_invalid_account_number'
        | 'payout_method_restricted'
        | 'payout_method_unsupported'
        | 'payout_method_usage_frequency_limit_exceeded'
        | 'recalled'
        | 'review_rejected'
        | 'to_destination_invalid'
        | 'unknown_failure'
        | OtherString;
    }
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
         * The preferred networks to use for this PayoutIntent.
         */
        preferred_networks: Array<BankAccount.PreferredNetwork>;
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
          | 'becs'
          | 'eft'
          | 'fedwire'
          | 'fps'
          | 'npp'
          | 'rtp'
          | 'sepa_credit'
          | 'sepa_instant'
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
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentCreateParams {
      /**
       * The monetary amount to be sent.
       */
      amount: V2Amount;

      /**
       * The FinancialAccount that funds are pulled from.
       */
      from: PayoutIntentCreateParams.From;

      /**
       * To which payout method the payout is sent.
       */
      to: PayoutIntentCreateParams.To;

      /**
       * Controls whether the intent requires explicit confirmation before transitioning to pending. Defaults to automatic.
       */
      confirmation_method?: PayoutIntentCreateParams.ConfirmationMethod;

      /**
       * An arbitrary string attached to the PayoutIntent. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Details about the OutboundPayment notification settings for recipient. Only applicable to OutboundPayment.
       */
      recipient_notification?: PayoutIntentCreateParams.RecipientNotification;

      /**
       * Scheduling options for the payout. If this is nil, we assume immediate execution.
       */
      schedule_options?: PayoutIntentCreateParams.ScheduleOptions;

      /**
       * The description that appears on the receiving end for the payout (for example, on a bank statement).
       */
      statement_descriptor?: string;
    }

    export namespace PayoutIntentCreateParams {
      export interface From {
        /**
         * The currency of the financial account.
         */
        currency: string;

        /**
         * The FinancialAccount that funds are pulled from.
         */
        financial_account: string;
      }

      export interface To {
        /**
         * The currency to send to the recipient.
         */
        currency?: string;

        /**
         * The payout method ID. Optional for OutboundPayment if recipient has default payment method. Required for OutboundTransfer.
         */
        payout_method?: string;

        /**
         * Payout method options for the PayoutIntent.
         */
        payout_method_options?: To.PayoutMethodOptions;

        /**
         * The recipient ID. Only relevant for OutboundPayment.
         */
        recipient?: string;
      }

      export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;

      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
         */
        setting: RecipientNotification.Setting;
      }

      export interface ScheduleOptions {
        /**
         * The date when the payout should be executed, in YYYY-MM-DD format.
         */
        execute_on?: string;
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
             * The preferred networks to use for this PayoutIntent.
             */
            preferred_networks: Array<BankAccount.PreferredNetwork>;
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
              | 'becs'
              | 'eft'
              | 'fedwire'
              | 'fps'
              | 'npp'
              | 'rtp'
              | 'sepa_credit'
              | 'sepa_instant'
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
    export interface PayoutIntentRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentUpdateParams {
      /**
       * The monetary amount to be sent.
       */
      amount?: V2Amount;

      /**
       * An arbitrary string attached to the PayoutIntent. Often useful for displaying to users.
       */
      description?: string;

      /**
       * From which FinancialAccount to pull funds.
       */
      from?: PayoutIntentUpdateParams.From;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Details about the OutboundPayment notification settings for recipient. Only applicable to OutboundPayment.
       */
      recipient_notification?: PayoutIntentUpdateParams.RecipientNotification;

      /**
       * Scheduling options for the payout. If this is nil, we assume immediate execution.
       */
      schedule_options?: PayoutIntentUpdateParams.ScheduleOptions;

      /**
       * The description that appears on the receiving end for the payout (for example, on a bank statement).
       */
      statement_descriptor?: string;

      /**
       * To which payout method the payout is sent.
       */
      to?: PayoutIntentUpdateParams.To;
    }

    export namespace PayoutIntentUpdateParams {
      export interface From {
        /**
         * The currency of the financial account.
         */
        currency: string;

        /**
         * The FinancialAccount that funds are pulled from.
         */
        financial_account: string;
      }

      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
         */
        setting: RecipientNotification.Setting;
      }

      export interface ScheduleOptions {
        /**
         * The date when the payout should be executed, in YYYY-MM-DD format.
         */
        execute_on?: string;
      }

      export interface To {
        /**
         * The currency to send to the recipient.
         */
        currency?: string;

        /**
         * The payout method ID. Optional for OutboundPayment if recipient has default payment method. Required for OutboundTransfer.
         */
        payout_method?: string;

        /**
         * Payout method options for the PayoutIntent.
         */
        payout_method_options?: To.PayoutMethodOptions;

        /**
         * The recipient ID. Only relevant for OutboundPayment.
         */
        recipient?: string;
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
             * The preferred networks to use for this PayoutIntent.
             */
            preferred_networks: Array<BankAccount.PreferredNetwork>;
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
              | 'becs'
              | 'eft'
              | 'fedwire'
              | 'fps'
              | 'npp'
              | 'rtp'
              | 'sepa_credit'
              | 'sepa_instant'
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
    export interface PayoutIntentListParams {
      /**
       * Maximum number of objects to return. Defaults to 10. Maximum is 100.
       */
      limit?: number;
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentCancelParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentConfirmParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentFxQuoteParams {}
  }
}
