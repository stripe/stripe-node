// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PaymentIntentResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/{intent}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    applyCustomerBalance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/apply_customer_balance',
        }).call(this, ...args);
    }
    cancel(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/cancel',
        }).call(this, ...args);
    }
    capture(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/capture',
        }).call(this, ...args);
    }
    confirm(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/confirm',
        }).call(this, ...args);
    }
    incrementAuthorization(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/increment_authorization',
        }).call(this, ...args);
    }
    verifyMicrodeposits(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_intents/{intent}/verify_microdeposits',
        }).call(this, ...args);
    }
    listAmountDetailsLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_intents/{intent}/amount_details_line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
