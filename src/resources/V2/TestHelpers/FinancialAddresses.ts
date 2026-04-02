// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {FinancialAddressCreditSimulation} from './../../V2/FinancialAddressCreditSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './../../V2/FinancialAddressGeneratedMicrodeposits.js';
import {V2Amount} from './../V2Amounts.js';
import {RequestOptions, Response} from '../../../lib.js';

export class FinancialAddressResource extends StripeResource {
  /**
   * Simulate crediting a FinancialAddress in a Sandbox environment. This can be used to add virtual funds and increase your balance for testing.
   * @throws Stripe.FeatureNotEnabledError
   */
  credit(
    id: string,
    params: V2.TestHelpers.FinancialAddressCreditParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddressCreditSimulation>> {
    return this._makeRequest(
      'POST',
      `/v2/test_helpers/financial_addresses/${id}/credit`,
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
    params?: V2.TestHelpers.FinancialAddressGenerateMicrodepositsParams,
    options?: RequestOptions
  ): Promise<Response<FinancialAddressGeneratedMicrodeposits>> {
    return this._makeRequest(
      'POST',
      `/v2/test_helpers/financial_addresses/${id}/generate_microdeposits`,
      params,
      options
    ) as any;
  }
}
export namespace V2 {
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
      export type Network = 'ach' | 'fps' | 'rtp' | 'wire';
    }
  }
}
export namespace V2 {
  export namespace TestHelpers {
    export interface FinancialAddressGenerateMicrodepositsParams {}
  }
}
