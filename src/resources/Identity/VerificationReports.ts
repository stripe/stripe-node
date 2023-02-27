// File generated from our OpenAPI spec

'use strict';

import {StripeResource} from '../../StripeResource';
const stripeMethod = StripeResource.method;

export const VerificationReports = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_reports/{report}',
  }),

  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/identity/verification_reports',
    methodType: 'list',
  }),
});
