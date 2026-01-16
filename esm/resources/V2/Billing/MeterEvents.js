// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class MeterEventResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/billing/meter_events',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=MeterEvents.js.map