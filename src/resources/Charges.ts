// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const Charges = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/charges',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/charges/{charge}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/charges/{charge}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/charges',
    methodType: 'list',
  }),

  capture: stripeMethod({
    method: 'POST',
    fullPath: '/v1/charges/{charge}/capture',
  }),

  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/charges/search',
    methodType: 'search',
  }),
});
