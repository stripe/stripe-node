// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Decimal} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class AccountSignalResource extends StripeResource {
  /**
   * Lists AccountSignals for a given account or customer, filtered by signal type.
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
                  fraudulent_merchant: {
                    kind: 'object',
                    fields: {probability: {kind: 'decimal_string'}},
                  },
                  merchant_delinquency: {
                    kind: 'object',
                    fields: {probability: {kind: 'decimal_string'}},
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
      `/v2/signals/account_signals/${id}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            fraudulent_merchant: {
              kind: 'object',
              fields: {probability: {kind: 'decimal_string'}},
            },
            merchant_delinquency: {
              kind: 'object',
              fields: {probability: {kind: 'decimal_string'}},
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
  account_details?: V2.Signals.AccountSignal.AccountDetails;

  /**
   * Timestamp at which the signal was created.
   */
  created: string;

  /**
   * Data for the fraudulent merchant signal. Present only when type is fraudulent_merchant.
   */
  fraudulent_merchant?: V2.Signals.AccountSignal.FraudulentMerchant;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Data for the merchant delinquency signal. Present only when type is merchant_delinquency.
   */
  merchant_delinquency?: V2.Signals.AccountSignal.MerchantDelinquency;

  /**
   * The type of signal.
   */
  type: V2.Signals.AccountSignal.Type;
}
export namespace V2 {
  export namespace Signals {
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

      export interface FraudulentMerchant {
        /**
         * Array of objects representing individual factors that contributed to the calculated probability. Absent when risk level is not_assessed or unknown,
         * or when the user is not on a product tier that includes indicators.
         */
        indicators: Array<FraudulentMerchant.Indicator>;

        /**
         * The probability of the merchant being fraudulent. Can be between 0.00 and 100.00. Absent when risk level is not_assessed or unknown,
         * or when the user is not on a product tier that includes numeric scores.
         */
        probability?: Decimal;

        /**
         * Categorical assessment of the fraudulent merchant risk based on probability.
         */
        risk_level: FraudulentMerchant.RiskLevel;
      }

      export interface MerchantDelinquency {
        /**
         * Array of objects representing individual factors that contributed to the calculated probability of delinquency. Absent when risk level is not_assessed or unknown,
         * or when the user is not on a product tier that includes indicators.
         */
        indicators: Array<MerchantDelinquency.Indicator>;

        /**
         * The probability of delinquency. Can be between 0.00 and 100.00. Absent when risk level is not_assessed or unknown,
         * or when the user is not on a product tier that includes numeric scores.
         */
        probability?: Decimal;

        /**
         * Categorical assessment of the delinquency risk based on probability.
         */
        risk_level: MerchantDelinquency.RiskLevel;
      }

      export type Type = 'fraudulent_merchant' | 'merchant_delinquency';

      export namespace FraudulentMerchant {
        export interface Indicator {
          /**
           * A brief explanation of how this indicator contributed to the fraudulent merchant probability.
           */
          explanation: string;

          /**
           * The effect this indicator had on the overall risk level.
           */
          impact: Indicator.Impact;

          /**
           * The name of the specific indicator used in the risk assessment.
           */
          indicator: Indicator.Indicator;
        }

        export type RiskLevel =
          | 'elevated'
          | 'highest'
          | 'low'
          | 'normal'
          | 'not_assessed'
          | 'unknown';

        export namespace Indicator {
          export type Impact =
            | 'decrease'
            | 'neutral'
            | 'slight_increase'
            | 'strong_increase';

          export type Indicator =
            | 'bank_account'
            | 'business_information_and_account_activity'
            | 'disputes'
            | 'failures'
            | 'geolocation'
            | 'other'
            | 'other_related_accounts'
            | 'other_transaction_activity'
            | 'owner_email';
        }
      }

      export namespace MerchantDelinquency {
        export interface Indicator {
          /**
           * A brief explanation of how this indicator contributed to the delinquency probability.
           */
          explanation: string;

          /**
           * The effect this indicator had on the overall risk level.
           */
          impact: Indicator.Impact;

          /**
           * The name of the specific indicator used in the risk assessment.
           */
          indicator: Indicator.Indicator;
        }

        export type RiskLevel =
          | 'elevated'
          | 'highest'
          | 'low'
          | 'normal'
          | 'not_assessed'
          | 'unknown';

        export namespace Indicator {
          export type Impact =
            | 'decrease'
            | 'neutral'
            | 'slight_increase'
            | 'strong_increase';

          export type Indicator =
            | 'account_balance'
            | 'aov'
            | 'charge_concentration'
            | 'disputes'
            | 'dispute_window'
            | 'exposure'
            | 'firmographic'
            | 'lifetime_metrics'
            | 'other'
            | 'payment_processing'
            | 'payment_volume'
            | 'payouts'
            | 'refunds'
            | 'related_accounts'
            | 'tenure'
            | 'transfers';
        }
      }
    }
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
      export type Type = 'fraudulent_merchant' | 'merchant_delinquency';

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
