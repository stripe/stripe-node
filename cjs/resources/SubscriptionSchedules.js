"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionScheduleResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SubscriptionScheduleResource extends StripeResource_js_1.StripeResource {
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
exports.SubscriptionScheduleResource = SubscriptionScheduleResource;
