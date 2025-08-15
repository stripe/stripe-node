// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Versions} from './CollectionSettings/Versions.js';
const stripeMethod = StripeResource.method;
export const CollectionSettings = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.versions = new Versions(...args);
  },
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/collection_settings',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/collection_settings/{id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v2/billing/collection_settings/{id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/billing/collection_settings',
    methodType: 'list',
  }),
});
