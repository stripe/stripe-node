// File generated from our OpenAPI spec

import {StripeClient} from '../../../stripe.core.js';
import {Event} from './Events.js';
import {EventDestinationResource} from './EventDestinations.js';

export {Event} from './Events.js';
export {EventDestination} from './EventDestinations.js';

export class Core {
  events: Event;
  eventDestinations: EventDestinationResource;

  constructor(private readonly stripe: StripeClient) {
    this.events = new Event(stripe);
    this.eventDestinations = new EventDestinationResource(stripe);
  }
}
