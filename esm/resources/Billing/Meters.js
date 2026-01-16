// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class MeterResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}',
        }).call(this, ...args);
    }
    deactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}/deactivate',
        }).call(this, ...args);
    }
    reactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/meters/{id}/reactivate',
        }).call(this, ...args);
    }
    listEventSummaries(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/meters/{id}/event_summaries',
            methodType: 'list',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Meters.js.map