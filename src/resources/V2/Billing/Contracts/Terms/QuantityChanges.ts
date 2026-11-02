// File generated from our OpenAPI spec

import {StripeResource} from '../../../../../StripeResource.js';
import {ContractTermQuantityChange} from './../../../../V2/Billing/ContractTermQuantityChanges.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../../lib.js';

export class QuantityChangeResource extends StripeResource {
  /**
   * List quantity changes for a licensed recurring-price term.
   */
  listContractTermQuantityChanges(
    contractId: string,
    term: string,
    params?: V2.Billing.Contracts.Terms.QuantityChangeListContractTermQuantityChangesParams,
    options?: RequestOptions
  ): V2ListPromise<ContractTermQuantityChange> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(
        contractId
      )}/terms/${encodeURIComponent(term)}/quantity_changes`,
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
                fields: {quantity: {kind: 'decimal_string'}},
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
    export namespace Contracts {
      export namespace Terms {
        export interface QuantityChangeListContractTermQuantityChangesParams {
          /**
           * Maximum results per page.
           */
          limit?: number;
        }
      }
    }
  }
}
