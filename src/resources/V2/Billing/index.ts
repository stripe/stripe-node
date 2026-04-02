// File generated from our OpenAPI spec

import {Stripe} from '../../../stripe.core.js';
import {BillSetting, BillSettingResource} from './BillSettings.js';
import {Cadence, CadenceResource} from './Cadences.js';
import {
  CollectionSetting,
  CollectionSettingResource,
} from './CollectionSettings.js';
import {
  CustomPricingUnit,
  CustomPricingUnitResource,
} from './CustomPricingUnits.js';
import {Intent, IntentResource} from './Intents.js';
import {LicenseFee, LicenseFeeResource} from './LicenseFees.js';
import {LicensedItem, LicensedItemResource} from './LicensedItems.js';
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
import {MeteredItem, MeteredItemResource} from './MeteredItems.js';
import {OneTimeItem, OneTimeItemResource} from './OneTimeItems.js';
import {PricingPlan, PricingPlanResource} from './PricingPlans.js';
import {
  PricingPlanSubscription,
  PricingPlanSubscriptionResource,
} from './PricingPlanSubscriptions.js';
import {Profile, ProfileResource} from './Profiles.js';
import {RateCard, RateCardResource} from './RateCards.js';
import {
  RateCardSubscription,
  RateCardSubscriptionResource,
} from './RateCardSubscriptions.js';
import {ServiceAction, ServiceActionResource} from './ServiceActions.js';
import {BillSettingVersion} from './BillSettingVersions.js';
import {CadenceSpendModifier} from './CadenceSpendModifiers.js';
import {CollectionSettingVersion} from './CollectionSettingVersions.js';
import {IntentAction} from './IntentActions.js';
import {LicenseFeeVersion} from './LicenseFeeVersions.js';
import {PricingPlanComponent} from './PricingPlanComponents.js';
import {PricingPlanVersion} from './PricingPlanVersions.js';
import {RateCardCustomPricingUnitOverageRate} from './RateCardCustomPricingUnitOverageRates.js';
import {RateCardRate} from './RateCardRates.js';
import {RateCardVersion} from './RateCardVersions.js';

export {BillSetting} from './BillSettings.js';
export {Cadence} from './Cadences.js';
export {CollectionSetting} from './CollectionSettings.js';
export {CustomPricingUnit} from './CustomPricingUnits.js';
export {Intent} from './Intents.js';
export {LicenseFee} from './LicenseFees.js';
export {LicensedItem} from './LicensedItems.js';
export {MeterEvent} from './MeterEvents.js';
export {MeterEventAdjustment} from './MeterEventAdjustments.js';
export {MeterEventSession} from './MeterEventSession.js';
export {MeteredItem} from './MeteredItems.js';
export {OneTimeItem} from './OneTimeItems.js';
export {PricingPlan} from './PricingPlans.js';
export {PricingPlanSubscription} from './PricingPlanSubscriptions.js';
export {Profile} from './Profiles.js';
export {RateCard} from './RateCards.js';
export {RateCardSubscription} from './RateCardSubscriptions.js';
export {ServiceAction} from './ServiceActions.js';
export {BillSettingVersion} from './BillSettingVersions.js';
export {CadenceSpendModifier} from './CadenceSpendModifiers.js';
export {CollectionSettingVersion} from './CollectionSettingVersions.js';
export {IntentAction} from './IntentActions.js';
export {LicenseFeeVersion} from './LicenseFeeVersions.js';
export {PricingPlanComponent} from './PricingPlanComponents.js';
export {PricingPlanVersion} from './PricingPlanVersions.js';
export {RateCardCustomPricingUnitOverageRate} from './RateCardCustomPricingUnitOverageRates.js';
export {RateCardRate} from './RateCardRates.js';
export {RateCardVersion} from './RateCardVersions.js';

export class Billing {
  billSettings: BillSettingResource;
  cadences: CadenceResource;
  collectionSettings: CollectionSettingResource;
  customPricingUnits: CustomPricingUnitResource;
  intents: IntentResource;
  licenseFees: LicenseFeeResource;
  licensedItems: LicensedItemResource;
  meterEvents: MeterEventResource;
  meterEventAdjustments: MeterEventAdjustmentResource;
  meterEventSession: MeterEventSessionResource;
  meterEventStream: MeterEventStreamResource;
  meteredItems: MeteredItemResource;
  oneTimeItems: OneTimeItemResource;
  pricingPlans: PricingPlanResource;
  pricingPlanSubscriptions: PricingPlanSubscriptionResource;
  profiles: ProfileResource;
  rateCards: RateCardResource;
  rateCardSubscriptions: RateCardSubscriptionResource;
  serviceActions: ServiceActionResource;

  constructor(private readonly stripe: Stripe) {
    this.billSettings = new BillSettingResource(stripe);
    this.cadences = new CadenceResource(stripe);
    this.collectionSettings = new CollectionSettingResource(stripe);
    this.customPricingUnits = new CustomPricingUnitResource(stripe);
    this.intents = new IntentResource(stripe);
    this.licenseFees = new LicenseFeeResource(stripe);
    this.licensedItems = new LicensedItemResource(stripe);
    this.meterEvents = new MeterEventResource(stripe);
    this.meterEventAdjustments = new MeterEventAdjustmentResource(stripe);
    this.meterEventSession = new MeterEventSessionResource(stripe);
    this.meterEventStream = new MeterEventStreamResource(stripe);
    this.meteredItems = new MeteredItemResource(stripe);
    this.oneTimeItems = new OneTimeItemResource(stripe);
    this.pricingPlans = new PricingPlanResource(stripe);
    this.pricingPlanSubscriptions = new PricingPlanSubscriptionResource(stripe);
    this.profiles = new ProfileResource(stripe);
    this.rateCards = new RateCardResource(stripe);
    this.rateCardSubscriptions = new RateCardSubscriptionResource(stripe);
    this.serviceActions = new ServiceActionResource(stripe);
  }
}

export declare namespace Billing {
  export {BillSetting};
  export {Cadence};
  export {CollectionSetting};
  export {CustomPricingUnit};
  export {Intent};
  export {LicenseFee};
  export {LicensedItem};
  export {MeterEvent};
  export {MeterEventAdjustment};
  export {MeterEventSession};
  export {MeteredItem};
  export {OneTimeItem};
  export {PricingPlan};
  export {PricingPlanSubscription};
  export {Profile};
  export {RateCard};
  export {RateCardSubscription};
  export {ServiceAction};
  export {BillSettingVersion};
  export {CadenceSpendModifier};
  export {CollectionSettingVersion};
  export {IntentAction};
  export {LicenseFeeVersion};
  export {PricingPlanComponent};
  export {PricingPlanVersion};
  export {RateCardCustomPricingUnitOverageRate};
  export {RateCardRate};
  export {RateCardVersion};
}
