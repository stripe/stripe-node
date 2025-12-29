// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Configuration, ConfigurationResource} from './Configurations.js';
import {ConnectionToken, ConnectionTokenResource} from './ConnectionTokens.js';
import {Location, LocationResource} from './Locations.js';
import {OnboardingLink, OnboardingLinkResource} from './OnboardingLinks.js';
import {Reader, ReaderResource} from './Readers.js';

export {Configuration} from './Configurations.js';
export {ConnectionToken} from './ConnectionTokens.js';
export {Location} from './Locations.js';
export {OnboardingLink} from './OnboardingLinks.js';
export {Reader} from './Readers.js';

export class Terminal {
  configurations: ConfigurationResource;
  connectionTokens: ConnectionTokenResource;
  locations: LocationResource;
  onboardingLinks: OnboardingLinkResource;
  readers: ReaderResource;

  constructor(private readonly stripe: Stripe) {
    this.configurations = new ConfigurationResource(stripe);
    this.connectionTokens = new ConnectionTokenResource(stripe);
    this.locations = new LocationResource(stripe);
    this.onboardingLinks = new OnboardingLinkResource(stripe);
    this.readers = new ReaderResource(stripe);
  }
}

export declare namespace Terminal {
  export {Configuration};
  export {ConnectionToken};
  export {Location};
  export {OnboardingLink};
  export {Reader};
}
