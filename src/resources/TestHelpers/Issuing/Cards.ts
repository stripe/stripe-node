// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {Card} from './../../Issuing/Cards.js';
import {ApplyExpand} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class CardResource extends StripeResource {
  /**
   * Updates the shipping status of the specified Issuing Card object to delivered.
   */
  deliverCard<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.CardDeliverCardParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Card, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${encodeURIComponent(
        id
      )}/shipping/deliver`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to failure.
   */
  failCard<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.CardFailCardParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Card, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/fail`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to returned.
   */
  returnCard<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.CardReturnCardParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Card, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${encodeURIComponent(
        id
      )}/shipping/return`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to shipped.
   */
  shipCard<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.CardShipCardParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Card, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${encodeURIComponent(id)}/shipping/ship`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the shipping status of the specified Issuing Card object to submitted. This method requires Stripe Version ‘2024-09-30.acacia' or later.
   */
  submitCard<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.CardSubmitCardParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<Card, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/cards/${encodeURIComponent(
        id
      )}/shipping/submit`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardDeliverCardParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardFailCardParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardReturnCardParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardShipCardParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface CardSubmitCardParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
