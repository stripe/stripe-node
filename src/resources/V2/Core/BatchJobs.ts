// File generated from our OpenAPI spec

import crypto from 'crypto';
import {StripeResource} from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const BatchJobs = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v2/core/batch_jobs'}),
  serializeV1CustomerUpdate(customer, params = {}, options = {}) {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.stripeVersion || this._stripe.getApiField('version');

    const item = {
      id: itemId,
      path_params: {customer: customer},
      params: params,
      stripe_version: stripeVersion,
    };
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeV1SubscriptionScheduleCreate(params = {}, options = {}) {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.stripeVersion || this._stripe.getApiField('version');

    const item = {
      id: itemId,
      path_params: null,
      params: params,
      stripe_version: stripeVersion,
    };
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeV1SubscriptionUpdate(
    subscription_exposed_id,
    params = {},
    options = {}
  ) {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.stripeVersion || this._stripe.getApiField('version');

    const item = {
      id: itemId,
      path_params: {subscription_exposed_id: subscription_exposed_id},
      params: params,
      stripe_version: stripeVersion,
    };
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
});
