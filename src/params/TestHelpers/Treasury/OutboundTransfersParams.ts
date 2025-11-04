// File generated from our OpenAPI spec

namespace TestHelpers {
  namespace Treasury {
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

    namespace OutboundTransferUpdateParams {
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

      namespace TrackingDetails {
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
namespace TestHelpers {
  namespace Treasury {
    export interface OutboundTransferFailParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Treasury {
    export interface OutboundTransferPostParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Treasury {
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

    namespace OutboundTransferReturnOutboundTransferParams {
      export interface ReturnedDetails {
        /**
         * Reason for the return.
         */
        code?: ReturnedDetails.Code;
      }

      namespace ReturnedDetails {
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
