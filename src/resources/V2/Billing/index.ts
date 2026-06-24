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
import {V2 as V2Namespace3, Contract, ContractResource} from './Contracts.js';
import {
  V2 as V2Namespace4,
  CustomPricingUnit,
  CustomPricingUnitResource,
} from './CustomPricingUnits.js';
import {V2 as V2Namespace5, Intent, IntentResource} from './Intents.js';
import {
  V2 as V2Namespace6,
  LicenseFee,
  LicenseFeeResource,
} from './LicenseFees.js';
import {
  V2 as V2Namespace7,
  LicensedItem,
  LicensedItemResource,
} from './LicensedItems.js';
import {
  V2 as V2Namespace8,
  MeterEvent,
  MeterEventResource,
} from './MeterEvents.js';
import {
  V2 as V2Namespace9,
  MeterEventAdjustment,
  MeterEventAdjustmentResource,
} from './MeterEventAdjustments.js';
import {
  V2 as V2Namespace10,
  MeterEventSession,
  MeterEventSessionResource,
} from './MeterEventSession.js';
import {
  V2 as V2Namespace11,
  MeterEventStreamResource,
} from './MeterEventStream.js';
import {
  V2 as V2Namespace12,
  MeteredItem,
  MeteredItemResource,
} from './MeteredItems.js';
import {
  V2 as V2Namespace13,
  OneTimeItem,
  OneTimeItemResource,
} from './OneTimeItems.js';
import {
  V2 as V2Namespace14,
  PricingPlan,
  PricingPlanResource,
} from './PricingPlans.js';
import {
  V2 as V2Namespace15,
  PricingPlanSubscription,
  PricingPlanSubscriptionResource,
} from './PricingPlanSubscriptions.js';
import {V2 as V2Namespace16, Profile, ProfileResource} from './Profiles.js';
import {V2 as V2Namespace17, RateCard, RateCardResource} from './RateCards.js';
import {
  V2 as V2Namespace18,
  RateCardSubscription,
  RateCardSubscriptionResource,
} from './RateCardSubscriptions.js';
import {
  V2 as V2Namespace19,
  ServiceAction,
  ServiceActionResource,
} from './ServiceActions.js';
import {ContractPricingLineQuantityChange} from './ContractPricingLineQuantityChanges.js';
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
export {Contract} from './Contracts.js';
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
export {ContractPricingLineQuantityChange} from './ContractPricingLineQuantityChanges.js';
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
  contracts: ContractResource;
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
    this.contracts = new ContractResource(stripe);
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
  export import ContractListParams = V2Namespace3.Billing.ContractListParams;
  export import ContractCreateParams = V2Namespace3.Billing.ContractCreateParams;
  export import ContractDeleteParams = V2Namespace3.Billing.ContractDeleteParams;
  export import ContractRetrieveParams = V2Namespace3.Billing.ContractRetrieveParams;
  export import ContractUpdateParams = V2Namespace3.Billing.ContractUpdateParams;
  export import ContractActivateParams = V2Namespace3.Billing.ContractActivateParams;
  export import ContractCancelParams = V2Namespace3.Billing.ContractCancelParams;
  export {Contract, ContractResource};
  export import CustomPricingUnitListParams = V2Namespace4.Billing.CustomPricingUnitListParams;
  export import CustomPricingUnitCreateParams = V2Namespace4.Billing.CustomPricingUnitCreateParams;
  export import CustomPricingUnitRetrieveParams = V2Namespace4.Billing.CustomPricingUnitRetrieveParams;
  export import CustomPricingUnitUpdateParams = V2Namespace4.Billing.CustomPricingUnitUpdateParams;
  export {CustomPricingUnit, CustomPricingUnitResource};
  export import IntentListParams = V2Namespace5.Billing.IntentListParams;
  export import IntentCreateParams = V2Namespace5.Billing.IntentCreateParams;
  export import IntentRetrieveParams = V2Namespace5.Billing.IntentRetrieveParams;
  export import IntentCancelParams = V2Namespace5.Billing.IntentCancelParams;
  export import IntentCommitParams = V2Namespace5.Billing.IntentCommitParams;
  export import IntentReleaseReservationParams = V2Namespace5.Billing.IntentReleaseReservationParams;
  export import IntentReserveParams = V2Namespace5.Billing.IntentReserveParams;
  export {Intent, IntentResource};
  export import LicenseFeeListParams = V2Namespace6.Billing.LicenseFeeListParams;
  export import LicenseFeeCreateParams = V2Namespace6.Billing.LicenseFeeCreateParams;
  export import LicenseFeeRetrieveParams = V2Namespace6.Billing.LicenseFeeRetrieveParams;
  export import LicenseFeeUpdateParams = V2Namespace6.Billing.LicenseFeeUpdateParams;
  export {LicenseFee, LicenseFeeResource};
  export import LicensedItemListParams = V2Namespace7.Billing.LicensedItemListParams;
  export import LicensedItemCreateParams = V2Namespace7.Billing.LicensedItemCreateParams;
  export import LicensedItemRetrieveParams = V2Namespace7.Billing.LicensedItemRetrieveParams;
  export import LicensedItemUpdateParams = V2Namespace7.Billing.LicensedItemUpdateParams;
  export {LicensedItem, LicensedItemResource};
  export import MeterEventCreateParams = V2Namespace8.Billing.MeterEventCreateParams;
  export {MeterEvent, MeterEventResource};
  export import MeterEventAdjustmentCreateParams = V2Namespace9.Billing.MeterEventAdjustmentCreateParams;
  export {MeterEventAdjustment, MeterEventAdjustmentResource};
  export import MeterEventSessionCreateParams = V2Namespace10.Billing.MeterEventSessionCreateParams;
  export {MeterEventSession, MeterEventSessionResource};
  export import MeteredItemListParams = V2Namespace12.Billing.MeteredItemListParams;
  export import MeteredItemCreateParams = V2Namespace12.Billing.MeteredItemCreateParams;
  export import MeteredItemRetrieveParams = V2Namespace12.Billing.MeteredItemRetrieveParams;
  export import MeteredItemUpdateParams = V2Namespace12.Billing.MeteredItemUpdateParams;
  export {MeteredItem, MeteredItemResource};
  export import OneTimeItemListParams = V2Namespace13.Billing.OneTimeItemListParams;
  export import OneTimeItemCreateParams = V2Namespace13.Billing.OneTimeItemCreateParams;
  export import OneTimeItemRetrieveParams = V2Namespace13.Billing.OneTimeItemRetrieveParams;
  export import OneTimeItemUpdateParams = V2Namespace13.Billing.OneTimeItemUpdateParams;
  export {OneTimeItem, OneTimeItemResource};
  export import PricingPlanListParams = V2Namespace14.Billing.PricingPlanListParams;
  export import PricingPlanCreateParams = V2Namespace14.Billing.PricingPlanCreateParams;
  export import PricingPlanRetrieveParams = V2Namespace14.Billing.PricingPlanRetrieveParams;
  export import PricingPlanUpdateParams = V2Namespace14.Billing.PricingPlanUpdateParams;
  export {PricingPlan, PricingPlanResource};
  export import PricingPlanSubscriptionListParams = V2Namespace15.Billing.PricingPlanSubscriptionListParams;
  export import PricingPlanSubscriptionRetrieveParams = V2Namespace15.Billing.PricingPlanSubscriptionRetrieveParams;
  export import PricingPlanSubscriptionUpdateParams = V2Namespace15.Billing.PricingPlanSubscriptionUpdateParams;
  export import PricingPlanSubscriptionRemoveDiscountsParams = V2Namespace15.Billing.PricingPlanSubscriptionRemoveDiscountsParams;
  export {PricingPlanSubscription, PricingPlanSubscriptionResource};
  export import ProfileListParams = V2Namespace16.Billing.ProfileListParams;
  export import ProfileCreateParams = V2Namespace16.Billing.ProfileCreateParams;
  export import ProfileRetrieveParams = V2Namespace16.Billing.ProfileRetrieveParams;
  export import ProfileUpdateParams = V2Namespace16.Billing.ProfileUpdateParams;
  export {Profile, ProfileResource};
  export import RateCardListParams = V2Namespace17.Billing.RateCardListParams;
  export import RateCardCreateParams = V2Namespace17.Billing.RateCardCreateParams;
  export import RateCardRetrieveParams = V2Namespace17.Billing.RateCardRetrieveParams;
  export import RateCardUpdateParams = V2Namespace17.Billing.RateCardUpdateParams;
  export import RateCardModifyRatesParams = V2Namespace17.Billing.RateCardModifyRatesParams;
  export {RateCard, RateCardResource};
  export import RateCardSubscriptionListParams = V2Namespace18.Billing.RateCardSubscriptionListParams;
  export import RateCardSubscriptionCreateParams = V2Namespace18.Billing.RateCardSubscriptionCreateParams;
  export import RateCardSubscriptionRetrieveParams = V2Namespace18.Billing.RateCardSubscriptionRetrieveParams;
  export import RateCardSubscriptionUpdateParams = V2Namespace18.Billing.RateCardSubscriptionUpdateParams;
  export import RateCardSubscriptionCancelParams = V2Namespace18.Billing.RateCardSubscriptionCancelParams;
  export {RateCardSubscription, RateCardSubscriptionResource};
  export import ServiceActionCreateParams = V2Namespace19.Billing.ServiceActionCreateParams;
  export import ServiceActionRetrieveParams = V2Namespace19.Billing.ServiceActionRetrieveParams;
  export import ServiceActionUpdateParams = V2Namespace19.Billing.ServiceActionUpdateParams;
  export {ServiceAction, ServiceActionResource};
  export {ContractPricingLineQuantityChange};
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
