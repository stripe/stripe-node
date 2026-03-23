// File generated from our OpenAPI spec

import {randomUUID} from 'crypto';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const Subscriptions = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/subscriptions'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}',
  }),
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
  }),
  migrate: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/migrate',
  }),
  resume: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscriptions/{subscription}/resume',
  }),
  search: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscriptions/search',
    methodType: 'search',
  }),
  serializeBatchMigrate(
    subscription: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {subscription: subscription};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeBatchUpdate(
    subscriptionExposedId: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {subscription_exposed_id: subscriptionExposedId};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
});
