// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  FinancialAddressResource,
} from './FinancialAddresses.js';

export class TestHelpers {
  financialAddresses: FinancialAddressResource;

  constructor(private readonly stripe: Stripe) {
    this.financialAddresses = new FinancialAddressResource(stripe);
  }
}

export declare namespace TestHelpers {}
