import {Stripe} from 'stripe';
import DefaultStripe from 'stripe';
import assert from 'assert';

assert(Stripe.PACKAGE_VERSION);
assert(Stripe.USER_AGENT);

assert(Stripe.HttpClient);
assert(Stripe.HttpClientResponse);
assert(Stripe.createFetchHttpClient);
assert(Stripe.createNodeHttpClient);

assert(Stripe.CryptoProvider);
assert(Stripe.createNodeCryptoProvider);
assert(Stripe.createSubtleCryptoProvider);

assert(Stripe.errors);
assert(Stripe.resources);
assert(Stripe.webhooks);

assert(Stripe.StripeResource);
assert(Stripe.StripeResource.method);
assert(Stripe.StripeResource.extend);
assert(Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS);

assert(Stripe.Stripe);
assert(Stripe.default);

const stripe = new Stripe(process.argv[2]);
const defaultStripe = new DefaultStripe(process.argv[2]);

assert(stripe._platformFunctions);
assert(stripe._api);
assert(stripe._enableTelemetry);
assert(stripe._prevRequestMetrics);
assert(stripe._requestSender);
assert(stripe.VERSION);
assert(stripe.webhookEndpoints);
assert(stripe.webhooks);
assert(stripe._emitter);
assert(stripe.on);
assert(stripe.off);
assert(stripe.once);

try {
  throw new stripe.errors.StripeError({
    charge: 'foo',
    unknown_prop: 'bar',
  });
} catch (e) {
  if (e instanceof stripe.errors.StripeError) {
    console.log("Caught StripeError");
  } else {
    throw e;
  }
}

async function exampleFunction(args) {
  try {
    await stripe.paymentIntents.create(args);
  } catch (e) {
    if (e instanceof stripe.errors.StripeInvalidRequestError) {
      console.log("Caught StripeInvalidRequestError");
    } else {
      throw e;
    }
  }
}

exampleFunction({
  // The required parameter currency is missing
  amount: 2000,
  confirm: true,
  payment_method: 'pm_card_visa',
});
