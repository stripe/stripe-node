import { Stripe } from '../../stripe.core.js';
import { SecretResource } from './Secrets.js';
export { Secret } from './Secrets.js';
export declare class Apps {
    private readonly stripe;
    secrets: SecretResource;
    constructor(stripe: Stripe);
}
