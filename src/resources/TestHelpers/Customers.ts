// File generated from our OpenAPI spec

import * as CustomerParams from '../params/CustomerParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CustomerResource = StripeResource.extend({
  fundCashBalance: stripeMethod({
    method: 'POST',
    fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
  }),
});
export class Customer {}
