"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClockResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TestClockResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/test_helpers/test_clocks',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/test_clocks',
        }).call(this, ...args);
    }
    advance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
        }).call(this, ...args);
    }
}
exports.TestClockResource = TestClockResource;
