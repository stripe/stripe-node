// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RequestedSessions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/delegated_checkout/requested_sessions',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/delegated_checkout/requested_sessions/{requested_session}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/delegated_checkout/requested_sessions/{requested_session}',
  }),
  confirm: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/delegated_checkout/requested_sessions/{requested_session}/confirm',
  }),
  expire: stripeMethod({
    method: 'POST',
    fullPath:
      '/v1/delegated_checkout/requested_sessions/{requested_session}/expire',
  }),
});
