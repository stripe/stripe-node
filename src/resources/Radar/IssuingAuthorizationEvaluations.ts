// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const IssuingAuthorizationEvaluations = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/radar/issuing_authorization_evaluations',
  }),
});
