// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  BusinessProfile,
  BusinessProfileResource,
} from './BusinessProfiles.js';

export {BusinessProfile} from './BusinessProfiles.js';

export class Network {
  businessProfiles: BusinessProfileResource;

  constructor(private readonly stripe: Stripe) {
    this.businessProfiles = new BusinessProfileResource(stripe);
  }
}

export declare namespace Network {
  export import BusinessProfileMeParams = V2Namespace0.Network.BusinessProfileMeParams;
  export import BusinessProfileRetrieveParams = V2Namespace0.Network.BusinessProfileRetrieveParams;
  export {BusinessProfile};
}
