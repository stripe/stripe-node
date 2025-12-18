// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class TransactionResource extends StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/transactions/{transaction}',
        }).call(this, ...args);
    }
    createFromCalculation(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/transactions/create_from_calculation',
        }).call(this, ...args);
    }
    createReversal(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/tax/transactions/create_reversal',
        }).call(this, ...args);
    }
    listLineItems(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/tax/transactions/{transaction}/line_items',
            methodType: 'list',
        }).call(this, ...args);
    }
}
