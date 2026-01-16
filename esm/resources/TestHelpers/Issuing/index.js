// File generated from our OpenAPI spec
import { AuthorizationResource } from './Authorizations.js';
import { CardResource } from './Cards.js';
import { PersonalizationDesignResource } from './PersonalizationDesigns.js';
import { TransactionResource } from './Transactions.js';
export class Issuing {
    constructor(stripe) {
        this.stripe = stripe;
        this.authorizations = new AuthorizationResource(stripe);
        this.cards = new CardResource(stripe);
        this.personalizationDesigns = new PersonalizationDesignResource(stripe);
        this.transactions = new TransactionResource(stripe);
    }
}
//# sourceMappingURL=index.js.map