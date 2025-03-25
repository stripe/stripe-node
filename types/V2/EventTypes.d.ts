// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2 {
    export type Event =
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.V1BillingMeterNoMeterFoundEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressActivatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferAvailableEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitProcessingEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitQueuedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitReturnedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditAvailableEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditReturnedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitCanceledEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitPendingEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitUpdatedEvent;
  }

  namespace Stripe.Events {
    /**
     * This event occurs when there are invalid async usage events for a given meter.
     */
    export interface V1BillingMeterErrorReportTriggeredEvent
      extends V2.EventBase {
      type: 'v1.billing.meter.error_report_triggered';
      // Retrieves data specific to this event.
      data: V1BillingMeterErrorReportTriggeredEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<Billing.Meter>;
    }

    namespace V1BillingMeterErrorReportTriggeredEvent {
      export interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;

        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;

        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;

        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
      }

      namespace Data {
        export interface Reason {
          /**
           * The total error count within this window.
           */
          error_count: number;

          /**
           * The error details.
           */
          error_types: Array<Reason.ErrorType>;
        }

        namespace Reason {
          export interface ErrorType {
            /**
             * Open Enum.
             */
            code: ErrorType.Code;

            /**
             * The number of errors of this type.
             */
            error_count: number;

            /**
             * A list of sample errors of this type.
             */
            sample_errors: Array<ErrorType.SampleError>;
          }

          namespace ErrorType {
            export type Code =
              | 'archived_meter'
              | 'meter_event_customer_not_found'
              | 'meter_event_dimension_count_too_high'
              | 'meter_event_invalid_value'
              | 'meter_event_no_customer_defined'
              | 'missing_dimension_payload_keys'
              | 'no_meter'
              | 'timestamp_in_future'
              | 'timestamp_too_far_in_past';

            export interface SampleError {
              /**
               * The error message.
               */
              error_message: string;

              /**
               * The request causes the error.
               */
              request: SampleError.Request;
            }

            namespace SampleError {
              export interface Request {
                /**
                 * The request idempotency key.
                 */
                identifier: string;
              }
            }
          }
        }
      }
    }

    /**
     * This event occurs when async usage events have missing or invalid meter ids.
     */
    export interface V1BillingMeterNoMeterFoundEvent extends V2.EventBase {
      type: 'v1.billing.meter.no_meter_found';
      // Retrieves data specific to this event.
      data: V1BillingMeterNoMeterFoundEvent.Data;
    }

    namespace V1BillingMeterNoMeterFoundEvent {
      export interface Data {
        /**
         * Extra field included in the event's `data` when fetched from /v2/events.
         */
        developer_message_summary: string;

        /**
         * This contains information about why meter error happens.
         */
        reason: Data.Reason;

        /**
         * The end of the window that is encapsulated by this summary.
         */
        validation_end: string;

        /**
         * The start of the window that is encapsulated by this summary.
         */
        validation_start: string;
      }

      namespace Data {
        export interface Reason {
          /**
           * The total error count within this window.
           */
          error_count: number;

          /**
           * The error details.
           */
          error_types: Array<Reason.ErrorType>;
        }

        namespace Reason {
          export interface ErrorType {
            /**
             * Open Enum.
             */
            code: ErrorType.Code;

            /**
             * The number of errors of this type.
             */
            error_count: number;

            /**
             * A list of sample errors of this type.
             */
            sample_errors: Array<ErrorType.SampleError>;
          }

          namespace ErrorType {
            export type Code =
              | 'archived_meter'
              | 'meter_event_customer_not_found'
              | 'meter_event_dimension_count_too_high'
              | 'meter_event_invalid_value'
              | 'meter_event_no_customer_defined'
              | 'missing_dimension_payload_keys'
              | 'no_meter'
              | 'timestamp_in_future'
              | 'timestamp_too_far_in_past';

            export interface SampleError {
              /**
               * The error message.
               */
              error_message: string;

              /**
               * The request causes the error.
               */
              request: SampleError.Request;
            }

            namespace SampleError {
              export interface Request {
                /**
                 * The request idempotency key.
                 */
                identifier: string;
              }
            }
          }
        }
      }
    }

    /**
     * The FinancialAddress is now active and ready to receive funds using the credentials provided.
     */
    export interface V2MoneyManagementFinancialAddressActivatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.activated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.FinancialAddress>;
    }

    /**
     * The FinancialAddress could not be activated and can not receive funds.
     */
    export interface V2MoneyManagementFinancialAddressFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_address.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.FinancialAddress>;
    }

    /**
     * Funds from an InboundTransfer were just made available.
     */
    export interface V2MoneyManagementInboundTransferAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementInboundTransferAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    namespace V2MoneyManagementInboundTransferAvailableEvent {
      export interface Data {
        /**
         * The transaction ID of the received credit.
         */
        transaction_id: string;
      }
    }

    /**
     * An InboundTransfer failed.
     */
    export interface V2MoneyManagementInboundTransferBankDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    /**
     * An InboundTransfer is now processing.
     */
    export interface V2MoneyManagementInboundTransferBankDebitProcessingEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_processing';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    /**
     * An InboundTransfer has been queued.
     */
    export interface V2MoneyManagementInboundTransferBankDebitQueuedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_queued';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    /**
     * An InboundTransfer was returned.
     */
    export interface V2MoneyManagementInboundTransferBankDebitReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    /**
     * An InboundTransfer succeeded.
     */
    export interface V2MoneyManagementInboundTransferBankDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.inbound_transfer.bank_debit_succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.InboundTransfer>;
    }

    /**
     * The funds related to the received credit are available in your balance.
     */
    export interface V2MoneyManagementReceivedCreditAvailableEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.available';
      // Retrieves data specific to this event.
      data: V2MoneyManagementReceivedCreditAvailableEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedCredit>;
    }

    namespace V2MoneyManagementReceivedCreditAvailableEvent {
      export interface Data {
        /**
         * The transaction ID of the received credit.
         */
        transaction_id: string;
      }
    }

    /**
     * A credit was attempted to your balance and was not successful. See the status_details for more information.
     */
    export interface V2MoneyManagementReceivedCreditFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedCredit>;
    }

    /**
     * The previously received credit has been reversed, returned to the originator and deducted from your balance.
     */
    export interface V2MoneyManagementReceivedCreditReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedCredit>;
    }

    /**
     * A credit was received successfully and processed by Stripe.
     */
    export interface V2MoneyManagementReceivedCreditSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_credit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedCredit>;
    }

    /**
     * This event is sent when a received debit is canceled.
     */
    export interface V2MoneyManagementReceivedDebitCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedDebit>;
    }

    /**
     * This event is sent when a received debit fails.
     */
    export interface V2MoneyManagementReceivedDebitFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedDebit>;
    }

    /**
     * This event is sent when a ReceivedDebit is set to pending.
     */
    export interface V2MoneyManagementReceivedDebitPendingEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.pending';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedDebit>;
    }

    /**
     * This event is sent when a ReceivedDebit succeeds.
     */
    export interface V2MoneyManagementReceivedDebitSucceededEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.succeeded';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedDebit>;
    }

    /**
     * This event is sent when a ReceivedDebit is updated.
     */
    export interface V2MoneyManagementReceivedDebitUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.received_debit.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.ReceivedDebit>;
    }
  }
}
