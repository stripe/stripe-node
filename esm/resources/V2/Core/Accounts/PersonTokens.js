// File generated from our OpenAPI spec
import { StripeResource } from '../../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class PersonTokenResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/core/accounts/{account_id}/person_tokens',
        }).call(this, ...args);
    }
    retrieve(...args) {
        return stripeMethod({
            method: 'GET',
            fullPath: '/v2/core/accounts/{account_id}/person_tokens/{id}',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=PersonTokens.js.map