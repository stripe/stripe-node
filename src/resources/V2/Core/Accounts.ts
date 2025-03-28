// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Persons} from './Accounts/Persons.js';
const stripeMethod = StripeResource.method;
export const Accounts = StripeResource.extend({
  constructor: function(...args: any) {
    StripeResource.apply(this, args);
    this.persons = new Persons(...args);
  },
  create: stripeMethod({method: 'POST', fullPath: '/v2/core/accounts'}),
  retrieve: stripeMethod({method: 'GET', fullPath: '/v2/core/accounts/{id}'}),
  update: stripeMethod({method: 'POST', fullPath: '/v2/core/accounts/{id}'}),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v2/core/accounts',
    methodType: 'list',
  }),
  close: stripeMethod({
    method: 'POST',
    fullPath: '/v2/core/accounts/{id}/close',
  }),
});
