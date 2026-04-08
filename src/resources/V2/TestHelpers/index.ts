// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  FinancialAddressResource,
} from './FinancialAddresses.js';
import {
  V2 as V2Namespace1,
  MoneyManagementResource,
} from './MoneyManagement.js';

export class TestHelpers {
  financialAddresses: FinancialAddressResource;
  moneyManagements: MoneyManagementResource;

  constructor(private readonly stripe: Stripe) {
    this.financialAddresses = new FinancialAddressResource(stripe);
    this.moneyManagements = new MoneyManagementResource(stripe);
  }
}

export declare namespace TestHelpers {}
