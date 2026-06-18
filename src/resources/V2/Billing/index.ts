// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  BillSetting,
  BillSettingResource,
} from './BillSettings.js';
import {V2 as V2Namespace1, Cadence, CadenceResource} from './Cadences.js';
import {
  V2 as V2Namespace2,
  CollectionSetting,
  CollectionSettingResource,
} from './CollectionSettings.js';
import {
  V2 as V2Namespace3,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  V2 as V2Namespace4,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  V2 as V2Namespace5,
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {
  V2 as V2Namespace6,
  MeterEventStreamResource,
} from './MeterEventStream.js';
import {V2 as V2Namespace7, Profile, ProfileResource} from './Profiles.js';
import {BillSettingVersion} from './BillSettingVersions.js';
import {CollectionSettingVersion} from './CollectionSettingVersions.js';

export {BillSetting} from './BillSettings.js';
export {Cadence} from './Cadences.js';
export {CollectionSetting} from './CollectionSettings.js';
export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {MeterEventSession} from './MeterEventSession.js';
export {Profile} from './Profiles.js';
export {BillSettingVersion} from './BillSettingVersions.js';
export {CollectionSettingVersion} from './CollectionSettingVersions.js';

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
  export import BillSettingListParams = V2Namespace0.Billing.BillSettingListParams;
  export import BillSettingCreateParams = V2Namespace0.Billing.BillSettingCreateParams;
  export import BillSettingRetrieveParams = V2Namespace0.Billing.BillSettingRetrieveParams;
  export import BillSettingUpdateParams = V2Namespace0.Billing.BillSettingUpdateParams;
  export {BillSetting, BillSettingResource};
  export import CadenceListParams = V2Namespace1.Billing.CadenceListParams;
  export import CadenceCreateParams = V2Namespace1.Billing.CadenceCreateParams;
  export import CadenceRetrieveParams = V2Namespace1.Billing.CadenceRetrieveParams;
  export import CadenceUpdateParams = V2Namespace1.Billing.CadenceUpdateParams;
  export import CadenceCancelParams = V2Namespace1.Billing.CadenceCancelParams;
  export {Cadence, CadenceResource};
  export import CollectionSettingListParams = V2Namespace2.Billing.CollectionSettingListParams;
  export import CollectionSettingCreateParams = V2Namespace2.Billing.CollectionSettingCreateParams;
  export import CollectionSettingRetrieveParams = V2Namespace2.Billing.CollectionSettingRetrieveParams;
  export import CollectionSettingUpdateParams = V2Namespace2.Billing.CollectionSettingUpdateParams;
  export {CollectionSetting, CollectionSettingResource};
  export import MeterEventCreateParams = V2Namespace3.Billing.MeterEventCreateParams;
  export {MeterEvent, MeterEventResource};
  export import MeterEventAdjustmentCreateParams = V2Namespace4.Billing.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment, MeterEventAdjustmentResource};
  export import MeterEventSessionCreateParams = V2Namespace5.Billing.MeterEventSessionCreateParams;
  export {MeterEventSession, MeterEventSessionResource};
  export import ProfileListParams = V2Namespace7.Billing.ProfileListParams;
  export import ProfileCreateParams = V2Namespace7.Billing.ProfileCreateParams;
  export import ProfileRetrieveParams = V2Namespace7.Billing.ProfileRetrieveParams;
  export import ProfileUpdateParams = V2Namespace7.Billing.ProfileUpdateParams;
  export {Profile, ProfileResource};
  export {BillSettingVersion};
  export {CollectionSettingVersion};
}
