// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  MoneyManagementResource,
} from './MoneyManagement.js';

export class TestHelpers {
  moneyManagements: MoneyManagementResource;

  constructor(private readonly stripe: Stripe) {
    this.moneyManagements = new MoneyManagementResource(stripe);
  }
}

export declare namespace TestHelpers {}
