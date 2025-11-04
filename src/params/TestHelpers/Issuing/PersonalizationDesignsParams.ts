// File generated from our OpenAPI spec

namespace TestHelpers {
  namespace Issuing {
    export interface PersonalizationDesignActivateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Issuing {
    export interface PersonalizationDesignDeactivateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
namespace TestHelpers {
  namespace Issuing {
    export interface PersonalizationDesignRejectParams {
      /**
       * The reason(s) the personalization design was rejected.
       */
      rejection_reasons: PersonalizationDesignRejectParams.RejectionReasons;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    namespace PersonalizationDesignRejectParams {
      export interface RejectionReasons {
        /**
         * The reason(s) the card logo was rejected.
         */
        card_logo?: Array<RejectionReasons.CardLogo>;

        /**
         * The reason(s) the carrier text was rejected.
         */
        carrier_text?: Array<RejectionReasons.CarrierText>;
      }

      namespace RejectionReasons {
        export type CardLogo =
          | 'geographic_location'
          | 'inappropriate'
          | 'network_name'
          | 'non_binary_image'
          | 'non_fiat_currency'
          | 'other'
          | 'other_entity'
          | 'promotional_material';

        export type CarrierText =
          | 'geographic_location'
          | 'inappropriate'
          | 'network_name'
          | 'non_fiat_currency'
          | 'other'
          | 'other_entity'
          | 'promotional_material';
      }
    }
  }
}
