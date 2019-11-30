/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types="../types/v2019-11-05" />
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_123');

const params: Stripe.CustomerCreateParams = {
  description: 'test',
};
const opts: Stripe.RequestOptions = {
  stripeVersion: '2019-11-05',
};
const customer: Promise<Stripe.Customer> = stripe.customers.create(
  params,
  opts
);

(async () => {
  for await (const customer of stripe.customers.list()) {
    const {id} = customer as Stripe.Customer;
    if (id === 'hi') {
      break;
    }
  }

  const aThousandCustomers: Array<
    Stripe.Customer
  > = await stripe.customers.list().autoPagingToArray({limit: 1000});

  const nothing: void = await stripe.customers
    .list()
    .autoPagingEach((customer: Stripe.Customer) => {
      if (customer.id === 'one') {
        return false;
      }
      if (customer.id === 'two') {
        return Promise.resolve(false);
      }
      if (customer.id === 'three') {
        return Promise.resolve();
      }
      return undefined;
    });
})();
