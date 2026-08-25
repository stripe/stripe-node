/**
 * Regression test for https://github.com/stripe/stripe-node/issues/2683
 *
 * Tests CJS types with moduleResolution: "node16" — the configuration
 * reported as failing. This file is only compiled, not executed.
 */

import Stripe from 'stripe';

// Construction
const stripe = new Stripe('sk_test_123');

// Static members
const majorApiVersion: string = Stripe.MAJOR_API_VERSION;

// Top-level resource types
let customer: Stripe.Customer;
let charge: Stripe.Charge;
let subscription: Stripe.Subscription;
let invoice: Stripe.Invoice;
let refund: Stripe.Refund;
let paymentIntent: Stripe.PaymentIntent;
let event: Stripe.Event; // union of types
let et: Stripe.EventBase; // actual base interface
let et2: Stripe.V2.Core.EventBase; // actual v2 base interface
let notif: Stripe.V2.Core.EventNotification; // union of thin event types

// Param types
let params: Stripe.CustomerCreateParams;
let cancelParams: Stripe.SubscriptionCancelParams;

// Nested param sub-namespace (@konradliebig's original report)
const taxExempt: Stripe.CustomerUpdateParams.TaxExempt = 'exempt';

// Nested namespace resource types
let checkoutSession: Stripe.Checkout.Session;
let checkoutParams: Stripe.Checkout.SessionCreateParams;

// V2List generic
async (): Promise<void> => {
  const v2EventsList: Stripe.V2List<Stripe.V2.Core.Event> = await stripe.v2.core.events.list();
};

// Shared types
let opts: Stripe.RequestOptions;
let apiList: Stripe.ApiList<Stripe.Customer>;

// Resource sub-types (companion namespace access)
let priceRecurring: Stripe.Price.Recurring;
let customerInvoiceSettings: Stripe.Customer.InvoiceSettings;
let subscriptionBillingMode: Stripe.Subscription.BillingMode;

// Deep resource sub-types (2+ levels)
const billingModeType: Stripe.Subscription.BillingMode.Type = 'classic';

// Nested resource sub-types (product namespace → resource → sub-type)
let alertStatus: Stripe.Billing.Alert.Status;
let terminalTipping: Stripe.Terminal.Configuration.Tipping;
let appsSecretScope: Stripe.Apps.Secret.Scope;

// Deep params sub-namespaces (2+ levels)
let accountBizProfile: Stripe.AccountCreateParams.BusinessProfile;
let accountBizRevenue: Stripe.AccountCreateParams.BusinessProfile.AnnualRevenue;

// Config strictness
// @ts-expect-error - unknown config properties should be rejected
const bad = new Stripe('sk_test_123', {unknownProperty: true});

// Webhook methods: constructEventWithoutVerification and parseEventNotificationWithoutVerification
event = stripe.webhooks.constructEventWithoutVerification('payload');
event = stripe.constructEventWithoutVerification('payload');
const _notificationWV: Stripe.V2.Core.EventNotification = stripe.parseEventNotificationWithoutVerification(
  'payload'
);

// Namespace type exports that must remain accessible (v21 parity).
const _stripeConfig: Stripe.StripeConfig = {maxNetworkRetries: 3};
const _latestApiVersion: Stripe.LatestApiVersion = '' as any;
const _httpAgent: Stripe.HttpAgent = null as any;
const _httpProtocol: Stripe.HttpProtocol = 'https';
const _stripeResource: Stripe.StripeResource = null as any;
const _cryptoProvider: Stripe.CryptoProvider = null as any;
const _httpClient: Stripe.HttpClient = null as any;
const _httpClientResponse: Stripe.HttpClientResponse = null as any;
const _rawErrorType: Stripe.RawErrorType = 'card_error';
const _webhooksType: Stripe.Webhooks = null as any;
const _webhookTestHeaderOptions: Stripe.WebhookTestHeaderOptions = {
  payload: '{}',
  secret: 'whsec_test',
};
const _signatureType: Stripe.Signature = null as any;

// Factory function return types must be assignable to their interface types.
const _nodeHttpClient: Stripe.HttpClient = Stripe.createNodeHttpClient();
const _nodeCryptoProvider: Stripe.CryptoProvider = Stripe.createNodeCryptoProvider();

// notificationHandlerWithoutVerification must be reachable under moduleResolution node16
async (): Promise<void> => {
  const unverifiedHandler = stripe.notificationHandlerWithoutVerification(
    async (unhandledEvent, client, details) => {
      const e: Stripe.Events.UnknownEventNotification = unhandledEvent;
      const s: Stripe = client;
      const d: Stripe.UnhandledNotificationDetails = details;
    }
  );

  unverifiedHandler.on(
    'v1.billing.meter.error_report_triggered',
    async (event) => {
      const meter: Stripe.Billing.Meter = await event.fetchRelatedObject();
    }
  );

  // handle() takes only the body; there is no signature to pass
  const res: void = await unverifiedHandler.handle('');

  // @ts-expect-error - the verifying two-argument handle is not available here
  await unverifiedHandler.handle('', 'sig_header');

  // Node exposes only the client factory; the handler classes are type-only.
  // @ts-expect-error - StripeEventNotificationHandler is not a runtime value
  Stripe.StripeEventNotificationHandler.withoutVerification(
    stripe,
    async () => {}
  );
};

// both handler types must be nameable off the namespace
let _verifyingHandler: Stripe.StripeEventNotificationHandler;
let _unverifiedHandler: Stripe.StripeEventNotificationHandlerWithoutVerification;
