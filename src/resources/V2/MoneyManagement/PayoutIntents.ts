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
   * @throws Stripe.CapabilityNotEnabledError
   * @throws Stripe.RecipientNotNotifiableError
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
   * Updates an editable PayoutIntent in the `pending` or `requires_action` state.
   * @throws Stripe.CapabilityNotEnabledError
   * @throws Stripe.RecipientNotNotifiableError
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
   * Cancels a PayoutIntent in the `pending` or `requires_action` state, or a `processing` PayoutIntent with a cancelable OutboundPayment.
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
   * Confirms a PayoutIntent in the `requires_action` state, transitioning it to `pending`.
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
   * Refreshes the FX quote for a PayoutIntent.
   */
  refreshFxQuote(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentRefreshFxQuoteParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(
        id
      )}/refresh_fx_quote`,
      params,
      options
    ) as any;
  }
  /**
   * Refreshes the recipient verification for a PayoutIntent.
   */
  refreshRecipientVerification(
    id: string,
    params?: V2.MoneyManagement.PayoutIntentRefreshRecipientVerificationParams,
    options?: RequestOptions
  ): Promise<Response<PayoutIntent>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/payout_intents/${encodeURIComponent(
        id
      )}/refresh_recipient_verification`,
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
   * Controls whether the PayoutIntent requires explicit confirmation before transitioning to `pending`.
   * Even when `automatic`, regulatory requirements may require confirmation. See [Send money with Global Payouts](https://docs.stripe.com/global-payouts/send-money) for details.
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
  latest_payout?: PayoutIntent.LatestPayout;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * Next action required for a PayoutIntent in the `requires_action` state. Populated when `status` is `requires_action`.
   */
  next_action?: PayoutIntent.NextAction;

  /**
   * Recipient notification settings for the PayoutIntent. Only applicable when the PayoutIntent creates an OutboundPayment.
   */
  recipient_notification?: PayoutIntent.RecipientNotification;

  /**
   * Recipient verification details for this PayoutIntent.
   */
  recipient_verification?: PayoutIntent.RecipientVerification;

  /**
   * Scheduling options for the payout. If omitted, the payout is scheduled for immediate execution.
   */
  schedule_options?: PayoutIntent.ScheduleOptions;

  /**
   * The description that appears on the receiving end for the payout (for example, on a bank statement).
   */
  statement_descriptor?: string;

  /**
   * Current status of the PayoutIntent.
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
     * Details about the network and options associated with this fee. Present when `type` is `network_fee`.
     */
    network_fee_details?: EstimatedFee.NetworkFeeDetails;

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
     * Maps each source currency to its exchange rate into `to_currency`.
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
     * Details about a confirmation required. Populated when `type` is `confirm`.
     */
    confirm?: NextAction.Confirm;

    /**
     * Details about a failure that requires user action. Populated when `type` is `handle_failure`.
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
     * Do not send notifications when `setting` is `none`. Use the account setting when `setting` is `configured` or omitted.
     */
    setting: RecipientNotification.Setting;
  }

  export interface RecipientVerification {
    /**
     * Closed Enum. The recipient-verification provider's match result.
     */
    match_result: RecipientVerification.MatchResult;

    /**
     * Details associated with the match result.
     */
    match_result_details: RecipientVerification.MatchResultDetails;
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
     * The payout method ID for the PayoutIntent. Optional when the PayoutIntent creates an OutboundPayment and the recipient has a default payout method. Required when the PayoutIntent creates an OutboundTransfer.
     */
    payout_method?: string;

    /**
     * Payout method options for the PayoutIntent.
     */
    payout_method_options?: To.PayoutMethodOptions;

    /**
     * The recipient ID for the PayoutIntent.
     */
    recipient?: string;
  }

  export namespace EstimatedFee {
    export interface NetworkFeeDetails {
      /**
       * The network associated with the fee.
       */
      network: NetworkFeeDetails.Network;

      /**
       * Per-network options that affect the fee.
       */
      network_options: NetworkFeeDetails.NetworkOptions;
    }

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
      | 'network_fee'
      | 'next_day_payout_fee'
      | 'real_time_payout_fee'
      | 'stablecoin_payout_fee'
      | 'stablecoin_routing_fee'
      | 'standard_payout_fee'
      | 'wire_payout_fee'
      | OtherString;

    export namespace NetworkFeeDetails {
      export type Network =
        | 'ach'
        | 'becs'
        | 'eft'
        | 'fedwire'
        | 'fps'
        | 'local'
        | 'npp'
        | 'rtp'
        | 'sepa'
        | 'sepa_instant'
        | 'swift'
        | OtherString;

      export interface NetworkOptions {
        /**
         * ACH-specific network fee options.
         */
        ach?: NetworkOptions.Ach;
      }

      export namespace NetworkOptions {
        export interface Ach {
          /**
           * Open Enum. ACH submission timing.
           */
          submission?: Ach.Submission;
        }

        export namespace Ach {
          export type Submission = 'next_day' | 'same_day' | OtherString;
        }
      }
    }
  }

  export namespace FxQuote {
    export type LockDuration = 'five_minutes' | 'none' | OtherString;

    export type LockStatus = 'active' | 'expired' | 'none' | OtherString;

    export interface Rates {
      /**
       * The exchange rate from the source currency to `to_currency`, represented as a decimal string
       * (for example, `1.1520`) to preserve the full precision of the rate.
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
       * The PayoutIntent fields that must be reviewed before confirmation.
       */
      fields_to_review?: Array<Confirm.FieldsToReview>;

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
      export type FieldsToReview =
        | 'estimated_fees'
        | 'fx_quote'
        | 'recipient_verification'
        | OtherString;

      export type Reason =
        | 'automatically_required'
        | 'manually_requested'
        | OtherString;
    }

    export namespace HandleFailure {
      export type FailureReason =
        | 'account_not_configured_as_recipient'
        | 'currency_not_supported_for_financial_account_balance'
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
        | 'payout_method_invalid'
        | 'payout_method_invalid_account_number'
        | 'payout_method_restricted'
        | 'payout_method_unsupported'
        | 'payout_method_usage_frequency_limit_exceeded'
        | 'recalled'
        | 'recipient_capability_not_active'
        | 'review_rejected'
        | 'to_destination_invalid'
        | 'unknown_failure'
        | OtherString;
    }
  }

  export namespace RecipientNotification {
    export type Setting = 'configured' | 'none';
  }

  export namespace RecipientVerification {
    export type MatchResult =
      | 'close_match'
      | 'match'
      | 'no_match'
      | 'unavailable';

    export interface MatchResultDetails {
      /**
       * The business type returned by the recipient-verification provider.
       */
      matched_business_type?: MatchResultDetails.MatchedBusinessType;

      /**
       * The account name returned by the recipient-verification provider.
       */
      matched_name?: string;

      /**
       * A message describing the match result.
       */
      message: string;

      /**
       * The business type provided for recipient verification.
       */
      provided_business_type?: MatchResultDetails.ProvidedBusinessType;

      /**
       * The name associated with the provided recipient.
       */
      provided_name: string;
    }

    export namespace MatchResultDetails {
      export type MatchedBusinessType = 'business' | 'personal';

      export type ProvidedBusinessType = 'business' | 'personal';
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
         * The preferred networks to use for this PayoutIntent.
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
          | 'becs'
          | 'eft'
          | 'fedwire'
          | 'fps'
          | 'npp'
          | 'rtp'
          | 'sepa'
          | 'sepa_credit'
          | 'sepa_instant'
          | 'swift'
          | OtherString;

        export namespace PreferredNetworkOptions {
          export interface Ach {
            /**
             * Freeform ACH addenda (max 80 characters) included in the NACHA submission.
             */
            addenda?: string;

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
       * Controls whether the PayoutIntent requires explicit confirmation before transitioning to `pending`. Defaults to `automatic`, but regulatory requirements may still require confirmation. See [Send money with Global Payouts](https://docs.stripe.com/global-payouts/send-money) for details.
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
       * Recipient notification settings for the PayoutIntent. Only applicable when the PayoutIntent creates an OutboundPayment.
       */
      recipient_notification?: PayoutIntentCreateParams.RecipientNotification;

      /**
       * Scheduling options for the payout. If omitted, the payout is scheduled for immediate execution.
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
         * The payout method ID for the PayoutIntent. Optional when the PayoutIntent creates an OutboundPayment and the recipient has a default payout method. Required when the PayoutIntent creates an OutboundTransfer.
         */
        payout_method?: string;

        /**
         * Payout method options for the PayoutIntent.
         */
        payout_method_options?: To.PayoutMethodOptions;

        /**
         * The recipient ID for the PayoutIntent.
         */
        recipient?: string;
      }

      export type ConfirmationMethod = 'automatic' | 'manual' | OtherString;

      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when `setting` is `none`. Use the account setting when `setting` is `configured` or omitted.
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
              | 'becs'
              | 'eft'
              | 'fedwire'
              | 'fps'
              | 'npp'
              | 'rtp'
              | 'sepa'
              | 'sepa_credit'
              | 'sepa_instant'
              | 'swift'
              | OtherString;

            export namespace PreferredNetworkOptions {
              export interface Ach {
                /**
                 * Freeform ACH addenda (max 80 characters) included in the NACHA submission.
                 */
                addenda?: string;

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
       * An arbitrary string attached to the PayoutIntent. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * Recipient notification settings for the PayoutIntent. Only applicable when the PayoutIntent creates an OutboundPayment.
       */
      recipient_notification?: PayoutIntentUpdateParams.RecipientNotification;

      /**
       * Scheduling options for the payout. If omitted, the payout is scheduled for immediate execution.
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
      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when `setting` is `none`. Use the account setting when `setting` is `configured` or omitted.
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
         * The payout method ID for the PayoutIntent. Optional when the PayoutIntent creates an OutboundPayment and the recipient has a default payout method. Required when the PayoutIntent creates an OutboundTransfer.
         */
        payout_method?: string;

        /**
         * Payout method options for the PayoutIntent.
         */
        payout_method_options?: To.PayoutMethodOptions;

        /**
         * The recipient ID for the PayoutIntent.
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
              | 'becs'
              | 'eft'
              | 'fedwire'
              | 'fps'
              | 'npp'
              | 'rtp'
              | 'sepa'
              | 'sepa_credit'
              | 'sepa_instant'
              | 'swift'
              | OtherString;

            export namespace PreferredNetworkOptions {
              export interface Ach {
                /**
                 * Freeform ACH addenda (max 80 characters) included in the NACHA submission.
                 */
                addenda?: string;

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
    export interface PayoutIntentRefreshFxQuoteParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface PayoutIntentRefreshRecipientVerificationParams {}
  }
}
