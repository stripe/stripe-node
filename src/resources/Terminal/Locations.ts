// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Locations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/terminal/locations/{location}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/terminal/locations',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/terminal/locations/{location}',
  }),
});
