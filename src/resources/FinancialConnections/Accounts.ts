// File generated from our OpenAPI spec

import * as AccountParams from '../params/AccountParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const AccountResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts',
    methodType: 'list',
  }),
  disconnect: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
  }),
  listOwners: stripeMethod({
    method: 'GET',
    fullPath: '/v1/financial_connections/accounts/{account}/owners',
    methodType: 'list',
  }),
  refresh: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/refresh',
  }),
  subscribe: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/subscribe',
  }),
  unsubscribe: stripeMethod({
    method: 'POST',
    fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe',
  }),
});
export class Account {}
