// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class MeterEventSessionResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/billing/meter_event_session',
        }).call(this, ...args);
    }
}
//# sourceMappingURL=MeterEventSession.js.map