import { Stripe } from '../../stripe.core.js';
import { Configuration, ConfigurationResource } from './Configurations.js';
import { ConnectionToken, ConnectionTokenResource } from './ConnectionTokens.js';
import { Location, LocationResource } from './Locations.js';
import { OnboardingLink, OnboardingLinkResource } from './OnboardingLinks.js';
import { Reader, ReaderResource } from './Readers.js';
export { Configuration } from './Configurations.js';
export { ConnectionToken } from './ConnectionTokens.js';
export { Location } from './Locations.js';
export { OnboardingLink } from './OnboardingLinks.js';
export { Reader } from './Readers.js';
export declare class Terminal {
    private readonly stripe;
    configurations: ConfigurationResource;
    connectionTokens: ConnectionTokenResource;
    locations: LocationResource;
    onboardingLinks: OnboardingLinkResource;
    readers: ReaderResource;
    constructor(stripe: Stripe);
}
export declare namespace Terminal {
    export { Configuration };
    export { ConnectionToken };
    export { Location };
    export { OnboardingLink };
    export { Reader };
}
