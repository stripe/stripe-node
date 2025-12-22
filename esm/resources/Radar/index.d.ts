import { StripeClient } from '../../stripe.core.js';
import { EarlyFraudWarningResource } from './EarlyFraudWarnings.js';
import { ValueListResource } from './ValueLists.js';
import { ValueListItemResource } from './ValueListItems.js';
export { EarlyFraudWarning } from './EarlyFraudWarnings.js';
export { ValueList } from './ValueLists.js';
export { ValueListItem } from './ValueListItems.js';
export declare class Radar {
    private readonly stripe;
    earlyFraudWarnings: EarlyFraudWarningResource;
    valueLists: ValueListResource;
    valueListItems: ValueListItemResource;
    constructor(stripe: StripeClient);
}
