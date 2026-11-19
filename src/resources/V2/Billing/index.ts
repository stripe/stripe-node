// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {
  V2 as V2Namespace0,
  BillSetting,
  BillSettingResource,
} from './BillSettings.js';
import {
  V2 as V2Namespace1,
  CollectionSetting,
  CollectionSettingResource,
} from './CollectionSettings.js';
import {
  V2 as V2Namespace2,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  V2 as V2Namespace3,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  V2 as V2Namespace4,
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {
  V2 as V2Namespace5,
  MeterEventStreamResource,
} from './MeterEventStream.js';
import {V2 as V2Namespace6, Profile, ProfileResource} from './Profiles.js';
import {BillSettingVersion} from './BillSettingVersions.js';
import {CollectionSettingVersion} from './CollectionSettingVersions.js';

export {BillSetting} from './BillSettings.js';
export {CollectionSetting} from './CollectionSettings.js';
export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {MeterEventSession} from './MeterEventSession.js';
export {Profile} from './Profiles.js';
export {BillSettingVersion} from './BillSettingVersions.js';
export {CollectionSettingVersion} from './CollectionSettingVersions.js';

export class Billing {
  billSettings: BillSettingResource;
  collectionSettings: CollectionSettingResource;
  meterEvents: MeterEventResource;
  meterEventAdjustments: MeterEventAdjustmentResource;
  meterEventSession: MeterEventSessionResource;
  meterEventStream: MeterEventStreamResource;
  profiles: ProfileResource;

  constructor(private readonly stripe: Stripe) {
    this.billSettings = new BillSettingResource(stripe);
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
  export import CollectionSettingListParams = V2Namespace1.Billing.CollectionSettingListParams;
  export import CollectionSettingCreateParams = V2Namespace1.Billing.CollectionSettingCreateParams;
  export import CollectionSettingRetrieveParams = V2Namespace1.Billing.CollectionSettingRetrieveParams;
  export import CollectionSettingUpdateParams = V2Namespace1.Billing.CollectionSettingUpdateParams;
  export {CollectionSetting, CollectionSettingResource};
  export import MeterEventCreateParams = V2Namespace2.Billing.MeterEventCreateParams;
  export {MeterEvent, MeterEventResource};
  export import MeterEventAdjustmentCreateParams = V2Namespace3.Billing.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment, MeterEventAdjustmentResource};
  export import MeterEventSessionCreateParams = V2Namespace4.Billing.MeterEventSessionCreateParams;
  export {MeterEventSession, MeterEventSessionResource};
  export import ProfileListParams = V2Namespace6.Billing.ProfileListParams;
  export import ProfileCreateParams = V2Namespace6.Billing.ProfileCreateParams;
  export import ProfileRetrieveParams = V2Namespace6.Billing.ProfileRetrieveParams;
  export import ProfileUpdateParams = V2Namespace6.Billing.ProfileUpdateParams;
  export {Profile, ProfileResource};
  export {BillSettingVersion};
  export {CollectionSettingVersion};
}
