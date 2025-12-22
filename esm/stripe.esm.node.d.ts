import * as _Error from './Error.js';
import { RequestSender } from './RequestSender.js';
import { StripeResource } from './StripeResource.js';
import { StripeContext } from './StripeContext.js';
import { RequestAuthenticator, UserProvidedConfig, RequestData } from './Types.js';
import { createWebhooks } from './Webhooks.js';
import { CryptoProvider } from './crypto/CryptoProvider.js';
import { HttpClient, HttpClientResponse } from './net/HttpClient.js';
import { PlatformFunctions } from './platform/PlatformFunctions.js';
import * as resources from './resources.js';
import { Response, RequestOptions, RawRequestOptions, ApiList, ApiListPromise, ApiSearchResultPromise, ApiSearchResult, StripeStreamResponse, RequestEvent, ResponseEvent, AppInfo, FileData } from './lib.js';
import { AccountResource } from './resources/Accounts.js';
import { AccountLinkResource } from './resources/AccountLinks.js';
import { AccountSessionResource } from './resources/AccountSessions.js';
import { ApplePayDomainResource } from './resources/ApplePayDomains.js';
import { ApplicationFeeResource } from './resources/ApplicationFees.js';
import { BalanceResource } from './resources/Balance.js';
import { BalanceSettingResource } from './resources/BalanceSettings.js';
import { BalanceTransactionResource } from './resources/BalanceTransactions.js';
import { ChargeResource } from './resources/Charges.js';
import { ConfirmationTokenResource } from './resources/ConfirmationTokens.js';
import { CountrySpecResource } from './resources/CountrySpecs.js';
import { CouponResource } from './resources/Coupons.js';
import { CreditNoteResource } from './resources/CreditNotes.js';
import { CustomerResource, Customer, DeletedCustomer } from './resources/Customers.js';
import { CustomerSessionResource } from './resources/CustomerSessions.js';
import { DisputeResource } from './resources/Disputes.js';
import { EphemeralKeyResource } from './resources/EphemeralKeys.js';
import { EventResource } from './resources/Events.js';
import { ExchangeRateResource } from './resources/ExchangeRates.js';
import { FileResource } from './resources/Files.js';
import { FileLinkResource } from './resources/FileLinks.js';
import { InvoiceResource } from './resources/Invoices.js';
import { InvoiceItemResource } from './resources/InvoiceItems.js';
import { InvoicePaymentResource } from './resources/InvoicePayments.js';
import { InvoiceRenderingTemplateResource } from './resources/InvoiceRenderingTemplates.js';
import { MandateResource } from './resources/Mandates.js';
import { PaymentAttemptRecordResource } from './resources/PaymentAttemptRecords.js';
import { PaymentIntentResource } from './resources/PaymentIntents.js';
import { PaymentLinkResource } from './resources/PaymentLinks.js';
import { PaymentMethodResource } from './resources/PaymentMethods.js';
import { PaymentMethodConfigurationResource } from './resources/PaymentMethodConfigurations.js';
import { PaymentMethodDomainResource } from './resources/PaymentMethodDomains.js';
import { PaymentRecordResource } from './resources/PaymentRecords.js';
import { PayoutResource } from './resources/Payouts.js';
import { PlanResource } from './resources/Plans.js';
import { PriceResource } from './resources/Prices.js';
import { ProductResource } from './resources/Products.js';
import { PromotionCodeResource } from './resources/PromotionCodes.js';
import { QuoteResource } from './resources/Quotes.js';
import { RefundResource } from './resources/Refunds.js';
import { ReviewResource } from './resources/Reviews.js';
import { SetupAttemptResource } from './resources/SetupAttempts.js';
import { SetupIntentResource } from './resources/SetupIntents.js';
import { ShippingRateResource } from './resources/ShippingRates.js';
import { SourceResource } from './resources/Sources.js';
import { SubscriptionResource } from './resources/Subscriptions.js';
import { SubscriptionItemResource } from './resources/SubscriptionItems.js';
import { SubscriptionScheduleResource } from './resources/SubscriptionSchedules.js';
import { TaxCodeResource } from './resources/TaxCodes.js';
import { TaxIdResource } from './resources/TaxIds.js';
import { TaxRateResource } from './resources/TaxRates.js';
import { TokenResource } from './resources/Tokens.js';
import { TopupResource } from './resources/Topups.js';
import { TransferResource } from './resources/Transfers.js';
import { WebhookEndpointResource } from './resources/WebhookEndpoints.js';
import { Apps } from './resources/Apps/index.js';
import { Billing } from './resources/Billing/index.js';
import { BillingPortal } from './resources/BillingPortal/index.js';
import { Checkout } from './resources/Checkout/index.js';
import { Climate } from './resources/Climate/index.js';
import { Entitlements } from './resources/Entitlements/index.js';
import { FinancialConnections } from './resources/FinancialConnections/index.js';
import { Forwarding } from './resources/Forwarding/index.js';
import { Identity } from './resources/Identity/index.js';
import { Issuing } from './resources/Issuing/index.js';
import { Radar } from './resources/Radar/index.js';
import { Reporting } from './resources/Reporting/index.js';
import { Sigma } from './resources/Sigma/index.js';
import { Tax } from './resources/Tax/index.js';
import { Terminal } from './resources/Terminal/index.js';
import { TestHelpers } from './resources/TestHelpers/index.js';
import { Treasury } from './resources/Treasury/index.js';
import { V2 } from './resources/V2/index.js';
import { OAuthResource } from './resources.js';
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
    accountLinks: AccountLinkResource;
    accountSessions: AccountSessionResource;
    accounts: AccountResource;
    applePayDomains: ApplePayDomainResource;
    applicationFees: ApplicationFeeResource;
    balance: BalanceResource;
    balanceSettings: BalanceSettingResource;
    balanceTransactions: BalanceTransactionResource;
    charges: ChargeResource;
    confirmationTokens: ConfirmationTokenResource;
    countrySpecs: CountrySpecResource;
    coupons: CouponResource;
    creditNotes: CreditNoteResource;
    customerSessions: CustomerSessionResource;
    customers: CustomerResource;
    disputes: DisputeResource;
    ephemeralKeys: EphemeralKeyResource;
    events: EventResource;
    exchangeRates: ExchangeRateResource;
    fileLinks: FileLinkResource;
    files: FileResource;
    invoiceItems: InvoiceItemResource;
    invoicePayments: InvoicePaymentResource;
    invoiceRenderingTemplates: InvoiceRenderingTemplateResource;
    invoices: InvoiceResource;
    mandates: MandateResource;
    paymentAttemptRecords: PaymentAttemptRecordResource;
    paymentIntents: PaymentIntentResource;
    paymentLinks: PaymentLinkResource;
    paymentMethodConfigurations: PaymentMethodConfigurationResource;
    paymentMethodDomains: PaymentMethodDomainResource;
    paymentMethods: PaymentMethodResource;
    paymentRecords: PaymentRecordResource;
    payouts: PayoutResource;
    plans: PlanResource;
    prices: PriceResource;
    products: ProductResource;
    promotionCodes: PromotionCodeResource;
    quotes: QuoteResource;
    refunds: RefundResource;
    reviews: ReviewResource;
    setupAttempts: SetupAttemptResource;
    setupIntents: SetupIntentResource;
    shippingRates: ShippingRateResource;
    sources: SourceResource;
    subscriptionItems: SubscriptionItemResource;
    subscriptionSchedules: SubscriptionScheduleResource;
    subscriptions: SubscriptionResource;
    taxCodes: TaxCodeResource;
    taxIds: TaxIdResource;
    taxRates: TaxRateResource;
    tokens: TokenResource;
    topups: TopupResource;
    transfers: TransferResource;
    webhookEndpoints: WebhookEndpointResource;
    apps: Apps;
    billing: Billing;
    billingPortal: BillingPortal;
    checkout: Checkout;
    climate: Climate;
    entitlements: Entitlements;
    financialConnections: FinancialConnections;
    forwarding: Forwarding;
    identity: Identity;
    issuing: Issuing;
    radar: Radar;
    reporting: Reporting;
    sigma: Sigma;
    tax: Tax;
    terminal: Terminal;
    testHelpers: TestHelpers;
    treasury: Treasury;
    v2: V2;
    account: AccountResource;
    oauth: OAuthResource;
    static initialize(platformFunctions: PlatformFunctions, requestSenderFactory?: RequestSenderFactory): void;
    constructor(key: string, config?: Record<string, unknown>);
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
    rawRequest(method: string, path: string, params?: RequestData, options?: RawRequestOptions): Promise<any>;
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
    parseEventNotification(payload: string | Uint8Array, header: string | Uint8Array, secret: string, tolerance?: number, cryptoProvider?: CryptoProvider, receivedAt?: number): any;
}
export declare function createStripe(platformFunctions: PlatformFunctions, requestSender?: RequestSenderFactory): typeof Stripe;
export declare namespace Stripe {
    export { Customer, DeletedCustomer };
    export { Response, RequestOptions, RawRequestOptions, ApiList, ApiListPromise, ApiSearchResultPromise, ApiSearchResult, StripeStreamResponse, RequestEvent, ResponseEvent, AppInfo, FileData, };
}
export default Stripe;
