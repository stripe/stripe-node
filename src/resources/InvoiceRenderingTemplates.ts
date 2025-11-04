// File generated from our OpenAPI spec

import * as InvoiceRenderingTemplateParams from '../params/InvoiceRenderingTemplateParams.js';
import {StripeResource} from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export const InvoiceRenderingTemplateResource = StripeResource.extend({
  retrieve: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoice_rendering_templates/{template}',
  }),
  list: stripeMethod({
    method: 'GET',
    fullPath: '/v1/invoice_rendering_templates',
    methodType: 'list',
  }),
  archive: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoice_rendering_templates/{template}/archive',
  }),
  unarchive: stripeMethod({
    method: 'POST',
    fullPath: '/v1/invoice_rendering_templates/{template}/unarchive',
  }),
});
export class InvoiceRenderingTemplate {}
