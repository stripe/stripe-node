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
  CustomPricingUnit,
  CustomPricingUnitResource,
} from './CustomPricingUnits.js';
import {V2 as V2Namespace4, Intent, IntentResource} from './Intents.js';
import {
  V2 as V2Namespace5,
  LicenseFee,
  LicenseFeeResource,
} from './LicenseFees.js';
import {
  V2 as V2Namespace6,
  LicensedItem,
  LicensedItemResource,
} from './LicensedItems.js';
import {
  V2 as V2Namespace7,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  V2 as V2Namespace8,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  V2 as V2Namespace9,
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {
  V2 as V2Namespace10,
  MeterEventStreamResource,
} from './MeterEventStream.js';
import {
  V2 as V2Namespace11,
  MeteredItem,
  MeteredItemResource,
} from './MeteredItems.js';
import {
  V2 as V2Namespace12,
  OneTimeItem,
  OneTimeItemResource,
} from './OneTimeItems.js';
import {
  V2 as V2Namespace13,
  PricingPlan,
  PricingPlanResource,
} from './PricingPlans.js';
import {
  V2 as V2Namespace14,
  PricingPlanSubscription,
  PricingPlanSubscriptionResource,
} from './PricingPlanSubscriptions.js';
import {V2 as V2Namespace15, Profile, ProfileResource} from './Profiles.js';
import {V2 as V2Namespace16, RateCard, RateCardResource} from './RateCards.js';
import {
  V2 as V2Namespace17,
  RateCardSubscription,
  RateCardSubscriptionResource,
} from './RateCardSubscriptions.js';
import {
  V2 as V2Namespace18,
  ServiceAction,
  ServiceActionResource,
} from './ServiceActions.js';
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
  export type BillSettingListParams = V2Namespace0.Billing.BillSettingListParams;
  export type BillSettingCreateParams = V2Namespace0.Billing.BillSettingCreateParams;
  export type BillSettingRetrieveParams = V2Namespace0.Billing.BillSettingRetrieveParams;
  export type BillSettingUpdateParams = V2Namespace0.Billing.BillSettingUpdateParams;
  export {BillSetting};
  export type CadenceListParams = V2Namespace1.Billing.CadenceListParams;
  export type CadenceCreateParams = V2Namespace1.Billing.CadenceCreateParams;
  export type CadenceRetrieveParams = V2Namespace1.Billing.CadenceRetrieveParams;
  export type CadenceUpdateParams = V2Namespace1.Billing.CadenceUpdateParams;
  export type CadenceCancelParams = V2Namespace1.Billing.CadenceCancelParams;
  export {Cadence};
  export type CollectionSettingListParams = V2Namespace2.Billing.CollectionSettingListParams;
  export type CollectionSettingCreateParams = V2Namespace2.Billing.CollectionSettingCreateParams;
  export type CollectionSettingRetrieveParams = V2Namespace2.Billing.CollectionSettingRetrieveParams;
  export type CollectionSettingUpdateParams = V2Namespace2.Billing.CollectionSettingUpdateParams;
  export {CollectionSetting};
  export type CustomPricingUnitListParams = V2Namespace3.Billing.CustomPricingUnitListParams;
  export type CustomPricingUnitCreateParams = V2Namespace3.Billing.CustomPricingUnitCreateParams;
  export type CustomPricingUnitRetrieveParams = V2Namespace3.Billing.CustomPricingUnitRetrieveParams;
  export type CustomPricingUnitUpdateParams = V2Namespace3.Billing.CustomPricingUnitUpdateParams;
  export {CustomPricingUnit};
  export type IntentListParams = V2Namespace4.Billing.IntentListParams;
  export type IntentCreateParams = V2Namespace4.Billing.IntentCreateParams;
  export type IntentRetrieveParams = V2Namespace4.Billing.IntentRetrieveParams;
  export type IntentCancelParams = V2Namespace4.Billing.IntentCancelParams;
  export type IntentCommitParams = V2Namespace4.Billing.IntentCommitParams;
  export type IntentReleaseReservationParams = V2Namespace4.Billing.IntentReleaseReservationParams;
  export type IntentReserveParams = V2Namespace4.Billing.IntentReserveParams;
  export {Intent};
  export type LicenseFeeListParams = V2Namespace5.Billing.LicenseFeeListParams;
  export type LicenseFeeCreateParams = V2Namespace5.Billing.LicenseFeeCreateParams;
  export type LicenseFeeRetrieveParams = V2Namespace5.Billing.LicenseFeeRetrieveParams;
  export type LicenseFeeUpdateParams = V2Namespace5.Billing.LicenseFeeUpdateParams;
  export {LicenseFee};
  export type LicensedItemListParams = V2Namespace6.Billing.LicensedItemListParams;
  export type LicensedItemCreateParams = V2Namespace6.Billing.LicensedItemCreateParams;
  export type LicensedItemRetrieveParams = V2Namespace6.Billing.LicensedItemRetrieveParams;
  export type LicensedItemUpdateParams = V2Namespace6.Billing.LicensedItemUpdateParams;
  export {LicensedItem};
  export type MeterEventCreateParams = V2Namespace7.Billing.MeterEventCreateParams;
  export {MeterEvent};
  export type MeterEventAdjustmentCreateParams = V2Namespace8.Billing.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment};
  export type MeterEventSessionCreateParams = V2Namespace9.Billing.MeterEventSessionCreateParams;
  export {MeterEventSession};
  export type MeteredItemListParams = V2Namespace11.Billing.MeteredItemListParams;
  export type MeteredItemCreateParams = V2Namespace11.Billing.MeteredItemCreateParams;
  export type MeteredItemRetrieveParams = V2Namespace11.Billing.MeteredItemRetrieveParams;
  export type MeteredItemUpdateParams = V2Namespace11.Billing.MeteredItemUpdateParams;
  export {MeteredItem};
  export type OneTimeItemListParams = V2Namespace12.Billing.OneTimeItemListParams;
  export type OneTimeItemCreateParams = V2Namespace12.Billing.OneTimeItemCreateParams;
  export type OneTimeItemRetrieveParams = V2Namespace12.Billing.OneTimeItemRetrieveParams;
  export type OneTimeItemUpdateParams = V2Namespace12.Billing.OneTimeItemUpdateParams;
  export {OneTimeItem};
  export type PricingPlanListParams = V2Namespace13.Billing.PricingPlanListParams;
  export type PricingPlanCreateParams = V2Namespace13.Billing.PricingPlanCreateParams;
  export type PricingPlanRetrieveParams = V2Namespace13.Billing.PricingPlanRetrieveParams;
  export type PricingPlanUpdateParams = V2Namespace13.Billing.PricingPlanUpdateParams;
  export {PricingPlan};
  export type PricingPlanSubscriptionListParams = V2Namespace14.Billing.PricingPlanSubscriptionListParams;
  export type PricingPlanSubscriptionRetrieveParams = V2Namespace14.Billing.PricingPlanSubscriptionRetrieveParams;
  export type PricingPlanSubscriptionUpdateParams = V2Namespace14.Billing.PricingPlanSubscriptionUpdateParams;
  export type PricingPlanSubscriptionRemoveDiscountsParams = V2Namespace14.Billing.PricingPlanSubscriptionRemoveDiscountsParams;
  export {PricingPlanSubscription};
  export type ProfileListParams = V2Namespace15.Billing.ProfileListParams;
  export type ProfileCreateParams = V2Namespace15.Billing.ProfileCreateParams;
  export type ProfileRetrieveParams = V2Namespace15.Billing.ProfileRetrieveParams;
  export type ProfileUpdateParams = V2Namespace15.Billing.ProfileUpdateParams;
  export {Profile};
  export type RateCardListParams = V2Namespace16.Billing.RateCardListParams;
  export type RateCardCreateParams = V2Namespace16.Billing.RateCardCreateParams;
  export type RateCardRetrieveParams = V2Namespace16.Billing.RateCardRetrieveParams;
  export type RateCardUpdateParams = V2Namespace16.Billing.RateCardUpdateParams;
  export type RateCardModifyRatesParams = V2Namespace16.Billing.RateCardModifyRatesParams;
  export {RateCard};
  export type RateCardSubscriptionListParams = V2Namespace17.Billing.RateCardSubscriptionListParams;
  export type RateCardSubscriptionCreateParams = V2Namespace17.Billing.RateCardSubscriptionCreateParams;
  export type RateCardSubscriptionRetrieveParams = V2Namespace17.Billing.RateCardSubscriptionRetrieveParams;
  export type RateCardSubscriptionUpdateParams = V2Namespace17.Billing.RateCardSubscriptionUpdateParams;
  export type RateCardSubscriptionCancelParams = V2Namespace17.Billing.RateCardSubscriptionCancelParams;
  export {RateCardSubscription};
  export type ServiceActionCreateParams = V2Namespace18.Billing.ServiceActionCreateParams;
  export type ServiceActionRetrieveParams = V2Namespace18.Billing.ServiceActionRetrieveParams;
  export type ServiceActionUpdateParams = V2Namespace18.Billing.ServiceActionUpdateParams;
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
