// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'capital/financing_offers',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{financingOffer}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  markDelivered: stripeMethod({
    method: 'POST',
    path: '/{financingOffer}/mark_delivered',
  }),
});
