// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  TestHelpers as TestHelpersNamespace0,
  ConfirmationTokenResource,
} from './ConfirmationTokens.js';
import {
  TestHelpers as TestHelpersNamespace1,
  CustomerResource,
} from './Customers.js';
import {
  TestHelpers as TestHelpersNamespace2,
  PaymentIntentResource,
} from './PaymentIntents.js';
import {
  TestHelpers as TestHelpersNamespace3,
  RefundResource,
} from './Refunds.js';
import {
  TestHelpers as TestHelpersNamespace4,
  TestClock,
  TestClockResource,
} from './TestClocks.js';
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
  export type TestClockDeleteParams = TestHelpersNamespace4.TestClockDeleteParams;
  export type TestClockRetrieveParams = TestHelpersNamespace4.TestClockRetrieveParams;
  export type TestClockListParams = TestHelpersNamespace4.TestClockListParams;
  export type TestClockCreateParams = TestHelpersNamespace4.TestClockCreateParams;
  export type TestClockAdvanceParams = TestHelpersNamespace4.TestClockAdvanceParams;
  export {TestClock};
  export {Capital};
  export {Issuing};
  export {SharedPayment};
  export {Terminal};
  export {Treasury};
}
