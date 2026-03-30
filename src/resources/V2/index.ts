// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
import {Billing} from './Billing/index.js';
import {Core} from './Core/index.js';
import {MoneyManagement} from './MoneyManagement/index.js';
import {TestHelpers} from './TestHelpers/index.js';

export class V2 {
  billing: Billing;
  core: Core;
  moneyManagement: MoneyManagement;
  testHelpers: TestHelpers;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.core = new Core(stripe);
    this.moneyManagement = new MoneyManagement(stripe);
    this.testHelpers = new TestHelpers(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {FinancialAddressCreditSimulation};
  export {FinancialAddressGeneratedMicrodeposits};
  export {Billing};
  export {Core};
  export {MoneyManagement};
  export {TestHelpers};
}
