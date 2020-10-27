// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  includeBasic: ['create', 'retrieve', 'update', 'list'],

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{card}/details',
  }),
});
