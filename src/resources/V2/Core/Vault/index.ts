// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {GbBankAccount, GbBankAccountResource} from './GbBankAccounts.js';
import {UsBankAccount, UsBankAccountResource} from './UsBankAccounts.js';

export {GbBankAccount} from './GbBankAccounts.js';
export {UsBankAccount} from './UsBankAccounts.js';

export class Vault {
  gbBankAccounts: GbBankAccountResource;
  usBankAccounts: UsBankAccountResource;

  constructor(private readonly stripe: Stripe) {
    this.gbBankAccounts = new GbBankAccountResource(stripe);
    this.usBankAccounts = new UsBankAccountResource(stripe);
  }
}

export declare namespace Vault {
  export {GbBankAccount};
  export {UsBankAccount};
}
