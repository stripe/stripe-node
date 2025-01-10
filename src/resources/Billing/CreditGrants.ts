// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditGrants = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/billing/credit_grants'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_grants',
    methodType: 'list',
  }),
  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/expire',
  }),
  voidGrant: stripeMethod({
    method: 'POST',
    fullPath: '/v1/billing/credit_grants/{id}/void',
  }),
});
