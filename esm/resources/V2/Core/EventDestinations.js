// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class EventDestinationResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/event_destinations',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations',
        }).call(this, ...args);
    }
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}',
        }).call(this, ...args);
    }
    disable(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/disable',
        }).call(this, ...args);
    }
    enable(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/enable',
        }).call(this, ...args);
    }
    ping(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/event_destinations/{id}/ping',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=EventDestinations.js.map