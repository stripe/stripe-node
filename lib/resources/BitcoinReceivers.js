'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'bitcoin/receivers',

  includeBasic: ['list', 'retrieve', 'getMetadata'],

  listTransactions: stripeMethod({
    method: 'GET',
    path: '/{id}/transactions',
    urlParams: ['id'],
    methodType: 'list',
  }),
});
