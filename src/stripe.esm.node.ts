import * as _Error from './Error.js';
import {RequestSender} from './RequestSender.js';
import {StripeResource} from './StripeResource.js';
import {StripeContext} from './StripeContext.js';
import {NodePlatformFunctions} from './platform/NodePlatformFunctions.js';
import {
  BaseAddress,
  RequestAuthenticator,
  UserProvidedConfig,
  RequestData,
  StripeRawError,
  DEFAULT_BASE_ADDRESSES,
} from './Types.js';
import {createWebhooks} from './Webhooks.js';
import {ApiVersion} from './apiVersion.js';
import {CryptoProvider} from './crypto/CryptoProvider.js';
import {HttpClient, HttpClientResponse} from './net/HttpClient.js';
import {PlatformFunctions} from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
import {
  createApiKeyAuthenticator,
  detectAIAgent,
  pascalToCamelCase,
  validateInteger,
} from './utils.js';
import {
  Response,
  RequestOptions,
  RawRequestOptions,
  ApiList,
  ApiListPromise,
  V2List,
  V2ListPromise,
  ApiSearchResultPromise,
  ApiSearchResult,
  StripeStreamResponse,
  StripeConfig,
  RequestEvent,
  ResponseEvent,
  AppInfo,
  FileData,
} from './lib.js';
import {
  Metadata,
  MetadataParam,
  Address,
  JapanAddress,
  AddressParam,
  ShippingAddressParam,
  JapanAddressParam,
  RangeQueryParam,
  PaginationParams,
  Emptyable,
  Decimal,
} from './shared.js';
import {EventNotification as V2EventNotification} from './resources/V2/Core/Events.js';

// StripeInstanceImports: The beginning of the section generated from our OpenAPI spec
// StripeInstanceImports: The end of the section generated from our OpenAPI spec

// V1EventImports: The beginning of the section generated from our OpenAPI spec
// V1EventImports: The end of the section generated from our OpenAPI spec
import {OAuthResource} from './resources.js';
import {
  OAuthToken,
  OAuthTokenParams,
  OAuthAuthorizeUrlOptions,
  OAuthAuthorizeUrlParams,
  OAuthDeauthorization,
  OAuthDeauthorizeParams,
} from './resources/OAuth.js';

const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = ApiVersion;

const DEFAULT_TIMEOUT = 80000;

const MAX_NETWORK_RETRY_DELAY_SEC = 5;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

const APP_INFO_PROPERTIES: (keyof AppInfo)[] = [
  'name',
  'version',
  'url',
  'partner_id',
];
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
  'emitEventBodies',
  'appInfo',
  'stripeAccount',
  'stripeContext',
];

type RequestSenderFactory = (stripe: Stripe) => RequestSender;

const defaultRequestSenderFactory: RequestSenderFactory = (stripe) =>
  new RequestSender(stripe, StripeResource.MAX_BUFFERED_REQUEST_METRICS);

export class Stripe {
  static PACKAGE_VERSION = '22.2.3';
  static API_VERSION: typeof ApiVersion = ApiVersion;
  static aiAgent = '';
  static AI_AGENT = '';
  static USER_AGENT: Record<string, string | boolean | null> = {
    bindings_version: Stripe.PACKAGE_VERSION,
    lang: 'node',
    typescript: false,
  };
  static StripeResource = StripeResource;
  static resources = resources;
  static HttpClient = HttpClient;
  static HttpClientResponse = HttpClientResponse;
  static CryptoProvider = CryptoProvider;
  static StripeContext = StripeContext;
  static errors = _Error;
  static Decimal = Decimal;

  private static _platformFunctions: PlatformFunctions;
  private static _requestSenderFactory: RequestSenderFactory = defaultRequestSenderFactory;
  static webhooks: ReturnType<typeof createWebhooks>;

  static createNodeHttpClient: PlatformFunctions['createNodeHttpClient'];
  static createFetchHttpClient: PlatformFunctions['createFetchHttpClient'];
  static createNodeCryptoProvider: PlatformFunctions['createNodeCryptoProvider'];
  static createSubtleCryptoProvider: PlatformFunctions['createSubtleCryptoProvider'];

