// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions} from '../../../Types.js';
import {OutboundTransfer} from './../../Treasury/OutboundTransfers.js';
import {Response} from '../../../lib.js';
const stripeMethod = StripeResource.method;
export class OutboundTransferResource extends StripeResource {
  /**
   * Updates a test mode created OutboundTransfer with tracking details. The OutboundTransfer must not be cancelable, and cannot be in the canceled or failed states.
   */
  update(
    id: string,
    params: TestHelpers.Treasury.OutboundTransferUpdateParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundTransfer to the failed status. The OutboundTransfer must already be in the processing state.
   */
  fail(
    id: string,
    params?: TestHelpers.Treasury.OutboundTransferFailParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  fail(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  fail(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundTransfer to the posted status. The OutboundTransfer must already be in the processing state.
   */
  post(
    id: string,
    params?: TestHelpers.Treasury.OutboundTransferPostParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  post(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  post(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post',
    }).call(this, ...args);
  }

  /**
   * Transitions a test mode created OutboundTransfer to the returned status. The OutboundTransfer must already be in the processing state.
   */
  returnOutboundTransfer(
    id: string,
    params?: TestHelpers.Treasury.OutboundTransferReturnOutboundTransferParams,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  returnOutboundTransfer(
    id: string,
    options?: RequestOptions
  ): Promise<Response<OutboundTransfer>>;
  returnOutboundTransfer(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath:
        '/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return',
    }).call(this, ...args);
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundTransferUpdateParams {
      /**
       * Details about network-specific tracking information.
       */
      tracking_details: OutboundTransferUpdateParams.TrackingDetails;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    export namespace OutboundTransferUpdateParams {
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
    export interface OutboundTransferFailParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundTransferPostParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface OutboundTransferReturnOutboundTransferParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Details about a returned OutboundTransfer.
       */
      returned_details?: OutboundTransferReturnOutboundTransferParams.ReturnedDetails;
    }

    export namespace OutboundTransferReturnOutboundTransferParams {
      export interface ReturnedDetails {
        /**
         * Reason for the return.
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
