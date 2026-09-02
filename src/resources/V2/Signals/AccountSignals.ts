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
                  fraudulent_merchant: {
                    kind: 'object',
                    fields: {probability: {kind: 'decimal_string'}},
                  },
                  merchant_delinquency: {
                    kind: 'object',
                    fields: {probability: {kind: 'decimal_string'}},
                  },
                  payment_delinquency_exposure: {
                    kind: 'object',
                    fields: {
                      additional_details: {
                        kind: 'object',
                        fields: {
                          gross_exposure_amount: {
                            kind: 'object',
                            fields: {value: {kind: 'int64_string'}},
                          },
                        },
                      },
                      exposure_amount: {
                        kind: 'object',
                        fields: {value: {kind: 'int64_string'}},
                      },
                    },
                  },
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
            fraudulent_merchant: {
              kind: 'object',
              fields: {probability: {kind: 'decimal_string'}},
            },
            merchant_delinquency: {
              kind: 'object',
              fields: {probability: {kind: 'decimal_string'}},
            },
            payment_delinquency_exposure: {
              kind: 'object',
              fields: {
                additional_details: {
                  kind: 'object',
                  fields: {
                    gross_exposure_amount: {
                      kind: 'object',
                      fields: {value: {kind: 'int64_string'}},
                    },
                  },
                },
                exposure_amount: {
                  kind: 'object',
                  fields: {value: {kind: 'int64_string'}},
                },
              },
            },
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
   * Data for the fraudulent merchant signal. Present only when type is fraudulent_merchant.
   */
  fraudulent_merchant?: AccountSignal.FraudulentMerchant;

  /**
   * Data for the fraudulent website signal. Present only when type is fraudulent_website.
   */
  fraudulent_website?: AccountSignal.FraudulentWebsite;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Data for the merchant delinquency signal. Present only when type is merchant_delinquency.
   */
  merchant_delinquency?: AccountSignal.MerchantDelinquency;

  /**
   * Data for the payment delinquency exposure signal. Present only when type is payment_delinquency_exposure.
   */
  payment_delinquency_exposure?: AccountSignal.PaymentDelinquencyExposure;

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

  export interface FraudulentMerchant {
    /**
     * Supplementary contextual data for the signal, including indicators.
     */
    additional_details?: FraudulentMerchant.AdditionalDetails;

    /**
     * The probability of the merchant being fraudulent. Can be between 0.00 and 100.00. Absent when risk level is unknown,
     * or when the user is not on a product tier that includes numeric scores.
     */
    probability?: Decimal;

    /**
     * Categorical assessment of the fraudulent merchant risk based on probability.
     */
    risk_level: FraudulentMerchant.RiskLevel;
  }

  export interface FraudulentWebsite {
    /**
     * Human-readable details about the fraudulent website evaluation.
     */
    details?: string;

    /**
     * Categorical assessment of the fraudulent website risk.
     */
    risk_level: FraudulentWebsite.RiskLevel;
  }

  export interface MerchantDelinquency {
    /**
     * Supplementary contextual data for the signal, including indicators.
     */
    additional_details?: MerchantDelinquency.AdditionalDetails;

    /**
     * The probability of delinquency. Can be between 0.00 and 100.00. Absent when risk level is unknown,
     * or when the user is not on a product tier that includes numeric scores.
     */
    probability?: Decimal;

    /**
     * Categorical assessment of the delinquency risk based on probability.
     */
    risk_level: MerchantDelinquency.RiskLevel;
  }

  export interface PaymentDelinquencyExposure {
    /**
     * Additional details about the exposure assessment.
     */
    additional_details: PaymentDelinquencyExposure.AdditionalDetails;

    /**
     * The exposure amount if this account becomes delinquent.
     */
    exposure_amount: PaymentDelinquencyExposure.ExposureAmount;
  }

  export type Type =
    | 'fraudulent_merchant'
    | 'fraudulent_website'
    | 'merchant_delinquency'
    | 'payment_delinquency_exposure'
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

  export namespace FraudulentMerchant {
    export interface AdditionalDetails {
      /**
       * Array of objects representing individual factors that contributed to the calculated probability. Absent when risk level is unknown,
       * or when the user is not on a product tier that includes indicators.
       */
      indicators: Array<AdditionalDetails.Indicator>;
    }

    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown';

    export namespace AdditionalDetails {
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
  }

  export namespace FraudulentWebsite {
    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown';
  }

  export namespace MerchantDelinquency {
    export interface AdditionalDetails {
      /**
       * Array of objects representing individual factors that contributed to the calculated probability of delinquency. Absent when risk level is unknown,
       * or when the user is not on a product tier that includes indicators.
       */
      indicators: Array<AdditionalDetails.Indicator>;
    }

    export type RiskLevel =
      | 'elevated'
      | 'highest'
      | 'low'
      | 'normal'
      | 'unknown';

    export namespace AdditionalDetails {
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

  export namespace PaymentDelinquencyExposure {
    export interface AdditionalDetails {
      /**
       * Total payments still exposed to dispute or refund risk in the event of delinquency.
       */
      gross_exposure_amount?: AdditionalDetails.GrossExposureAmount;

      /**
       * Percentage of Gross Exposure expected to be disputed or refunded and materialize as a loss in the event of delinquency.
       */
      loss_given_default_in_percentages?: number;

      /**
       * Predicted window size in days until dispute is raised.
       */
      predicted_dispute_window_in_days?: number;
    }

    export interface ExposureAmount {
      /**
       * ISO 4217 currency code.
       */
      currency: string;

      /**
       * Amount in minor units for the given currency.
       */
      value: bigint;
    }

    export namespace AdditionalDetails {
      export interface GrossExposureAmount {
        /**
         * ISO 4217 currency code.
         */
        currency: string;

        /**
         * Amount in minor units for the given currency.
         */
        value: bigint;
      }
    }
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
        | 'fraudulent_merchant'
        | 'fraudulent_website'
        | 'merchant_delinquency'
        | 'payment_delinquency_exposure'
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
