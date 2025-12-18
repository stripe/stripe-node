// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PaymentMethodResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_methods',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_methods/{payment_method}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}',
        }).call(this, ...args);
    }
    attach(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}/attach',
        }).call(this, ...args);
    }
    detach(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_methods/{payment_method}/detach',
        }).call(this, ...args);
    }
}
