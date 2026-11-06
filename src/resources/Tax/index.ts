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
  Certificate,
  DeletedCertificate,
  CertificateResource,
} from './Certificates.js';
import {Tax as TaxNamespace3, Form, FormResource} from './Forms.js';
import {Tax as TaxNamespace4, Location, LocationResource} from './Locations.js';
import {
  Tax as TaxNamespace5,
  Registration,
  RegistrationResource,
} from './Registrations.js';
import {Tax as TaxNamespace6, Settings, SettingResource} from './Settings.js';
import {
  Tax as TaxNamespace7,
  Transaction,
  TransactionResource,
} from './Transactions.js';
import {CalculationLineItem} from './CalculationLineItems.js';
import {FormCorrection} from './FormCorrections.js';
import {TransactionLineItem} from './TransactionLineItems.js';

export {Association} from './Associations.js';
export {Calculation} from './Calculations.js';
export {Certificate} from './Certificates.js';
export {Form} from './Forms.js';
export {Location} from './Locations.js';
export {Registration} from './Registrations.js';
export {Settings} from './Settings.js';
export {Transaction} from './Transactions.js';
export {CalculationLineItem} from './CalculationLineItems.js';
export {FormCorrection} from './FormCorrections.js';
export {TransactionLineItem} from './TransactionLineItems.js';

export class Tax {
  associations: AssociationResource;
  calculations: CalculationResource;
  certificates: CertificateResource;
  forms: FormResource;
  locations: LocationResource;
  registrations: RegistrationResource;
  settings: SettingResource;
  transactions: TransactionResource;

  constructor(private readonly stripe: Stripe) {
    this.associations = new AssociationResource(stripe);
    this.calculations = new CalculationResource(stripe);
    this.certificates = new CertificateResource(stripe);
    this.forms = new FormResource(stripe);
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
  export import CertificateDeleteParams = TaxNamespace2.CertificateDeleteParams;
  export import CertificateRetrieveParams = TaxNamespace2.CertificateRetrieveParams;
  export import CertificateListParams = TaxNamespace2.CertificateListParams;
  export import CertificateCreateParams = TaxNamespace2.CertificateCreateParams;
  export {DeletedCertificate};
  export {Certificate, CertificateResource};
  export import FormListParams = TaxNamespace3.FormListParams;
  export import FormRetrieveParams = TaxNamespace3.FormRetrieveParams;
  export import FormCreateParams = TaxNamespace3.FormCreateParams;
  export import FormPdfParams = TaxNamespace3.FormPdfParams;
  export {Form, FormResource};
  export import LocationListParams = TaxNamespace4.LocationListParams;
  export import LocationCreateParams = TaxNamespace4.LocationCreateParams;
  export import LocationRetrieveParams = TaxNamespace4.LocationRetrieveParams;
  export {Location, LocationResource};
  export import RegistrationListParams = TaxNamespace5.RegistrationListParams;
  export import RegistrationCreateParams = TaxNamespace5.RegistrationCreateParams;
  export import RegistrationRetrieveParams = TaxNamespace5.RegistrationRetrieveParams;
  export import RegistrationUpdateParams = TaxNamespace5.RegistrationUpdateParams;
  export import RegistrationSerializeBatchCreateParams = TaxNamespace5.RegistrationSerializeBatchCreateParams;
  export import RegistrationSerializeBatchUpdateParams = TaxNamespace5.RegistrationSerializeBatchUpdateParams;
  export {Registration, RegistrationResource};
  export import SettingsRetrieveParams = TaxNamespace6.SettingsRetrieveParams;
  export import SettingsUpdateParams = TaxNamespace6.SettingsUpdateParams;
  export import SettingsSerializeBatchUpdateParams = TaxNamespace6.SettingsSerializeBatchUpdateParams;
  export {Settings, SettingResource};
  export import TransactionRetrieveParams = TaxNamespace7.TransactionRetrieveParams;
  export import TransactionCreateFromCalculationParams = TaxNamespace7.TransactionCreateFromCalculationParams;
  export import TransactionCreateReversalParams = TaxNamespace7.TransactionCreateReversalParams;
  export import TransactionSerializeBatchCreateReversalParams = TaxNamespace7.TransactionSerializeBatchCreateReversalParams;
  export import TransactionListLineItemsParams = TaxNamespace7.TransactionListLineItemsParams;
  export {Transaction, TransactionResource};
  export {CalculationLineItem};
  export {FormCorrection};
  export {TransactionLineItem};
}
