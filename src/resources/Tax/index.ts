// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {Association, AssociationResource} from './Associations.js';
import {Calculation, CalculationResource} from './Calculations.js';
import {Form, FormResource} from './Forms.js';
import {Location, LocationResource} from './Locations.js';
import {Registration, RegistrationResource} from './Registrations.js';
import {Settings, SettingResource} from './Settings.js';
import {Transaction, TransactionResource} from './Transactions.js';
import {CalculationLineItem} from './CalculationLineItems.js';
import {TransactionLineItem} from './TransactionLineItems.js';

export {Association} from './Associations.js';
export {Calculation} from './Calculations.js';
export {Form} from './Forms.js';
export {Location} from './Locations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';

export class Tax {
  associations: AssociationResource;
  calculations: CalculationResource;
  forms: FormResource;
  locations: LocationResource;
  registrations: RegistrationResource;
  settings: SettingResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.associations = new AssociationResource(stripe);
    this.calculations = new CalculationResource(stripe);
    this.forms = new FormResource(stripe);
    this.locations = new LocationResource(stripe);
    this.registrations = new RegistrationResource(stripe);
    this.settings = new SettingResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Tax {
  export {Association};
  export {Calculation};
  export {Form};
  export {Location};
  export {Registration};
  export {Settings};
  export {Transaction};
  export {CalculationLineItem};
  export {TransactionLineItem};
}
