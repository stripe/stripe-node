// File generated from our OpenAPI spec
import { SecretResource } from './Secrets.js';
export class Apps {
    constructor(stripe) {
        this.stripe = stripe;
        this.secrets = new SecretResource(stripe);
    }
}
