// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams, RangeQueryParam, Metadata} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';
const stripeMethod = StripeResource.method;

export class FinancingOfferResource extends StripeResource {
  /**
   * Retrieves the financing offers available for Connected accounts that belong to your platform.
   */
  list(
    params?: Capital.FinancingOfferListParams,
    options?: RequestOptions
  ): ApiListPromise<FinancingOffer>;
  list(options?: RequestOptions): ApiListPromise<FinancingOffer>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/capital/financing_offers',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Get the details of the financing offer
   */
  retrieve(
    id: string,
    params?: Capital.FinancingOfferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/capital/financing_offers/{financing_offer}',
    }).call(this, ...args);
  }

  /**
   * Acknowledges that platform has received and delivered the financing_offer to
   * the intended merchant recipient.
   */
  markDelivered(
    id: string,
    params?: Capital.FinancingOfferMarkDeliveredParams,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  markDelivered(
    id: string,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  markDelivered(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/capital/financing_offers/{financing_offer}/mark_delivered',
    }).call(this, ...args);
  }
}
export interface FinancingOffer {
  /**
   * A unique identifier for the financing object.
   */
  id: string;

  /**
   * The object type: financing_offer.
   */
  object: 'capital.financing_offer';

  /**
   * This is an object representing the terms of an offer of financing from
   * Stripe Capital to a Connected account. This resource represents
   * the terms accepted by the Connected account, which may differ from those
   * offered.
   */
  accepted_terms?: Capital.FinancingOffer.AcceptedTerms;

  /**
   * The ID of the merchant associated with this financing object.
   */
  account: string;

  /**
   * The time at which this financing offer was charged off, if applicable. Given in seconds since unix epoch.
   */
  charged_off_at?: number;

  /**
   * Time at which the offer was created. Given in seconds since unix epoch.
   */
  created: number;

  /**
   * Time at which the offer expires. Given in seconds since unix epoch.
   */
  expires_after: number;

  /**
   * The type of financing being offered.
   */
  financing_type?: Capital.FinancingOffer.FinancingType;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://docs.stripe.com/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: Metadata;

  /**
   * This is an object representing the terms of an offer of financing from
   * Stripe Capital to a Connected account. This resource represents
   * both the terms offered to the Connected account.
   */
  offered_terms?: Capital.FinancingOffer.OfferedTerms;

  /**
   * Financing product identifier.
   */
  product_type?: Capital.FinancingOffer.ProductType;

  /**
   * The ID of the financing offer that replaced this offer.
   */
  replacement?: string;

  /**
   * The ID of the financing offer that this offer is a replacement for.
   */
  replacement_for?: string;

  /**
   * The current status of the offer.
   */
  status: Capital.FinancingOffer.Status;

  /**
   * See [financing_type](https://docs.stripe.com/api/capital/connect_financing_object#financing_offer_object-financing_type).
   */
  type?: Capital.FinancingOffer.Type;
}
export namespace Capital {
  export namespace FinancingOffer {
    export interface AcceptedTerms {
      /**
       * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
       */
      advance_amount: number;

      /**
       * Currency that the financing offer is transacted in. For example, `usd`.
       */
      currency: string;

      /**
       * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
       */
      fee_amount: number;

      /**
       * Populated when the `product_type` of the `financingoffer` is `refill`.
       * Represents the discount amount on remaining premium for the existing loan at payout time.
       */
      previous_financing_fee_discount_amount: number | null;

      /**
       * Per-transaction rate at which Stripe withholds funds to repay the financing.
       */
      withhold_rate: number;
    }

    export type FinancingType = 'cash_advance' | 'flex_loan';

    export interface OfferedTerms {
      /**
       * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
       */
      advance_amount: number;

      /**
       * Describes the type of user the offer is being extended to.
       */
      campaign_type: OfferedTerms.CampaignType;

      /**
       * Currency that the financing offer is transacted in. For example, `usd`.
       */
      currency: string;

      /**
       * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
       */
      fee_amount: number;

      /**
       * Populated when the `product_type` of the `financingoffer` is `refill`.
       * Represents the discount rate percentage on remaining fee on the existing loan. When the `financing_offer`
       * is paid out, the `previous_financing_fee_discount_amount` will be computed as the multiple of this rate
       * and the remaining fee.
       */
      previous_financing_fee_discount_rate: number | null;

      /**
       * Per-transaction rate at which Stripe withholds funds to repay the financing.
       */
      withhold_rate: number;
    }

    export type ProductType = 'refill' | 'standard';

    export type Status =
      | 'accepted'
      | 'canceled'
      | 'completed'
      | 'delivered'
      | 'expired'
      | 'fully_repaid'
      | 'paid_out'
      | 'rejected'
      | 'replaced'
      | 'undelivered';

    export type Type = 'cash_advance' | 'fixed_term_loan' | 'flex_loan';

    export namespace OfferedTerms {
      export type CampaignType =
        | 'newly_eligible_user'
        | 'previously_eligible_user'
        | 'repeat_user';
    }
  }
}
export namespace Capital {
  export interface FinancingOfferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Capital {
  export interface FinancingOfferListParams extends PaginationParams {
    /**
     * limit list to offers belonging to given connected account
     */
    connected_account?: string;

    /**
     * Only return offers that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * limit list to offers with given status
     */
    status?: FinancingOfferListParams.Status;
  }

  export namespace FinancingOfferListParams {
    export type Status =
      | 'accepted'
      | 'canceled'
      | 'completed'
      | 'delivered'
      | 'expired'
      | 'fully_repaid'
      | 'paid_out'
      | 'rejected'
      | 'revoked'
      | 'undelivered';
  }
}
export namespace Capital {
  export interface FinancingOfferMarkDeliveredParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
