import { Stripe } from '../../stripe.core.js';
import { ConfigurationResource } from './Configurations.js';
import { ConnectionTokenResource } from './ConnectionTokens.js';
import { LocationResource } from './Locations.js';
import { ReaderResource } from './Readers.js';
export { Configuration } from './Configurations.js';
export { ConnectionToken } from './ConnectionTokens.js';
export { Location } from './Locations.js';
export { Reader } from './Readers.js';
export declare class Terminal {
    private readonly stripe;
    configurations: ConfigurationResource;
    connectionTokens: ConnectionTokenResource;
    locations: LocationResource;
    readers: ReaderResource;
    constructor(stripe: Stripe);
}
