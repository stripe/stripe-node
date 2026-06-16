// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {FinancialAccountStatement} from './../../../V2/MoneyManagement/FinancialAccountStatements.js';
import {RequestOptions, V2ListPromise, Response} from '../../../../lib.js';

export class StatementResource extends StripeResource {
  /**
   * Returns a list of statements for a Financial Account.
   */
  list(
    financialAccountId: string,
    params?: V2.MoneyManagement.FinancialAccounts.StatementListParams,
    options?: RequestOptions
  ): V2ListPromise<FinancialAccountStatement> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_accounts/${encodeURIComponent(
        financialAccountId
      )}/statements`,
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
                  files_by_currency: {
                    kind: 'array',
                    element: {
                      kind: 'object',
                      fields: {size: {kind: 'int64_string'}},
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
   * Retrieves the details of a Financial Account Statement.
   */
  retrieve(
    financialAccountId: string,
    id: string,
    params?: V2.MoneyManagement.FinancialAccounts.StatementRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAccountStatement>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/financial_accounts/${encodeURIComponent(
        financialAccountId
      )}/statements/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            files_by_currency: {
              kind: 'array',
              element: {kind: 'object', fields: {size: {kind: 'int64_string'}}},
            },
          },
        },
      }
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccounts {
      export interface StatementRetrieveParams {
        /**
         * Additional fields to include in the response.
         */
        include?: Array<'files_by_currency'>;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace FinancialAccounts {
      export interface StatementListParams {
        /**
         * The maximum number of results to return.
         */
        limit?: number;

        /**
         * The field by which to sort results. Defaults to "created".
         */
        order_by?: StatementListParams.OrderBy;
      }

      export namespace StatementListParams {
        export type OrderBy = 'created' | 'period_end_date';
      }
    }
  }
}
