'use strict';

Stripe.DEFAULT_HOST = 'api.stripe.com';
Stripe.DEFAULT_PORT = '443';
Stripe.DEFAULT_BASE_PATH = '/v1/';
Stripe.DEFAULT_API_VERSION = null;

// Use node's default timeout:
Stripe.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Stripe.PACKAGE_VERSION = require('../package.json').version;

Stripe.USER_AGENT = {
  bindings_version: Stripe.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'stripe',
  uname: null,
};

Stripe.USER_AGENT_SERIALIZED = null;

Stripe.MAX_NETWORK_RETRY_DELAY_SEC = 2;
Stripe.INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];

const EventEmitter = require('events').EventEmitter;
const utils = require('./utils');

const resourceNamespace = require('./ResourceNamespace');

const resources = {
  // Support Accounts for consistency, Account for backwards compat
  Account: require('./resources/Accounts'),
  Accounts: require('./resources/Accounts'),
  AccountLinks: require('./resources/AccountLinks'),
  ApplePayDomains: require('./resources/ApplePayDomains'),
  ApplicationFees: require('./resources/ApplicationFees'),
  Balance: require('./resources/Balance'),
  BitcoinReceivers: require('./resources/BitcoinReceivers'),
  Charges: require('./resources/Charges'),
  CountrySpecs: require('./resources/CountrySpecs'),
  Coupons: require('./resources/Coupons'),
  CreditNotes: require('./resources/CreditNotes'),
  Customers: require('./resources/Customers'),
  Disputes: require('./resources/Disputes'),
  EphemeralKeys: require('./resources/EphemeralKeys'),
  Events: require('./resources/Events'),
  ExchangeRates: require('./resources/ExchangeRates'),
  Files: require('./resources/Files'),
  FileLinks: require('./resources/FileLinks'),
  InvoiceItems: require('./resources/InvoiceItems'),
  Invoices: require('./resources/Invoices'),
  IssuerFraudRecords: require('./resources/IssuerFraudRecords'),
  LoginLinks: require('./resources/LoginLinks'),
  OAuth: require('./resources/OAuth'),
  OrderReturns: require('./resources/OrderReturns'),
  Orders: require('./resources/Orders'),
  PaymentIntents: require('./resources/PaymentIntents'),
  PaymentMethods: require('./resources/PaymentMethods'),
  Payouts: require('./resources/Payouts'),
  Plans: require('./resources/Plans'),
  Products: require('./resources/Products'),
  RecipientCards: require('./resources/RecipientCards'),
  Recipients: require('./resources/Recipients'),
  Refunds: require('./resources/Refunds'),
  Reviews: require('./resources/Reviews'),
  Skus: require('./resources/SKUs'),
  Sources: require('./resources/Sources'),
  SubscriptionItems: require('./resources/SubscriptionItems'),
  SubscriptionSchedules: require('./resources/SubscriptionSchedules'),
  Subscriptions: require('./resources/Subscriptions'),
  TaxRates: require('./resources/TaxRates'),
  ThreeDSecure: require('./resources/ThreeDSecure'),
  Tokens: require('./resources/Tokens'),
  Topups: require('./resources/Topups'),
  Transfers: require('./resources/Transfers'),
  UsageRecords: require('./resources/UsageRecords'),
  UsageRecordSummaries: require('./resources/UsageRecordSummaries'),
  WebhookEndpoints: require('./resources/WebhookEndpoints'),

  // The following rely on pre-filled IDs:
  ApplicationFeeRefunds: require('./resources/ApplicationFeeRefunds'),
  ChargeRefunds: require('./resources/ChargeRefunds'),
  CustomerCards: require('./resources/CustomerCards'),
  CustomerSubscriptions: require('./resources/CustomerSubscriptions'),
  Persons: require('./resources/Persons'),
  SubscriptionScheduleRevisions: require('./resources/SubscriptionScheduleRevisions'),
  TaxIds: require('./resources/TaxIds'),
  TransferReversals: require('./resources/TransferReversals'),

  // Namespaced resources
  Checkout: resourceNamespace('checkout', {
    Sessions: require('./resources/Checkout/Sessions'),
  }),
  Issuing: resourceNamespace('issuing', {
    Authorizations: require('./resources/Issuing/Authorizations'),
    Cardholders: require('./resources/Issuing/Cardholders'),
    Cards: require('./resources/Issuing/Cards'),
    Disputes: require('./resources/Issuing/Disputes'),
    Transactions: require('./resources/Issuing/Transactions'),
  }),
  Radar: resourceNamespace('radar', {
    ValueLists: require('./resources/Radar/ValueLists'),
    ValueListItems: require('./resources/Radar/ValueListItems'),
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: require('./resources/Reporting/ReportRuns'),
    ReportTypes: require('./resources/Reporting/ReportTypes'),
  }),
  Sigma: resourceNamespace('sigma', {
    ScheduledQueryRuns: require('./resources/Sigma/ScheduledQueryRuns'),
  }),
  Terminal: resourceNamespace('terminal', {
    ConnectionTokens: require('./resources/Terminal/ConnectionTokens'),
    Locations: require('./resources/Terminal/Locations'),
    Readers: require('./resources/Terminal/Readers'),
  }),
};

