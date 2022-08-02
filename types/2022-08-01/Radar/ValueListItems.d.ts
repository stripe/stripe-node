// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
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

      /**
       * The DeletedValueListItem object.
       */
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

      interface ValueListItemCreateParams {
        /**
         * The value of the item (whose type must match the type of the parent value list).
         */
        value: string;

        /**
         * The identifier of the value list which the created item will be added to.
         */
        value_list: string;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListItemRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
      }

      interface ValueListItemListParams extends PaginationParams {
        /**
         * Identifier for the parent value list this item belongs to.
         */
        value_list: string;

        created?: Stripe.RangeQueryParam | number;

        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;

        /**
         * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
         */
        value?: string;
      }

      interface ValueListItemDeleteParams {}

      class ValueListItemsResource {
        /**
         * Creates a new ValueListItem object, which is added to the specified parent value list.
         */
        create(
          params: ValueListItemCreateParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;

        /**
         * Retrieves a ValueListItem object.
         */
        retrieve(
          id: string,
          params?: ValueListItemRetrieveParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;
        retrieve(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.ValueListItem>>;

        /**
         * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
         */
        list(
          params: ValueListItemListParams,
          options?: RequestOptions
        ): ApiListPromise<Stripe.Radar.ValueListItem>;

        /**
         * Deletes a ValueListItem object, removing it from its parent value list.
         */
        del(
          id: string,
          params?: ValueListItemDeleteParams,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>;
        del(
          id: string,
          options?: RequestOptions
        ): Promise<Stripe.Response<Stripe.Radar.DeletedValueListItem>>;
      }
    }
  }
}
