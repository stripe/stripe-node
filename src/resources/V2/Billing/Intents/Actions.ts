// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {IntentAction} from './../../../V2/Billing/IntentActions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';

export class ActionResource extends StripeResource {
  /**
   * List Billing Intent Actions.
   */
  list(
    id: string,
    params?: V2.Billing.Intents.ActionListParams,
    options?: RequestOptions
  ): ApiListPromise<IntentAction> {
    return this._makeRequest(
      'GET',
      `/v2/billing/intents/${id}/actions`,
      params,
      options,
      {
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
      }
    ) as any;
  }
  /**
   * Retrieve a Billing Intent Action.
   */
  retrieve(
    intentId: string,
    id: string,
    params?: V2.Billing.Intents.ActionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<IntentAction>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/intents/${intentId}/actions/${id}`,
      params,
      options,
      {
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
      }
    ) as any;
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
