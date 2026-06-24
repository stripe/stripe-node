// File generated from our OpenAPI spec

import {StripeResource} from '../../../../../StripeResource.js';
import {ContractPricingLineQuantityChange} from './../../../../V2/Billing/ContractPricingLineQuantityChanges.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../../lib.js';

export class QuantityChangeResource extends StripeResource {
  /**
   * List quantity changes for a pricing line on a contract.
   */
  listContractPricingLineQuantityChanges(
    contractId: string,
    pricingLineId: string,
    params?: V2.Billing.Contracts.PricingLines.QuantityChangeListContractPricingLineQuantityChangesParams,
    options?: RequestOptions
  ): V2ListPromise<ContractPricingLineQuantityChange> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(
        contractId
      )}/pricing_lines/${encodeURIComponent(pricingLineId)}/quantity_changes`,
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
      export namespace PricingLines {
        export interface QuantityChangeListContractPricingLineQuantityChangesParams {
          /**
           * The limit for the number of results per page.
           */
          limit?: number;
        }
      }
    }
  }
}
