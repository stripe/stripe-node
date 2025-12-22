import { StripeClient } from '../../stripe.core.js';
import { ConfirmationTokenResource } from './ConfirmationTokens.js';
import { CustomerResource } from './Customers.js';
import { RefundResource } from './Refunds.js';
import { TestClockResource } from './TestClocks.js';
import { Issuing } from './Issuing/index.js';
import { Terminal } from './Terminal/index.js';
import { Treasury } from './Treasury/index.js';
export { TestClock } from './TestClocks.js';
export declare class TestHelpers {
    private readonly stripe;
    confirmationTokens: ConfirmationTokenResource;
    customers: CustomerResource;
    refunds: RefundResource;
    testClocks: TestClockResource;
    issuing: Issuing;
    terminal: Terminal;
    treasury: Treasury;
    constructor(stripe: StripeClient);
}
