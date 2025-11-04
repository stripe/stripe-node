// File generated from our OpenAPI spec

import * as AuthorizationParams from '../params/AuthorizationParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AuthorizationResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/authorizations',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/approve',
  }),
  decline: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/authorizations/{authorization}/decline',
  }),
});
export class Authorization {}
