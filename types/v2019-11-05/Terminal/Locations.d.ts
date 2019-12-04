declare namespace Stripe {
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
    }

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

    /**
     * Creates a new Location object.
     */
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

    /**
     * Retrieves a Location object.
     */
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

    /**
     * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     */
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

    /**
     * Returns a list of Location objects.
     */
    interface LocationListParams {
      /**
       * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
       */
      ending_before?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
       */
      limit?: number;

      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;

      /**
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;
    }

    /**
     * Deletes a Location object.
     */
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
      ): Promise<Terminal.Location>;

      /**
       * Retrieves a Location object.
       */
      retrieve(
        id: string,
        params?: LocationRetrieveParams,
        options?: RequestOptions
      ): Promise<Terminal.Location>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Terminal.Location>;

      /**
       * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: LocationUpdateParams,
        options?: RequestOptions
      ): Promise<Terminal.Location>;

      /**
       * Returns a list of Location objects.
       */
      list(
        params?: LocationListParams,
        options?: RequestOptions
      ): ApiListPromise<Terminal.Location>;
      list(options?: RequestOptions): ApiListPromise<Terminal.Location>;

      /**
       * Deletes a Location object.
       */
      del(
        id: string,
        params?: LocationDeleteParams,
        options?: RequestOptions
      ): Promise<DeletedLocation>;
      del(id: string, options?: RequestOptions): Promise<DeletedLocation>;
    }
  }
}