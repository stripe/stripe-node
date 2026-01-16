// File generated from our OpenAPI spec
import { EarlyFraudWarningResource, } from './EarlyFraudWarnings.js';
import { ValueListResource } from './ValueLists.js';
import { ValueListItemResource } from './ValueListItems.js';
export class Radar {
    constructor(stripe) {
        this.stripe = stripe;
        this.earlyFraudWarnings = new EarlyFraudWarningResource(stripe);
        this.valueLists = new ValueListResource(stripe);
        this.valueListItems = new ValueListItemResource(stripe);
    }
}
//# sourceMappingURL=index.js.map