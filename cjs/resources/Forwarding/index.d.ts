import { StripeClient } from '../../stripe.core.js';
import { RequestResource } from './Requests.js';
export { Request } from './Requests.js';
export declare class Forwarding {
    private readonly stripe;
    requests: RequestResource;
    constructor(stripe: StripeClient);
}
