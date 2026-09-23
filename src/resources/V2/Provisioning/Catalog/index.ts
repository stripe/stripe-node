// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {V2 as V2Namespace0, ProviderResource} from './Providers.js';
import {V2 as V2Namespace1, ServiceResource} from './Services.js';

export class Catalog {
  providers: ProviderResource;
  services: ServiceResource;

  constructor(private readonly stripe: Stripe) {
    this.providers = new ProviderResource(stripe);
    this.services = new ServiceResource(stripe);
  }
}

export declare namespace Catalog {}
