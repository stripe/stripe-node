// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {DeletedObject} from './DeletedObject.js';
import {Billing} from './Billing/index.js';
import {Commerce} from './Commerce/index.js';
import {Core} from './Core/index.js';
import {Data} from './Data/index.js';
import {Extend} from './Extend/index.js';
import {Iam} from './Iam/index.js';
import {MoneyManagement} from './MoneyManagement/index.js';
import {Network} from './Network/index.js';
import {OrchestratedCommerce} from './OrchestratedCommerce/index.js';
import {Signals} from './Signals/index.js';

export {DeletedObject} from './DeletedObject.js';

export class V2 {
  billing: Billing;
  commerce: Commerce;
  core: Core;
  data: Data;
  extend: Extend;
  iam: Iam;
  moneyManagement: MoneyManagement;
  network: Network;
  orchestratedCommerce: OrchestratedCommerce;
  signals: Signals;

  constructor(private readonly stripe: Stripe) {
    this.billing = new Billing(stripe);
    this.commerce = new Commerce(stripe);
    this.core = new Core(stripe);
    this.data = new Data(stripe);
    this.extend = new Extend(stripe);
    this.iam = new Iam(stripe);
    this.moneyManagement = new MoneyManagement(stripe);
    this.network = new Network(stripe);
    this.orchestratedCommerce = new OrchestratedCommerce(stripe);
    this.signals = new Signals(stripe);
  }
}

export declare namespace V2 {
  export {DeletedObject};
  export {Billing};
  export {Commerce};
  export {Core};
  export {Data};
  export {Extend};
  export {Iam};
  export {MoneyManagement};
  export {Network};
  export {OrchestratedCommerce};
  export {Signals};
}
