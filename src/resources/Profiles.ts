// File generated from our OpenAPI spec

import {RequestOptions} from '../lib.js';
export interface Profile {
  /**
   * Unique identifier for the Stripe profile.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'profile';

  /**
   * Branding information for the Stripe profile.
   */
  branding: Profile.Branding | null;

  /**
   * A description of the business or entity represented by the Stripe profile.
   */
  description: string | null;

  /**
   * The display name shown for the Stripe profile.
   */
  display_name: string;

  /**
   * If the object exists in live mode, the value is `true`. If the object exists in test mode, the value is `false`.
   */
  livemode: boolean;

  /**
   * The external website URL associated with the Stripe profile.
   */
  url: string | null;

  /**
   * The unique username for the Stripe profile.
   */
  username: string;
}
export namespace Profile {
  export interface Branding {
    /**
     * Profile icon image.
     */
    icon: Branding.Icon | null;

    /**
     * Profile logo image.
     */
    logo: Branding.Logo | null;

    /**
     * The primary brand color for the profile.
     */
    primary_color: string | null;

    /**
     * The secondary brand color for the profile.
     */
    secondary_color: string | null;
  }

  export namespace Branding {
    export interface Icon {
      /**
       * The original image.
       */
      original: string;
    }

    export interface Logo {
      /**
       * The original image.
       */
      original: string;
    }
  }
}
