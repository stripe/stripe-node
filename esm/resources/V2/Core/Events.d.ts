import { Response } from '../../../lib.js';
import { StripeResource } from '../../../StripeResource.js';
export declare class Event extends StripeResource {
    retrieve(...args: any[]): Promise<Response<any>>;
    list(...args: any[]): Promise<Response<any>>;
    /**
     * @private
     *
     * For internal use in stripe-node.
     *
     * @param pulledEvent The retrieved event object
     * @returns The retrieved event object with a fetchRelatedObject method,
     * if pulledEvent.related_object is valid (non-null and has a url)
     */
    addFetchRelatedObjectIfNeeded(pulledEvent: any): any;
}
