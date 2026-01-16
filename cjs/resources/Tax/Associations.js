"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AssociationResource extends StripeResource_js_1.StripeResource {
    find(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/associations/find',
        }).call(this, ...args);
    }
}
exports.AssociationResource = AssociationResource;
//# sourceMappingURL=Associations.js.map