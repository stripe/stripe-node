// File generated from our OpenAPI spec
import { StripeResource } from '../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class CreditBalanceSummaryResource extends StripeResource {
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v1/billing/credit_balance_summary',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=CreditBalanceSummary.js.map