// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {FinancingOffer, FinancingOfferResource} from './FinancingOffers.js';
import {
  FinancingSummary,
  FinancingSummaryResource,
} from './FinancingSummary.js';
import {
  FinancingTransaction,
  FinancingTransactionResource,
} from './FinancingTransactions.js';

export {FinancingOffer} from './FinancingOffers.js';
export {FinancingSummary} from './FinancingSummary.js';
export {FinancingTransaction} from './FinancingTransactions.js';

export class Capital {
  financingOffers: FinancingOfferResource;
  financingSummaries: FinancingSummaryResource;
  financingTransactions: FinancingTransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.financingOffers = new FinancingOfferResource(stripe);
    this.financingSummaries = new FinancingSummaryResource(stripe);
    this.financingTransactions = new FinancingTransactionResource(stripe);
  }
}

export declare namespace Capital {
  export {FinancingOffer};
  export {FinancingSummary};
  export {FinancingTransaction};
}
