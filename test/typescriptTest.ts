/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types="../types/v2019-11-05" />
import Stripe from 'stripe';

let stripe = new Stripe('sk_test_123');

// Check config object.
stripe = new Stripe('sk_test_123', '2019-xx-xx');
stripe = new Stripe('sk_test_123', {
  apiVersion: '2019-08-08',
  maxNetworkRetries: 1,
  timeout: 1000,
  host: 'api.example.com',
  port: 123,
  telemetry: true,
});

stripe.setTimeout(3000);
stripe.setAppInfo({
  name: 'my-wordpress-plugin',
});

(async () => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test',
  };
  const opts: Stripe.RequestOptions = {
    stripeVersion: '2019-11-05',
  };
  let customer: Stripe.Customer = await stripe.customers.create(params, opts);

  // check no opts:
  await stripe.customers.create(params);

  // check multiple dispatch:
  customer = await stripe.customers.retrieve(customer.id, opts);
  customer = await stripe.customers.retrieve(customer.id, {expand: []}, opts);

  const charge: Stripe.Charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });
  const customerEmail: string = (charge.customer as Stripe.Customer).email;
  const btId: string = charge.balance_transaction as string;

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
