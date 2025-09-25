// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RecipientVerifications = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/recipient_verifications',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/money_management/recipient_verifications/{id}',
  }),
  acknowledge: stripeMethod({
    method: 'POST',
    fullPath: '/v2/money_management/recipient_verifications/{id}/acknowledge',
  }),
});
