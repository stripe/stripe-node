// File generated from our OpenAPI spec
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportTypes = void 0;
const StripeResource_1 = require("../../StripeResource");
const stripeMethod = StripeResource_1.StripeResource.method;
exports.ReportTypes = StripeResource_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types/{report_type}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_types',
        methodType: 'list',
    }),
});
