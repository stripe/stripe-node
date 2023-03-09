// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Sessions = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions',
    methodType: 'list',
  }),

  expire: stripeMethod({
    method: 'POST',
    fullPath: '/v1/checkout/sessions/{session}/expire',
  }),

  listLineItems: stripeMethod({
    method: 'GET',
    fullPath: '/v1/checkout/sessions/{session}/line_items',
    methodType: 'list',
  }),
});
