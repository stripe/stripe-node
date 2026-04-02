// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class PhysicalBundleResource extends StripeResource {
  /**
   * Returns a list of physical bundle objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
   */
  list(
    params?: Issuing.PhysicalBundleListParams,
    options?: RequestOptions
  ): ApiListPromise<PhysicalBundle> {
    return this._makeRequest(
      'GET',
      '/v1/issuing/physical_bundles',
      params,
      options,
      {
        methodType: 'list',
      }
    ) as any;
  }
  /**
   * Retrieves a physical bundle object.
   */
  retrieve(
    id: string,
    params?: Issuing.PhysicalBundleRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<PhysicalBundle>> {
    return this._makeRequest(
      'GET',
      `/v1/issuing/physical_bundles/${id}`,
      params,
      options
    ) as any;
  }
}
export interface PhysicalBundle {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'issuing.physical_bundle';

  features: Issuing.PhysicalBundle.Features;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * Friendly display name.
   */
  name: string;

  /**
   * Whether this physical bundle can be used to create cards.
   */
  status: Issuing.PhysicalBundle.Status;

  /**
   * Whether this physical bundle is a standard Stripe offering or custom-made for you.
   */
  type: Issuing.PhysicalBundle.Type;
}
export namespace Issuing {
  export namespace PhysicalBundle {
    export interface Features {
      /**
       * The policy for how to use card logo images in a card design with this physical bundle.
       */
      card_logo: Features.CardLogo;

      /**
       * The policy for how to use carrier letter text in a card design with this physical bundle.
       */
      carrier_text: Features.CarrierText;

      /**
       * The policy for how to use a second line on a card with this physical bundle.
       */
      second_line: Features.SecondLine;
    }

    export type Status = 'active' | 'inactive' | 'review';

    export type Type = 'custom' | 'standard';

    export namespace Features {
      export type CardLogo = 'optional' | 'required' | 'unsupported';

      export type CarrierText = 'optional' | 'required' | 'unsupported';

      export type SecondLine = 'optional' | 'required' | 'unsupported';
    }
  }
}
export namespace Issuing {
  export interface PhysicalBundleRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Issuing {
  export interface PhysicalBundleListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Only return physical bundles with the given status.
     */
    status?: PhysicalBundleListParams.Status;

    /**
     * Only return physical bundles with the given type.
     */
    type?: PhysicalBundleListParams.Type;
  }

  export namespace PhysicalBundleListParams {
    export type Status = 'active' | 'inactive' | 'review';

    export type Type = 'custom' | 'standard';
  }
}
