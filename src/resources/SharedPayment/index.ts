// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  SharedPayment as SharedPaymentNamespace0,
  GrantedToken,
  GrantedTokenResource,
} from './GrantedTokens.js';
import {
  SharedPayment as SharedPaymentNamespace1,
  IssuedToken,
  IssuedTokenResource,
} from './IssuedTokens.js';

export {GrantedToken} from './GrantedTokens.js';
export {IssuedToken} from './IssuedTokens.js';

export class SharedPayment {
  grantedTokens: GrantedTokenResource;
  issuedTokens: IssuedTokenResource;

  constructor(private readonly stripe: Stripe) {
    this.grantedTokens = new GrantedTokenResource(stripe);
    this.issuedTokens = new IssuedTokenResource(stripe);
  }
}

export declare namespace SharedPayment {
  export type GrantedTokenRetrieveParams = SharedPaymentNamespace0.GrantedTokenRetrieveParams;
  export {GrantedToken};
  export type IssuedTokenRetrieveParams = SharedPaymentNamespace1.IssuedTokenRetrieveParams;
  export type IssuedTokenCreateParams = SharedPaymentNamespace1.IssuedTokenCreateParams;
  export type IssuedTokenRevokeParams = SharedPaymentNamespace1.IssuedTokenRevokeParams;
  export {IssuedToken};
}
