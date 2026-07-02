// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {PaginationParams, RangeQueryParam} from '../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../lib.js';

export class TaxFundResource extends StripeResource {
  /**
   * Returns a list of tax funds in reverse chronological order.
   */
  list(
    params?: TaxFundListParams,
    options?: RequestOptions
  ): ApiListPromise<TaxFund> {
    return this._makeRequest('GET', '/v1/tax_funds', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Retrieves a tax fund object by its ID.
   */
  retrieve(
    id: string,
    params?: TaxFundRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TaxFund>> {
    return this._makeRequest(
      'GET',
      `/v1/tax_funds/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface TaxFund {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'tax_fund';

  /**
   * Amount swept, in the smallest currency unit. Always positive.
   */
  amount: number;

  /**
   * Associated billing or tax documents for this sweep.
   */
  context?: TaxFund.Context;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * Where funds moved to.
   */
  destination: TaxFund.Destination;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Where funds moved from.
   */
  source: TaxFund.Source;

  /**
   * What caused the sweep.
   */
  trigger: TaxFund.Trigger;
}
export namespace TaxFund {
  export interface Context {
    /**
     * The Checkout Session associated with this sweep, if any.
     */
    checkout_session?: string;

    /**
     * The Credit Note associated with this sweep, if any.
     */
    credit_note?: string;

    /**
     * The Invoice associated with this sweep, if any.
     */
    invoice?: string;

    /**
     * The PaymentIntent associated with this sweep, if any.
     */
    payment_intent?: string;

    /**
     * The Refund associated with this sweep, if any.
     */
    refund?: string;

    /**
     * The Tax Transaction associated with this sweep, if any.
     */
    tax_transaction?: string;
  }

  export interface Destination {
    /**
     * Details about the payments balance side of the sweep.
     */
    payments_balance?: Destination.PaymentsBalance;

    /**
     * Details about the tax fund financial account side of the sweep.
     */
    tax_fund_account?: Destination.TaxFundAccount;

    /**
     * The type of account funds moved to or from. Either `payments_balance` or `tax_fund_account`.
     */
    type: string;
  }

  export interface Source {
    /**
     * Details about the payments balance side of the sweep.
     */
    payments_balance?: Source.PaymentsBalance;

    /**
     * Details about the tax fund financial account side of the sweep.
     */
    tax_fund_account?: Source.TaxFundAccount;

    /**
     * The type of account funds moved to or from. Either `payments_balance` or `tax_fund_account`.
     */
    type: string;
  }

  export interface Trigger {
    /**
     * The balance transaction on the payments balance that triggered the sweep.
     */
    balance_transaction: string | BalanceTransaction;

    /**
     * The type of event that triggered the sweep. Always `balance_transaction`.
     */
    type: string;
  }

  export namespace Destination {
    export interface PaymentsBalance {
      /**
       * The balance transaction on the payments balance side of the sweep.
       */
      balance_transaction: string | BalanceTransaction;
    }

    export interface TaxFundAccount {
      /**
       * The tax fund financial account involved in the sweep.
       */
      financial_account?: string;

      /**
       * The financial account transaction on the tax fund account side of the sweep.
       */
      transaction?: string;
    }
  }

  export namespace Source {
    export interface PaymentsBalance {
      /**
       * The balance transaction on the payments balance side of the sweep.
       */
      balance_transaction: string | BalanceTransaction;
    }

    export interface TaxFundAccount {
      /**
       * The tax fund financial account involved in the sweep.
       */
      financial_account?: string;

      /**
       * The financial account transaction on the tax fund account side of the sweep.
       */
      transaction?: string;
    }
  }
}
export interface TaxFundRetrieveParams {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
export interface TaxFundListParams extends PaginationParams {
  /**
   * A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
   */
  created?: RangeQueryParam | number;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;
}
