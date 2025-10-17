// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BlocklistEntries = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/identity/blocklist_entries',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/identity/blocklist_entries/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/identity/blocklist_entries',
    methodType: 'list',
  }),
  disable: stripeMethod({
    method: 'POST',
    fullPath: '/v1/identity/blocklist_entries/{id}/disable',
  }),
});
