// File generated from our OpenAPI spec

import {resourceNamespace} from './ResourceNamespace.js';
import {AccountEvaluationResource as RadarAccountEvaluations} from './resources/Radar/AccountEvaluations.js';
import {AccountEvaluationResource as V2CoreAccountEvaluations} from './resources/V2/Core/AccountEvaluations.js';
import {AccountLinkResource as V2CoreAccountLinks} from './resources/V2/Core/AccountLinks.js';
import {AccountTokenResource as V2CoreAccountTokens} from './resources/V2/Core/AccountTokens.js';
import {AccountResource as FinancialConnectionsAccounts} from './resources/FinancialConnections/Accounts.js';
import {AccountResource as V2CoreAccounts} from './resources/V2/Core/Accounts.js';
import {ActiveEntitlementResource as EntitlementsActiveEntitlements} from './resources/Entitlements/ActiveEntitlements.js';
import {ActivityLogResource as V2IamActivityLogs} from './resources/V2/Iam/ActivityLogs.js';
import {AdjustmentResource as V2MoneyManagementAdjustments} from './resources/V2/MoneyManagement/Adjustments.js';
import {AgreementResource as V2OrchestratedCommerceAgreements} from './resources/V2/OrchestratedCommerce/Agreements.js';
import {AlertResource as BillingAlerts} from './resources/Billing/Alerts.js';
import {ApiKeyResource as V2IamApiKeys} from './resources/V2/Iam/ApiKeys.js';
import {ApprovalRequestResource as V2CoreApprovalRequests} from './resources/V2/Core/ApprovalRequests.js';
import {AssociationResource as TaxAssociations} from './resources/Tax/Associations.js';
import {AuthorizationResource as FinancialConnectionsAuthorizations} from './resources/FinancialConnections/Authorizations.js';
import {AuthorizationResource as IssuingAuthorizations} from './resources/Issuing/Authorizations.js';
import {AuthorizationResource as TestHelpersIssuingAuthorizations} from './resources/TestHelpers/Issuing/Authorizations.js';
import {BatchJobResource as V2CoreBatchJobs} from './resources/V2/Core/BatchJobs.js';
import {BillSettingResource as V2BillingBillSettings} from './resources/V2/Billing/BillSettings.js';
import {BlocklistEntryResource as IdentityBlocklistEntries} from './resources/Identity/BlocklistEntries.js';
import {BusinessProfileResource as V2NetworkBusinessProfiles} from './resources/V2/Network/BusinessProfiles.js';
import {CadenceResource as V2BillingCadences} from './resources/V2/Billing/Cadences.js';
import {CalculationResource as TaxCalculations} from './resources/Tax/Calculations.js';
import {CardholderResource as IssuingCardholders} from './resources/Issuing/Cardholders.js';
import {CardResource as IssuingCards} from './resources/Issuing/Cards.js';
import {CardResource as TestHelpersIssuingCards} from './resources/TestHelpers/Issuing/Cards.js';
import {ClaimableSandboxResource as V2CoreClaimableSandboxes} from './resources/V2/Core/ClaimableSandboxes.js';
import {CollectionSettingResource as V2BillingCollectionSettings} from './resources/V2/Billing/CollectionSettings.js';
import {ConfigurationResource as BillingPortalConfigurations} from './resources/BillingPortal/Configurations.js';
import {ConfigurationResource as TerminalConfigurations} from './resources/Terminal/Configurations.js';
import {ConfirmationTokenResource as TestHelpersConfirmationTokens} from './resources/TestHelpers/ConfirmationTokens.js';
import {ConnectionSessionResource as V2CoreConnectionSessions} from './resources/V2/Core/ConnectionSessions.js';
import {ConnectionTokenResource as TerminalConnectionTokens} from './resources/Terminal/ConnectionTokens.js';
import {CreditBalanceSummaryResource as BillingCreditBalanceSummary} from './resources/Billing/CreditBalanceSummary.js';
import {CreditBalanceTransactionResource as BillingCreditBalanceTransactions} from './resources/Billing/CreditBalanceTransactions.js';
import {CreditGrantResource as BillingCreditGrants} from './resources/Billing/CreditGrants.js';
import {CreditReversalResource as TreasuryCreditReversals} from './resources/Treasury/CreditReversals.js';
import {CreditUnderwritingRecordResource as IssuingCreditUnderwritingRecords} from './resources/Issuing/CreditUnderwritingRecords.js';
import {CurrencyConversionResource as V2MoneyManagementCurrencyConversions} from './resources/V2/MoneyManagement/CurrencyConversions.js';
import {CustomPricingUnitResource as V2BillingCustomPricingUnits} from './resources/V2/Billing/CustomPricingUnits.js';
import {CustomerEvaluationResource as RadarCustomerEvaluations} from './resources/Radar/CustomerEvaluations.js';
import {CustomerResource as TestHelpersCustomers} from './resources/TestHelpers/Customers.js';
import {DebitReversalResource as TreasuryDebitReversals} from './resources/Treasury/DebitReversals.js';
import {DisputeSettlementDetailResource as IssuingDisputeSettlementDetails} from './resources/Issuing/DisputeSettlementDetails.js';
import {DisputeResource as IssuingDisputes} from './resources/Issuing/Disputes.js';
import {EarlyFraudWarningResource as RadarEarlyFraudWarnings} from './resources/Radar/EarlyFraudWarnings.js';
import {EventDestinationResource as V2CoreEventDestinations} from './resources/V2/Core/EventDestinations.js';
import {EventResource as V2CoreEvents} from './resources/V2/Core/Events.js';
import {FeatureResource as EntitlementsFeatures} from './resources/Entitlements/Features.js';
import {FinancialAccountResource as TreasuryFinancialAccounts} from './resources/Treasury/FinancialAccounts.js';
import {FinancialAccountResource as V2MoneyManagementFinancialAccounts} from './resources/V2/MoneyManagement/FinancialAccounts.js';
import {FinancialAddressResource as V2MoneyManagementFinancialAddresses} from './resources/V2/MoneyManagement/FinancialAddresses.js';
import {FinancialAddressResource as V2TestHelpersFinancialAddresses} from './resources/V2/TestHelpers/FinancialAddresses.js';
import {FinancingOfferResource as CapitalFinancingOffers} from './resources/Capital/FinancingOffers.js';
import {FinancingOfferResource as TestHelpersCapitalFinancingOffers} from './resources/TestHelpers/Capital/FinancingOffers.js';
import {FinancingSummaryResource as CapitalFinancingSummary} from './resources/Capital/FinancingSummary.js';
import {FinancingTransactionResource as CapitalFinancingTransactions} from './resources/Capital/FinancingTransactions.js';
import {FormResource as TaxForms} from './resources/Tax/Forms.js';
import {FraudLiabilityDebitResource as IssuingFraudLiabilityDebits} from './resources/Issuing/FraudLiabilityDebits.js';
import {GbBankAccountResource as V2CoreVaultGbBankAccounts} from './resources/V2/Core/Vault/GbBankAccounts.js';
import {GrantedTokenResource as SharedPaymentGrantedTokens} from './resources/SharedPayment/GrantedTokens.js';
import {GrantedTokenResource as TestHelpersSharedPaymentGrantedTokens} from './resources/TestHelpers/SharedPayment/GrantedTokens.js';
import {HoldResource as ReserveHolds} from './resources/Reserve/Holds.js';
import {ImportResource as V2CommerceProductCatalogImports} from './resources/V2/Commerce/ProductCatalog/Imports.js';
import {InboundTransferResource as TestHelpersTreasuryInboundTransfers} from './resources/TestHelpers/Treasury/InboundTransfers.js';
import {InboundTransferResource as TreasuryInboundTransfers} from './resources/Treasury/InboundTransfers.js';
import {InboundTransferResource as V2MoneyManagementInboundTransfers} from './resources/V2/MoneyManagement/InboundTransfers.js';
import {InstitutionResource as FinancialConnectionsInstitutions} from './resources/FinancialConnections/Institutions.js';
import {IntentResource as V2BillingIntents} from './resources/V2/Billing/Intents.js';
import {IssuedTokenResource as SharedPaymentIssuedTokens} from './resources/SharedPayment/IssuedTokens.js';
import {IssuingAuthorizationEvaluationResource as RadarIssuingAuthorizationEvaluations} from './resources/Radar/IssuingAuthorizationEvaluations.js';
import {LicenseFeeResource as V2BillingLicenseFees} from './resources/V2/Billing/LicenseFees.js';
import {LicensedItemResource as V2BillingLicensedItems} from './resources/V2/Billing/LicensedItems.js';
import {LocationResource as TaxLocations} from './resources/Tax/Locations.js';
import {LocationResource as TerminalLocations} from './resources/Terminal/Locations.js';
import {ManualRuleResource as V2TaxManualRules} from './resources/V2/Tax/ManualRules.js';
import {MeterEventAdjustmentResource as BillingMeterEventAdjustments} from './resources/Billing/MeterEventAdjustments.js';
import {MeterEventAdjustmentResource as V2BillingMeterEventAdjustments} from './resources/V2/Billing/MeterEventAdjustments.js';
import {MeterEventSessionResource as V2BillingMeterEventSession} from './resources/V2/Billing/MeterEventSession.js';
import {MeterEventStreamResource as V2BillingMeterEventStream} from './resources/V2/Billing/MeterEventStream.js';
import {MeterEventResource as BillingMeterEvents} from './resources/Billing/MeterEvents.js';
import {MeterEventResource as V2BillingMeterEvents} from './resources/V2/Billing/MeterEvents.js';
import {MeterUsageResource as BillingAnalyticsMeterUsage} from './resources/Billing/Analytics/MeterUsage.js';
import {MeteredItemResource as V2BillingMeteredItems} from './resources/V2/Billing/MeteredItems.js';
import {MeterResource as BillingMeters} from './resources/Billing/Meters.js';
import {MetricQueryResource as V2DataAnalyticsMetricQuery} from './resources/V2/Data/Analytics/MetricQuery.js';
import {MoneyManagementResource as V2TestHelpersMoneyManagement} from './resources/V2/TestHelpers/MoneyManagement.js';
import {OffSessionPaymentResource as V2PaymentsOffSessionPayments} from './resources/V2/Payments/OffSessionPayments.js';
import {OnboardingLinkResource as TerminalOnboardingLinks} from './resources/Terminal/OnboardingLinks.js';
import {OneTimeItemResource as V2BillingOneTimeItems} from './resources/V2/Billing/OneTimeItems.js';
import {OrderResource as ClimateOrders} from './resources/Climate/Orders.js';
import {OutboundPaymentQuoteResource as V2MoneyManagementOutboundPaymentQuotes} from './resources/V2/MoneyManagement/OutboundPaymentQuotes.js';
import {OutboundPaymentResource as TestHelpersTreasuryOutboundPayments} from './resources/TestHelpers/Treasury/OutboundPayments.js';
import {OutboundPaymentResource as TreasuryOutboundPayments} from './resources/Treasury/OutboundPayments.js';
import {OutboundPaymentResource as V2MoneyManagementOutboundPayments} from './resources/V2/MoneyManagement/OutboundPayments.js';
import {OutboundSetupIntentResource as V2MoneyManagementOutboundSetupIntents} from './resources/V2/MoneyManagement/OutboundSetupIntents.js';
import {OutboundTransferResource as TestHelpersTreasuryOutboundTransfers} from './resources/TestHelpers/Treasury/OutboundTransfers.js';
import {OutboundTransferResource as TreasuryOutboundTransfers} from './resources/Treasury/OutboundTransfers.js';
import {OutboundTransferResource as V2MoneyManagementOutboundTransfers} from './resources/V2/MoneyManagement/OutboundTransfers.js';
import {PaymentAttemptResource as OrchestrationPaymentAttempts} from './resources/Orchestration/PaymentAttempts.js';
import {PaymentEvaluationResource as RadarPaymentEvaluations} from './resources/Radar/PaymentEvaluations.js';
import {PaymentIntentResource as TestHelpersPaymentIntents} from './resources/TestHelpers/PaymentIntents.js';
import {PayoutMethodResource as V2MoneyManagementPayoutMethods} from './resources/V2/MoneyManagement/PayoutMethods.js';
import {PayoutMethodsBankAccountSpecResource as V2MoneyManagementPayoutMethodsBankAccountSpec} from './resources/V2/MoneyManagement/PayoutMethodsBankAccountSpec.js';
import {PersonalizationDesignResource as IssuingPersonalizationDesigns} from './resources/Issuing/PersonalizationDesigns.js';
import {PersonalizationDesignResource as TestHelpersIssuingPersonalizationDesigns} from './resources/TestHelpers/Issuing/PersonalizationDesigns.js';
import {PhysicalBundleResource as IssuingPhysicalBundles} from './resources/Issuing/PhysicalBundles.js';
import {PlanResource as ReservePlans} from './resources/Reserve/Plans.js';
import {PricingPlanSubscriptionResource as V2BillingPricingPlanSubscriptions} from './resources/V2/Billing/PricingPlanSubscriptions.js';
import {PricingPlanResource as V2BillingPricingPlans} from './resources/V2/Billing/PricingPlans.js';
import {ProductResource as ClimateProducts} from './resources/Climate/Products.js';
import {ProfileResource as V2BillingProfiles} from './resources/V2/Billing/Profiles.js';
import {ProgramResource as IssuingPrograms} from './resources/Issuing/Programs.js';
import {QueryRunResource as V2DataReportingQueryRuns} from './resources/V2/Data/Reporting/QueryRuns.js';
import {RateCardSubscriptionResource as V2BillingRateCardSubscriptions} from './resources/V2/Billing/RateCardSubscriptions.js';
import {RateCardResource as V2BillingRateCards} from './resources/V2/Billing/RateCards.js';
import {ReaderCollectedDatumResource as TerminalReaderCollectedData} from './resources/Terminal/ReaderCollectedData.js';
import {ReaderResource as TerminalReaders} from './resources/Terminal/Readers.js';
import {ReaderResource as TestHelpersTerminalReaders} from './resources/TestHelpers/Terminal/Readers.js';
import {ReceivedCreditResource as TestHelpersTreasuryReceivedCredits} from './resources/TestHelpers/Treasury/ReceivedCredits.js';
import {ReceivedCreditResource as TreasuryReceivedCredits} from './resources/Treasury/ReceivedCredits.js';
import {ReceivedCreditResource as V2MoneyManagementReceivedCredits} from './resources/V2/MoneyManagement/ReceivedCredits.js';
import {ReceivedDebitResource as TestHelpersTreasuryReceivedDebits} from './resources/TestHelpers/Treasury/ReceivedDebits.js';
import {ReceivedDebitResource as TreasuryReceivedDebits} from './resources/Treasury/ReceivedDebits.js';
import {ReceivedDebitResource as V2MoneyManagementReceivedDebits} from './resources/V2/MoneyManagement/ReceivedDebits.js';
import {RecipientVerificationResource as V2MoneyManagementRecipientVerifications} from './resources/V2/MoneyManagement/RecipientVerifications.js';
import {RedactionJobResource as PrivacyRedactionJobs} from './resources/Privacy/RedactionJobs.js';
import {RefundResource as TestHelpersRefunds} from './resources/TestHelpers/Refunds.js';
import {RegistrationResource as TaxRegistrations} from './resources/Tax/Registrations.js';
import {ReleaseResource as ReserveReleases} from './resources/Reserve/Releases.js';
import {ReportRunResource as ReportingReportRuns} from './resources/Reporting/ReportRuns.js';
import {ReportRunResource as V2ReportingReportRuns} from './resources/V2/Reporting/ReportRuns.js';
import {ReportTypeResource as ReportingReportTypes} from './resources/Reporting/ReportTypes.js';
import {ReportResource as V2ReportingReports} from './resources/V2/Reporting/Reports.js';
import {RequestedSessionResource as DelegatedCheckoutRequestedSessions} from './resources/DelegatedCheckout/RequestedSessions.js';
import {RequestResource as ForwardingRequests} from './resources/Forwarding/Requests.js';
import {ScheduledQueryRunResource as SigmaScheduledQueryRuns} from './resources/Sigma/ScheduledQueryRuns.js';
import {SecretResource as AppsSecrets} from './resources/Apps/Secrets.js';
import {ServiceActionResource as V2BillingServiceActions} from './resources/V2/Billing/ServiceActions.js';
import {SessionResource as BillingPortalSessions} from './resources/BillingPortal/Sessions.js';
import {SessionResource as CheckoutSessions} from './resources/Checkout/Sessions.js';
import {SessionResource as FinancialConnectionsSessions} from './resources/FinancialConnections/Sessions.js';
import {SettingResource as TaxSettings} from './resources/Tax/Settings.js';
import {SettlementAllocationIntentResource as V2PaymentsSettlementAllocationIntents} from './resources/V2/Payments/SettlementAllocationIntents.js';
import {SupplierResource as ClimateSuppliers} from './resources/Climate/Suppliers.js';
import {TestClockResource as TestHelpersTestClocks} from './resources/TestHelpers/TestClocks.js';
import {TokenResource as IssuingTokens} from './resources/Issuing/Tokens.js';
import {TransactionEntryResource as TreasuryTransactionEntries} from './resources/Treasury/TransactionEntries.js';
import {TransactionEntryResource as V2MoneyManagementTransactionEntries} from './resources/V2/MoneyManagement/TransactionEntries.js';
import {TransactionResource as FinancialConnectionsTransactions} from './resources/FinancialConnections/Transactions.js';
import {TransactionResource as IssuingTransactions} from './resources/Issuing/Transactions.js';
import {TransactionResource as TaxTransactions} from './resources/Tax/Transactions.js';
import {TransactionResource as TestHelpersIssuingTransactions} from './resources/TestHelpers/Issuing/Transactions.js';
import {TransactionResource as TreasuryTransactions} from './resources/Treasury/Transactions.js';
import {TransactionResource as V2MoneyManagementTransactions} from './resources/V2/MoneyManagement/Transactions.js';
import {TrialOfferResource as ProductCatalogTrialOffers} from './resources/ProductCatalog/TrialOffers.js';
import {UsBankAccountResource as V2CoreVaultUsBankAccounts} from './resources/V2/Core/Vault/UsBankAccounts.js';
import {ValueListItemResource as RadarValueListItems} from './resources/Radar/ValueListItems.js';
import {ValueListResource as RadarValueLists} from './resources/Radar/ValueLists.js';
import {VerificationReportResource as IdentityVerificationReports} from './resources/Identity/VerificationReports.js';
import {VerificationSessionResource as IdentityVerificationSessions} from './resources/Identity/VerificationSessions.js';
import {WorkflowRunResource as V2ExtendWorkflowRuns} from './resources/V2/Extend/WorkflowRuns.js';
import {WorkflowResource as V2ExtendWorkflows} from './resources/V2/Extend/Workflows.js';
export {AccountResource as Account} from './resources/Accounts.js';
export {AccountResource as Accounts} from './resources/Accounts.js';
export {AccountLinkResource as AccountLinks} from './resources/AccountLinks.js';
export {AccountNoticeResource as AccountNotices} from './resources/AccountNotices.js';
export {AccountSessionResource as AccountSessions} from './resources/AccountSessions.js';
export {ApplePayDomainResource as ApplePayDomains} from './resources/ApplePayDomains.js';
export {ApplicationFeeResource as ApplicationFees} from './resources/ApplicationFees.js';
export {BalanceResource as Balance} from './resources/Balance.js';
export {BalanceResource as Balances} from './resources/Balance.js';
export {BalanceSettingResource as BalanceSettings} from './resources/BalanceSettings.js';
export {BalanceTransactionResource as BalanceTransactions} from './resources/BalanceTransactions.js';
export {BalanceTransferResource as BalanceTransfers} from './resources/BalanceTransfers.js';
export {ChargeResource as Charges} from './resources/Charges.js';
export {ConfirmationTokenResource as ConfirmationTokens} from './resources/ConfirmationTokens.js';
export {CountrySpecResource as CountrySpecs} from './resources/CountrySpecs.js';
export {CouponResource as Coupons} from './resources/Coupons.js';
export {CreditNoteResource as CreditNotes} from './resources/CreditNotes.js';
export {CustomerResource as Customers} from './resources/Customers.js';
export {CustomerSessionResource as CustomerSessions} from './resources/CustomerSessions.js';
export {DisputeResource as Disputes} from './resources/Disputes.js';
export {EphemeralKeyResource as EphemeralKeys} from './resources/EphemeralKeys.js';
export {EventResource as Events} from './resources/Events.js';
export {ExchangeRateResource as ExchangeRates} from './resources/ExchangeRates.js';
export {ExternalAccountResource as ExternalAccounts} from './resources/ExternalAccounts.js';
export {FileResource as Files} from './resources/Files.js';
export {FileLinkResource as FileLinks} from './resources/FileLinks.js';
export {FrMealVouchersOnboardingResource as FrMealVouchersOnboardings} from './resources/FrMealVouchersOnboardings.js';
export {FxQuoteResource as FxQuotes} from './resources/FxQuotes.js';
export {InvoiceResource as Invoices} from './resources/Invoices.js';
export {InvoiceItemResource as InvoiceItems} from './resources/InvoiceItems.js';
export {InvoicePaymentResource as InvoicePayments} from './resources/InvoicePayments.js';
export {InvoiceRenderingTemplateResource as InvoiceRenderingTemplates} from './resources/InvoiceRenderingTemplates.js';
export {MandateResource as Mandates} from './resources/Mandates.js';
export {MarginResource as Margins} from './resources/Margins.js';
export {OAuthResource} from './resources/OAuth.js';
export {OrderResource as Orders} from './resources/Orders.js';
export {PaymentAttemptRecordResource as PaymentAttemptRecords} from './resources/PaymentAttemptRecords.js';
export {PaymentIntentResource as PaymentIntents} from './resources/PaymentIntents.js';
export {PaymentLinkResource as PaymentLinks} from './resources/PaymentLinks.js';
export {PaymentMethodResource as PaymentMethods} from './resources/PaymentMethods.js';
export {PaymentMethodConfigurationResource as PaymentMethodConfigurations} from './resources/PaymentMethodConfigurations.js';
export {PaymentMethodDomainResource as PaymentMethodDomains} from './resources/PaymentMethodDomains.js';
export {PaymentRecordResource as PaymentRecords} from './resources/PaymentRecords.js';
export {PayoutResource as Payouts} from './resources/Payouts.js';
export {PlanResource as Plans} from './resources/Plans.js';
export {PriceResource as Prices} from './resources/Prices.js';
export {ProductResource as Products} from './resources/Products.js';
export {PromotionCodeResource as PromotionCodes} from './resources/PromotionCodes.js';
export {QuoteResource as Quotes} from './resources/Quotes.js';
export {RefundResource as Refunds} from './resources/Refunds.js';
export {ReviewResource as Reviews} from './resources/Reviews.js';
export {SetupAttemptResource as SetupAttempts} from './resources/SetupAttempts.js';
export {SetupIntentResource as SetupIntents} from './resources/SetupIntents.js';
export {ShippingRateResource as ShippingRates} from './resources/ShippingRates.js';
export {SourceResource as Sources} from './resources/Sources.js';
export {SubscriptionResource as Subscriptions} from './resources/Subscriptions.js';
export {SubscriptionItemResource as SubscriptionItems} from './resources/SubscriptionItems.js';
export {SubscriptionScheduleResource as SubscriptionSchedules} from './resources/SubscriptionSchedules.js';
export {TaxCodeResource as TaxCodes} from './resources/TaxCodes.js';
export {TaxIdResource as TaxIds} from './resources/TaxIds.js';
export {TaxRateResource as TaxRates} from './resources/TaxRates.js';
export {TokenResource as Tokens} from './resources/Tokens.js';
export {TopupResource as Topups} from './resources/Topups.js';
export {TransferResource as Transfers} from './resources/Transfers.js';
export {WebhookEndpointResource as WebhookEndpoints} from './resources/WebhookEndpoints.js';
export const Apps = resourceNamespace('apps', {Secrets: AppsSecrets});
export const Billing = resourceNamespace('billing', {
  Alerts: BillingAlerts,
  CreditBalanceSummary: BillingCreditBalanceSummary,
  CreditBalanceTransactions: BillingCreditBalanceTransactions,
  CreditGrants: BillingCreditGrants,
  MeterEventAdjustments: BillingMeterEventAdjustments,
  MeterEvents: BillingMeterEvents,
  Meters: BillingMeters,
  Analytics: resourceNamespace('analytics', {
    MeterUsage: BillingAnalyticsMeterUsage,
  }),
});
export const BillingPortal = resourceNamespace('billingPortal', {
  Configurations: BillingPortalConfigurations,
  Sessions: BillingPortalSessions,
});
export const Capital = resourceNamespace('capital', {
  FinancingOffers: CapitalFinancingOffers,
  FinancingSummary: CapitalFinancingSummary,
  FinancingTransactions: CapitalFinancingTransactions,
});
export const Checkout = resourceNamespace('checkout', {
  Sessions: CheckoutSessions,
});
export const Climate = resourceNamespace('climate', {
  Orders: ClimateOrders,
  Products: ClimateProducts,
  Suppliers: ClimateSuppliers,
});
export const DelegatedCheckout = resourceNamespace('delegatedCheckout', {
  RequestedSessions: DelegatedCheckoutRequestedSessions,
});
export const Entitlements = resourceNamespace('entitlements', {
  ActiveEntitlements: EntitlementsActiveEntitlements,
  Features: EntitlementsFeatures,
});
export const FinancialConnections = resourceNamespace('financialConnections', {
  Accounts: FinancialConnectionsAccounts,
  Authorizations: FinancialConnectionsAuthorizations,
  Institutions: FinancialConnectionsInstitutions,
  Sessions: FinancialConnectionsSessions,
  Transactions: FinancialConnectionsTransactions,
});
export const Forwarding = resourceNamespace('forwarding', {
  Requests: ForwardingRequests,
});
export const Identity = resourceNamespace('identity', {
  BlocklistEntries: IdentityBlocklistEntries,
  VerificationReports: IdentityVerificationReports,
  VerificationSessions: IdentityVerificationSessions,
});
export const Issuing = resourceNamespace('issuing', {
  Authorizations: IssuingAuthorizations,
  Cardholders: IssuingCardholders,
  Cards: IssuingCards,
  CreditUnderwritingRecords: IssuingCreditUnderwritingRecords,
  DisputeSettlementDetails: IssuingDisputeSettlementDetails,
  Disputes: IssuingDisputes,
  FraudLiabilityDebits: IssuingFraudLiabilityDebits,
  PersonalizationDesigns: IssuingPersonalizationDesigns,
  PhysicalBundles: IssuingPhysicalBundles,
  Programs: IssuingPrograms,
  Tokens: IssuingTokens,
  Transactions: IssuingTransactions,
});
export const Orchestration = resourceNamespace('orchestration', {
  PaymentAttempts: OrchestrationPaymentAttempts,
});
export const Privacy = resourceNamespace('privacy', {
  RedactionJobs: PrivacyRedactionJobs,
});
export const ProductCatalog = resourceNamespace('productCatalog', {
  TrialOffers: ProductCatalogTrialOffers,
});
export const Radar = resourceNamespace('radar', {
  AccountEvaluations: RadarAccountEvaluations,
  CustomerEvaluations: RadarCustomerEvaluations,
  EarlyFraudWarnings: RadarEarlyFraudWarnings,
  IssuingAuthorizationEvaluations: RadarIssuingAuthorizationEvaluations,
  PaymentEvaluations: RadarPaymentEvaluations,
  ValueListItems: RadarValueListItems,
  ValueLists: RadarValueLists,
});
export const Reporting = resourceNamespace('reporting', {
  ReportRuns: ReportingReportRuns,
  ReportTypes: ReportingReportTypes,
});
export const Reserve = resourceNamespace('reserve', {
  Holds: ReserveHolds,
  Plans: ReservePlans,
  Releases: ReserveReleases,
});
export const SharedPayment = resourceNamespace('sharedPayment', {
  GrantedTokens: SharedPaymentGrantedTokens,
  IssuedTokens: SharedPaymentIssuedTokens,
});
export const Sigma = resourceNamespace('sigma', {
  ScheduledQueryRuns: SigmaScheduledQueryRuns,
});
export const Tax = resourceNamespace('tax', {
  Associations: TaxAssociations,
  Calculations: TaxCalculations,
  Forms: TaxForms,
  Locations: TaxLocations,
  Registrations: TaxRegistrations,
  Settings: TaxSettings,
  Transactions: TaxTransactions,
});
export const Terminal = resourceNamespace('terminal', {
  Configurations: TerminalConfigurations,
  ConnectionTokens: TerminalConnectionTokens,
  Locations: TerminalLocations,
  OnboardingLinks: TerminalOnboardingLinks,
  ReaderCollectedData: TerminalReaderCollectedData,
  Readers: TerminalReaders,
});
export const TestHelpers = resourceNamespace('testHelpers', {
  ConfirmationTokens: TestHelpersConfirmationTokens,
  Customers: TestHelpersCustomers,
  PaymentIntents: TestHelpersPaymentIntents,
  Refunds: TestHelpersRefunds,
  TestClocks: TestHelpersTestClocks,
  Capital: resourceNamespace('capital', {
    FinancingOffers: TestHelpersCapitalFinancingOffers,
  }),
  Issuing: resourceNamespace('issuing', {
    Authorizations: TestHelpersIssuingAuthorizations,
    Cards: TestHelpersIssuingCards,
    PersonalizationDesigns: TestHelpersIssuingPersonalizationDesigns,
    Transactions: TestHelpersIssuingTransactions,
  }),
  SharedPayment: resourceNamespace('sharedPayment', {
    GrantedTokens: TestHelpersSharedPaymentGrantedTokens,
  }),
  Terminal: resourceNamespace('terminal', {
    Readers: TestHelpersTerminalReaders,
  }),
  Treasury: resourceNamespace('treasury', {
    InboundTransfers: TestHelpersTreasuryInboundTransfers,
    OutboundPayments: TestHelpersTreasuryOutboundPayments,
    OutboundTransfers: TestHelpersTreasuryOutboundTransfers,
    ReceivedCredits: TestHelpersTreasuryReceivedCredits,
    ReceivedDebits: TestHelpersTreasuryReceivedDebits,
  }),
});
export const Treasury = resourceNamespace('treasury', {
  CreditReversals: TreasuryCreditReversals,
  DebitReversals: TreasuryDebitReversals,
  FinancialAccounts: TreasuryFinancialAccounts,
  InboundTransfers: TreasuryInboundTransfers,
  OutboundPayments: TreasuryOutboundPayments,
  OutboundTransfers: TreasuryOutboundTransfers,
  ReceivedCredits: TreasuryReceivedCredits,
  ReceivedDebits: TreasuryReceivedDebits,
  TransactionEntries: TreasuryTransactionEntries,
  Transactions: TreasuryTransactions,
});
export const V2 = resourceNamespace('v2', {
  Billing: resourceNamespace('billing', {
    BillSettings: V2BillingBillSettings,
    Cadences: V2BillingCadences,
    CollectionSettings: V2BillingCollectionSettings,
    CustomPricingUnits: V2BillingCustomPricingUnits,
    Intents: V2BillingIntents,
    LicenseFees: V2BillingLicenseFees,
    LicensedItems: V2BillingLicensedItems,
    MeterEventAdjustments: V2BillingMeterEventAdjustments,
    MeterEventSession: V2BillingMeterEventSession,
    MeterEventStream: V2BillingMeterEventStream,
    MeterEvents: V2BillingMeterEvents,
    MeteredItems: V2BillingMeteredItems,
    OneTimeItems: V2BillingOneTimeItems,
    PricingPlanSubscriptions: V2BillingPricingPlanSubscriptions,
    PricingPlans: V2BillingPricingPlans,
    Profiles: V2BillingProfiles,
    RateCardSubscriptions: V2BillingRateCardSubscriptions,
    RateCards: V2BillingRateCards,
    ServiceActions: V2BillingServiceActions,
  }),
  Commerce: resourceNamespace('commerce', {
    ProductCatalog: resourceNamespace('productCatalog', {
      Imports: V2CommerceProductCatalogImports,
    }),
  }),
  Core: resourceNamespace('core', {
    AccountEvaluations: V2CoreAccountEvaluations,
    AccountLinks: V2CoreAccountLinks,
    AccountTokens: V2CoreAccountTokens,
    Accounts: V2CoreAccounts,
    ApprovalRequests: V2CoreApprovalRequests,
    BatchJobs: V2CoreBatchJobs,
    ClaimableSandboxes: V2CoreClaimableSandboxes,
    ConnectionSessions: V2CoreConnectionSessions,
    EventDestinations: V2CoreEventDestinations,
    Events: V2CoreEvents,
    Vault: resourceNamespace('vault', {
      GbBankAccounts: V2CoreVaultGbBankAccounts,
      UsBankAccounts: V2CoreVaultUsBankAccounts,
    }),
  }),
  Data: resourceNamespace('data', {
    Analytics: resourceNamespace('analytics', {
      MetricQuery: V2DataAnalyticsMetricQuery,
    }),
    Reporting: resourceNamespace('reporting', {
      QueryRuns: V2DataReportingQueryRuns,
    }),
  }),
  Extend: resourceNamespace('extend', {
    WorkflowRuns: V2ExtendWorkflowRuns,
    Workflows: V2ExtendWorkflows,
  }),
  Iam: resourceNamespace('iam', {
    ActivityLogs: V2IamActivityLogs,
    ApiKeys: V2IamApiKeys,
  }),
  MoneyManagement: resourceNamespace('moneyManagement', {
    Adjustments: V2MoneyManagementAdjustments,
    CurrencyConversions: V2MoneyManagementCurrencyConversions,
    FinancialAccounts: V2MoneyManagementFinancialAccounts,
    FinancialAddresses: V2MoneyManagementFinancialAddresses,
    InboundTransfers: V2MoneyManagementInboundTransfers,
    OutboundPaymentQuotes: V2MoneyManagementOutboundPaymentQuotes,
    OutboundPayments: V2MoneyManagementOutboundPayments,
    OutboundSetupIntents: V2MoneyManagementOutboundSetupIntents,
    OutboundTransfers: V2MoneyManagementOutboundTransfers,
    PayoutMethods: V2MoneyManagementPayoutMethods,
    PayoutMethodsBankAccountSpec: V2MoneyManagementPayoutMethodsBankAccountSpec,
    ReceivedCredits: V2MoneyManagementReceivedCredits,
    ReceivedDebits: V2MoneyManagementReceivedDebits,
    RecipientVerifications: V2MoneyManagementRecipientVerifications,
    TransactionEntries: V2MoneyManagementTransactionEntries,
    Transactions: V2MoneyManagementTransactions,
  }),
  Network: resourceNamespace('network', {
    BusinessProfiles: V2NetworkBusinessProfiles,
  }),
  OrchestratedCommerce: resourceNamespace('orchestratedCommerce', {
    Agreements: V2OrchestratedCommerceAgreements,
  }),
  Payments: resourceNamespace('payments', {
    OffSessionPayments: V2PaymentsOffSessionPayments,
    SettlementAllocationIntents: V2PaymentsSettlementAllocationIntents,
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: V2ReportingReportRuns,
    Reports: V2ReportingReports,
  }),
  Tax: resourceNamespace('tax', {ManualRules: V2TaxManualRules}),
  TestHelpers: resourceNamespace('testHelpers', {
    FinancialAddresses: V2TestHelpersFinancialAddresses,
    MoneyManagement: V2TestHelpersMoneyManagement,
  }),
});
