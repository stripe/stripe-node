// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const Customers = StripeResource.extend({
  fundCashBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
  }),
});
