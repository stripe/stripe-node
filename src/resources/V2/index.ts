// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {Billing} from './Billing/index.js';
import {Commerce} from './Commerce/index.js';
import {Core} from './Core/index.js';
import {MoneyManagement} from './MoneyManagement/index.js';
import {TestHelpers} from './TestHelpers/index.js';

export {DeletedObject} from './DeletedObject.js';

export class V2 {
  billing: Billing;
  commerce: Commerce;
  core: Core;
  moneyManagement: MoneyManagement;
  testHelpers: TestHelpers;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.commerce = new Commerce(stripe);
    this.core = new Core(stripe);
    this.moneyManagement = new MoneyManagement(stripe);
    this.testHelpers = new TestHelpers(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {Billing};
  export {Commerce};
  export {Core};
  export {MoneyManagement};
  export {TestHelpers};
}
