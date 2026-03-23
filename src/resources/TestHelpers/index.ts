// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ConfirmationTokenResource} from './ConfirmationTokens.js';
import {CustomerResource} from './Customers.js';
import {RefundResource} from './Refunds.js';
import {TestClock, TestClockResource} from './TestClocks.js';
import {Issuing} from './Issuing/index.js';
import {Terminal} from './Terminal/index.js';
import {Treasury} from './Treasury/index.js';

export {TestClock} from './TestClocks.js';

export class TestHelpers {
  confirmationTokens: ConfirmationTokenResource;
  customers: CustomerResource;
  refunds: RefundResource;
  testClocks: TestClockResource;
  issuing: Issuing;
  terminal: Terminal;
  treasury: Treasury;

  constructor(private readonly stripe: Stripe) {
    this.confirmationTokens = new ConfirmationTokenResource(stripe);
    this.customers = new CustomerResource(stripe);
    this.refunds = new RefundResource(stripe);
    this.testClocks = new TestClockResource(stripe);
    this.issuing = new Issuing(stripe);
    this.terminal = new Terminal(stripe);
    this.treasury = new Treasury(stripe);
  }
}

export declare namespace TestHelpers {
  export {TestClock};
}
