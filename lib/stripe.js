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

var exec = require('child_process').exec;

var resources = {
  // Support Accounts for consistency, Account for backwards compat
  Account: require('./resources/Accounts'),
  Accounts: require('./resources/Accounts'),
  ApplePayDomains: require('./resources/ApplePayDomains'),
  Balance: require('./resources/Balance'),
  Charges: require('./resources/Charges'),
  CountrySpecs: require('./resources/CountrySpecs'),
  Coupons: require('./resources/Coupons'),
  Customers: require('./resources/Customers'),
  Disputes: require('./resources/Disputes'),
  Events: require('./resources/Events'),
  Invoices: require('./resources/Invoices'),
  InvoiceItems: require('./resources/InvoiceItems'),
  Payouts: require('./resources/Payouts'),
  Plans: require('./resources/Plans'),
  RecipientCards: require('./resources/RecipientCards'),
  Recipients: require('./resources/Recipients'),
  Refunds: require('./resources/Refunds'),
  Tokens: require('./resources/Tokens'),
  Transfers: require('./resources/Transfers'),
  ApplicationFees: require('./resources/ApplicationFees'),
  FileUploads: require('./resources/FileUploads'),
  BitcoinReceivers: require('./resources/BitcoinReceivers'),
  Products: require('./resources/Products'),
  Skus: require('./resources/SKUs'),
  Orders: require('./resources/Orders'),
  OrderReturns: require('./resources/OrderReturns'),
  Subscriptions: require('./resources/Subscriptions'),
  SubscriptionItems: require('./resources/SubscriptionItems'),
  ThreeDSecure: require('./resources/ThreeDSecure'),
  Sources: require('./resources/Sources'),

  // The following rely on pre-filled IDs:
  CustomerCards: require('./resources/CustomerCards'),
  CustomerSubscriptions: require('./resources/CustomerSubscriptions'),
  ChargeRefunds: require('./resources/ChargeRefunds'),
  ApplicationFeeRefunds: require('./resources/ApplicationFeeRefunds'),
  TransferReversals: require('./resources/TransferReversals'),

};

Stripe.StripeResource = require('./StripeResource');
Stripe.resources = resources;

function Stripe(key, version) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, version);
  }

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
        'Basic ' + new Buffer(key + ':').toString('base64')
      );
    }
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Stripe.DEFAULT_TIMEOUT : timeout
    );
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
    exec('uname -a', function(err, uname) {
      var userAgent = {};
      for (var field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

      cb(JSON.stringify(userAgent));
    });
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
