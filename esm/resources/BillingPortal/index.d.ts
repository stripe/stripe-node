import { StripeClient } from '../../stripe.core.js';
import { ConfigurationResource } from './Configurations.js';
import { SessionResource } from './Sessions.js';
export { Configuration } from './Configurations.js';
export { Session } from './Sessions.js';
export declare class BillingPortal {
    private readonly stripe;
    configurations: ConfigurationResource;
    sessions: SessionResource;
    constructor(stripe: StripeClient);
}
