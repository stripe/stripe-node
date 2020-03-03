/**
 * This file does not exist to be executed, just compiled,
 * so that we can ensure that the definition files
 * only reference names that exist,
 * and to perform a basic sanity check that types are exported as intended.
 */

///<reference types="../2020-03-02" />
import Stripe from 'stripe';

let stripe = new Stripe('sk_test_123', {
  apiVersion: '2020-03-02',
});

// @ts-ignore lazily ignore apiVersion requirement.
stripe = new Stripe('sk_test_123');

stripe = new Stripe('sk_test_123', {
  // @ts-ignore ignore specific apiVersion.
  apiVersion: '2019-11-05',
});

stripe = new Stripe('sk_test_123', {
  // @ts-ignore ignore default apiVersion.
  apiVersion: null,
});

// Check config object.
stripe = new Stripe('sk_test_123', {
  apiVersion: '2020-03-02',
  typescript: true,
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

stripe.setHost('host', 'port', 'protocol');

(async (): Promise<void> => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test',
  };
  const opts: Stripe.RequestOptions = {
    apiVersion: '2020-03-02',
  };
  const customer: Stripe.Customer = await stripe.customers.create(params, opts);

  // Check no opts:
  await stripe.customers.create(params);

  // Check multiple dispatch:
  let product = await stripe.products.retrieve('prod_123', opts);
  product = await stripe.products.retrieve('prod_123', {expand: []}, opts);

  const charge: Stripe.Charge = await stripe.charges.retrieve('ch_123', {
    expand: ['customer'],
  });

  // Ignore null case.
  if (!charge.customer) throw Error('guard');

  // Check you can cast an expandable field to the object:
  const cusEmail: string | null = (charge.customer as Stripe.Customer).email;
  // Check you can cast an expandable field to a string:
  const btId: string = charge.balance_transaction as string;

  // Check you can deal with deleted:
  if (
    typeof charge.customer !== 'string' &&
    // Not sure why `!charge.customer.deleted` doesn't work, it seems to in a playground:
    // https://www.typescriptlang.org/play/index.html#code/JYOwLgpgTgZghgYwgAgGIHt3IN4ChnJwBcyAzmFKAOYDc+yADpQgNYA2AnieZSLfXABGiFtwrVkAH2QgArmzZSZsgLaDodAmA4MIJAOQxM+zcgAmENhEhmA-CQBu6YGboBfXKEixEKACKW1hBmGFh4Wjp6yIbGphZWNiQUshDuuLjausgAsnAc6qHIALxomEoBCcGh6RYIbHBQKAjoIOTIAB4kufkQ1Z4wyAAUAITtAHTxQWYAlDj0za1ghGK8VMUdY3C4Hri19Y3IC21cpVjSFVOF0jwS0nIK6cADgxzIAGRvyJkQ6AOvw0USvobnx9O9PsMOBNAjZZuFDi02sQyOI+OsoVsPEA
    // Might be a complexity limit with our resources: https://github.com/microsoft/TypeScript/pull/30779/files#diff-c3ed224e4daa84352f7f1abcd23e8ccaR13219
    !('deleted' in charge.customer)
  ) {
    const created: number = charge.customer.created;
  }
  const r = Math.random() - 0.5;
  // Okay, this is how I hope people can deal with deleted:
  const maybeCoupon: Stripe.Coupon | Stripe.DeletedCoupon = await (r
    ? stripe.coupons.retrieve('25_off')
    : stripe.coupons.del('25_off'));
  if (maybeCoupon.deleted) {
    const d: true = maybeCoupon.deleted;
  } else {
    // Here, TS knows it's a full Coupon.
    const created: number = maybeCoupon.created;
  }

  for await (const customer of stripe.customers.list()) {
    const {id} = customer as Stripe.Customer;
    if (id === 'hi') {
      break;
    }
  }

  const cusList: Stripe.ApiList<
    Stripe.Customer
  > = await stripe.customers.list();

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

  try {
    await stripe.paymentIntents.create({amount: 100, currency: 'USD'});
  } catch (err) {
    if (err instanceof stripe.errors.StripeCardError) {
      const declineCode: string = err.decline_code;
    }
    if (err instanceof Stripe.errors.StripeCardError) {
      const declineCode: string = err.decline_code;
    }
  }
})();
