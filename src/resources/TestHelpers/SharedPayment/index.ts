// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  TestHelpers as TestHelpersNamespace0,
  GrantedTokenResource,
} from './GrantedTokens.js';

export class SharedPayment {
  grantedTokens: GrantedTokenResource;

  constructor(private readonly stripe: Stripe) {
    this.grantedTokens = new GrantedTokenResource(stripe);
  }
}

export declare namespace SharedPayment {}
