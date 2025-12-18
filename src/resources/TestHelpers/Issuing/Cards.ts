// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions} from '../../../Types.js';
import {Card} from './../../Issuing/Cards.js';
import {Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;
export class CardResource extends StripeResource {
  /**
   * Updates the shipping status of the specified Issuing Card object to delivered.
   */
  deliverCard(
    id: string,
    params?: TestHelpers.Issuing.CardDeliverCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>>;
  deliverCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
  deliverCard(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/deliver',
    }).call(this, ...args);
  }

  /**
   * Updates the shipping status of the specified Issuing Card object to failure.
   */
  failCard(
    id: string,
    params?: TestHelpers.Issuing.CardFailCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>>;
  failCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
  failCard(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/fail',
    }).call(this, ...args);
  }

  /**
   * Updates the shipping status of the specified Issuing Card object to returned.
   */
  returnCard(
    id: string,
    params?: TestHelpers.Issuing.CardReturnCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>>;
  returnCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
  returnCard(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/return',
    }).call(this, ...args);
  }

  /**
   * Updates the shipping status of the specified Issuing Card object to shipped.
   */
  shipCard(
    id: string,
    params?: TestHelpers.Issuing.CardShipCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>>;
  shipCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
  shipCard(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/ship',
    }).call(this, ...args);
  }

  /**
   * Updates the shipping status of the specified Issuing Card object to submitted. This method requires Stripe Version ‘2024-09-30.acacia' or later.
   */
  submitCard(
    id: string,
    params?: TestHelpers.Issuing.CardSubmitCardParams,
    options?: RequestOptions
  ): Promise<Response<Card>>;
  submitCard(id: string, options?: RequestOptions): Promise<Response<Card>>;
  submitCard(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/issuing/cards/{card}/shipping/submit',
    }).call(this, ...args);
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
