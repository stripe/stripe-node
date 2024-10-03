import DefaultStripe, {Stripe} from 'stripe';
import assert from 'assert';
import * as http from 'http';

assert(Stripe.PACKAGE_VERSION);
assert(Stripe.USER_AGENT);

assert(Stripe.HttpClient);
assert(Stripe.HttpClient.CONNECTION_CLOSED_ERROR_CODES);
assert(Stripe.HttpClient.TIMEOUT_ERROR_CODE);
assert(Stripe.HttpClient.makeTimeoutError);

assert(Stripe.HttpClientResponse);
assert(Stripe.createFetchHttpClient);
assert(Stripe.createNodeHttpClient);

assert(Stripe.CryptoProvider);
assert(Stripe.createNodeCryptoProvider);
assert(Stripe.createSubtleCryptoProvider);

assert(Stripe.errors);
assert(Stripe.errors.generateV1Error);
assert(Stripe.errors.generateV2Error);
assert(Stripe.errors.StripeError);
assert(Stripe.errors.StripeCardError);
assert(Stripe.errors.StripeInvalidRequestError);
assert(Stripe.errors.StripeAPIError);
assert(Stripe.errors.StripeAuthenticationError);
assert(Stripe.errors.StripePermissionError);
assert(Stripe.errors.StripeRateLimitError);
assert(Stripe.errors.StripeConnectionError);
assert(Stripe.errors.StripeSignatureVerificationError);
assert(Stripe.errors.StripeIdempotencyError);
assert(Stripe.errors.StripeInvalidGrantError);
assert(Stripe.errors.StripeUnknownError);

assert(Stripe.StripeResource);
assert(Stripe.StripeResource.method);
assert(Stripe.StripeResource.extend);
assert(Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS);

assert(Stripe.webhooks);
assert(Stripe.resources);

const stripe = new Stripe(process.argv[2], {
    host: process.env.STRIPE_MOCK_HOST || 'localhost',
    port: process.env.STRIPE_MOCK_PORT || 12111,
    protocol: 'http',
});
const defaultStripe = new DefaultStripe(process.argv[2], {
    host: process.env.STRIPE_MOCK_HOST || 'localhost',
    port: process.env.STRIPE_MOCK_PORT || 12111,
    protocol: 'http',
});

assert(stripe._platformFunctions);
assert(stripe._api);
assert(stripe._enableTelemetry);
assert(stripe._prevRequestMetrics);
assert(stripe._requestSender);
assert(stripe.VERSION);
assert(stripe.errors);
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


// Test that http is monkey-patchable (motivation: https://github.com/stripe/stripe-node/issues/1844)
async function exampleMonkeyPatchFunction() {
  http.default.request = () => {
    throw new Error('foo');
  };

  try {
    await stripe.paymentIntents.create({
      currency: 'usd',
      amount: 2000,
      confirm: true,
      payment_method: 'pm_card_visa',
    });
  } catch (e) {
    assert (e instanceof stripe.errors.StripeConnectionError);
    if (e.detail.message === 'foo') {
      return;
    } else {
      throw e;
    }
  }

  throw new Error('Expected an error');
}

exampleFunction({
  // The required parameter currency is missing
  amount: 2000,
  confirm: true,
  payment_method: 'pm_card_visa',
}).then(() => {
  return exampleMonkeyPatchFunction()
}).then(() => {
  process.exit(0);
}).catch((e) => {
  console.error(e);
  process.exit(1);
}
);
