// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  ThreeDSecure as ThreeDSecureNamespace0,
  Authentication,
  AuthenticationResource,
} from './Authentications.js';

export {Authentication} from './Authentications.js';

export class ThreeDSecure {
  authentications: AuthenticationResource;

  constructor(private readonly stripe: Stripe) {
    this.authentications = new AuthenticationResource(stripe);
  }
}

export declare namespace ThreeDSecure {
  export import AuthenticationListParams = ThreeDSecureNamespace0.AuthenticationListParams;
  export import AuthenticationCreateParams = ThreeDSecureNamespace0.AuthenticationCreateParams;
  export import AuthenticationRetrieveParams = ThreeDSecureNamespace0.AuthenticationRetrieveParams;
  export import AuthenticationCancelParams = ThreeDSecureNamespace0.AuthenticationCancelParams;
  export import AuthenticationSubmitParams = ThreeDSecureNamespace0.AuthenticationSubmitParams;
  export {Authentication, AuthenticationResource};
}
