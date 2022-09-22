// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
  path: 'test_helpers/issuing/cards',
  deliverCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/deliver',
  }),
  failCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/fail',
  }),
  returnCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/return',
  }),
  shipCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/ship',
  }),
});
