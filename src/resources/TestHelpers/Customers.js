// File generated from our OpenAPI spec

'use strict';

const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'test_helpers/customers',

  fundCashBalance: stripeMethod({
    method: 'POST',
    path: '/{customer}/fund_cash_balance',
  }),
});
