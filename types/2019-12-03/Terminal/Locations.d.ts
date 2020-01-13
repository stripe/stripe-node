declare module 'stripe' {
  namespace Stripe {
    namespace Terminal {
      /**
       * The Location object.
       */
      interface Location {
        /**
         * Unique identifier for the object.
         */
        id: string;

        /**
         * String representing the object's type. Objects of the same type share the same value.
         */
        object: 'terminal.location';

        address: Address;

        deleted?: void;

        /**
         * The display name of the location.
         */
        display_name: string;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata;
      }

      /**
       * The DeletedLocation object.
       */
      interface DeletedLocation {
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

      interface LocationCreateParams {
        /**
         * The full address of the location.
         */
        address: LocationCreateParams.Address;

        /**
         * A name for the location.
         */
        display_name: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
         */
        operator_account?: string;
      }

      namespace LocationCreateParams {
        interface Address {
          city?: string;

          country: string;

          line1?: string;

          line2?: string;

          postal_code?: string;

          state?: string;
        }
      }

      interface LocationRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
         */
        operator_account?: string;
      }

      interface LocationUpdateParams {
        /**
         * The full address of the location.
         */
        address?: LocationUpdateParams.Address;

        /**
         * A name for the location.
         */
        display_name?: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
         */
        operator_account?: string;
      }

      namespace LocationUpdateParams {
        interface Address {
          city?: string;

          country: string;

          line1?: string;

          line2?: string;

          postal_code?: string;

          state?: string;
        }
      }

      interface LocationListParams extends PaginationParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
         */
        operator_account?: string;
      }

      interface LocationDeleteParams {
        /**
         * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
         */
        operator_account?: string;
      }

      class LocationsResource {
        /**
         * Creates a new Location object.
         */
        create(
          params: LocationCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.Location>;

        /**
         * Retrieves a Location object.
         */
        retrieve(
          id: string,
          params?: LocationRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.Location>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.Location>;

        /**
         * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
         */
        update(
          id: string,
          params?: LocationUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.Location>;

        /**
         * Returns a list of Location objects.
         */
        list(
          params?: LocationListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Terminal.Location>;
        list(
          options?: RequestOptions
        ): ApiListPromise<Stripe.Terminal.Location>;

        /**
         * Deletes a Location object.
         */
        del(
          id: string,
          params?: LocationDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.DeletedLocation>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Terminal.DeletedLocation>;
      }
    }
  }
}
