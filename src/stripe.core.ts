import * as _Error from './Error.js';
import {RequestSender} from './RequestSender.js';
import {StripeResource} from './StripeResource.js';
import {
  AppInfo,
  RequestAuthenticator,
  StripeObject,
  UserProvidedConfig,
  RequestData,
  RequestOptions,
} from './Types.js';
import {WebhookObject, WebhookEvent, createWebhooks} from './Webhooks.js';
import {ApiVersion} from './apiVersion.js';
import {CryptoProvider} from './crypto/CryptoProvider.js';
import {HttpClient, HttpClientResponse} from './net/HttpClient.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
import {
  createApiKeyAuthenticator,
  determineProcessUserAgentProperties,
  pascalToCamelCase,
  validateInteger,
} from './utils.js';

const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = ApiVersion;

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

type RequestSenderFactory = (stripe: StripeObject) => RequestSender;

const defaultRequestSenderFactory: RequestSenderFactory = (stripe) =>
  new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);

export function createStripe(
  platformFunctions: PlatformFunctions,
  requestSender: RequestSenderFactory = defaultRequestSenderFactory
): typeof Stripe {
  Stripe.PACKAGE_VERSION = '17.3.1';
  Stripe.USER_AGENT = {
    bindings_version: Stripe.PACKAGE_VERSION,
    lang: 'node',
    publisher: 'stripe',
    uname: null,
    typescript: false,
    ...determineProcessUserAgentProperties(),
  };
  Stripe.StripeResource = StripeResource;
  Stripe.resources = resources;
  Stripe.HttpClient = HttpClient;
  Stripe.HttpClientResponse = HttpClientResponse;
  Stripe.CryptoProvider = CryptoProvider;

  // Previously Stripe.webhooks was just the createWebhooks() factory function
  // however going forward it will be a WebhookObject instance. To maintain
  // backwards compatibility it is currently a factory function that also
  // complies to the WebhookObject signature. The factory function signature
  // will be removed as a breaking change in the next major release.
  // See https://github.com/stripe/stripe-node/issues/1956
  function createWebhooksDefault(fns = platformFunctions): WebhookObject {
    return createWebhooks(fns);
  }
  Stripe.webhooks = Object.assign(
    createWebhooksDefault,
    createWebhooks(platformFunctions)
  );

  function Stripe(
    this: StripeObject,
    key: string,
    config: Record<string, unknown> = {}
  ): void {
    if (!(this instanceof Stripe)) {
      return new (Stripe as any)(key, config);
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

    const agent = props.httpAgent || null;

    this._api = {
      host: props.host || DEFAULT_HOST,
      port: props.port || DEFAULT_PORT,
      protocol: props.protocol || 'https',
      basePath: DEFAULT_BASE_PATH,
      version: props.apiVersion || DEFAULT_API_VERSION,
      timeout: validateInteger('timeout', props.timeout, DEFAULT_TIMEOUT),
      maxNetworkRetries: validateInteger(
        'maxNetworkRetries',
        props.maxNetworkRetries,
        2
      ),
      agent: agent,
      httpClient:
        props.httpClient ||
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
    this._setAuthenticator(key, props.authenticator);

    this.errors = _Error;

    // Once Stripe.webhooks looses the factory function signature in a future release
    // then this should become this.webhooks = Stripe.webhooks
    this.webhooks = createWebhooksDefault();

    this._prevRequestMetrics = [];
    this._enableTelemetry = props.telemetry !== false;

    this._requestSender = requestSender(this);

    // Expose StripeResource on the instance too
    // @ts-ignore
    this.StripeResource = Stripe.StripeResource;
  }

  Stripe.errors = _Error;

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
    _appInfo: undefined!,
    on: null!,
    off: null!,
    once: null!,
    VERSION: null!,
    StripeResource: null!,
    webhooks: null!,
    errors: null!,
    _api: null!,
    _prevRequestMetrics: null!,
    _emitter: null!,
    _enableTelemetry: null!,
    _requestSender: null!,
    _platformFunctions: null!,

    rawRequest(
      method: string,
      path: string,
      params?: RequestData,
      options?: RequestOptions
    ): Promise<any> {
      return this._requestSender._rawRequest(method, path, params, options);
    },

    /**
     * @private
     */
    _setAuthenticator(
      key: string,
      authenticator: RequestAuthenticator | undefined
    ): void {
      if (key && authenticator) {
        throw new Error("Can't specify both apiKey and authenticator");
      }

      if (!key && !authenticator) {
        throw new Error('Neither apiKey nor config.authenticator provided');
      }

      this._authenticator = key
        ? createApiKeyAuthenticator(key)
        : authenticator;
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(info: AppInfo): void {
      if (info && typeof info !== 'object') {
        throw new Error('AppInfo must be an object.');
      }

      if (info && !info.name) {
        throw new Error('AppInfo.name is required');
      }

      info = info || {};

      this._appInfo = APP_INFO_PROPERTIES.reduce<Record<string, any>>(
        (accum: Record<string, any>, prop) => {
          if (typeof info[prop] == 'string') {
            accum = accum || {};

            accum[prop] = info[prop];
          }

          return accum;
        },
        // @ts-ignore
        undefined
      );
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField<K extends keyof StripeObject['_api']>(
      key: K,
      value: StripeObject['_api'][K]
    ): void {
      this._api[key] = value;
    },

    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField<K extends keyof StripeObject['_api']>(
      key: K
    ): StripeObject['_api'][K] {
      return this._api[key];
    },

    setClientId(clientId: string): void {
      this._clientId = clientId;
    },

    getClientId(): string | undefined {
      return this._clientId;
    },

    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant: (c: string): unknown => {
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
      return ((Stripe as unknown) as Record<string, unknown>)[c];
    },

    getMaxNetworkRetries(): number {
      return this.getApiField('maxNetworkRetries');
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(
      prop: keyof StripeObject['_api'],
      n: number,
      defaultVal?: number
    ): void {
      const val = validateInteger(prop, n, defaultVal);

      this._setApiField(prop, val);
    },

    getMaxNetworkRetryDelay(): number {
      return MAX_NETWORK_RETRY_DELAY_SEC;
    },

    getInitialNetworkRetryDelay(): number {
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
    getClientUserAgent(cb: (userAgent: string) => void): void {
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
    getClientUserAgentSeeded(
      seed: Record<string, string | boolean | null>,
      cb: (userAgent: string) => void
    ): void {
      this._platformFunctions.getUname().then((uname: string | null) => {
        const userAgent: Record<string, string> = {};
        for (const field in seed) {
          if (!Object.prototype.hasOwnProperty.call(seed, field)) {
            continue;
          }
          userAgent[field] = encodeURIComponent(seed[field] ?? 'null');
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
    getAppInfoAsString(): string {
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

    getTelemetryEnabled(): boolean {
      return this._enableTelemetry;
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources(): void {
      for (const name in resources) {
        if (!Object.prototype.hasOwnProperty.call(resources, name)) {
          continue;
        }

        // @ts-ignore
        this[pascalToCamelCase(name)] = new resources[name](this);
      }
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _getPropsFromConfig(config: Record<string, unknown>): UserProvidedConfig {
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

    parseThinEvent(
      payload: string | Uint8Array,
      header: string | Uint8Array,
      secret: string,
      tolerance?: number,
      cryptoProvider?: CryptoProvider,
      receivedAt?: number
    ): WebhookEvent {
      // parses and validates the event payload all in one go
      return this.webhooks.constructEvent(
        payload,
        header,
        secret,
        tolerance,
        cryptoProvider,
        receivedAt
      );
    },
  } as StripeObject;

  return Stripe;
}
