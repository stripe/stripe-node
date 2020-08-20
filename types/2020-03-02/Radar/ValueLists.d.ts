// File generated from our OpenAPI spec
declare module 'stripe' {
  namespace Stripe {
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
        list_items: ApiList<Stripe.Radar.ValueListItem>;

        /**
         * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
         */
        livemode: boolean;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
         */
        metadata: Metadata;

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
          | 'string';
      }

      /**
       * The DeletedValueList object.
       */
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

      interface ValueListCreateParams {
        /**
         * The name of the value list for use in rules.
         */
        alias: string;

        /**
         * The human-readable name of the value list.
         */
        name: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, or `case_sensitive_string`. Use `string` if the item type is unknown or mixed.
         */
        item_type?: ValueListCreateParams.ItemType;

        /**
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;
      }

      namespace ValueListCreateParams {
        type ItemType =
          | 'card_bin'
          | 'card_fingerprint'
          | 'case_sensitive_string'
          | 'country'
          | 'email'
          | 'ip_address'
          | 'string';
      }

      interface ValueListRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

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
         * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
         */
        metadata?: MetadataParam;

        /**
         * The human-readable name of the value list.
         */
        name?: string;
      }

      interface ValueListListParams extends PaginationParams {
        /**
         * The alias used to reference the value list when writing rules.
         */
        alias?: string;

        /**
         * A value contained within a value list - returns all value lists containing this value.
         */
        contains?: string;

        created?: RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListDeleteParams {}

      class ValueListsResource {
        /**
         * Creates a new ValueList object, which can then be referenced in rules.
         */
        create(
          params: ValueListCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Retrieves a ValueList object.
         */
        retrieve(
          id: string,
          params?: ValueListRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Updates a ValueList object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that item_type is immutable.
         */
        update(
          id: string,
          params?: ValueListUpdateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueList>>;

        /**
         * Returns a list of ValueList objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params?: ValueListListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.ValueList>;
        list(options?: RequestOptions): ApiListPromise<Stripe.Radar.ValueList>;

        /**
         * Deletes a ValueList object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.
         */
        del(
          id: string,
          params?: ValueListDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueList>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueList>>;
      }
    }
  }
}
