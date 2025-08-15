// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AutomaticRules = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/tax/automatic_rules'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/tax/automatic_rules/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/automatic_rules/{id}',
  }),
  deactivate: stripeMethod({
    method: 'POST',
    fullPath: '/v2/tax/automatic_rules/{id}/deactivate',
  }),
  find: stripeMethod({method: 'GET', fullPath: '/v2/tax/automatic_rules/find'}),
});
