// File generated from our OpenAPI spec

namespace TestHelpers {
  namespace Treasury {
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

    namespace OutboundPaymentUpdateParams {
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
    export interface OutboundPaymentFailParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Treasury {
    export interface OutboundPaymentPostParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Treasury {
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

    namespace OutboundPaymentReturnOutboundPaymentParams {
      export interface ReturnedDetails {
        /**
         * The return code to be set on the OutboundPayment object.
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
