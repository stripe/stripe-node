"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonResource = void 0;
const StripeResource_js_1 = require("../../../../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class PersonResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/persons',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/persons',
        }).call(this, ...args);
    }
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/persons/{id}',
        }).call(this, ...args);
    }
}
exports.PersonResource = PersonResource;
//# sourceMappingURL=Persons.js.map