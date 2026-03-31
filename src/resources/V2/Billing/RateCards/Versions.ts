// File generated from our OpenAPI spec

import {StripeResource} from '../../../../StripeResource.js';
import {RateCardVersion} from './../../../V2/Billing/RateCardVersions.js';
import {RequestOptions, ApiListPromise, Response} from '../../../../lib.js';
const stripeMethod = StripeResource.method;

export class VersionResource extends StripeResource {
  /**
   * List the versions of a Rate Card object. Results are sorted in reverse chronological order (most recent first).
   */
  list(
    id: string,
    params?: V2.Billing.RateCards.VersionListParams,
    options?: RequestOptions
  ): ApiListPromise<RateCardVersion>;
  list(id: string, options?: RequestOptions): ApiListPromise<RateCardVersion>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/rate_cards/{rate_card_id}/versions',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Retrieve a specific version of a Rate Card object.
   */
  retrieve(
    rateCardId: string,
    id: string,
    params?: V2.Billing.RateCards.VersionRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<RateCardVersion>>;
  retrieve(
    rateCardId: string,
    id: string,
    options?: RequestOptions
  ): Promise<Response<RateCardVersion>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v2/billing/rate_cards/{rate_card_id}/versions/{id}',
    }).call(this, ...args);
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface VersionRetrieveParams {}
    }
  }
}
export namespace V2 {
  export namespace Billing {
    export namespace RateCards {
      export interface VersionListParams {
        /**
         * Optionally set the maximum number of results per page. Defaults to 20.
         */
        limit?: number;
      }
    }
  }
}
