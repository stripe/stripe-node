// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class FinancialAccountResource extends StripeResource {
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}',
        }).call(this, ...args);
    }
    close(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/close',
        }).call(this, ...args);
    }
    updateFeatures(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
        }).call(this, ...args);
    }
    retrieveFeatures(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/treasury/financial_accounts/{financial_account}/features',
        }).call(this, ...args);
    }
}
