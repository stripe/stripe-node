// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {ReportRunResource} from './ReportRuns.js';
import {ReportTypeResource} from './ReportTypes.js';

export {ReportRun} from './ReportRuns.js';
export {ReportType} from './ReportTypes.js';

export class Reporting {
  reportRuns: ReportRunResource;
  reportTypes: ReportTypeResource;

  constructor(private readonly stripe: Stripe) {
    this.reportRuns = new ReportRunResource(stripe);
    this.reportTypes = new ReportTypeResource(stripe);
  }
}
