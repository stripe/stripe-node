// eslint-disable-next-line no-warning-comments
// TODO(prathmesh): Generate this with codegen
import { Billing } from './Billing/index.js';
import { Core } from './Core/index.js';
export class V2 {
    constructor(stripe) {
        this.stripe = stripe;
        this.billing = new Billing(stripe);
        this.core = new Core(stripe);
    }
}
//# sourceMappingURL=index.js.map