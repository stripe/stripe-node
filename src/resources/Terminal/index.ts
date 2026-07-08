// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Terminal as TerminalNamespace0,
  Configuration,
  DeletedConfiguration,
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
  DeletedLocation,
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
  DeletedReader,
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
  export import ConfigurationDeleteParams = TerminalNamespace0.ConfigurationDeleteParams;
  export import ConfigurationRetrieveParams = TerminalNamespace0.ConfigurationRetrieveParams;
  export import ConfigurationUpdateParams = TerminalNamespace0.ConfigurationUpdateParams;
  export import ConfigurationListParams = TerminalNamespace0.ConfigurationListParams;
  export import ConfigurationCreateParams = TerminalNamespace0.ConfigurationCreateParams;
  export {DeletedConfiguration};
  export {Configuration, ConfigurationResource};
  export import ConnectionTokenCreateParams = TerminalNamespace1.ConnectionTokenCreateParams;
  export {ConnectionToken, ConnectionTokenResource};
  export import LocationDeleteParams = TerminalNamespace2.LocationDeleteParams;
  export import LocationRetrieveParams = TerminalNamespace2.LocationRetrieveParams;
  export import LocationUpdateParams = TerminalNamespace2.LocationUpdateParams;
  export import LocationListParams = TerminalNamespace2.LocationListParams;
  export import LocationCreateParams = TerminalNamespace2.LocationCreateParams;
  export {DeletedLocation};
  export {Location, LocationResource};
  export import OnboardingLinkCreateParams = TerminalNamespace3.OnboardingLinkCreateParams;
  export {OnboardingLink, OnboardingLinkResource};
  export import ReaderDeleteParams = TerminalNamespace4.ReaderDeleteParams;
  export import ReaderRetrieveParams = TerminalNamespace4.ReaderRetrieveParams;
  export import ReaderUpdateParams = TerminalNamespace4.ReaderUpdateParams;
  export import ReaderListParams = TerminalNamespace4.ReaderListParams;
  export import ReaderCreateParams = TerminalNamespace4.ReaderCreateParams;
  export import ReaderActivateGiftCardParams = TerminalNamespace4.ReaderActivateGiftCardParams;
  export import ReaderCancelActionParams = TerminalNamespace4.ReaderCancelActionParams;
  export import ReaderCashoutGiftCardParams = TerminalNamespace4.ReaderCashoutGiftCardParams;
  export import ReaderCheckGiftCardBalanceParams = TerminalNamespace4.ReaderCheckGiftCardBalanceParams;
  export import ReaderCollectInputsParams = TerminalNamespace4.ReaderCollectInputsParams;
  export import ReaderCollectPaymentMethodParams = TerminalNamespace4.ReaderCollectPaymentMethodParams;
  export import ReaderConfirmPaymentIntentParams = TerminalNamespace4.ReaderConfirmPaymentIntentParams;
  export import ReaderProcessPaymentIntentParams = TerminalNamespace4.ReaderProcessPaymentIntentParams;
  export import ReaderProcessSetupIntentParams = TerminalNamespace4.ReaderProcessSetupIntentParams;
  export import ReaderRefundPaymentParams = TerminalNamespace4.ReaderRefundPaymentParams;
  export import ReaderReloadGiftCardParams = TerminalNamespace4.ReaderReloadGiftCardParams;
  export import ReaderSetReaderDisplayParams = TerminalNamespace4.ReaderSetReaderDisplayParams;
  export {DeletedReader};
  export {Reader, ReaderResource};
  export import ReaderCollectedDataRetrieveParams = TerminalNamespace5.ReaderCollectedDataRetrieveParams;
  export {ReaderCollectedData, ReaderCollectedDatumResource};
}
