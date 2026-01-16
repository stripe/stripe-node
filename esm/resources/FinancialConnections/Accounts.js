// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class AccountResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/financial_connections/accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/financial_connections/accounts/{account}',
        }).call(this, ...args);
    }
    disconnect(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/financial_connections/accounts/{account}/disconnect',
        }).call(this, ...args);
    }
    refresh(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/financial_connections/accounts/{account}/refresh',
        }).call(this, ...args);
    }
    subscribe(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/financial_connections/accounts/{account}/subscribe',
        }).call(this, ...args);
    }
    unsubscribe(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/financial_connections/accounts/{account}/unsubscribe',
        }).call(this, ...args);
    }
    listOwners(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/financial_connections/accounts/{account}/owners',
            methodType: 'list',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Accounts.js.map