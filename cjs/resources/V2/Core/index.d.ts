import { StripeClient } from '../../../stripe.core.js';
import { Event } from './Events.js';
import { EventDestinationResource } from './EventDestinations.js';
export { Event } from './Events.js';
export { EventDestination } from './EventDestinations.js';
export declare class Core {
    private readonly stripe;
    events: Event;
    eventDestinations: EventDestinationResource;
    constructor(stripe: StripeClient);
}
