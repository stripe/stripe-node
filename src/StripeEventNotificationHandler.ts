import {StripeObject} from './Types.js';

// this is an internal-only type; we write a user-facing one separately
type HandlerCallback = (event: any, client: any) => Promise<void>;

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
    private client: StripeObject,
    private webhookSecret: string,
    private fallbackCallback: (
      event: any,
      client: any,
      details: any
    ) => Promise<void>
  ) {}

  // these types are duplicated in the manual types
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
      return await this.fallbackCallback(event, eventClient, {
        isKnownEventType: KNOWN_EVENT_TYPES.has(event.type),
      });
    }
  }
}
