// File generated from our OpenAPI spec

import * as SettingParams from '../params/SettingParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SettingResource = StripeResource.extend({
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/tax/settings'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/tax/settings'}),
});
export class Setting {}
