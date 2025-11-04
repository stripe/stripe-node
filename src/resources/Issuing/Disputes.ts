// File generated from our OpenAPI spec

import * as DisputeParams from '../params/DisputeParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const DisputeResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/issuing/disputes'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/disputes',
    methodType: 'list',
  }),
  submit: stripeMethod({
    method: 'POST',
    fullPath: '/v1/issuing/disputes/{dispute}/submit',
  }),
});
export class Dispute {}
