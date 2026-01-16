// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class InvoiceResource extends StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/invoices/{invoice}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoices/{invoice}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoices',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoices/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    addLines(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/add_lines',
        }).call(this, ...args);
    }
    attachPayment(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/attach_payment',
        }).call(this, ...args);
    }
    finalizeInvoice(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/finalize',
        }).call(this, ...args);
    }
    markUncollectible(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/mark_uncollectible',
        }).call(this, ...args);
    }
    pay(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/pay',
        }).call(this, ...args);
    }
    removeLines(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/remove_lines',
        }).call(this, ...args);
    }
    sendInvoice(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/send',
        }).call(this, ...args);
    }
    updateLines(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/update_lines',
        }).call(this, ...args);
    }
    voidInvoice(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/void',
        }).call(this, ...args);
    }
    createPreview(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/create_preview',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/invoices/{invoice}/lines',
            methodType: 'list',
        }).call(this, ...args);
    }
    updateLineItem(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/invoices/{invoice}/lines/{line_item_id}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Invoices.js.map