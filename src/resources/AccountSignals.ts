// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface AccountSignals {
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'account_signals';

  /**
   * The account for which the signals belong to.
   */
  account: string;

  /**
   * The delinquency signal of the account.
   */
  delinquency?: AccountSignals.Delinquency | null;

  /**
   * The fraud intent signal of the account.
   */
  fraud_intent?: AccountSignals.FraudIntent | null;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
}
export namespace AccountSignals {
  export interface Delinquency {
    /**
     * Time at which the signal was evaluated, measured in seconds since the Unix epoch.
     */
    evaluated_at: number | null;

    /**
     * Array of objects representing individual factors that contributed to the calculated probability of delinquency.
     */
    indicators: Array<Delinquency.Indicator> | null;

    /**
     * The probability of delinquency. Can be between 0.00 and 100.00
     */
    probability: number | null;

    /**
     * Categorical assessment of the delinquency risk based on probability.
     */
    risk_level: Delinquency.RiskLevel;

    /**
     * Unique identifier for the delinquency signal.
     */
    signal_id: string | null;
  }

  export interface FraudIntent {
    /**
     * Time at which the signal was evaluated, measured in seconds since the Unix epoch.
     */
    evaluated_at: number | null;

    /**
     * Array of objects representing individual factors that contributed to the calculated probability of fraud intent.
     */
    indicators: Array<FraudIntent.Indicator> | null;

    /**
     * The probability of fraud intent. Can be between 0.00 and 100.00
     */
    probability: number | null;

    /**
     * Categorical assessment of the fraud intent risk based on probability.
     */
    risk_level: FraudIntent.RiskLevel;

    /**
     * Unique identifier for the fraud intent signal.
     */
    signal_id: string | null;
  }

  export namespace Delinquency {
    export interface Indicator {
      /**
       * A brief explanation of how this indicator contributed to the delinquency probability.
       */
      description: string;

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
        | 'dispute_window'
        | 'disputes'
        | 'duplicates'
        | 'exposure'
        | 'firmographic'
        | 'lifetime_metrics'
        | 'payment_processing'
        | 'payment_volume'
        | 'payouts'
        | 'refunds'
        | 'related_accounts'
        | 'tenure'
        | 'transfers';
    }
  }

  export namespace FraudIntent {
    export interface Indicator {
      /**
       * A brief explanation of how this indicator contributed to the delinquency probability.
       */
      description: string;

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
        | 'geo_location'
        | 'other'
        | 'other_related_accounts'
        | 'other_transaction_activity'
        | 'owner_email'
        | 'web_presence';
    }
  }
}
