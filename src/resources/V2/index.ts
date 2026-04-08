// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
import {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';
import {Billing} from './Billing/index.js';
import {Core} from './Core/index.js';
import {Data} from './Data/index.js';
import {Iam} from './Iam/index.js';
import {MoneyManagement} from './MoneyManagement/index.js';
import {Payments} from './Payments/index.js';
import {Reporting} from './Reporting/index.js';
import {Tax} from './Tax/index.js';
import {TestHelpers} from './TestHelpers/index.js';

export {DeletedObject} from './DeletedObject.js';
export {FinancialAddressCreditSimulation} from './FinancialAddressCreditSimulations.js';
export {FinancialAddressGeneratedMicrodeposits} from './FinancialAddressGeneratedMicrodeposits.js';

export {DeletedObject} from './DeletedObject.js';

export class V2 {
  billing: Billing;
  core: Core;
  data: Data;
  iam: Iam;
  moneyManagement: MoneyManagement;
  payments: Payments;
  reporting: Reporting;
  tax: Tax;
  testHelpers: TestHelpers;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.core = new Core(stripe);
    this.data = new Data(stripe);
    this.iam = new Iam(stripe);
    this.moneyManagement = new MoneyManagement(stripe);
    this.payments = new Payments(stripe);
    this.reporting = new Reporting(stripe);
    this.tax = new Tax(stripe);
    this.testHelpers = new TestHelpers(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {FinancialAddressCreditSimulation};
  export {FinancialAddressGeneratedMicrodeposits};
  export {Billing};
  export {Core};
  export {Data};
  export {Iam};
  export {MoneyManagement};
  export {Payments};
  export {Reporting};
  export {Tax};
  export {TestHelpers};
}
