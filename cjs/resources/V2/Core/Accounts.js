"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountResource = void 0;
const StripeResource_js_1 = require("../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class AccountResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{id}',
        }).call(this, ...args);
    }
    close(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{id}/close',
        }).call(this, ...args);
    }
}
exports.AccountResource = AccountResource;
//# sourceMappingURL=Accounts.js.map