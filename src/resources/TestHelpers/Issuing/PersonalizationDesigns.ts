// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {PersonalizationDesign} from './../../Issuing/PersonalizationDesigns.js';
import {RequestOptions, Response} from '../../../lib.js';

export class PersonalizationDesignResource extends StripeResource {
  /**
   * Updates the status of the specified testmode personalization design object to active.
   */
  activate(
    id: string,
    params?: TestHelpers.Issuing.PersonalizationDesignActivateParams,
    options?: RequestOptions
  ): Promise<Response<PersonalizationDesign>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${id}/activate`,
      params,
      options
    );
  }
  /**
   * Updates the status of the specified testmode personalization design object to inactive.
   */
  deactivate(
    id: string,
    params?: TestHelpers.Issuing.PersonalizationDesignDeactivateParams,
    options?: RequestOptions
  ): Promise<Response<PersonalizationDesign>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${id}/deactivate`,
      params,
      options
    );
  }
  /**
   * Updates the status of the specified testmode personalization design object to rejected.
   */
  reject(
    id: string,
    params: TestHelpers.Issuing.PersonalizationDesignRejectParams,
    options?: RequestOptions
  ): Promise<Response<PersonalizationDesign>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${id}/reject`,
      params,
      options
    );
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface PersonalizationDesignActivateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface PersonalizationDesignDeactivateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
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

    export namespace PersonalizationDesignRejectParams {
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

      export namespace RejectionReasons {
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
