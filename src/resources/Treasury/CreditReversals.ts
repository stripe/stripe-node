// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Transaction} from './Transactions.js';
import {
  ApplyExpandListItem,
  ApplyExpand,
  MetadataParam,
  PaginationParams,
  OtherString,
  Metadata,
} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class CreditReversalResource extends StripeResource {
  /**
   * Returns a list of CreditReversals.
   */
  list<E extends string = never>(
    params: Treasury.CreditReversalListParams<E>,
    options?: RequestOptions
  ): ApiListPromise<ApplyExpandListItem<CreditReversal, E>> {
    return this._makeRequest(
      'GET',
      '/v1/treasury/credit_reversals',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Reverses a ReceivedCredit and creates a CreditReversal object.
   */
  create<E extends string = never>(
    params: Treasury.CreditReversalCreateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<CreditReversal, E>>> {
    return this._makeRequest(
      'POST',
      '/v1/treasury/credit_reversals',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the details of an existing CreditReversal by passing the unique CreditReversal ID from either the CreditReversal creation request or CreditReversal list
   */
  retrieve<E extends string = never>(
    id: string,
    params?: Treasury.CreditReversalRetrieveParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<CreditReversal, E>>> {
    return this._makeRequest(
      'GET',
      `/v1/treasury/credit_reversals/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface CreditReversal {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'treasury.credit_reversal';

  /**
   * Amount (in cents) transferred.
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
   * The FinancialAccount to reverse funds from.
   */
  financial_account: string;

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
   * The rails used to reverse the funds.
   */
  network: CreditReversal.Network;

  /**
   * The ReceivedCredit being reversed.
   */
  received_credit: string;

  /**
   * Status of the CreditReversal
   */
  status: CreditReversal.Status;

  status_transitions: CreditReversal.StatusTransitions;

  /**
   * The Transaction associated with this object.
   */
  transaction: string | Transaction | null;
}
export namespace CreditReversal {
  export type Network = 'ach' | 'stripe' | OtherString;

  export type Status = 'canceled' | 'posted' | 'processing' | OtherString;

  export interface StatusTransitions {
    /**
     * Timestamp describing when the CreditReversal changed status to `posted`
     */
    posted_at: number | null;
  }
}
export namespace Treasury {
  export interface CreditReversalCreateParams<E extends string = string> {
    /**
     * The ReceivedCredit to reverse.
     */
    received_credit: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: MetadataParam;
  }
}
export namespace Treasury {
  export interface CreditReversalRetrieveParams<E extends string = string> {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;
  }
}
export namespace Treasury {
  export interface CreditReversalListParams<E extends string = string>
    extends PaginationParams {
    /**
     * Returns objects associated with this FinancialAccount.
     */
    financial_account: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<E>;

    /**
     * Only return CreditReversals for the ReceivedCredit ID.
     */
    received_credit?: string;

    /**
     * Only return CreditReversals for a given status.
     */
    status?: CreditReversalListParams.Status;
  }

  export namespace CreditReversalListParams {
    export type Status = 'canceled' | 'posted' | 'processing' | OtherString;
  }
}
