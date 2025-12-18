"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AlertResource extends StripeResource_js_1.StripeResource {
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
exports.AlertResource = AlertResource;
