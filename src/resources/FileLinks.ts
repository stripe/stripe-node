// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../StripeResource';
const stripeMethod = StripeResource.method;

export const FileLinks = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/file_links',
  }),

  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/file_links/{link}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/file_links/{link}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/file_links',
    methodType: 'list',
  }),
});
