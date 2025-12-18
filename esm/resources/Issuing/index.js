// File generated from our OpenAPI spec
import { AuthorizationResource } from './Authorizations.js';
import { CardResource } from './Cards.js';
import { CardholderResource } from './Cardholders.js';
import { DisputeResource } from './Disputes.js';
import { PersonalizationDesignResource } from './PersonalizationDesigns.js';
import { PhysicalBundleResource } from './PhysicalBundles.js';
import { TokenResource } from './Tokens.js';
import { TransactionResource } from './Transactions.js';
export class Issuing {
    constructor(stripe) {
        this.stripe = stripe;
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
