// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const MoneyManagement = StripeResource.extend({
  recipientVerifications: stripeMethod({
    method: 'POST',
    fullPath: '/v2/test_helpers/money_management/recipient_verifications',
  }),
});
