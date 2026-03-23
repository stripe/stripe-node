// File generated from our OpenAPI spec

import {randomUUID} from 'crypto';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const PromotionCodes = StripeResource.extend({
  create: stripeMethod({method: 'POST', fullPath: '/v1/promotion_codes'}),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/promotion_codes/{promotion_code}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/promotion_codes',
    methodType: 'list',
  }),
  serializeBatchCreate(
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
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeBatchUpdate(
    promotionCode: string,
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
    item.path_params = {promotion_code: promotionCode};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
});
