// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CustomerEvaluations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/customer_evaluations',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/customer_evaluations/{customer_evaluation}/report',
  }),
});
