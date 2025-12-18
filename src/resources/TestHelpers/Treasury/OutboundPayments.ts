// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions} from '../../../Types.js';
import {OutboundPayment} from './../../Treasury/OutboundPayments.js';
import {Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;
export class OutboundPaymentResource extends StripeResource {
  /**
   * Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the canceled or failed states.
   */
  update(
    id: string,
    params: TestHelpers.Treasury.OutboundPaymentUpdateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundPayment to the failed status. The OutboundPayment must already be in the processing state.
   */
  fail(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentFailParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  fail(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  fail(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/fail',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundPayment to the posted status. The OutboundPayment must already be in the processing state.
   */
  post(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentPostParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  post(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  post(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/post',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundPayment to the returned status. The OutboundPayment must already be in the processing state.
   */
  returnOutboundPayment(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentReturnOutboundPaymentParams,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  returnOutboundPayment(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundPayment>>;
  returnOutboundPayment(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/test_helpers/treasury/outbound_payments/{id}/return',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentUpdateParams {
      /**
       * Details about network-specific tracking information.
       */
      tracking_details: OutboundPaymentUpdateParams.TrackingDetails;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace OutboundPaymentUpdateParams {
      export interface TrackingDetails {
        /**
         * ACH network tracking details.
         */
        ach?: TrackingDetails.Ach;

        /**
         * The US bank account network used to send funds.
         */
        type: TrackingDetails.Type;

        /**
         * US domestic wire network tracking details.
         */
        us_domestic_wire?: TrackingDetails.UsDomesticWire;
      }

      export namespace TrackingDetails {
        export interface Ach {
          /**
           * ACH trace ID for funds sent over the `ach` network.
           */
          trace_id: string;
        }

        export type Type = 'ach' | 'us_domestic_wire';

        export interface UsDomesticWire {
          /**
           * CHIPS System Sequence Number (SSN) for funds sent over the `us_domestic_wire` network.
           */
          chips?: string;

          /**
           * IMAD for funds sent over the `us_domestic_wire` network.
           */
          imad?: string;

          /**
           * OMAD for funds sent over the `us_domestic_wire` network.
           */
          omad?: string;
        }
      }
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentFailParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentPostParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentReturnOutboundPaymentParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Optional hash to set the return code.
       */
      returned_details?: OutboundPaymentReturnOutboundPaymentParams.ReturnedDetails;
    }

    export namespace OutboundPaymentReturnOutboundPaymentParams {
      export interface ReturnedDetails {
        /**
         * The return code to be set on the OutboundPayment object.
         */
        code?: ReturnedDetails.Code;
      }

      export namespace ReturnedDetails {
        export type Code =
          | 'account_closed'
          | 'account_frozen'
          | 'bank_account_restricted'
          | 'bank_ownership_changed'
          | 'declined'
          | 'incorrect_account_holder_name'
          | 'invalid_account_number'
          | 'invalid_currency'
          | 'no_account'
          | 'other';
      }
    }
  }
}
