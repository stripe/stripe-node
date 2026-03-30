import {Stripe} from './stripe.core.js';
import * as Events from './resources/V2/Core/Events.js';

export interface UnhandledNotificationDetails {
  isKnownEventType: boolean;
}

type FallbackCallback = (
  event: Events.UnknownEventNotification,
  client: Stripe,
  details: UnhandledNotificationDetails
) => Promise<void>;

// this is an internal-only type; we write a user-facing one separately
type HandlerCallback = (event: any, client: any) => Promise<void>;

// event-notification-map: The beginning of the section generated from our OpenAPI spec
interface EventNotificationMap {
  'v1.billing.meter.error_report_triggered': Events.V1BillingMeterErrorReportTriggeredEventNotification;
  'v1.billing.meter.no_meter_found': Events.V1BillingMeterNoMeterFoundEventNotification;
  'v2.core.account.closed': Events.V2CoreAccountClosedEventNotification;
  'v2.core.account.created': Events.V2CoreAccountCreatedEventNotification;
  'v2.core.account.updated': Events.V2CoreAccountUpdatedEventNotification;
  'v2.core.account[configuration.customer].capability_status_updated': Events.V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEventNotification;
  'v2.core.account[configuration.customer].updated': Events.V2CoreAccountIncludingConfigurationCustomerUpdatedEventNotification;
  'v2.core.account[configuration.merchant].capability_status_updated': Events.V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEventNotification;
  'v2.core.account[configuration.merchant].updated': Events.V2CoreAccountIncludingConfigurationMerchantUpdatedEventNotification;
  'v2.core.account[configuration.recipient].capability_status_updated': Events.V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEventNotification;
  'v2.core.account[configuration.recipient].updated': Events.V2CoreAccountIncludingConfigurationRecipientUpdatedEventNotification;
  'v2.core.account[configuration.storer].capability_status_updated': Events.V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEventNotification;
  'v2.core.account[configuration.storer].updated': Events.V2CoreAccountIncludingConfigurationStorerUpdatedEventNotification;
  'v2.core.account[defaults].updated': Events.V2CoreAccountIncludingDefaultsUpdatedEventNotification;
  'v2.core.account[future_requirements].updated': Events.V2CoreAccountIncludingFutureRequirementsUpdatedEventNotification;
  'v2.core.account[identity].updated': Events.V2CoreAccountIncludingIdentityUpdatedEventNotification;
  'v2.core.account[requirements].updated': Events.V2CoreAccountIncludingRequirementsUpdatedEventNotification;
  'v2.core.account_link.returned': Events.V2CoreAccountLinkReturnedEventNotification;
  'v2.core.account_person.created': Events.V2CoreAccountPersonCreatedEventNotification;
  'v2.core.account_person.deleted': Events.V2CoreAccountPersonDeletedEventNotification;
  'v2.core.account_person.updated': Events.V2CoreAccountPersonUpdatedEventNotification;
  'v2.core.batch_job.batch_failed': Events.V2CoreBatchJobBatchFailedEventNotification;
  'v2.core.batch_job.canceled': Events.V2CoreBatchJobCanceledEventNotification;
  'v2.core.batch_job.completed': Events.V2CoreBatchJobCompletedEventNotification;
  'v2.core.batch_job.created': Events.V2CoreBatchJobCreatedEventNotification;
  'v2.core.batch_job.ready_for_upload': Events.V2CoreBatchJobReadyForUploadEventNotification;
  'v2.core.batch_job.timeout': Events.V2CoreBatchJobTimeoutEventNotification;
  'v2.core.batch_job.updated': Events.V2CoreBatchJobUpdatedEventNotification;
  'v2.core.batch_job.upload_timeout': Events.V2CoreBatchJobUploadTimeoutEventNotification;
  'v2.core.batch_job.validating': Events.V2CoreBatchJobValidatingEventNotification;
  'v2.core.batch_job.validation_failed': Events.V2CoreBatchJobValidationFailedEventNotification;
  'v2.core.event_destination.ping': Events.V2CoreEventDestinationPingEventNotification;
  'v2.core.health.event_generation_failure.resolved': Events.V2CoreHealthEventGenerationFailureResolvedEventNotification;
  'v2.money_management.adjustment.created': Events.V2MoneyManagementAdjustmentCreatedEventNotification;
  'v2.money_management.financial_account.created': Events.V2MoneyManagementFinancialAccountCreatedEventNotification;
  'v2.money_management.financial_account.updated': Events.V2MoneyManagementFinancialAccountUpdatedEventNotification;
  'v2.money_management.financial_address.activated': Events.V2MoneyManagementFinancialAddressActivatedEventNotification;
  'v2.money_management.financial_address.failed': Events.V2MoneyManagementFinancialAddressFailedEventNotification;
  'v2.money_management.inbound_transfer.available': Events.V2MoneyManagementInboundTransferAvailableEventNotification;
  'v2.money_management.inbound_transfer.bank_debit_failed': Events.V2MoneyManagementInboundTransferBankDebitFailedEventNotification;
  'v2.money_management.inbound_transfer.bank_debit_processing': Events.V2MoneyManagementInboundTransferBankDebitProcessingEventNotification;
  'v2.money_management.inbound_transfer.bank_debit_queued': Events.V2MoneyManagementInboundTransferBankDebitQueuedEventNotification;
  'v2.money_management.inbound_transfer.bank_debit_returned': Events.V2MoneyManagementInboundTransferBankDebitReturnedEventNotification;
  'v2.money_management.inbound_transfer.bank_debit_succeeded': Events.V2MoneyManagementInboundTransferBankDebitSucceededEventNotification;
  'v2.money_management.outbound_payment.canceled': Events.V2MoneyManagementOutboundPaymentCanceledEventNotification;
  'v2.money_management.outbound_payment.created': Events.V2MoneyManagementOutboundPaymentCreatedEventNotification;
  'v2.money_management.outbound_payment.failed': Events.V2MoneyManagementOutboundPaymentFailedEventNotification;
  'v2.money_management.outbound_payment.posted': Events.V2MoneyManagementOutboundPaymentPostedEventNotification;
  'v2.money_management.outbound_payment.returned': Events.V2MoneyManagementOutboundPaymentReturnedEventNotification;
  'v2.money_management.outbound_payment.updated': Events.V2MoneyManagementOutboundPaymentUpdatedEventNotification;
  'v2.money_management.outbound_transfer.canceled': Events.V2MoneyManagementOutboundTransferCanceledEventNotification;
  'v2.money_management.outbound_transfer.created': Events.V2MoneyManagementOutboundTransferCreatedEventNotification;
  'v2.money_management.outbound_transfer.failed': Events.V2MoneyManagementOutboundTransferFailedEventNotification;
  'v2.money_management.outbound_transfer.posted': Events.V2MoneyManagementOutboundTransferPostedEventNotification;
  'v2.money_management.outbound_transfer.returned': Events.V2MoneyManagementOutboundTransferReturnedEventNotification;
  'v2.money_management.outbound_transfer.updated': Events.V2MoneyManagementOutboundTransferUpdatedEventNotification;
  'v2.money_management.payout_method.created': Events.V2MoneyManagementPayoutMethodCreatedEventNotification;
  'v2.money_management.payout_method.updated': Events.V2MoneyManagementPayoutMethodUpdatedEventNotification;
  'v2.money_management.received_credit.available': Events.V2MoneyManagementReceivedCreditAvailableEventNotification;
  'v2.money_management.received_credit.failed': Events.V2MoneyManagementReceivedCreditFailedEventNotification;
  'v2.money_management.received_credit.returned': Events.V2MoneyManagementReceivedCreditReturnedEventNotification;
  'v2.money_management.received_credit.succeeded': Events.V2MoneyManagementReceivedCreditSucceededEventNotification;
  'v2.money_management.received_debit.canceled': Events.V2MoneyManagementReceivedDebitCanceledEventNotification;
  'v2.money_management.received_debit.failed': Events.V2MoneyManagementReceivedDebitFailedEventNotification;
  'v2.money_management.received_debit.pending': Events.V2MoneyManagementReceivedDebitPendingEventNotification;
  'v2.money_management.received_debit.succeeded': Events.V2MoneyManagementReceivedDebitSucceededEventNotification;
  'v2.money_management.received_debit.updated': Events.V2MoneyManagementReceivedDebitUpdatedEventNotification;
  'v2.money_management.transaction.created': Events.V2MoneyManagementTransactionCreatedEventNotification;
  'v2.money_management.transaction.updated': Events.V2MoneyManagementTransactionUpdatedEventNotification;
}
// event-notification-map: The end of the section generated from our OpenAPI spec

