// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AlertResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/alerts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/alerts',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/alerts/{id}',
        }).call(this, ...args);
    }
    activate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/alerts/{id}/activate',
        }).call(this, ...args);
    }
    archive(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/alerts/{id}/archive',
        }).call(this, ...args);
    }
    deactivate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/alerts/{id}/deactivate',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Alerts.js.map