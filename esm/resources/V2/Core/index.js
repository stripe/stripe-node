// File generated from our OpenAPI spec
import { AccountResource } from './Accounts.js';
import { AccountLinkResource } from './AccountLinks.js';
import { AccountTokenResource } from './AccountTokens.js';
import { EventResource, } from './Events.js';
import { EventDestinationResource, } from './EventDestinations.js';
export class Core {
    constructor(stripe) {
        this.stripe = stripe;
        this.accounts = new AccountResource(stripe);
        this.accountLinks = new AccountLinkResource(stripe);
        this.accountTokens = new AccountTokenResource(stripe);
        this.events = new EventResource(stripe);
        this.eventDestinations = new EventDestinationResource(stripe);
    }
}
//# sourceMappingURL=index.js.map