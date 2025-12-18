// File generated from our OpenAPI spec
import { StripeResource } from '../../../StripeResource.js';
const stripeMethod = StripeResource.method;
export class ReaderResource extends StripeResource {
    presentPaymentMethod(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/present_payment_method',
        }).call(this, ...args);
    }
    succeedInputCollection(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/succeed_input_collection',
        }).call(this, ...args);
    }
    timeoutInputCollection(...args) {
        return stripeMethod({
            method: 'POST',
            fullPath: '/v1/test_helpers/terminal/readers/{reader}/timeout_input_collection',
        }).call(this, ...args);
    }
}
