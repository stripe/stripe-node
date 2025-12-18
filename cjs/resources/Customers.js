"use strict";
// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerResource = void 0;
const StripeResource_js_1 = require("../StripeResource.js");
const stripeMethod = StripeResource_js_1.StripeResource.method;
class CustomerResource extends StripeResource_js_1.StripeResource {
    del(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/customers/{customer}',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}',
        }).call(this, ...args);
    }
    update(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}',
        }).call(this, ...args);
    }
    deleteDiscount(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/customers/{customer}/discount',
        }).call(this, ...args);
    }
    list(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers',
            methodType: 'list',
        }).call(this, ...args);
    }
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers',
        }).call(this, ...args);
    }
    search(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/search',
            methodType: 'search',
        }).call(this, ...args);
    }
    listBalanceTransactions(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/balance_transactions',
            methodType: 'list',
        }).call(this, ...args);
    }
    createBalanceTransaction(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/balance_transactions',
        }).call(this, ...args);
    }
    retrieveBalanceTransaction(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
        }).call(this, ...args);
    }
    updateBalanceTransaction(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/balance_transactions/{transaction}',
        }).call(this, ...args);
    }
    retrieveCashBalance(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/cash_balance',
        }).call(this, ...args);
    }
    updateCashBalance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/cash_balance',
        }).call(this, ...args);
    }
    listCashBalanceTransactions(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/cash_balance_transactions',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrieveCashBalanceTransaction(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/cash_balance_transactions/{transaction}',
        }).call(this, ...args);
    }
    createFundingInstructions(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/funding_instructions',
        }).call(this, ...args);
    }
    listPaymentMethods(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/payment_methods',
            methodType: 'list',
        }).call(this, ...args);
    }
    retrievePaymentMethod(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/payment_methods/{payment_method}',
        }).call(this, ...args);
    }
    listSources(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/sources',
            methodType: 'list',
        }).call(this, ...args);
    }
    createSource(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/sources',
        }).call(this, ...args);
    }
    retrieveSource(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/sources/{id}',
        }).call(this, ...args);
    }
    updateSource(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/sources/{id}',
        }).call(this, ...args);
    }
    deleteSource(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/customers/{customer}/sources/{id}',
        }).call(this, ...args);
    }
    verifySource(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/sources/{id}/verify',
        }).call(this, ...args);
    }
    deleteTaxId(...args) {
        return stripeMethod({
            method: 'DELETE',
            fullPath: '/v1/customers/{customer}/tax_ids/{id}',
        }).call(this, ...args);
    }
    retrieveTaxId(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/tax_ids/{id}',
        }).call(this, ...args);
    }
    listTaxIds(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/customers/{customer}/tax_ids',
            methodType: 'list',
        }).call(this, ...args);
    }
    createTaxId(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/customers/{customer}/tax_ids',
        }).call(this, ...args);
    }
}
exports.CustomerResource = CustomerResource;
