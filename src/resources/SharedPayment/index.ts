// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  SharedPayment as SharedPaymentNamespace0,
  GrantedToken,
  GrantedTokenResource,
} from './GrantedTokens.js';
import {IssuedToken} from './IssuedTokens.js';

export {GrantedToken} from './GrantedTokens.js';
export {IssuedToken} from './IssuedTokens.js';

export class SharedPayment {
  grantedTokens: GrantedTokenResource;

  constructor(private readonly stripe: Stripe) {
    this.grantedTokens = new GrantedTokenResource(stripe);
  }
}

export declare namespace SharedPayment {
  export type GrantedTokenRetrieveParams = SharedPaymentNamespace0.GrantedTokenRetrieveParams;
  export {GrantedToken};
  export {IssuedToken};
}
