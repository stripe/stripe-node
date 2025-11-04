// File generated from our OpenAPI spec

import * as CreditBalanceSummaryParams from '../params/CreditBalanceSummaryParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CreditBalanceSummaryResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/billing/credit_balance_summary',
  }),
});
export class CreditBalanceSummary {}
