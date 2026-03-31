// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {IntentAction} from './../../../V2/Billing/IntentActions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class ActionResource extends StripeResource {
  /**
   * List Billing Intent Actions.
   */
  list(
    id: string,
    params?: V2.Billing.Intents.ActionListParams,
    options?: RequestOptions
  ): ApiListPromise<IntentAction>;
  list(id: string, options?: RequestOptions): ApiListPromise<IntentAction>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/intents/{intent_id}/actions',
      methodType: 'list',
      responseSchema: {
        kind: 'object',
        fields: {
          data: {
            kind: 'array',
            element: {
              kind: 'object',
              fields: {
                apply: {
                  kind: 'object',
                  fields: {
                    invoice_discount_rule: {
                      kind: 'object',
                      fields: {
                        percent_off: {
                          kind: 'object',
                          fields: {percent_off: {kind: 'decimal_string'}},
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
    }).call(this, ...args);
  }

  /**
   * Retrieve a Billing Intent Action.
   */
  retrieve(
    intentId: string,
    id: string,
    params?: V2.Billing.Intents.ActionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<IntentAction>>;
  retrieve(
    intentId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<IntentAction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/intents/{intent_id}/actions/{id}',
      responseSchema: {
        kind: 'object',
        fields: {
          apply: {
            kind: 'object',
            fields: {
              invoice_discount_rule: {
                kind: 'object',
                fields: {
                  percent_off: {
                    kind: 'object',
                    fields: {percent_off: {kind: 'decimal_string'}},
                  },
                },
              },
            },
          },
        },
      },
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Intents {
      export interface ActionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Intents {
      export interface ActionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 10.
         */
        limit?: number;
      }
    }
  }
}
