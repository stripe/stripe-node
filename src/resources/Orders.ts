// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Orders = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/orders'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/orders/{id}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/orders/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/orders',
    methodType: 'list',
  }),
  submit: stripeMethod({method: 'POST', fullPath: '/v1/orders/{id}/submit'}),
});
