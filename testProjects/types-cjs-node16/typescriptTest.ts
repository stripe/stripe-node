/**
 * Regression test for https://github.com/stripe/stripe-node/issues/2683
 *
 * Tests CJS types with moduleResolution: "node16" — the configuration
 * reported as failing. This file is only compiled, not executed.
 */

import Stripe from 'stripe';

// Construction
const stripe = new Stripe('sk_test_123');

// Top-level resource types
let customer: Stripe.Customer;
let charge: Stripe.Charge;
let subscription: Stripe.Subscription;
let invoice: Stripe.Invoice;
let refund: Stripe.Refund;
let paymentIntent: Stripe.PaymentIntent;
let event: Stripe.Event;

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
