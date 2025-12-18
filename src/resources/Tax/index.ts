// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {CalculationResource} from './Calculations.js';
import {RegistrationResource} from './Registrations.js';
import {SettingResource} from './Settings.js';
import {TransactionResource} from './Transactions.js';

export {Calculation} from './Calculations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';

export class Tax {
  calculations: CalculationResource;
  registrations: RegistrationResource;
  settings: SettingResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.calculations = new CalculationResource(stripe);
    this.registrations = new RegistrationResource(stripe);
    this.settings = new SettingResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}
