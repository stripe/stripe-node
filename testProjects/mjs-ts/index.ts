import DefaultStripe, {Stripe, type Decimal} from 'stripe';

const stripe = new Stripe(process.argv[2], {
  // if we specify a version, then our smoke tests fail every time there's a new API version being prepped
  apiVersion: undefined,
  host: process.env.STRIPE_MOCK_HOST || 'localhost',
  port: process.env.STRIPE_MOCK_PORT || 12111,
  protocol: 'http',
  stripeContext: new Stripe.StripeContext(),
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

// Verify Stripe.Decimal works as both a runtime call and a type annotation.
const decimalInstance: Stripe.Decimal = Stripe.Decimal.from('1.0');
// Verify named type import works: import type { Decimal } from 'stripe'
const decimalViaNamedImport: Decimal = Stripe.Decimal.from('2.0');
console.log('Decimal:', decimalInstance.toString(), decimalViaNamedImport.toString());
