// File generated from our OpenAPI spec
import { ScheduledQueryRunResource } from './ScheduledQueryRuns.js';
export class Sigma {
    constructor(stripe) {
        this.stripe = stripe;
        this.scheduledQueryRuns = new ScheduledQueryRunResource(stripe);
    }
}
