import { Stripe } from '../../stripe.core.js';
import { Billing } from './Billing/index.js';
import { Core } from './Core/index.js';
export declare class V2 {
    private readonly stripe;
    billing: Billing;
    core: Core;
    constructor(stripe: Stripe);
}
export declare namespace V2 {
    export { Billing };
    export { Core };
}
