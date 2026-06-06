import DefaultStripe, {Stripe} from 'stripe';
import assert from 'assert';

// Both import styles should resolve to the same class
assert(Stripe === DefaultStripe, 'Default and named imports should be the same class');

// Named import should expose static members
assert(Stripe.PACKAGE_VERSION);
assert(Stripe.USER_AGENT);
assert(Stripe.HttpClient);
assert(Stripe.HttpClientResponse);
assert(Stripe.CryptoProvider);
assert(Stripe.errors);
assert(Stripe.StripeResource);
assert(Stripe.webhooks);
assert(Stripe.resources);

// Both imports should be constructable
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

// Instance properties should be present
assert(stripe._platformFunctions);
assert(stripe._api);
assert(stripe.VERSION);
assert(stripe.errors);
assert(stripe.webhooks);

assert(defaultStripe._platformFunctions);
assert(defaultStripe._api);
assert(defaultStripe.VERSION);
assert(defaultStripe.errors);
assert(defaultStripe.webhooks);

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
  amount: 2000,
  confirm: true,
  payment_method: 'pm_card_visa',
})
  .then(() => {
    console.log('Bun ESM test passed');
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
