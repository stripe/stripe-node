// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Crypto as CryptoNamespace0,
  Customer,
  CustomerResource,
} from './Customers.js';
import {
  Crypto as CryptoNamespace1,
  OnrampSession,
  OnrampSessionResource,
} from './OnrampSessions.js';
import {
  Crypto as CryptoNamespace2,
  OnrampTransactionLimits,
  OnrampTransactionLimitResource,
} from './OnrampTransactionLimits.js';
import {CustomerConsumerWallet} from './CustomerConsumerWallets.js';
import {CustomerPaymentToken} from './CustomerPaymentTokens.js';

export {Customer} from './Customers.js';
export {OnrampSession} from './OnrampSessions.js';
export {OnrampTransactionLimits} from './OnrampTransactionLimits.js';
export {CustomerConsumerWallet} from './CustomerConsumerWallets.js';
export {CustomerPaymentToken} from './CustomerPaymentTokens.js';

export class Crypto {
  customers: CustomerResource;
  onrampSessions: OnrampSessionResource;
  onrampTransactionLimits: OnrampTransactionLimitResource;

  constructor(private readonly stripe: Stripe) {
    this.customers = new CustomerResource(stripe);
    this.onrampSessions = new OnrampSessionResource(stripe);
    this.onrampTransactionLimits = new OnrampTransactionLimitResource(stripe);
  }
}

export declare namespace Crypto {
  export import CustomerRetrieveParams = CryptoNamespace0.CustomerRetrieveParams;
  export import CustomerListConsumerWalletsParams = CryptoNamespace0.CustomerListConsumerWalletsParams;
  export import CustomerListPaymentTokensParams = CryptoNamespace0.CustomerListPaymentTokensParams;
  export {Customer, CustomerResource};
  export import OnrampSessionListParams = CryptoNamespace1.OnrampSessionListParams;
  export import OnrampSessionCreateParams = CryptoNamespace1.OnrampSessionCreateParams;
  export import OnrampSessionRetrieveParams = CryptoNamespace1.OnrampSessionRetrieveParams;
  export import OnrampSessionCheckoutParams = CryptoNamespace1.OnrampSessionCheckoutParams;
  export import OnrampSessionQuoteParams = CryptoNamespace1.OnrampSessionQuoteParams;
  export {OnrampSession, OnrampSessionResource};
  export import OnrampTransactionLimitsRetrieveParams = CryptoNamespace2.OnrampTransactionLimitsRetrieveParams;
  export {OnrampTransactionLimits, OnrampTransactionLimitResource};
  export {CustomerConsumerWallet};
  export {CustomerPaymentToken};
}
