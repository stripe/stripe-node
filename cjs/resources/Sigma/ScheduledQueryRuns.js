"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduledQueryRunResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ScheduledQueryRunResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sigma/scheduled_query_runs',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/sigma/scheduled_query_runs/{scheduled_query_run}',
        }).call(this, ...args);
    }
}
exports.ScheduledQueryRunResource = ScheduledQueryRunResource;
