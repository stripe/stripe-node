// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class SubscriptionScheduleResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/subscription_schedules',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscription_schedules',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/subscription_schedules/{schedule}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscription_schedules/{schedule}',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscription_schedules/{schedule}/cancel',
        }).call(this, ...args);
    }
    release(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/subscription_schedules/{schedule}/release',
        }).call(this, ...args);
    }
}
