'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'issuing/cards',

  includeBasic: ['create', 'list', 'retrieve', 'update'],

  retrieveDetails: stripeMethod({
    method: 'GET',
    path: '/{card}/details',
  }),
});
