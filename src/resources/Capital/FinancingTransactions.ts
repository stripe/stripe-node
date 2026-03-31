// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class FinancingTransactionResource extends StripeResource {
  /**
   * Returns a list of financing transactions. The transactions are returned in sorted order,
   * with the most recent transactions appearing first.
   */
  list(
    params?: Capital.FinancingTransactionListParams,
    options?: RequestOptions
  ): ApiListPromise<FinancingTransaction>;
  list(options?: RequestOptions): ApiListPromise<FinancingTransaction>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/capital/financing_transactions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves a financing transaction for a financing offer.
   */
  retrieve(
    id: string,
    params?: Capital.FinancingTransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancingTransaction>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FinancingTransaction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/capital/financing_transactions/{financing_transaction}',
    }).call(this, ...args);
  }
}
export interface FinancingTransaction {
  /**
   * A unique identifier for the financing transaction object.
   */
  id: string;

  /**
   * The object type: financing_transaction
   */
  object: 'capital.financing_transaction';

  /**
   * The ID of the merchant associated with this financing transaction.
   */
  account: string;

  /**
   * Time at which the financing transaction was created. Given in seconds since unix epoch.
   */
  created_at: number;

  /**
   * This is an object representing a transaction on a Capital financing offer.
   */
  details: Capital.FinancingTransaction.Details;

  /**
   * The Capital financing offer for this financing transaction.
   */
  financing_offer: string | null;

  /**
   * The Capital transaction object that predates the Financing Transactions API and
   * corresponds with the balance transaction that was created as a result of this
   * financing transaction.
   */
  legacy_balance_transaction_source?: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The type of the financing transaction.
   */
  type: Capital.FinancingTransaction.Type;

  /**
   * A human-friendly description of the financing transaction.
   */
  user_facing_description: string | null;
}
export namespace Capital {
  export namespace FinancingTransaction {
    export interface Details {
      /**
       * The advance amount being repaid, paid out, or reversed in minor units.
       */
      advance_amount: number;

      /**
       * The currency of the financing transaction.
       */
      currency: string;

      /**
       * The fee amount being repaid, paid out, or reversed in minor units.
       */
      fee_amount: number;

      /**
       * The linked payment for the transaction. This field only applies to financing transactions of type `paydown` and reason `automatic_withholding`.
       */
      linked_payment?: string;

      /**
       * The reason for the financing transaction (if applicable).
       */
      reason?: Details.Reason;

      /**
       * The reversed transaction. This field only applies to financing
       * transactions of type `reversal`.
       */
      reversed_transaction?: string;

      /**
       * The advance and fee amount being repaid, paid out, or reversed in minor units.
       */
      total_amount: number;

      /**
       * This is an object representing a linked transaction on a Capital Financing Transaction.
       */
      transaction?: Details.Transaction;
    }

    export type Type = 'payment' | 'payout' | 'reversal';

    export namespace Details {
      export type Reason =
        | 'automatic_withholding'
        | 'automatic_withholding_refund'
        | 'collection'
        | 'collection_failure'
        | 'financing_cancellation'
        | 'refill'
        | 'requested_by_user'
        | 'user_initiated';

      export interface Transaction {
        /**
         * The linked payment ID.
         */
        charge?: string;

        /**
         * The linked Treasury Financing Transaction ID.
         */
        treasury_transaction?: string;
      }
    }
  }
}
export namespace Capital {
  export interface FinancingTransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Capital {
  export interface FinancingTransactionListParams extends PaginationParams {
    /**
     * For transactions of type `paydown` and reason `automatic_withholding` only, only returns transactions that were created as a result of this charge.
     */
    charge?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Returns transactions that were created that apply to this financing offer ID.
     */
    financing_offer?: string;

    /**
     * Only returns transactions that are responsible for reversing this financing transaction ID.
     */
    reversed_transaction?: string;

    /**
     * For transactions of type `paydown` and reason `automatic_withholding` only, only returns transactions that were created as a result of this Treasury Transaction.
     */
    treasury_transaction?: string;
  }
}
