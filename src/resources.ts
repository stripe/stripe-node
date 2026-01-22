// File generated from our OpenAPI spec

import {resourceNamespace} from './ResourceNamespace.js';
import {AccountEvaluations as RadarAccountEvaluations} from './resources/Radar/AccountEvaluations.js';
import {AccountLinks as V2CoreAccountLinks} from './resources/V2/Core/AccountLinks.js';
import {AccountTokens as V2CoreAccountTokens} from './resources/V2/Core/AccountTokens.js';
import {Accounts as FinancialConnectionsAccounts} from './resources/FinancialConnections/Accounts.js';
import {Accounts as V2CoreAccounts} from './resources/V2/Core/Accounts.js';
import {ActiveEntitlements as EntitlementsActiveEntitlements} from './resources/Entitlements/ActiveEntitlements.js';
import {Adjustments as V2MoneyManagementAdjustments} from './resources/V2/MoneyManagement/Adjustments.js';
import {Alerts as BillingAlerts} from './resources/Billing/Alerts.js';
import {ApiKeys as V2IamApiKeys} from './resources/V2/Iam/ApiKeys.js';
import {Associations as TaxAssociations} from './resources/Tax/Associations.js';
import {Authorizations as IssuingAuthorizations} from './resources/Issuing/Authorizations.js';
import {Authorizations as TestHelpersIssuingAuthorizations} from './resources/TestHelpers/Issuing/Authorizations.js';
import {BillSettings as V2BillingBillSettings} from './resources/V2/Billing/BillSettings.js';
import {BlocklistEntries as IdentityBlocklistEntries} from './resources/Identity/BlocklistEntries.js';
import {Cadences as V2BillingCadences} from './resources/V2/Billing/Cadences.js';
import {Calculations as TaxCalculations} from './resources/Tax/Calculations.js';
import {Cardholders as IssuingCardholders} from './resources/Issuing/Cardholders.js';
import {Cards as IssuingCards} from './resources/Issuing/Cards.js';
import {Cards as TestHelpersIssuingCards} from './resources/TestHelpers/Issuing/Cards.js';
import {ClaimableSandboxes as V2CoreClaimableSandboxes} from './resources/V2/Core/ClaimableSandboxes.js';
import {CollectionSettings as V2BillingCollectionSettings} from './resources/V2/Billing/CollectionSettings.js';
import {Configurations as BillingPortalConfigurations} from './resources/BillingPortal/Configurations.js';
import {Configurations as TerminalConfigurations} from './resources/Terminal/Configurations.js';
import {ConfirmationTokens as TestHelpersConfirmationTokens} from './resources/TestHelpers/ConfirmationTokens.js';
import {ConnectionTokens as TerminalConnectionTokens} from './resources/Terminal/ConnectionTokens.js';
import {CreditBalanceSummary as BillingCreditBalanceSummary} from './resources/Billing/CreditBalanceSummary.js';
import {CreditBalanceTransactions as BillingCreditBalanceTransactions} from './resources/Billing/CreditBalanceTransactions.js';
import {CreditGrants as BillingCreditGrants} from './resources/Billing/CreditGrants.js';
import {CreditReversals as TreasuryCreditReversals} from './resources/Treasury/CreditReversals.js';
import {CreditUnderwritingRecords as IssuingCreditUnderwritingRecords} from './resources/Issuing/CreditUnderwritingRecords.js';
import {CurrencyConversions as V2MoneyManagementCurrencyConversions} from './resources/V2/MoneyManagement/CurrencyConversions.js';
import {CustomPricingUnits as V2BillingCustomPricingUnits} from './resources/V2/Billing/CustomPricingUnits.js';
import {Customers as TestHelpersCustomers} from './resources/TestHelpers/Customers.js';
import {DebitReversals as TreasuryDebitReversals} from './resources/Treasury/DebitReversals.js';
import {DisputeSettlementDetails as IssuingDisputeSettlementDetails} from './resources/Issuing/DisputeSettlementDetails.js';
import {Disputes as IssuingDisputes} from './resources/Issuing/Disputes.js';
import {EarlyFraudWarnings as RadarEarlyFraudWarnings} from './resources/Radar/EarlyFraudWarnings.js';
import {EventDestinations as V2CoreEventDestinations} from './resources/V2/Core/EventDestinations.js';
import {Events as V2CoreEvents} from './resources/V2/Core/Events.js';
import {Features as EntitlementsFeatures} from './resources/Entitlements/Features.js';
import {FinancialAccounts as TreasuryFinancialAccounts} from './resources/Treasury/FinancialAccounts.js';
import {FinancialAccounts as V2MoneyManagementFinancialAccounts} from './resources/V2/MoneyManagement/FinancialAccounts.js';
import {FinancialAddresses as V2MoneyManagementFinancialAddresses} from './resources/V2/MoneyManagement/FinancialAddresses.js';
import {FinancialAddresses as V2TestHelpersFinancialAddresses} from './resources/V2/TestHelpers/FinancialAddresses.js';
import {FinancingOffers as CapitalFinancingOffers} from './resources/Capital/FinancingOffers.js';
import {FinancingOffers as TestHelpersCapitalFinancingOffers} from './resources/TestHelpers/Capital/FinancingOffers.js';
import {FinancingSummary as CapitalFinancingSummary} from './resources/Capital/FinancingSummary.js';
import {FinancingTransactions as CapitalFinancingTransactions} from './resources/Capital/FinancingTransactions.js';
import {Forms as TaxForms} from './resources/Tax/Forms.js';
import {FraudLiabilityDebits as IssuingFraudLiabilityDebits} from './resources/Issuing/FraudLiabilityDebits.js';
import {GbBankAccounts as V2CoreVaultGbBankAccounts} from './resources/V2/Core/Vault/GbBankAccounts.js';
import {GrantedTokens as SharedPaymentGrantedTokens} from './resources/SharedPayment/GrantedTokens.js';
import {GrantedTokens as TestHelpersSharedPaymentGrantedTokens} from './resources/TestHelpers/SharedPayment/GrantedTokens.js';
import {InboundTransfers as TestHelpersTreasuryInboundTransfers} from './resources/TestHelpers/Treasury/InboundTransfers.js';
import {InboundTransfers as TreasuryInboundTransfers} from './resources/Treasury/InboundTransfers.js';
import {InboundTransfers as V2MoneyManagementInboundTransfers} from './resources/V2/MoneyManagement/InboundTransfers.js';
import {Institutions as FinancialConnectionsInstitutions} from './resources/FinancialConnections/Institutions.js';
import {Intents as V2BillingIntents} from './resources/V2/Billing/Intents.js';
import {LicenseFeeSubscriptions as V2BillingLicenseFeeSubscriptions} from './resources/V2/Billing/LicenseFeeSubscriptions.js';
import {LicenseFees as V2BillingLicenseFees} from './resources/V2/Billing/LicenseFees.js';
import {LicensedItems as V2BillingLicensedItems} from './resources/V2/Billing/LicensedItems.js';
import {Locations as TaxLocations} from './resources/Tax/Locations.js';
import {Locations as TerminalLocations} from './resources/Terminal/Locations.js';
import {ManualRules as V2TaxManualRules} from './resources/V2/Tax/ManualRules.js';
import {MeterEventAdjustments as BillingMeterEventAdjustments} from './resources/Billing/MeterEventAdjustments.js';
import {MeterEventAdjustments as V2BillingMeterEventAdjustments} from './resources/V2/Billing/MeterEventAdjustments.js';
import {MeterEventSession as V2BillingMeterEventSession} from './resources/V2/Billing/MeterEventSession.js';
import {MeterEventStream as V2BillingMeterEventStream} from './resources/V2/Billing/MeterEventStream.js';
import {MeterEvents as BillingMeterEvents} from './resources/Billing/MeterEvents.js';
import {MeterEvents as V2BillingMeterEvents} from './resources/V2/Billing/MeterEvents.js';
import {MeterUsage as BillingAnalyticsMeterUsage} from './resources/Billing/Analytics/MeterUsage.js';
import {MeteredItems as V2BillingMeteredItems} from './resources/V2/Billing/MeteredItems.js';
import {Meters as BillingMeters} from './resources/Billing/Meters.js';
import {MoneyManagement as V2TestHelpersMoneyManagement} from './resources/V2/TestHelpers/MoneyManagement.js';
import {OffSessionPayments as V2PaymentsOffSessionPayments} from './resources/V2/Payments/OffSessionPayments.js';
import {OnboardingLinks as TerminalOnboardingLinks} from './resources/Terminal/OnboardingLinks.js';
import {Orders as ClimateOrders} from './resources/Climate/Orders.js';
import {OutboundPaymentQuotes as V2MoneyManagementOutboundPaymentQuotes} from './resources/V2/MoneyManagement/OutboundPaymentQuotes.js';
import {OutboundPayments as TestHelpersTreasuryOutboundPayments} from './resources/TestHelpers/Treasury/OutboundPayments.js';
import {OutboundPayments as TreasuryOutboundPayments} from './resources/Treasury/OutboundPayments.js';
import {OutboundPayments as V2MoneyManagementOutboundPayments} from './resources/V2/MoneyManagement/OutboundPayments.js';
import {OutboundSetupIntents as V2MoneyManagementOutboundSetupIntents} from './resources/V2/MoneyManagement/OutboundSetupIntents.js';
import {OutboundTransfers as TestHelpersTreasuryOutboundTransfers} from './resources/TestHelpers/Treasury/OutboundTransfers.js';
import {OutboundTransfers as TreasuryOutboundTransfers} from './resources/Treasury/OutboundTransfers.js';
import {OutboundTransfers as V2MoneyManagementOutboundTransfers} from './resources/V2/MoneyManagement/OutboundTransfers.js';
import {PayoutMethods as V2MoneyManagementPayoutMethods} from './resources/V2/MoneyManagement/PayoutMethods.js';
import {PayoutMethodsBankAccountSpec as V2MoneyManagementPayoutMethodsBankAccountSpec} from './resources/V2/MoneyManagement/PayoutMethodsBankAccountSpec.js';
import {PersonalizationDesigns as IssuingPersonalizationDesigns} from './resources/Issuing/PersonalizationDesigns.js';
import {PersonalizationDesigns as TestHelpersIssuingPersonalizationDesigns} from './resources/TestHelpers/Issuing/PersonalizationDesigns.js';
import {PhysicalBundles as IssuingPhysicalBundles} from './resources/Issuing/PhysicalBundles.js';
import {PricingPlanSubscriptions as V2BillingPricingPlanSubscriptions} from './resources/V2/Billing/PricingPlanSubscriptions.js';
import {PricingPlans as V2BillingPricingPlans} from './resources/V2/Billing/PricingPlans.js';
import {Products as ClimateProducts} from './resources/Climate/Products.js';
import {Profiles as V2BillingProfiles} from './resources/V2/Billing/Profiles.js';
import {Programs as IssuingPrograms} from './resources/Issuing/Programs.js';
import {RateCardSubscriptions as V2BillingRateCardSubscriptions} from './resources/V2/Billing/RateCardSubscriptions.js';
import {RateCards as V2BillingRateCards} from './resources/V2/Billing/RateCards.js';
import {ReaderCollectedData as TerminalReaderCollectedData} from './resources/Terminal/ReaderCollectedData.js';
import {Readers as TerminalReaders} from './resources/Terminal/Readers.js';
import {Readers as TestHelpersTerminalReaders} from './resources/TestHelpers/Terminal/Readers.js';
import {ReceivedCredits as TestHelpersTreasuryReceivedCredits} from './resources/TestHelpers/Treasury/ReceivedCredits.js';
import {ReceivedCredits as TreasuryReceivedCredits} from './resources/Treasury/ReceivedCredits.js';
import {ReceivedCredits as V2MoneyManagementReceivedCredits} from './resources/V2/MoneyManagement/ReceivedCredits.js';
import {ReceivedDebits as TestHelpersTreasuryReceivedDebits} from './resources/TestHelpers/Treasury/ReceivedDebits.js';
import {ReceivedDebits as TreasuryReceivedDebits} from './resources/Treasury/ReceivedDebits.js';
import {ReceivedDebits as V2MoneyManagementReceivedDebits} from './resources/V2/MoneyManagement/ReceivedDebits.js';
import {RecipientVerifications as V2MoneyManagementRecipientVerifications} from './resources/V2/MoneyManagement/RecipientVerifications.js';
import {RedactionJobs as PrivacyRedactionJobs} from './resources/Privacy/RedactionJobs.js';
import {Refunds as TestHelpersRefunds} from './resources/TestHelpers/Refunds.js';
import {Registrations as TaxRegistrations} from './resources/Tax/Registrations.js';
import {ReportRuns as ReportingReportRuns} from './resources/Reporting/ReportRuns.js';
import {ReportRuns as V2ReportingReportRuns} from './resources/V2/Reporting/ReportRuns.js';
import {ReportTypes as ReportingReportTypes} from './resources/Reporting/ReportTypes.js';
import {Reports as V2ReportingReports} from './resources/V2/Reporting/Reports.js';
import {RequestedSessions as DelegatedCheckoutRequestedSessions} from './resources/DelegatedCheckout/RequestedSessions.js';
import {Requests as ForwardingRequests} from './resources/Forwarding/Requests.js';
import {ScheduledQueryRuns as SigmaScheduledQueryRuns} from './resources/Sigma/ScheduledQueryRuns.js';
import {Secrets as AppsSecrets} from './resources/Apps/Secrets.js';
import {ServiceActions as V2BillingServiceActions} from './resources/V2/Billing/ServiceActions.js';
import {Sessions as BillingPortalSessions} from './resources/BillingPortal/Sessions.js';
import {Sessions as CheckoutSessions} from './resources/Checkout/Sessions.js';
import {Sessions as FinancialConnectionsSessions} from './resources/FinancialConnections/Sessions.js';
import {Settings as TaxSettings} from './resources/Tax/Settings.js';
import {SettlementAllocationIntents as V2PaymentsSettlementAllocationIntents} from './resources/V2/Payments/SettlementAllocationIntents.js';
import {Suppliers as ClimateSuppliers} from './resources/Climate/Suppliers.js';
import {TestClocks as TestHelpersTestClocks} from './resources/TestHelpers/TestClocks.js';
import {Tokens as IssuingTokens} from './resources/Issuing/Tokens.js';
import {TransactionEntries as TreasuryTransactionEntries} from './resources/Treasury/TransactionEntries.js';
import {TransactionEntries as V2MoneyManagementTransactionEntries} from './resources/V2/MoneyManagement/TransactionEntries.js';
import {Transactions as FinancialConnectionsTransactions} from './resources/FinancialConnections/Transactions.js';
import {Transactions as IssuingTransactions} from './resources/Issuing/Transactions.js';
import {Transactions as TaxTransactions} from './resources/Tax/Transactions.js';
import {Transactions as TestHelpersIssuingTransactions} from './resources/TestHelpers/Issuing/Transactions.js';
import {Transactions as TreasuryTransactions} from './resources/Treasury/Transactions.js';
import {Transactions as V2MoneyManagementTransactions} from './resources/V2/MoneyManagement/Transactions.js';
import {TrialOffers as ProductCatalogTrialOffers} from './resources/ProductCatalog/TrialOffers.js';
import {UsBankAccounts as V2CoreVaultUsBankAccounts} from './resources/V2/Core/Vault/UsBankAccounts.js';
import {ValueListItems as RadarValueListItems} from './resources/Radar/ValueListItems.js';
import {ValueLists as RadarValueLists} from './resources/Radar/ValueLists.js';
import {VerificationReports as IdentityVerificationReports} from './resources/Identity/VerificationReports.js';
import {VerificationSessions as IdentityVerificationSessions} from './resources/Identity/VerificationSessions.js';
export {Accounts as Account} from './resources/Accounts.js';
export {AccountLinks} from './resources/AccountLinks.js';
export {AccountNotices} from './resources/AccountNotices.js';
export {AccountSessions} from './resources/AccountSessions.js';
export {Accounts} from './resources/Accounts.js';
export {ApplePayDomains} from './resources/ApplePayDomains.js';
export {ApplicationFees} from './resources/ApplicationFees.js';
export {Balance} from './resources/Balance.js';
export {BalanceSettings} from './resources/BalanceSettings.js';
export {BalanceTransactions} from './resources/BalanceTransactions.js';
export {BalanceTransfers} from './resources/BalanceTransfers.js';
export {Charges} from './resources/Charges.js';
export {ConfirmationTokens} from './resources/ConfirmationTokens.js';
export {CountrySpecs} from './resources/CountrySpecs.js';
export {Coupons} from './resources/Coupons.js';
export {CreditNotes} from './resources/CreditNotes.js';
export {CustomerSessions} from './resources/CustomerSessions.js';
export {Customers} from './resources/Customers.js';
export {Disputes} from './resources/Disputes.js';
export {EphemeralKeys} from './resources/EphemeralKeys.js';
export {Events} from './resources/Events.js';
export {ExchangeRates} from './resources/ExchangeRates.js';
export {ExternalAccounts} from './resources/ExternalAccounts.js';
export {FileLinks} from './resources/FileLinks.js';
export {Files} from './resources/Files.js';
export {FrMealVouchersOnboardings} from './resources/FrMealVouchersOnboardings.js';
export {FxQuotes} from './resources/FxQuotes.js';
export {InvoiceItems} from './resources/InvoiceItems.js';
export {InvoicePayments} from './resources/InvoicePayments.js';
export {InvoiceRenderingTemplates} from './resources/InvoiceRenderingTemplates.js';
export {Invoices} from './resources/Invoices.js';
export {Mandates} from './resources/Mandates.js';
export {Margins} from './resources/Margins.js';
export {OAuth} from './resources/OAuth.js';
export {Orders} from './resources/Orders.js';
export {PaymentAttemptRecords} from './resources/PaymentAttemptRecords.js';
export {PaymentIntents} from './resources/PaymentIntents.js';
export {PaymentLinks} from './resources/PaymentLinks.js';
export {PaymentMethodConfigurations} from './resources/PaymentMethodConfigurations.js';
export {PaymentMethodDomains} from './resources/PaymentMethodDomains.js';
export {PaymentMethods} from './resources/PaymentMethods.js';
export {PaymentRecords} from './resources/PaymentRecords.js';
export {Payouts} from './resources/Payouts.js';
export {Plans} from './resources/Plans.js';
export {Prices} from './resources/Prices.js';
export {Products} from './resources/Products.js';
export {PromotionCodes} from './resources/PromotionCodes.js';
export {Quotes} from './resources/Quotes.js';
export {Refunds} from './resources/Refunds.js';
export {Reviews} from './resources/Reviews.js';
export {SetupAttempts} from './resources/SetupAttempts.js';
export {SetupIntents} from './resources/SetupIntents.js';
export {ShippingRates} from './resources/ShippingRates.js';
export {Sources} from './resources/Sources.js';
export {SubscriptionItems} from './resources/SubscriptionItems.js';
export {SubscriptionSchedules} from './resources/SubscriptionSchedules.js';
export {Subscriptions} from './resources/Subscriptions.js';
export {TaxCodes} from './resources/TaxCodes.js';
export {TaxIds} from './resources/TaxIds.js';
export {TaxRates} from './resources/TaxRates.js';
export {Tokens} from './resources/Tokens.js';
export {Topups} from './resources/Topups.js';
export {Transfers} from './resources/Transfers.js';
export {WebhookEndpoints} from './resources/WebhookEndpoints.js';
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
export const Privacy = resourceNamespace('privacy', {
  RedactionJobs: PrivacyRedactionJobs,
});
export const ProductCatalog = resourceNamespace('productCatalog', {
  TrialOffers: ProductCatalogTrialOffers,
});
export const Radar = resourceNamespace('radar', {
  AccountEvaluations: RadarAccountEvaluations,
  EarlyFraudWarnings: RadarEarlyFraudWarnings,
  ValueListItems: RadarValueListItems,
  ValueLists: RadarValueLists,
});
export const Reporting = resourceNamespace('reporting', {
  ReportRuns: ReportingReportRuns,
  ReportTypes: ReportingReportTypes,
});
export const SharedPayment = resourceNamespace('sharedPayment', {
  GrantedTokens: SharedPaymentGrantedTokens,
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
    LicenseFeeSubscriptions: V2BillingLicenseFeeSubscriptions,
    LicenseFees: V2BillingLicenseFees,
    LicensedItems: V2BillingLicensedItems,
    MeterEventAdjustments: V2BillingMeterEventAdjustments,
    MeterEventSession: V2BillingMeterEventSession,
    MeterEventStream: V2BillingMeterEventStream,
    MeterEvents: V2BillingMeterEvents,
    MeteredItems: V2BillingMeteredItems,
    PricingPlanSubscriptions: V2BillingPricingPlanSubscriptions,
    PricingPlans: V2BillingPricingPlans,
    Profiles: V2BillingProfiles,
    RateCardSubscriptions: V2BillingRateCardSubscriptions,
    RateCards: V2BillingRateCards,
    ServiceActions: V2BillingServiceActions,
  }),
  Core: resourceNamespace('core', {
    AccountLinks: V2CoreAccountLinks,
    AccountTokens: V2CoreAccountTokens,
    Accounts: V2CoreAccounts,
    ClaimableSandboxes: V2CoreClaimableSandboxes,
    EventDestinations: V2CoreEventDestinations,
    Events: V2CoreEvents,
    Vault: resourceNamespace('vault', {
      GbBankAccounts: V2CoreVaultGbBankAccounts,
      UsBankAccounts: V2CoreVaultUsBankAccounts,
    }),
  }),
  Iam: resourceNamespace('iam', {ApiKeys: V2IamApiKeys}),
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
  Payment: resourceNamespace('payment', {
    OffSessionPayments: V2PaymentsOffSessionPayments,
    SettlementAllocationIntents: V2PaymentsSettlementAllocationIntents,
  }),
  Reporting: resourceNamespace('reporting', {
    ReportRuns: V2ReportingReportRuns,
    Reports: V2ReportingReports,
  }),
  Tax: resourceNamespace('tax', {ManualRules: V2TaxManualRules}),
  TestHelper: resourceNamespace('testHelper', {
    FinancialAddresses: V2TestHelpersFinancialAddresses,
    MoneyManagement: V2TestHelpersMoneyManagement,
  }),
});
