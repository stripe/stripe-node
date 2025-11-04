// File generated from our OpenAPI spec

import * as RegistrationParams from '../params/RegistrationParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RegistrationResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/tax/registrations'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/registrations/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/tax/registrations/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/tax/registrations',
    methodType: 'list',
  }),
});
export class Registration {}
