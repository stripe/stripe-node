// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ConfigurationResource} from './Configurations.js';
import {ConnectionTokenResource} from './ConnectionTokens.js';
import {LocationResource} from './Locations.js';
import {ReaderResource} from './Readers.js';

export {Configuration} from './Configurations.js';
export {ConnectionToken} from './ConnectionTokens.js';
export {Location} from './Locations.js';
export {Reader} from './Readers.js';

export class Terminal {
  configurations: ConfigurationResource;
  connectionTokens: ConnectionTokenResource;
  locations: LocationResource;
  readers: ReaderResource;

  constructor(private readonly stripe: Stripe) {
    this.configurations = new ConfigurationResource(stripe);
    this.connectionTokens = new ConnectionTokenResource(stripe);
    this.locations = new LocationResource(stripe);
    this.readers = new ReaderResource(stripe);
  }
}
