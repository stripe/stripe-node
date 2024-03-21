import {Stripe} from 'stripe';
import assert from 'assert';

// API key is null to trigger an authentication error
const stripe = new Stripe(null, {
    host: process.env.STRIPE_MOCK_HOST || 'localhost',
    port: process.env.STRIPE_MOCK_PORT || 12111,
    protocol: 'http',
});

try {
  throw new stripe.errors.StripeUnknownError({
    charge: 'foo',
    unknown_prop: 'bar',
  });
} catch (e) {
  assert (e instanceof stripe.errors.StripeUnknownError);
  assert (e.type === 'StripeUnknownError');
}

async function exampleFunction(args) {
  try {
    await stripe.paymentIntents.create(args);
  } catch (e) {
    assert (e instanceof stripe.errors.StripeAuthenticationError);
    assert (e.type === 'StripeAuthenticationError');
  }
}

exampleFunction({
  // The required parameter currency is missing
  amount: 2000,
  confirm: true,
  payment_method: 'pm_card_visa',
});
