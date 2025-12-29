import { Stripe } from '../../stripe.core.js';
import { Configuration, ConfigurationResource } from './Configurations.js';
import { Session, SessionResource } from './Sessions.js';
export { Configuration } from './Configurations.js';
export { Session } from './Sessions.js';
export declare class BillingPortal {
    private readonly stripe;
    configurations: ConfigurationResource;
    sessions: SessionResource;
    constructor(stripe: Stripe);
}
export declare namespace BillingPortal {
    export { Configuration };
    export { Session };
}
