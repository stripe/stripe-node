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
  export import AssociationFindParams = TaxNamespace0.AssociationFindParams;
  export {Association};
  export import CalculationRetrieveParams = TaxNamespace1.CalculationRetrieveParams;
  export import CalculationCreateParams = TaxNamespace1.CalculationCreateParams;
  export import CalculationListLineItemsParams = TaxNamespace1.CalculationListLineItemsParams;
  export {Calculation};
  export import FormListParams = TaxNamespace2.FormListParams;
  export import FormRetrieveParams = TaxNamespace2.FormRetrieveParams;
  export import FormPdfParams = TaxNamespace2.FormPdfParams;
  export {Form};
  export import LocationListParams = TaxNamespace3.LocationListParams;
  export import LocationCreateParams = TaxNamespace3.LocationCreateParams;
  export import LocationRetrieveParams = TaxNamespace3.LocationRetrieveParams;
  export {Location};
  export import RegistrationListParams = TaxNamespace4.RegistrationListParams;
  export import RegistrationCreateParams = TaxNamespace4.RegistrationCreateParams;
  export import RegistrationRetrieveParams = TaxNamespace4.RegistrationRetrieveParams;
  export import RegistrationUpdateParams = TaxNamespace4.RegistrationUpdateParams;
  export {Registration};
  export import SettingsRetrieveParams = TaxNamespace5.SettingsRetrieveParams;
  export import SettingsUpdateParams = TaxNamespace5.SettingsUpdateParams;
  export {Settings};
  export import TransactionRetrieveParams = TaxNamespace6.TransactionRetrieveParams;
  export import TransactionCreateFromCalculationParams = TaxNamespace6.TransactionCreateFromCalculationParams;
  export import TransactionCreateReversalParams = TaxNamespace6.TransactionCreateReversalParams;
  export import TransactionListLineItemsParams = TaxNamespace6.TransactionListLineItemsParams;
  export {Transaction};
  export {CalculationLineItem};
  export {TransactionLineItem};
}
