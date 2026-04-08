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
import {Tax as TaxNamespace2, Form, FormResource} from './Forms.js';
import {Tax as TaxNamespace3, Location, LocationResource} from './Locations.js';
import {
  Tax as TaxNamespace4,
  Registration,
  RegistrationResource,
} from './Registrations.js';
import {Tax as TaxNamespace5, Settings, SettingResource} from './Settings.js';
import {
  Tax as TaxNamespace6,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {CalculationLineItem} from './CalculationLineItems.js';
import {TransactionLineItem} from './TransactionLineItems.js';

export {Association} from './Associations.js';
export {Calculation} from './Calculations.js';
export {Form} from './Forms.js';
export {Location} from './Locations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';
export {CalculationLineItem} from './CalculationLineItems.js';
export {TransactionLineItem} from './TransactionLineItems.js';

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
  export type AssociationFindParams = TaxNamespace0.AssociationFindParams;
  export {Association};
  export type CalculationRetrieveParams = TaxNamespace1.CalculationRetrieveParams;
  export type CalculationCreateParams = TaxNamespace1.CalculationCreateParams;
  export type CalculationListLineItemsParams = TaxNamespace1.CalculationListLineItemsParams;
  export {Calculation};
  export type FormListParams = TaxNamespace2.FormListParams;
  export type FormRetrieveParams = TaxNamespace2.FormRetrieveParams;
  export type FormPdfParams = TaxNamespace2.FormPdfParams;
  export {Form};
  export type LocationListParams = TaxNamespace3.LocationListParams;
  export type LocationCreateParams = TaxNamespace3.LocationCreateParams;
  export type LocationRetrieveParams = TaxNamespace3.LocationRetrieveParams;
  export {Location};
  export type RegistrationListParams = TaxNamespace4.RegistrationListParams;
  export type RegistrationCreateParams = TaxNamespace4.RegistrationCreateParams;
  export type RegistrationRetrieveParams = TaxNamespace4.RegistrationRetrieveParams;
  export type RegistrationUpdateParams = TaxNamespace4.RegistrationUpdateParams;
  export {Registration};
  export type SettingsRetrieveParams = TaxNamespace5.SettingsRetrieveParams;
  export type SettingsUpdateParams = TaxNamespace5.SettingsUpdateParams;
  export {Settings};
  export type TransactionRetrieveParams = TaxNamespace6.TransactionRetrieveParams;
  export type TransactionCreateFromCalculationParams = TaxNamespace6.TransactionCreateFromCalculationParams;
  export type TransactionCreateReversalParams = TaxNamespace6.TransactionCreateReversalParams;
  export type TransactionListLineItemsParams = TaxNamespace6.TransactionListLineItemsParams;
  export {Transaction};
  export {CalculationLineItem};
  export {TransactionLineItem};
}
