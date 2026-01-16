// File generated from our OpenAPI spec
import { StripeResource } from '../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PaymentMethodDomainResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_method_domains',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}',
        }).call(this, ...args);
    }
    validate(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/payment_method_domains/{payment_method_domain}/validate',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=PaymentMethodDomains.js.map