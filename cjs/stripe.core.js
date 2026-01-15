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
// StripeInstanceImports: The beginning of the section generated from our OpenAPI spec
const Accounts_js_1 = require("./resources/Accounts.js");
const AccountLinks_js_1 = require("./resources/AccountLinks.js");
const AccountSessions_js_1 = require("./resources/AccountSessions.js");
const ApplePayDomains_js_1 = require("./resources/ApplePayDomains.js");
const ApplicationFees_js_1 = require("./resources/ApplicationFees.js");
const Balance_js_1 = require("./resources/Balance.js");
const BalanceSettings_js_1 = require("./resources/BalanceSettings.js");
const BalanceTransactions_js_1 = require("./resources/BalanceTransactions.js");
const Charges_js_1 = require("./resources/Charges.js");
const ConfirmationTokens_js_1 = require("./resources/ConfirmationTokens.js");
const CountrySpecs_js_1 = require("./resources/CountrySpecs.js");
const Coupons_js_1 = require("./resources/Coupons.js");
const CreditNotes_js_1 = require("./resources/CreditNotes.js");
const Customers_js_1 = require("./resources/Customers.js");
const CustomerSessions_js_1 = require("./resources/CustomerSessions.js");
const Disputes_js_1 = require("./resources/Disputes.js");
const EphemeralKeys_js_1 = require("./resources/EphemeralKeys.js");
const ExchangeRates_js_1 = require("./resources/ExchangeRates.js");
const Files_js_1 = require("./resources/Files.js");
const FileLinks_js_1 = require("./resources/FileLinks.js");
const Invoices_js_1 = require("./resources/Invoices.js");
const InvoiceItems_js_1 = require("./resources/InvoiceItems.js");
const InvoicePayments_js_1 = require("./resources/InvoicePayments.js");
const InvoiceRenderingTemplates_js_1 = require("./resources/InvoiceRenderingTemplates.js");
const Mandates_js_1 = require("./resources/Mandates.js");
const PaymentAttemptRecords_js_1 = require("./resources/PaymentAttemptRecords.js");
const PaymentIntents_js_1 = require("./resources/PaymentIntents.js");
const PaymentLinks_js_1 = require("./resources/PaymentLinks.js");
const PaymentMethods_js_1 = require("./resources/PaymentMethods.js");
const PaymentMethodConfigurations_js_1 = require("./resources/PaymentMethodConfigurations.js");
const PaymentMethodDomains_js_1 = require("./resources/PaymentMethodDomains.js");
const PaymentRecords_js_1 = require("./resources/PaymentRecords.js");
const Payouts_js_1 = require("./resources/Payouts.js");
const Plans_js_1 = require("./resources/Plans.js");
const Prices_js_1 = require("./resources/Prices.js");
const Products_js_1 = require("./resources/Products.js");
const PromotionCodes_js_1 = require("./resources/PromotionCodes.js");
const Quotes_js_1 = require("./resources/Quotes.js");
const Refunds_js_1 = require("./resources/Refunds.js");
const Reviews_js_1 = require("./resources/Reviews.js");
const SetupAttempts_js_1 = require("./resources/SetupAttempts.js");
const SetupIntents_js_1 = require("./resources/SetupIntents.js");
const ShippingRates_js_1 = require("./resources/ShippingRates.js");
const Sources_js_1 = require("./resources/Sources.js");
const Subscriptions_js_1 = require("./resources/Subscriptions.js");
const SubscriptionItems_js_1 = require("./resources/SubscriptionItems.js");
const SubscriptionSchedules_js_1 = require("./resources/SubscriptionSchedules.js");
const TaxCodes_js_1 = require("./resources/TaxCodes.js");
const TaxIds_js_1 = require("./resources/TaxIds.js");
const TaxRates_js_1 = require("./resources/TaxRates.js");
const Tokens_js_1 = require("./resources/Tokens.js");
const Topups_js_1 = require("./resources/Topups.js");
const Transfers_js_1 = require("./resources/Transfers.js");
const WebhookEndpoints_js_1 = require("./resources/WebhookEndpoints.js");
const index_js_1 = require("./resources/Apps/index.js");
const index_js_2 = require("./resources/Billing/index.js");
const index_js_3 = require("./resources/BillingPortal/index.js");
const index_js_4 = require("./resources/Checkout/index.js");
const index_js_5 = require("./resources/Climate/index.js");
const index_js_6 = require("./resources/Entitlements/index.js");
const index_js_7 = require("./resources/FinancialConnections/index.js");
const index_js_8 = require("./resources/Forwarding/index.js");
const index_js_9 = require("./resources/Identity/index.js");
const index_js_10 = require("./resources/Issuing/index.js");
const index_js_11 = require("./resources/Radar/index.js");
const index_js_12 = require("./resources/Reporting/index.js");
const index_js_13 = require("./resources/Sigma/index.js");
const index_js_14 = require("./resources/Tax/index.js");
const index_js_15 = require("./resources/Terminal/index.js");
const index_js_16 = require("./resources/TestHelpers/index.js");
const index_js_17 = require("./resources/Treasury/index.js");
const index_js_18 = require("./resources/V2/index.js");
// StripeInstanceImports: The end of the section generated from our OpenAPI spec
// V1EventImports: The beginning of the section generated from our OpenAPI spec
const Events_js_1 = require("./resources/Events.js");
// V1EventImports: The end of the section generated from our OpenAPI spec
const resources_js_1 = require("./resources.js");
const DEFAULT_HOST = 'api.stripe.com';
const DEFAULT_PORT = '443';
const DEFAULT_BASE_PATH = '/v1/';
const DEFAULT_API_VERSION = apiVersion_js_1.ApiVersion;
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 5;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = [
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
    'appInfo',
    'stripeAccount',
    'stripeContext',
];
const defaultRequestSenderFactory = (stripe) => new RequestSender_js_1.RequestSender(stripe, StripeResource_js_1.StripeResource.MAX_BUFFERED_REQUEST_METRICS);
class Stripe {
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
        this._setAuthenticator(key, props.authenticator || null);
        this.errors = _Error;
        this.webhooks = Stripe.webhooks;
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = Stripe._requestSenderFactory(this);
        // // Expose StripeResource on the instance too
        // // @ts-ignore
        // this.StripeResource = Stripe.StripeResource;
        // StripeInitInstanceVariables: The beginning of the section generated from our OpenAPI spec
        this.accountLinks = new AccountLinks_js_1.AccountLinkResource(this);
        this.accountSessions = new AccountSessions_js_1.AccountSessionResource(this);
        this.accounts = new Accounts_js_1.AccountResource(this);
        this.applePayDomains = new ApplePayDomains_js_1.ApplePayDomainResource(this);
        this.applicationFees = new ApplicationFees_js_1.ApplicationFeeResource(this);
        this.balance = new Balance_js_1.BalanceResource(this);
        this.balanceSettings = new BalanceSettings_js_1.BalanceSettingResource(this);
        this.balanceTransactions = new BalanceTransactions_js_1.BalanceTransactionResource(this);
        this.charges = new Charges_js_1.ChargeResource(this);
        this.confirmationTokens = new ConfirmationTokens_js_1.ConfirmationTokenResource(this);
        this.countrySpecs = new CountrySpecs_js_1.CountrySpecResource(this);
        this.coupons = new Coupons_js_1.CouponResource(this);
        this.creditNotes = new CreditNotes_js_1.CreditNoteResource(this);
        this.customerSessions = new CustomerSessions_js_1.CustomerSessionResource(this);
        this.customers = new Customers_js_1.CustomerResource(this);
        this.disputes = new Disputes_js_1.DisputeResource(this);
        this.ephemeralKeys = new EphemeralKeys_js_1.EphemeralKeyResource(this);
        this.events = new Events_js_1.EventResource(this);
        this.exchangeRates = new ExchangeRates_js_1.ExchangeRateResource(this);
        this.fileLinks = new FileLinks_js_1.FileLinkResource(this);
        this.files = new Files_js_1.FileResource(this);
        this.invoiceItems = new InvoiceItems_js_1.InvoiceItemResource(this);
        this.invoicePayments = new InvoicePayments_js_1.InvoicePaymentResource(this);
        this.invoiceRenderingTemplates = new InvoiceRenderingTemplates_js_1.InvoiceRenderingTemplateResource(this);
        this.invoices = new Invoices_js_1.InvoiceResource(this);
        this.mandates = new Mandates_js_1.MandateResource(this);
        this.paymentAttemptRecords = new PaymentAttemptRecords_js_1.PaymentAttemptRecordResource(this);
        this.paymentIntents = new PaymentIntents_js_1.PaymentIntentResource(this);
        this.paymentLinks = new PaymentLinks_js_1.PaymentLinkResource(this);
        this.paymentMethodConfigurations = new PaymentMethodConfigurations_js_1.PaymentMethodConfigurationResource(this);
        this.paymentMethodDomains = new PaymentMethodDomains_js_1.PaymentMethodDomainResource(this);
        this.paymentMethods = new PaymentMethods_js_1.PaymentMethodResource(this);
        this.paymentRecords = new PaymentRecords_js_1.PaymentRecordResource(this);
        this.payouts = new Payouts_js_1.PayoutResource(this);
        this.plans = new Plans_js_1.PlanResource(this);
        this.prices = new Prices_js_1.PriceResource(this);
        this.products = new Products_js_1.ProductResource(this);
        this.promotionCodes = new PromotionCodes_js_1.PromotionCodeResource(this);
        this.quotes = new Quotes_js_1.QuoteResource(this);
        this.refunds = new Refunds_js_1.RefundResource(this);
        this.reviews = new Reviews_js_1.ReviewResource(this);
        this.setupAttempts = new SetupAttempts_js_1.SetupAttemptResource(this);
        this.setupIntents = new SetupIntents_js_1.SetupIntentResource(this);
        this.shippingRates = new ShippingRates_js_1.ShippingRateResource(this);
        this.sources = new Sources_js_1.SourceResource(this);
        this.subscriptionItems = new SubscriptionItems_js_1.SubscriptionItemResource(this);
        this.subscriptionSchedules = new SubscriptionSchedules_js_1.SubscriptionScheduleResource(this);
        this.subscriptions = new Subscriptions_js_1.SubscriptionResource(this);
        this.taxCodes = new TaxCodes_js_1.TaxCodeResource(this);
        this.taxIds = new TaxIds_js_1.TaxIdResource(this);
        this.taxRates = new TaxRates_js_1.TaxRateResource(this);
        this.tokens = new Tokens_js_1.TokenResource(this);
        this.topups = new Topups_js_1.TopupResource(this);
        this.transfers = new Transfers_js_1.TransferResource(this);
        this.webhookEndpoints = new WebhookEndpoints_js_1.WebhookEndpointResource(this);
        this.apps = new index_js_1.Apps(this);
        this.billing = new index_js_2.Billing(this);
        this.billingPortal = new index_js_3.BillingPortal(this);
        this.checkout = new index_js_4.Checkout(this);
        this.climate = new index_js_5.Climate(this);
        this.entitlements = new index_js_6.Entitlements(this);
        this.financialConnections = new index_js_7.FinancialConnections(this);
        this.forwarding = new index_js_8.Forwarding(this);
        this.identity = new index_js_9.Identity(this);
        this.issuing = new index_js_10.Issuing(this);
        this.radar = new index_js_11.Radar(this);
        this.reporting = new index_js_12.Reporting(this);
        this.sigma = new index_js_13.Sigma(this);
        this.tax = new index_js_14.Tax(this);
        this.terminal = new index_js_15.Terminal(this);
        this.testHelpers = new index_js_16.TestHelpers(this);
        this.treasury = new index_js_17.Treasury(this);
        this.v2 = new index_js_18.V2(this);
        // StripeInitInstanceVariables: The end of the section generated from our OpenAPI spec
        // hardcoded properties and resources
        // account property is added for backward compatibility
        this.account = this.accounts;
        this.oauth = new resources_js_1.OAuthResource(this);
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
Stripe.PACKAGE_VERSION = '20.1.2';
Stripe.API_VERSION = apiVersion_js_1.ApiVersion;
Stripe.USER_AGENT = Object.assign({ bindings_version: Stripe.PACKAGE_VERSION, lang: 'node', publisher: 'stripe', uname: null, typescript: false }, (0, utils_js_1.determineProcessUserAgentProperties)());
Stripe.StripeResource = StripeResource_js_1.StripeResource;
Stripe.resources = resources;
Stripe.HttpClient = HttpClient_js_1.HttpClient;
Stripe.HttpClientResponse = HttpClient_js_1.HttpClientResponse;
Stripe.CryptoProvider = CryptoProvider_js_1.CryptoProvider;
Stripe._requestSenderFactory = defaultRequestSenderFactory;
// For backward compatibility, export createStripe as a factory function
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    // Initialize static properties
    Stripe.initialize(platformFunctions, requestSender);
    return Stripe;
}
exports.createStripe = createStripe;
//# sourceMappingURL=stripe.core.js.map