// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class InvoiceRenderingTemplateResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoice_rendering_templates',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoice_rendering_templates/{template}',
        }).call(this, ...args);
    }
    archive(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoice_rendering_templates/{template}/archive',
        }).call(this, ...args);
    }
    unarchive(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoice_rendering_templates/{template}/unarchive',
        }).call(this, ...args);
    }
}