  // Instance properties
  _appInfo: any;
  on: any;
  off: any;
  once: any;
  VERSION: string;
  webhooks: ReturnType<typeof createWebhooks>;
  errors: typeof _Error;
  Decimal: typeof Decimal;
  _api: any;
  _prevRequestMetrics: any;
  _emitter: any;
  _enableTelemetry: boolean;
  _emitEventBodies: boolean;
  _requestSender: RequestSender;
  _platformFunctions: PlatformFunctions;
  _authenticator: RequestAuthenticator | null = null;
  _clientId?: string;

  // StripeInstanceVariables: The beginning of the section generated from our OpenAPI spec
  // StripeInstanceVariables: The end of the section generated from our OpenAPI spec
  // webhooks: WebhookEndpointResource;
  account: AccountResource;
  oauth: OAuthResource;

  static initialize(
    platformFunctions: PlatformFunctions,
    requestSenderFactory: RequestSenderFactory = defaultRequestSenderFactory
  ): void {
    Stripe._platformFunctions = platformFunctions;
    Stripe._requestSenderFactory = requestSenderFactory;
    Stripe.webhooks = createWebhooks(platformFunctions);
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    Stripe.createNodeCryptoProvider =
      platformFunctions.createNodeCryptoProvider;
    Stripe.createSubtleCryptoProvider =
      platformFunctions.createSubtleCryptoProvider;

    const env = platformFunctions.getEnv();
    const runtimeVersion = platformFunctions.getRuntimeVersion();

    Stripe.aiAgent = env ? detectAIAgent(env) : '';
    Stripe.AI_AGENT = Stripe.aiAgent;
    Stripe.USER_AGENT = {
      bindings_version: Stripe.PACKAGE_VERSION,
      lang: 'node',
      typescript: false,
      ...(runtimeVersion ? {lang_version: runtimeVersion} : {}),
      ...(Stripe.aiAgent ? {ai_agent: Stripe.aiAgent} : {}),
    };
  }

  constructor(key: string, config: StripeConfig = {}) {
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

    this._setAuthenticator(key, props.authenticator || null);

    this.errors = _Error;
    this.Decimal = Decimal;

    this.webhooks = Stripe.webhooks;

    this._prevRequestMetrics = [];
    this._enableTelemetry = props.telemetry !== false;
    this._emitEventBodies = props.emitEventBodies === true;

    this._requestSender = Stripe._requestSenderFactory(this as any);

    // StripeInitInstanceVariables: The beginning of the section generated from our OpenAPI spec
    // StripeInitInstanceVariables: The end of the section generated from our OpenAPI spec

    // hardcoded properties and resources
    // account property is added for backward compatibility
    this.account = this.accounts;
    this.oauth = new OAuthResource(this);

    // this._prepResources();
  }

  /**
   * Allows for sending "raw" requests to the Stripe API, which can be used for
   * testing new API endpoints or performing requests that the library does
   * not support yet.
   *
   * @param method - HTTP request method, 'GET', 'POST', or 'DELETE'
   * @param path - The path of the request, e.g. '/v1/beta_endpoint'
   * @param params - The parameters to include in the request body.
   * @param options - Additional request options.
   */
  rawRequest(
    method: string,
    path: string,
    params?: RequestData,
    options?: RawRequestOptions
  ): Promise<any> {
    return this._requestSender._rawRequest(method, path, params, options);
  }

