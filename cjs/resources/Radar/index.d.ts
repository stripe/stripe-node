import { Stripe } from '../../stripe.core.js';
import { EarlyFraudWarning, EarlyFraudWarningResource } from './EarlyFraudWarnings.js';
import { ValueList, ValueListResource } from './ValueLists.js';
import { ValueListItem, ValueListItemResource } from './ValueListItems.js';
export { EarlyFraudWarning } from './EarlyFraudWarnings.js';
export { ValueList } from './ValueLists.js';
export { ValueListItem } from './ValueListItems.js';
export declare class Radar {
    private readonly stripe;
    earlyFraudWarnings: EarlyFraudWarningResource;
    valueLists: ValueListResource;
    valueListItems: ValueListItemResource;
    constructor(stripe: Stripe);
}
export declare namespace Radar {
    export { EarlyFraudWarning };
    export { ValueList };
    export { ValueListItem };
}
