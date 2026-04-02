// File generated from our OpenAPI spec

import {StripeResource} from '../../StripeResource.js';
import {Address, Emptyable, PaginationParams} from '../../shared.js';
import {RequestOptions, ApiListPromise, Response} from '../../lib.js';

export class LocationResource extends StripeResource {
  /**
   * Retrieve a list of all tax locations. Tax locations can represent the venues for services, tickets, or other product types.
   *
   * The response includes detailed information for each tax location, such as its address, name, description, and current operational status.
   *
   * You can paginate through the list by using the limit parameter to control the number of results returned in each request.
   */
  list(
    params: Tax.LocationListParams,
    options?: RequestOptions
  ): ApiListPromise<Location> {
    return this._makeRequest('GET', '/v1/tax/locations', params, options, {
      methodType: 'list',
    }) as any;
  }
  /**
   * Create a tax location to use in calculating taxes for a service, ticket, or other type of product. The resulting object contains the id, address, name, description, and current operational status of the tax location.
   */
  create(
    params: Tax.LocationCreateParams,
    options?: RequestOptions
  ): Promise<Response<Location>> {
    return this._makeRequest(
      'POST',
      '/v1/tax/locations',
      params,
      options
    ) as any;
  }
  /**
   * Fetch the details of a specific tax location using its unique identifier. Use a tax location to calculate taxes based on the location of the end product, such as a performance, instead of the customer address. For more details, check the [integration guide](https://docs.stripe.com/tax/tax-for-tickets/integration-guide).
   */
  retrieve(
    id: string,
    params?: Tax.LocationRetrieveParams,
    options?: RequestOptions
  ): Promise<Response<Location>> {
    return this._makeRequest(
      'GET',
      `/v1/tax/locations/${id}`,
      params,
      options
    ) as any;
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
  object: 'tax.location';

  address: Address;

  /**
   * A descriptive text providing additional context about the tax location. This can include information about the venue, types of events held, services available, or any relevant details for better identification (e.g., "A spacious auditorium suitable for large concerts and events.").
   */
  description: string | null;

  /**
   * The type of tax location to be defined. Currently the only option is `performance`.
   */
  type: 'performance';
}
export namespace Tax {
  export interface LocationCreateParams {
    /**
     * The physical address of the tax location.
     */
    address: LocationCreateParams.Address;

    /**
     * The type of tax location. The only supported value is "performance".
     */
    type: 'performance';

    /**
     * Details to identify the tax location by its venue, types of events held, or available services, such as "A spacious auditorium suitable for large concerts and events.".
     */
    description?: string;

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }

  export namespace LocationCreateParams {
    export interface Address {
      /**
       * City, district, suburb, town, or village.
       */
      city?: Emptyable<string>;

      /**
       * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
       */
      country: string;

      /**
       * Address line 1, such as the street, PO Box, or company name.
       */
      line1?: Emptyable<string>;

      /**
       * Address line 2, such as the apartment, suite, unit, or building.
       */
      line2?: Emptyable<string>;

      /**
       * ZIP or postal code.
       */
      postal_code?: Emptyable<string>;

      /**
       * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix, such as "NY" or "TX".
       */
      state?: Emptyable<string>;
    }
  }
}
export namespace Tax {
  export interface LocationRetrieveParams {
    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
export namespace Tax {
  export interface LocationListParams extends PaginationParams {
    /**
     * Type of the tax location. Currently the only option is `performance`.
     */
    type: 'performance';

    /**
     * Specifies which fields in the response should be expanded.
     */
    expand?: Array<string>;
  }
}
