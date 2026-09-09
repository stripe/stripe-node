// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Price, DeletedPrice} from './../Prices.js';
import {OtherString, PaginationParams, RangeQueryParam} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class TrialOfferResource extends StripeResource {
  /**
   * Returns a list of trial offers.
   */
  list(
    params?: ProductCatalog.TrialOfferListParams,
    options?: RequestOptions
  ): ApiListPromise<TrialOffer> {
    return this._makeRequest(
      'GET',
      '/v1/product_catalog/trial_offers',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Creates a trial offer.
   */
  create(
    params: ProductCatalog.TrialOfferCreateParams,
    options?: RequestOptions
  ): Promise<Response<TrialOffer>> {
    return this._makeRequest(
      'POST',
      '/v1/product_catalog/trial_offers',
      params,
      options
    ) as any;
  }
  /**
   * Retrieves the trial offer with the given ID.
   */
  retrieve(
    id: string,
    params?: ProductCatalog.TrialOfferRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<TrialOffer>> {
    return this._makeRequest(
      'GET',
      `/v1/product_catalog/trial_offers/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
}
export interface TrialOffer {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'product_catalog.trial_offer';

  duration: TrialOffer.Duration;

  end_behavior: TrialOffer.EndBehavior;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * A brief, user-friendly name for the trial offer-for identification purposes.
   */
  name?: string | null;

  /**
   * The price during the trial offer.
   */
  price: string | Price | DeletedPrice;
}
export namespace TrialOffer {
  export interface Duration {
    relative?: Duration.Relative;

    /**
     * The type of trial offer duration.
     */
    type: Duration.Type;
  }

  export interface EndBehavior {
    transition: EndBehavior.Transition;

    /**
     * The type of behavior when the trial offer ends.
     */
    type: EndBehavior.Type;
  }

  export namespace Duration {
    export interface Relative {
      /**
       * The number of iterations of the price's interval for this trial offer.
       */
      iterations: number;
    }

    export type Type = 'relative' | 'timestamp' | OtherString;
  }

  export namespace EndBehavior {
    export interface Transition {
      /**
       * The new price to use at the end of the trial offer period.
       */
      price: string | Price | DeletedPrice;
    }

    export type Type = 'transition' | OtherString;
  }
}
export namespace ProductCatalog {
  export interface TrialOfferCreateParams {
    /**
     * Duration of one service period of the trial.
     */
    duration: TrialOfferCreateParams.Duration;

    /**
     * Define behavior that occurs at the end of the trial.
     */
    end_behavior: TrialOfferCreateParams.EndBehavior;

    /**
     * Price configuration during the trial period (amount, billing scheme, etc).
     */
    price: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * A brief, user-friendly name for the trial offer-for identification purposes.
     */
    name?: string;
  }

  export namespace TrialOfferCreateParams {
    export interface Duration {
      /**
       * The relative duration of the trial period computed as the number of recurring price intervals.
       */
      relative?: Duration.Relative;

      /**
       * Specifies how the trial offer duration is determined.
       */
      type: Duration.Type;
    }

    export interface EndBehavior {
      /**
       * The transition to apply when the trial offer ends.
       */
      transition: EndBehavior.Transition;
    }

    export namespace Duration {
      export interface Relative {
        /**
         * The number of recurring price's interval to apply for the trial period.
         */
        iterations: number;
      }

      export type Type = 'relative' | 'timestamp' | OtherString;
    }

    export namespace EndBehavior {
      export interface Transition {
        /**
         * The price to transition the recurring item to when the trial offer ends.
         */
        price: string;
      }
    }
  }
}
export namespace ProductCatalog {
  export interface TrialOfferRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace ProductCatalog {
  export interface TrialOfferListParams extends PaginationParams {
    /**
     * Only return trial offers that are active (`true`) or archived (`false`). If omitted, both active and archived trial offers are returned.
     */
    active?: boolean;

    /**
     * Only return trial offers that were created during the given date interval.
     */
    created?: RangeQueryParam | number;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return trial offers that reference these prices (during the trial period).
     */
    prices?: Array<string>;
  }
}
