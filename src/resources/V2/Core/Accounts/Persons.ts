// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Persons = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{account_id}/persons',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts/{account_id}/persons',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
  }),
});
