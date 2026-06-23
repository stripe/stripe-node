// File generated from our OpenAPI spec

import {StripeResource} from '../../../../../StripeResource.js';
import {AlertHistoryEntry} from './../../../../V2/Core/Health/AlertHistoryEntries.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../../lib.js';

export class HistoryResource extends StripeResource {
  /**
   * Retrieves a list of alert history entries for a health alert.
   */
  list(
    id: string,
    params?: V2.Core.Health.Alerts.HistoryListParams,
    options?: RequestOptions
  ): V2ListPromise<AlertHistoryEntry> {
    return this._makeRequest(
      'GET',
      `/v2/core/health/alerts/${encodeURIComponent(id)}/history`,
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
                  api_error: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                      top_impacted_accounts: {
                        kind: 'array',
                        element: {
                          kind: 'object',
                          fields: {
                            impacted_requests_percentage: {
                              kind: 'decimal_string',
                            },
                          },
                        },
                      },
                    },
                  },
                  api_latency: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                      top_impacted_accounts: {
                        kind: 'array',
                        element: {
                          kind: 'object',
                          fields: {
                            impacted_requests_percentage: {
                              kind: 'decimal_string',
                            },
                          },
                        },
                      },
                    },
                  },
                  authorization_rate_drop: {
                    kind: 'object',
                    fields: {
                      current_percentage: {kind: 'decimal_string'},
                      previous_percentage: {kind: 'decimal_string'},
                    },
                  },
                  invoice_count_dropped: {
                    kind: 'object',
                    fields: {
                      observed_count: {kind: 'decimal_string'},
                      threshold_count: {kind: 'decimal_string'},
                    },
                  },
                  payment_method_error: {
                    kind: 'object',
                    fields: {
                      impacted_requests_percentage: {kind: 'decimal_string'},
                      top_impacted_accounts: {
                        kind: 'array',
                        element: {
                          kind: 'object',
                          fields: {
                            impacted_requests_percentage: {
                              kind: 'decimal_string',
                            },
                          },
                        },
                      },
                    },
                  },
                  sepa_debit_delayed: {
                    kind: 'object',
                    fields: {
                      impacted_payments_percentage: {kind: 'decimal_string'},
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
  export namespace Core {
    export namespace Health {
      export namespace Alerts {
        export interface HistoryListParams {
          /**
           * The page limit.
           */
          limit?: number;
        }
      }
    }
  }
}
