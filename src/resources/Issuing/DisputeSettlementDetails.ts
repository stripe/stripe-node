// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class DisputeSettlementDetailResource extends StripeResource {
  /**
   * Returns a list of Issuing DisputeSettlementDetail objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Issuing.DisputeSettlementDetailListParams,
    options?: RequestOptions
  ): ApiListPromise<DisputeSettlementDetail> {
    return this._makeRequest(
      'GET',
      '/v1/issuing/dispute_settlement_details',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves an Issuing DisputeSettlementDetail object.
   */
  retrieve(
    id: string,
    params?: Issuing.DisputeSettlementDetailRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<DisputeSettlementDetail>> {
    return this._makeRequest(
      'GET',
      `/v1/issuing/dispute_settlement_details/${id}`,
      params,
      options
    ) as any;
  }
}
export interface DisputeSettlementDetail {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'issuing.dispute_settlement_detail';

  /**
   * Disputed amount in the card's currency and in the smallest currency unit. Usually the amount of the transaction, but can differ (usually because of currency fluctuation).
   */
  amount: number;

  /**
   * The card used to make the original transaction.
   */
  card: string;

  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;

  /**
   * The currency the original transaction was made in. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
   */
  currency: string;

  /**
   * The ID of the linked dispute.
   */
  dispute: string;

  /**
   * The type of event corresponding to this dispute settlement detail, representing the stage in the dispute network lifecycle.
   */
  event_type: Issuing.DisputeSettlementDetail.EventType;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The card network for this dispute settlement detail. One of ["visa", "mastercard", "maestro"]
   */
  network: Issuing.DisputeSettlementDetail.Network;

  /**
   * Details about the transaction, such as processing dates, set by the card network.
   */
  network_data: Issuing.DisputeSettlementDetail.NetworkData | null;

  /**
   * The ID of the linked card network settlement.
   */
  settlement: string | null;
}
export namespace Issuing {
  export namespace DisputeSettlementDetail {
    export type EventType = 'filing' | 'loss' | 'representment' | 'win';

    export type Network = 'maestro' | 'mastercard' | 'visa';

    export interface NetworkData {
      /**
       * The date the transaction was processed by the card network. This can be different from the date the seller recorded the transaction depending on when the acquirer submits the transaction to the network.
       */
      processing_date: string | null;
    }
  }
}
export namespace Issuing {
  export interface DisputeSettlementDetailRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface DisputeSettlementDetailListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Select the Issuing dispute settlement details for the given settlement.
     */
    settlement?: string;
  }
}