// most languages can check if we have an UnknownEventNotification at runtime
// but JS only has interfaces so we fall back to a string match to determine known events
const KNOWN_EVENT_TYPES = new Set([
  // event-types: The beginning of the section generated from our OpenAPI spec
  'v1.billing.meter.error_report_triggered',
  'v1.billing.meter.no_meter_found',
  'v2.core.account.closed',
  'v2.core.account.created',
  'v2.core.account.updated',
  'v2.core.account[configuration.customer].capability_status_updated',
  'v2.core.account[configuration.customer].updated',
  'v2.core.account[configuration.merchant].capability_status_updated',
  'v2.core.account[configuration.merchant].updated',
  'v2.core.account[configuration.recipient].capability_status_updated',
  'v2.core.account[configuration.recipient].updated',
  'v2.core.account[configuration.storer].capability_status_updated',
  'v2.core.account[configuration.storer].updated',
  'v2.core.account[defaults].updated',
  'v2.core.account[future_requirements].updated',
  'v2.core.account[identity].updated',
  'v2.core.account[requirements].updated',
  'v2.core.account_link.returned',
  'v2.core.account_person.created',
  'v2.core.account_person.deleted',
  'v2.core.account_person.updated',
  'v2.core.batch_job.batch_failed',
  'v2.core.batch_job.canceled',
  'v2.core.batch_job.completed',
  'v2.core.batch_job.created',
  'v2.core.batch_job.ready_for_upload',
  'v2.core.batch_job.timeout',
  'v2.core.batch_job.updated',
  'v2.core.batch_job.upload_timeout',
  'v2.core.batch_job.validating',
  'v2.core.batch_job.validation_failed',
  'v2.core.event_destination.ping',
  'v2.core.health.event_generation_failure.resolved',
  'v2.money_management.adjustment.created',
  'v2.money_management.financial_account.created',
  'v2.money_management.financial_account.updated',
  'v2.money_management.financial_address.activated',
  'v2.money_management.financial_address.failed',
  'v2.money_management.inbound_transfer.available',
  'v2.money_management.inbound_transfer.bank_debit_failed',
  'v2.money_management.inbound_transfer.bank_debit_processing',
  'v2.money_management.inbound_transfer.bank_debit_queued',
  'v2.money_management.inbound_transfer.bank_debit_returned',
  'v2.money_management.inbound_transfer.bank_debit_succeeded',
  'v2.money_management.outbound_payment.canceled',
  'v2.money_management.outbound_payment.created',
  'v2.money_management.outbound_payment.failed',
  'v2.money_management.outbound_payment.posted',
  'v2.money_management.outbound_payment.returned',
  'v2.money_management.outbound_payment.updated',
  'v2.money_management.outbound_transfer.canceled',
  'v2.money_management.outbound_transfer.created',
  'v2.money_management.outbound_transfer.failed',
  'v2.money_management.outbound_transfer.posted',
  'v2.money_management.outbound_transfer.returned',
  'v2.money_management.outbound_transfer.updated',
  'v2.money_management.payout_method.created',
  'v2.money_management.payout_method.updated',
  'v2.money_management.received_credit.available',
  'v2.money_management.received_credit.failed',
  'v2.money_management.received_credit.returned',
  'v2.money_management.received_credit.succeeded',
  'v2.money_management.received_debit.canceled',
  'v2.money_management.received_debit.failed',
  'v2.money_management.received_debit.pending',
  'v2.money_management.received_debit.succeeded',
  'v2.money_management.received_debit.updated',
  'v2.money_management.transaction.created',
  'v2.money_management.transaction.updated',
  // event-types: The end of the section generated from our OpenAPI spec
]);

