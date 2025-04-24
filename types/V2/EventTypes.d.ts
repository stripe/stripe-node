// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe.V2 {
    export type Event =
      | Stripe.Events.V2CoreAccountIncludingRequirementsUpdatedEvent
      | Stripe.Events.V2CoreAccountLinkCompletedEvent
      | Stripe.Events.V2CoreAccountClosedEvent
      | Stripe.Events.V2CoreAccountCreatedEvent
      | Stripe.Events.V2CoreAccountUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingDefaultsUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingIdentityUpdatedEvent
      | Stripe.Events.V2CoreAccountPersonCreatedEvent
      | Stripe.Events.V2CoreAccountPersonDeletedEvent
      | Stripe.Events.V2CoreAccountPersonUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      | Stripe.Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      | Stripe.Events.V2MoneyManagementAdjustmentCreatedEvent
      | Stripe.Events.V1BillingMeterErrorReportTriggeredEvent
      | Stripe.Events.V1BillingMeterNoMeterFoundEvent
      | Stripe.Events.V2MoneyManagementFinancialAccountCreatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAccountUpdatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressActivatedEvent
      | Stripe.Events.V2MoneyManagementFinancialAddressFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferAvailableEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitFailedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitProcessingEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitQueuedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitReturnedEvent
      | Stripe.Events.V2MoneyManagementInboundTransferBankDebitSucceededEvent
      | Stripe.Events.V2CoreEventDestinationPingEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentCanceledEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentCreatedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentFailedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentPostedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentReturnedEvent
      | Stripe.Events.V2MoneyManagementOutboundPaymentUpdatedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferCanceledEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferCreatedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferFailedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferPostedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferReturnedEvent
      | Stripe.Events.V2MoneyManagementOutboundTransferUpdatedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditAvailableEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditReturnedEvent
      | Stripe.Events.V2MoneyManagementReceivedCreditSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitCanceledEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitFailedEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitPendingEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitSucceededEvent
      | Stripe.Events.V2MoneyManagementReceivedDebitUpdatedEvent
      | Stripe.Events.V2MoneyManagementTransactionCreatedEvent
      | Stripe.Events.V2MoneyManagementTransactionUpdatedEvent;
  }

  namespace Stripe.Events {
    /**
     * This event occurs when the account's requirements are updated.
     */
    export interface V2CoreAccountIncludingRequirementsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[requirements].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * The generated account link has been completed.
     */
    export interface V2CoreAccountLinkCompletedEvent extends V2.EventBase {
      type: 'v2.core.account_link.completed';
      // Retrieves data specific to this event.
      data: V2CoreAccountLinkCompletedEvent.Data;
    }

    namespace V2CoreAccountLinkCompletedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;

        /**
         * Configurations on the Account that was onboarded via the account link.
         */
        configurations: Array<'recipient'>;

        /**
         * Open Enum. The use case type of the account link that has been completed.
         */
        use_case: Data.UseCase;
      }

      namespace Data {
        export type UseCase = 'account_onboarding' | 'account_update';
      }
    }

    /**
     * This event occurs when an account is closed.
     */
    export interface V2CoreAccountClosedEvent extends V2.EventBase {
      type: 'v2.core.account.closed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * This event occurs when an account is created.
     */
    export interface V2CoreAccountCreatedEvent extends V2.EventBase {
      type: 'v2.core.account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * This event occurs when an account is updated.
     */
    export interface V2CoreAccountUpdatedEvent extends V2.EventBase {
      type: 'v2.core.account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * This event occurs when account defaults are created or updated.
     */
    export interface V2CoreAccountIncludingDefaultsUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[defaults].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * The status of a customer config capability was updated.
     */
    export interface V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    namespace V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: 'automatic_indirect_tax';
      }
    }

    /**
     * A customer config was updated.
     */
    export interface V2CoreAccountIncludingConfigurationCustomerUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.customer].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * This event occurs when identity is updated.
     */
    export interface V2CoreAccountIncludingIdentityUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[identity].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * This event occurs when a person is created.
     */
    export interface V2CoreAccountPersonCreatedEvent extends V2.EventBase {
      type: 'v2.core.account_person.created';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonCreatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }

    namespace V2CoreAccountPersonCreatedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * This event occurs when a person is deleted.
     */
    export interface V2CoreAccountPersonDeletedEvent extends V2.EventBase {
      type: 'v2.core.account_person.deleted';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonDeletedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }

    namespace V2CoreAccountPersonDeletedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * This event occurs when a person is updated.
     */
    export interface V2CoreAccountPersonUpdatedEvent extends V2.EventBase {
      type: 'v2.core.account_person.updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountPersonUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Person>;
    }

    namespace V2CoreAccountPersonUpdatedEvent {
      export interface Data {
        /**
         * The ID of the v2 account.
         */
        account_id: string;
      }
    }

    /**
     * The status of a merchant config capability was updated.
     */
    export interface V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    namespace V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'ach_debit_payments'
          | 'acss_debit_payments'
          | 'affirm_payments'
          | 'afterpay_clearpay_payments'
          | 'alma_payments'
          | 'amazon_pay_payments'
          | 'au_becs_debit_payments'
          | 'bacs_debit_payments'
          | 'bancontact_payments'
          | 'blik_payments'
          | 'boleto_payments'
          | 'card_payments'
          | 'cartes_bancaires_payments'
          | 'cashapp_payments'
          | 'eps_payments'
          | 'fpx_payments'
          | 'gb_bank_transfer_payments'
          | 'grabpay_payments'
          | 'ideal_payments'
          | 'jcb_payments'
          | 'jp_bank_transfer_payments'
          | 'kakao_pay_payments'
          | 'klarna_payments'
          | 'konbini_payments'
          | 'kr_card_payments'
          | 'link_payments'
          | 'mobilepay_payments'
          | 'multibanco_payments'
          | 'mx_bank_transfer_payments'
          | 'naver_pay_payments'
          | 'oxxo_payments'
          | 'p24_payments'
          | 'payco_payments'
          | 'paynow_payments'
          | 'stripe_balance.payouts'
          | 'pay_by_bank_payments'
          | 'promptpay_payments'
          | 'revolut_pay_payments'
          | 'samsung_pay_payments'
          | 'sepa_bank_transfer_payments'
          | 'sepa_debit_payments'
          | 'swish_payments'
          | 'twint_payments'
          | 'us_bank_transfer_payments'
          | 'zip_payments';
      }
    }

    /**
     * A merchant config was updated.
     */
    export interface V2CoreAccountIncludingConfigurationMerchantUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.merchant].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * The status of a recipient config capability was updated.
     */
    export interface V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].capability_status_updated';
      // Retrieves data specific to this event.
      data: V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.Data;
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    namespace V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent {
      export interface Data {
        /**
         * Open Enum. The capability which had its status updated.
         */
        updated_capability: Data.UpdatedCapability;
      }

      namespace Data {
        export type UpdatedCapability =
          | 'bank_accounts.local'
          | 'bank_accounts.wire'
          | 'cards'
          | 'stripe_balance.payouts'
          | 'stripe_balance.stripe_transfers'
          | 'stripe.transfers';
      }
    }

    /**
     * A recipient config was updated.
     */
    export interface V2CoreAccountIncludingConfigurationRecipientUpdatedEvent
      extends V2.EventBase {
      type: 'v2.core.account[configuration.recipient].updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.Core.Account>;
    }

    /**
     * Occurs when an Adjustment is created.
     */
    export interface V2MoneyManagementAdjustmentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.adjustment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Adjustment>;
    }

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
     * Occurs when a FinancialAccount is created.
     */
    export interface V2MoneyManagementFinancialAccountCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
    }

    /**
     * Occurs when a FinancialAccount is updated.
     */
    export interface V2MoneyManagementFinancialAccountUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.financial_account.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAccount>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.FinancialAddress>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.InboundTransfer>;
    }

    /**
     * A ping event used to test the connection to an event destination.
     */
    export interface V2CoreEventDestinationPingEvent extends V2.EventBase {
      type: 'v2.core.event_destination.ping';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.EventDestination>;
    }

    /**
     * An OutboundPayment has transitioned into the canceled state.
     */
    export interface V2MoneyManagementOutboundPaymentCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * A new OutboundPayment has been created.
     */
    export interface V2MoneyManagementOutboundPaymentCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * An OutboundPayment has transitioned into the failed state.
     */
    export interface V2MoneyManagementOutboundPaymentFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * An OutboundPayment has transitioned into the posted state.
     */
    export interface V2MoneyManagementOutboundPaymentPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * An OutboundPayment has transitioned into the returned state.
     */
    export interface V2MoneyManagementOutboundPaymentReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * Event that is emitted every time an Outbound Payment is updated.
     */
    export interface V2MoneyManagementOutboundPaymentUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_payment.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundPayment>;
    }

    /**
     * An OutboundTransfer has transitioned into the canceled state.
     */
    export interface V2MoneyManagementOutboundTransferCanceledEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.canceled';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }

    /**
     * A new OutboundTransfer has been created.
     */
    export interface V2MoneyManagementOutboundTransferCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }

    /**
     * An OutboundTransfer has transitioned into the failed state.
     */
    export interface V2MoneyManagementOutboundTransferFailedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.failed';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }

    /**
     * An OutboundTransfer has transitioned into the posted state.
     */
    export interface V2MoneyManagementOutboundTransferPostedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.posted';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }

    /**
     * An OutboundTransfer has transitioned into the returned state.
     */
    export interface V2MoneyManagementOutboundTransferReturnedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.returned';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
    }

    /**
     * Event that is emitted every time an Outbound Transfer is updated.
     */
    export interface V2MoneyManagementOutboundTransferUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.outbound_transfer.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.OutboundTransfer>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedCredit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
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
      fetchRelatedObject(): Promise<V2.MoneyManagement.ReceivedDebit>;
    }

    /**
     * Occurs when a Transaction is created.
     */
    export interface V2MoneyManagementTransactionCreatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.created';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }

    /**
     * Occurs when a Transaction is updated.
     */
    export interface V2MoneyManagementTransactionUpdatedEvent
      extends V2.EventBase {
      type: 'v2.money_management.transaction.updated';
      // Object containing the reference to API resource relevant to the event.
      related_object: Event.RelatedObject;
      // Retrieves the object associated with the event.
      fetchRelatedObject(): Promise<V2.MoneyManagement.Transaction>;
    }
  }
}
