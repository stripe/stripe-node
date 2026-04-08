// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Tax as TaxNamespace0,
  Association,
  AssociationResource,
} from './Associations.js';
import {
  Tax as TaxNamespace1,
  Calculation,
  CalculationResource,
} from './Calculations.js';
import {
  Tax as TaxNamespace2,
  Registration,
  RegistrationResource,
} from './Registrations.js';
import {Tax as TaxNamespace3, Settings, SettingResource} from './Settings.js';
import {
  Tax as TaxNamespace4,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {CalculationLineItem} from './CalculationLineItems.js';
import {TransactionLineItem} from './TransactionLineItems.js';

export {Association} from './Associations.js';
export {Calculation} from './Calculations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';
export {CalculationLineItem} from './CalculationLineItems.js';
export {TransactionLineItem} from './TransactionLineItems.js';

export class Tax {
  associations: AssociationResource;
  calculations: CalculationResource;
  registrations: RegistrationResource;
  settings: SettingResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.associations = new AssociationResource(stripe);
    this.calculations = new CalculationResource(stripe);
    this.registrations = new RegistrationResource(stripe);
    this.settings = new SettingResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Tax {
  export type AssociationFindParams = TaxNamespace0.AssociationFindParams;
  export {Association};
  export type CalculationRetrieveParams = TaxNamespace1.CalculationRetrieveParams;
  export type CalculationCreateParams = TaxNamespace1.CalculationCreateParams;
  export type CalculationListLineItemsParams = TaxNamespace1.CalculationListLineItemsParams;
  export {Calculation};
  export type RegistrationListParams = TaxNamespace2.RegistrationListParams;
  export type RegistrationCreateParams = TaxNamespace2.RegistrationCreateParams;
  export type RegistrationRetrieveParams = TaxNamespace2.RegistrationRetrieveParams;
  export type RegistrationUpdateParams = TaxNamespace2.RegistrationUpdateParams;
  export {Registration};
  export type SettingsRetrieveParams = TaxNamespace3.SettingsRetrieveParams;
  export type SettingsUpdateParams = TaxNamespace3.SettingsUpdateParams;
  export {Settings};
  export type TransactionRetrieveParams = TaxNamespace4.TransactionRetrieveParams;
  export type TransactionCreateFromCalculationParams = TaxNamespace4.TransactionCreateFromCalculationParams;
  export type TransactionCreateReversalParams = TaxNamespace4.TransactionCreateReversalParams;
  export type TransactionListLineItemsParams = TaxNamespace4.TransactionListLineItemsParams;
  export {Transaction};
  export {CalculationLineItem};
  export {TransactionLineItem};
}