// For backwards compatibility, `Files` is aliased to `FileUploads`
resources.FileUploads = resources.Files;

Stripe.StripeResource = require('./StripeResource');
Stripe.resources = resources;

function Stripe(key, version) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, version);
  }

  Object.defineProperty(this, '_emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writeable: false,
  });

  this.on = this._emitter.on.bind(this._emitter);
  this.off = this._emitter.removeListener.bind(this._emitter);

  this._api = {
    auth: null,
    host: Stripe.DEFAULT_HOST,
    port: Stripe.DEFAULT_PORT,
    basePath: Stripe.DEFAULT_BASE_PATH,
    version: Stripe.DEFAULT_API_VERSION,
    timeout: Stripe.DEFAULT_TIMEOUT,
    agent: null,
    dev: false,
    maxNetworkRetries: 0,
  };

  this._prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);

  this.errors = require('./Error');
  this.webhooks = require('./Webhooks');

  this._prevRequestMetrics = [];
  this.setTelemetryEnabled(false);
}

Stripe.errors = require('./Error');
Stripe.webhooks = require('./Webhooks');

Stripe.prototype = {
  setHost(host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort(port) {
    this._setApiField('port', port);
  },

  setApiVersion(version) {
    if (version) {
      this._setApiField('version', version);
    }
  },

  setApiKey(key) {
    if (key) {
      this._setApiField('auth', `Bearer ${key}`);
    }
  },

  setTimeout(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Stripe.DEFAULT_TIMEOUT : timeout
    );
  },

  setAppInfo(info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    const appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
      if (typeof info[prop] == 'string') {
        accum = accum || {};

        accum[prop] = info[prop];
      }

      return accum;
    }, undefined);

    // Kill the cached UA string because it may no longer be valid
    Stripe.USER_AGENT_SERIALIZED = undefined;

    this._appInfo = appInfo;
  },

  setHttpAgent(agent) {
    this._setApiField('agent', agent);
  },

  _setApiField(key, value) {
    this._api[key] = value;
  },

  getApiField(key) {
    return this._api[key];
  },

  setClientId(clientId) {
    this._clientId = clientId;
  },

  getClientId() {
    return this._clientId;
  },

  getConstant(c) {
    return Stripe[c];
  },

  getMaxNetworkRetries() {
    return this.getApiField('maxNetworkRetries');
  },

  setMaxNetworkRetries(maxNetworkRetries) {
    if (
      (maxNetworkRetries && typeof maxNetworkRetries !== 'number') ||
      arguments.length < 1
    ) {
      throw new Error('maxNetworkRetries must be a number.');
    }

    this._setApiField('maxNetworkRetries', maxNetworkRetries);
  },

  getMaxNetworkRetryDelay() {
    return this.getConstant('MAX_NETWORK_RETRY_DELAY_SEC');
  },

  getInitialNetworkRetryDelay() {
    return this.getConstant('INITIAL_NETWORK_RETRY_DELAY_SEC');
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent(cb) {
    if (Stripe.USER_AGENT_SERIALIZED) {
      return cb(Stripe.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Stripe.USER_AGENT, (cua) => {
      Stripe.USER_AGENT_SERIALIZED = cua;
      cb(Stripe.USER_AGENT_SERIALIZED);
    });
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded(seed, cb) {
    const self = this;

    utils.safeExec('uname -a', (err, uname) => {
      const userAgent = {};
      for (const field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');

      if (self._appInfo) {
        userAgent.application = self._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  getAppInfoAsString() {
    if (!this._appInfo) {
      return '';
    }

    let formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += `/${this._appInfo.version}`;
    }

    if (this._appInfo.url) {
      formatted += ` (${this._appInfo.url})`;
    }

    return formatted;
  },

  setTelemetryEnabled(enableTelemetry) {
    this._enableTelemetry = enableTelemetry;
  },

  getTelemetryEnabled() {
    return this._enableTelemetry;
  },

  _prepResources() {
    for (const name in resources) {
      this[utils.pascalToCamelCase(name)] = new resources[name](this);
    }
  },
};

module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
