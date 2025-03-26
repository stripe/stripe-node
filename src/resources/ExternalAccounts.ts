// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ExternalAccounts = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/external_accounts'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/external_accounts/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/external_accounts/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/external_accounts',
    methodType: 'list',
  }),
  del: stripeMethod({method: 'DELETE', fullPath: '/v1/external_accounts/{id}'}),
});
