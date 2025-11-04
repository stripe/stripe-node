// File generated from our OpenAPI spec

import * as CountrySpecParams from '../params/CountrySpecParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CountrySpecResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/country_specs/{country}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/country_specs',
    methodType: 'list',
  }),
});
export class CountrySpec {}
