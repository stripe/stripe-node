// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Capital as CapitalNamespace0,
  FinancingOffer,
  FinancingOfferResource,
} from './FinancingOffers.js';
import {
  Capital as CapitalNamespace1,
  FinancingSummary,
  FinancingSummaryResource,
} from './FinancingSummary.js';
import {
  Capital as CapitalNamespace2,
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
  export type FinancingOfferListParams = CapitalNamespace0.FinancingOfferListParams;
  export type FinancingOfferRetrieveParams = CapitalNamespace0.FinancingOfferRetrieveParams;
  export type FinancingOfferMarkDeliveredParams = CapitalNamespace0.FinancingOfferMarkDeliveredParams;
  export {FinancingOffer};
  export type FinancingSummaryRetrieveParams = CapitalNamespace1.FinancingSummaryRetrieveParams;
  export {FinancingSummary};
  export type FinancingTransactionListParams = CapitalNamespace2.FinancingTransactionListParams;
  export type FinancingTransactionRetrieveParams = CapitalNamespace2.FinancingTransactionRetrieveParams;
  export {FinancingTransaction};
}
