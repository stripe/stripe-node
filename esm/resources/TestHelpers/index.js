// File generated from our OpenAPI spec
import { ConfirmationTokenResource } from './ConfirmationTokens.js';
import { CustomerResource } from './Customers.js';
import { RefundResource } from './Refunds.js';
import { TestClockResource } from './TestClocks.js';
import { Issuing } from './Issuing/index.js';
import { Terminal } from './Terminal/index.js';
import { Treasury } from './Treasury/index.js';
export class TestHelpers {
    constructor(stripe) {
        this.stripe = stripe;
        this.confirmationTokens = new ConfirmationTokenResource(stripe);
        this.customers = new CustomerResource(stripe);
        this.refunds = new RefundResource(stripe);
        this.testClocks = new TestClockResource(stripe);
        this.issuing = new Issuing(stripe);
        this.terminal = new Terminal(stripe);
        this.treasury = new Treasury(stripe);
    }
}
//# sourceMappingURL=index.js.map