  /**
   * @private
   */
  _setAuthenticator(
    key: string,
    authenticator: RequestAuthenticator | null
  ): void {
    if (key && authenticator) {
      throw new Error("Can't specify both apiKey and authenticator");
    }

    if (!key && !authenticator) {
      throw new Error('Neither apiKey nor config.authenticator provided');
    }

    this._authenticator = key ? createApiKeyAuthenticator(key) : authenticator;
  }

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
      {}
    );
  }

  setClientId(clientId: string): void {
    this._clientId = clientId;
  }

  getClientId(): string | undefined {
    return this._clientId;
  }

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getConstant(c: string): unknown {
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
  }

  resolveBaseAddress(apiBase: BaseAddress): string {
    // can override host globally, but not locally
    const instanceHost = this.getApiField('host');
    if (instanceHost !== DEFAULT_HOST) {
      return instanceHost;
    }
    return DEFAULT_BASE_ADDRESSES[apiBase];
  }

  getMaxNetworkRetries(): number {
    return this.getApiField('maxNetworkRetries');
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiNumberField(
    prop: keyof Stripe['_api'],
    n: number,
    defaultVal?: number
  ): void {
    // @ts-ignore
    const val = validateInteger(prop, n, defaultVal);

    this._setApiField(prop, val);
  }

  getMaxNetworkRetryDelay(): number {
    return MAX_NETWORK_RETRY_DELAY_SEC;
  }

  getInitialNetworkRetryDelay(): number {
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
  getClientUserAgent(cb: (userAgent: string) => void): void {
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
  getClientUserAgentSeeded(
    seed: Record<string, string | boolean | null>,
    cb: (userAgent: string) => void
  ): void {
    const userAgent: Record<string, string> = {};
    for (const field in seed) {
      if (!Object.prototype.hasOwnProperty.call(seed, field)) {
        continue;
      }
      userAgent[field] = encodeURIComponent(seed[field] ?? 'null');
    }

    const platformInfo = this._platformFunctions.getPlatformInfo();
    if (platformInfo && this.getTelemetryEnabled()) {
      userAgent.platform = encodeURIComponent(platformInfo);
    } else {
      delete userAgent.platform;
    }

    const client = this.getApiField('httpClient');
    if (client) {
      userAgent.httplib = encodeURIComponent(client.getClientName());
    }

    if (this._appInfo) {
      userAgent.application = this._appInfo;
    }

    cb(JSON.stringify(userAgent));
  }

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
  }

  getTelemetryEnabled(): boolean {
    return this._enableTelemetry;
  }

  getEmitEventBodiesEnabled(): boolean {
    return this._emitEventBodies;
  }

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
      this[pascalToCamelCase(name.replace('Resource', ''))] = new resources[
        name
      ](this);
    }
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _getPropsFromConfig(
    config: StripeConfig | Record<string, unknown>
  ): UserProvidedConfig {
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
  }

  /**
   * @private
   * This may be removed in the future.
   */
  _setApiField<K extends keyof Stripe['_api']>(
    key: K,
    value: Stripe['_api'][K]
  ): void {
    this._api[key] = value;
  }

  /**
   * @private
   * Please open or upvote an issue at github.com/stripe/stripe-node
   * if you use this, detailing your use-case.
   *
   * It may be deprecated and removed in the future.
   */
  getApiField<K extends keyof Stripe['_api']>(key: K): Stripe['_api'][K] {
    return this._api[key];
  }

  parseEventNotification(
    payload: string | Uint8Array,
    header: string | Uint8Array,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
    // this return type is ignored?? picks up types from `types/index.d.ts` instead
  ): V2.Core.EventNotification {
    // Verify the signature using the internal signature helper directly,
    // bypassing constructEvent's v2 payload check (since v2 payloads are
    // expected here).
    if (!this.webhooks.signature) {
      throw new Error('ERR: missing signature helper, unable to verify');
    }
    this.webhooks.signature.verifyHeader(
      payload,
      header,
      secret,
      tolerance || this.webhooks.DEFAULT_TOLERANCE,
      cryptoProvider || this._platformFunctions.createDefaultCryptoProvider(),
      receivedAt
    );

    const eventNotification =
      payload instanceof Uint8Array
        ? JSON.parse(new TextDecoder('utf8').decode(payload))
        : JSON.parse(payload as string);

    if (eventNotification && eventNotification.object === 'event') {
      throw new Error(
        'You passed a webhook payload to stripe.parseEventNotification, which expects an event notification. Use stripe.webhooks.constructEvent instead.'
      );
    }

    // TODO(DEVSDK-2968): Remove once Custom Events are sent with the correct type.
    if (
      typeof eventNotification.type === 'string' &&
      eventNotification.type.startsWith('v2.extend.objects.object_record') &&
      eventNotification.related_object?.type
    ) {
      eventNotification.type = eventNotification.type.replace(
        /^v2\.extend\.objects\.object_record/,
        eventNotification.related_object.type
      );
    }

    // Parse string context into StripeContext object if present
    if (eventNotification.context) {
      eventNotification.context = StripeContext.parse(
        eventNotification.context
      );
    }

    eventNotification.fetchEvent = (): Promise<unknown> => {
      return this._requestSender._rawRequest(
        'GET',
        `/v2/core/events/${eventNotification.id}`,
        undefined,
        {
          stripeContext: eventNotification.context,
          headers: {
            'Stripe-Request-Trigger': `event=${eventNotification.id}`,
          },
        },
        ['fetch_event']
      );
    };

    eventNotification.fetchRelatedObject = (): Promise<unknown> => {
      if (!eventNotification.related_object) {
        return Promise.resolve(null);
      }

      return this._requestSender._rawRequest(
        'GET',
        eventNotification.related_object.url,
        undefined,
        {
          stripeContext: eventNotification.context,
          headers: {
            'Stripe-Request-Trigger': `event=${eventNotification.id}`,
          },
        },
        ['fetch_related_object']
      );
    };

    return eventNotification;
  }

  async parseEventNotificationAsync(
    payload: string | Uint8Array,
    header: string | Uint8Array,
    secret: string,
    tolerance?: number,
    cryptoProvider?: CryptoProvider,
    receivedAt?: number
    // this return type is ignored?? picks up types from `types/index.d.ts` instead
  ): Promise<V2.Core.EventNotification> {
    // Verify the signature using the internal signature helper directly,
    // bypassing constructEvent's v2 payload check (since v2 payloads are
    // expected here).
    if (!this.webhooks.signature) {
      throw new Error('ERR: missing signature helper, unable to verify');
    }
    await this.webhooks.signature.verifyHeaderAsync(
      payload,
      header,
      secret,
      tolerance || this.webhooks.DEFAULT_TOLERANCE,
      cryptoProvider || this._platformFunctions.createDefaultCryptoProvider(),
      receivedAt
    );

    const eventNotification =
      payload instanceof Uint8Array
        ? JSON.parse(new TextDecoder('utf8').decode(payload))
        : JSON.parse(payload as string);

    if (eventNotification && eventNotification.object === 'event') {
      throw new Error(
        'You passed a webhook payload to stripe.parseEventNotificationAsync, which expects an event notification. Use stripe.webhooks.constructEventAsync instead.'
      );
    }

    // Parse string context into StripeContext object if present
    if (eventNotification.context) {
      eventNotification.context = StripeContext.parse(
        eventNotification.context
      );
    }

    eventNotification.fetchEvent = (): Promise<unknown> => {
      return this._requestSender._rawRequest(
        'GET',
        `/v2/core/events/${eventNotification.id}`,
        undefined,
        {
          stripeContext: eventNotification.context,
          headers: {
            'Stripe-Request-Trigger': `event=${eventNotification.id}`,
          },
        },
        ['fetch_event']
      );
    };

    eventNotification.fetchRelatedObject = (): Promise<unknown> => {
      if (!eventNotification.related_object) {
        return Promise.resolve(null);
      }

      return this._requestSender._rawRequest(
        'GET',
        eventNotification.related_object.url,
        undefined,
        {
          stripeContext: eventNotification.context,
          headers: {
            'Stripe-Request-Trigger': `event=${eventNotification.id}`,
          },
        },
        ['fetch_related_object']
      );
    };

    return eventNotification;
  }
}

