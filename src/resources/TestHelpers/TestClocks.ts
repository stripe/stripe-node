// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const TestClocks = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/test_clocks',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/test_helpers/test_clocks',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
  }),

  advance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
  }),
});
