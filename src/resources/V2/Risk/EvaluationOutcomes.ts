// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString, Decimal} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class EvaluationOutcomeResource extends StripeResource {
  /**
   * Lists all matching historical evaluation outcomes, newest first.
   */
  list(
    params: V2.Risk.EvaluationOutcomeListParams,
    options?: RequestOptions
  ): V2ListPromise<EvaluationOutcome> {
    return this._makeRequest(
      'GET',
      '/v2/risk/evaluation_outcomes',
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
                  delinquency: {
                    kind: 'object',
                    fields: {
                      supporting_signals: {
                        kind: 'object',
                        fields: {
                          merchant_delinquency: {
                            kind: 'object',
                            fields: {probability: {kind: 'decimal_string'}},
                          },
                        },
                      },
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
   * Retrieves an evaluation outcome by its ID.
   */
  retrieve(
    id: string,
    params?: V2.Risk.EvaluationOutcomeRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<EvaluationOutcome>> {
    return this._makeRequest(
      'GET',
      `/v2/risk/evaluation_outcomes/${encodeURIComponent(id)}`,
      params,
      options,
      {
        responseSchema: {
          kind: 'object',
          fields: {
            delinquency: {
              kind: 'object',
              fields: {
                supporting_signals: {
                  kind: 'object',
                  fields: {
                    merchant_delinquency: {
                      kind: 'object',
                      fields: {probability: {kind: 'decimal_string'}},
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
}
export interface EvaluationOutcome {
  /**
   * Unique identifier for the evaluation outcome, prefixed with evalout_.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.risk.evaluation_outcome';

  /**
   * Subject of the evaluation. Exactly one of account, customer, or data is provided.
   */
  account_details: EvaluationOutcome.AccountDetails;

  /**
   * Timestamp when the evaluation was created.
   */
  created: string;

  /**
   * Recommended controls, expected financial impact, and supporting signals for a delinquency
   * evaluation. Populated when type is delinquency; null otherwise.
   */
  delinquency?: EvaluationOutcome.Delinquency;

  /**
   * Whether the evaluation outcome is in live mode.
   */
  livemode: boolean;

  /**
   * How the outcome was generated.
   */
  origin: EvaluationOutcome.Origin;

  /**
   * Scenario evaluated; determines which type-specific payload is provided.
   */
  type: EvaluationOutcome.Type;
}
export namespace EvaluationOutcome {
  export interface AccountDetails {
    /**
     * Connected account evaluated.
     */
    account?: string;

    /**
     * Customer evaluated.
     */
    customer?: string;

    /**
     * Inline subject data for an evaluation without a Stripe entity.
     */
    data?: AccountDetails.Data;
  }

  export interface Delinquency {
    /**
     * The objective of the recommendation, with expected financial outcomes for the recommended
     * controls and the current configuration when those outcomes can be quantified.
     */
    business_objective: Delinquency.BusinessObjective;

    /**
     * Risk controls recommended to manage the account's delinquency risk.
     */
    controls: Array<Delinquency.Control>;

    /**
     * The balance between loss protection and revenue used to generate this recommendation.
     */
    risk_appetite: Delinquency.RiskAppetite;

    /**
     * Signals that informed this evaluation, with their values at evaluation time. Null when unavailable.
     */
    supporting_signals?: Delinquency.SupportingSignals;
  }

  export type Origin = 'rule_outcome' | 'stripe_recommendation' | OtherString;

  export type Type = 'delinquency' | OtherString;

  export namespace AccountDetails {
    export interface Data {
      /**
       * Contact email supplied for the evaluation, or null when unavailable.
       */
      contact_email?: string;
    }
  }

  export namespace Delinquency {
    export interface BusinessObjective {
      /**
       * Expected profitability, revenue, and losses if the current reserve configuration remains unchanged.
       * Provides a comparison for projected_outcome. Null when not reliably quantifiable.
       */
      baseline_outcome?: BusinessObjective.BaselineOutcome;

      /**
       * Expected profitability, revenue, and losses if the recommended controls are applied. Equals
       * baseline_outcome when the recommendation maintains the current state. Null when not reliably quantifiable.
       */
      projected_outcome?: BusinessObjective.ProjectedOutcome;

      /**
       * The financial objective the recommended controls are intended to improve.
       */
      type: BusinessObjective.Type;
    }

    export interface Control {
      /**
       * The recommended action for funds held in reserve, including a target configuration when
       * updating reserves. Populated when type is risk_reserve; null otherwise.
       */
      risk_reserve?: Control.RiskReserve;

      /**
       * The kind of control recommended to manage risk.
       */
      type: Control.Type;
    }

    export interface RiskAppetite {
      /**
       * How the recommendation prioritizes protection from losses relative to revenue.
       */
      mode: RiskAppetite.Mode;
    }

    export interface SupportingSignals {
      /**
       * The account's assessed probability and level of delinquency risk. Null when unavailable.
       */
      merchant_delinquency?: SupportingSignals.MerchantDelinquency;

      /**
       * The account's assessed financial exposure if it becomes delinquent. Null when unavailable.
       */
      payment_delinquency_exposure?: SupportingSignals.PaymentDelinquencyExposure;
    }

    export namespace BusinessObjective {
      export interface BaselineOutcome {
        /**
         * Expected financial loss from delinquency under this reserve configuration, expressed as a negative amount.
         */
        loss: V2Amount;

        /**
         * Expected financial result after accounting for revenue and losses. Can be negative.
         */
        profitability: V2Amount;

        /**
         * Expected revenue under this reserve configuration.
         */
        revenue: V2Amount;
      }

      export interface ProjectedOutcome {
        /**
         * Expected financial loss from delinquency under this reserve configuration, expressed as a negative amount.
         */
        loss: V2Amount;

        /**
         * Expected financial result after accounting for revenue and losses. Can be negative.
         */
        profitability: V2Amount;

        /**
         * Expected revenue under this reserve configuration.
         */
        revenue: V2Amount;
      }

      export type Type = 'profitability' | OtherString;
    }

    export namespace Control {
      export interface RiskReserve {
        /**
         * Whether to update, maintain, or clear reserves.
         */
        action: RiskReserve.Action;

        /**
         * Recommended reserve configuration, specifying the percentage of funds to hold, when to release
         * them, and whether to include available funds. Populated for update_reserve; null for
         * maintain_current_state and clear_reserve.
         */
        target?: RiskReserve.Target;
      }

      export type Type = 'risk_reserve' | OtherString;

      export namespace RiskReserve {
        export type Action =
          | 'clear_reserve'
          | 'maintain_current_state'
          | 'update_reserve'
          | OtherString;

        export interface Target {
          /**
           * Integer percentage of funds to reserve.
           */
          percent: number;

          /**
           * Integer number of days after which reserved funds are released.
           */
          release_after_days: number;

          /**
           * How reserved funds are released.
           */
          release_type: Target.ReleaseType;

          /**
           * Whether to reserve already available funds as well as future funds.
           */
          sweep_available_funds: boolean;
        }

        export namespace Target {
          export type ReleaseType = 'rolling' | OtherString;
        }
      }
    }

    export namespace RiskAppetite {
      export type Mode =
        | 'balanced'
        | 'maximize_protection'
        | 'maximize_revenue'
        | OtherString;
    }

    export namespace SupportingSignals {
      export interface MerchantDelinquency {
        /**
         * Time the signal was evaluated.
         */
        evaluated_at: string;

        /**
         * Probability of delinquency, represented as a decimal string. Null when the risk level is
         * unknown or the account signal does not include a numeric score.
         */
        probability?: Decimal;

        /**
         * Assessed risk level.
         */
        risk_level: MerchantDelinquency.RiskLevel;

        /**
         * ID of the supporting account signal.
         */
        signal: string;
      }

      export interface PaymentDelinquencyExposure {
        /**
         * Time the signal was evaluated.
         */
        evaluated_at: string;

        /**
         * Exposure if the account becomes delinquent.
         */
        exposure_amount: V2Amount;

        /**
         * ID of the supporting account signal.
         */
        signal: string;
      }

      export namespace MerchantDelinquency {
        export type RiskLevel =
          | 'elevated'
          | 'highest'
          | 'low'
          | 'normal'
          | 'unknown';
      }
    }
  }
}
export namespace V2 {
  export namespace Risk {
    export interface EvaluationOutcomeRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Risk {
    export interface EvaluationOutcomeListParams {
      /**
       * Account selector for the historical outcomes requested.
       */
      account_details: EvaluationOutcomeListParams.AccountDetails;

      /**
       * Maximum number of results per page. Defaults to 10; use 1 for the latest matching outcome.
       */
      limit?: number;

      /**
       * Evaluation origin to filter by. Omit to match all origins.
       */
      origin?: EvaluationOutcomeListParams.Origin;

      /**
       * Evaluation type to filter by. Omit to match all types.
       */
      type?: EvaluationOutcomeListParams.Type;
    }

    export namespace EvaluationOutcomeListParams {
      export interface AccountDetails {
        /**
         * The v2 account ID to list evaluation outcomes for.
         */
        account?: string;
      }

      export type Origin =
        | 'rule_outcome'
        | 'stripe_recommendation'
        | OtherString;

      export type Type = 'delinquency' | OtherString;
    }
  }
}
