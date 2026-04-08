// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Issuing as IssuingNamespace0,
  Authorization,
  AuthorizationResource,
} from './Authorizations.js';
import {Issuing as IssuingNamespace1, Card, CardResource} from './Cards.js';
import {
  Issuing as IssuingNamespace2,
  Cardholder,
  CardholderResource,
} from './Cardholders.js';
import {
  Issuing as IssuingNamespace3,
  CreditUnderwritingRecord,
  CreditUnderwritingRecordResource,
} from './CreditUnderwritingRecords.js';
import {
  Issuing as IssuingNamespace4,
  Dispute,
  DisputeResource,
} from './Disputes.js';
import {
  Issuing as IssuingNamespace5,
  DisputeSettlementDetail,
  DisputeSettlementDetailResource,
} from './DisputeSettlementDetails.js';
import {
  Issuing as IssuingNamespace6,
  FraudLiabilityDebit,
  FraudLiabilityDebitResource,
} from './FraudLiabilityDebits.js';
import {
  Issuing as IssuingNamespace7,
  PersonalizationDesign,
  PersonalizationDesignResource,
} from './PersonalizationDesigns.js';
import {
  Issuing as IssuingNamespace8,
  PhysicalBundle,
  PhysicalBundleResource,
} from './PhysicalBundles.js';
import {
  Issuing as IssuingNamespace9,
  Program,
  ProgramResource,
} from './Programs.js';
import {Issuing as IssuingNamespace10, Token, TokenResource} from './Tokens.js';
import {
  Issuing as IssuingNamespace11,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {Settlement} from './Settlements.js';

export {Authorization} from './Authorizations.js';
export {Card} from './Cards.js';
export {Cardholder} from './Cardholders.js';
export {CreditUnderwritingRecord} from './CreditUnderwritingRecords.js';
export {Dispute} from './Disputes.js';
export {DisputeSettlementDetail} from './DisputeSettlementDetails.js';
export {FraudLiabilityDebit} from './FraudLiabilityDebits.js';
export {PersonalizationDesign} from './PersonalizationDesigns.js';
export {PhysicalBundle} from './PhysicalBundles.js';
export {Program} from './Programs.js';
export {Token} from './Tokens.js';
export {Transaction} from './Transactions.js';
export {Settlement} from './Settlements.js';

export class Issuing {
  authorizations: AuthorizationResource;
  cards: CardResource;
  cardholders: CardholderResource;
  creditUnderwritingRecords: CreditUnderwritingRecordResource;
  disputes: DisputeResource;
  disputeSettlementDetails: DisputeSettlementDetailResource;
  fraudLiabilityDebits: FraudLiabilityDebitResource;
  personalizationDesigns: PersonalizationDesignResource;
  physicalBundles: PhysicalBundleResource;
  programs: ProgramResource;
  tokens: TokenResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.authorizations = new AuthorizationResource(stripe);
    this.cards = new CardResource(stripe);
    this.cardholders = new CardholderResource(stripe);
    this.creditUnderwritingRecords = new CreditUnderwritingRecordResource(
      stripe
    );
    this.disputes = new DisputeResource(stripe);
    this.disputeSettlementDetails = new DisputeSettlementDetailResource(stripe);
    this.fraudLiabilityDebits = new FraudLiabilityDebitResource(stripe);
    this.personalizationDesigns = new PersonalizationDesignResource(stripe);
    this.physicalBundles = new PhysicalBundleResource(stripe);
    this.programs = new ProgramResource(stripe);
    this.tokens = new TokenResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Issuing {
  export type AuthorizationListParams = IssuingNamespace0.AuthorizationListParams;
  export type AuthorizationRetrieveParams = IssuingNamespace0.AuthorizationRetrieveParams;
  export type AuthorizationUpdateParams = IssuingNamespace0.AuthorizationUpdateParams;
  export type AuthorizationApproveParams = IssuingNamespace0.AuthorizationApproveParams;
  export type AuthorizationDeclineParams = IssuingNamespace0.AuthorizationDeclineParams;
  export {Authorization};
  export type CardListParams = IssuingNamespace1.CardListParams;
  export type CardCreateParams = IssuingNamespace1.CardCreateParams;
  export type CardRetrieveParams = IssuingNamespace1.CardRetrieveParams;
  export type CardUpdateParams = IssuingNamespace1.CardUpdateParams;
  export {Card};
  export type CardholderListParams = IssuingNamespace2.CardholderListParams;
  export type CardholderCreateParams = IssuingNamespace2.CardholderCreateParams;
  export type CardholderRetrieveParams = IssuingNamespace2.CardholderRetrieveParams;
  export type CardholderUpdateParams = IssuingNamespace2.CardholderUpdateParams;
  export {Cardholder};
  export type CreditUnderwritingRecordListParams = IssuingNamespace3.CreditUnderwritingRecordListParams;
  export type CreditUnderwritingRecordRetrieveParams = IssuingNamespace3.CreditUnderwritingRecordRetrieveParams;
  export type CreditUnderwritingRecordCorrectParams = IssuingNamespace3.CreditUnderwritingRecordCorrectParams;
  export type CreditUnderwritingRecordReportDecisionParams = IssuingNamespace3.CreditUnderwritingRecordReportDecisionParams;
  export type CreditUnderwritingRecordCreateFromApplicationParams = IssuingNamespace3.CreditUnderwritingRecordCreateFromApplicationParams;
  export type CreditUnderwritingRecordCreateFromProactiveReviewParams = IssuingNamespace3.CreditUnderwritingRecordCreateFromProactiveReviewParams;
  export {CreditUnderwritingRecord};
  export type DisputeListParams = IssuingNamespace4.DisputeListParams;
  export type DisputeCreateParams = IssuingNamespace4.DisputeCreateParams;
  export type DisputeRetrieveParams = IssuingNamespace4.DisputeRetrieveParams;
  export type DisputeUpdateParams = IssuingNamespace4.DisputeUpdateParams;
  export type DisputeSubmitParams = IssuingNamespace4.DisputeSubmitParams;
  export {Dispute};
  export type DisputeSettlementDetailListParams = IssuingNamespace5.DisputeSettlementDetailListParams;
  export type DisputeSettlementDetailRetrieveParams = IssuingNamespace5.DisputeSettlementDetailRetrieveParams;
  export {DisputeSettlementDetail};
  export type FraudLiabilityDebitListParams = IssuingNamespace6.FraudLiabilityDebitListParams;
  export type FraudLiabilityDebitRetrieveParams = IssuingNamespace6.FraudLiabilityDebitRetrieveParams;
  export {FraudLiabilityDebit};
  export type PersonalizationDesignListParams = IssuingNamespace7.PersonalizationDesignListParams;
  export type PersonalizationDesignCreateParams = IssuingNamespace7.PersonalizationDesignCreateParams;
  export type PersonalizationDesignRetrieveParams = IssuingNamespace7.PersonalizationDesignRetrieveParams;
  export type PersonalizationDesignUpdateParams = IssuingNamespace7.PersonalizationDesignUpdateParams;
  export {PersonalizationDesign};
  export type PhysicalBundleListParams = IssuingNamespace8.PhysicalBundleListParams;
  export type PhysicalBundleRetrieveParams = IssuingNamespace8.PhysicalBundleRetrieveParams;
  export {PhysicalBundle};
  export type ProgramListParams = IssuingNamespace9.ProgramListParams;
  export type ProgramCreateParams = IssuingNamespace9.ProgramCreateParams;
  export type ProgramRetrieveParams = IssuingNamespace9.ProgramRetrieveParams;
  export type ProgramUpdateParams = IssuingNamespace9.ProgramUpdateParams;
  export {Program};
  export type TokenListParams = IssuingNamespace10.TokenListParams;
  export type TokenRetrieveParams = IssuingNamespace10.TokenRetrieveParams;
  export type TokenUpdateParams = IssuingNamespace10.TokenUpdateParams;
  export {Token};
  export type TransactionListParams = IssuingNamespace11.TransactionListParams;
  export type TransactionRetrieveParams = IssuingNamespace11.TransactionRetrieveParams;
  export type TransactionUpdateParams = IssuingNamespace11.TransactionUpdateParams;
  export {Transaction};
  export {Settlement};
}
