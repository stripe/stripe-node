import { Stripe } from '../../stripe.core.js';
import { Secret, SecretResource } from './Secrets.js';
export { Secret } from './Secrets.js';
export declare class Apps {
    private readonly stripe;
    secrets: SecretResource;
    constructor(stripe: Stripe);
}
export declare namespace Apps {
    export { Secret };
}
