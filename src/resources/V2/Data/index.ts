// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Reporting} from './Reporting/index.js';

export class Data {
  reporting: Reporting;

  constructor(private readonly stripe: Stripe) {
    this.reporting = new Reporting(stripe);
  }
}

export declare namespace Data {
  export {Reporting};
}
