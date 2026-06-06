const assert = require('assert');
const Stripe = require('stripe');

const config = {
  host: process.env.STRIPE_MOCK_HOST || 'localhost',
  port: process.env.STRIPE_MOCK_PORT || 12111,
  protocol: 'http',
};

// Test callable pattern (without `new`)
const stripe = Stripe(process.argv[2], config);

// Test constructor pattern (with `new`)
const stripeNew = new Stripe(process.argv[2], config);

// Both should produce working Stripe instances
assert(stripe.paymentIntents, 'callable instance has paymentIntents');
assert(stripeNew.paymentIntents, 'new instance has paymentIntents');
assert(stripe.errors, 'callable instance has errors');
assert(stripeNew.errors, 'new instance has errors');
assert(stripe.webhooks, 'callable instance has webhooks');
assert(stripeNew.webhooks, 'new instance has webhooks');

// Static properties should be accessible on the constructor
assert(Stripe.errors, 'constructor has static errors');
assert(Stripe.errors.StripeError, 'constructor has StripeError');
assert(Stripe.errors.StripeInvalidRequestError);
assert(Stripe.webhooks, 'constructor has static webhooks');
assert(Stripe.StripeResource, 'constructor has StripeResource');
assert(Stripe.HttpClient, 'constructor has HttpClient');
assert(Stripe.CryptoProvider, 'constructor has CryptoProvider');
assert(Stripe.Decimal, 'constructor has Decimal');

Stripe.Decimal.from('1.1');

// instanceof checks
try {
  throw new stripe.errors.StripeError({
    charge: 'foo',
    unknown_prop: 'bar',
  });
} catch (e) {
  if (e instanceof stripe.errors.StripeError) {
    console.log('Caught StripeError');
  } else {
    throw e;
  }
}

async function exampleFunction(args) {
  try {
    await stripe.paymentIntents.create(args);
  } catch (e) {
    if (e instanceof stripe.errors.StripeInvalidRequestError) {
      console.log('Caught StripeInvalidRequestError');
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
