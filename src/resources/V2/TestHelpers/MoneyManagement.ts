// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import * as MoneyManagement from './../../V2/MoneyManagement/index.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class MoneyManagementResource extends StripeResource {
  /**
   * Creates a RecipientVerification with a specified match result for testing purposes in a Sandbox environment.
   */
  recipientVerifications(
    params: V2.TestHelpers.MoneyManagementRecipientVerificationsParams,
    options?: RequestOptions
  ): Promise<Response<MoneyManagement.RecipientVerification>>;
  recipientVerifications(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/test_helpers/money_management/recipient_verifications',
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace TestHelpers {
    export interface MoneyManagementRecipientVerificationsParams {
      /**
       * Expected match level of the RecipientVerification to be created: `match`, `close_match`, `no_match`, `unavailable`.
       * For `close_match`, the simulated response appends "close_match" to the provided name in match_result_details.matched_name.
       */
      match_result: MoneyManagementRecipientVerificationsParams.MatchResult;

      /**
       * ID of the payout method.
       */
      payout_method: string;

      /**
       * ID of the recipient account. Required if the recipient distinct from the sender. Leave empty if the recipient and sender are the same entity (i.e. for me-to-me payouts).
       */
      recipient?: string;
    }

    export namespace MoneyManagementRecipientVerificationsParams {
      export type MatchResult =
        | 'close_match'
        | 'match'
        | 'no_match'
        | 'unavailable';
    }
  }
}
