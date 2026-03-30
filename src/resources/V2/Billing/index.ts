// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {BillSetting, BillSettingResource} from './BillSettings.js';
import {Cadence, CadenceResource} from './Cadences.js';
import {
  CollectionSetting,
  CollectionSettingResource,
} from './CollectionSettings.js';
import {MeterEvent, MeterEventResource} from './MeterEvents.js';
import {
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {MeterEventStreamResource} from './MeterEventStream.js';
import {Profile, ProfileResource} from './Profiles.js';
import {BillSettingVersion} from './BillSettingVersions.js';
import {CollectionSettingVersion} from './CollectionSettingVersions.js';

export {BillSetting} from './BillSettings.js';
export {Cadence} from './Cadences.js';
export {CollectionSetting} from './CollectionSettings.js';
export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {MeterEventSession} from './MeterEventSession.js';
export {Profile} from './Profiles.js';

export class Billing {
  billSettings: BillSettingResource;
  cadences: CadenceResource;
  collectionSettings: CollectionSettingResource;
  meterEvents: MeterEventResource;
  meterEventAdjustments: MeterEventAdjustmentResource;
  meterEventSession: MeterEventSessionResource;
  meterEventStream: MeterEventStreamResource;
  profiles: ProfileResource;

  constructor(private readonly stripe: Stripe) {
    this.billSettings = new BillSettingResource(stripe);
    this.cadences = new CadenceResource(stripe);
    this.collectionSettings = new CollectionSettingResource(stripe);
    this.meterEvents = new MeterEventResource(stripe);
    this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
    this.meterEventSession = new MeterEventSessionResource(stripe);
    this.meterEventStream = new MeterEventStreamResource(stripe);
    this.profiles = new ProfileResource(stripe);
  }
}

export declare namespace Billing {
  export {BillSetting};
  export {Cadence};
  export {CollectionSetting};
  export {MeterEvent};
  export {MeterEventAdjustment};
  export {MeterEventSession};
  export {Profile};
  export {BillSettingVersion};
  export {CollectionSettingVersion};
}
