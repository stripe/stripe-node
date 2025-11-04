// File generated from our OpenAPI spec

import * as ReportTypeParams from '../params/ReportTypeParams.js';
import {StripeResource} from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export const ReportTypeResource = StripeResource.extend({
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
export class ReportType {}
