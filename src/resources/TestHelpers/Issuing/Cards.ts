// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Card} from './../../Issuing/Cards.js';
import {RequestOptions, Response} from '../../../lib.js';

export class CardResource extends StripeResource {
  /**
   * Updates the shipping status of the specified Issuing Card object to delivered.
   */
  deliverCard(
    id: string,
    params?: TestHelpers.Issuing.CardDeliverCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${id}/shipping/deliver`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to failure.
   */
  failCard(
    id: string,
    params?: TestHelpers.Issuing.CardFailCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${id}/shipping/fail`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to returned.
   */
  returnCard(
    id: string,
    params?: TestHelpers.Issuing.CardReturnCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${id}/shipping/return`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to shipped.
   */
  shipCard(
    id: string,
    params?: TestHelpers.Issuing.CardShipCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${id}/shipping/ship`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to submitted. This method requires Stripe Version ‘2024-09-30.acacia' or later.
   */
  submitCard(
    id: string,
    params?: TestHelpers.Issuing.CardSubmitCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${id}/shipping/submit`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardDeliverCardParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardFailCardParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardReturnCardParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardShipCardParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardSubmitCardParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
