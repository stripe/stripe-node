// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disputes = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.Disputes = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes/{dispute}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/issuing/disputes',
        methodType: 'list',
    }),
    submit: stripeMethod({
        method: 'POST',
        fullPath: '/v1/issuing/disputes/{dispute}/submit',
    }),
});
