// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {ContractTerm} from './../../../V2/Billing/ContractTerms.js';
import {OtherString} from '../../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';
import {QuantityChangeResource} from './Terms/QuantityChanges.js';
import {Stripe} from '../../../../stripe.core.js';
export class TermResource extends StripeResource {
  quantityChanges: QuantityChangeResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.quantityChanges = new QuantityChangeResource(stripe);
  }
  /**
   * List the terms on a contract, optionally filtered by type.
   */
  listContractTerms(
    contractId: string,
    params?: V2.Billing.Contracts.TermListContractTermsParams,
    options?: RequestOptions
  ): V2ListPromise<ContractTerm> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(contractId)}/terms`,
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
                  pricing_override: {
                    kind: 'object',
                    fields: {
                      multiply: {
                        kind: 'object',
                        fields: {factor: {kind: 'decimal_string'}},
                      },
                      overwrite: {
                        kind: 'object',
                        fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                      },
                    },
                  },
                  recurring_price: {
                    kind: 'object',
                    fields: {quantity: {kind: 'decimal_string'}},
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
   * Retrieve a term on a contract.
   */
  retrieveContractTerm(
    contractId: string,
    id: string,
    params?: V2.Billing.Contracts.TermRetrieveContractTermParams,
    options?: RequestOptions
  ): Promise<Response<ContractTerm>> {
    return this._makeRequest(
      'GET',
      `/v2/billing/contracts/${encodeURIComponent(
        contractId
      )}/terms/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            pricing_override: {
              kind: 'object',
              fields: {
                multiply: {
                  kind: 'object',
                  fields: {factor: {kind: 'decimal_string'}},
                },
                overwrite: {
                  kind: 'object',
                  fields: {unit_amount_decimal: {kind: 'decimal_string'}},
                },
              },
            },
            recurring_price: {
              kind: 'object',
              fields: {quantity: {kind: 'decimal_string'}},
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
      export interface TermListContractTermsParams {
        /**
         * Maximum results per page.
         */
        limit?: number;

        /**
         * Filter terms by type.
         */
        type?: TermListContractTermsParams.Type;
      }

      export namespace TermListContractTermsParams {
        export type Type =
          | 'ad_hoc_product'
          | 'pricing_override'
          | 'recurring_price'
          | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace Contracts {
      export interface TermRetrieveContractTermParams {}
    }
  }
}
