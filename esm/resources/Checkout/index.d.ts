import { Stripe } from '../../stripe.core.js';
import { SessionResource } from './Sessions.js';
export { Session } from './Sessions.js';
export declare class Checkout {
    private readonly stripe;
    sessions: SessionResource;
    constructor(stripe: Stripe);
}
