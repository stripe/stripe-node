import DefaultStripe, {Stripe} from 'stripe';

const stripe = new Stripe(process.argv[2], {
  // if we specify a version, then our smoke tests fail every time there's a new API version being prepped
  apiVersion: undefined,
  host: process.env.STRIPE_MOCK_HOST || 'localhost',
  port: process.env.STRIPE_MOCK_PORT || 12111,
  protocol: 'http',
});
const defaultStripe = new DefaultStripe(process.argv[2], {
  // if we specify a version, then our smoke tests fail every time there's a new API version being prepped
  apiVersion: undefined,
  host: process.env.STRIPE_MOCK_HOST || 'localhost',
  port: process.env.STRIPE_MOCK_PORT || 12111,
  protocol: 'http',
});

try {
  throw new stripe.errors.StripeError({
    charge: 'foo',
    unknown_prop: 'bar',
  } as any);
} catch (e) {
  if (e instanceof stripe.errors.StripeError) {
    console.log('Caught StripeError');
  } else {
    throw e;
  }
}

async function exampleFunction(args: Stripe.PaymentIntentCreateParams) {
  try {
    const pi: Stripe.PaymentIntent = await stripe.paymentIntents.create(args);
  } catch (e) {
    if (e instanceof stripe.errors.StripeInvalidRequestError) {
      console.log('Caught StripeInvalidRequestError');
    } else {
      throw e;
    }
  }
}

exampleFunction({
  currency: 'usd',
  amount: 2000,
  confirm: true,
  payment_method: 'pm_card_visa',
});
