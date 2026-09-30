import {Stripe} from './stripe.core.js';
import * as Events from './resources/V2/Core/Events.js';
import {WebhookHeader, WebhookPayload} from './Webhooks.js';

export interface UnhandledNotificationDetails {
  isKnownEventType: boolean;
}

export type FallbackCallback = (
  event: Events.UnknownEventNotification,
  client: Stripe,
  details: UnhandledNotificationDetails
) => Promise<void>;

export type PreHandleCallback = (
  event: Stripe.V2.Core.EventNotification,
  client: Stripe
) => Promise<boolean>;

// this is an internal-only type; we write a user-facing one separately
type HandlerCallback = (event: any, client: any) => Promise<void>;

// most languages can check if we have an UnknownEventNotification at runtime
// but JS only has interfaces so we fall back to a string match to determine known events
const KNOWN_EVENT_TYPES = new Set([
  // event-types: The beginning of the section generated from our OpenAPI spec
  'v1.account.application.authorized',
  'v1.account.application.deauthorized',
  'v1.account.external_account.created',
  'v1.account.external_account.deleted',
  'v1.account.external_account.updated',
  'v1.account.updated',
  'v1.application_fee.created',
  'v1.application_fee.refund.updated',
  'v1.application_fee.refunded',
  'v1.balance.available',
  'v1.balance_settings.updated',
  'v1.billing.alert.triggered',
  'v1.billing.credit_balance_transaction.created',
  'v1.billing.credit_grant.created',
  'v1.billing.credit_grant.updated',
  'v1.billing.meter.created',
  'v1.billing.meter.deactivated',
  'v1.billing.meter.error_report_triggered',
  'v1.billing.meter.no_meter_found',
  'v1.billing.meter.reactivated',
  'v1.billing.meter.updated',
  'v1.billing_portal.configuration.created',
  'v1.billing_portal.configuration.updated',
  'v1.billing_portal.session.created',
  'v1.capability.updated',
  'v1.cash_balance.funds_available',
  'v1.charge.captured',
  'v1.charge.dispute.closed',
  'v1.charge.dispute.created',
  'v1.charge.dispute.funds_reinstated',
  'v1.charge.dispute.funds_withdrawn',
  'v1.charge.dispute.updated',
  'v1.charge.expired',
  'v1.charge.failed',
  'v1.charge.pending',
  'v1.charge.refund.updated',
  'v1.charge.refunded',
  'v1.charge.succeeded',
  'v1.charge.updated',
  'v1.checkout.session.async_payment_failed',
  'v1.checkout.session.async_payment_succeeded',
  'v1.checkout.session.completed',
  'v1.checkout.session.expired',
  'v1.climate.order.canceled',
  'v1.climate.order.created',
  'v1.climate.order.delayed',
  'v1.climate.order.delivered',
  'v1.climate.order.product_substituted',
  'v1.climate.product.created',
  'v1.climate.product.pricing_updated',
  'v1.coupon.created',
  'v1.coupon.deleted',
  'v1.coupon.updated',
  'v1.credit_note.created',
  'v1.credit_note.updated',
  'v1.credit_note.voided',
  'v1.customer.created',
  'v1.customer.deleted',
  'v1.customer.discount.created',
  'v1.customer.discount.deleted',
  'v1.customer.discount.updated',
  'v1.customer.subscription.created',
  'v1.customer.subscription.deleted',
  'v1.customer.subscription.paused',
  'v1.customer.subscription.pending_update_applied',
  'v1.customer.subscription.pending_update_expired',
  'v1.customer.subscription.resumed',
  'v1.customer.subscription.trial_will_end',
  'v1.customer.subscription.updated',
  'v1.customer.tax_id.created',
  'v1.customer.tax_id.deleted',
  'v1.customer.tax_id.updated',
  'v1.customer.updated',
  'v1.customer_cash_balance_transaction.created',
  'v1.entitlements.active_entitlement_summary.updated',
  'v1.file.created',
  'v1.financial_connections.account.account_numbers_updated',
  'v1.financial_connections.account.created',
  'v1.financial_connections.account.deactivated',
  'v1.financial_connections.account.disconnected',
  'v1.financial_connections.account.expected_deactivation_date_updated',
  'v1.financial_connections.account.reactivated',
  'v1.financial_connections.account.refreshed_balance',
  'v1.financial_connections.account.refreshed_ownership',
  'v1.financial_connections.account.refreshed_transactions',
  'v1.financial_connections.account.supported_payment_method_types_updated',
  'v1.financial_connections.account.upcoming_account_number_expiry',
  'v1.financial_connections.account.upcoming_deactivation',
  'v1.identity.verification_session.canceled',
  'v1.identity.verification_session.created',
  'v1.identity.verification_session.processing',
  'v1.identity.verification_session.redacted',
  'v1.identity.verification_session.requires_input',
  'v1.identity.verification_session.verified',
  'v1.invoice.created',
  'v1.invoice.deleted',
  'v1.invoice.finalization_failed',
  'v1.invoice.finalized',
  'v1.invoice.marked_uncollectible',
  'v1.invoice.overdue',
  'v1.invoice.overpaid',
  'v1.invoice.paid',
  'v1.invoice.payment_action_required',
  'v1.invoice.payment_attempt_required',
  'v1.invoice.payment_failed',
  'v1.invoice.payment_succeeded',
  'v1.invoice.sent',
  'v1.invoice.upcoming',
  'v1.invoice.updated',
  'v1.invoice.voided',
  'v1.invoice.will_be_due',
  'v1.invoice_payment.paid',
  'v1.invoiceitem.created',
  'v1.invoiceitem.deleted',
  'v1.issuing_authorization.created',
  'v1.issuing_authorization.request',
  'v1.issuing_authorization.updated',
  'v1.issuing_card.created',
  'v1.issuing_card.updated',
  'v1.issuing_cardholder.created',
  'v1.issuing_cardholder.updated',
  'v1.issuing_dispute.closed',
  'v1.issuing_dispute.created',
  'v1.issuing_dispute.funds_reinstated',
  'v1.issuing_dispute.funds_rescinded',
  'v1.issuing_dispute.submitted',
  'v1.issuing_dispute.updated',
  'v1.issuing_personalization_design.activated',
  'v1.issuing_personalization_design.deactivated',
  'v1.issuing_personalization_design.rejected',
  'v1.issuing_personalization_design.updated',
  'v1.issuing_token.created',
  'v1.issuing_token.updated',
  'v1.issuing_transaction.created',
  'v1.issuing_transaction.purchase_details_receipt_updated',
  'v1.issuing_transaction.updated',
  'v1.mandate.updated',
  'v1.payment_intent.amount_capturable_updated',
  'v1.payment_intent.canceled',
  'v1.payment_intent.created',
  'v1.payment_intent.partially_funded',
  'v1.payment_intent.payment_failed',
  'v1.payment_intent.processing',
  'v1.payment_intent.requires_action',
  'v1.payment_intent.succeeded',
  'v1.payment_link.created',
  'v1.payment_link.updated',
  'v1.payment_method.attached',
  'v1.payment_method.automatically_updated',
  'v1.payment_method.detached',
  'v1.payment_method.updated',
  'v1.payout.canceled',
  'v1.payout.created',
  'v1.payout.failed',
  'v1.payout.paid',
  'v1.payout.reconciliation_completed',
  'v1.payout.updated',
  'v1.person.created',
  'v1.person.deleted',
  'v1.person.updated',
  'v1.plan.created',
  'v1.plan.deleted',
  'v1.plan.updated',
  'v1.price.created',
  'v1.price.deleted',
  'v1.price.updated',
  'v1.product.created',
  'v1.product.deleted',
  'v1.product.updated',
  'v1.promotion_code.created',
  'v1.promotion_code.updated',
  'v1.quote.accepted',
  'v1.quote.canceled',
  'v1.quote.created',
  'v1.quote.finalized',
  'v1.radar.early_fraud_warning.created',
  'v1.radar.early_fraud_warning.updated',
  'v1.refund.created',
  'v1.refund.failed',
  'v1.refund.updated',
  'v1.review.closed',
  'v1.review.opened',
  'v1.setup_intent.canceled',
  'v1.setup_intent.created',
  'v1.setup_intent.requires_action',
  'v1.setup_intent.setup_failed',
  'v1.setup_intent.succeeded',
  'v1.sigma.scheduled_query_run.created',
  'v1.source.canceled',
  'v1.source.chargeable',
  'v1.source.failed',
  'v1.source.refund_attributes_required',
  'v1.subscription_schedule.aborted',
  'v1.subscription_schedule.canceled',
  'v1.subscription_schedule.completed',
  'v1.subscription_schedule.created',
  'v1.subscription_schedule.expiring',
  'v1.subscription_schedule.released',
  'v1.subscription_schedule.updated',
  'v1.tax.settings.updated',
  'v1.tax_rate.created',
  'v1.tax_rate.updated',
  'v1.terminal.reader.action_failed',
  'v1.terminal.reader.action_succeeded',
  'v1.terminal.reader.action_updated',
  'v1.test_helpers.test_clock.advancing',
  'v1.test_helpers.test_clock.created',
  'v1.test_helpers.test_clock.deleted',
  'v1.test_helpers.test_clock.internal_failure',
  'v1.test_helpers.test_clock.ready',
  'v1.topup.canceled',
  'v1.topup.created',
  'v1.topup.failed',
  'v1.topup.reversed',
  'v1.topup.succeeded',
  'v1.transfer.created',
  'v1.transfer.reversed',
  'v1.transfer.updated',
  'v2.commerce.product_catalog.imports.failed',
  'v2.commerce.product_catalog.imports.processing',
  'v2.commerce.product_catalog.imports.succeeded',
  'v2.commerce.product_catalog.imports.succeeded_with_errors',
  'v2.core.account.closed',
  'v2.core.account.created',
  'v2.core.account.updated',
  'v2.core.account[configuration.customer].capability_status_updated',
  'v2.core.account[configuration.customer].updated',
  'v2.core.account[configuration.merchant].capability_status_updated',
  'v2.core.account[configuration.merchant].updated',
  'v2.core.account[configuration.recipient].capability_status_updated',
  'v2.core.account[configuration.recipient].updated',
  'v2.core.account[defaults].updated',
  'v2.core.account[future_requirements].updated',
  'v2.core.account[identity].updated',
  'v2.core.account[requirements].updated',
  'v2.core.account_link.returned',
  'v2.core.account_person.created',
  'v2.core.account_person.deleted',
  'v2.core.account_person.updated',
  'v2.core.event_destination.ping',
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
  public on<T extends Stripe.V2.Core.EventNotification['type']>(
    type: T,
    callback: (
      event: Extract<Stripe.V2.Core.EventNotification, {type: T}>,
      client: Stripe
    ) => Promise<void>
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
    event: Stripe.V2.Core.EventNotification
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
        event as Events.UnknownEventNotification,
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
      this.client.parseEventNotification(rawBody, signature, this.webhookSecret)
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
