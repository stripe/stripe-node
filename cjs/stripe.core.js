"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripe = exports.Stripe = void 0;
const _Error = require("./Error.js");
const RequestSender_js_1 = require("./RequestSender.js");
const StripeResource_js_1 = require("./StripeResource.js");
const StripeContext_js_1 = require("./StripeContext.js");
const Webhooks_js_1 = require("./Webhooks.js");
const apiVersion_js_1 = require("./apiVersion.js");
const CryptoProvider_js_1 = require("./crypto/CryptoProvider.js");
const HttpClient_js_1 = require("./net/HttpClient.js");
const resources = require("./resources.js");
const utils_js_1 = require("./utils.js");
const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = apiVersion_js_1.ApiVersion;
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 5;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];
const ALLOWED_CONFIG_PROPERTIES = [
    'authenticator',
    'apiVersion',
    'typescript',
    'maxNetworkRetries',
    'httpAgent',
    'httpClient',
    'timeout',
    'host',
    'port',
    'protocol',
    'telemetry',
    'appInfo',
    'stripeAccount',
    'stripeContext',
];
const defaultRequestSenderFactory = (stripe) => new RequestSender_js_1.RequestSender(stripe, StripeResource_js_1.StripeResource.MAX_BUFFERED_REQUEST_METRICS);
class Stripe {
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField(key, value) {
        this._api[key] = value;
    }
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField(key) {
        return this._api[key];
    }
    static initialize(platformFunctions, requestSenderFactory = defaultRequestSenderFactory) {
        Stripe._platformFunctions = platformFunctions;
        Stripe._requestSenderFactory = requestSenderFactory;
        Stripe.webhooks = (0, Webhooks_js_1.createWebhooks)(platformFunctions);
        Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
        Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
        Stripe.createNodeCryptoProvider =
            platformFunctions.createNodeCryptoProvider;
        Stripe.createSubtleCryptoProvider =
            platformFunctions.createSubtleCryptoProvider;
    }
    constructor(key, config = {}) {
        this._authenticator = null;
        const props = this._getPropsFromConfig(config);
        this._platformFunctions = Stripe._platformFunctions;
        Object.defineProperty(this, '_emitter', {
            value: this._platformFunctions.createEmitter(),
            enumerable: false,
            configurable: false,
            writable: false,
        });
        this.VERSION = Stripe.PACKAGE_VERSION;
        this.on = this._emitter.on.bind(this._emitter);
        this.once = this._emitter.once.bind(this._emitter);
        this.off = this._emitter.removeListener.bind(this._emitter);
        const agent = props.httpAgent || null;
        this._api = {
            host: props.host || DEFAULT_HOST,
            port: props.port || DEFAULT_PORT,
            protocol: props.protocol || 'https',
            basePath: DEFAULT_BASE_PATH,
            version: props.apiVersion || DEFAULT_API_VERSION,
            timeout: (0, utils_js_1.validateInteger)('timeout', props.timeout, DEFAULT_TIMEOUT),
            maxNetworkRetries: (0, utils_js_1.validateInteger)('maxNetworkRetries', props.maxNetworkRetries, 2),
            agent: agent,
            httpClient: props.httpClient ||
                (agent
                    ? this._platformFunctions.createNodeHttpClient(agent)
                    : this._platformFunctions.createDefaultHttpClient()),
            dev: false,
            stripeAccount: props.stripeAccount || null,
            stripeContext: props.stripeContext || null,
        };
        const typescript = props.typescript || false;
        if (typescript !== Stripe.USER_AGENT.typescript) {
            // The mutation here is uncomfortable, but likely fastest;
            // serializing the user agent involves shelling out to the system,
            // and given some users may instantiate the library many times without switching between TS and non-TS,
            // we only want to incur the performance hit when that actually happens.
            Stripe.USER_AGENT.typescript = typescript;
        }
        if (props.appInfo) {
            this._setAppInfo(props.appInfo);
        }
        this._prepResources();
        this._setAuthenticator(key, props.authenticator || null);
        this.errors = _Error;
        this.webhooks = Stripe.webhooks;
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = Stripe._requestSenderFactory(this);
        // // Expose StripeResource on the instance too
        // // @ts-ignore
        // this.StripeResource = Stripe.StripeResource;
    }
    rawRequest(method, path, params, options) {
        return this._requestSender._rawRequest(method, path, params, options);
    }
    /**
     * @private
     */
    _setAuthenticator(key, authenticator) {
        if (key && authenticator) {
            throw new Error("Can't specify both apiKey and authenticator");
        }
        if (!key && !authenticator) {
            throw new Error('Neither apiKey nor config.authenticator provided');
        }
        this._authenticator = key ? (0, utils_js_1.createApiKeyAuthenticator)(key) : authenticator;
    }
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(info) {
        if (info && typeof info !== 'object') {
            throw new Error('AppInfo must be an object.');
        }
        if (info && !info.name) {
            throw new Error('AppInfo.name is required');
        }
        info = info || {};
        this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop) => {
            if (typeof info[prop] == 'string') {
                accum = accum || {};
                accum[prop] = info[prop];
            }
            return accum;
        }, {});
    }
    setClientId(clientId) {
        this._clientId = clientId;
    }
    getClientId() {
        return this._clientId;
    }
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant(c) {
        switch (c) {
            case 'DEFAULT_HOST':
                return DEFAULT_HOST;
            case 'DEFAULT_PORT':
                return DEFAULT_PORT;
            case 'DEFAULT_BASE_PATH':
                return DEFAULT_BASE_PATH;
            case 'DEFAULT_API_VERSION':
                return DEFAULT_API_VERSION;
            case 'DEFAULT_TIMEOUT':
                return DEFAULT_TIMEOUT;
            case 'MAX_NETWORK_RETRY_DELAY_SEC':
                return MAX_NETWORK_RETRY_DELAY_SEC;
            case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
                return INITIAL_NETWORK_RETRY_DELAY_SEC;
        }
        return Stripe[c];
    }
    getMaxNetworkRetries() {
        return this.getApiField('maxNetworkRetries');
    }
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(prop, n, defaultVal) {
        // @ts-ignore
        const val = (0, utils_js_1.validateInteger)(prop, n, defaultVal);
        this._setApiField(prop, val);
    }
    getMaxNetworkRetryDelay() {
        return MAX_NETWORK_RETRY_DELAY_SEC;
    }
    getInitialNetworkRetryDelay() {
        return INITIAL_NETWORK_RETRY_DELAY_SEC;
    }
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent(cb) {
        return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
    }
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded(seed, cb) {
        this._platformFunctions.getUname().then((uname) => {
            var _a;
            const userAgent = {};
            for (const field in seed) {
                if (!Object.prototype.hasOwnProperty.call(seed, field)) {
                    continue;
                }
                userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : 'null');
            }
            // URI-encode in case there are unusual characters in the system's uname.
            userAgent.uname = encodeURIComponent(uname || 'UNKNOWN');
            const client = this.getApiField('httpClient');
            if (client) {
                userAgent.httplib = encodeURIComponent(client.getClientName());
            }
            if (this._appInfo) {
                userAgent.application = this._appInfo;
            }
            cb(JSON.stringify(userAgent));
        });
    }
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
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
    }
    getTelemetryEnabled() {
        return this._enableTelemetry;
    }
    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources() {
        for (const name in resources) {
            if (!Object.prototype.hasOwnProperty.call(resources, name)) {
                continue;
            }
            // @ts-ignore
            this[(0, utils_js_1.pascalToCamelCase)(name.replace('Resource', ''))] = new resources[name](this);
        }
    }
    /**
     * @private
     * This may be removed in the future.
     */
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
        const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
        if (values.length > 0) {
            throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(', ')}`);
        }
        return config;
    }
    parseEventNotification(payload, header, secret, tolerance, cryptoProvider, receivedAt
    // this return type is ignored?? picks up types from `types/index.d.ts` instead
    ) {
        // parses and validates the event payload all in one go
        const eventNotification = this.webhooks.constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt);
        // Parse string context into StripeContext object if present
        if (eventNotification.context) {
            eventNotification.context = StripeContext_js_1.StripeContext.parse(eventNotification.context);
        }
        eventNotification.fetchEvent = () => {
            return this._requestSender._rawRequest('GET', `/v2/core/events/${eventNotification.id}`, undefined, {
                stripeContext: eventNotification.context,
            }, ['fetch_event']);
        };
        eventNotification.fetchRelatedObject = () => {
            if (!eventNotification.related_object) {
                return Promise.resolve(null);
            }
            return this._requestSender._rawRequest('GET', eventNotification.related_object.url, undefined, {
                stripeContext: eventNotification.context,
            }, ['fetch_related_object']);
        };
        return eventNotification;
    }
}
exports.Stripe = Stripe;
Stripe.PACKAGE_VERSION = '19.1.0';
Stripe.API_VERSION = apiVersion_js_1.ApiVersion;
Stripe.USER_AGENT = Object.assign({ bindings_version: Stripe.PACKAGE_VERSION, lang: 'node', publisher: 'stripe', uname: null, typescript: false }, (0, utils_js_1.determineProcessUserAgentProperties)());
Stripe.StripeResource = StripeResource_js_1.StripeResource;
Stripe.StripeContext = StripeContext_js_1.StripeContext;
Stripe.resources = resources;
Stripe.HttpClient = HttpClient_js_1.HttpClient;
Stripe.HttpClientResponse = HttpClient_js_1.HttpClientResponse;
Stripe.CryptoProvider = CryptoProvider_js_1.CryptoProvider;
Stripe.errors = _Error;
Stripe._requestSenderFactory = defaultRequestSenderFactory;
// For backward compatibility, export createStripe as a factory function
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    // Initialize static properties
    Stripe.initialize(platformFunctions, requestSender);
    return Stripe;
}
exports.createStripe = createStripe;
