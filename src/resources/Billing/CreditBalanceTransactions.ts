// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {CreditGrant} from './CreditGrants.js';
import {Invoice} from './../Invoices.js';
import * as TestHelpers from './../TestHelpers/index.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class CreditBalanceTransactionResource extends StripeResource {
  /**
   * Retrieve a list of credit balance transactions.
   */
  list(
    params?: Billing.CreditBalanceTransactionListParams,
    options?: RequestOptions
  ): ApiListPromise<CreditBalanceTransaction>;
  list(options?: RequestOptions): ApiListPromise<CreditBalanceTransaction>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/credit_balance_transactions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieves a credit balance transaction.
   */
  retrieve(
    id: string,
    params?: Billing.CreditBalanceTransactionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<CreditBalanceTransaction>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<CreditBalanceTransaction>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/billing/credit_balance_transactions/{id}',
    }).call(this, ...args);
  }
}
export interface CreditBalanceTransaction {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'billing.credit_balance_transaction';

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Credit details for this credit balance transaction. Only present if type is `credit`.
   */
  credit: Billing.CreditBalanceTransaction.Credit | null;

  /**
   * The credit grant associated with this credit balance transaction.
   */
  credit_grant: string | CreditGrant;

  /**
   * Debit details for this credit balance transaction. Only present if type is `debit`.
   */
  debit: Billing.CreditBalanceTransaction.Debit | null;

  /**
   * The effective time of this credit balance transaction.
   */
  effective_at: number;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * ID of the test clock this credit balance transaction belongs to.
   */
  test_clock: string | TestHelpers.TestClock | null;

  /**
   * The type of credit balance transaction (credit or debit).
   */
  type: Billing.CreditBalanceTransaction.Type | null;
}
export namespace Billing {
  export namespace CreditBalanceTransaction {
    export interface Credit {
      amount: Credit.Amount;

      /**
       * Details of the invoice to which the reinstated credits were originally applied. Only present if `type` is `credits_application_invoice_voided`.
       */
      credits_application_invoice_voided: Credit.CreditsApplicationInvoiceVoided | null;

      /**
       * The type of credit transaction.
       */
      type: Credit.Type;
    }

    export interface Debit {
      amount: Debit.Amount;

      /**
       * Details of how the billing credits were applied to an invoice. Only present if `type` is `credits_applied`.
       */
      credits_applied: Debit.CreditsApplied | null;

      /**
       * The type of debit transaction.
       */
      type: Debit.Type;
    }

    export type Type = 'credit' | 'debit';

    export namespace Credit {
      export interface Amount {
        /**
         * The monetary amount.
         */
        monetary: Amount.Monetary | null;

        /**
         * The type of this amount. We currently only support `monetary` billing credits.
         */
        type: 'monetary';
      }

      export interface CreditsApplicationInvoiceVoided {
        /**
         * The invoice to which the reinstated billing credits were originally applied.
         */
        invoice: string | Invoice;

        /**
         * The invoice line item to which the reinstated billing credits were originally applied.
         */
        invoice_line_item: string;
      }

      export type Type =
        | 'credits_application_invoice_voided'
        | 'credits_granted';

      export namespace Amount {
        export interface Monetary {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A positive integer representing the amount.
           */
          value: number;
        }
      }
    }

    export namespace Debit {
      export interface Amount {
        /**
         * The monetary amount.
         */
        monetary: Amount.Monetary | null;

        /**
         * The type of this amount. We currently only support `monetary` billing credits.
         */
        type: 'monetary';
      }

      export interface CreditsApplied {
        /**
         * The invoice to which the billing credits were applied.
         */
        invoice: string | Invoice;

        /**
         * The invoice line item to which the billing credits were applied.
         */
        invoice_line_item: string;
      }

      export type Type =
        | 'credits_applied'
        | 'credits_expired'
        | 'credits_voided';

      export namespace Amount {
        export interface Monetary {
          /**
           * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
           */
          currency: string;

          /**
           * A positive integer representing the amount.
           */
          value: number;
        }
      }
    }
  }
}
export namespace Billing {
  export interface CreditBalanceTransactionRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Billing {
  export interface CreditBalanceTransactionListParams extends PaginationParams {
    /**
     * The credit grant for which to fetch credit balance transactions.
     */
    credit_grant?: string;

    /**
     * The customer whose credit balance transactions you're retrieving.
     */
    customer?: string;

    /**
     * The account representing the customer whose credit balance transactions you're retrieving.
     */
    customer_account?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
