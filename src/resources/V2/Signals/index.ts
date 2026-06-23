// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  AccountSignal,
  AccountSignalResource,
} from './AccountSignals.js';

export {AccountSignal} from './AccountSignals.js';

export class Signals {
  accountSignals: AccountSignalResource;

  constructor(private readonly stripe: Stripe) {
    this.accountSignals = new AccountSignalResource(stripe);
  }
}

export declare namespace Signals {
  export import AccountSignalListParams = V2Namespace0.Signals.AccountSignalListParams;
  export import AccountSignalRetrieveParams = V2Namespace0.Signals.AccountSignalRetrieveParams;
  export {AccountSignal, AccountSignalResource};
}
