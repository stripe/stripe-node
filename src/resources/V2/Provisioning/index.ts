// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  Eligibility,
  EligibilityResource,
} from './Eligibility.js';
import {
  V2 as V2Namespace1,
  PaymentMethodRequest,
  PaymentMethodRequestResource,
} from './PaymentMethodRequests.js';
import {
  V2 as V2Namespace2,
  PaymentProfile,
  PaymentProfileResource,
} from './PaymentProfile.js';
import {V2 as V2Namespace3, Project, ProjectResource} from './Projects.js';
import {
  V2 as V2Namespace4,
  ProviderConnection,
  ProviderConnectionResource,
} from './ProviderConnections.js';
import {
  V2 as V2Namespace5,
  ProviderConnectionRequest,
  ProviderConnectionRequestResource,
} from './ProviderConnectionRequests.js';
import {V2 as V2Namespace6, Resource, ResourceResource} from './Resources.js';
import {Provider} from './Providers.js';
import {ProviderServiceDetail} from './ProviderServiceDetails.js';
import {Catalog} from './Catalog/index.js';

export {Eligibility} from './Eligibility.js';
export {PaymentMethodRequest} from './PaymentMethodRequests.js';
export {PaymentProfile} from './PaymentProfile.js';
export {Project} from './Projects.js';
export {ProviderConnection} from './ProviderConnections.js';
export {ProviderConnectionRequest} from './ProviderConnectionRequests.js';
export {Resource} from './Resources.js';
export {Provider} from './Providers.js';
export {ProviderServiceDetail} from './ProviderServiceDetails.js';

export class Provisioning {
  eligibilities: EligibilityResource;
  paymentMethodRequests: PaymentMethodRequestResource;
  paymentProfiles: PaymentProfileResource;
  projects: ProjectResource;
  providerConnections: ProviderConnectionResource;
  providerConnectionRequests: ProviderConnectionRequestResource;
  resources: ResourceResource;
  catalog: Catalog;

  constructor(private readonly stripe: Stripe) {
    this.eligibilities = new EligibilityResource(stripe);
    this.paymentMethodRequests = new PaymentMethodRequestResource(stripe);
    this.paymentProfiles = new PaymentProfileResource(stripe);
    this.projects = new ProjectResource(stripe);
    this.providerConnections = new ProviderConnectionResource(stripe);
    this.providerConnectionRequests = new ProviderConnectionRequestResource(
      stripe
    );
    this.resources = new ResourceResource(stripe);
    this.catalog = new Catalog(stripe);
  }
}

export declare namespace Provisioning {
  export import EligibilityRetrieveParams = V2Namespace0.Provisioning.EligibilityRetrieveParams;
  export {Eligibility, EligibilityResource};
  export import PaymentMethodRequestCreateParams = V2Namespace1.Provisioning.PaymentMethodRequestCreateParams;
  export {PaymentMethodRequest, PaymentMethodRequestResource};
  export import PaymentProfileRetrieveParams = V2Namespace2.Provisioning.PaymentProfileRetrieveParams;
  export {PaymentProfile, PaymentProfileResource};
  export import ProjectCreateParams = V2Namespace3.Provisioning.ProjectCreateParams;
  export {Project, ProjectResource};
  export import ProviderConnectionListParams = V2Namespace4.Provisioning.ProviderConnectionListParams;
  export import ProviderConnectionUnlinkParams = V2Namespace4.Provisioning.ProviderConnectionUnlinkParams;
  export {ProviderConnection, ProviderConnectionResource};
  export import ProviderConnectionRequestCreateParams = V2Namespace5.Provisioning.ProviderConnectionRequestCreateParams;
  export import ProviderConnectionRequestRetrieveParams = V2Namespace5.Provisioning.ProviderConnectionRequestRetrieveParams;
  export import ProviderConnectionRequestSubmitInformationParams = V2Namespace5.Provisioning.ProviderConnectionRequestSubmitInformationParams;
  export {ProviderConnectionRequest, ProviderConnectionRequestResource};
  export import ResourceCreateParams = V2Namespace6.Provisioning.ResourceCreateParams;
  export import ResourceLinkParams = V2Namespace6.Provisioning.ResourceLinkParams;
  export import ResourceRetrieveParams = V2Namespace6.Provisioning.ResourceRetrieveParams;
  export import ResourceUpdateParams = V2Namespace6.Provisioning.ResourceUpdateParams;
  export import ResourceRemoveParams = V2Namespace6.Provisioning.ResourceRemoveParams;
  export import ResourceRotateCredentialsParams = V2Namespace6.Provisioning.ResourceRotateCredentialsParams;
  export import ResourceSubmitInformationParams = V2Namespace6.Provisioning.ResourceSubmitInformationParams;
  export import ResourceUnlinkParams = V2Namespace6.Provisioning.ResourceUnlinkParams;
  export {Resource, ResourceResource};
  export {Provider};
  export {ProviderServiceDetail};
  export {Catalog};
}
