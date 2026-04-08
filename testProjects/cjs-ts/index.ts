import Stripe = require('stripe');

const config = {
  host: process.env.STRIPE_MOCK_HOST || 'localhost',
  port: process.env.STRIPE_MOCK_PORT || 12111,
  protocol: 'http' as const,
};

// StripeCallableConstructor: both `new Stripe()` and `Stripe()` should type-check.
const stripeNew: Stripe.Stripe = new Stripe(process.argv[2], config);
const stripeCalled: Stripe.Stripe = Stripe(process.argv[2], config);

// Static members should be accessible on the constructor
Stripe.errors;
Stripe.errors.StripeError;
Stripe.errors.StripeInvalidRequestError;
Stripe.webhooks;
Stripe.StripeResource;
Stripe.HttpClient;
Stripe.CryptoProvider;
Stripe.Decimal;
Stripe.Decimal.from('1.1');

// Instance members should work on both
stripeNew.paymentIntents;
stripeCalled.paymentIntents;
stripeNew.customers;
stripeCalled.customers;
stripeNew.errors;
stripeCalled.errors;

try {
  throw new stripeNew.errors.StripeError({
    charge: 'foo',
    unknown_prop: 'bar',
  } as any);
} catch (e) {
  if (e instanceof stripeNew.errors.StripeError) {
    console.log('Caught StripeError');
  } else {
    throw e;
  }
}

async function exampleFunction() {
  try {
    await stripeNew.paymentIntents.create({
      currency: 'usd',
      amount: 2000,
      confirm: true,
      payment_method: 'pm_card_visa',
    });
  } catch (e) {
    if (e instanceof stripeNew.errors.StripeInvalidRequestError) {
      console.log('Caught StripeInvalidRequestError');
    } else {
      throw e;
    }
  }
}

exampleFunction();
