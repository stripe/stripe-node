// File generated from our OpenAPI spec

import * as crypto from 'crypto';
import {StripeResource} from '../StripeResource.js';
import {Discount} from './Discounts.js';
import {Application, DeletedApplication} from './Applications.js';
import {Customer, DeletedCustomer} from './Customers.js';
import {Subscription} from './Subscriptions.js';
import {PaymentMethod} from './PaymentMethods.js';
import {Account} from './Accounts.js';
import {TaxId, DeletedTaxId} from './TaxIds.js';
import {TaxRate} from './TaxRates.js';
import {Price, DeletedPrice} from './Prices.js';
import {Coupon} from './Coupons.js';
import {PromotionCode} from './PromotionCodes.js';
import {Plan, DeletedPlan} from './Plans.js';
import * as TestHelpers from './TestHelpers/index.js';
import {
  Emptyable,
  MetadataParam,
  Decimal,
  PaginationParams,
  RangeQueryParam,
  Metadata,
} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';
const stripeMethod = StripeResource.method;
export class SubscriptionScheduleResource extends StripeResource {
  /**
   * Retrieves the list of your subscription schedules.
   */
  list(
    params?: SubscriptionScheduleListParams,
    options?: RequestOptions
  ): ApiListPromise<SubscriptionSchedule>;
  list(options?: RequestOptions): ApiListPromise<SubscriptionSchedule>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/subscription_schedules',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.
   */
  create(
    params?: SubscriptionScheduleCreateParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  create(options?: RequestOptions): Promise<Response<SubscriptionSchedule>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
    }).call(this, ...args);
  }

  /**
   * Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.
   */
  retrieve(
    id: string,
    params?: SubscriptionScheduleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/subscription_schedules/{schedule}',
    }).call(this, ...args);
  }

  /**
   * Updates an existing subscription schedule.
   */
  update(
    id: string,
    params?: SubscriptionScheduleUpdateParams,
    options?: RequestOptions
  ): Promise<Response<SubscriptionSchedule>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
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
