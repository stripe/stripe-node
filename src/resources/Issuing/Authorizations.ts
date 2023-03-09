// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Authorizations = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations',
    methodType: 'list',
  }),

  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/approve',
  }),

  decline: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/decline',
  }),
});
