"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class SubscriptionResource extends StripeResource_js_1.StripeResource {
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
exports.SubscriptionResource = SubscriptionResource;
