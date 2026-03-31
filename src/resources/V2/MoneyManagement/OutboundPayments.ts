// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {MetadataParam, Metadata} from '../../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class OutboundPaymentResource extends StripeResource {
  /**
   * Returns a list of OutboundPayments that match the provided filters.
   */
  list(
    params?: V2.MoneyManagement.OutboundPaymentListParams,
    options?: RequestOptions
  ): ApiListPromise<OutboundPayment>;
  list(options?: RequestOptions): ApiListPromise<OutboundPayment>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/outbound_payments',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates an OutboundPayment.
   * @throws Stripe.InsufficientFundsError
   * @throws Stripe.FeatureNotEnabledError
   * @throws Stripe.QuotaExceededError
   * @throws Stripe.RecipientNotNotifiableError
   */
  create(
    params: V2.MoneyManagement.OutboundPaymentCreateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/outbound_payments',
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing OutboundPayment by passing the unique OutboundPayment ID from either the OutboundPayment create or list response.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.OutboundPaymentRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/outbound_payments/{id}',
    }).call(this, ...args);
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
  ): Promise<Response<OutboundPayment>>;
  cancel(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  cancel(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/outbound_payments/{id}/cancel',
    }).call(this, ...args);
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
   * The "presentment amount" for the OutboundPayment.
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
   * Delivery options to be used to send the OutboundPayment.
   */
  delivery_options?: V2.MoneyManagement.OutboundPayment.DeliveryOptions;

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
  from: V2.MoneyManagement.OutboundPayment.From;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * The quote for this OutboundPayment. Only required for countries with regulatory mandates to display fee estimates before OutboundPayment creation.
   */
  outbound_payment_quote?: string;

  /**
   * The purpose of the OutboundPayment.
   */
  purpose?: 'payroll';

  /**
   * A link to the Stripe-hosted receipt for this OutboundPayment. The receipt link remains active for 60 days from the OutboundPayment creation date. After this period, the link will expire and the receipt url value will be null.
   */
  receipt_url?: string;

  /**
   * Details about the OutboundPayment notification settings for recipient.
   */
  recipient_notification: V2.MoneyManagement.OutboundPayment.RecipientNotification;

  /**
   * The recipient verification id for this OutboundPayment. Only required for countries with regulatory mandates to verify recipient names before OutboundPayment creation.
   */
  recipient_verification?: string;

  /**
   * The description that appears on the receiving end for an OutboundPayment (for example, bank statement for external bank transfer). It will default to `STRIPE` if not set on the account settings.
   */
  statement_descriptor: string;

  /**
   * Closed Enum. Current status of the OutboundPayment: `processing`, `failed`, `posted`, `returned`, `canceled`.
   * An OutboundPayment is `processing` if it has been created and is processing.
   * The status changes to `posted` once the OutboundPayment has been "confirmed" and funds have left the account, or to `failed` or `canceled`.
   * If an OutboundPayment fails to arrive at its payout method, its status will change to `returned`.
   */
  status: V2.MoneyManagement.OutboundPayment.Status;

  /**
   * Status details for an OutboundPayment in a `failed` or `returned` state.
   */
  status_details?: V2.MoneyManagement.OutboundPayment.StatusDetails;

  /**
   * Hash containing timestamps of when the object transitioned to a particular status.
   */
  status_transitions?: V2.MoneyManagement.OutboundPayment.StatusTransitions;

  /**
   * To which payout method the OutboundPayment was sent.
   */
  to: V2.MoneyManagement.OutboundPayment.To;

  /**
   * A unique identifier that can be used to track this OutboundPayment with recipient bank. Banks might call this a "reference number" or something similar.
   */
  trace_id: V2.MoneyManagement.OutboundPayment.TraceId;

  /**
   * Information to track this OutboundPayment with the recipient bank.
   */
  tracking_details?: V2.MoneyManagement.OutboundPayment.TrackingDetails;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace OutboundPayment {
      export interface DeliveryOptions {
        /**
         * Open Enum. Speed of the payout.
         */
        speed?: DeliveryOptions.Speed;

        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;

        /**
         * Delivery options for paper check.
         */
        paper_check?: DeliveryOptions.PaperCheck;
      }

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
         * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
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
        payout_method: string;

        /**
         * To which account the OutboundPayment is sent.
         */
        recipient: string;
      }

      export interface TraceId {
        /**
         * Possible values are `pending`, `supported`, and `unsupported`. Initially set to `pending`, it changes to
         * `supported` when the recipient bank provides a trace ID, or `unsupported` if the recipient bank doesn't support it.
         * Note that this status may not align with the OutboundPayment or OutboundTransfer status and can remain `pending`
         * even after the payment or transfer is posted.
         */
        status: TraceId.Status;

        /**
         * The trace ID value if `trace_id.status` is `supported`, otherwise empty.
         */
        value?: string;
      }

      export interface TrackingDetails {
        /**
         * Paper check tracking details.
         */
        paper_check?: TrackingDetails.PaperCheck;
      }

      export namespace DeliveryOptions {
        export type Speed = 'instant' | 'next_business_day' | 'standard';

        export type BankAccount = 'automatic' | 'local' | 'wire';

        export interface PaperCheck {
          /**
           * Memo printed on the memo field of the check.
           */
          memo?: string;

          /**
           * Open Enum. Shipping speed of the paper check.
           */
          shipping_speed: PaperCheck.ShippingSpeed;

          /**
           * Signature for the paper check.
           */
          signature: string;
        }

        export namespace PaperCheck {
          export type ShippingSpeed = 'priority' | 'standard';
        }
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

        export interface Returned {
          /**
           * Open Enum. The `returned` status reason.
           */
          reason: Returned.Reason;
        }

        export namespace Failed {
          export type Reason =
            | 'payout_method_declined'
            | 'payout_method_does_not_exist'
            | 'payout_method_expired'
            | 'payout_method_unsupported'
            | 'payout_method_usage_frequency_limit_exceeded'
            | 'unknown_failure';
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
            | 'unknown_failure';
        }
      }

      export namespace TraceId {
        export type Status = 'pending' | 'supported' | 'unsupported';
      }

      export namespace TrackingDetails {
        export interface PaperCheck {
          /**
           * Open Enum. Carrier of the paper check.
           */
          carrier: PaperCheck.Carrier;

          /**
           * Check number.
           */
          check_number: string;

          /**
           * Postal code of the latest tracking update.
           */
          current_postal_code: string;

          /**
           * Mailing address of the paper check.
           */
          mailing_address: PaperCheck.MailingAddress;

          /**
           * Tracking number for the check.
           */
          tracking_number: string;

          /**
           * Open Enum. Tracking status of the paper check.
           */
          tracking_status: PaperCheck.TrackingStatus;

          /**
           * When the tracking details were last updated.
           */
          updated_at: string;
        }

        export namespace PaperCheck {
          export type Carrier = 'fedex' | 'usps';

          export interface MailingAddress {
            /**
             * City, district, suburb, town, or village.
             */
            city?: string;

            /**
             * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
             */
            country?: string;

            /**
             * Address line 1 (e.g., street, PO Box, or company name).
             */
            line1?: string;

            /**
             * Address line 2 (e.g., apartment, suite, unit, or building).
             */
            line2?: string;

            /**
             * ZIP or postal code.
             */
            postal_code?: string;

            /**
             * State, county, province, or region.
             */
            state?: string;

            /**
             * Town or district.
             */
            town?: string;
          }

          export type TrackingStatus = 'delivered' | 'in_transit' | 'mailed';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface OutboundPaymentCreateParams {
      /**
       * The "presentment amount" to be sent to the recipient.
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
       * Delivery options to be used to send the OutboundPayment.
       */
      delivery_options?: OutboundPaymentCreateParams.DeliveryOptions;

      /**
       * An arbitrary string attached to the OutboundPayment. Often useful for displaying to users.
       */
      description?: string;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata?: MetadataParam;

      /**
       * The quote for this OutboundPayment. Only required for countries with regulatory mandates to display fee estimates before OutboundPayment creation.
       */
      outbound_payment_quote?: string;

      /**
       * The purpose of the OutboundPayment.
       */
      purpose?: 'payroll';

      /**
       * Details about the notification settings for the OutboundPayment recipient.
       */
      recipient_notification?: OutboundPaymentCreateParams.RecipientNotification;

      /**
       * The recipient verification id for this OutboundPayment. Only required for countries with regulatory mandates to verify recipient names before OutboundPayment creation.
       */
      recipient_verification?: string;

      /**
       * The description that appears on the receiving end for an OutboundPayment (for example, on a bank statement). Must be between 3 and 22 characters long, and not contain profanity.
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
         * - destination supports multiple currencies and one of the currencies matches the FA currency
         * - destination supports multiple currencies and one of the currencies matches the presentment currency
         * Note - when both FA currency and presentment currency are supported, we pick the FA currency to minimize FX.
         */
        currency?: string;

        /**
         * The payout method which the OutboundPayment uses to send payout.
         */
        payout_method?: string;

        /**
         * To which account the OutboundPayment is sent.
         */
        recipient: string;
      }

      export interface DeliveryOptions {
        /**
         * Open Enum. Speed of the payout.
         */
        speed?: DeliveryOptions.Speed;

        /**
         * Open Enum. Method for bank account.
         */
        bank_account?: DeliveryOptions.BankAccount;

        /**
         * Delivery options for paper check.
         */
        paper_check?: DeliveryOptions.PaperCheck;
      }

      export interface RecipientNotification {
        /**
         * Closed Enum. Configuration option to enable or disable notifications to recipients.
         * Do not send notifications when setting is NONE. Default to account setting when setting is CONFIGURED or not set.
         */
        setting: RecipientNotification.Setting;
      }

      export namespace DeliveryOptions {
        export type Speed = 'instant' | 'next_business_day' | 'standard';

        export type BankAccount = 'automatic' | 'local' | 'wire';

        export interface PaperCheck {
          /**
           * Memo printed on the memo field of the check.
           */
          memo?: string;

          /**
           * Open Enum. Shipping speed of the paper check. Defaults to standard.
           */
          shipping_speed?: PaperCheck.ShippingSpeed;

          /**
           * Signature for the paper check.
           */
          signature: string;
        }

        export namespace PaperCheck {
          export type ShippingSpeed = 'priority' | 'standard';
        }
      }

      export namespace RecipientNotification {
        export type Setting = 'configured' | 'none';
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
       * Filter for objects created at the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created?: string;

      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lte?: string;

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
