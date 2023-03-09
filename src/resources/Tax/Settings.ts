// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Settings = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/settings',
  }),

  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/settings',
  }),
});
