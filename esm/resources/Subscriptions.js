// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SubscriptionResource extends StripeResource {
    cancel(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/subscriptions/{subscription_exposed_id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/subscriptions/{subscription_exposed_id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscriptions/{subscription_exposed_id}',
        }).call(this, ...args);
    }
    deleteDiscount(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/subscriptions/{subscription_exposed_id}/discount',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/subscriptions',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscriptions',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/subscriptions/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    migrate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscriptions/{subscription}/migrate',
        }).call(this, ...args);
    }
    resume(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscriptions/{subscription}/resume',
        }).call(this, ...args);
    }
}
