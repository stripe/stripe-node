// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Terminal as TerminalNamespace0,
  Configuration,
  ConfigurationResource,
} from './Configurations.js';
import {
  Terminal as TerminalNamespace1,
  ConnectionToken,
  ConnectionTokenResource,
} from './ConnectionTokens.js';
import {
  Terminal as TerminalNamespace2,
  Location,
  LocationResource,
} from './Locations.js';
import {
  Terminal as TerminalNamespace3,
  OnboardingLink,
  OnboardingLinkResource,
} from './OnboardingLinks.js';
import {
  Terminal as TerminalNamespace4,
  Reader,
  ReaderResource,
} from './Readers.js';
import {
  Terminal as TerminalNamespace5,
  ReaderCollectedData,
  ReaderCollectedDatumResource,
} from './ReaderCollectedData.js';

export {Configuration} from './Configurations.js';
export {ConnectionToken} from './ConnectionTokens.js';
export {Location} from './Locations.js';
export {OnboardingLink} from './OnboardingLinks.js';
export {Reader} from './Readers.js';
export {ReaderCollectedData} from './ReaderCollectedData.js';

export class Terminal {
  configurations: ConfigurationResource;
  connectionTokens: ConnectionTokenResource;
  locations: LocationResource;
  onboardingLinks: OnboardingLinkResource;
  readers: ReaderResource;
  readerCollectedData: ReaderCollectedDatumResource;

  constructor(private readonly stripe: Stripe) {
    this.configurations = new ConfigurationResource(stripe);
    this.connectionTokens = new ConnectionTokenResource(stripe);
    this.locations = new LocationResource(stripe);
    this.onboardingLinks = new OnboardingLinkResource(stripe);
    this.readers = new ReaderResource(stripe);
    this.readerCollectedData = new ReaderCollectedDatumResource(stripe);
  }
}

export declare namespace Terminal {
  export type ConfigurationDeleteParams = TerminalNamespace0.ConfigurationDeleteParams;
  export type ConfigurationRetrieveParams = TerminalNamespace0.ConfigurationRetrieveParams;
  export type ConfigurationUpdateParams = TerminalNamespace0.ConfigurationUpdateParams;
  export type ConfigurationListParams = TerminalNamespace0.ConfigurationListParams;
  export type ConfigurationCreateParams = TerminalNamespace0.ConfigurationCreateParams;
  export {Configuration};
  export type ConnectionTokenCreateParams = TerminalNamespace1.ConnectionTokenCreateParams;
  export {ConnectionToken};
  export type LocationDeleteParams = TerminalNamespace2.LocationDeleteParams;
  export type LocationRetrieveParams = TerminalNamespace2.LocationRetrieveParams;
  export type LocationUpdateParams = TerminalNamespace2.LocationUpdateParams;
  export type LocationListParams = TerminalNamespace2.LocationListParams;
  export type LocationCreateParams = TerminalNamespace2.LocationCreateParams;
  export {Location};
  export type OnboardingLinkCreateParams = TerminalNamespace3.OnboardingLinkCreateParams;
  export {OnboardingLink};
  export type ReaderDeleteParams = TerminalNamespace4.ReaderDeleteParams;
  export type ReaderRetrieveParams = TerminalNamespace4.ReaderRetrieveParams;
  export type ReaderUpdateParams = TerminalNamespace4.ReaderUpdateParams;
  export type ReaderListParams = TerminalNamespace4.ReaderListParams;
  export type ReaderCreateParams = TerminalNamespace4.ReaderCreateParams;
  export type ReaderCancelActionParams = TerminalNamespace4.ReaderCancelActionParams;
  export type ReaderCollectInputsParams = TerminalNamespace4.ReaderCollectInputsParams;
  export type ReaderCollectPaymentMethodParams = TerminalNamespace4.ReaderCollectPaymentMethodParams;
  export type ReaderConfirmPaymentIntentParams = TerminalNamespace4.ReaderConfirmPaymentIntentParams;
  export type ReaderProcessPaymentIntentParams = TerminalNamespace4.ReaderProcessPaymentIntentParams;
  export type ReaderProcessSetupIntentParams = TerminalNamespace4.ReaderProcessSetupIntentParams;
  export type ReaderRefundPaymentParams = TerminalNamespace4.ReaderRefundPaymentParams;
  export type ReaderSetReaderDisplayParams = TerminalNamespace4.ReaderSetReaderDisplayParams;
  export {Reader};
  export type ReaderCollectedDataRetrieveParams = TerminalNamespace5.ReaderCollectedDataRetrieveParams;
  export {ReaderCollectedData};
}
