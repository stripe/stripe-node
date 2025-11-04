// File generated from our OpenAPI spec

import * as EarlyFraudWarningParams from '../params/EarlyFraudWarningParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const EarlyFraudWarningResource = StripeResource.extend({
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
export class EarlyFraudWarning {}