export class StripeEventNotificationHandler {
  private registeredHandlers: Record<string, HandlerCallback> = {};
  private hasHandledEvent = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private client: Stripe,
    private webhookSecret: string,
    private fallbackCallback: FallbackCallback
  ) {}

  // these types are duplicated in the manual types
  public on<T extends keyof EventNotificationMap>(
    type: T,
    callback: (event: EventNotificationMap[T], client: Stripe) => Promise<void>
  ): this;
  // public on(
  //   type: string,
  //   callback: (
  //     event: Events.EventNotificationBase,
  //     client: Stripe
  //   ) => Promise<void>
  // ): this;
  public on(type: string, callback: HandlerCallback): this {
    if (this.hasHandledEvent) {
      throw new Error(
        'Cannot register new handlers after an event has been handled. This is indicative of a bug.'
      );
    }
    // the matched types are validated by the type system
    if (this.registeredHandlers[type]) {
      throw new Error(`Handler already registered for event type: ${type}`);
    }

    this.registeredHandlers[type] = callback;
    return this;
  }

  public registeredEventTypes(): string[] {
    const keys = Object.keys(this.registeredHandlers);
    keys.sort();
    return keys;
  }

  public async handle(
    // these types are duplicated in the manual types, so they're just here for internal use
    rawBody: string | Buffer,
    signature: string | Buffer
  ): Promise<void> {
    // we're not worried about thread safety here because we expect callbacks will be registered synchronously on app startup
    this.hasHandledEvent = true;
    const event = this.client.parseEventNotification(
      rawBody,
      signature,
      this.webhookSecret
    );

    // Create a new client with the event's context instead of modifying the shared client
    // This ensures thread-safety when processing webhooks in parallel
    // We create a shallow copy and override _api with a new object containing the event context
    // This reuses expensive resources like httpClient (Flyweight pattern)
    const eventClient = Object.create(Object.getPrototypeOf(this.client));
    Object.assign(eventClient, this.client);
    eventClient._api = {
      ...this.client._api,
      stripeContext: event.context,
    };

    const handler = this.registeredHandlers[event.type];
    if (handler) {
      return await handler(event, eventClient);
    } else {
      return await this.fallbackCallback(
        event as Events.UnknownEventNotification,
        eventClient,
        {
          isKnownEventType: KNOWN_EVENT_TYPES.has(event.type),
        }
      );
    }
  }
}
