// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const FinancingOffers = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/capital/financing_offers/{financing_offer}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/capital/financing_offers',
    methodType: 'list',
  }),

  markDelivered: stripeMethod({
    method: 'POST',
    fullPath: '/v1/capital/financing_offers/{financing_offer}/mark_delivered',
  }),
});
