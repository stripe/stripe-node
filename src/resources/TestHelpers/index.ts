// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ConfirmationTokenResource} from './ConfirmationTokens.js';
import {CustomerResource} from './Customers.js';
import {RefundResource} from './Refunds.js';
import {TestClockResource} from './TestClocks.js';

export {TestClock} from './TestClocks.js';

export class TestHelpers {
  confirmationTokens: ConfirmationTokenResource;
  customers: CustomerResource;
  refunds: RefundResource;
  testClocks: TestClockResource;

  constructor(private readonly stripe: Stripe) {
    this.confirmationTokens = new ConfirmationTokenResource(stripe);
    this.customers = new CustomerResource(stripe);
    this.refunds = new RefundResource(stripe);
    this.testClocks = new TestClockResource(stripe);
  }
}
