// File generated from our OpenAPI spec

import {Stripe} from '../../stripe.core.js';
import {
  Crypto as CryptoNamespace0,
  Customer,
  CustomerResource,
} from './Customers.js';
import {
  Crypto as CryptoNamespace1,
  DepositAddress,
  DepositAddressResource,
} from './DepositAddresses.js';
import {
  Crypto as CryptoNamespace2,
  OnrampSession,
  OnrampSessionResource,
} from './OnrampSessions.js';
import {
  Crypto as CryptoNamespace3,
  OnrampTransactionLimits,
  OnrampTransactionLimitResource,
} from './OnrampTransactionLimits.js';
import {CustomerConsumerWallet} from './CustomerConsumerWallets.js';
import {CustomerPaymentToken} from './CustomerPaymentTokens.js';

export {Customer} from './Customers.js';
export {DepositAddress} from './DepositAddresses.js';
export {OnrampSession} from './OnrampSessions.js';
export {OnrampTransactionLimits} from './OnrampTransactionLimits.js';
export {CustomerConsumerWallet} from './CustomerConsumerWallets.js';
export {CustomerPaymentToken} from './CustomerPaymentTokens.js';

export class Crypto {
  customers: CustomerResource;
  depositAddresses: DepositAddressResource;
  onrampSessions: OnrampSessionResource;
  onrampTransactionLimits: OnrampTransactionLimitResource;

  constructor(private readonly stripe: Stripe) {
    this.customers = new CustomerResource(stripe);
    this.depositAddresses = new DepositAddressResource(stripe);
    this.onrampSessions = new OnrampSessionResource(stripe);
    this.onrampTransactionLimits = new OnrampTransactionLimitResource(stripe);
  }
}

export declare namespace Crypto {
  export import CustomerRetrieveParams = CryptoNamespace0.CustomerRetrieveParams;
  export import CustomerListConsumerWalletsParams = CryptoNamespace0.CustomerListConsumerWalletsParams;
  export import CustomerListPaymentTokensParams = CryptoNamespace0.CustomerListPaymentTokensParams;
  export {Customer, CustomerResource};
  export import DepositAddressListParams = CryptoNamespace1.DepositAddressListParams;
  export import DepositAddressCreateParams = CryptoNamespace1.DepositAddressCreateParams;
  export import DepositAddressRetrieveParams = CryptoNamespace1.DepositAddressRetrieveParams;
  export {DepositAddress, DepositAddressResource};
  export import OnrampSessionListParams = CryptoNamespace2.OnrampSessionListParams;
  export import OnrampSessionCreateParams = CryptoNamespace2.OnrampSessionCreateParams;
  export import OnrampSessionRetrieveParams = CryptoNamespace2.OnrampSessionRetrieveParams;
  export import OnrampSessionCheckoutParams = CryptoNamespace2.OnrampSessionCheckoutParams;
  export import OnrampSessionQuoteParams = CryptoNamespace2.OnrampSessionQuoteParams;
  export {OnrampSession, OnrampSessionResource};
  export import OnrampTransactionLimitsRetrieveParams = CryptoNamespace3.OnrampTransactionLimitsRetrieveParams;
  export {OnrampTransactionLimits, OnrampTransactionLimitResource};
  export {CustomerConsumerWallet};
  export {CustomerPaymentToken};
}
