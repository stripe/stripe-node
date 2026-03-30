// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Amount} from './../../V2/Amounts.js';
import {RequestOptions, ApiListPromise, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class InboundTransferResource extends StripeResource {
  /**
   * Retrieves a list of InboundTransfers.
   */
  list(
    params?: V2.MoneyManagement.InboundTransferListParams,
    options?: RequestOptions
  ): ApiListPromise<InboundTransfer>;
  list(options?: RequestOptions): ApiListPromise<InboundTransfer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/inbound_transfers',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * InboundTransfers APIs are used to create, retrieve or list InboundTransfers.
   * @throws Stripe.BlockedByStripeError
   */
  create(
    params: V2.MoneyManagement.InboundTransferCreateParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v2/money_management/inbound_transfers',
    }).call(this, ...args);
  }

  /**
   * Retrieve an InboundTransfer by ID.
   */
  retrieve(
    id: string,
    params?: V2.MoneyManagement.InboundTransferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/money_management/inbound_transfers/{id}',
    }).call(this, ...args);
  }
}
export interface InboundTransfer {
  /**
   * Unique identifier for the InboundTransfer.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.money_management.inbound_transfer';

  /**
   * The amount in specified currency that will land in the FinancialAccount balance.
   */
  amount: Amount;

  /**
   * Creation time of the InboundTransfer. Represented as a RFC 3339 date & time UTC value in millisecond precision, for example: 2022-09-18T13:22:18.123Z.
   */
  created: string;

  /**
   * A freeform text field provided by user, containing metadata.
   */
  description: string;

  /**
   * A nested object containing information about the origin of the InboundTransfer.
   */
  from: V2.MoneyManagement.InboundTransfer.From;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * A hosted transaction receipt URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  receipt_url?: string;

  /**
   * A nested object containing information about the destination of the InboundTransfer.
   */
  to: V2.MoneyManagement.InboundTransfer.To;

  /**
   * A list of history objects, representing changes in the state of the InboundTransfer.
   */
  transfer_history: Array<V2.MoneyManagement.InboundTransfer.TransferHistory>;
}
export namespace V2 {
  export namespace MoneyManagement {
    export namespace InboundTransfer {
      export interface From {
        /**
         * The amount in specified currency that was debited from the Payment Method.
         */
        debited: Amount;

        /**
         * The Payment Method object used to create the InboundTransfer.
         */
        payment_method: From.PaymentMethod;
      }

      export interface To {
        /**
         * The amount by which the FinancialAccount balance is credited.
         */
        credited: Amount;

        /**
         * The FinancialAccount that funds will land in.
         */
        financial_account: string;
      }

      export interface TransferHistory {
        /**
         * Creation time of the HistoryEntry in RFC 3339 format and UTC.
         */
        created: string;

        /**
         * Effective at time of the HistoryEntry in RFC 3339 format and UTC.
         */
        effective_at: string;

        /**
         * A unique ID for the HistoryEntry.
         */
        id: string;

        /**
         * Open Enum. The Level of the HistoryEntry.
         */
        level: TransferHistory.Level;

        /**
         * Open Enum. The type of the HistoryEntry.
         */
        type: TransferHistory.Type;

        /**
         * The history entry for a failed InboundTransfer.
         */
        bank_debit_failed?: TransferHistory.BankDebitFailed;

        /**
         * The history entry for a processing InboundTransfer.
         */
        bank_debit_processing?: TransferHistory.BankDebitProcessing;

        /**
         * The history entry for a queued InboundTransfer.
         */
        bank_debit_queued?: TransferHistory.BankDebitQueued;

        /**
         * The history entry for a returned InboundTransfer.
         */
        bank_debit_returned?: TransferHistory.BankDebitReturned;

        /**
         * The history entry for a succeeded InboundTransfer.
         */
        bank_debit_succeeded?: TransferHistory.BankDebitSucceeded;
      }

      export namespace From {
        export interface PaymentMethod {
          /**
           * The type of object this destination represents. For a us bank account, we expect us_bank_account.
           */
          type: string;

          /**
           * The destination US bank account identifier. eg "usba_***".
           */
          us_bank_account?: string;
        }
      }

      export namespace TransferHistory {
        export type Level = 'canonical' | 'debug';

        export type Type =
          | 'bank_debit_failed'
          | 'bank_debit_processing'
          | 'bank_debit_queued'
          | 'bank_debit_returned'
          | 'bank_debit_succeeded';

        export interface BankDebitFailed {
          /**
           * Open Enum. The return reason for the failed InboundTransfer.
           */
          failure_reason: BankDebitFailed.FailureReason;
        }

        export type BankDebitProcessing = {
          [key: string]: unknown;
        };

        export type BankDebitQueued = {
          [key: string]: unknown;
        };

        export interface BankDebitReturned {
          /**
           * Open Enum. The return reason for the returned InboundTransfer.
           */
          return_reason: BankDebitReturned.ReturnReason;
        }

        export type BankDebitSucceeded = {
          [key: string]: unknown;
        };

        export namespace BankDebitFailed {
          export type FailureReason =
            | 'bank_account_closed'
            | 'bank_account_not_found'
            | 'bank_debit_could_not_be_processed'
            | 'bank_debit_not_authorized'
            | 'insufficient_funds';
        }

        export namespace BankDebitReturned {
          export type ReturnReason =
            | 'bank_account_closed'
            | 'bank_account_not_found'
            | 'bank_debit_could_not_be_processed'
            | 'bank_debit_not_authorized'
            | 'insufficient_funds';
        }
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferCreateParams {
      /**
       * The amount, in specified currency, by which the FinancialAccount balance will increase due to the InboundTransfer.
       */
      amount: Amount;

      /**
       * Object containing details about where the funds will originate from.
       */
      from: InboundTransferCreateParams.From;

      /**
       * Object containing details about where the funds will land.
       */
      to: InboundTransferCreateParams.To;

      /**
       * An optional, freeform description field intended to store metadata.
       */
      description?: string;
    }

    export namespace InboundTransferCreateParams {
      export interface From {
        /**
         * An optional currency field used to specify which currency is debited from the Payment Method.
         * Since many Payment Methods support only one currency, this field is optional.
         */
        currency?: string;

        /**
         * ID of the Payment Method using which IBT will be made.
         */
        payment_method: string;
      }

      export interface To {
        /**
         * The currency in which funds will land in.
         */
        currency: string;

        /**
         * The FinancialAccount that funds will land in.
         */
        financial_account: string;
      }
    }
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferRetrieveParams {}
  }
}
export namespace V2 {
  export namespace MoneyManagement {
    export interface InboundTransferListParams {
      /**
       * Filter for objects created at the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created?: string;

      /**
       * Filter for objects created after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gt?: string;

      /**
       * Filter for objects created on or after the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_gte?: string;

      /**
       * Filter for objects created before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lt?: string;

      /**
       * Filter for objects created on or before the specified timestamp.
       * Must be an RFC 3339 date & time value, for example: 2022-09-18T13:22:00Z.
       */
      created_lte?: string;

      /**
       * The page limit.
       */
      limit?: number;
    }
  }
}
