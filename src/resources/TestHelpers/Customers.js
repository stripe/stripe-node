// File generated from our OpenAPI spec

'use strict';

const {stripeMethod, StripeResource} = require('../../StripeResource');

module.exports = StripeResource.extend({
  fundCashBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
  }),
});
