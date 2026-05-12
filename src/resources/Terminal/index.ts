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

export {Configuration} from './Configurations.js';
export {ConnectionToken} from './ConnectionTokens.js';
export {Location} from './Locations.js';
export {OnboardingLink} from './OnboardingLinks.js';
export {Reader} from './Readers.js';

export class Terminal {
  configurations: ConfigurationResource;
  connectionTokens: ConnectionTokenResource;
  locations: LocationResource;
  onboardingLinks: OnboardingLinkResource;
  readers: ReaderResource;

  constructor(private readonly stripe: Stripe) {
    this.configurations = new ConfigurationResource(stripe);
    this.connectionTokens = new ConnectionTokenResource(stripe);
    this.locations = new LocationResource(stripe);
    this.onboardingLinks = new OnboardingLinkResource(stripe);
    this.readers = new ReaderResource(stripe);
  }
}

export declare namespace Terminal {
  export import ConfigurationDeleteParams = TerminalNamespace0.ConfigurationDeleteParams;
  export import ConfigurationRetrieveParams = TerminalNamespace0.ConfigurationRetrieveParams;
  export import ConfigurationUpdateParams = TerminalNamespace0.ConfigurationUpdateParams;
  export import ConfigurationListParams = TerminalNamespace0.ConfigurationListParams;
  export import ConfigurationCreateParams = TerminalNamespace0.ConfigurationCreateParams;
  export {Configuration};
  export import ConnectionTokenCreateParams = TerminalNamespace1.ConnectionTokenCreateParams;
  export {ConnectionToken};
  export import LocationDeleteParams = TerminalNamespace2.LocationDeleteParams;
  export import LocationRetrieveParams = TerminalNamespace2.LocationRetrieveParams;
  export import LocationUpdateParams = TerminalNamespace2.LocationUpdateParams;
  export import LocationListParams = TerminalNamespace2.LocationListParams;
  export import LocationCreateParams = TerminalNamespace2.LocationCreateParams;
  export {Location};
  export import OnboardingLinkCreateParams = TerminalNamespace3.OnboardingLinkCreateParams;
  export {OnboardingLink};
  export import ReaderDeleteParams = TerminalNamespace4.ReaderDeleteParams;
  export import ReaderRetrieveParams = TerminalNamespace4.ReaderRetrieveParams;
  export import ReaderUpdateParams = TerminalNamespace4.ReaderUpdateParams;
  export import ReaderListParams = TerminalNamespace4.ReaderListParams;
  export import ReaderCreateParams = TerminalNamespace4.ReaderCreateParams;
  export import ReaderCancelActionParams = TerminalNamespace4.ReaderCancelActionParams;
  export import ReaderCollectInputsParams = TerminalNamespace4.ReaderCollectInputsParams;
  export import ReaderCollectPaymentMethodParams = TerminalNamespace4.ReaderCollectPaymentMethodParams;
  export import ReaderConfirmPaymentIntentParams = TerminalNamespace4.ReaderConfirmPaymentIntentParams;
  export import ReaderProcessPaymentIntentParams = TerminalNamespace4.ReaderProcessPaymentIntentParams;
  export import ReaderProcessSetupIntentParams = TerminalNamespace4.ReaderProcessSetupIntentParams;
  export import ReaderRefundPaymentParams = TerminalNamespace4.ReaderRefundPaymentParams;
  export import ReaderSetReaderDisplayParams = TerminalNamespace4.ReaderSetReaderDisplayParams;
  export {Reader};
}
