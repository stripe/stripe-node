// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  TestHelpers as TestHelpersNamespace0,
  FinancingOfferResource,
} from './FinancingOffers.js';

export class Capital {
  financingOffers: FinancingOfferResource;

  constructor(private readonly stripe: Stripe) {
    this.financingOffers = new FinancingOfferResource(stripe);
  }
}

export declare namespace Capital {}
