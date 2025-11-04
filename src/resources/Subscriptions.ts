// File generated from our OpenAPI spec

import * as SubscriptionParams from '../params/SubscriptionParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SubscriptionResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/subscriptions'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
  }),
  migrate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/migrate',
  }),
  resume: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/resume',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/search',
    methodType: 'search',
  }),
});
export class Subscription {}
