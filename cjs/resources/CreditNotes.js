"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditNoteResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CreditNoteResource extends StripeResource_js_1.StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/credit_notes',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/credit_notes',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/credit_notes/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/credit_notes/{id}',
        }).call(this, ...args);
    }
    preview(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/credit_notes/preview',
        }).call(this, ...args);
    }
    voidCreditNote(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/credit_notes/{id}/void',
        }).call(this, ...args);
    }
    listPreviewLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/credit_notes/preview/lines',
            methodType: 'list',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/credit_notes/{credit_note}/lines',
            methodType: 'list',
        }).call(this, ...args);
    }
}
exports.CreditNoteResource = CreditNoteResource;
//# sourceMappingURL=CreditNotes.js.map