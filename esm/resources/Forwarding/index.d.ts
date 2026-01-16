import { Stripe } from '../../stripe.core.js';
import { Request, RequestResource } from './Requests.js';
export { Request } from './Requests.js';
export declare class Forwarding {
    private readonly stripe;
    requests: RequestResource;
    constructor(stripe: Stripe);
}
export declare namespace Forwarding {
    export { Request };
}
