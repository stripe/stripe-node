import { StripeResource } from '../../StripeResource.js';
import { RequestOptions } from '../../Types.js';
import { PaginationParams, RangeQueryParam } from '../../shared.js';
import { Response, ApiListPromise } from '../../lib.js';
export declare class ValueListItemResource extends StripeResource {
    /**
     * Deletes a ValueListItem object, removing it from its parent value list.
     */
    del(id: string, params?: Radar.ValueListItemDeleteParams, options?: RequestOptions): Promise<Response<Radar.DeletedValueListItem>>;
    del(id: string, options?: RequestOptions): Promise<Response<Radar.DeletedValueListItem>>;
    /**
     * Retrieves a ValueListItem object.
     */
    retrieve(id: string, params?: Radar.ValueListItemRetrieveParams, options?: RequestOptions): Promise<Response<ValueListItem>>;
    retrieve(id: string, options?: RequestOptions): Promise<Response<ValueListItem>>;
    /**
     * Returns a list of ValueListItem objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.
     */
    list(params: Radar.ValueListItemListParams, options?: RequestOptions): ApiListPromise<ValueListItem>;
    /**
     * Creates a new ValueListItem object, which is added to the specified parent value list.
     */
    create(params: Radar.ValueListItemCreateParams, options?: RequestOptions): Promise<Response<ValueListItem>>;
}
export /**
 * Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
 *
 * Related guide: [Managing list items](https://stripe.com/docs/radar/lists#managing-list-items)
 */ interface ValueListItem {
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
    /**
     * Always true for a deleted object
     */
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
export declare namespace Radar {
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
}
export declare namespace Radar {
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
}
export declare namespace Radar {
    interface ValueListItemRetrieveParams {
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
    }
}
export declare namespace Radar {
    interface ValueListItemListParams extends PaginationParams {
        /**
         * Identifier for the parent value list this item belongs to.
         */
        value_list: string;
        /**
         * Only return items that were created during the given date interval.
         */
        created?: RangeQueryParam | number;
        /**
         * Specifies which fields in the response should be expanded.
         */
        expand?: Array<string>;
        /**
         * Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
         */
        value?: string;
    }
}
export declare namespace Radar {
    interface ValueListItemDeleteParams {
    }
}
