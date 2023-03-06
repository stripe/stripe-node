// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const ValueListItems = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/value_list_items',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/value_list_items',
    methodType: 'list',
  }),

  del: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/radar/value_list_items/{item}',
  }),
});
