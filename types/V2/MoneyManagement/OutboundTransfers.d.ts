// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace V2 {
      namespace MoneyManagement {
        /**
         * OutboundTransfer represents a single money movement from one FinancialAccount you own to a payout method you also own.
         */
        interface OutboundTransfer {
          /**
           * Unique identifier for the OutboundTransfer.
           */
          id: string;

          /**
           * String representing the object's type. Objects of the same type share the same value of the object field.
           */
          object: 'v2.money_management.outbound_transfer';

          /**
           * The "presentment amount" for the OutboundTransfer.
           */
          amount: Amount;

          /**
           * Returns true if the OutboundTransfer can be canceled, and false otherwise.
           */
          cancelable: boolean;

          /**
           * Time at which the OutboundTransfer was created.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          created: string;

          /**
           * Delivery options to be used to send the OutboundTransfer.
           */
          delivery_options: OutboundTransfer.DeliveryOptions | null;

          /**
           * An arbitrary string attached to the OutboundTransfer. Often useful for displaying to users.
           */
          description: string | null;

          /**
           * The date when funds are expected to arrive in the payout method. This field is not set if the payout method is in a `failed`, `canceled`, or `returned` state.
           * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
           */
          expected_arrival_date: string | null;

          /**
           * The FinancialAccount that funds were pulled from.
           */
          from: OutboundTransfer.From;

          /**
           * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
           */
          metadata: Stripe.Metadata | null;

          /**
           * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
           */
          receipt_url: string;

          /**
           * The description that appears on the receiving end for an OutboundTransfer (for example, bank statement for external bank transfer).
           */
          statement_descriptor: string;

          /**
           * Closed Enum. Current status of the OutboundTransfer: `processing`, `failed`, `posted`, `returned`, `canceled`.
           * An OutboundTransfer is `processing` if it has been created and is processing.
           * The status changes to `posted` once the OutboundTransfer has been "confirmed" and funds have left the account, or to `failed` or `canceled`.
           * If an OutboundTransfer fails to arrive at its payout method, its status will change to `returned`.
           */
          status: OutboundTransfer.Status;

          /**
           * Status details for an OutboundTransfer in a `failed` or `returned` state.
           */
          status_details: OutboundTransfer.StatusDetails | null;

          /**
           * Hash containing timestamps of when the object transitioned to a particular status.
           */
          status_transitions: OutboundTransfer.StatusTransitions | null;

          /**
           * To which payout method the OutboundTransfer was sent.
           */
          to: OutboundTransfer.To;

          /**
           * A unique identifier that can be used to track this OutboundTransfer with recipient bank. Banks might call this a “reference number” or something similar.
           */
          trace_id: OutboundTransfer.TraceId;
        }

        namespace OutboundTransfer {
          interface DeliveryOptions {
            /**
             * Open Enum. Method for bank account.
             */
            bank_account: DeliveryOptions.BankAccount | null;
          }

          namespace DeliveryOptions {
            type BankAccount = 'automatic' | 'local' | 'wire';
          }

          interface From {
            /**
             * The monetary amount debited from the sender, only set on responses.
             */
            debited: Amount;

            /**
             * The FinancialAccount that funds were pulled from.
             */
            financial_account: string;
          }

          type Status =
            | 'canceled'
            | 'failed'
            | 'posted'
            | 'processing'
            | 'returned';

          interface StatusDetails {
            /**
             * The `failed` status reason.
             */
            failed: StatusDetails.Failed | null;

            /**
             * The `returned` status reason.
             */
            returned: StatusDetails.Returned | null;
          }

          namespace StatusDetails {
            interface Failed {
              /**
               * Open Enum. The `failed` status reason.
               */
              reason: Failed.Reason;
            }

            namespace Failed {
              type Reason =
                | 'payout_method_declined'
                | 'payout_method_does_not_exist'
                | 'payout_method_expired'
                | 'payout_method_unsupported'
                | 'payout_method_usage_frequency_limit_exceeded'
                | 'unknown_failure';
            }

            interface Returned {
              /**
               * Open Enum. The `returned` status reason.
               */
              reason: Returned.Reason;
            }

            namespace Returned {
              type Reason =
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

          interface StatusTransitions {
            /**
             * Timestamp describing when an OutboundTransfer changed status to `canceled`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            canceled_at: string | null;

            /**
             * Timestamp describing when an OutboundTransfer changed status to `failed`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            failed_at: string | null;

            /**
             * Timestamp describing when an OutboundTransfer changed status to `posted`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            posted_at: string | null;

            /**
             * Timestamp describing when an OutboundTransfer changed status to `returned`.
             * Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
             */
            returned_at: string | null;
          }

          interface To {
            /**
             * The monetary amount being credited to the destination.
             */
            credited: Amount;

            /**
             * The payout method which the OutboundTransfer uses to send payout.
             */
            payout_method: string;
          }

          interface TraceId {
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
            value: string | null;
          }

          namespace TraceId {
            type Status = 'pending' | 'supported' | 'unsupported';
          }
        }
      }
    }
  }
}
