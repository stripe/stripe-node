// File generated from our OpenAPI spec

import * as RequestParams from '../params/RequestParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const RequestResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/forwarding/requests'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/forwarding/requests/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/forwarding/requests',
    methodType: 'list',
  }),
});
export class Request {}
