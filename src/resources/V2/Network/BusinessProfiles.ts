// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {RequestOptions, Response} from '../../../lib.js';

export class BusinessProfileResource extends StripeResource {
  /**
   * Retrieve the Stripe business profile associated with the requesting merchant and livemode.
   */
  me(
    params?: V2.Network.BusinessProfileMeParams,
    options?: RequestOptions
  ): Promise<Response<BusinessProfile>> {
    return this._makeRequest(
      'GET',
      '/v2/network/business_profiles/me',
      params,
      options
    ) as any;
  }
  /**
   * Retrieve a Stripe business profile by its Network ID.
   */
  retrieve(
    id: string,
    params?: V2.Network.BusinessProfileRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<BusinessProfile>> {
    return this._makeRequest(
      'GET',
      `/v2/network/business_profiles/${id}`,
      params,
      options
    ) as any;
  }
}
export interface BusinessProfile {
  /**
   * The ID of the Stripe business profile; also known as the Network ID. This is the ID used to identify the business on the Stripe network.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value of the object field.
   */
  object: 'v2.network.business_profile';

  /**
   * Branding data for the business.
   */
  branding?: V2.Network.BusinessProfile.Branding;

  /**
   * The description of the business.
   */
  description?: string;

  /**
   * The display name of the Stripe business profile.
   */
  display_name: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * The URL of the business.
   */
  url?: string;

  /**
   * The username of the Stripe business profile.
   */
  username: string;
}
export namespace V2 {
  export namespace Network {
    export namespace BusinessProfile {
      export interface Branding {
        /**
         * URL of the icon for the business. The image will be square and at least 128px x 128px.
         */
        icon?: Branding.Icon;

        /**
         * URL of the logo for the business. The image will be at least 128px x 128px.
         */
        logo?: Branding.Logo;

        /**
         * A CSS hex color value representing the primary branding color for this business.
         */
        primary_color?: string;

        /**
         * A CSS hex color value representing the secondary branding color for this business.
         */
        secondary_color?: string;
      }

      export namespace Branding {
        export interface Icon {
          /**
           * The URL of the image in its original size.
           */
          original: string;
        }

        export interface Logo {
          /**
           * The URL of the image in its original size.
           */
          original: string;
        }
      }
    }
  }
}
export namespace V2 {
  export namespace Network {
    export interface BusinessProfileRetrieveParams {}
  }
}
export namespace V2 {
  export namespace Network {
    export interface BusinessProfileMeParams {}
  }
}
