"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxIdResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class TaxIdResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/tax_ids/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax_ids/{id}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax_ids',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax_ids',
        }).call(this, ...args);
    }
}
exports.TaxIdResource = TaxIdResource;
//# sourceMappingURL=TaxIds.js.map