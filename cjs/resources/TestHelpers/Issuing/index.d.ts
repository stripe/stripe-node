import { StripeClient } from '../../../stripe.core.js';
import { AuthorizationResource } from './Authorizations.js';
import { CardResource } from './Cards.js';
import { PersonalizationDesignResource } from './PersonalizationDesigns.js';
import { TransactionResource } from './Transactions.js';
export declare class Issuing {
    private readonly stripe;
    authorizations: AuthorizationResource;
    cards: CardResource;
    personalizationDesigns: PersonalizationDesignResource;
    transactions: TransactionResource;
    constructor(stripe: StripeClient);
}
