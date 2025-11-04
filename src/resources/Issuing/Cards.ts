// File generated from our OpenAPI spec

import * as CardParams from '../params/CardParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const CardResource = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/issuing/cards'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v1/issuing/cards/{card}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v1/issuing/cards/{card}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/issuing/cards',
    methodType: 'list',
  }),
});
export class Card {}