// For backward compatibility, export createStripe as a factory function
export function createStripe(
  platformFunctions: PlatformFunctions,
  requestSender: RequestSenderFactory = defaultRequestSenderFactory
): typeof Stripe {
  // Initialize static properties
  Stripe.initialize(platformFunctions, requestSender);

  return Stripe;
}

export declare namespace Stripe {
  // StripeInterfaceExports: The beginning of the section generated from our OpenAPI spec
  // StripeInterfaceExports: The end of the section generated from our OpenAPI spec
  // V1EventExports: The beginning of the section generated from our OpenAPI spec
  // V1EventExports: The end of the section generated from our OpenAPI spec

  // Export Response and other shared classes
  export {
    Response,
    RequestOptions,
    RawRequestOptions,
    ApiList,
    ApiListPromise,
    V2List,
    V2ListPromise,
    ApiSearchResultPromise,
    ApiSearchResult,
    StripeStreamResponse,
    RequestEvent,
    ResponseEvent,
    AppInfo,
    FileData,
  };

  export {
    Metadata,
    MetadataParam,
    Address,
    JapanAddress,
    AddressParam,
    ShippingAddressParam,
    JapanAddressParam,
    RangeQueryParam,
    PaginationParams,
    Emptyable,
  };

  export {
    OAuthResource,
    OAuthToken,
    OAuthTokenParams,
    OAuthAuthorizeUrlOptions,
    OAuthAuthorizeUrlParams,
    OAuthDeauthorization,
    OAuthDeauthorizeParams,
  };

