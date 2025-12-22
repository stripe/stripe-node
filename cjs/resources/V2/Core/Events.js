"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class Event extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        const transformResponseData = (response) => {
            return this.addFetchRelatedObjectIfNeeded(response);
        };
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/events/{id}',
            transformResponseData,
        }).apply(this, args);
    }
    list(...args) {
        const transformResponseData = (response) => {
            return Object.assign(Object.assign({}, response), { data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) });
        };
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/events',
            methodType: 'list',
            transformResponseData,
        }).apply(this, args);
    }
    /**
     * @private
     *
     * For internal use in stripe-node.
     *
     * @param pulledEvent The retrieved event object
     * @returns The retrieved event object with a fetchRelatedObject method,
     * if pulledEvent.related_object is valid (non-null and has a url)
     */
    addFetchRelatedObjectIfNeeded(pulledEvent) {
        if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
            return pulledEvent;
        }
        return Object.assign(Object.assign({}, pulledEvent), { fetchRelatedObject: () => 
            // call stripeMethod with 'this' resource to fetch
            // the related object. 'this' is needed to construct
            // and send the request, but the method spec controls
            // the url endpoint and method, so it doesn't matter
            // that 'this' is an Events resource object here
            stripeMethod({
                method: 'GET',
                fullPath: pulledEvent.related_object.url,
            }).apply(this, [
                {
                    stripeContext: pulledEvent.context,
                },
            ]) });
    }
}
exports.Event = Event;
//# sourceMappingURL=Events.js.map