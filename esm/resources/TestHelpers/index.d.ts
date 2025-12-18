import { Stripe } from '../../stripe.core.js';
import { ConfirmationTokenResource } from './ConfirmationTokens.js';
import { CustomerResource } from './Customers.js';
import { RefundResource } from './Refunds.js';
import { TestClockResource } from './TestClocks.js';
export { TestClock } from './TestClocks.js';
export declare class TestHelpers {
    private readonly stripe;
    confirmationTokens: ConfirmationTokenResource;
    customers: CustomerResource;
    refunds: RefundResource;
    testClocks: TestClockResource;
    constructor(stripe: Stripe);
}
