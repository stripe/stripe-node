// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  EarlyFraudWarning,
  EarlyFraudWarningResource,
} from './EarlyFraudWarnings.js';
import {ValueList, ValueListResource} from './ValueLists.js';
import {ValueListItem, ValueListItemResource} from './ValueListItems.js';

export {EarlyFraudWarning} from './EarlyFraudWarnings.js';
export {ValueList} from './ValueLists.js';
export {ValueListItem} from './ValueListItems.js';

export class Radar {
  earlyFraudWarnings: EarlyFraudWarningResource;
  valueLists: ValueListResource;
  valueListItems: ValueListItemResource;

  constructor(private readonly stripe: Stripe) {
    this.earlyFraudWarnings = new EarlyFraudWarningResource(stripe);
    this.valueLists = new ValueListResource(stripe);
    this.valueListItems = new ValueListItemResource(stripe);
  }
}

export declare namespace Radar {
  export {EarlyFraudWarning};
  export {ValueList};
  export {ValueListItem};
}
