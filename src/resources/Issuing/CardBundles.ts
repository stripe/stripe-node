// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const CardBundles = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_bundles/{card_bundle}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/card_bundles',
    methodType: 'list',
  }),
});
