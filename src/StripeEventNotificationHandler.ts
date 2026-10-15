import {Stripe} from './stripe.core.js';
import {V2} from './resources/V2/index.js';
import {WebhookHeader, WebhookPayload} from './Webhooks.js';

export interface UnhandledNotificationDetails {
  isKnownEventType: boolean;
}

export type FallbackCallback = (
  event: V2.Core.EventNotification,
  client: Stripe,
  details: UnhandledNotificationDetails
) => Promise<void>;

export type PreHandleCallback = (
  event: V2.Core.EventNotification,
  client: Stripe
) => Promise<boolean>;

// this is an internal-only type; we write a user-facing one separately
type HandlerCallback = (event: any, client: any) => Promise<void>;

// Distribute over T so an unknown member of a union gets the fallback.
type NotificationForType<T extends string> = T extends string
  ? [Extract<V2.Core.EventNotification, {type: T}>] extends [never]
    ? V2.Core.EventNotification
    : Extract<V2.Core.EventNotification, {type: T}>
  : never;

// most languages can check if we have an UnknownEventNotification at runtime
// but JS only has interfaces so we fall back to a string match to determine known events
const KNOWN_EVENT_TYPES = new Set<string>([
  // event-types: The beginning of the section generated from our OpenAPI spec
  // event-types: The end of the section generated from our OpenAPI spec
]);

/**
 * Shared registration and dispatch machinery for the two handlers below.
 *
 * Deliberately does not declare `handle`, and is not exported. TypeScript won't
 * let a subclass add a required parameter to an inherited method, so a verifying
 * handler cannot extend a non-verifying one (or vice versa) without either
 * loosening a signature or suppressing the error. Making them siblings lets each
 * declare its own exact `handle` while sharing everything else.
 */
class BaseEventNotificationHandler {
  private registeredHandlers: Record<string, HandlerCallback> = {};
  private preHandleCallback: PreHandleCallback | null = null;
  protected hasHandledEvent = false;

  // the body is empty but the parameter properties are not, so the lint is ignorable
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected client: Stripe,
    private fallbackCallback: FallbackCallback
  ) {}

  // these types are duplicated in the manual types
  public on<T extends string>(
    type: T,
    callback: (event: NotificationForType<T>, client: Stripe) => Promise<void>
  ): this;
  public on(type: string, callback: HandlerCallback): this {
    this.assertCanRegister();
    // the matched types are validated by the type system
    if (this.registeredHandlers[type]) {
      throw new Error(
        `Callback for event type "${type}" is already registered.`
      );
    }

    this.registeredHandlers[type] = callback;
    return this;
  }

  /**
   * Callbacks are expected to be registered once on startup, so registering
   * anything after handling has begun indicates a bug.
   */
  private assertCanRegister(): void {
    if (this.hasHandledEvent) {
      throw new Error(
        'Cannot register new callbacks after an event has been handled. This is indicative of a bug.'
      );
    }
  }

  /**
   * Registers a function that will be run before any event-specific callbacks. A useful place to store event-agnostic logic, such as logging or checking for [duplicate event deliveries](https://docs.stripe.com/webhooks#handle-duplicate-events).
   *
   * Returning `true` causes handling to continue as normal; returning `false` returns from `.handle()` immediately, so neither the registered callback nor the fallback callback are called.
   */
  public preHandle(callback: PreHandleCallback): this {
    this.assertCanRegister();
    if (this.preHandleCallback) {
      throw new Error('A preHandle callback is already registered');
    }

    this.preHandleCallback = callback;
    return this;
  }

  public registeredEventTypes(): string[] {
    const keys = Object.keys(this.registeredHandlers);
    keys.sort();
    return keys;
  }

  protected async dispatchEvent(
    event: V2.Core.EventNotification
  ): Promise<void> {
    const eventClient = this.client.withStripeContext(event.context);

    if (
      this.preHandleCallback &&
      !(await this.preHandleCallback(event, eventClient))
    ) {
      return;
    }

    const handler = this.registeredHandlers[event.type];
    if (handler) {
      return await handler(event, eventClient);
    } else {
      return await this.fallbackCallback(
        event as V2.Core.EventNotification,
        eventClient,
        {
          isKnownEventType: KNOWN_EVENT_TYPES.has(event.type),
        }
      );
    }
  }
}

export class StripeEventNotificationHandler extends BaseEventNotificationHandler {
  constructor(
    client: Stripe,
    private webhookSecret: string,
    fallbackCallback: FallbackCallback
  ) {
    super(client, fallbackCallback);
    if (!webhookSecret) {
      throw new Error('webhookSecret must be a non-empty string');
    }
  }

  static withoutVerification(
    client: Stripe,
    fallbackCallback: FallbackCallback
  ): StripeEventNotificationHandlerWithoutVerification {
    return new StripeEventNotificationHandlerWithoutVerification(
      client,
      fallbackCallback
    );
  }

  public async handle(
    rawBody: WebhookPayload,
    signature: WebhookHeader
  ): Promise<void> {
    // set before parsing, so that even a failed parse locks out registration.
    // we're not worried about thread safety here because we expect callbacks will be registered synchronously on app startup
    this.hasHandledEvent = true;

    return await this.dispatchEvent(
      await this.client.parseEventNotificationAsync(
        rawBody,
        signature,
        this.webhookSecret
      )
    );
  }
}

/**
 * A variant of StripeEventNotificationHandler that parses events without
 * verifying webhook signatures. Intended for pre-authenticated channels
 * like AWS EventBridge or Azure Event Grid.
 *
 * Prefer StripeEventNotificationHandler.withoutVerification() or
 * client.notificationHandlerWithoutVerification() to construct one.
 */
export class StripeEventNotificationHandlerWithoutVerification extends BaseEventNotificationHandler {
  public async handle(rawBody: WebhookPayload): Promise<void> {
    this.hasHandledEvent = true;

    return await this.dispatchEvent(
      this.client.parseEventNotificationWithoutVerification(rawBody)
    );
  }
}
