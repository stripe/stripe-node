// File generated from our OpenAPI spec

import * as ApplicationFeeParams from '../params/ApplicationFeeParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ApplicationFeeResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/application_fees/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/application_fees',
    methodType: 'list',
  }),
  createRefund: stripeMethod({
    method: 'POST',
    fullPath: '/v1/application_fees/{id}/refunds',
  }),
  listRefunds: stripeMethod({
    method: 'GET',
    fullPath: '/v1/application_fees/{id}/refunds',
    methodType: 'list',
  }),
  retrieveRefund: stripeMethod({
    method: 'GET',
    fullPath: '/v1/application_fees/{fee}/refunds/{id}',
  }),
  updateRefund: stripeMethod({
    method: 'POST',
    fullPath: '/v1/application_fees/{fee}/refunds/{id}',
  }),
});
export class ApplicationFee {}
