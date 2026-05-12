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
  Dispute,
  DisputeResource,
} from './Disputes.js';
import {
  Issuing as IssuingNamespace4,
  PersonalizationDesign,
  PersonalizationDesignResource,
} from './PersonalizationDesigns.js';
import {
  Issuing as IssuingNamespace5,
  PhysicalBundle,
  PhysicalBundleResource,
} from './PhysicalBundles.js';
import {Issuing as IssuingNamespace6, Token, TokenResource} from './Tokens.js';
import {
  Issuing as IssuingNamespace7,
  Transaction,
  TransactionResource,
} from './Transactions.js';

export {Authorization} from './Authorizations.js';
export {Card} from './Cards.js';
export {Cardholder} from './Cardholders.js';
export {Dispute} from './Disputes.js';
export {PersonalizationDesign} from './PersonalizationDesigns.js';
export {PhysicalBundle} from './PhysicalBundles.js';
export {Token} from './Tokens.js';
export {Transaction} from './Transactions.js';

export class Issuing {
  authorizations: AuthorizationResource;
  cards: CardResource;
  cardholders: CardholderResource;
  disputes: DisputeResource;
  personalizationDesigns: PersonalizationDesignResource;
  physicalBundles: PhysicalBundleResource;
  tokens: TokenResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.authorizations = new AuthorizationResource(stripe);
    this.cards = new CardResource(stripe);
    this.cardholders = new CardholderResource(stripe);
    this.disputes = new DisputeResource(stripe);
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
  export import DisputeListParams = IssuingNamespace3.DisputeListParams;
  export import DisputeCreateParams = IssuingNamespace3.DisputeCreateParams;
  export import DisputeRetrieveParams = IssuingNamespace3.DisputeRetrieveParams;
  export import DisputeUpdateParams = IssuingNamespace3.DisputeUpdateParams;
  export import DisputeSubmitParams = IssuingNamespace3.DisputeSubmitParams;
  export {Dispute};
  export import PersonalizationDesignListParams = IssuingNamespace4.PersonalizationDesignListParams;
  export import PersonalizationDesignCreateParams = IssuingNamespace4.PersonalizationDesignCreateParams;
  export import PersonalizationDesignRetrieveParams = IssuingNamespace4.PersonalizationDesignRetrieveParams;
  export import PersonalizationDesignUpdateParams = IssuingNamespace4.PersonalizationDesignUpdateParams;
  export {PersonalizationDesign};
  export import PhysicalBundleListParams = IssuingNamespace5.PhysicalBundleListParams;
  export import PhysicalBundleRetrieveParams = IssuingNamespace5.PhysicalBundleRetrieveParams;
  export {PhysicalBundle};
  export import TokenListParams = IssuingNamespace6.TokenListParams;
  export import TokenRetrieveParams = IssuingNamespace6.TokenRetrieveParams;
  export import TokenUpdateParams = IssuingNamespace6.TokenUpdateParams;
  export {Token};
  export import TransactionListParams = IssuingNamespace7.TransactionListParams;
  export import TransactionRetrieveParams = IssuingNamespace7.TransactionRetrieveParams;
  export import TransactionUpdateParams = IssuingNamespace7.TransactionUpdateParams;
  export {Transaction};
}
