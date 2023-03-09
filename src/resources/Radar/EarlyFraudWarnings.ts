// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const EarlyFraudWarnings = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/early_fraud_warnings/{early_fraud_warning}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/early_fraud_warnings',
    methodType: 'list',
  }),
});
