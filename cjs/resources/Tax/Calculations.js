"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CalculationResource extends StripeResource_js_1.StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/calculations/{calculation}',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/calculations',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/calculations/{calculation}/line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.CalculationResource = CalculationResource;
//# sourceMappingURL=Calculations.js.map