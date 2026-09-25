// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {FinancialAddressCreditSimulation} from './../../../V2/MoneyManagement/FinancialAddressCreditSimulations.js';
import {FinancialAddressDebitSimulation} from './../../../V2/MoneyManagement/FinancialAddressDebitSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './../../../V2/MoneyManagement/FinancialAddressGeneratedMicrodeposits.js';
import {V2Amount} from './../../V2Amounts.js';
import {OtherString} from '../../../../shared.js';
import {RequestOptions, Response} from '../../../../lib.js';

export class FinancialAddressResource extends StripeResource {
  /**
   * Simulate crediting a FinancialAddress in a Sandbox environment. This can be used to add virtual funds and increase your balance for testing.
   * @throws Stripe.FeatureNotEnabledError
   */
  credit(
    id: string,
    params: V2.MoneyManagement.TestHelpers.FinancialAddressCreditParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddressCreditSimulation>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/test_helpers/financial_addresses/${encodeURIComponent(
        id
      )}/credit`,
      params,
      options
    ) as any;
  }
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
  /**
   * Generates microdeposits for a FinancialAddress in a Sandbox environment.
   * @throws Stripe.FeatureNotEnabledError
   */
  generateMicrodeposits(
    id: string,
    params?: V2.MoneyManagement.TestHelpers.FinancialAddressGenerateMicrodepositsParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddressGeneratedMicrodeposits>> {
    return this._makeRequest(
      'POST',
      `/v2/money_management/test_helpers/financial_addresses/${encodeURIComponent(
        id
      )}/generate_microdeposits`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace TestHelpers {
      export interface FinancialAddressCreditParams {
        /**
         * Object containing the amount value and currency to credit.
         */
        amount: V2Amount;

        /**
         * Open Enum. The network to use in simulating the funds flow. This will be the reflected in the resulting ReceivedCredit.
         */
        network: FinancialAddressCreditParams.Network;

        /**
         * String explaining funds flow. Use this field to populate the statement descriptor of the ReceivedCredit created as an eventual result of this simulation.
         */
        statement_descriptor?: string;
      }

      export namespace FinancialAddressCreditParams {
        export type Network =
          | 'ach'
          | 'acss'
          | 'chaps'
          | 'fps'
          | 'rtp'
          | 'sepa_credit_transfer'
          | 'wire'
          | OtherString;
      }
    }
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
        network: FinancialAddressDebitParams.Network;

        /**
         * String explaining funds flow. Use this field to populate the statement descriptor of the ReceivedDebit created as an eventual result of this simulation.
         */
        statement_descriptor?: string;
      }

      export namespace FinancialAddressDebitParams {
        export type Network = 'ach' | 'bacs' | OtherString;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace TestHelpers {
      export interface FinancialAddressGenerateMicrodepositsParams {}
    }
  }
}
