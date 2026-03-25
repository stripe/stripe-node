// File generated from our OpenAPI spec

import * as crypto from 'crypto';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const SubscriptionSchedules = StripeResource.extend({
  create: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules',
    requestSchema: {
      kind: 'object',
      fields: {
        phases: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              add_invoice_items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
              items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules/{schedule}',
  }),
  update: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}',
    requestSchema: {
      kind: 'object',
      fields: {
        phases: {
          kind: 'array',
          element: {
            kind: 'object',
            fields: {
              add_invoice_items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
              items: {
                kind: 'array',
                element: {
                  kind: 'object',
                  fields: {
                    price_data: {
                      kind: 'object',
                      fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/subscription_schedules',
    methodType: 'list',
  }),
  amend: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/amend',
  }),
  cancel: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/cancel',
  }),
  release: stripeMethod({
    method: 'POST',
    fullPath: '/v1/subscription_schedules/{schedule}/release',
  }),
  serializeBatchCancel(
    schedule: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {schedule: schedule};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
  serializeBatchCreate(
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = crypto.randomUUID();
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
    schedule: string,
    params: Record<string, unknown> = {},
    options: {apiVersion?: string; stripeContext?: string} = {}
  ): string {
    const itemId = crypto.randomUUID();
    const stripeVersion =
      options.apiVersion || this._stripe.getApiField('version');

    const item: Record<string, unknown> = {
      id: itemId,
      params: params,
      stripe_version: stripeVersion,
    };
    item.path_params = {schedule: schedule};
    if (options.stripeContext) {
      item.context = options.stripeContext;
    }
    return JSON.stringify(item);
  },
});
