"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRenderingTemplateResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class InvoiceRenderingTemplateResource extends StripeResource_js_1.StripeResource {
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
exports.InvoiceRenderingTemplateResource = InvoiceRenderingTemplateResource;
//# sourceMappingURL=InvoiceRenderingTemplates.js.map