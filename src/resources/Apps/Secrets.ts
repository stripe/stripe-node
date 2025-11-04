// File generated from our OpenAPI spec

import * as SecretParams from '../params/SecretParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SecretResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/apps/secrets'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/apps/secrets',
    methodType: 'list',
  }),
  deleteWhere: stripeMethod({
    method: 'POST',
    fullPath: '/v1/apps/secrets/delete',
  }),
  find: stripeMethod({method: 'GET', fullPath: '/v1/apps/secrets/find'}),
});
export class Secret {}
