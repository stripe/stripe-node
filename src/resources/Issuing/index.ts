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
import {Issuing as IssuingNamespace9, Token, TokenResource} from './Tokens.js';
import {
  Issuing as IssuingNamespace10,
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
    this.tokens = new TokenResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Issuing {
  export import AuthorizationListParams = IssuingNamespace0.AuthorizationListParams;
  export import AuthorizationRetrieveParams = IssuingNamespace0.AuthorizationRetrieveParams;
  export import AuthorizationUpdateParams = IssuingNamespace0.AuthorizationUpdateParams;
  export import AuthorizationApproveParams = IssuingNamespace0.AuthorizationApproveParams;
  export import AuthorizationDeclineParams = IssuingNamespace0.AuthorizationDeclineParams;
  export {Authorization};
  export import CardListParams = IssuingNamespace1.CardListParams;
  export import CardCreateParams = IssuingNamespace1.CardCreateParams;
  export import CardRetrieveParams = IssuingNamespace1.CardRetrieveParams;
  export import CardUpdateParams = IssuingNamespace1.CardUpdateParams;
  export {Card};
  export import CardholderListParams = IssuingNamespace2.CardholderListParams;
  export import CardholderCreateParams = IssuingNamespace2.CardholderCreateParams;
  export import CardholderRetrieveParams = IssuingNamespace2.CardholderRetrieveParams;
  export import CardholderUpdateParams = IssuingNamespace2.CardholderUpdateParams;
  export {Cardholder};
  export import CreditUnderwritingRecordListParams = IssuingNamespace3.CreditUnderwritingRecordListParams;
  export import CreditUnderwritingRecordRetrieveParams = IssuingNamespace3.CreditUnderwritingRecordRetrieveParams;
  export import CreditUnderwritingRecordCorrectParams = IssuingNamespace3.CreditUnderwritingRecordCorrectParams;
  export import CreditUnderwritingRecordReportDecisionParams = IssuingNamespace3.CreditUnderwritingRecordReportDecisionParams;
  export import CreditUnderwritingRecordCreateFromApplicationParams = IssuingNamespace3.CreditUnderwritingRecordCreateFromApplicationParams;
  export import CreditUnderwritingRecordCreateFromProactiveReviewParams = IssuingNamespace3.CreditUnderwritingRecordCreateFromProactiveReviewParams;
  export {CreditUnderwritingRecord};
  export import DisputeListParams = IssuingNamespace4.DisputeListParams;
  export import DisputeCreateParams = IssuingNamespace4.DisputeCreateParams;
  export import DisputeRetrieveParams = IssuingNamespace4.DisputeRetrieveParams;
  export import DisputeUpdateParams = IssuingNamespace4.DisputeUpdateParams;
  export import DisputeSubmitParams = IssuingNamespace4.DisputeSubmitParams;
  export {Dispute};
  export import DisputeSettlementDetailListParams = IssuingNamespace5.DisputeSettlementDetailListParams;
  export import DisputeSettlementDetailRetrieveParams = IssuingNamespace5.DisputeSettlementDetailRetrieveParams;
  export {DisputeSettlementDetail};
  export import FraudLiabilityDebitListParams = IssuingNamespace6.FraudLiabilityDebitListParams;
  export import FraudLiabilityDebitRetrieveParams = IssuingNamespace6.FraudLiabilityDebitRetrieveParams;
  export {FraudLiabilityDebit};
  export import PersonalizationDesignListParams = IssuingNamespace7.PersonalizationDesignListParams;
  export import PersonalizationDesignCreateParams = IssuingNamespace7.PersonalizationDesignCreateParams;
  export import PersonalizationDesignRetrieveParams = IssuingNamespace7.PersonalizationDesignRetrieveParams;
  export import PersonalizationDesignUpdateParams = IssuingNamespace7.PersonalizationDesignUpdateParams;
  export {PersonalizationDesign};
  export import PhysicalBundleListParams = IssuingNamespace8.PhysicalBundleListParams;
  export import PhysicalBundleRetrieveParams = IssuingNamespace8.PhysicalBundleRetrieveParams;
  export {PhysicalBundle};
  export import TokenListParams = IssuingNamespace9.TokenListParams;
  export import TokenRetrieveParams = IssuingNamespace9.TokenRetrieveParams;
  export import TokenUpdateParams = IssuingNamespace9.TokenUpdateParams;
  export {Token};
  export import TransactionListParams = IssuingNamespace10.TransactionListParams;
  export import TransactionRetrieveParams = IssuingNamespace10.TransactionRetrieveParams;
  export import TransactionUpdateParams = IssuingNamespace10.TransactionUpdateParams;
  export {Transaction};
  export {Settlement};
}
