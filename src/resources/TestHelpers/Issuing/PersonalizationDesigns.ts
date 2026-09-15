// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {PersonalizationDesign} from './../../Issuing/PersonalizationDesigns.js';
import {ApplyExpand, OtherString} from '../../../shared.js';
import {RequestOptions, Response} from '../../../lib.js';

export class PersonalizationDesignResource extends StripeResource {
  /**
   * Updates the status of the specified testmode personalization design object to active.
   */
  activate<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.PersonalizationDesignActivateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<PersonalizationDesign, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(
        id
      )}/activate`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the status of the specified testmode personalization design object to inactive.
   */
  deactivate<E extends string = never>(
    id: string,
    params?: TestHelpers.Issuing.PersonalizationDesignDeactivateParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<PersonalizationDesign, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(
        id
      )}/deactivate`,
      params,
      options
    ) as any;
  }
  /**
   * Updates the status of the specified testmode personalization design object to rejected.
   */
  reject<E extends string = never>(
    id: string,
    params: TestHelpers.Issuing.PersonalizationDesignRejectParams<E>,
    options?: RequestOptions
  ): Promise<Response<ApplyExpand<PersonalizationDesign, E>>> {
    return this._makeRequest(
      'POST',
      `/v1/test_helpers/issuing/personalization_designs/${encodeURIComponent(
        id
      )}/reject`,
      params,
      options
    ) as any;
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface PersonalizationDesignActivateParams<
      E extends string = string
    > {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface PersonalizationDesignDeactivateParams<
      E extends string = string
    > {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
    }
  }
}
export namespace TestHelpers {
  export namespace Issuing {
    export interface PersonalizationDesignRejectParams<
      E extends string = string
    > {
      /**
       * The reason(s) the personalization design was rejected.
       */
      rejection_reasons: PersonalizationDesignRejectParams.RejectionReasons;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<E>;
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
          | 'promotional_material'
          | OtherString;

        export type CarrierText =
          | 'geographic_location'
          | 'inappropriate'
          | 'network_name'
          | 'non_fiat_currency'
          | 'other'
          | 'other_entity'
          | 'promotional_material'
          | OtherString;
      }
    }
  }
}
