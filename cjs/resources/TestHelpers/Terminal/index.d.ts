import { StripeClient } from '../../../stripe.core.js';
import { ReaderResource } from './Readers.js';
export declare class Terminal {
    private readonly stripe;
    readers: ReaderResource;
    constructor(stripe: StripeClient);
}
