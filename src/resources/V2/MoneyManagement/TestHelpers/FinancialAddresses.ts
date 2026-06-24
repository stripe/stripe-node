// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {FinancialAddressDebitSimulation} from './../../../V2/MoneyManagement/FinancialAddressDebitSimulations.js';
import {V2Amount} from './../../V2Amounts.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class FinancialAddressResource extends StripeResource {
  /**
   * Simulate debiting a FinancialAddress in a Sandbox environment. This can be used to remove virtual funds and decrease your balance for testing.
   */
  debit(
    id: string,
    params: V2.MoneyManagement.TestHelpers.FinancialAddressDebitParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddressDebitSimulation>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/test_helpers/financial_addresses/${encodeURIComponent(
        id
      )}/debit`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace TestHelpers {
      export interface FinancialAddressDebitParams {
        /**
         * Object containing the amount value and currency to debit.
         */
        amount: V2Amount;

        /**
         * The network to use in simulating the funds flow. This will be reflected in the resulting ReceivedDebit.
         */
        network: 'ach';

        /**
         * String explaining funds flow. Use this field to populate the statement descriptor of the ReceivedDebit created as an eventual result of this simulation.
         */
        statement_descriptor?: string;
      }
    }
  }
}
