declare namespace Stripe {
  namespace Radar {
    /**
     * The ValueList object.
     */
    interface ValueList {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list';

      /**
       * The name of the value list for use in rules.
       */
      alias: string;

      /**
       * Time at which the object was created. Measured in seconds since the Unix epoch.
       */
      created: number;

      /**
       * The name or email address of the user who created this value list.
       */
      created_by: string;

      deleted?: void;

      /**
       * The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, or `case_sensitive_string`.
       */
      item_type: ValueList.ItemType;

      /**
       * List of items contained within this value list.
       */
      list_items: ApiList<Radar.ValueListItem>;

      /**
       * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
       */
      livemode: boolean;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
       */
      metadata: {
        [key: string]: string;
      };

      /**
       * The name of the value list.
       */
      name: string;
    }

    namespace ValueList {
      type ItemType =
        | 'card_bin'
        | 'card_fingerprint'
        | 'case_sensitive_string'
        | 'country'
        | 'email'
        | 'ip_address'
        | 'string'
    }

    interface DeletedValueList {
      /**
       * Unique identifier for the object.
       */
      id: string;

      /**
       * String representing the object's type. Objects of the same type share the same value.
       */
      object: 'radar.value_list';

      /**
       * Always true for a deleted object
       */
      deleted: true;
    }

    /**
     * Creates a new ValueList object, which can then be referenced in rules.
     */
    interface ValueListCreateParams {
      /**
       * The name of the value list for use in rules.
       */
      alias: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, or `case_sensitive_string`. Use `string` if the item type is unknown or mixed.
       */
      item_type?: ValueListCreateParams.ItemType;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The human-readable name of the value list.
       */
      name: string;
    }

    namespace ValueListCreateParams {
      type ItemType =
        | 'card_bin'
        | 'card_fingerprint'
        | 'case_sensitive_string'
        | 'country'
        | 'email'
        | 'ip_address'
        | 'string'
    }

    /**
     * Retrieves a ValueList object.
     */
    interface ValueListRetrieveParams {
      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;
    }

    /**
     * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
     */
    interface ValueListUpdateParams {
      /**
       * The name of the value list for use in rules.
       */
      alias?: string;

      /**
       * Specifies which fields in the response should be expanded.
       */
      expand?: Array<string>;

      /**
       * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
       */
      metadata?: {
        [key: string]: string;
      };

      /**
       * The human-readable name of the value list.
       */
      name?: string;
    }

    /**
     * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    interface ValueListListParams {
      /**
       * The alias used to reference the value list when writing rules.
       */
      alias?: string;

      /**
       * A value contained within a value list - returns all value lists containing this value.
       */
      contains?: string;

      created?: number | ValueListListParams.Created;

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
    }

    namespace ValueListListParams {
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
     * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
     */
    interface ValueListDeleteParams {}

    class ValueListsResource {
      /**
       * Creates a new ValueList object, which can then be referenced in rules.
       */
      create(
        params: ValueListCreateParams,
        options?: RequestOptions
      ): Promise<Radar.ValueList>;

      /**
       * Retrieves a ValueList object.
       */
      retrieve(
        id: string,
        params?: ValueListRetrieveParams,
        options?: RequestOptions
      ): Promise<Radar.ValueList>;
      retrieve(id: string, options?: RequestOptions): Promise<Radar.ValueList>;

      /**
       * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
       */
      update(
        id: string,
        params?: ValueListUpdateParams,
        options?: RequestOptions
      ): Promise<Radar.ValueList>;

      /**
       * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
       */
      list(
        params?: ValueListListParams,
        options?: RequestOptions
      ): ApiListPromise<Radar.ValueList>;
      list(options?: RequestOptions): ApiListPromise<Radar.ValueList>;

      /**
       * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
       */
      del(
        id: string,
        params?: ValueListDeleteParams,
        options?: RequestOptions
      ): Promise<DeletedValueList>;
      del(id: string, options?: RequestOptions): Promise<DeletedValueList>;
    }
  }
}