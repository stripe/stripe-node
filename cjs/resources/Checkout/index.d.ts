import { Stripe } from '../../stripe.core.js';
import { Session, SessionResource } from './Sessions.js';
export { Session } from './Sessions.js';
export declare class Checkout {
    private readonly stripe;
    sessions: SessionResource;
    constructor(stripe: Stripe);
}
export declare namespace Checkout {
    export { Session };
}
