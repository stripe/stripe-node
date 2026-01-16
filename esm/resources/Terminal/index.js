// File generated from our OpenAPI spec
import { ConfigurationResource } from './Configurations.js';
import { ConnectionTokenResource } from './ConnectionTokens.js';
import { LocationResource } from './Locations.js';
import { OnboardingLinkResource } from './OnboardingLinks.js';
import { ReaderResource } from './Readers.js';
export class Terminal {
    constructor(stripe) {
        this.stripe = stripe;
        this.configurations = new ConfigurationResource(stripe);
        this.connectionTokens = new ConnectionTokenResource(stripe);
        this.locations = new LocationResource(stripe);
        this.onboardingLinks = new OnboardingLinkResource(stripe);
        this.readers = new ReaderResource(stripe);
    }
}
//# sourceMappingURL=index.js.map