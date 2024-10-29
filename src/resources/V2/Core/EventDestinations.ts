// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const EventDestinations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/event_destinations',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/event_destinations/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/event_destinations/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/event_destinations',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v2/core/event_destinations/{id}',
  }),
  disable: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/event_destinations/{id}/disable',
  }),
  enable: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/event_destinations/{id}/enable',
  }),
  ping: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/event_destinations/{id}/ping',
  }),
});
