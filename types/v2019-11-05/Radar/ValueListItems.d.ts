declare namespace Stripe {
  namespace Radar {
    /**
     * The ValueListItem object.
     */
    interface ValueListItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list_item';

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The name or email address of the user who added this item to the value list.
       */
      created_by: string;

      deleted?: void;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * The value of the item.
       */
      value: string;

      /**
       * The identifier of the value list this item belongs to.
       */
      value_list: string;
    }

    interface DeletedValueListItem {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list_item';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * Creates a new ValueListItem object, which is added to the specified parent value list.
     */
    interface ValueListItemCreateParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * The value of the item (whose type must match the type of the parent value list).
       */
      value: string;

      /**
       * The identifier of the value list which the created item will be added to.
       */
      value_list: string;
    }

    /**
     * Retrieves a ValueListItem object.
     */
    interface ValueListItemRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface ValueListItemListParams {
      created?: number | ValueListItemListParams.Created;

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
       * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
       */
      starting_after?: string;

      /**
       * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
       */
      value?: string;

      /**
       * Identifier for the parent value list this item belongs to.
       */
      value_list: string;
    }

    namespace ValueListItemListParams {
      interface Created {
        /**
         * Minimum value to filter by (exclusive)
         */
        gt?: number;

        /**
         * Minimum value to filter by (inclusive)
         */
        gte?: number;

        /**
         * Maximum value to filter by (exclusive)
         */
        lt?: number;

        /**
         * Maximum value to filter by (inclusive)
         */
        lte?: number;
      }
    }

    /**
     * Deletes a ValueListItem object, removing it from its parent value list.
     */
    interface ValueListItemDeleteParams {}

    class ValueListItemsResource {
      /**
       * Creates a new ValueListItem object, which is added to the specified parent value list.
       */
      create(
        params: ValueListItemCreateParams,
        options?: RequestOptions
      ): Promise<Radar.ValueListItem>;

      /**
       * Retrieves a ValueListItem object.
       */
      retrieve(
        id: string,
        params?: ValueListItemRetrieveParams,
        options?: RequestOptions
      ): Promise<Radar.ValueListItem>;
      retrieve(
        id: string,
        options?: RequestOptions
      ): Promise<Radar.ValueListItem>;

      /**
       * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params: ValueListItemListParams,
        options?: RequestOptions
      ): ApiListPromise<Radar.ValueListItem>;

      /**
       * Deletes a ValueListItem object, removing it from its parent value list.
       */
      del(
        id: string,
        params?: ValueListItemDeleteParams,
        options?: RequestOptions
      ): Promise<DeletedValueListItem>;
      del(id: string, options?: RequestOptions): Promise<DeletedValueListItem>;
    }
  }
}