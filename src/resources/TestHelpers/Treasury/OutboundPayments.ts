// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {OutboundPayment} from './../../Treasury/OutboundPayments.js';
import {ApplyExpand, OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class OutboundPaymentResource extends StripeResource {
  /**
   * Updates a test mode created OutboundPayment with tracking details. The OutboundPayment must not be cancelable, and cannot be in the canceled or failed states.
   */
  update<E extends string = never>(
    id: string,
    params: TestHelpers.Treasury.OutboundPaymentUpdateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<OutboundPayment, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(id)}`,
      params,
      options
    ) as any;
  }
  /**
   * Transitions a test mode created OutboundPayment to the failed status. The OutboundPayment must already be in the processing state.
   */
  fail<E extends string = never>(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentFailParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<OutboundPayment, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(
        id
      )}/fail`,
      params,
      options
    ) as any;
  }
  /**
   * Transitions a test mode created OutboundPayment to the posted status. The OutboundPayment must already be in the processing state.
   */
  post<E extends string = never>(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentPostParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<OutboundPayment, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(
        id
      )}/post`,
      params,
      options
    ) as any;
  }
  /**
   * Transitions a test mode created OutboundPayment to the returned status. The OutboundPayment must already be in the processing state.
   */
  returnOutboundPayment<E extends string = never>(
    id: string,
    params?: TestHelpers.Treasury.OutboundPaymentReturnOutboundPaymentParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<OutboundPayment, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/outbound_payments/${encodeURIComponent(
        id
      )}/return`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentUpdateParams<E extends string = string> {
      /**
       * Details about network-specific tracking information.
       */
      tracking_details: OutboundPaymentUpdateParams.TrackingDetails;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
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

        export type Type = 'ach' | 'us_domestic_wire' | OtherString;

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
    export interface OutboundPaymentFailParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentPostParams<E extends string = string> {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundPaymentReturnOutboundPaymentParams<
      E extends string = string
    > {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;

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
          | 'other'
          | OtherString;
      }
    }
  }
}
