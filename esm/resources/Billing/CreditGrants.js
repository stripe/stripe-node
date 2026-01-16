// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CreditGrantResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_grants',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_grants/{id}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}',
        }).call(this, ...args);
    }
    expire(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}/expire',
        }).call(this, ...args);
    }
    voidGrant(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/billing/credit_grants/{id}/void',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=CreditGrants.js.map