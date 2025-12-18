import * as _Error from './Error.js';
import { RequestSender } from './RequestSender.js';
import { StripeResource } from './StripeResource.js';
import { StripeContext } from './StripeContext.js';
import { AppInfo, RequestAuthenticator, UserProvidedConfig, RequestData, RequestOptions } from './Types.js';
import { createWebhooks } from './Webhooks.js';
import { CryptoProvider } from './crypto/CryptoProvider.js';
import { HttpClient, HttpClientResponse } from './net/HttpClient.js';
import { PlatformFunctions } from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
type RequestSenderFactory = (stripe: Stripe) => RequestSender;
export declare class Stripe {
    static PACKAGE_VERSION: string;
    static API_VERSION: string;
    static USER_AGENT: {
        bindings_version: string;
        lang: string;
        publisher: string;
        uname: null;
        typescript: boolean;
    };
    static StripeResource: typeof StripeResource;
    static StripeContext: typeof StripeContext;
    static resources: typeof resources;
    static HttpClient: typeof HttpClient;
    static HttpClientResponse: typeof HttpClientResponse;
    static CryptoProvider: typeof CryptoProvider;
    static errors: typeof _Error;
    private static _platformFunctions;
    private static _requestSenderFactory;
    static webhooks: ReturnType<typeof createWebhooks>;
    static createNodeHttpClient: PlatformFunctions['createNodeHttpClient'];
    static createFetchHttpClient: PlatformFunctions['createFetchHttpClient'];
    static createNodeCryptoProvider: PlatformFunctions['createNodeCryptoProvider'];
    static createSubtleCryptoProvider: PlatformFunctions['createSubtleCryptoProvider'];
    _appInfo: any;
    on: any;
    off: any;
    once: any;
    VERSION: string;
    webhooks: ReturnType<typeof createWebhooks>;
    errors: typeof _Error;
    _api: any;
    _prevRequestMetrics: any;
    _emitter: any;
    _enableTelemetry: boolean;
    _requestSender: RequestSender;
    _platformFunctions: PlatformFunctions;
    _authenticator: RequestAuthenticator | null;
    _clientId?: string;
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField<K extends keyof Stripe['_api']>(key: K, value: Stripe['_api'][K]): void;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField<K extends keyof Stripe['_api']>(key: K): Stripe['_api'][K];
    static initialize(platformFunctions: PlatformFunctions, requestSenderFactory?: RequestSenderFactory): void;
    constructor(key: string, config?: Record<string, unknown>);
    rawRequest(method: string, path: string, params?: RequestData, options?: RequestOptions): Promise<any>;
    /**
     * @private
     */
    _setAuthenticator(key: string, authenticator: RequestAuthenticator | null): void;
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(info: AppInfo): void;
    setClientId(clientId: string): void;
    getClientId(): string | undefined;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant(c: string): unknown;
    getMaxNetworkRetries(): number;
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(prop: keyof Stripe['_api'], n: number, defaultVal?: number): void;
    getMaxNetworkRetryDelay(): number;
    getInitialNetworkRetryDelay(): number;
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
    getClientUserAgent(cb: (userAgent: string) => void): void;
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
    getClientUserAgentSeeded(seed: Record<string, string | boolean | null>, cb: (userAgent: string) => void): void;
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getAppInfoAsString(): string;
    getTelemetryEnabled(): boolean;
    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources(): void;
    /**
     * @private
     * This may be removed in the future.
     */
    _getPropsFromConfig(config: Record<string, unknown>): UserProvidedConfig;
    parseEventNotification(payload: string | Uint8Array, header: string | Uint8Array, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number): any;
}
export declare function createStripe(platformFunctions: PlatformFunctions, requestSender?: RequestSenderFactory): typeof Stripe;
export {};
