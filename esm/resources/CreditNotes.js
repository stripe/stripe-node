// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CreditNoteResource extends StripeResource {
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
