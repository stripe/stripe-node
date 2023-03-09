// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItems = void 0;
const StripeResource_1 = require("../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.InvoiceItems = StripeResource_1.StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),
    update: stripeMethod({
        method: 'POST',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/invoiceitems',
        methodType: 'list',
    }),
    del: stripeMethod({
        method: 'DELETE',
        fullPath: '/v1/invoiceitems/{invoiceitem}',
    }),
});
