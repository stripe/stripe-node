// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OtherString, Decimal} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class AccountSignalResource extends StripeResource {
  /**
   * Lists the latest AccountSignals for a given account or customer, filtered by signal type. Note that this endpoint returns only the latest signal for each requested signal type.
   */
  list(
    params: V2.Signals.AccountSignalListParams,
    options?: RequestOptions
  ): V2ListPromise<AccountSignal> {
    return this._makeRequest(
      'GET',
      '/v2/signals/account_signals',
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
                  user_account_sharing: {
                    kind: 'object',
                    fields: {score: {kind: 'decimal_string'}},
                  },
                  user_multi_accounting: {
                    kind: 'object',
                    fields: {score: {kind: 'decimal_string'}},
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
   * Retrieves an AccountSignal by its ID.
   */
  retrieve(
    id: string,
    params?: V2.Signals.AccountSignalRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<AccountSignal>> {
    return this._makeRequest(
      'GET',
      `/v2/signals/account_signals/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            user_account_sharing: {
              kind: 'object',
              fields: {score: {kind: 'decimal_string'}},
            },
            user_multi_accounting: {
              kind: 'object',
              fields: {score: {kind: 'decimal_string'}},
            },
          },
        },
      }
    ) as any;
  }
}
export interface AccountSignal {
  /**
   * Unique identifier for the account signal.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.signals.account_signal';

  /**
   * The account or customer this signal is associated with.
   */
  account_details?: AccountSignal.AccountDetails;

  /**
   * The account evaluation that produced this signal, if applicable.
   */
  account_evaluation?: string;

  /**
   * Timestamp at which the signal was created.
   */
  created: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The type of signal.
   */
  type: AccountSignal.Type;

  /**
   * Data for the user account-sharing signal. Present only when type is user_account_sharing.
   */
  user_account_sharing?: AccountSignal.UserAccountSharing;

  /**
   * Data for the user multi-accounting signal. Present only when type is user_multi_accounting.
   */
  user_multi_accounting?: AccountSignal.UserMultiAccounting;
}
export namespace AccountSignal {
  export interface AccountDetails {
    /**
     * The v2 account ID of the account.
     */
    account?: string;

    /**
     * The v1 customer ID of the account, for users not yet migrated to v2/accounts.
     */
    customer?: string;
  }

  export type Type =
    | 'user_account_sharing'
    | 'user_multi_accounting'
    | OtherString;

  export interface UserAccountSharing {
    /**
     * Categorical assessment of the account-sharing risk.
     */
    risk_level: UserAccountSharing.RiskLevel;

    /**
     * The specific risk score for the account, between 0.00 and 100.00. Absent when risk level is
     * not_assessed or unknown, or when the user is not on a product tier that includes numeric scores.
     */
    score?: Decimal;
  }

  export interface UserMultiAccounting {
    /**
     * Categorical assessment of the multi-accounting risk.
     */
    risk_level: UserMultiAccounting.RiskLevel;

    /**
     * The specific risk score for the account, between 0.00 and 100.00. Absent when risk level is
     * not_assessed or unknown, or when the user is not on a product tier that includes numeric scores.
     */
    score?: Decimal;
  }

  export namespace UserAccountSharing {
    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown';
  }

  export namespace UserMultiAccounting {
    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown';
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountSignalRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Signals {
    export interface AccountSignalListParams {
      /**
       * Signal types to filter by.
       */
      type: Array<AccountSignalListParams.Type>;

      /**
       * The account or customer to list signals for. Exactly one of account_details.account or
       * account_details.customer must be provided.
       */
      account_details?: AccountSignalListParams.AccountDetails;

      /**
       * Maximum number of results to return per page. Defaults to 20.
       */
      limit?: number;
    }

    export namespace AccountSignalListParams {
      export type Type =
        | 'user_account_sharing'
        | 'user_multi_accounting'
        | OtherString;

      export interface AccountDetails {
        /**
         * The v2 account ID of the account.
         */
        account?: string;

        /**
         * The v1 customer ID of the account, for users not yet migrated to v2/accounts.
         */
        customer?: string;
      }
    }
  }
}
