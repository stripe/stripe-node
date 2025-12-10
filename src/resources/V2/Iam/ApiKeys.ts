// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ApiKeys = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/iam/api_keys'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v2/iam/api_keys/{id}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v2/iam/api_keys/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/iam/api_keys',
    methodType: 'list',
  }),
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v2/iam/api_keys/{id}/expire',
  }),
  rotate: stripeMethod({
    method: 'POST',
    fullPath: '/v2/iam/api_keys/{id}/rotate',
  }),
});