  export type Decimal = import('./shared.js').Decimal;

  export {StripeContext as StripeContextType};
  export {StripeRawError};
  // ErrorTypeNamespaces: The beginning of the section generated from our OpenAPI spec
  export namespace ErrorType {
    export type StripeError = InstanceType<typeof _Error.StripeError>;
    export type StripeCardError = InstanceType<typeof _Error.StripeCardError>;
    export type StripeInvalidRequestError = InstanceType<
      typeof _Error.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<typeof _Error.StripeAPIError>;
    export type StripeAuthenticationError = InstanceType<
      typeof _Error.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof _Error.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof _Error.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof _Error.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof _Error.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof _Error.StripeIdempotencyError
    >;
    export type StripeOAuthError = InstanceType<typeof _Error.StripeOAuthError>;
    export type StripeInvalidGrantError = InstanceType<
      typeof _Error.StripeInvalidGrantError
    >;
    export type StripeInvalidClientError = InstanceType<
      typeof _Error.StripeInvalidClientError
    >;
    export type StripeOAuthInvalidRequestError = InstanceType<
      typeof _Error.StripeOAuthInvalidRequestError
    >;
    export type StripeInvalidScopeError = InstanceType<
      typeof _Error.StripeInvalidScopeError
    >;
    export type StripeUnsupportedGrantTypeError = InstanceType<
      typeof _Error.StripeUnsupportedGrantTypeError
    >;
    export type StripeUnsupportedResponseTypeError = InstanceType<
      typeof _Error.StripeUnsupportedResponseTypeError
    >;
    export type RateLimitError = InstanceType<typeof _Error.RateLimitError>;
    export type TemporarySessionExpiredError = InstanceType<
      typeof _Error.TemporarySessionExpiredError
    >;
  }
  export namespace errors {
    export type StripeError = InstanceType<typeof _Error.StripeError>;
    export type StripeCardError = InstanceType<typeof _Error.StripeCardError>;
    export type StripeInvalidRequestError = InstanceType<
      typeof _Error.StripeInvalidRequestError
    >;
    export type StripeAPIError = InstanceType<typeof _Error.StripeAPIError>;
    export type StripeAuthenticationError = InstanceType<
      typeof _Error.StripeAuthenticationError
    >;
    export type StripePermissionError = InstanceType<
      typeof _Error.StripePermissionError
    >;
    export type StripeRateLimitError = InstanceType<
      typeof _Error.StripeRateLimitError
    >;
    export type StripeConnectionError = InstanceType<
      typeof _Error.StripeConnectionError
    >;
    export type StripeSignatureVerificationError = InstanceType<
      typeof _Error.StripeSignatureVerificationError
    >;
    export type StripeIdempotencyError = InstanceType<
      typeof _Error.StripeIdempotencyError
    >;
    export type StripeOAuthError = InstanceType<typeof _Error.StripeOAuthError>;
    export type StripeInvalidGrantError = InstanceType<
      typeof _Error.StripeInvalidGrantError
    >;
    export type StripeInvalidClientError = InstanceType<
      typeof _Error.StripeInvalidClientError
    >;
    export type StripeOAuthInvalidRequestError = InstanceType<
      typeof _Error.StripeOAuthInvalidRequestError
    >;
    export type StripeInvalidScopeError = InstanceType<
      typeof _Error.StripeInvalidScopeError
    >;
    export type StripeUnsupportedGrantTypeError = InstanceType<
      typeof _Error.StripeUnsupportedGrantTypeError
    >;
    export type StripeUnsupportedResponseTypeError = InstanceType<
      typeof _Error.StripeUnsupportedResponseTypeError
    >;
    export type RateLimitError = InstanceType<typeof _Error.RateLimitError>;
    export type TemporarySessionExpiredError = InstanceType<
      typeof _Error.TemporarySessionExpiredError
    >;
  }
  // ErrorTypeNamespaces: The end of the section generated from our OpenAPI spec
  export import Events = V2.Core.Events;
}

Stripe.initialize(new NodePlatformFunctions());

export default Stripe;
