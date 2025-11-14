import {StripeObject} from './Types.js';

// this is an internal-only type; we write a user-facing one separately
type HandlerCallback = (event: any) => Promise<void>;

const KNOWN_EVENT_TYPES = new Set([
  // event-types: The beginning of the section generated from our OpenAPI spec
  'v1.billing.meter.error_report_triggered',
  'v1.billing.meter.no_meter_found',
  'v2.core.event_destination.ping',
  // event-types: The end of the section generated from our OpenAPI spec
]);
const UNKNOWN_EVENT_VIRTUAL_TYPE = 'unknown.event_notification';

export class StripeEventHandler {
  private registeredHandlers: Record<string, HandlerCallback> = {};
  private hasHandledEvent = false;

  // eslint-disable-next-line no-useless-constructor, @typescript-eslint/explicit-module-boundary-types
  constructor(private client: StripeObject, private webhookSecret: string) {}

  // these types are duplicated in the manual types
  public register(type: string, handler: HandlerCallback): this {
    if (this.hasHandledEvent) {
      throw new Error(
        'Cannot register new handlers after an event has been handled. This is indicative of a bug.'
      );
    }
    // the matched types are validated by the type system
    if (this.registeredHandlers[type]) {
      throw new Error(`Handler already registered for event type: ${type}`);
    }

    this.registeredHandlers[type] = handler;
    return this;
  }

  public registerUnknownEventNotificationHandler(
    handler: HandlerCallback
  ): this {
    this.register(UNKNOWN_EVENT_VIRTUAL_TYPE, handler);
    return this;
  }

  // these types are duplicated in the manual types
  public handle(
    rawBody: string | Buffer,
    signature: string | Buffer
  ): Promise<void> {
    this.hasHandledEvent = true;
    const event = this.client.parseEventNotification(
      rawBody,
      signature,
      this.webhookSecret
    );

    const lookupKey = KNOWN_EVENT_TYPES.has(event.type)
      ? event.type
      : UNKNOWN_EVENT_VIRTUAL_TYPE;

    const handler = this.registeredHandlers[lookupKey];
    if (handler) {
      // TODO: bind event context to client
      return handler(event);
    }

    return Promise.reject(
      new Error(`No handler registered for event type "${event.type}"`)
    );
  }
}
