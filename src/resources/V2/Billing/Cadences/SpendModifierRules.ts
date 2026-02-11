// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SpendModifierRules = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences/{cadence_id}/spend_modifier_rules/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/cadences/{cadence_id}/spend_modifier_rules',
    methodType: 'list',
  }),
});
