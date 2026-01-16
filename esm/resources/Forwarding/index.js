// File generated from our OpenAPI spec
import { RequestResource } from './Requests.js';
export class Forwarding {
    constructor(stripe) {
        this.stripe = stripe;
        this.requests = new RequestResource(stripe);
    }
}
//# sourceMappingURL=index.js.map