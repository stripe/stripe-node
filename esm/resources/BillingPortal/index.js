// File generated from our OpenAPI spec
import { ConfigurationResource } from './Configurations.js';
import { SessionResource } from './Sessions.js';
export class BillingPortal {
    constructor(stripe) {
        this.stripe = stripe;
        this.configurations = new ConfigurationResource(stripe);
        this.sessions = new SessionResource(stripe);
    }
}
