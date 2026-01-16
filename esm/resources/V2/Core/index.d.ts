import { Stripe } from '../../../stripe.core.js';
import { Account, AccountResource } from './Accounts.js';
import { AccountLink, AccountLinkResource } from './AccountLinks.js';
import { AccountToken, AccountTokenResource } from './AccountTokens.js';
import { Event, Events, EventBase, EventNotification, EventResource } from './Events.js';
import { EventDestination, EventDestinationResource } from './EventDestinations.js';
import { AccountPersonToken } from './AccountPersonTokens.js';
import { AccountPerson } from './AccountPersons.js';
export { Account } from './Accounts.js';
export { AccountLink } from './AccountLinks.js';
export { AccountToken } from './AccountTokens.js';
export { Event } from './Events.js';
export { EventDestination } from './EventDestinations.js';
export declare class Core {
    private readonly stripe;
    accounts: AccountResource;
    accountLinks: AccountLinkResource;
    accountTokens: AccountTokenResource;
    events: EventResource;
    eventDestinations: EventDestinationResource;
    constructor(stripe: Stripe);
}
export declare namespace Core {
    export { Account };
    export { AccountLink };
    export { AccountToken };
    export { EventBase };
    export { EventDestination };
    export { AccountPersonToken };
    export { AccountPerson };
    export { Event, Events, EventNotification };
}
