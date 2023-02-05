import DefaultStripe, {Stripe} from 'stripe';

const stripe = new Stripe(process.argv[2], {apiVersion: '2022-11-15'});
const defaultStripe = new DefaultStripe(process.argv[2], {
  apiVersion: '2022-11-15',
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
