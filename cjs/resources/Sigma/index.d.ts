import { Stripe } from '../../stripe.core.js';
import { ScheduledQueryRun, ScheduledQueryRunResource } from './ScheduledQueryRuns.js';
export { ScheduledQueryRun } from './ScheduledQueryRuns.js';
export declare class Sigma {
    private readonly stripe;
    scheduledQueryRuns: ScheduledQueryRunResource;
    constructor(stripe: Stripe);
}
export declare namespace Sigma {
    export { ScheduledQueryRun };
}
