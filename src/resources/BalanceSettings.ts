// File generated from our OpenAPI spec

import * as BalanceSettingParams from '../params/BalanceSettingParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BalanceSettingResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/balance_settings'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/balance_settings'}),
});
export class BalanceSetting {}
