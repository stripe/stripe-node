// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {TrialOffer, TrialOfferResource} from './TrialOffers.js';

export {TrialOffer} from './TrialOffers.js';

export class ProductCatalog {
  trialOffers: TrialOfferResource;

  constructor(private readonly stripe: Stripe) {
    this.trialOffers = new TrialOfferResource(stripe);
  }
}

export declare namespace ProductCatalog {
  export {TrialOffer};
}
