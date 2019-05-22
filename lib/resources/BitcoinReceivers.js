'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'bitcoin/receivers',

  includeBasic: ['list', 'retrieve'],

  listTransactions: stripeMethod({
    method: 'GET',
    path: '/{receiver}/transactions',
    methodType: 'list',
  }),
});
