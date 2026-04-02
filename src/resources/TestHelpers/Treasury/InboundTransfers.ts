// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {InboundTransfer} from './../../Treasury/InboundTransfers.js';
import {RequestOptions, Response} from '../../../lib.js';

export class InboundTransferResource extends StripeResource {
  /**
   * Transitions a test mode created InboundTransfer to the failed status. The InboundTransfer must already be in the processing state.
   */
  fail(
    id: string,
    params?: TestHelpers.Treasury.InboundTransferFailParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/inbound_transfers/${id}/fail`,
      params,
      options
    );
  }
  /**
   * Marks the test mode InboundTransfer object as returned and links the InboundTransfer to a ReceivedDebit. The InboundTransfer must already be in the succeeded state.
   */
  returnInboundTransfer(
    id: string,
    params?: TestHelpers.Treasury.InboundTransferReturnInboundTransferParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/inbound_transfers/${id}/return`,
      params,
      options
    );
  }
  /**
   * Transitions a test mode created InboundTransfer to the succeeded status. The InboundTransfer must already be in the processing state.
   */
  succeed(
    id: string,
    params?: TestHelpers.Treasury.InboundTransferSucceedParams,
    options?: RequestOptions
  ): Promise<Response<InboundTransfer>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/treasury/inbound_transfers/${id}/succeed`,
      params,
      options
    );
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface InboundTransferFailParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Details about a failed InboundTransfer.
       */
      failure_details?: InboundTransferFailParams.FailureDetails;
    }

    export namespace InboundTransferFailParams {
      export interface FailureDetails {
        /**
         * Reason for the failure.
         */
        code?: FailureDetails.Code;
      }

      export namespace FailureDetails {
        export type Code =
          | 'account_closed'
          | 'account_frozen'
          | 'bank_account_restricted'
          | 'bank_ownership_changed'
          | 'debit_not_authorized'
          | 'incorrect_account_holder_address'
          | 'incorrect_account_holder_name'
          | 'incorrect_account_holder_tax_id'
          | 'insufficient_funds'
          | 'invalid_account_number'
          | 'invalid_currency'
          | 'no_account'
          | 'other';
      }
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface InboundTransferReturnInboundTransferParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Treasury {
    export interface InboundTransferSucceedParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
