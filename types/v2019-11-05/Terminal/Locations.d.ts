declare namespace Stripe {
  namespace Terminal {
    /**
     * The Location object.
     */
    interface Location {
      address: Address;

      /**
       * The display name of the location.
       */
      display_name: string;

      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'terminal.location';
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
      address: required_country_address;

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

    /**
     * Deletes a Location object.
     */
    interface LocationDeleteParams {
      /**
       * To [group objects](https://stripe.com/docs/terminal/payments/connect#grouping-objects-by-connected-account) on your platform account by connected account, set this parameter to the connected account ID.
       */
      operator_account?: string;
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
      address?: required_country_address;

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

    class LocationsResource {
      /**
       * Creates a new Location object.
       */
      create(
        params: LocationCreateParams,
        options?: HeaderOptions
      ): Promise<Terminal.Location>;

      /**
       * Deletes a Location object.
       */
      del(
        id: string,
        params?: LocationDeleteParams,
        options?: HeaderOptions
      ): Promise<DeletedLocation>;

      /**
       * Returns a list of Location objects.
       */
      list(
        params?: LocationListParams,
        options?: HeaderOptions
      ): Promise<TerminalLocationLocationList>;

      /**
       * Retrieves a Location object.
       */
      retrieve(
        id: string,
        params?: LocationRetrieveParams,
        options?: HeaderOptions
      ): Promise<Terminal.Location>;

      /**
       * Updates a Location object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
       */
      update(
        id: string,
        params?: LocationUpdateParams,
        options?: HeaderOptions
      ): Promise<Terminal.Location>;
    }
  }
}