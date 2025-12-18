import { Stripe } from '../../stripe.core.js';
import { AuthorizationResource } from './Authorizations.js';
import { CardResource } from './Cards.js';
import { CardholderResource } from './Cardholders.js';
import { DisputeResource } from './Disputes.js';
import { PersonalizationDesignResource } from './PersonalizationDesigns.js';
import { PhysicalBundleResource } from './PhysicalBundles.js';
import { TokenResource } from './Tokens.js';
import { TransactionResource } from './Transactions.js';
export { Authorization } from './Authorizations.js';
export { Card } from './Cards.js';
export { Cardholder } from './Cardholders.js';
export { Dispute } from './Disputes.js';
export { PersonalizationDesign } from './PersonalizationDesigns.js';
export { PhysicalBundle } from './PhysicalBundles.js';
export { Token } from './Tokens.js';
export { Transaction } from './Transactions.js';
export declare class Issuing {
    private readonly stripe;
    authorizations: AuthorizationResource;
    cards: CardResource;
    cardholders: CardholderResource;
    disputes: DisputeResource;
    personalizationDesigns: PersonalizationDesignResource;
    physicalBundles: PhysicalBundleResource;
    tokens: TokenResource;
    transactions: TransactionResource;
    constructor(stripe: Stripe);
}
