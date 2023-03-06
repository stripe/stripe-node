// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueListItems = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.ValueListItems = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/radar/value_list_items',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items/{item}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/radar/value_list_items',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/radar/value_list_items/{item}',
    }),
});
