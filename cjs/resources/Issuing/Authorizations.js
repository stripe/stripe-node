"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationResource = void 0;
const StripeResource_js_1 = require("../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AuthorizationResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/authorizations',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/issuing/authorizations/{authorization}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}',
        }).call(this, ...args);
    }
    approve(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}/approve',
        }).call(this, ...args);
    }
    decline(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/issuing/authorizations/{authorization}/decline',
        }).call(this, ...args);
    }
}
exports.AuthorizationResource = AuthorizationResource;
//# sourceMappingURL=Authorizations.js.map