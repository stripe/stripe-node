import { Stripe } from '../../stripe.core.js';
import { Authorization, AuthorizationResource } from './Authorizations.js';
import { Card, CardResource } from './Cards.js';
import { Cardholder, CardholderResource } from './Cardholders.js';
import { Dispute, DisputeResource } from './Disputes.js';
import { PersonalizationDesign, PersonalizationDesignResource } from './PersonalizationDesigns.js';
import { PhysicalBundle, PhysicalBundleResource } from './PhysicalBundles.js';
import { Token, TokenResource } from './Tokens.js';
import { Transaction, TransactionResource } from './Transactions.js';
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
export declare namespace Issuing {
    export { Authorization };
    export { Card };
    export { Cardholder };
    export { Dispute };
    export { PersonalizationDesign };
    export { PhysicalBundle };
    export { Token };
    export { Transaction };
}
