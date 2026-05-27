/**
 * Regression test for https://github.com/stripe/stripe-node/issues/2683
 *
 * This file does not exist to be executed, just compiled, so that we can
 * verify that the CJS entry point exposes the full Stripe namespace when
 * using module: "commonjs" / moduleResolution: "node" / esModuleInterop: true.
 *
 * The issue: TypeScript generates a .d.ts that exports `StripeConstructor`,
 * whose namespace only re-exports the Stripe class type — not the full
 * namespace with resource types like Customer, Charge, etc.
 */

// ——— Pattern 1: import type (the primary reported issue) ———
import type StripeType from 'stripe';

let customer: StripeType.Customer;
let params: StripeType.CustomerCreateParams;
let charge: StripeType.Charge;
let checkout: StripeType.Checkout.SessionCreateParams;
let rawError: StripeType.StripeRawError;

// ——— Pattern 2: value import for construction + namespace access ———
import Stripe from 'stripe';

let stripe = new Stripe('sk_test_123', {
  apiVersion: Stripe.API_VERSION,
});

// Namespace types accessible on value import
let customer2: Stripe.Customer;
let opts: Stripe.RequestOptions;

// Static members
const version: typeof Stripe.API_VERSION = Stripe.API_VERSION;
Stripe.errors;
Stripe.errors.StripeError;

// Instance usage
async (): Promise<void> => {
  const cust: Stripe.Customer = await stripe.customers.create({
    description: 'test',
  });
};

// Error instanceof
const instanceofCheck = {} instanceof Stripe.errors.StripeError;

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
  apiVersion: Stripe.API_VERSION,
  typescript: true,
  maxNetworkRetries: 1,
  timeout: 1000,
  host: 'api.example.com',
  stripeContext: new Stripe.StripeContext(['acct_123']),
  port: 123,
  telemetry: true,
  httpClient: Stripe.createNodeHttpClient(),
  appInfo: {
    name: 'my-wordpress-plugin',
  },
});

// @ts-expect-error - unknown config properties should be rejected
stripe = new Stripe('sk_test_123', {unknownProperty: true});

(async (): Promise<void> => {
  const params: Stripe.CustomerCreateParams = {
    description: 'test',
  };
  const opts: Stripe.RequestOptions = {
    apiVersion: Stripe.API_VERSION,
  };
  const customer: Stripe.Customer = await stripe.customers.create(params, opts);

  const address: Stripe.Address | null | undefined = customer.address;

  if (!address) return;
  const city: string | null = address.city;

  // Check no opts:
  await stripe.customers.create(params);

  // Check multiple dispatch:
  let product = await stripe.products.retrieve('prod_123', undefined, opts);
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

  const cusList: Stripe.ApiList<Stripe.Customer> = await stripe.customers.list();

  const aThousandCustomers: Array<Stripe.Customer> = await stripe.customers
    .list()
    .autoPagingToArray({limit: 1000});

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

  // @ts-expect-error
  (await stripe.invoices.retrieveUpcoming()).id;
  (await stripe.invoices.retrieve('')).id;

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

  {
    const custs = await stripe.customers.list();
    const lr = custs.lastResponse;
    const requestId: string = lr.requestId;
    const statusCode: number = lr.statusCode;
    const apiVersion: string | undefined = lr.apiVersion;
    const idempotencyKey: string | undefined = lr.idempotencyKey;
    const headers = lr.headers;
    const header: string | undefined = headers['request-id'];
  }

  {
    const cust = await stripe.customers.retrieve('foo');
    const lr = cust.lastResponse;
    const requestId: string = lr.requestId;
    const statusCode: number = lr.statusCode;
    const apiVersion: string | undefined = lr.apiVersion;
    const idempotencyKey: string | undefined = lr.idempotencyKey;
    const headers = lr.headers;
    const header: string | undefined = lr.headers['request-id'];
  }
  {
    const acct = await stripe.accounts.createExternalAccount('foo', {
      ['external_account']: 'foo',
    });
    if (acct.object === 'card') {
      const rid: string = acct.lastResponse.requestId;
    }
  }
})();

const maxBufferedRequestMetrics: number =
  Stripe.StripeResource.MAX_BUFFERED_REQUEST_METRICS;

// Test NodeHttpClient request processing.
import {Agent} from 'http';
async (): Promise<void> => {
  const client = Stripe.createNodeHttpClient(new Agent());

  const response = await client.makeRequest(
    'api.stripe.com',
    '443',
    '/test',
    'POST',
    {
      'Stripe-Account': 'account',
      'Content-Length': 123,
    },
    'requestdata',
    'https',
    80000
  );

  const stream: Stripe.StripeStreamResponse = response.toStream(() => {
    return;
  });
  stream.setEncoding('utf8');

  const jsonResponse: object = await response.toJSON();
};

// Test FetchHttpClient request processing.
async (): Promise<void> => {
  const client = Stripe.createFetchHttpClient();

  const response = await client.makeRequest(
    'api.stripe.com',
    '443',
    '/test',
    'POST',
    {
      'Stripe-Account': 'account',
      'Content-Length': 123,
    },
    'requestdata',
    'https',
    80000
  );

  const stream = response.toStream(() => {
    return;
  });

  const results = await stream!.getReader().read();

  const jsonResponse: object = await response.toJSON();
};

// Tests asynchronous webhook processing.
async (): Promise<void> => {
  const cryptoProvider = Stripe.createSubtleCryptoProvider();

  const event = await stripe.webhooks.constructEventAsync(
    'body',
    'signature',
    'secret',
    undefined,
    cryptoProvider
  );

  if (event.type == 'customer.created') {
    const customer: Stripe.Customer = event.data.object;
    const previous_attributes = event.data.previous_attributes;
  }

  // @ts-expect-error unknown type
  if (event.type == 'customer.created2') {
    // @ts-expect-error unknown type doesn't have a typed object
    const customer: Stripe.Customer = event.data.object;
  }

  const event2 = await stripe.events.retrieve(event.id);
};

