"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripe = void 0;
const _Error = require("./Error");
const resources = require("./resources");
const HttpClient_1 = require("./net/HttpClient");
const utils_1 = require("./utils");
const CryptoProvider_1 = require("./crypto/CryptoProvider");
const RequestSender_1 = require("./RequestSender");
const StripeResource_1 = require("./StripeResource");
const Webhooks_1 = require("./Webhooks");
const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = null;
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 2;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];
const ALLOWED_CONFIG_PROPERTIES = [
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
];
const defaultRequestSenderFactory = (stripe) => new RequestSender_1.RequestSender(stripe, StripeResource_1.StripeResource.MAX_BUFFERED_REQUEST_METRICS);
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe.PACKAGE_VERSION = require('../package.json').version;
    Stripe.USER_AGENT = Object.assign({ bindings_version: Stripe.PACKAGE_VERSION, lang: 'node', publisher: 'stripe', uname: null, typescript: false }, (0, utils_1.determineProcessUserAgentProperties)());
    Stripe.StripeResource = StripeResource_1.StripeResource;
    Stripe.resources = resources;
    Stripe.HttpClient = HttpClient_1.HttpClient;
    Stripe.HttpClientResponse = HttpClient_1.HttpClientResponse;
    Stripe.CryptoProvider = CryptoProvider_1.CryptoProvider;
    function Stripe(key, config = {}) {
        if (!(this instanceof Stripe)) {
            return new Stripe(key, config);
        }
        const props = this._getPropsFromConfig(config);
        this._platformFunctions = platformFunctions;
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
        if (props.protocol &&
            props.protocol !== 'https' &&
            (!props.host || /\.stripe\.com$/.test(props.host))) {
            throw new Error('The `https` protocol must be used when sending requests to `*.stripe.com`');
        }
        const agent = props.httpAgent || null;
        this._api = {
            auth: null,
            host: props.host || DEFAULT_HOST,
            port: props.port || DEFAULT_PORT,
            protocol: props.protocol || 'https',
            basePath: DEFAULT_BASE_PATH,
            version: props.apiVersion || DEFAULT_API_VERSION,
            timeout: (0, utils_1.validateInteger)('timeout', props.timeout, DEFAULT_TIMEOUT),
            maxNetworkRetries: (0, utils_1.validateInteger)('maxNetworkRetries', props.maxNetworkRetries, 0),
            agent: agent,
            httpClient: props.httpClient ||
                (agent
                    ? this._platformFunctions.createNodeHttpClient(agent)
                    : this._platformFunctions.createDefaultHttpClient()),
            dev: false,
            stripeAccount: props.stripeAccount || null,
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
        this._setApiKey(key);
        this.errors = _Error;
        this.webhooks = (0, Webhooks_1.createWebhooks)(platformFunctions);
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = requestSender(this);
        // Expose StripeResource on the instance too
        // @ts-ignore
        this.StripeResource = Stripe.StripeResource;
    }
    Stripe.errors = _Error;
    Stripe.webhooks = Webhooks_1.createWebhooks;
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */
    Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    /**
     * Create a CryptoProvider which uses the built-in Node crypto libraries for
     * its crypto operations.
     */
    Stripe.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    /**
     * Creates a CryptoProvider which uses the Subtle Crypto API from the Web
     * Crypto API spec for its crypto operations.
     *
     * A SubtleCrypto interface can optionally be passed in as a parameter. If none
     * is passed, will default to the default `crypto.subtle` object in the global
     * scope.
     */
    Stripe.createSubtleCryptoProvider =
        platformFunctions.createSubtleCryptoProvider;
    Stripe.prototype = {
        // Properties are set in the constructor above
        _appInfo: undefined,
        on: null,
        off: null,
        once: null,
        VERSION: null,
        StripeResource: null,
        webhooks: null,
        errors: null,
        _api: null,
        _prevRequestMetrics: null,
        _emitter: null,
        _enableTelemetry: null,
        _requestSender: null,
        _platformFunctions: null,
        /**
         * @private
         */
        _setApiKey(key) {
            if (key) {
                this._setApiField('auth', `Bearer ${key}`);
            }
        },
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
            }, 
            // @ts-ignore
            undefined);
        },
        /**
         * @private
         * This may be removed in the future.
         */
        _setApiField(key, value) {
            this._api[key] = value;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */
        getApiField(key) {
            return this._api[key];
        },
        setClientId(clientId) {
            this._clientId = clientId;
        },
        getClientId() {
            return this._clientId;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */
        getConstant: (c) => {
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
        },
        getMaxNetworkRetries() {
            return this.getApiField('maxNetworkRetries');
        },
        /**
         * @private
         * This may be removed in the future.
         */
        _setApiNumberField(prop, n, defaultVal) {
            const val = (0, utils_1.validateInteger)(prop, n, defaultVal);
            this._setApiField(prop, val);
        },
        getMaxNetworkRetryDelay() {
            return MAX_NETWORK_RETRY_DELAY_SEC;
        },
        getInitialNetworkRetryDelay() {
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        },
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
        },
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
        },
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
        },
        getTelemetryEnabled() {
            return this._enableTelemetry;
        },
        /**
         * @private
         * This may be removed in the future.
         */
        _prepResources() {
            for (const name in resources) {
                // @ts-ignore
                this[(0, utils_1.pascalToCamelCase)(name)] = new resources[name](this);
            }
        },
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
        },
    };
    return Stripe;
}
exports.createStripe = createStripe;
