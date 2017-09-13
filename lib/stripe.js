

const APP_INFO_PROPERTIES = ['name', 'version', 'url'];

const { EventEmitter } = require('events');
const { exec } = require('child_process');

const Accounts = require('./resources/Accounts');
const ApplePayDomains = require('./resources/ApplePayDomains');
const Balance = require('./resources/Balance');
const Charges = require('./resources/Charges');
const CountrySpecs = require('./resources/CountrySpecs');
const Coupons = require('./resources/Coupons');
const Customers = require('./resources/Customers');
const Disputes = require('./resources/Disputes');
const EphemeralKeys = require('./resources/EphemeralKeys');
const Events = require('./resources/Events');
const Invoices = require('./resources/Invoices');
const InvoiceItems = require('./resources/InvoiceItems');
const LoginLinks = require('./resources/LoginLinks');
const Payouts = require('./resources/Payouts');
const Plans = require('./resources/Plans');
const RecipientCards = require('./resources/RecipientCards');
const Recipients = require('./resources/Recipients');
const Refunds = require('./resources/Refunds');
const Tokens = require('./resources/Tokens');
const Transfers = require('./resources/Transfers');
const ApplicationFees = require('./resources/ApplicationFees');
const FileUploads = require('./resources/FileUploads');
const BitcoinReceivers = require('./resources/BitcoinReceivers');
const Products = require('./resources/Products');
const Skus = require('./resources/SKUs');
const Orders = require('./resources/Orders');
const OrderReturns = require('./resources/OrderReturns');
const Subscriptions = require('./resources/Subscriptions');
const SubscriptionItems = require('./resources/SubscriptionItems');
const ThreeDSecure = require('./resources/ThreeDSecure');
const Sources = require('./resources/Sources');

const CustomerCards = require('./resources/CustomerCards');
const CustomerSubscriptions = require('./resources/CustomerSubscriptions');
const ChargeRefunds = require('./resources/ChargeRefunds');
const ApplicationFeeRefunds = require('./resources/ApplicationFeeRefunds');
const TransferReversals = require('./resources/TransferReversals');

const Webhooks = require('./Webhooks');

const resources = {
  // Support Accounts for consistency, Account for backwards compat
  Account: Accounts,
  Accounts,
  ApplePayDomains,
  Balance,
  Charges,
  CountrySpecs,
  Coupons,
  Customers,
  Disputes,
  EphemeralKeys,
  Events,
  Invoices,
  InvoiceItems,
  LoginLinks,
  Payouts,
  Plans,
  RecipientCards,
  Recipients,
  Refunds,
  Tokens,
  Transfers,
  ApplicationFees,
  FileUploads,
  BitcoinReceivers,
  Products,
  Skus,
  Orders,
  OrderReturns,
  Subscriptions,
  SubscriptionItems,
  ThreeDSecure,
  Sources,

  // The following rely on pre-filled IDs:
  CustomerCards,
  CustomerSubscriptions,
  ChargeRefunds,
  ApplicationFeeRefunds,
  TransferReversals,
};

function Stripe(key, version) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, version);
  }

  Object.defineProperty(this, 'emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writeable: false,
  });

  this.on = this.emitter.on.bind(this.emitter);
  this.off = this.emitter.removeListener.bind(this.emitter);

  this.api = {
    auth: null,
    host: Stripe.DEFAULT_HOST,
    port: Stripe.DEFAULT_PORT,
    basePath: Stripe.DEFAULT_BASE_PATH,
    version: Stripe.DEFAULT_API_VERSION,
    timeout: Stripe.DEFAULT_TIMEOUT,
    agent: null,
    dev: false,
  };

  this.prepResources();
  this.setApiKey(key);
  this.setApiVersion(version);

  this.webhooks = Webhooks;
}

Stripe.prototype = {

  setHost(host, port, protocol) {
    this.setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol(protocol) {
    this.setApiField('protocol', protocol.toLowerCase());
  },

  setPort(port) {
    this.setApiField('port', port);
  },

  setApiVersion(version) {
    if (version) {
      this.setApiField('version', version);
    }
  },

  setApiKey(key) {
    if (key) {
      this.setApiField(
        'auth',
        `Bearer ${key}`,
      );
    }
  },

  setTimeout(timeout) {
    this.setApiField(
      'timeout',
      timeout == null ? Stripe.DEFAULT_TIMEOUT : timeout,
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
      if (typeof info[prop] === 'string') {
        accum = accum || {};

        accum[prop] = info[prop];
      }

      return accum;
    }, undefined);

    // Kill the cached UA string because it may no longer be valid
    Stripe.USER_AGENT_SERIALIZED = undefined;

    this.appInfo = appInfo;
  },

  setHttpAgent(agent) {
    this.setApiField('agent', agent);
  },

  setApiField(key, value) {
    this.api[key] = value;
  },

  getApiField(key) {
    return this.api[key];
  },

  getConstant(c) {
    return Stripe[c];
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent(cb) {
    if (Stripe.USER_AGENT_SERIALIZED) {
      return cb(Stripe.USER_AGENT_SERIALIZED);
    }
    return this.getClientUserAgentSeeded(Stripe.USER_AGENT, (cua) => {
      Stripe.USER_AGENT_SERIALIZED = cua;
      cb(Stripe.USER_AGENT_SERIALIZED);
    });
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded(seed, cb) {
    const self = this;

    exec('uname -a', (err, uname) => {
      const userAgent = Object.keys(seed).reduce((acc, field) => {
        acc[field] = encodeURIComponent(seed[field]);
        return acc;
      }, {});

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

      if (self.appInfo) {
        userAgent.application = self.appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  getAppInfoAsString() {
    if (!this.appInfo) {
      return '';
    }

    let formatted = this.appInfo.name;

    if (this.appInfo.version) {
      formatted += `/${this.appInfo.version}`;
    }

    if (this.appInfo.url) {
      formatted += ` (${this.appInfo.url})`;
    }

    return formatted;
  },

  prepResources() {
    Object.keys(resources).forEach((name) => {
      this[
        name[0].toLowerCase() + name.substring(1)
      ] = new resources[name](this);
    });
  },

};

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

Stripe.StripeResource = require('./StripeResource');

Stripe.resources = resources;

module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
