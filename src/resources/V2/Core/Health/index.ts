// File generated from our OpenAPI spec

import {Stripe} from '../../../../stripe.core.js';
import {V2 as V2Namespace0, Alert, AlertResource} from './Alerts.js';
import {AlertHistoryEntry} from './AlertHistoryEntries.js';

export {Alert} from './Alerts.js';
export {AlertHistoryEntry} from './AlertHistoryEntries.js';

export class Health {
  alerts: AlertResource;

  constructor(private readonly stripe: Stripe) {
    this.alerts = new AlertResource(stripe);
  }
}

export declare namespace Health {
  export import AlertListParams = V2Namespace0.Core.Health.AlertListParams;
  export import AlertRetrieveParams = V2Namespace0.Core.Health.AlertRetrieveParams;
  export {Alert, AlertResource};
  export {AlertHistoryEntry};
}
