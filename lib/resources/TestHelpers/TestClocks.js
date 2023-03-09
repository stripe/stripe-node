// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClocks = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.TestClocks = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/test_helpers/test_clocks',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}',
    }),
    advance: stripeMethod({
        method: 'POST',
        fullPath: '/v1/test_helpers/test_clocks/{test_clock}/advance',
    }),
});
