// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {BalanceTransaction} from './../BalanceTransactions.js';
import {PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class FraudLiabilityDebitResource extends StripeResource {
  /**
   * Returns a list of Issuing FraudLiabilityDebit objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Issuing.FraudLiabilityDebitListParams,
    options?: RequestOptions
  ): ApiListPromise<FraudLiabilityDebit> {
    return this._makeRequest(
      'GET',
      '/v1/issuing/fraud_liability_debits',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an Issuing FraudLiabilityDebit object.
   */
  retrieve(
    id: string,
    params?: Issuing.FraudLiabilityDebitRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FraudLiabilityDebit>> {
    return this._makeRequest(
      'GET',
      `/v1/issuing/fraud_liability_debits/${id}`,
      params,
      options
    ) as any;
  }
}
export interface FraudLiabilityDebit {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'issuing.fraud_liability_debit';

  /**
   * Debited amount. This is equal to the disputed amount and is given in the card's currency and in the smallest currency unit.
   */
  amount: number;

  /**
   * ID of the [balance transaction](https://docs.stripe.com/api/balance_transactions) associated with this debit.
   */
  balance_transaction: string | BalanceTransaction | null;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The currency of the debit. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The ID of the linked dispute.
   */
  dispute: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;
}
export namespace Issuing {
  export interface FraudLiabilityDebitRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface FraudLiabilityDebitListParams extends PaginationParams {
    /**
     * Only return Issuing Fraud Liability Debits that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
