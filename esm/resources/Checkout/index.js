// File generated from our OpenAPI spec
import { SessionResource } from './Sessions.js';
export class Checkout {
    constructor(stripe) {
        this.stripe = stripe;
        this.sessions = new SessionResource(stripe);
    }
}
//# sourceMappingURL=index.js.map