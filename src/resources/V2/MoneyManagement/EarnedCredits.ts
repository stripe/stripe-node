// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {V2Amount} from './../V2Amounts.js';
import {OtherString} from '../../../shared.js';
import {RequestOptions, V2ListPromise, Response} from '../../../lib.js';

export class EarnedCreditResource extends StripeResource {
  /**
   * Returns a list of EarnedCredits.
   */
  list(
    params?: V2.MoneyManagement.EarnedCreditListParams,
    options?: RequestOptions
  ): V2ListPromise<EarnedCredit> {
    return this._makeRequest(
      'GET',
      '/v2/money_management/earned_credits',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an EarnedCredit.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.EarnedCreditRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<EarnedCredit>> {
    return this._makeRequest(
      'GET',
      `/v2/money_management/earned_credits/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface EarnedCredit {
  /**
   * Unique identifier for the EarnedCredit.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.earned_credit';

  /**
   * The amount and currency of the EarnedCredit.
   */
  amount: V2Amount;

  /**
   * Time at which the EarnedCredit was created.
   */
  created: string;

  /**
   * Description of the EarnedCredit.
   */
  description: string;

  /**
   * The FinancialAccount that earned the credit.
   */
  financial_account: string;

  /**
   * Has the value true if the object exists in live mode.
   */
  livemode: boolean;

  /**
   * The period during which the credit was earned.
   */
  period?: EarnedCredit.Period;

  /**
   * Details about the revenue share that caused the EarnedCredit.
   */
  revenue_share?: EarnedCredit.RevenueShare;

  /**
   * Details about the reward that caused the EarnedCredit.
   */
  reward?: EarnedCredit.Reward;

  /**
   * The status of the EarnedCredit.
   */
  status: EarnedCredit.Status;

  /**
   * Timestamps for EarnedCredit status transitions.
   */
  status_transitions: EarnedCredit.StatusTransitions;

  /**
   * The type of flow that caused the EarnedCredit.
   */
  type: EarnedCredit.Type;
}
export namespace EarnedCredit {
  export interface Period {
    /**
     * The end date of the period during which the credit was earned, inclusive.
     */
    end_date: string;

    /**
     * The start date of the period during which the credit was earned, inclusive.
     */
    start_date: string;
  }

  export interface RevenueShare {
    /**
     * The type of revenue share that caused the EarnedCredit.
     */
    type: RevenueShare.Type;
  }

  export interface Reward {
    /**
     * The program from which the reward was earned.
     */
    earned_from: Reward.EarnedFrom;

    /**
     * The Account that funded the reward.
     */
    from_account: string;

    /**
     * The OutboundPayment that delivered the reward.
     */
    outbound_payment: string;
  }

  export type Status = 'succeeded' | OtherString;

  export interface StatusTransitions {
    /**
     * The time at which the EarnedCredit succeeded.
     */
    succeeded_at?: string;
  }

  export type Type = 'interest' | 'revenue_share' | 'reward' | OtherString;

  export namespace RevenueShare {
    export type Type =
      | 'administrative_facilitation_fee'
      | 'savings_referral'
      | OtherString;
  }

  export namespace Reward {
    export type EarnedFrom = 'platform_cash_rewards' | OtherString;
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface EarnedCreditRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface EarnedCreditListParams {
      /**
       * The FinancialAccount to list EarnedCredits for.
       */
      financial_account?: string;

      /**
       * The maximum number of EarnedCredits to return.
       */
      limit?: number;
    }
  }
}
