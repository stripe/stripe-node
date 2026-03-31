// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ConfirmationTokenResource} from './ConfirmationTokens.js';
import {CustomerResource} from './Customers.js';
import {PaymentIntentResource} from './PaymentIntents.js';
import {RefundResource} from './Refunds.js';
import {TestClock, TestClockResource} from './TestClocks.js';
import {Capital} from './Capital/index.js';
import {Issuing} from './Issuing/index.js';
import {SharedPayment} from './SharedPayment/index.js';
import {Terminal} from './Terminal/index.js';
import {Treasury} from './Treasury/index.js';

export {TestClock} from './TestClocks.js';

export class TestHelpers {
  confirmationTokens: ConfirmationTokenResource;
  customers: CustomerResource;
  paymentIntents: PaymentIntentResource;
  refunds: RefundResource;
  testClocks: TestClockResource;
  capital: Capital;
  issuing: Issuing;
  sharedPayment: SharedPayment;
  terminal: Terminal;
  treasury: Treasury;

  constructor(private readonly stripe: Stripe) {
    this.confirmationTokens = new ConfirmationTokenResource(stripe);
    this.customers = new CustomerResource(stripe);
    this.paymentIntents = new PaymentIntentResource(stripe);
    this.refunds = new RefundResource(stripe);
    this.testClocks = new TestClockResource(stripe);
    this.capital = new Capital(stripe);
    this.issuing = new Issuing(stripe);
    this.sharedPayment = new SharedPayment(stripe);
    this.terminal = new Terminal(stripe);
    this.treasury = new Treasury(stripe);
  }
}

export declare namespace TestHelpers {
  export {TestClock};
  export {Capital};
  export {Issuing};
  export {SharedPayment};
  export {Terminal};
  export {Treasury};
}
