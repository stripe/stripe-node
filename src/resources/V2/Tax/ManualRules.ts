// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ManualRules = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/tax/manual_rules'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/tax/manual_rules/{id}',
  }),
  update: stripeMethod({method: 'POST', fullPath: '/v2/tax/manual_rules/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/tax/manual_rules',
    methodType: 'list',
  }),
  deactivate: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/manual_rules/{id}/deactivate',
  }),
});
