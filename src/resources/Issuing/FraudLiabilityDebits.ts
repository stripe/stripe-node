// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const FraudLiabilityDebits = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/fraud_liability_debits/{fraud_liability_debit}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/fraud_liability_debits',
    methodType: 'list',
  }),
});
