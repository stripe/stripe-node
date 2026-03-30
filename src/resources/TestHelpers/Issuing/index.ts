// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {AuthorizationResource} from './Authorizations.js';
import {CardResource} from './Cards.js';
import {PersonalizationDesignResource} from './PersonalizationDesigns.js';
import {TransactionResource} from './Transactions.js';

export class Issuing {
  authorizations: AuthorizationResource;
  cards: CardResource;
  personalizationDesigns: PersonalizationDesignResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.authorizations = new AuthorizationResource(stripe);
    this.cards = new CardResource(stripe);
    this.personalizationDesigns = new PersonalizationDesignResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Issuing {}
