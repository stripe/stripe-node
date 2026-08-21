// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams, RangeQueryParam, OtherString} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class TransactionResource extends StripeResource {
  /**
   * Returns a list of Financial Connections Transaction objects.
   */
  list(
    params: FinancialConnections.TransactionListParams,
    options?: RequestOptions
  ): ApiListPromise<Transaction> {
    return this._makeRequest(
      'GET',
      '/v1/financial_connections/transactions',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves the details of a Financial Connections Transaction
   */
  retrieve(
    id: string,
    params?: FinancialConnections.TransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Transaction>> {
    return this._makeRequest(
      'GET',
      `/v1/financial_connections/transactions/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface Transaction {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'financial_connections.transaction';

  /**
   * The ID of the Financial Connections Account this transaction belongs to.
   */
  account: string;

  /**
   * The amount of this transaction, in cents (or local equivalent).
   */
  amount: number;

  /**
   * Classification labels for this transaction, one entry per subscribed use case.
   */
  classifications?: Array<Transaction.Classification> | null;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The description of this transaction.
   */
  description: string;

  /**
   * Enriched merchant information for this transaction.
   */
  enrichments?: Transaction.Enrichments | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The status of the transaction.
   */
  status: Transaction.Status;

  status_transitions: Transaction.StatusTransitions;

  /**
   * Time at which the transaction was transacted. Measured in seconds since the Unix epoch.
   */
  transacted_at: number;

  /**
   * The token of the transaction refresh that last updated or created this transaction.
   */
  transaction_refresh: string;

  /**
   * Time at which the object was last updated. Measured in seconds since the Unix epoch.
   */
  updated: number;
}
export namespace Transaction {
  export interface Classification {
    credit?: Classification.Credit;

    money_movement?: Classification.MoneyMovement;

    personal_finance?: Classification.PersonalFinance;

    /**
     * The taxonomy type for this classification entry.
     */
    type: string;
  }

  export interface Enrichments {
    merchant: Enrichments.Merchant;
  }

  export type Status = 'pending' | 'posted' | 'void' | OtherString;

  export interface StatusTransitions {
    /**
     * Time at which this transaction posted. Measured in seconds since the Unix epoch.
     */
    posted_at: number | null;

    /**
     * Time at which this transaction was voided. Measured in seconds since the Unix epoch.
     */
    void_at: number | null;
  }

  export namespace Classification {
    export interface Credit {
      /**
       * Stripe's confidence in this classification.
       */
      confidence_level: Credit.ConfidenceLevel | null;

      /**
       * The detailed category label for this transaction.
       */
      detailed_label: string | null;

      /**
       * The primary category label for this transaction.
       */
      primary_label: string | null;
    }

    export interface MoneyMovement {
      /**
       * Stripe's confidence in this classification.
       */
      confidence_level: MoneyMovement.ConfidenceLevel | null;

      /**
       * The detailed category label for this transaction.
       */
      detailed_label: string | null;

      /**
       * The primary category label for this transaction.
       */
      primary_label: string | null;
    }

    export interface PersonalFinance {
      /**
       * Stripe's confidence in this classification.
       */
      confidence_level: PersonalFinance.ConfidenceLevel | null;

      /**
       * The detailed category label for this transaction.
       */
      detailed_label: string | null;

      /**
       * The primary category label for this transaction.
       */
      primary_label: string | null;
    }

    export namespace Credit {
      export type ConfidenceLevel = 'high' | 'low' | 'medium' | 'very_high';
    }

    export namespace MoneyMovement {
      export type ConfidenceLevel = 'high' | 'low' | 'medium' | 'very_high';
    }

    export namespace PersonalFinance {
      export type ConfidenceLevel = 'high' | 'low' | 'medium' | 'very_high';
    }
  }

  export namespace Enrichments {
    export interface Merchant {
      /**
       * Stripe's confidence in the enriched merchant name.
       */
      confidence_level: Merchant.ConfidenceLevel | null;

      /**
       * The normalized merchant name for this transaction.
       */
      name: string | null;
    }

    export namespace Merchant {
      export type ConfidenceLevel = 'high' | 'low' | 'medium' | 'very_high';
    }
  }
}
export namespace FinancialConnections {
  export interface TransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace FinancialConnections {
  export interface TransactionListParams extends PaginationParams {
    /**
     * The ID of the Financial Connections Account whose transactions will be retrieved.
     */
    account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A filter on the list based on the object `transacted_at` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with the following options:
     */
    transacted_at?: RangeQueryParam | number;

    /**
     * A filter on the list based on the object `transaction_refresh` field. The value can be a dictionary with the following options:
     */
    transaction_refresh?: TransactionListParams.TransactionRefresh;
  }

  export namespace TransactionListParams {
    export interface TransactionRefresh {
      /**
       * Return results where the transactions were created or updated by a refresh that took place after this refresh (non-inclusive).
       */
      after: string;
    }
  }
}
