// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {FinancingOffer} from './../../Capital/FinancingOffers.js';
import {RequestOptions, Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;

export class FinancingOfferResource extends StripeResource {
  /**
   * Creates a test financing offer for a connected account.
   */
  create(
    params: TestHelpers.Capital.FinancingOfferCreateParams,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/capital/financing_offers',
    }).call(this, ...args);
  }

  /**
   * Refills a test financing offer for a connected account.
   */
  refill(
    id: string,
    params: TestHelpers.Capital.FinancingOfferRefillParams,
    options?: RequestOptions
  ): Promise<Response<FinancingOffer>>;
  refill(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/capital/financing_offers/{financing_offer}/refill',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export namespace Capital {
    export interface FinancingOfferCreateParams {
      /**
       * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
       */
      advance_amount: number;

      /**
       * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
       */
      fee_amount: number;

      /**
       * The type of financing offer.
       */
      financing_type: FinancingOfferCreateParams.FinancingType;

      /**
       * Per-transaction rate at which Stripe withholds funds to repay the financing.
       */
      withhold_rate: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The status of the financing offer.
       */
      status?: FinancingOfferCreateParams.Status;
    }

    export namespace FinancingOfferCreateParams {
      export type FinancingType =
        | 'cash_advance'
        | 'fixed_term_loan'
        | 'flex_loan';

      export type Status =
        | 'accepted'
        | 'accepted_other_offer'
        | 'canceled'
        | 'completed'
        | 'delivered'
        | 'expired'
        | 'fully_repaid'
        | 'paid_out'
        | 'rejected'
        | 'replaced'
        | 'undelivered';
    }
  }
}
export namespace TestHelpers {
  export namespace Capital {
    export interface FinancingOfferRefillParams {
      /**
       * Amount of financing offered, in minor units. For example, 1,000 USD is represented as 100000.
       */
      advance_amount: number;

      /**
       * Fixed fee amount, in minor units. For example, 100 USD is represented as 10000.
       */
      fee_amount: number;

      /**
       * The type of financing offer
       */
      financing_type: FinancingOfferRefillParams.FinancingType;

      /**
       * Per-transaction rate at which Stripe withholds funds to repay the financing.
       */
      withhold_rate: number;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The status of the financing offer
       */
      status?: FinancingOfferRefillParams.Status;
    }

    export namespace FinancingOfferRefillParams {
      export type FinancingType =
        | 'cash_advance'
        | 'fixed_term_loan'
        | 'flex_loan';

      export type Status =
        | 'accepted'
        | 'accepted_other_offer'
        | 'canceled'
        | 'completed'
        | 'delivered'
        | 'expired'
        | 'fully_repaid'
        | 'paid_out'
        | 'rejected'
        | 'replaced'
        | 'undelivered';
    }
  }
}
