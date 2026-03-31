// File generated from our OpenAPI spec

import {StripeResource} from '../StripeResource.js';
import {BalanceTransaction} from './BalanceTransactions.js';
import {MetadataParam, Metadata} from '../shared.js';
import {RequestOptions, Response} from '../lib.js';
const stripeMethod = StripeResource.method;

export class BalanceTransferResource extends StripeResource {
  /**
   * Creates a balance transfer. For Issuing use cases, funds will be debited immediately from the source balance and credited to the destination balance immediately (if your account is based in the US) or next-business-day (if your account is based in the EU). For Segregated Separate Charges and Transfers use cases, funds will be debited immediately from the source balance and credited immediately to the destination balance.
   */
  create(
    params: BalanceTransferCreateParams,
    options?: RequestOptions
  ): Promise<Response<BalanceTransfer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/balance_transfers',
    }).call(this, ...args);
  }
}
export interface BalanceTransfer {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'balance_transfer';

  /**
   * A positive integer representing how much was transferred in the smallest currency unit.
   */
  amount: number;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The balance that funds were transferred to.
   */
  destination_balance: BalanceTransfer.DestinationBalance | null;

  /**
   * A [hosted transaction receipt](https://docs.stripe.com/treasury/moving-money/regulatory-receipts) URL that is provided when money movement is considered regulated under Stripe's money transmission licenses.
   */
  hosted_regulatory_receipt_url: string | null;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The balance that funds were transferred from. One of `card`, `fpx`, or `bank_account`.
   */
  source_balance: BalanceTransfer.SourceBalance | null;
}
export namespace BalanceTransfer {
  export interface DestinationBalance {
    issuing?: DestinationBalance.Issuing;

    payments?: DestinationBalance.Payments;

    /**
     * Destination balance type to adjust for the Balance Transfer. One of `payments`, `issuing`, or `allocated_funds`.
     */
    type: string;
  }

  export interface SourceBalance {
    issuing?: SourceBalance.Issuing;

    payments?: SourceBalance.Payments;

    /**
     * Source balance type to adjust for the Balance Transfer. One of `payments`, `issuing`, or `allocated_funds`.
     */
    type: string;
  }

  export namespace DestinationBalance {
    export interface Issuing {
      /**
       * Identifier for the balance_transaction that increased the destination balance.
       */
      balance_transaction?: string | BalanceTransaction;
    }

    export interface Payments {
      /**
       * Identifier for the balance_transaction that increased the destination balance.
       */
      balance_transaction?: string | BalanceTransaction;
    }
  }

  export namespace SourceBalance {
    export interface Issuing {
      /**
       * Identifier for the balance_transaction that decreased the source balance.
       */
      balance_transaction?: string | BalanceTransaction;
    }

    export interface Payments {
      /**
       * Identifier for the balance_transaction that decreased the source balance.
       */
      balance_transaction: string | BalanceTransaction;

      /**
       * The payments balance type that this BalanceTransfer pulled funds from. One of `card`, `fpx`, or `bank_account`.
       */
      source_type?: string;
    }
  }
}
export interface BalanceTransferCreateParams {
  /**
   * A positive integer representing how much to transfer in the smallest currency unit.
   */
  amount: number;

  /**
   * Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: BalanceTransferCreateParams.Currency;

  /**
   * The balance to which funds are transferred.
   */
  destination_balance: BalanceTransferCreateParams.DestinationBalance;

  /**
   * The balance from which funds are transferred, including details specific to the balance you choose.
   */
  source_balance: BalanceTransferCreateParams.SourceBalance;

  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: Array<string>;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: MetadataParam;
}
export namespace BalanceTransferCreateParams {
  export type Currency = 'eur' | 'gbp' | 'usd';

  export interface DestinationBalance {
    /**
     * Destination balance type to push funds into for the Balance Transfer.
     */
    type: DestinationBalance.Type;
  }

  export interface SourceBalance {
    allocated_funds?: SourceBalance.AllocatedFunds;

    /**
     * Source balance type to pull funds from for the Balance Transfer.
     */
    type: SourceBalance.Type;
  }

  export namespace DestinationBalance {
    export type Type = 'issuing' | 'payments';
  }

  export namespace SourceBalance {
    export interface AllocatedFunds {
      /**
       * The charge ID that the funds are originally sourced from. Required if `type` is `charge`.
       */
      charge: string;

      /**
       * The type of object that the funds are originally sourced from. One of `charge`.
       */
      type: 'charge';
    }

    export type Type = 'allocated_funds' | 'issuing' | 'payments';
  }
}
