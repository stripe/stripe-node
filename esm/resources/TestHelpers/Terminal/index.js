// File generated from our OpenAPI spec
import { ReaderResource } from './Readers.js';
export class Terminal {
    constructor(stripe) {
        this.stripe = stripe;
        this.readers = new ReaderResource(stripe);
    }
}
//# sourceMappingURL=index.js.map