// Can reference error types
let rawError2: Stripe.StripeRawError;

let newError: typeof Stripe.errors.StripeError;

const instanceofCheck1 = {} instanceof Stripe.errors.StripeError;
const instanceofCheck2 = {} instanceof Stripe.errors.StripeAPIError;
const instanceofCheck5 = {} instanceof stripe.errors.StripeError;
const instanceofCheck6 = {} instanceof stripe.errors.StripeAPIError;

stripe.files.create({
  purpose: 'dispute_evidence',
  file: {
    data: Buffer.from('File'),
    name: 'minimal.pdf',
    type: 'application/octet-stream',
  },
  file_link_data: {create: true},
});

// rawRequest
stripe.rawRequest(
  'GET',
  '/path/123',
  {},
  {
    // allowed base
    apiBase: 'files',
  }
);

stripe.rawRequest(
  'GET',
  '/path/123',
  {},
  {
    // @ts-expect-error - unknown base
    apiBase: 'missing',
  }
);

stripe.rawRequest(
  'GET',
  '/path/123',
  {},
  {
    // @ts-expect-error - unknown key
    host: 'example.com',
  }
);

const v1Event = {} as Stripe.AccountApplicationAuthorizedEvent;
// v1 event context is a string
const v1Context: string | undefined = v1Event.context;

const v2Event = {} as Stripe.Events.V1BillingMeterErrorReportTriggeredEvent;
// v2 is also a string
const v2Context: string | undefined = v2Event.context;

// but event notification is a context object
const v2EventNotif = {} as Stripe.Events.V1BillingMeterErrorReportTriggeredEventNotification;
const v2ContextObj: Stripe.StripeContextType | undefined = v2EventNotif.context;

async (): Promise<void> => {
  // parsing event notifications
  const eventNotification = stripe.parseEventNotification('', '', '');

  if (eventNotification.type === 'v1.billing.meter.error_report_triggered') {
    eventNotification.related_object;
    const m: Stripe.Billing.Meter = await eventNotification.fetchRelatedObject();
    const e: Stripe.Events.V1BillingMeterErrorReportTriggeredEvent = await eventNotification.fetchEvent();
    const d: Stripe.Events.V1BillingMeterErrorReportTriggeredEvent.Data =
      e.data;
  } else if (eventNotification.type === 'v1.billing.meter.no_meter_found') {
    // @ts-expect-error - shouldn't be available
    eventNotification.related_object;
    const e: Stripe.Events.V1BillingMeterNoMeterFoundEvent = await eventNotification.fetchEvent();
    // @ts-expect-error - isn't a known type
  } else if (eventNotification.type === 'some.unknown.event') {
    const e = eventNotification as Stripe.Events.UnknownEventNotification;
    e.fetchEvent();
    // these exist, but may be null
    e.related_object;
    e.fetchRelatedObject();
  }
};

{
  // v1 event resource
  let a: Stripe.EventBase;
  // v2 event resource
  let b: Stripe.V2.Core.EventBase;
  let c: Stripe.V2.Core.EventNotification;
  let d: Stripe.Events.UnknownEventNotification;
  let e: Stripe.Events.V1BillingMeterErrorReportTriggeredEvent;
  let f: Stripe.Events.V1BillingMeterErrorReportTriggeredEventNotification;
  // union of all V2 Events
  let g: Stripe.V2.Core.Event;
}

// Test that the Decimal type is exported
{
  function takesDecimal(decimal: Stripe.Decimal) {
    return decimal;
  }

  const testDecimal = Stripe.Decimal.from('1.0');
  takesDecimal(testDecimal);
}

let event: Stripe.Event = stripe.webhooks.constructEvent(
  'payload',
  'signature',
  'secret'
);
/**
 * Note that this is typed to accept an array of strings
 * so that it works seamlessly with express's types,
 * but will throw if an array is passed in practice
 * since express should never return this header as an array,
 * only a string.
 */
event = stripe.webhooks.constructEvent(
  'payload',
  ['also_signature_but_does_not_work_at_runtime'],
  'secret'
);

const v2AccountCreateParamConfiguration: Stripe.V2.Core.AccountCreateParams.Configuration = {};
const checkoutSessionParam: Stripe.Checkout.SessionCreateParams = {};
const v2EventListParams: Stripe.V2.Core.EventListParams = {};
const v2AccountCreateParams: Stripe.V2.Core.AccountCreateParams = {};
const oAuthToken: Stripe.OAuthToken = {};
const oAuthResource: Stripe.OAuthResource = stripe.oauth;

const oAuthTokenParams: Stripe.OAuthTokenParams = {
  grant_type: 'authorization_code',
};
const oAuthAuthorizeUrlOptions: Stripe.OAuthAuthorizeUrlOptions = {};
const oAuthAuthorizeUrlParams: Stripe.OAuthAuthorizeUrlParams = {};
const oAuthDeauthorization: Stripe.OAuthDeauthorization = {stripe_user_id: ''};
const oAuthDeauthorizeParams: Stripe.OAuthDeauthorizeParams = {};

// Access and type top level resources and nested resources
const customerResource: Stripe.CustomerResource = new Stripe.CustomerResource(
  stripe
);

// Access nested resource
const v2AccountResource: Stripe.V2.Billing.MeterEventResource = new Stripe.V2.Billing.MeterEventResource(
  stripe
);
