// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {EarnedCreditSimulation} from './EarnedCreditSimulations.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';
import {FinancialAddressResource} from './TestHelpers/FinancialAddresses.js';
import {Stripe} from '../../../stripe.core.js';
export class TestHelperResource extends StripeResource {
  financialAddresses: FinancialAddressResource;

  constructor(private readonly stripe: Stripe) {
    super(stripe);
    this.financialAddresses = new FinancialAddressResource(stripe);
  }
  /**
   * Creates an EarnedCredit in a Sandbox environment for testing purposes.
   */
  earnedCredits(
    params: V2.MoneyManagement.TestHelperEarnedCreditsParams,
    options?: RequestOptions
  ): Promise<Response<EarnedCreditSimulation>> {
    return this._makeRequest(
      'POST',
      '/v2/money_management/test_helpers/earned_credits',
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface TestHelperEarnedCreditsParams {
      /**
       * The amount and currency of the EarnedCredit.
       */
      amount: V2Amount;

      /**
       * The FinancialAccount to simulate the EarnedCredit for.
       */
      financial_account: string;

      /**
       * The type of EarnedCredit to create. Currently only interest is supported.
       */
      type: TestHelperEarnedCreditsParams.Type;
    }

    export namespace TestHelperEarnedCreditsParams {
      export type Type = 'interest' | OtherString;
    }
  }
}
