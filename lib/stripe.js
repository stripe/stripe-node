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

var APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];

var EventEmitter = require('events').EventEmitter;
var exec = require('child_process').exec;

var resourceNamespace = require('./ResourceNamespace');

var resources = {
  // Support Accounts for consistency, Account for backwards compat
  Account: require('./resources/Accounts'),
  Accounts: require('./resources/Accounts'),
  ApplePayDomains: require('./resources/ApplePayDomains'),
  ApplicationFees: require('./resources/ApplicationFees'),
  Balance: require('./resources/Balance'),
  BitcoinReceivers: require('./resources/BitcoinReceivers'),
  Charges: require('./resources/Charges'),
  CountrySpecs: require('./resources/CountrySpecs'),
  Coupons: require('./resources/Coupons'),
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
  OrderReturns: require('./resources/OrderReturns'),
  Orders: require('./resources/Orders'),
  PaymentIntents: require('./resources/PaymentIntents'),
  Payouts: require('./resources/Payouts'),
  Plans: require('./resources/Plans'),
  Products: require('./resources/Products'),
  RecipientCards: require('./resources/RecipientCards'),
  Recipients: require('./resources/Recipients'),
  Refunds: require('./resources/Refunds'),
  Skus: require('./resources/SKUs'),
  Sources: require('./resources/Sources'),
  SubscriptionItems: require('./resources/SubscriptionItems'),
  Subscriptions: require('./resources/Subscriptions'),
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
  TransferReversals: require('./resources/TransferReversals'),

  // Namespaced resources
  Issuing: resourceNamespace('issuing', {
    Authorizations: require('./resources/Issuing/Authorizations'),
    Cardholders: require('./resources/Issuing/Cardholders'),
    Cards: require('./resources/Issuing/Cards'),
    Disputes: require('./resources/Issuing/Disputes'),
    Transactions: require('./resources/Issuing/Transactions'),
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
  };

  this._prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);

  this.errors = require('./Error.js');
  this.webhooks = require('./Webhooks');
}

Stripe.prototype = {

  setHost: function(host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function(port) {
    this._setApiField('port', port);
  },

  setApiVersion: function(version) {
    if (version) {
      this._setApiField('version', version);
    }
  },

  setApiKey: function(key) {
    if (key) {
      this._setApiField(
        'auth',
        'Bearer ' + key
      );
    }
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Stripe.DEFAULT_TIMEOUT : timeout
    );
  },

  setAppInfo: function(info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    var appInfo = APP_INFO_PROPERTIES.reduce(function(accum, prop) {
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

  setHttpAgent: function(agent) {
    this._setApiField('agent', agent);
  },

  _setApiField: function(key, value) {
    this._api[key] = value;
  },

  getApiField: function(key) {
    return this._api[key];
  },

  getConstant: function(c) {
    return Stripe[c];
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent: function(cb) {
    if (Stripe.USER_AGENT_SERIALIZED) {
      return cb(Stripe.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Stripe.USER_AGENT, function(cua) {
      Stripe.USER_AGENT_SERIALIZED = cua;
      cb(Stripe.USER_AGENT_SERIALIZED);
    })
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded: function(seed, cb) {
    var self = this;

    exec('uname -a', function(err, uname) {
      var userAgent = {};
      for (var field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

      if (self._appInfo) {
        userAgent.application = self._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  getAppInfoAsString: function() {
    if (!this._appInfo) {
      return '';
    }

    var formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += '/' + this._appInfo.version;
    }

    if (this._appInfo.url) {
      formatted += ' (' + this._appInfo.url + ')';
    }

    return formatted;
  },

  _prepResources: function() {
    for (var name in resources) {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this);
    }
  },

};

module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
