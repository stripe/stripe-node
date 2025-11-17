// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountEvaluations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/account_evaluations',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/radar/account_evaluations/{account_evaluation}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/account_evaluations/{account_evaluation}/report_event',
  }),
});
