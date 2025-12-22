import { StripeClient } from '../../stripe.core.js';
import { ScheduledQueryRunResource } from './ScheduledQueryRuns.js';
export { ScheduledQueryRun } from './ScheduledQueryRuns.js';
export declare class Sigma {
    private readonly stripe;
    scheduledQueryRuns: ScheduledQueryRunResource;
    constructor(stripe: StripeClient);
}
