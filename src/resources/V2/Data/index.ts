// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {Analytics} from './Analytics/index.js';
import {Reporting} from './Reporting/index.js';

export class Data {
  analytics: Analytics;
  reporting: Reporting;

  constructor(private readonly stripe: Stripe) {
    this.analytics = new Analytics(stripe);
    this.reporting = new Reporting(stripe);
  }
}

export declare namespace Data {
  export {Analytics};
  export {Reporting};
}
