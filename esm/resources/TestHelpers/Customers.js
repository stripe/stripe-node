// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CustomerResource extends StripeResource {
    fundCashBalance(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/customers/{customer}/fund_cash_balance',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=Customers.js.map