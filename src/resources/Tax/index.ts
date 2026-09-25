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
import {Tax as TaxNamespace2, Location, LocationResource} from './Locations.js';
import {
  Tax as TaxNamespace3,
  Registration,
  RegistrationResource,
} from './Registrations.js';
import {Tax as TaxNamespace4, Settings, SettingResource} from './Settings.js';
import {
  Tax as TaxNamespace5,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {CalculationLineItem} from './CalculationLineItems.js';
import {TransactionLineItem} from './TransactionLineItems.js';

export {Association} from './Associations.js';
export {Calculation} from './Calculations.js';
export {Location} from './Locations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';
export {CalculationLineItem} from './CalculationLineItems.js';
export {TransactionLineItem} from './TransactionLineItems.js';

export class Tax {
  associations: AssociationResource;
  calculations: CalculationResource;
  locations: LocationResource;
  registrations: RegistrationResource;
  settings: SettingResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.associations = new AssociationResource(stripe);
    this.calculations = new CalculationResource(stripe);
    this.locations = new LocationResource(stripe);
    this.registrations = new RegistrationResource(stripe);
    this.settings = new SettingResource(stripe);
    this.transactions = new TransactionResource(stripe);
  }
}

export declare namespace Tax {
  export import AssociationFindParams = TaxNamespace0.AssociationFindParams;
  export {Association, AssociationResource};
  export import CalculationRetrieveParams = TaxNamespace1.CalculationRetrieveParams;
  export import CalculationCreateParams = TaxNamespace1.CalculationCreateParams;
  export import CalculationListLineItemsParams = TaxNamespace1.CalculationListLineItemsParams;
  export {Calculation, CalculationResource};
  export import LocationListParams = TaxNamespace2.LocationListParams;
  export import LocationCreateParams = TaxNamespace2.LocationCreateParams;
  export import LocationRetrieveParams = TaxNamespace2.LocationRetrieveParams;
  export {Location, LocationResource};
  export import RegistrationListParams = TaxNamespace3.RegistrationListParams;
  export import RegistrationCreateParams = TaxNamespace3.RegistrationCreateParams;
  export import RegistrationRetrieveParams = TaxNamespace3.RegistrationRetrieveParams;
  export import RegistrationUpdateParams = TaxNamespace3.RegistrationUpdateParams;
  export {Registration, RegistrationResource};
  export import SettingsRetrieveParams = TaxNamespace4.SettingsRetrieveParams;
  export import SettingsUpdateParams = TaxNamespace4.SettingsUpdateParams;
  export {Settings, SettingResource};
  export import TransactionRetrieveParams = TaxNamespace5.TransactionRetrieveParams;
  export import TransactionCreateFromCalculationParams = TaxNamespace5.TransactionCreateFromCalculationParams;
  export import TransactionCreateReversalParams = TaxNamespace5.TransactionCreateReversalParams;
  export import TransactionListLineItemsParams = TaxNamespace5.TransactionListLineItemsParams;
  export {Transaction, TransactionResource};
  export {CalculationLineItem};
  export {TransactionLineItem};
}
