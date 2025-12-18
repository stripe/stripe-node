// File generated from our OpenAPI spec
import { ConfirmationTokenResource } from './ConfirmationTokens.js';
import { CustomerResource } from './Customers.js';
import { RefundResource } from './Refunds.js';
import { TestClockResource } from './TestClocks.js';
export class TestHelpers {
    constructor(stripe) {
        this.stripe = stripe;
        this.confirmationTokens = new ConfirmationTokenResource(stripe);
        this.customers = new CustomerResource(stripe);
        this.refunds = new RefundResource(stripe);
        this.testClocks = new TestClockResource(stripe);
    }
}
