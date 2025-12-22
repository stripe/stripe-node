// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {RequestOptions} from '../../lib.js';
import {
  Address,
  JapanAddressParam,
  Emptyable,
  MetadataParam,
  AddressParam,
  PaginationParams,
  Metadata,
} from '../../shared.js';
import {Response, ApiListPromise} from '../../lib.js';
const stripeMethod = StripeResource.method;
export class LocationResource extends StripeResource {
  /**
   * Deletes a Location object.
   */
  del(
    id: string,
    params?: Terminal.LocationDeleteParams,
    options?: RequestOptions
  ): Promise<Response<Terminal.DeletedLocation>>;
  del(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Terminal.DeletedLocation>>;
  del(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'DELETE',
      fullPath: '/v1/terminal/locations/{location}',
    }).call(this, ...args);
  }

  /**
   * Retrieves a Location object.
   */
  retrieve(
    id: string,
    params?: Terminal.LocationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Location | Terminal.DeletedLocation>>;
  retrieve(
    id: string,
    options?: RequestOptions
  ): Promise<Response<Location | Terminal.DeletedLocation>>;
  retrieve(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/terminal/locations/{location}',
    }).call(this, ...args);
  }

  /**
   * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
   */
  update(
    id: string,
    params?: Terminal.LocationUpdateParams,
    options?: RequestOptions
  ): Promise<Response<Location | Terminal.DeletedLocation>>;
  update(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/terminal/locations/{location}',
    }).call(this, ...args);
  }

  /**
   * Returns a list of Location objects.
   */
  list(
    params?: Terminal.LocationListParams,
    options?: RequestOptions
  ): ApiListPromise<Location>;
  list(options?: RequestOptions): ApiListPromise<Location>;
  list(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'GET',
      fullPath: '/v1/terminal/locations',
      methodType: 'list',
    }).call(this, ...args);
  }

  /**
   * Creates a new Location object.
   * For further details, including which address fields are required in each country, see the [Manage locations](https://docs.stripe.com/docs/terminal/fleet/locations) guide.
   */
  create(
    params?: Terminal.LocationCreateParams,
    options?: RequestOptions
  ): Promise<Response<Location>>;
  create(options?: RequestOptions): Promise<Response<Location>>;
  create(...args: any[]): Promise<Response<any>> {
    return stripeMethod({
      method: 'POST',
      fullPath: '/v1/terminal/locations',
    }).call(this, ...args);
  }
}
export interface Location {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: 'terminal.location';

  address: Address;

  address_kana?: Terminal.Location.AddressKana;

  address_kanji?: Terminal.Location.AddressKanji;

  /**
   * The ID of a configuration that will be used to customize all readers in this location.
   */
  configuration_overrides?: string;

  /**
   * Always true for a deleted object
   */
  deleted?: void;

  /**
   * The display name of the location.
   */
  display_name: string;

  /**
   * The Kana variation of the display name of the location.
   */
  display_name_kana?: string;

  /**
   * The Kanji variation of the display name of the location.
   */
  display_name_kanji?: string;

  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;

  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: Metadata;

  /**
   * The phone number of the location.
   */
  phone?: string;
}
export namespace Terminal {
  export interface DeletedLocation {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * String representing the object's type. Objects of the same type share the same value.
     */
    object: 'terminal.location';

    /**
     * Always true for a deleted object
     */
    deleted: true;
  }

  export namespace Location {
    export interface AddressKana {
      /**
       * City/Ward.
       */
      city: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Block/Building number.
       */
      line1: string | null;

      /**
       * Building details.
       */
      line2: string | null;

      /**
       * ZIP or postal code.
       */
      postal_code: string | null;

      /**
       * Prefecture.
       */
      state: string | null;

      /**
       * Town/cho-me.
       */
      town: string | null;
    }

    export interface AddressKanji {
      /**
       * City/Ward.
       */
      city: string | null;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string | null;

      /**
       * Block/Building number.
       */
      line1: string | null;

      /**
       * Building details.
       */
      line2: string | null;

      /**
       * ZIP or postal code.
       */
      postal_code: string | null;

      /**
       * Prefecture.
       */
      state: string | null;

      /**
       * Town/cho-me.
       */
      town: string | null;
    }
  }
}
export namespace Terminal {
  export interface LocationCreateParams {
    /**
     * The full address of the location.
     */
    address?: LocationCreateParams.Address;

    /**
     * The Kana variation of the full address of the location (Japan only).
     */
    address_kana?: JapanAddressParam;

    /**
     * The Kanji variation of the full address of the location (Japan only).
     */
    address_kanji?: JapanAddressParam;

    /**
     * The ID of a configuration that will be used to customize all readers in this location.
     */
    configuration_overrides?: string;

    /**
     * A name for the location. Maximum length is 1000 characters.
     */
    display_name?: string;

    /**
     * The Kana variation of the name for the location (Japan only). Maximum length is 1000 characters.
     */
    display_name_kana?: string;

    /**
     * The Kanji variation of the name for the location (Japan only). Maximum length is 1000 characters.
     */
    display_name_kanji?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * The phone number for the location.
     */
    phone?: string;
  }

  export namespace LocationCreateParams {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: string;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string;

      /**
       * Address line 1, such as the street, PO Box, or company name.
       */
      line1?: string;

      /**
       * Address line 2, such as the apartment, suite, unit, or building.
       */
      line2?: string;

      /**
       * ZIP or postal code.
       */
      postal_code?: string;

      /**
       * State, county, province, or region.
       */
      state?: string;
    }
  }
}
export namespace Terminal {
  export interface LocationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Terminal {
  export interface LocationUpdateParams {
    /**
     * The full address of the location. You can't change the location's `country`. If you need to modify the `country` field, create a new `Location` object and re-register any existing readers to that location.
     */
    address?: AddressParam;

    /**
     * The Kana variation of the full address of the location (Japan only).
     */
    address_kana?: JapanAddressParam;

    /**
     * The Kanji variation of the full address of the location (Japan only).
     */
    address_kanji?: JapanAddressParam;

    /**
     * The ID of a configuration that will be used to customize all readers in this location.
     */
    configuration_overrides?: Emptyable<string>;

    /**
     * A name for the location.
     */
    display_name?: Emptyable<string>;

    /**
     * The Kana variation of the name for the location (Japan only).
     */
    display_name_kana?: Emptyable<string>;

    /**
     * The Kanji variation of the name for the location (Japan only).
     */
    display_name_kanji?: Emptyable<string>;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;

    /**
     * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
     */
    metadata?: Emptyable<MetadataParam>;

    /**
     * The phone number for the location.
     */
    phone?: Emptyable<string>;
  }
}
export namespace Terminal {
  export interface LocationListParams extends PaginationParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Terminal {
  export interface LocationDeleteParams {}
}
