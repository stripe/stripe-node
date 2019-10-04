'use strict';

const resources = require('./resources');

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
const ALLOWED_CONFIG_PROPERTIES = [
  'apiVersion',
  'maxNetworkRetries',
  'httpAgent',
  'timeout',
  'host',
  'port',
  'telemetry',
];

const EventEmitter = require('events').EventEmitter;
const utils = require('./utils');

Stripe.StripeResource = require('./StripeResource');
Stripe.resources = resources;

function Stripe(key, config = {}) {
  if (!(this instanceof Stripe)) {
    return new Stripe(key, config);
  }

  const props = this._getPropsFromConfig(config);

  Object.defineProperty(this, '_emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writable: false,
  });

  this.on = this._emitter.on.bind(this._emitter);
  this.once = this._emitter.once.bind(this._emitter);
  this.off = this._emitter.removeListener.bind(this._emitter);

  this._api = {
    auth: null,
    host: props.host || Stripe.DEFAULT_HOST,
    port: props.port || Stripe.DEFAULT_PORT,
    basePath: Stripe.DEFAULT_BASE_PATH,
    version: props.apiVersion || Stripe.DEFAULT_API_VERSION,
    timeout: utils.validateInteger(
      'timeout',
      props.timeout,
      Stripe.DEFAULT_TIMEOUT
    ),
    maxNetworkRetries: utils.validateInteger(
      'maxNetworkRetries',
      props.maxNetworkRetries,
      0
    ),
    agent: props.httpAgent || null,
    dev: false,
  };

  this._prepResources();
  this.setApiKey(key);

  this.errors = require('./Error');
  this.webhooks = require('./Webhooks');

  this._prevRequestMetrics = [];
  this.setTelemetryEnabled(props.telemetry !== false);
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

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   port: 3000,
   * });
   *
   */
  setPort(port) {
    this._setApiField('port', port);
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   apiVersion: API_VERSION,
   * });
   *
   */
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

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const ProxyAgent = require('https-proxy-agent');
   * const stripe = new Stripe(API_KEY, {
   *   httpAgent: new ProxyAgent(process.env.http_proxy),
   * });
   *
   */
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

  getConstant: (c) => {
    return Stripe[c];
  },

  getMaxNetworkRetries() {
    return this.getApiField('maxNetworkRetries');
  },

  /**
   * @deprecated will be removed in a future major version. Use the config object instead:
   *
   * const stripe = new Stripe(API_KEY, {
   *   maxNetworkRetries: 2,
   * });
   *
   */
  setMaxNetworkRetries(maxNetworkRetries) {
    this._setApiNumberField('maxNetworkRetries', maxNetworkRetries);
  },

  _setApiNumberField(prop, n, defaultVal) {
    const val = utils.validateInteger(prop, n, defaultVal);

    this._setApiField(prop, val);
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
    utils.safeExec('uname -a', (err, uname) => {
      const userAgent = {};
      for (const field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');

      if (this._appInfo) {
        userAgent.application = this._appInfo;
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

  _getPropsFromConfig(config) {
    // If config is null or undefined, just bail early with no props
    if (!config) {
      return {};
    }

    // config can be an object or a string
    const isString = typeof config === 'string';
    const isObject = config === Object(config) && !Array.isArray(config);

    if (!isObject && !isString) {
      throw new Error('Config must either be an object or a string');
    }

    // If config is a string, we assume the old behavior of passing in a string representation of the api version
    if (isString) {
      return {
        apiVersion: config,
      };
    }

    // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
    const values = Object.keys(config).filter(
      (value) => !ALLOWED_CONFIG_PROPERTIES.includes(value)
    );

    if (values.length > 0) {
      throw new Error(
        `Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(
          ', '
        )}`
      );
    }

    return config;
  },
};

module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
