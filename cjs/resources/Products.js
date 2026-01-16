"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class ProductResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/products/{id}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/products/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/products/{id}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/products',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/products',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/products/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    deleteFeature(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/products/{product}/features/{id}',
        }).call(this, ...args);
    }
    retrieveFeature(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/products/{product}/features/{id}',
        }).call(this, ...args);
    }
    listFeatures(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/products/{product}/features',
            methodType: 'list',
        }).call(this, ...args);
    }
    createFeature(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/products/{product}/features',
        }).call(this, ...args);
    }
}
exports.ProductResource = ProductResource;
//# sourceMappingURL=Products.js.map