// File generated from our OpenAPI spec
'use strict';
const StripeResource = require('../../StripeResource');
const stripeMethod = StripeResource.method;
module.exports = StripeResource.extend({
    create: stripeMethod({
        method: 'POST',
        fullPath: '/v1/reporting/report_runs',
    }),
    retrieve: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs/{report_run}',
    }),
    list: stripeMethod({
        method: 'GET',
        fullPath: '/v1/reporting/report_runs',
        methodType: 'list',
    }),
});
