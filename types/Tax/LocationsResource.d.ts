// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    namespace Tax {
      interface LocationCreateParams {
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

      namespace LocationCreateParams {
        interface Address {
          /**
           * City, district, suburb, town, or village.
           */
          city?: Stripe.Emptyable<string>;

          /**
           * Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
           */
          country: string;

          /**
           * Address line 1, such as the street, PO Box, or company name.
           */
          line1?: Stripe.Emptyable<string>;

          /**
           * Address line 2, such as the apartment, suite, unit, or building.
           */
          line2?: Stripe.Emptyable<string>;

          /**
           * ZIP or postal code.
           */
          postal_code?: Stripe.Emptyable<string>;

          /**
           * State/province as an [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) subdivision code, without country prefix, such as "NY" or "TX".
           */
          state?: Stripe.Emptyable<string>;
        }
      }

      interface LocationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface LocationListParams extends PaginationParams {
        /**
         * Type of the tax location. Currently the only option is `performance`.
         */
        type: 'performance';

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      class LocationsResource {
        /**
         * Create a tax location to use in calculating taxes for a service, ticket, or other type of product. The resulting object contains the id, address, name, description, and current operational status of the tax location.
         */
        create(
          params: LocationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Location>>;

        /**
         * Fetch the details of a specific tax location using its unique identifier. Use a tax location to calculate taxes based on the location of the end product, such as a performance, instead of the customer address. For more details, check the [integration guide](https://docs.stripe.com/tax/tax-for-tickets/integration-guide).
         */
        retrieve(
          id: string,
          params?: LocationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Location>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Tax.Location>>;

        /**
         * Retrieve a list of all tax locations. Tax locations can represent the venues for services, tickets, or other product types.
         *
         * The response includes detailed information for each tax location, such as its address, name, description, and current operational status.
         *
         * You can paginate through the list by using the limit parameter to control the number of results returned in each request.
         */
        list(
          params: LocationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Tax.Location>;
      }
    }
  }
}
