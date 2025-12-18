// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class MeterEventStreamResource extends StripeResource {
    create(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v2/billing/meter_event_stream',
            host: 'meter-events.stripe.com',
        }).call(this, ...args);
    }
}
