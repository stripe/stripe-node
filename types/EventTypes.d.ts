// File generated from our OpenAPI spec

declare module 'stripe' {
  namespace Stripe {
    export type Event =
      | AccountApplicationAuthorizedEvent
      | AccountApplicationDeauthorizedEvent
      | AccountExternalAccountCreatedEvent
      | AccountExternalAccountDeletedEvent
      | AccountExternalAccountUpdatedEvent
      | AccountUpdatedEvent
      | ApplicationFeeCreatedEvent
      | ApplicationFeeRefundUpdatedEvent
      | ApplicationFeeRefundedEvent
      | BalanceAvailableEvent
      | BalanceSettingsUpdatedEvent
      | BillingAlertTriggeredEvent
      | BillingCreditBalanceTransactionCreatedEvent
      | BillingCreditGrantCreatedEvent
      | BillingCreditGrantUpdatedEvent
      | BillingMeterCreatedEvent
      | BillingMeterDeactivatedEvent
      | BillingMeterReactivatedEvent
      | BillingMeterUpdatedEvent
      | BillingPortalConfigurationCreatedEvent
      | BillingPortalConfigurationUpdatedEvent
      | BillingPortalSessionCreatedEvent
      | CapabilityUpdatedEvent
      | CashBalanceFundsAvailableEvent
      | ChargeCapturedEvent
      | ChargeDisputeClosedEvent
      | ChargeDisputeCreatedEvent
      | ChargeDisputeFundsReinstatedEvent
      | ChargeDisputeFundsWithdrawnEvent
      | ChargeDisputeUpdatedEvent
      | ChargeExpiredEvent
      | ChargeFailedEvent
      | ChargePendingEvent
      | ChargeRefundUpdatedEvent
      | ChargeRefundedEvent
      | ChargeSucceededEvent
      | ChargeUpdatedEvent
      | CheckoutSessionAsyncPaymentFailedEvent
      | CheckoutSessionAsyncPaymentSucceededEvent
      | CheckoutSessionCompletedEvent
      | CheckoutSessionExpiredEvent
      | ClimateOrderCanceledEvent
      | ClimateOrderCreatedEvent
      | ClimateOrderDelayedEvent
      | ClimateOrderDeliveredEvent
      | ClimateOrderProductSubstitutedEvent
      | ClimateProductCreatedEvent
      | ClimateProductPricingUpdatedEvent
      | CouponCreatedEvent
      | CouponDeletedEvent
      | CouponUpdatedEvent
      | CreditNoteCreatedEvent
      | CreditNoteUpdatedEvent
      | CreditNoteVoidedEvent
      | CustomerCreatedEvent
      | CustomerDeletedEvent
      | CustomerDiscountCreatedEvent
      | CustomerDiscountDeletedEvent
      | CustomerDiscountUpdatedEvent
      | CustomerSourceCreatedEvent
      | CustomerSourceDeletedEvent
      | CustomerSourceExpiringEvent
      | CustomerSourceUpdatedEvent
      | CustomerSubscriptionCreatedEvent
      | CustomerSubscriptionDeletedEvent
      | CustomerSubscriptionPausedEvent
      | CustomerSubscriptionPendingUpdateAppliedEvent
      | CustomerSubscriptionPendingUpdateExpiredEvent
      | CustomerSubscriptionResumedEvent
      | CustomerSubscriptionTrialWillEndEvent
      | CustomerSubscriptionUpdatedEvent
      | CustomerTaxIdCreatedEvent
      | CustomerTaxIdDeletedEvent
      | CustomerTaxIdUpdatedEvent
      | CustomerUpdatedEvent
      | CustomerCashBalanceTransactionCreatedEvent
      | EntitlementsActiveEntitlementSummaryUpdatedEvent
      | FileCreatedEvent
      | FinancialConnectionsAccountAccountNumbersUpdatedEvent
      | FinancialConnectionsAccountCreatedEvent
      | FinancialConnectionsAccountDeactivatedEvent
      | FinancialConnectionsAccountDisconnectedEvent
      | FinancialConnectionsAccountReactivatedEvent
      | FinancialConnectionsAccountRefreshedBalanceEvent
      | FinancialConnectionsAccountRefreshedOwnershipEvent
      | FinancialConnectionsAccountRefreshedTransactionsEvent
      | FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent
      | IdentityVerificationSessionCanceledEvent
      | IdentityVerificationSessionCreatedEvent
      | IdentityVerificationSessionProcessingEvent
      | IdentityVerificationSessionRedactedEvent
      | IdentityVerificationSessionRequiresInputEvent
      | IdentityVerificationSessionVerifiedEvent
      | InvoiceCreatedEvent
      | InvoiceDeletedEvent
      | InvoiceFinalizationFailedEvent
      | InvoiceFinalizedEvent
      | InvoiceMarkedUncollectibleEvent
      | InvoiceOverdueEvent
      | InvoiceOverpaidEvent
      | InvoicePaidEvent
      | InvoicePaymentActionRequiredEvent
      | InvoicePaymentAttemptRequiredEvent
      | InvoicePaymentFailedEvent
      | InvoicePaymentSucceededEvent
      | InvoiceSentEvent
      | InvoiceUpcomingEvent
      | InvoiceUpdatedEvent
      | InvoiceVoidedEvent
      | InvoiceWillBeDueEvent
      | InvoicePaymentPaidEvent
      | InvoiceItemCreatedEvent
      | InvoiceItemDeletedEvent
      | IssuingAuthorizationCreatedEvent
      | IssuingAuthorizationRequestEvent
      | IssuingAuthorizationUpdatedEvent
      | IssuingCardCreatedEvent
      | IssuingCardUpdatedEvent
      | IssuingCardholderCreatedEvent
      | IssuingCardholderUpdatedEvent
      | IssuingDisputeClosedEvent
      | IssuingDisputeCreatedEvent
      | IssuingDisputeFundsReinstatedEvent
      | IssuingDisputeFundsRescindedEvent
      | IssuingDisputeSubmittedEvent
      | IssuingDisputeUpdatedEvent
      | IssuingPersonalizationDesignActivatedEvent
      | IssuingPersonalizationDesignDeactivatedEvent
      | IssuingPersonalizationDesignRejectedEvent
      | IssuingPersonalizationDesignUpdatedEvent
      | IssuingTokenCreatedEvent
      | IssuingTokenUpdatedEvent
      | IssuingTransactionCreatedEvent
      | IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      | IssuingTransactionUpdatedEvent
      | MandateUpdatedEvent
      | PaymentIntentAmountCapturableUpdatedEvent
      | PaymentIntentCanceledEvent
      | PaymentIntentCreatedEvent
      | PaymentIntentPartiallyFundedEvent
      | PaymentIntentPaymentFailedEvent
      | PaymentIntentProcessingEvent
      | PaymentIntentRequiresActionEvent
      | PaymentIntentSucceededEvent
      | PaymentLinkCreatedEvent
      | PaymentLinkUpdatedEvent
      | PaymentMethodAttachedEvent
      | PaymentMethodAutomaticallyUpdatedEvent
      | PaymentMethodDetachedEvent
      | PaymentMethodUpdatedEvent
      | PayoutCanceledEvent
      | PayoutCreatedEvent
      | PayoutFailedEvent
      | PayoutPaidEvent
      | PayoutReconciliationCompletedEvent
      | PayoutUpdatedEvent
      | PersonCreatedEvent
      | PersonDeletedEvent
      | PersonUpdatedEvent
      | PlanCreatedEvent
      | PlanDeletedEvent
      | PlanUpdatedEvent
      | PriceCreatedEvent
      | PriceDeletedEvent
      | PriceUpdatedEvent
      | ProductCreatedEvent
      | ProductDeletedEvent
      | ProductUpdatedEvent
      | PromotionCodeCreatedEvent
      | PromotionCodeUpdatedEvent
      | QuoteAcceptedEvent
      | QuoteCanceledEvent
      | QuoteCreatedEvent
      | QuoteFinalizedEvent
      | RadarEarlyFraudWarningCreatedEvent
      | RadarEarlyFraudWarningUpdatedEvent
      | RefundCreatedEvent
      | RefundFailedEvent
      | RefundUpdatedEvent
      | ReportingReportRunFailedEvent
      | ReportingReportRunSucceededEvent
      | ReportingReportTypeUpdatedEvent
      | ReviewClosedEvent
      | ReviewOpenedEvent
      | SetupIntentCanceledEvent
      | SetupIntentCreatedEvent
      | SetupIntentRequiresActionEvent
      | SetupIntentSetupFailedEvent
      | SetupIntentSucceededEvent
      | SigmaScheduledQueryRunCreatedEvent
      | SourceCanceledEvent
      | SourceChargeableEvent
      | SourceFailedEvent
      | SourceMandateNotificationEvent
      | SourceRefundAttributesRequiredEvent
      | SourceTransactionCreatedEvent
      | SourceTransactionUpdatedEvent
      | SubscriptionScheduleAbortedEvent
      | SubscriptionScheduleCanceledEvent
      | SubscriptionScheduleCompletedEvent
      | SubscriptionScheduleCreatedEvent
      | SubscriptionScheduleExpiringEvent
      | SubscriptionScheduleReleasedEvent
      | SubscriptionScheduleUpdatedEvent
      | TaxSettingsUpdatedEvent
      | TaxRateCreatedEvent
      | TaxRateUpdatedEvent
      | TerminalReaderActionFailedEvent
      | TerminalReaderActionSucceededEvent
      | TerminalReaderActionUpdatedEvent
      | TestHelpersTestClockAdvancingEvent
      | TestHelpersTestClockCreatedEvent
      | TestHelpersTestClockDeletedEvent
      | TestHelpersTestClockInternalFailureEvent
      | TestHelpersTestClockReadyEvent
      | TopupCanceledEvent
      | TopupCreatedEvent
      | TopupFailedEvent
      | TopupReversedEvent
      | TopupSucceededEvent
      | TransferCreatedEvent
      | TransferReversedEvent
      | TransferUpdatedEvent
      | TreasuryCreditReversalCreatedEvent
      | TreasuryCreditReversalPostedEvent
      | TreasuryDebitReversalCompletedEvent
      | TreasuryDebitReversalCreatedEvent
      | TreasuryDebitReversalInitialCreditGrantedEvent
      | TreasuryFinancialAccountClosedEvent
      | TreasuryFinancialAccountCreatedEvent
      | TreasuryFinancialAccountFeaturesStatusUpdatedEvent
      | TreasuryInboundTransferCanceledEvent
      | TreasuryInboundTransferCreatedEvent
      | TreasuryInboundTransferFailedEvent
      | TreasuryInboundTransferSucceededEvent
      | TreasuryOutboundPaymentCanceledEvent
      | TreasuryOutboundPaymentCreatedEvent
      | TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent
      | TreasuryOutboundPaymentFailedEvent
      | TreasuryOutboundPaymentPostedEvent
      | TreasuryOutboundPaymentReturnedEvent
      | TreasuryOutboundPaymentTrackingDetailsUpdatedEvent
      | TreasuryOutboundTransferCanceledEvent
      | TreasuryOutboundTransferCreatedEvent
      | TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent
      | TreasuryOutboundTransferFailedEvent
      | TreasuryOutboundTransferPostedEvent
      | TreasuryOutboundTransferReturnedEvent
      | TreasuryOutboundTransferTrackingDetailsUpdatedEvent
      | TreasuryReceivedCreditCreatedEvent
      | TreasuryReceivedCreditFailedEvent
      | TreasuryReceivedCreditSucceededEvent
      | TreasuryReceivedDebitCreatedEvent;
  }

  namespace Stripe {
    /**
     * Occurs whenever a user authorizes an application. Sent to the related application only.
     */
    interface AccountApplicationAuthorizedEvent extends EventBase {
      type: 'account.application.authorized';
      data: AccountApplicationAuthorizedEvent.Data;
    }

    export namespace AccountApplicationAuthorizedEvent {
      interface Data extends Stripe.Event.Data {
        object: Application;

        previous_attributes?: Partial<Application>;
      }
    }

    /**
     * Occurs whenever a user deauthorizes an application. Sent to the related application only.
     */
    interface AccountApplicationDeauthorizedEvent extends EventBase {
      type: 'account.application.deauthorized';
      data: AccountApplicationDeauthorizedEvent.Data;
    }

    export namespace AccountApplicationDeauthorizedEvent {
      interface Data extends Stripe.Event.Data {
        object: Application;

        previous_attributes?: Partial<Application>;
      }
    }

    /**
     * Occurs whenever an external account is created.
     */
    interface AccountExternalAccountCreatedEvent extends EventBase {
      type: 'account.external_account.created';
      data: AccountExternalAccountCreatedEvent.Data;
    }

    export namespace AccountExternalAccountCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: ExternalAccount;

        previous_attributes?: Partial<ExternalAccount>;
      }
    }

    /**
     * Occurs whenever an external account is deleted.
     */
    interface AccountExternalAccountDeletedEvent extends EventBase {
      type: 'account.external_account.deleted';
      data: AccountExternalAccountDeletedEvent.Data;
    }

    export namespace AccountExternalAccountDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: ExternalAccount;

        previous_attributes?: Partial<ExternalAccount>;
      }
    }

    /**
     * Occurs whenever an external account is updated.
     */
    interface AccountExternalAccountUpdatedEvent extends EventBase {
      type: 'account.external_account.updated';
      data: AccountExternalAccountUpdatedEvent.Data;
    }

    export namespace AccountExternalAccountUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: ExternalAccount;

        previous_attributes?: Partial<ExternalAccount>;
      }
    }

    /**
     * Occurs whenever an account status or property has changed.
     */
    interface AccountUpdatedEvent extends EventBase {
      type: 'account.updated';
      data: AccountUpdatedEvent.Data;
    }

    export namespace AccountUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Account;

        previous_attributes?: Partial<Account>;
      }
    }

    /**
     * Occurs whenever an application fee is created on a charge.
     */
    interface ApplicationFeeCreatedEvent extends EventBase {
      type: 'application_fee.created';
      data: ApplicationFeeCreatedEvent.Data;
    }

    export namespace ApplicationFeeCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: ApplicationFee;

        previous_attributes?: Partial<ApplicationFee>;
      }
    }

    /**
     * Occurs whenever an application fee refund is updated.
     */
    interface ApplicationFeeRefundUpdatedEvent extends EventBase {
      type: 'application_fee.refund.updated';
      data: ApplicationFeeRefundUpdatedEvent.Data;
    }

    export namespace ApplicationFeeRefundUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: FeeRefund;

        previous_attributes?: Partial<FeeRefund>;
      }
    }

    /**
     * Occurs whenever an application fee is refunded, whether from refunding a charge or from [refunding the application fee directly](#fee_refunds). This includes partial refunds.
     */
    interface ApplicationFeeRefundedEvent extends EventBase {
      type: 'application_fee.refunded';
      data: ApplicationFeeRefundedEvent.Data;
    }

    export namespace ApplicationFeeRefundedEvent {
      interface Data extends Stripe.Event.Data {
        object: ApplicationFee;

        previous_attributes?: Partial<ApplicationFee>;
      }
    }

    /**
     * Occurs whenever your Stripe balance has been updated (e.g., when a charge is available to be paid out). By default, Stripe automatically transfers funds in your balance to your bank account on a daily basis. This event is not fired for negative transactions.
     */
    interface BalanceAvailableEvent extends EventBase {
      type: 'balance.available';
      data: BalanceAvailableEvent.Data;
    }

    export namespace BalanceAvailableEvent {
      interface Data extends Stripe.Event.Data {
        object: Balance;

        previous_attributes?: Partial<Balance>;
      }
    }

    /**
     * Occurs whenever a balance settings status or property has changed.
     */
    interface BalanceSettingsUpdatedEvent extends EventBase {
      type: 'balance_settings.updated';
      data: BalanceSettingsUpdatedEvent.Data;
    }

    export namespace BalanceSettingsUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: BalanceSettings;

        previous_attributes?: Partial<BalanceSettings>;
      }
    }

    /**
     * Occurs whenever your custom alert threshold is met.
     */
    interface BillingAlertTriggeredEvent extends EventBase {
      type: 'billing.alert.triggered';
      data: BillingAlertTriggeredEvent.Data;
    }

    export namespace BillingAlertTriggeredEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.AlertTriggered;

        previous_attributes?: Partial<Billing.AlertTriggered>;
      }
    }

    /**
     * Occurs when a credit balance transaction is created
     */
    interface BillingCreditBalanceTransactionCreatedEvent extends EventBase {
      type: 'billing.credit_balance_transaction.created';
      data: BillingCreditBalanceTransactionCreatedEvent.Data;
    }

    export namespace BillingCreditBalanceTransactionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.CreditBalanceTransaction;

        previous_attributes?: Partial<Billing.CreditBalanceTransaction>;
      }
    }

    /**
     * Occurs when a credit grant is created
     */
    interface BillingCreditGrantCreatedEvent extends EventBase {
      type: 'billing.credit_grant.created';
      data: BillingCreditGrantCreatedEvent.Data;
    }

    export namespace BillingCreditGrantCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.CreditGrant;

        previous_attributes?: Partial<Billing.CreditGrant>;
      }
    }

    /**
     * Occurs when a credit grant is updated
     */
    interface BillingCreditGrantUpdatedEvent extends EventBase {
      type: 'billing.credit_grant.updated';
      data: BillingCreditGrantUpdatedEvent.Data;
    }

    export namespace BillingCreditGrantUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.CreditGrant;

        previous_attributes?: Partial<Billing.CreditGrant>;
      }
    }

    /**
     * Occurs when a meter is created
     */
    interface BillingMeterCreatedEvent extends EventBase {
      type: 'billing.meter.created';
      data: BillingMeterCreatedEvent.Data;
    }

    export namespace BillingMeterCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.Meter;

        previous_attributes?: Partial<Billing.Meter>;
      }
    }

    /**
     * Occurs when a meter is deactivated
     */
    interface BillingMeterDeactivatedEvent extends EventBase {
      type: 'billing.meter.deactivated';
      data: BillingMeterDeactivatedEvent.Data;
    }

    export namespace BillingMeterDeactivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.Meter;

        previous_attributes?: Partial<Billing.Meter>;
      }
    }

    /**
     * Occurs when a meter is reactivated
     */
    interface BillingMeterReactivatedEvent extends EventBase {
      type: 'billing.meter.reactivated';
      data: BillingMeterReactivatedEvent.Data;
    }

    export namespace BillingMeterReactivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.Meter;

        previous_attributes?: Partial<Billing.Meter>;
      }
    }

    /**
     * Occurs when a meter is updated
     */
    interface BillingMeterUpdatedEvent extends EventBase {
      type: 'billing.meter.updated';
      data: BillingMeterUpdatedEvent.Data;
    }

    export namespace BillingMeterUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Billing.Meter;

        previous_attributes?: Partial<Billing.Meter>;
      }
    }

    /**
     * Occurs whenever a portal configuration is created.
     */
    interface BillingPortalConfigurationCreatedEvent extends EventBase {
      type: 'billing_portal.configuration.created';
      data: BillingPortalConfigurationCreatedEvent.Data;
    }

    export namespace BillingPortalConfigurationCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: BillingPortal.Configuration;

        previous_attributes?: Partial<BillingPortal.Configuration>;
      }
    }

    /**
     * Occurs whenever a portal configuration is updated.
     */
    interface BillingPortalConfigurationUpdatedEvent extends EventBase {
      type: 'billing_portal.configuration.updated';
      data: BillingPortalConfigurationUpdatedEvent.Data;
    }

    export namespace BillingPortalConfigurationUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: BillingPortal.Configuration;

        previous_attributes?: Partial<BillingPortal.Configuration>;
      }
    }

    /**
     * Occurs whenever a portal session is created.
     */
    interface BillingPortalSessionCreatedEvent extends EventBase {
      type: 'billing_portal.session.created';
      data: BillingPortalSessionCreatedEvent.Data;
    }

    export namespace BillingPortalSessionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: BillingPortal.Session;

        previous_attributes?: Partial<BillingPortal.Session>;
      }
    }

    /**
     * Occurs whenever a capability has new requirements or a new status.
     */
    interface CapabilityUpdatedEvent extends EventBase {
      type: 'capability.updated';
      data: CapabilityUpdatedEvent.Data;
    }

    export namespace CapabilityUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Capability;

        previous_attributes?: Partial<Capability>;
      }
    }

    /**
     * Occurs whenever there is a positive remaining cash balance after Stripe automatically reconciles new funds into the cash balance. If you enabled manual reconciliation, this webhook will fire whenever there are new funds into the cash balance.
     */
    interface CashBalanceFundsAvailableEvent extends EventBase {
      type: 'cash_balance.funds_available';
      data: CashBalanceFundsAvailableEvent.Data;
    }

    export namespace CashBalanceFundsAvailableEvent {
      interface Data extends Stripe.Event.Data {
        object: CashBalance;

        previous_attributes?: Partial<CashBalance>;
      }
    }

    /**
     * Occurs whenever a previously uncaptured charge is captured.
     */
    interface ChargeCapturedEvent extends EventBase {
      type: 'charge.captured';
      data: ChargeCapturedEvent.Data;
    }

    export namespace ChargeCapturedEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs when a dispute is closed and the dispute status changes to `lost`, `warning_closed`, or `won`.
     */
    interface ChargeDisputeClosedEvent extends EventBase {
      type: 'charge.dispute.closed';
      data: ChargeDisputeClosedEvent.Data;
    }

    export namespace ChargeDisputeClosedEvent {
      interface Data extends Stripe.Event.Data {
        object: Dispute;

        previous_attributes?: Partial<Dispute>;
      }
    }

    /**
     * Occurs whenever a customer disputes a charge with their bank.
     */
    interface ChargeDisputeCreatedEvent extends EventBase {
      type: 'charge.dispute.created';
      data: ChargeDisputeCreatedEvent.Data;
    }

    export namespace ChargeDisputeCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Dispute;

        previous_attributes?: Partial<Dispute>;
      }
    }

    /**
     * Occurs when funds are reinstated to your account after a dispute is closed. This includes [partially refunded payments](https://docs.stripe.com/disputes#disputes-on-partially-refunded-payments).
     */
    interface ChargeDisputeFundsReinstatedEvent extends EventBase {
      type: 'charge.dispute.funds_reinstated';
      data: ChargeDisputeFundsReinstatedEvent.Data;
    }

    export namespace ChargeDisputeFundsReinstatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Dispute;

        previous_attributes?: Partial<Dispute>;
      }
    }

    /**
     * Occurs when funds are removed from your account due to a dispute.
     */
    interface ChargeDisputeFundsWithdrawnEvent extends EventBase {
      type: 'charge.dispute.funds_withdrawn';
      data: ChargeDisputeFundsWithdrawnEvent.Data;
    }

    export namespace ChargeDisputeFundsWithdrawnEvent {
      interface Data extends Stripe.Event.Data {
        object: Dispute;

        previous_attributes?: Partial<Dispute>;
      }
    }

    /**
     * Occurs when the dispute is updated (usually with evidence).
     */
    interface ChargeDisputeUpdatedEvent extends EventBase {
      type: 'charge.dispute.updated';
      data: ChargeDisputeUpdatedEvent.Data;
    }

    export namespace ChargeDisputeUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Dispute;

        previous_attributes?: Partial<Dispute>;
      }
    }

    /**
     * Occurs whenever an uncaptured charge expires.
     */
    interface ChargeExpiredEvent extends EventBase {
      type: 'charge.expired';
      data: ChargeExpiredEvent.Data;
    }

    export namespace ChargeExpiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs whenever a failed charge attempt occurs.
     */
    interface ChargeFailedEvent extends EventBase {
      type: 'charge.failed';
      data: ChargeFailedEvent.Data;
    }

    export namespace ChargeFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs whenever a pending charge is created.
     */
    interface ChargePendingEvent extends EventBase {
      type: 'charge.pending';
      data: ChargePendingEvent.Data;
    }

    export namespace ChargePendingEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs whenever a refund is updated on selected payment methods. For updates on all refunds, listen to `refund.updated` instead.
     */
    interface ChargeRefundUpdatedEvent extends EventBase {
      type: 'charge.refund.updated';
      data: ChargeRefundUpdatedEvent.Data;
    }

    export namespace ChargeRefundUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Refund;

        previous_attributes?: Partial<Refund>;
      }
    }

    /**
     * Occurs whenever a charge is refunded, including partial refunds. Listen to `refund.created` for information about the refund.
     */
    interface ChargeRefundedEvent extends EventBase {
      type: 'charge.refunded';
      data: ChargeRefundedEvent.Data;
    }

    export namespace ChargeRefundedEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs whenever a charge is successful.
     */
    interface ChargeSucceededEvent extends EventBase {
      type: 'charge.succeeded';
      data: ChargeSucceededEvent.Data;
    }

    export namespace ChargeSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs whenever a charge description or metadata is updated, or upon an asynchronous capture.
     */
    interface ChargeUpdatedEvent extends EventBase {
      type: 'charge.updated';
      data: ChargeUpdatedEvent.Data;
    }

    export namespace ChargeUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Charge;

        previous_attributes?: Partial<Charge>;
      }
    }

    /**
     * Occurs when a payment intent using a delayed payment method fails.
     */
    interface CheckoutSessionAsyncPaymentFailedEvent extends EventBase {
      type: 'checkout.session.async_payment_failed';
      data: CheckoutSessionAsyncPaymentFailedEvent.Data;
    }

    export namespace CheckoutSessionAsyncPaymentFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Checkout.Session;

        previous_attributes?: Partial<Checkout.Session>;
      }
    }

    /**
     * Occurs when a payment intent using a delayed payment method finally succeeds.
     */
    interface CheckoutSessionAsyncPaymentSucceededEvent extends EventBase {
      type: 'checkout.session.async_payment_succeeded';
      data: CheckoutSessionAsyncPaymentSucceededEvent.Data;
    }

    export namespace CheckoutSessionAsyncPaymentSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Checkout.Session;

        previous_attributes?: Partial<Checkout.Session>;
      }
    }

    /**
     * Occurs when a Checkout Session has been successfully completed.
     */
    interface CheckoutSessionCompletedEvent extends EventBase {
      type: 'checkout.session.completed';
      data: CheckoutSessionCompletedEvent.Data;
    }

    export namespace CheckoutSessionCompletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Checkout.Session;

        previous_attributes?: Partial<Checkout.Session>;
      }
    }

    /**
     * Occurs when a Checkout Session is expired.
     */
    interface CheckoutSessionExpiredEvent extends EventBase {
      type: 'checkout.session.expired';
      data: CheckoutSessionExpiredEvent.Data;
    }

    export namespace CheckoutSessionExpiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Checkout.Session;

        previous_attributes?: Partial<Checkout.Session>;
      }
    }

    /**
     * Occurs when a Climate order is canceled.
     */
    interface ClimateOrderCanceledEvent extends EventBase {
      type: 'climate.order.canceled';
      data: ClimateOrderCanceledEvent.Data;
    }

    export namespace ClimateOrderCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Order;

        previous_attributes?: Partial<Climate.Order>;
      }
    }

    /**
     * Occurs when a Climate order is created.
     */
    interface ClimateOrderCreatedEvent extends EventBase {
      type: 'climate.order.created';
      data: ClimateOrderCreatedEvent.Data;
    }

    export namespace ClimateOrderCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Order;

        previous_attributes?: Partial<Climate.Order>;
      }
    }

    /**
     * Occurs when a Climate order is delayed.
     */
    interface ClimateOrderDelayedEvent extends EventBase {
      type: 'climate.order.delayed';
      data: ClimateOrderDelayedEvent.Data;
    }

    export namespace ClimateOrderDelayedEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Order;

        previous_attributes?: Partial<Climate.Order>;
      }
    }

    /**
     * Occurs when a Climate order is delivered.
     */
    interface ClimateOrderDeliveredEvent extends EventBase {
      type: 'climate.order.delivered';
      data: ClimateOrderDeliveredEvent.Data;
    }

    export namespace ClimateOrderDeliveredEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Order;

        previous_attributes?: Partial<Climate.Order>;
      }
    }

    /**
     * Occurs when a Climate order's product is substituted for another.
     */
    interface ClimateOrderProductSubstitutedEvent extends EventBase {
      type: 'climate.order.product_substituted';
      data: ClimateOrderProductSubstitutedEvent.Data;
    }

    export namespace ClimateOrderProductSubstitutedEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Order;

        previous_attributes?: Partial<Climate.Order>;
      }
    }

    /**
     * Occurs when a Climate product is created.
     */
    interface ClimateProductCreatedEvent extends EventBase {
      type: 'climate.product.created';
      data: ClimateProductCreatedEvent.Data;
    }

    export namespace ClimateProductCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Product;

        previous_attributes?: Partial<Climate.Product>;
      }
    }

    /**
     * Occurs when a Climate product is updated.
     */
    interface ClimateProductPricingUpdatedEvent extends EventBase {
      type: 'climate.product.pricing_updated';
      data: ClimateProductPricingUpdatedEvent.Data;
    }

    export namespace ClimateProductPricingUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Climate.Product;

        previous_attributes?: Partial<Climate.Product>;
      }
    }

    /**
     * Occurs whenever a coupon is created.
     */
    interface CouponCreatedEvent extends EventBase {
      type: 'coupon.created';
      data: CouponCreatedEvent.Data;
    }

    export namespace CouponCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Coupon;

        previous_attributes?: Partial<Coupon>;
      }
    }

    /**
     * Occurs whenever a coupon is deleted.
     */
    interface CouponDeletedEvent extends EventBase {
      type: 'coupon.deleted';
      data: CouponDeletedEvent.Data;
    }

    export namespace CouponDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Coupon;

        previous_attributes?: Partial<Coupon>;
      }
    }

    /**
     * Occurs whenever a coupon is updated.
     */
    interface CouponUpdatedEvent extends EventBase {
      type: 'coupon.updated';
      data: CouponUpdatedEvent.Data;
    }

    export namespace CouponUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Coupon;

        previous_attributes?: Partial<Coupon>;
      }
    }

    /**
     * Occurs whenever a credit note is created.
     */
    interface CreditNoteCreatedEvent extends EventBase {
      type: 'credit_note.created';
      data: CreditNoteCreatedEvent.Data;
    }

    export namespace CreditNoteCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: CreditNote;

        previous_attributes?: Partial<CreditNote>;
      }
    }

    /**
     * Occurs whenever a credit note is updated.
     */
    interface CreditNoteUpdatedEvent extends EventBase {
      type: 'credit_note.updated';
      data: CreditNoteUpdatedEvent.Data;
    }

    export namespace CreditNoteUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: CreditNote;

        previous_attributes?: Partial<CreditNote>;
      }
    }

    /**
     * Occurs whenever a credit note is voided.
     */
    interface CreditNoteVoidedEvent extends EventBase {
      type: 'credit_note.voided';
      data: CreditNoteVoidedEvent.Data;
    }

    export namespace CreditNoteVoidedEvent {
      interface Data extends Stripe.Event.Data {
        object: CreditNote;

        previous_attributes?: Partial<CreditNote>;
      }
    }

    /**
     * Occurs whenever a new customer is created.
     */
    interface CustomerCreatedEvent extends EventBase {
      type: 'customer.created';
      data: CustomerCreatedEvent.Data;
    }

    export namespace CustomerCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Customer;

        previous_attributes?: Partial<Customer>;
      }
    }

    /**
     * Occurs whenever a customer is deleted.
     */
    interface CustomerDeletedEvent extends EventBase {
      type: 'customer.deleted';
      data: CustomerDeletedEvent.Data;
    }

    export namespace CustomerDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Customer;

        previous_attributes?: Partial<Customer>;
      }
    }

    /**
     * Occurs whenever a coupon is attached to a customer.
     */
    interface CustomerDiscountCreatedEvent extends EventBase {
      type: 'customer.discount.created';
      data: CustomerDiscountCreatedEvent.Data;
    }

    export namespace CustomerDiscountCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Discount;

        previous_attributes?: Partial<Discount>;
      }
    }

    /**
     * Occurs whenever a coupon is removed from a customer.
     */
    interface CustomerDiscountDeletedEvent extends EventBase {
      type: 'customer.discount.deleted';
      data: CustomerDiscountDeletedEvent.Data;
    }

    export namespace CustomerDiscountDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Discount;

        previous_attributes?: Partial<Discount>;
      }
    }

    /**
     * Occurs whenever a customer is switched from one coupon to another.
     */
    interface CustomerDiscountUpdatedEvent extends EventBase {
      type: 'customer.discount.updated';
      data: CustomerDiscountUpdatedEvent.Data;
    }

    export namespace CustomerDiscountUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Discount;

        previous_attributes?: Partial<Discount>;
      }
    }

    /**
     * Occurs whenever a new source is created for a customer.
     */
    interface CustomerSourceCreatedEvent extends EventBase {
      type: 'customer.source.created';
      data: CustomerSourceCreatedEvent.Data;
    }

    export namespace CustomerSourceCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: CustomerSource;

        previous_attributes?: Partial<CustomerSource>;
      }
    }

    /**
     * Occurs whenever a source is removed from a customer.
     */
    interface CustomerSourceDeletedEvent extends EventBase {
      type: 'customer.source.deleted';
      data: CustomerSourceDeletedEvent.Data;
    }

    export namespace CustomerSourceDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: CustomerSource;

        previous_attributes?: Partial<CustomerSource>;
      }
    }

    /**
     * Occurs whenever a card or source will expire at the end of the month. This event only works with legacy integrations using Card or Source objects. If you use the PaymentMethod API, this event won't occur.
     */
    interface CustomerSourceExpiringEvent extends EventBase {
      type: 'customer.source.expiring';
      data: CustomerSourceExpiringEvent.Data;
    }

    export namespace CustomerSourceExpiringEvent {
      interface Data extends Stripe.Event.Data {
        object: CustomerSource;

        previous_attributes?: Partial<CustomerSource>;
      }
    }

    /**
     * Occurs whenever a source's details are changed.
     */
    interface CustomerSourceUpdatedEvent extends EventBase {
      type: 'customer.source.updated';
      data: CustomerSourceUpdatedEvent.Data;
    }

    export namespace CustomerSourceUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: CustomerSource;

        previous_attributes?: Partial<CustomerSource>;
      }
    }

    /**
     * Occurs whenever a customer is signed up for a new plan.
     */
    interface CustomerSubscriptionCreatedEvent extends EventBase {
      type: 'customer.subscription.created';
      data: CustomerSubscriptionCreatedEvent.Data;
    }

    export namespace CustomerSubscriptionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a customer's subscription ends.
     */
    interface CustomerSubscriptionDeletedEvent extends EventBase {
      type: 'customer.subscription.deleted';
      data: CustomerSubscriptionDeletedEvent.Data;
    }

    export namespace CustomerSubscriptionDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a customer's subscription is paused. Only applies when subscriptions enter `status=paused`, not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is paused.
     */
    interface CustomerSubscriptionPausedEvent extends EventBase {
      type: 'customer.subscription.paused';
      data: CustomerSubscriptionPausedEvent.Data;
    }

    export namespace CustomerSubscriptionPausedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated.
     */
    interface CustomerSubscriptionPendingUpdateAppliedEvent extends EventBase {
      type: 'customer.subscription.pending_update_applied';
      data: CustomerSubscriptionPendingUpdateAppliedEvent.Data;
    }

    export namespace CustomerSubscriptionPendingUpdateAppliedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a customer's subscription's pending update expires before the related invoice is paid.
     */
    interface CustomerSubscriptionPendingUpdateExpiredEvent extends EventBase {
      type: 'customer.subscription.pending_update_expired';
      data: CustomerSubscriptionPendingUpdateExpiredEvent.Data;
    }

    export namespace CustomerSubscriptionPendingUpdateExpiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a customer's subscription is no longer paused. Only applies when a `status=paused` subscription is [resumed](https://docs.stripe.com/api/subscriptions/resume), not when [payment collection](https://docs.stripe.com/billing/subscriptions/pause) is resumed.
     */
    interface CustomerSubscriptionResumedEvent extends EventBase {
      type: 'customer.subscription.resumed';
      data: CustomerSubscriptionResumedEvent.Data;
    }

    export namespace CustomerSubscriptionResumedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using `trial_end=now`).
     */
    interface CustomerSubscriptionTrialWillEndEvent extends EventBase {
      type: 'customer.subscription.trial_will_end';
      data: CustomerSubscriptionTrialWillEndEvent.Data;
    }

    export namespace CustomerSubscriptionTrialWillEndEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active).
     */
    interface CustomerSubscriptionUpdatedEvent extends EventBase {
      type: 'customer.subscription.updated';
      data: CustomerSubscriptionUpdatedEvent.Data;
    }

    export namespace CustomerSubscriptionUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Subscription;

        previous_attributes?: Partial<Subscription>;
      }
    }

    /**
     * Occurs whenever a tax ID is created for a customer.
     */
    interface CustomerTaxIdCreatedEvent extends EventBase {
      type: 'customer.tax_id.created';
      data: CustomerTaxIdCreatedEvent.Data;
    }

    export namespace CustomerTaxIdCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: TaxId;

        previous_attributes?: Partial<TaxId>;
      }
    }

    /**
     * Occurs whenever a tax ID is deleted from a customer.
     */
    interface CustomerTaxIdDeletedEvent extends EventBase {
      type: 'customer.tax_id.deleted';
      data: CustomerTaxIdDeletedEvent.Data;
    }

    export namespace CustomerTaxIdDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: TaxId;

        previous_attributes?: Partial<TaxId>;
      }
    }

    /**
     * Occurs whenever a customer's tax ID is updated.
     */
    interface CustomerTaxIdUpdatedEvent extends EventBase {
      type: 'customer.tax_id.updated';
      data: CustomerTaxIdUpdatedEvent.Data;
    }

    export namespace CustomerTaxIdUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: TaxId;

        previous_attributes?: Partial<TaxId>;
      }
    }

    /**
     * Occurs whenever any property of a customer changes.
     */
    interface CustomerUpdatedEvent extends EventBase {
      type: 'customer.updated';
      data: CustomerUpdatedEvent.Data;
    }

    export namespace CustomerUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Customer;

        previous_attributes?: Partial<Customer>;
      }
    }

    /**
     * Occurs whenever a new customer cash balance transactions is created.
     */
    interface CustomerCashBalanceTransactionCreatedEvent extends EventBase {
      type: 'customer_cash_balance_transaction.created';
      data: CustomerCashBalanceTransactionCreatedEvent.Data;
    }

    export namespace CustomerCashBalanceTransactionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: CustomerCashBalanceTransaction;

        previous_attributes?: Partial<CustomerCashBalanceTransaction>;
      }
    }

    /**
     * Occurs whenever a customer's entitlements change.
     */
    interface EntitlementsActiveEntitlementSummaryUpdatedEvent
      extends EventBase {
      type: 'entitlements.active_entitlement_summary.updated';
      data: EntitlementsActiveEntitlementSummaryUpdatedEvent.Data;
    }

    export namespace EntitlementsActiveEntitlementSummaryUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Entitlements.ActiveEntitlementSummary;

        previous_attributes?: Partial<Entitlements.ActiveEntitlementSummary>;
      }
    }

    /**
     * Occurs whenever a new Stripe-generated file is available for your account.
     */
    interface FileCreatedEvent extends EventBase {
      type: 'file.created';
      data: FileCreatedEvent.Data;
    }

    export namespace FileCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: File;

        previous_attributes?: Partial<File>;
      }
    }

    /**
     * Occurs when a Financial Connections account's account numbers are updated.
     */
    interface FinancialConnectionsAccountAccountNumbersUpdatedEvent
      extends EventBase {
      type: 'financial_connections.account.account_numbers_updated';
      data: FinancialConnectionsAccountAccountNumbersUpdatedEvent.Data;
    }

    namespace FinancialConnectionsAccountAccountNumbersUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Stripe.FinancialConnections.Account;

        previous_attributes?: Partial<Stripe.FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when a new Financial Connections account is created.
     */
    interface FinancialConnectionsAccountCreatedEvent extends EventBase {
      type: 'financial_connections.account.created';
      data: FinancialConnectionsAccountCreatedEvent.Data;
    }

    export namespace FinancialConnectionsAccountCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `active` to `inactive`.
     */
    interface FinancialConnectionsAccountDeactivatedEvent extends EventBase {
      type: 'financial_connections.account.deactivated';
      data: FinancialConnectionsAccountDeactivatedEvent.Data;
    }

    export namespace FinancialConnectionsAccountDeactivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when a Financial Connections account is disconnected.
     */
    interface FinancialConnectionsAccountDisconnectedEvent extends EventBase {
      type: 'financial_connections.account.disconnected';
      data: FinancialConnectionsAccountDisconnectedEvent.Data;
    }

    export namespace FinancialConnectionsAccountDisconnectedEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when a Financial Connections account's status is updated from `inactive` to `active`.
     */
    interface FinancialConnectionsAccountReactivatedEvent extends EventBase {
      type: 'financial_connections.account.reactivated';
      data: FinancialConnectionsAccountReactivatedEvent.Data;
    }

    export namespace FinancialConnectionsAccountReactivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when an Account’s `balance_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    interface FinancialConnectionsAccountRefreshedBalanceEvent
      extends EventBase {
      type: 'financial_connections.account.refreshed_balance';
      data: FinancialConnectionsAccountRefreshedBalanceEvent.Data;
    }

    export namespace FinancialConnectionsAccountRefreshedBalanceEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when an Account’s `ownership_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    interface FinancialConnectionsAccountRefreshedOwnershipEvent
      extends EventBase {
      type: 'financial_connections.account.refreshed_ownership';
      data: FinancialConnectionsAccountRefreshedOwnershipEvent.Data;
    }

    export namespace FinancialConnectionsAccountRefreshedOwnershipEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when an Account’s `transaction_refresh` status transitions from `pending` to either `succeeded` or `failed`.
     */
    interface FinancialConnectionsAccountRefreshedTransactionsEvent
      extends EventBase {
      type: 'financial_connections.account.refreshed_transactions';
      data: FinancialConnectionsAccountRefreshedTransactionsEvent.Data;
    }

    export namespace FinancialConnectionsAccountRefreshedTransactionsEvent {
      interface Data extends Stripe.Event.Data {
        object: FinancialConnections.Account;

        previous_attributes?: Partial<FinancialConnections.Account>;
      }
    }

    /**
     * Occurs when an Account’s tokenized account number is about to expire.
     */
    interface FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent
      extends EventBase {
      type: 'financial_connections.account.upcoming_account_number_expiry';
      data: FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent.Data;
    }

    namespace FinancialConnectionsAccountUpcomingAccountNumberExpiryEvent {
      interface Data extends Stripe.Event.Data {
        object: Stripe.FinancialConnections.Account;

        previous_attributes?: Partial<Stripe.FinancialConnections.Account>;
      }
    }

    /**
     * Occurs whenever a VerificationSession is canceled
     */
    interface IdentityVerificationSessionCanceledEvent extends EventBase {
      type: 'identity.verification_session.canceled';
      data: IdentityVerificationSessionCanceledEvent.Data;
    }

    export namespace IdentityVerificationSessionCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a VerificationSession is created
     */
    interface IdentityVerificationSessionCreatedEvent extends EventBase {
      type: 'identity.verification_session.created';
      data: IdentityVerificationSessionCreatedEvent.Data;
    }

    export namespace IdentityVerificationSessionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a VerificationSession transitions to processing
     */
    interface IdentityVerificationSessionProcessingEvent extends EventBase {
      type: 'identity.verification_session.processing';
      data: IdentityVerificationSessionProcessingEvent.Data;
    }

    export namespace IdentityVerificationSessionProcessingEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a VerificationSession is redacted.
     */
    interface IdentityVerificationSessionRedactedEvent extends EventBase {
      type: 'identity.verification_session.redacted';
      data: IdentityVerificationSessionRedactedEvent.Data;
    }

    export namespace IdentityVerificationSessionRedactedEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a VerificationSession transitions to require user input
     */
    interface IdentityVerificationSessionRequiresInputEvent extends EventBase {
      type: 'identity.verification_session.requires_input';
      data: IdentityVerificationSessionRequiresInputEvent.Data;
    }

    export namespace IdentityVerificationSessionRequiresInputEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a VerificationSession transitions to verified
     */
    interface IdentityVerificationSessionVerifiedEvent extends EventBase {
      type: 'identity.verification_session.verified';
      data: IdentityVerificationSessionVerifiedEvent.Data;
    }

    export namespace IdentityVerificationSessionVerifiedEvent {
      interface Data extends Stripe.Event.Data {
        object: Identity.VerificationSession;

        previous_attributes?: Partial<Identity.VerificationSession>;
      }
    }

    /**
     * Occurs whenever a new invoice is created. To learn how webhooks can be used with this event, and how they can affect it, see [Using Webhooks with Subscriptions](https://docs.stripe.com/subscriptions/webhooks).
     */
    interface InvoiceCreatedEvent extends EventBase {
      type: 'invoice.created';
      data: InvoiceCreatedEvent.Data;
    }

    export namespace InvoiceCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever a draft invoice is deleted. Note: This event is not sent for [invoice previews](https://docs.stripe.com/api/invoices/create_preview).
     */
    interface InvoiceDeletedEvent extends EventBase {
      type: 'invoice.deleted';
      data: InvoiceDeletedEvent.Data;
    }

    export namespace InvoiceDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever a draft invoice cannot be finalized. See the invoice’s [last finalization error](https://docs.stripe.com/api/invoices/object#invoice_object-last_finalization_error) for details.
     */
    interface InvoiceFinalizationFailedEvent extends EventBase {
      type: 'invoice.finalization_failed';
      data: InvoiceFinalizationFailedEvent.Data;
    }

    export namespace InvoiceFinalizationFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever a draft invoice is finalized and updated to be an open invoice.
     */
    interface InvoiceFinalizedEvent extends EventBase {
      type: 'invoice.finalized';
      data: InvoiceFinalizedEvent.Data;
    }

    export namespace InvoiceFinalizedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice is marked uncollectible.
     */
    interface InvoiceMarkedUncollectibleEvent extends EventBase {
      type: 'invoice.marked_uncollectible';
      data: InvoiceMarkedUncollectibleEvent.Data;
    }

    export namespace InvoiceMarkedUncollectibleEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs X number of days after an invoice becomes due&mdash;where X is determined by Automations
     */
    interface InvoiceOverdueEvent extends EventBase {
      type: 'invoice.overdue';
      data: InvoiceOverdueEvent.Data;
    }

    export namespace InvoiceOverdueEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs when an invoice transitions to paid with a non-zero amount_overpaid.
     */
    interface InvoiceOverpaidEvent extends EventBase {
      type: 'invoice.overpaid';
      data: InvoiceOverpaidEvent.Data;
    }

    export namespace InvoiceOverpaidEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band.
     */
    interface InvoicePaidEvent extends EventBase {
      type: 'invoice.paid';
      data: InvoicePaidEvent.Data;
    }

    export namespace InvoicePaidEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice payment attempt requires further user action to complete.
     */
    interface InvoicePaymentActionRequiredEvent extends EventBase {
      type: 'invoice.payment_action_required';
      data: InvoicePaymentActionRequiredEvent.Data;
    }

    export namespace InvoicePaymentActionRequiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs when an invoice requires a payment using a payment method that cannot be processed by Stripe.
     */
    interface InvoicePaymentAttemptRequiredEvent extends EventBase {
      type: 'invoice.payment_attempt_required';
      data: InvoicePaymentAttemptRequiredEvent.Data;
    }

    export namespace InvoicePaymentAttemptRequiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice payment attempt fails, due to either a declined payment, including soft decline, or to the lack of a stored payment method.
     */
    interface InvoicePaymentFailedEvent extends EventBase {
      type: 'invoice.payment_failed';
      data: InvoicePaymentFailedEvent.Data;
    }

    export namespace InvoicePaymentFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice payment attempt succeeds.
     */
    interface InvoicePaymentSucceededEvent extends EventBase {
      type: 'invoice.payment_succeeded';
      data: InvoicePaymentSucceededEvent.Data;
    }

    export namespace InvoicePaymentSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice email is sent out.
     */
    interface InvoiceSentEvent extends EventBase {
      type: 'invoice.sent';
      data: InvoiceSentEvent.Data;
    }

    export namespace InvoiceSentEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged&mdash;where X is determined by your [subscriptions settings](https://dashboard.stripe.com/account/billing/automatic). Note: The received `Invoice` object will not have an invoice ID.
     */
    interface InvoiceUpcomingEvent extends EventBase {
      type: 'invoice.upcoming';
      data: InvoiceUpcomingEvent.Data;
    }

    export namespace InvoiceUpcomingEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice changes (e.g., the invoice amount).
     */
    interface InvoiceUpdatedEvent extends EventBase {
      type: 'invoice.updated';
      data: InvoiceUpdatedEvent.Data;
    }

    export namespace InvoiceUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs whenever an invoice is voided.
     */
    interface InvoiceVoidedEvent extends EventBase {
      type: 'invoice.voided';
      data: InvoiceVoidedEvent.Data;
    }

    export namespace InvoiceVoidedEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs X number of days before an invoice becomes due&mdash;where X is determined by Automations
     */
    interface InvoiceWillBeDueEvent extends EventBase {
      type: 'invoice.will_be_due';
      data: InvoiceWillBeDueEvent.Data;
    }

    export namespace InvoiceWillBeDueEvent {
      interface Data extends Stripe.Event.Data {
        object: Invoice;

        previous_attributes?: Partial<Invoice>;
      }
    }

    /**
     * Occurs when an InvoicePayment is successfully paid.
     */
    interface InvoicePaymentPaidEvent extends EventBase {
      type: 'invoice_payment.paid';
      data: InvoicePaymentPaidEvent.Data;
    }

    export namespace InvoicePaymentPaidEvent {
      interface Data extends Stripe.Event.Data {
        object: InvoicePayment;

        previous_attributes?: Partial<InvoicePayment>;
      }
    }

    /**
     * Occurs whenever an invoice item is created.
     */
    interface InvoiceItemCreatedEvent extends EventBase {
      type: 'invoiceitem.created';
      data: InvoiceItemCreatedEvent.Data;
    }

    export namespace InvoiceItemCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: InvoiceItem;

        previous_attributes?: Partial<InvoiceItem>;
      }
    }

    /**
     * Occurs whenever an invoice item is deleted.
     */
    interface InvoiceItemDeletedEvent extends EventBase {
      type: 'invoiceitem.deleted';
      data: InvoiceItemDeletedEvent.Data;
    }

    export namespace InvoiceItemDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: InvoiceItem;

        previous_attributes?: Partial<InvoiceItem>;
      }
    }

    /**
     * Occurs whenever an authorization is created.
     */
    interface IssuingAuthorizationCreatedEvent extends EventBase {
      type: 'issuing_authorization.created';
      data: IssuingAuthorizationCreatedEvent.Data;
    }

    export namespace IssuingAuthorizationCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Authorization;

        previous_attributes?: Partial<Issuing.Authorization>;
      }
    }

    /**
     * Represents a synchronous request for authorization, see [Using your integration to handle authorization requests](https://docs.stripe.com/issuing/purchases/authorizations#authorization-handling).
     */
    interface IssuingAuthorizationRequestEvent extends EventBase {
      type: 'issuing_authorization.request';
      data: IssuingAuthorizationRequestEvent.Data;
    }

    export namespace IssuingAuthorizationRequestEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Authorization;

        previous_attributes?: Partial<Issuing.Authorization>;
      }
    }

    /**
     * Occurs whenever an authorization is updated.
     */
    interface IssuingAuthorizationUpdatedEvent extends EventBase {
      type: 'issuing_authorization.updated';
      data: IssuingAuthorizationUpdatedEvent.Data;
    }

    export namespace IssuingAuthorizationUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Authorization;

        previous_attributes?: Partial<Issuing.Authorization>;
      }
    }

    /**
     * Occurs whenever a card is created.
     */
    interface IssuingCardCreatedEvent extends EventBase {
      type: 'issuing_card.created';
      data: IssuingCardCreatedEvent.Data;
    }

    export namespace IssuingCardCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Card;

        previous_attributes?: Partial<Issuing.Card>;
      }
    }

    /**
     * Occurs whenever a card is updated.
     */
    interface IssuingCardUpdatedEvent extends EventBase {
      type: 'issuing_card.updated';
      data: IssuingCardUpdatedEvent.Data;
    }

    export namespace IssuingCardUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Card;

        previous_attributes?: Partial<Issuing.Card>;
      }
    }

    /**
     * Occurs whenever a cardholder is created.
     */
    interface IssuingCardholderCreatedEvent extends EventBase {
      type: 'issuing_cardholder.created';
      data: IssuingCardholderCreatedEvent.Data;
    }

    export namespace IssuingCardholderCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Cardholder;

        previous_attributes?: Partial<Issuing.Cardholder>;
      }
    }

    /**
     * Occurs whenever a cardholder is updated.
     */
    interface IssuingCardholderUpdatedEvent extends EventBase {
      type: 'issuing_cardholder.updated';
      data: IssuingCardholderUpdatedEvent.Data;
    }

    export namespace IssuingCardholderUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Cardholder;

        previous_attributes?: Partial<Issuing.Cardholder>;
      }
    }

    /**
     * Occurs whenever a dispute is won, lost or expired.
     */
    interface IssuingDisputeClosedEvent extends EventBase {
      type: 'issuing_dispute.closed';
      data: IssuingDisputeClosedEvent.Data;
    }

    export namespace IssuingDisputeClosedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever a dispute is created.
     */
    interface IssuingDisputeCreatedEvent extends EventBase {
      type: 'issuing_dispute.created';
      data: IssuingDisputeCreatedEvent.Data;
    }

    export namespace IssuingDisputeCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever funds are reinstated to your account for an Issuing dispute.
     */
    interface IssuingDisputeFundsReinstatedEvent extends EventBase {
      type: 'issuing_dispute.funds_reinstated';
      data: IssuingDisputeFundsReinstatedEvent.Data;
    }

    export namespace IssuingDisputeFundsReinstatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever funds are deducted from your account for an Issuing dispute.
     */
    interface IssuingDisputeFundsRescindedEvent extends EventBase {
      type: 'issuing_dispute.funds_rescinded';
      data: IssuingDisputeFundsRescindedEvent.Data;
    }

    export namespace IssuingDisputeFundsRescindedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever a dispute is submitted.
     */
    interface IssuingDisputeSubmittedEvent extends EventBase {
      type: 'issuing_dispute.submitted';
      data: IssuingDisputeSubmittedEvent.Data;
    }

    export namespace IssuingDisputeSubmittedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever a dispute is updated.
     */
    interface IssuingDisputeUpdatedEvent extends EventBase {
      type: 'issuing_dispute.updated';
      data: IssuingDisputeUpdatedEvent.Data;
    }

    export namespace IssuingDisputeUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Dispute;

        previous_attributes?: Partial<Issuing.Dispute>;
      }
    }

    /**
     * Occurs whenever a personalization design is activated following the activation of the physical bundle that belongs to it.
     */
    interface IssuingPersonalizationDesignActivatedEvent extends EventBase {
      type: 'issuing_personalization_design.activated';
      data: IssuingPersonalizationDesignActivatedEvent.Data;
    }

    export namespace IssuingPersonalizationDesignActivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.PersonalizationDesign;

        previous_attributes?: Partial<Issuing.PersonalizationDesign>;
      }
    }

    /**
     * Occurs whenever a personalization design is deactivated following the deactivation of the physical bundle that belongs to it.
     */
    interface IssuingPersonalizationDesignDeactivatedEvent extends EventBase {
      type: 'issuing_personalization_design.deactivated';
      data: IssuingPersonalizationDesignDeactivatedEvent.Data;
    }

    export namespace IssuingPersonalizationDesignDeactivatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.PersonalizationDesign;

        previous_attributes?: Partial<Issuing.PersonalizationDesign>;
      }
    }

    /**
     * Occurs whenever a personalization design is rejected by design review.
     */
    interface IssuingPersonalizationDesignRejectedEvent extends EventBase {
      type: 'issuing_personalization_design.rejected';
      data: IssuingPersonalizationDesignRejectedEvent.Data;
    }

    export namespace IssuingPersonalizationDesignRejectedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.PersonalizationDesign;

        previous_attributes?: Partial<Issuing.PersonalizationDesign>;
      }
    }

    /**
     * Occurs whenever a personalization design is updated.
     */
    interface IssuingPersonalizationDesignUpdatedEvent extends EventBase {
      type: 'issuing_personalization_design.updated';
      data: IssuingPersonalizationDesignUpdatedEvent.Data;
    }

    export namespace IssuingPersonalizationDesignUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.PersonalizationDesign;

        previous_attributes?: Partial<Issuing.PersonalizationDesign>;
      }
    }

    /**
     * Occurs whenever an issuing digital wallet token is created.
     */
    interface IssuingTokenCreatedEvent extends EventBase {
      type: 'issuing_token.created';
      data: IssuingTokenCreatedEvent.Data;
    }

    export namespace IssuingTokenCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Token;

        previous_attributes?: Partial<Issuing.Token>;
      }
    }

    /**
     * Occurs whenever an issuing digital wallet token is updated.
     */
    interface IssuingTokenUpdatedEvent extends EventBase {
      type: 'issuing_token.updated';
      data: IssuingTokenUpdatedEvent.Data;
    }

    export namespace IssuingTokenUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Token;

        previous_attributes?: Partial<Issuing.Token>;
      }
    }

    /**
     * Occurs whenever an issuing transaction is created.
     */
    interface IssuingTransactionCreatedEvent extends EventBase {
      type: 'issuing_transaction.created';
      data: IssuingTransactionCreatedEvent.Data;
    }

    export namespace IssuingTransactionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Transaction;

        previous_attributes?: Partial<Issuing.Transaction>;
      }
    }

    /**
     * Occurs whenever an issuing transaction is updated with receipt data.
     */
    interface IssuingTransactionPurchaseDetailsReceiptUpdatedEvent
      extends EventBase {
      type: 'issuing_transaction.purchase_details_receipt_updated';
      data: IssuingTransactionPurchaseDetailsReceiptUpdatedEvent.Data;
    }

    export namespace IssuingTransactionPurchaseDetailsReceiptUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Transaction;

        previous_attributes?: Partial<Issuing.Transaction>;
      }
    }

    /**
     * Occurs whenever an issuing transaction is updated.
     */
    interface IssuingTransactionUpdatedEvent extends EventBase {
      type: 'issuing_transaction.updated';
      data: IssuingTransactionUpdatedEvent.Data;
    }

    export namespace IssuingTransactionUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Issuing.Transaction;

        previous_attributes?: Partial<Issuing.Transaction>;
      }
    }

    /**
     * Occurs whenever a Mandate is updated.
     */
    interface MandateUpdatedEvent extends EventBase {
      type: 'mandate.updated';
      data: MandateUpdatedEvent.Data;
    }

    export namespace MandateUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Mandate;

        previous_attributes?: Partial<Mandate>;
      }
    }

    /**
     * Occurs when a PaymentIntent has funds to be captured. Check the `amount_capturable` property on the PaymentIntent to determine the amount that can be captured. You may capture the PaymentIntent with an `amount_to_capture` value up to the specified amount. [Learn more about capturing PaymentIntents.](https://docs.stripe.com/api/payment_intents/capture)
     */
    interface PaymentIntentAmountCapturableUpdatedEvent extends EventBase {
      type: 'payment_intent.amount_capturable_updated';
      data: PaymentIntentAmountCapturableUpdatedEvent.Data;
    }

    export namespace PaymentIntentAmountCapturableUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a PaymentIntent is canceled.
     */
    interface PaymentIntentCanceledEvent extends EventBase {
      type: 'payment_intent.canceled';
      data: PaymentIntentCanceledEvent.Data;
    }

    export namespace PaymentIntentCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a new PaymentIntent is created.
     */
    interface PaymentIntentCreatedEvent extends EventBase {
      type: 'payment_intent.created';
      data: PaymentIntentCreatedEvent.Data;
    }

    export namespace PaymentIntentCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when funds are applied to a customer_balance PaymentIntent and the 'amount_remaining' changes.
     */
    interface PaymentIntentPartiallyFundedEvent extends EventBase {
      type: 'payment_intent.partially_funded';
      data: PaymentIntentPartiallyFundedEvent.Data;
    }

    export namespace PaymentIntentPartiallyFundedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment.
     */
    interface PaymentIntentPaymentFailedEvent extends EventBase {
      type: 'payment_intent.payment_failed';
      data: PaymentIntentPaymentFailedEvent.Data;
    }

    export namespace PaymentIntentPaymentFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a PaymentIntent has started processing.
     */
    interface PaymentIntentProcessingEvent extends EventBase {
      type: 'payment_intent.processing';
      data: PaymentIntentProcessingEvent.Data;
    }

    export namespace PaymentIntentProcessingEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a PaymentIntent transitions to requires_action state
     */
    interface PaymentIntentRequiresActionEvent extends EventBase {
      type: 'payment_intent.requires_action';
      data: PaymentIntentRequiresActionEvent.Data;
    }

    export namespace PaymentIntentRequiresActionEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a PaymentIntent has successfully completed payment.
     */
    interface PaymentIntentSucceededEvent extends EventBase {
      type: 'payment_intent.succeeded';
      data: PaymentIntentSucceededEvent.Data;
    }

    export namespace PaymentIntentSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentIntent;

        previous_attributes?: Partial<PaymentIntent>;
      }
    }

    /**
     * Occurs when a payment link is created.
     */
    interface PaymentLinkCreatedEvent extends EventBase {
      type: 'payment_link.created';
      data: PaymentLinkCreatedEvent.Data;
    }

    export namespace PaymentLinkCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentLink;

        previous_attributes?: Partial<PaymentLink>;
      }
    }

    /**
     * Occurs when a payment link is updated.
     */
    interface PaymentLinkUpdatedEvent extends EventBase {
      type: 'payment_link.updated';
      data: PaymentLinkUpdatedEvent.Data;
    }

    export namespace PaymentLinkUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentLink;

        previous_attributes?: Partial<PaymentLink>;
      }
    }

    /**
     * Occurs whenever a new payment method is attached to a customer.
     */
    interface PaymentMethodAttachedEvent extends EventBase {
      type: 'payment_method.attached';
      data: PaymentMethodAttachedEvent.Data;
    }

    export namespace PaymentMethodAttachedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentMethod;

        previous_attributes?: Partial<PaymentMethod>;
      }
    }

    /**
     * Occurs whenever a payment method's details are automatically updated by the network.
     */
    interface PaymentMethodAutomaticallyUpdatedEvent extends EventBase {
      type: 'payment_method.automatically_updated';
      data: PaymentMethodAutomaticallyUpdatedEvent.Data;
    }

    export namespace PaymentMethodAutomaticallyUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentMethod;

        previous_attributes?: Partial<PaymentMethod>;
      }
    }

    /**
     * Occurs whenever a payment method is detached from a customer.
     */
    interface PaymentMethodDetachedEvent extends EventBase {
      type: 'payment_method.detached';
      data: PaymentMethodDetachedEvent.Data;
    }

    export namespace PaymentMethodDetachedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentMethod;

        previous_attributes?: Partial<PaymentMethod>;
      }
    }

    /**
     * Occurs whenever a payment method is updated via the [PaymentMethod update API](https://docs.stripe.com/api/payment_methods/update).
     */
    interface PaymentMethodUpdatedEvent extends EventBase {
      type: 'payment_method.updated';
      data: PaymentMethodUpdatedEvent.Data;
    }

    export namespace PaymentMethodUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PaymentMethod;

        previous_attributes?: Partial<PaymentMethod>;
      }
    }

    /**
     * Occurs whenever a payout is canceled.
     */
    interface PayoutCanceledEvent extends EventBase {
      type: 'payout.canceled';
      data: PayoutCanceledEvent.Data;
    }

    export namespace PayoutCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever a payout is created.
     */
    interface PayoutCreatedEvent extends EventBase {
      type: 'payout.created';
      data: PayoutCreatedEvent.Data;
    }

    export namespace PayoutCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever a payout attempt fails.
     */
    interface PayoutFailedEvent extends EventBase {
      type: 'payout.failed';
      data: PayoutFailedEvent.Data;
    }

    export namespace PayoutFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever a payout is *expected* to be available in the destination account. If the payout fails, a `payout.failed` notification is also sent, at a later time.
     */
    interface PayoutPaidEvent extends EventBase {
      type: 'payout.paid';
      data: PayoutPaidEvent.Data;
    }

    export namespace PayoutPaidEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever balance transactions paid out in an automatic payout can be queried.
     */
    interface PayoutReconciliationCompletedEvent extends EventBase {
      type: 'payout.reconciliation_completed';
      data: PayoutReconciliationCompletedEvent.Data;
    }

    export namespace PayoutReconciliationCompletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever a payout is updated.
     */
    interface PayoutUpdatedEvent extends EventBase {
      type: 'payout.updated';
      data: PayoutUpdatedEvent.Data;
    }

    export namespace PayoutUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Payout;

        previous_attributes?: Partial<Payout>;
      }
    }

    /**
     * Occurs whenever a person associated with an account is created.
     */
    interface PersonCreatedEvent extends EventBase {
      type: 'person.created';
      data: PersonCreatedEvent.Data;
    }

    export namespace PersonCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Person;

        previous_attributes?: Partial<Person>;
      }
    }

    /**
     * Occurs whenever a person associated with an account is deleted.
     */
    interface PersonDeletedEvent extends EventBase {
      type: 'person.deleted';
      data: PersonDeletedEvent.Data;
    }

    export namespace PersonDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Person;

        previous_attributes?: Partial<Person>;
      }
    }

    /**
     * Occurs whenever a person associated with an account is updated.
     */
    interface PersonUpdatedEvent extends EventBase {
      type: 'person.updated';
      data: PersonUpdatedEvent.Data;
    }

    export namespace PersonUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Person;

        previous_attributes?: Partial<Person>;
      }
    }

    /**
     * Occurs whenever a plan is created.
     */
    interface PlanCreatedEvent extends EventBase {
      type: 'plan.created';
      data: PlanCreatedEvent.Data;
    }

    export namespace PlanCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Plan;

        previous_attributes?: Partial<Plan>;
      }
    }

    /**
     * Occurs whenever a plan is deleted.
     */
    interface PlanDeletedEvent extends EventBase {
      type: 'plan.deleted';
      data: PlanDeletedEvent.Data;
    }

    export namespace PlanDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Plan;

        previous_attributes?: Partial<Plan>;
      }
    }

    /**
     * Occurs whenever a plan is updated.
     */
    interface PlanUpdatedEvent extends EventBase {
      type: 'plan.updated';
      data: PlanUpdatedEvent.Data;
    }

    export namespace PlanUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Plan;

        previous_attributes?: Partial<Plan>;
      }
    }

    /**
     * Occurs whenever a price is created.
     */
    interface PriceCreatedEvent extends EventBase {
      type: 'price.created';
      data: PriceCreatedEvent.Data;
    }

    export namespace PriceCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Price;

        previous_attributes?: Partial<Price>;
      }
    }

    /**
     * Occurs whenever a price is deleted.
     */
    interface PriceDeletedEvent extends EventBase {
      type: 'price.deleted';
      data: PriceDeletedEvent.Data;
    }

    export namespace PriceDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Price;

        previous_attributes?: Partial<Price>;
      }
    }

    /**
     * Occurs whenever a price is updated.
     */
    interface PriceUpdatedEvent extends EventBase {
      type: 'price.updated';
      data: PriceUpdatedEvent.Data;
    }

    export namespace PriceUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Price;

        previous_attributes?: Partial<Price>;
      }
    }

    /**
     * Occurs whenever a product is created.
     */
    interface ProductCreatedEvent extends EventBase {
      type: 'product.created';
      data: ProductCreatedEvent.Data;
    }

    export namespace ProductCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Product;

        previous_attributes?: Partial<Product>;
      }
    }

    /**
     * Occurs whenever a product is deleted.
     */
    interface ProductDeletedEvent extends EventBase {
      type: 'product.deleted';
      data: ProductDeletedEvent.Data;
    }

    export namespace ProductDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Product;

        previous_attributes?: Partial<Product>;
      }
    }

    /**
     * Occurs whenever a product is updated.
     */
    interface ProductUpdatedEvent extends EventBase {
      type: 'product.updated';
      data: ProductUpdatedEvent.Data;
    }

    export namespace ProductUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Product;

        previous_attributes?: Partial<Product>;
      }
    }

    /**
     * Occurs whenever a promotion code is created.
     */
    interface PromotionCodeCreatedEvent extends EventBase {
      type: 'promotion_code.created';
      data: PromotionCodeCreatedEvent.Data;
    }

    export namespace PromotionCodeCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PromotionCode;

        previous_attributes?: Partial<PromotionCode>;
      }
    }

    /**
     * Occurs whenever a promotion code is updated.
     */
    interface PromotionCodeUpdatedEvent extends EventBase {
      type: 'promotion_code.updated';
      data: PromotionCodeUpdatedEvent.Data;
    }

    export namespace PromotionCodeUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: PromotionCode;

        previous_attributes?: Partial<PromotionCode>;
      }
    }

    /**
     * Occurs whenever a quote is accepted.
     */
    interface QuoteAcceptedEvent extends EventBase {
      type: 'quote.accepted';
      data: QuoteAcceptedEvent.Data;
    }

    export namespace QuoteAcceptedEvent {
      interface Data extends Stripe.Event.Data {
        object: Quote;

        previous_attributes?: Partial<Quote>;
      }
    }

    /**
     * Occurs whenever a quote is canceled.
     */
    interface QuoteCanceledEvent extends EventBase {
      type: 'quote.canceled';
      data: QuoteCanceledEvent.Data;
    }

    export namespace QuoteCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Quote;

        previous_attributes?: Partial<Quote>;
      }
    }

    /**
     * Occurs whenever a quote is created.
     */
    interface QuoteCreatedEvent extends EventBase {
      type: 'quote.created';
      data: QuoteCreatedEvent.Data;
    }

    export namespace QuoteCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Quote;

        previous_attributes?: Partial<Quote>;
      }
    }

    /**
     * Occurs whenever a quote is finalized.
     */
    interface QuoteFinalizedEvent extends EventBase {
      type: 'quote.finalized';
      data: QuoteFinalizedEvent.Data;
    }

    export namespace QuoteFinalizedEvent {
      interface Data extends Stripe.Event.Data {
        object: Quote;

        previous_attributes?: Partial<Quote>;
      }
    }

    /**
     * Occurs whenever an early fraud warning is created.
     */
    interface RadarEarlyFraudWarningCreatedEvent extends EventBase {
      type: 'radar.early_fraud_warning.created';
      data: RadarEarlyFraudWarningCreatedEvent.Data;
    }

    export namespace RadarEarlyFraudWarningCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Radar.EarlyFraudWarning;

        previous_attributes?: Partial<Radar.EarlyFraudWarning>;
      }
    }

    /**
     * Occurs whenever an early fraud warning is updated.
     */
    interface RadarEarlyFraudWarningUpdatedEvent extends EventBase {
      type: 'radar.early_fraud_warning.updated';
      data: RadarEarlyFraudWarningUpdatedEvent.Data;
    }

    export namespace RadarEarlyFraudWarningUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Radar.EarlyFraudWarning;

        previous_attributes?: Partial<Radar.EarlyFraudWarning>;
      }
    }

    /**
     * Occurs whenever a refund is created.
     */
    interface RefundCreatedEvent extends EventBase {
      type: 'refund.created';
      data: RefundCreatedEvent.Data;
    }

    export namespace RefundCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Refund;

        previous_attributes?: Partial<Refund>;
      }
    }

    /**
     * Occurs whenever a refund has failed.
     */
    interface RefundFailedEvent extends EventBase {
      type: 'refund.failed';
      data: RefundFailedEvent.Data;
    }

    export namespace RefundFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Refund;

        previous_attributes?: Partial<Refund>;
      }
    }

    /**
     * Occurs whenever a refund is updated.
     */
    interface RefundUpdatedEvent extends EventBase {
      type: 'refund.updated';
      data: RefundUpdatedEvent.Data;
    }

    export namespace RefundUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Refund;

        previous_attributes?: Partial<Refund>;
      }
    }

    /**
     * Occurs whenever a requested `ReportRun` failed to complete.
     */
    interface ReportingReportRunFailedEvent extends EventBase {
      type: 'reporting.report_run.failed';
      data: ReportingReportRunFailedEvent.Data;
    }

    export namespace ReportingReportRunFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Reporting.ReportRun;

        previous_attributes?: Partial<Reporting.ReportRun>;
      }
    }

    /**
     * Occurs whenever a requested `ReportRun` completed successfully.
     */
    interface ReportingReportRunSucceededEvent extends EventBase {
      type: 'reporting.report_run.succeeded';
      data: ReportingReportRunSucceededEvent.Data;
    }

    export namespace ReportingReportRunSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Reporting.ReportRun;

        previous_attributes?: Partial<Reporting.ReportRun>;
      }
    }

    /**
     * Occurs whenever a `ReportType` is updated (typically to indicate that a new day's data has come available).
     */
    interface ReportingReportTypeUpdatedEvent extends EventBase {
      type: 'reporting.report_type.updated';
      data: ReportingReportTypeUpdatedEvent.Data;
    }

    export namespace ReportingReportTypeUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Reporting.ReportType;

        previous_attributes?: Partial<Reporting.ReportType>;
      }
    }

    /**
     * Occurs whenever a review is closed. The review's `reason` field indicates why: `approved`, `disputed`, `refunded`, `refunded_as_fraud`, or `canceled`.
     */
    interface ReviewClosedEvent extends EventBase {
      type: 'review.closed';
      data: ReviewClosedEvent.Data;
    }

    export namespace ReviewClosedEvent {
      interface Data extends Stripe.Event.Data {
        object: Review;

        previous_attributes?: Partial<Review>;
      }
    }

    /**
     * Occurs whenever a review is opened.
     */
    interface ReviewOpenedEvent extends EventBase {
      type: 'review.opened';
      data: ReviewOpenedEvent.Data;
    }

    export namespace ReviewOpenedEvent {
      interface Data extends Stripe.Event.Data {
        object: Review;

        previous_attributes?: Partial<Review>;
      }
    }

    /**
     * Occurs when a SetupIntent is canceled.
     */
    interface SetupIntentCanceledEvent extends EventBase {
      type: 'setup_intent.canceled';
      data: SetupIntentCanceledEvent.Data;
    }

    export namespace SetupIntentCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: SetupIntent;

        previous_attributes?: Partial<SetupIntent>;
      }
    }

    /**
     * Occurs when a new SetupIntent is created.
     */
    interface SetupIntentCreatedEvent extends EventBase {
      type: 'setup_intent.created';
      data: SetupIntentCreatedEvent.Data;
    }

    export namespace SetupIntentCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: SetupIntent;

        previous_attributes?: Partial<SetupIntent>;
      }
    }

    /**
     * Occurs when a SetupIntent is in requires_action state.
     */
    interface SetupIntentRequiresActionEvent extends EventBase {
      type: 'setup_intent.requires_action';
      data: SetupIntentRequiresActionEvent.Data;
    }

    export namespace SetupIntentRequiresActionEvent {
      interface Data extends Stripe.Event.Data {
        object: SetupIntent;

        previous_attributes?: Partial<SetupIntent>;
      }
    }

    /**
     * Occurs when a SetupIntent has failed the attempt to setup a payment method.
     */
    interface SetupIntentSetupFailedEvent extends EventBase {
      type: 'setup_intent.setup_failed';
      data: SetupIntentSetupFailedEvent.Data;
    }

    export namespace SetupIntentSetupFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: SetupIntent;

        previous_attributes?: Partial<SetupIntent>;
      }
    }

    /**
     * Occurs when an SetupIntent has successfully setup a payment method.
     */
    interface SetupIntentSucceededEvent extends EventBase {
      type: 'setup_intent.succeeded';
      data: SetupIntentSucceededEvent.Data;
    }

    export namespace SetupIntentSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: SetupIntent;

        previous_attributes?: Partial<SetupIntent>;
      }
    }

    /**
     * Occurs whenever a Sigma scheduled query run finishes.
     */
    interface SigmaScheduledQueryRunCreatedEvent extends EventBase {
      type: 'sigma.scheduled_query_run.created';
      data: SigmaScheduledQueryRunCreatedEvent.Data;
    }

    export namespace SigmaScheduledQueryRunCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Sigma.ScheduledQueryRun;

        previous_attributes?: Partial<Sigma.ScheduledQueryRun>;
      }
    }

    /**
     * Occurs whenever a source is canceled.
     */
    interface SourceCanceledEvent extends EventBase {
      type: 'source.canceled';
      data: SourceCanceledEvent.Data;
    }

    export namespace SourceCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Source;

        previous_attributes?: Partial<Source>;
      }
    }

    /**
     * Occurs whenever a source transitions to chargeable.
     */
    interface SourceChargeableEvent extends EventBase {
      type: 'source.chargeable';
      data: SourceChargeableEvent.Data;
    }

    export namespace SourceChargeableEvent {
      interface Data extends Stripe.Event.Data {
        object: Source;

        previous_attributes?: Partial<Source>;
      }
    }

    /**
     * Occurs whenever a source fails.
     */
    interface SourceFailedEvent extends EventBase {
      type: 'source.failed';
      data: SourceFailedEvent.Data;
    }

    export namespace SourceFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Source;

        previous_attributes?: Partial<Source>;
      }
    }

    /**
     * Occurs whenever a source mandate notification method is set to manual.
     */
    interface SourceMandateNotificationEvent extends EventBase {
      type: 'source.mandate_notification';
      data: SourceMandateNotificationEvent.Data;
    }

    export namespace SourceMandateNotificationEvent {
      interface Data extends Stripe.Event.Data {
        object: SourceMandateNotification;

        previous_attributes?: Partial<SourceMandateNotification>;
      }
    }

    /**
     * Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment.
     */
    interface SourceRefundAttributesRequiredEvent extends EventBase {
      type: 'source.refund_attributes_required';
      data: SourceRefundAttributesRequiredEvent.Data;
    }

    export namespace SourceRefundAttributesRequiredEvent {
      interface Data extends Stripe.Event.Data {
        object: Source;

        previous_attributes?: Partial<Source>;
      }
    }

    /**
     * Occurs whenever a source transaction is created.
     */
    interface SourceTransactionCreatedEvent extends EventBase {
      type: 'source.transaction.created';
      data: SourceTransactionCreatedEvent.Data;
    }

    export namespace SourceTransactionCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: SourceTransaction;

        previous_attributes?: Partial<SourceTransaction>;
      }
    }

    /**
     * Occurs whenever a source transaction is updated.
     */
    interface SourceTransactionUpdatedEvent extends EventBase {
      type: 'source.transaction.updated';
      data: SourceTransactionUpdatedEvent.Data;
    }

    export namespace SourceTransactionUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: SourceTransaction;

        previous_attributes?: Partial<SourceTransaction>;
      }
    }

    /**
     * Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency.
     */
    interface SubscriptionScheduleAbortedEvent extends EventBase {
      type: 'subscription_schedule.aborted';
      data: SubscriptionScheduleAbortedEvent.Data;
    }

    export namespace SubscriptionScheduleAbortedEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever a subscription schedule is canceled.
     */
    interface SubscriptionScheduleCanceledEvent extends EventBase {
      type: 'subscription_schedule.canceled';
      data: SubscriptionScheduleCanceledEvent.Data;
    }

    export namespace SubscriptionScheduleCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever a new subscription schedule is completed.
     */
    interface SubscriptionScheduleCompletedEvent extends EventBase {
      type: 'subscription_schedule.completed';
      data: SubscriptionScheduleCompletedEvent.Data;
    }

    export namespace SubscriptionScheduleCompletedEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever a new subscription schedule is created.
     */
    interface SubscriptionScheduleCreatedEvent extends EventBase {
      type: 'subscription_schedule.created';
      data: SubscriptionScheduleCreatedEvent.Data;
    }

    export namespace SubscriptionScheduleCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs 7 days before a subscription schedule will expire.
     */
    interface SubscriptionScheduleExpiringEvent extends EventBase {
      type: 'subscription_schedule.expiring';
      data: SubscriptionScheduleExpiringEvent.Data;
    }

    export namespace SubscriptionScheduleExpiringEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever a new subscription schedule is released.
     */
    interface SubscriptionScheduleReleasedEvent extends EventBase {
      type: 'subscription_schedule.released';
      data: SubscriptionScheduleReleasedEvent.Data;
    }

    export namespace SubscriptionScheduleReleasedEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever a subscription schedule is updated.
     */
    interface SubscriptionScheduleUpdatedEvent extends EventBase {
      type: 'subscription_schedule.updated';
      data: SubscriptionScheduleUpdatedEvent.Data;
    }

    export namespace SubscriptionScheduleUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: SubscriptionSchedule;

        previous_attributes?: Partial<SubscriptionSchedule>;
      }
    }

    /**
     * Occurs whenever tax settings is updated.
     */
    interface TaxSettingsUpdatedEvent extends EventBase {
      type: 'tax.settings.updated';
      data: TaxSettingsUpdatedEvent.Data;
    }

    export namespace TaxSettingsUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Tax.Settings;

        previous_attributes?: Partial<Tax.Settings>;
      }
    }

    /**
     * Occurs whenever a new tax rate is created.
     */
    interface TaxRateCreatedEvent extends EventBase {
      type: 'tax_rate.created';
      data: TaxRateCreatedEvent.Data;
    }

    export namespace TaxRateCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: TaxRate;

        previous_attributes?: Partial<TaxRate>;
      }
    }

    /**
     * Occurs whenever a tax rate is updated.
     */
    interface TaxRateUpdatedEvent extends EventBase {
      type: 'tax_rate.updated';
      data: TaxRateUpdatedEvent.Data;
    }

    export namespace TaxRateUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: TaxRate;

        previous_attributes?: Partial<TaxRate>;
      }
    }

    /**
     * Occurs whenever an action sent to a Terminal reader failed.
     */
    interface TerminalReaderActionFailedEvent extends EventBase {
      type: 'terminal.reader.action_failed';
      data: TerminalReaderActionFailedEvent.Data;
    }

    export namespace TerminalReaderActionFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Terminal.Reader;

        previous_attributes?: Partial<Terminal.Reader>;
      }
    }

    /**
     * Occurs whenever an action sent to a Terminal reader was successful.
     */
    interface TerminalReaderActionSucceededEvent extends EventBase {
      type: 'terminal.reader.action_succeeded';
      data: TerminalReaderActionSucceededEvent.Data;
    }

    export namespace TerminalReaderActionSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Terminal.Reader;

        previous_attributes?: Partial<Terminal.Reader>;
      }
    }

    /**
     * Occurs whenever an action sent to a Terminal reader is updated.
     */
    interface TerminalReaderActionUpdatedEvent extends EventBase {
      type: 'terminal.reader.action_updated';
      data: TerminalReaderActionUpdatedEvent.Data;
    }

    export namespace TerminalReaderActionUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Terminal.Reader;

        previous_attributes?: Partial<Terminal.Reader>;
      }
    }

    /**
     * Occurs whenever a test clock starts advancing.
     */
    interface TestHelpersTestClockAdvancingEvent extends EventBase {
      type: 'test_helpers.test_clock.advancing';
      data: TestHelpersTestClockAdvancingEvent.Data;
    }

    export namespace TestHelpersTestClockAdvancingEvent {
      interface Data extends Stripe.Event.Data {
        object: TestHelpers.TestClock;

        previous_attributes?: Partial<TestHelpers.TestClock>;
      }
    }

    /**
     * Occurs whenever a test clock is created.
     */
    interface TestHelpersTestClockCreatedEvent extends EventBase {
      type: 'test_helpers.test_clock.created';
      data: TestHelpersTestClockCreatedEvent.Data;
    }

    export namespace TestHelpersTestClockCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: TestHelpers.TestClock;

        previous_attributes?: Partial<TestHelpers.TestClock>;
      }
    }

    /**
     * Occurs whenever a test clock is deleted.
     */
    interface TestHelpersTestClockDeletedEvent extends EventBase {
      type: 'test_helpers.test_clock.deleted';
      data: TestHelpersTestClockDeletedEvent.Data;
    }

    export namespace TestHelpersTestClockDeletedEvent {
      interface Data extends Stripe.Event.Data {
        object: TestHelpers.TestClock;

        previous_attributes?: Partial<TestHelpers.TestClock>;
      }
    }

    /**
     * Occurs whenever a test clock fails to advance its frozen time.
     */
    interface TestHelpersTestClockInternalFailureEvent extends EventBase {
      type: 'test_helpers.test_clock.internal_failure';
      data: TestHelpersTestClockInternalFailureEvent.Data;
    }

    export namespace TestHelpersTestClockInternalFailureEvent {
      interface Data extends Stripe.Event.Data {
        object: TestHelpers.TestClock;

        previous_attributes?: Partial<TestHelpers.TestClock>;
      }
    }

    /**
     * Occurs whenever a test clock transitions to a ready status.
     */
    interface TestHelpersTestClockReadyEvent extends EventBase {
      type: 'test_helpers.test_clock.ready';
      data: TestHelpersTestClockReadyEvent.Data;
    }

    export namespace TestHelpersTestClockReadyEvent {
      interface Data extends Stripe.Event.Data {
        object: TestHelpers.TestClock;

        previous_attributes?: Partial<TestHelpers.TestClock>;
      }
    }

    /**
     * Occurs whenever a top-up is canceled.
     */
    interface TopupCanceledEvent extends EventBase {
      type: 'topup.canceled';
      data: TopupCanceledEvent.Data;
    }

    export namespace TopupCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Topup;

        previous_attributes?: Partial<Topup>;
      }
    }

    /**
     * Occurs whenever a top-up is created.
     */
    interface TopupCreatedEvent extends EventBase {
      type: 'topup.created';
      data: TopupCreatedEvent.Data;
    }

    export namespace TopupCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Topup;

        previous_attributes?: Partial<Topup>;
      }
    }

    /**
     * Occurs whenever a top-up fails.
     */
    interface TopupFailedEvent extends EventBase {
      type: 'topup.failed';
      data: TopupFailedEvent.Data;
    }

    export namespace TopupFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Topup;

        previous_attributes?: Partial<Topup>;
      }
    }

    /**
     * Occurs whenever a top-up is reversed.
     */
    interface TopupReversedEvent extends EventBase {
      type: 'topup.reversed';
      data: TopupReversedEvent.Data;
    }

    export namespace TopupReversedEvent {
      interface Data extends Stripe.Event.Data {
        object: Topup;

        previous_attributes?: Partial<Topup>;
      }
    }

    /**
     * Occurs whenever a top-up succeeds.
     */
    interface TopupSucceededEvent extends EventBase {
      type: 'topup.succeeded';
      data: TopupSucceededEvent.Data;
    }

    export namespace TopupSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Topup;

        previous_attributes?: Partial<Topup>;
      }
    }

    /**
     * Occurs whenever a transfer is created.
     */
    interface TransferCreatedEvent extends EventBase {
      type: 'transfer.created';
      data: TransferCreatedEvent.Data;
    }

    export namespace TransferCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Transfer;

        previous_attributes?: Partial<Transfer>;
      }
    }

    /**
     * Occurs whenever a transfer is reversed, including partial reversals.
     */
    interface TransferReversedEvent extends EventBase {
      type: 'transfer.reversed';
      data: TransferReversedEvent.Data;
    }

    export namespace TransferReversedEvent {
      interface Data extends Stripe.Event.Data {
        object: Transfer;

        previous_attributes?: Partial<Transfer>;
      }
    }

    /**
     * Occurs whenever a transfer's description or metadata is updated.
     */
    interface TransferUpdatedEvent extends EventBase {
      type: 'transfer.updated';
      data: TransferUpdatedEvent.Data;
    }

    export namespace TransferUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Transfer;

        previous_attributes?: Partial<Transfer>;
      }
    }

    /**
     * Occurs whenever an CreditReversal is submitted and created.
     */
    interface TreasuryCreditReversalCreatedEvent extends EventBase {
      type: 'treasury.credit_reversal.created';
      data: TreasuryCreditReversalCreatedEvent.Data;
    }

    export namespace TreasuryCreditReversalCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.CreditReversal;

        previous_attributes?: Partial<Treasury.CreditReversal>;
      }
    }

    /**
     * Occurs whenever an CreditReversal post is posted.
     */
    interface TreasuryCreditReversalPostedEvent extends EventBase {
      type: 'treasury.credit_reversal.posted';
      data: TreasuryCreditReversalPostedEvent.Data;
    }

    export namespace TreasuryCreditReversalPostedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.CreditReversal;

        previous_attributes?: Partial<Treasury.CreditReversal>;
      }
    }

    /**
     * Occurs whenever a DebitReversal is completed.
     */
    interface TreasuryDebitReversalCompletedEvent extends EventBase {
      type: 'treasury.debit_reversal.completed';
      data: TreasuryDebitReversalCompletedEvent.Data;
    }

    export namespace TreasuryDebitReversalCompletedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.DebitReversal;

        previous_attributes?: Partial<Treasury.DebitReversal>;
      }
    }

    /**
     * Occurs whenever a DebitReversal is created.
     */
    interface TreasuryDebitReversalCreatedEvent extends EventBase {
      type: 'treasury.debit_reversal.created';
      data: TreasuryDebitReversalCreatedEvent.Data;
    }

    export namespace TreasuryDebitReversalCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.DebitReversal;

        previous_attributes?: Partial<Treasury.DebitReversal>;
      }
    }

    /**
     * Occurs whenever an initial credit is granted on a DebitReversal.
     */
    interface TreasuryDebitReversalInitialCreditGrantedEvent extends EventBase {
      type: 'treasury.debit_reversal.initial_credit_granted';
      data: TreasuryDebitReversalInitialCreditGrantedEvent.Data;
    }

    export namespace TreasuryDebitReversalInitialCreditGrantedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.DebitReversal;

        previous_attributes?: Partial<Treasury.DebitReversal>;
      }
    }

    /**
     * Occurs whenever the status of the FinancialAccount becomes closed.
     */
    interface TreasuryFinancialAccountClosedEvent extends EventBase {
      type: 'treasury.financial_account.closed';
      data: TreasuryFinancialAccountClosedEvent.Data;
    }

    export namespace TreasuryFinancialAccountClosedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.FinancialAccount;

        previous_attributes?: Partial<Treasury.FinancialAccount>;
      }
    }

    /**
     * Occurs whenever a new FinancialAccount is created.
     */
    interface TreasuryFinancialAccountCreatedEvent extends EventBase {
      type: 'treasury.financial_account.created';
      data: TreasuryFinancialAccountCreatedEvent.Data;
    }

    export namespace TreasuryFinancialAccountCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.FinancialAccount;

        previous_attributes?: Partial<Treasury.FinancialAccount>;
      }
    }

    /**
     * Occurs whenever the statuses of any features within an existing FinancialAccount are updated.
     */
    interface TreasuryFinancialAccountFeaturesStatusUpdatedEvent
      extends EventBase {
      type: 'treasury.financial_account.features_status_updated';
      data: TreasuryFinancialAccountFeaturesStatusUpdatedEvent.Data;
    }

    export namespace TreasuryFinancialAccountFeaturesStatusUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.FinancialAccount;

        previous_attributes?: Partial<Treasury.FinancialAccount>;
      }
    }

    /**
     * Occurs whenever an InboundTransfer is canceled.
     */
    interface TreasuryInboundTransferCanceledEvent extends EventBase {
      type: 'treasury.inbound_transfer.canceled';
      data: TreasuryInboundTransferCanceledEvent.Data;
    }

    export namespace TreasuryInboundTransferCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.InboundTransfer;

        previous_attributes?: Partial<Treasury.InboundTransfer>;
      }
    }

    /**
     * Occurs whenever an InboundTransfer is created.
     */
    interface TreasuryInboundTransferCreatedEvent extends EventBase {
      type: 'treasury.inbound_transfer.created';
      data: TreasuryInboundTransferCreatedEvent.Data;
    }

    export namespace TreasuryInboundTransferCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.InboundTransfer;

        previous_attributes?: Partial<Treasury.InboundTransfer>;
      }
    }

    /**
     * Occurs whenever an InboundTransfer has failed.
     */
    interface TreasuryInboundTransferFailedEvent extends EventBase {
      type: 'treasury.inbound_transfer.failed';
      data: TreasuryInboundTransferFailedEvent.Data;
    }

    export namespace TreasuryInboundTransferFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.InboundTransfer;

        previous_attributes?: Partial<Treasury.InboundTransfer>;
      }
    }

    /**
     * Occurs whenever an InboundTransfer has succeeded.
     */
    interface TreasuryInboundTransferSucceededEvent extends EventBase {
      type: 'treasury.inbound_transfer.succeeded';
      data: TreasuryInboundTransferSucceededEvent.Data;
    }

    export namespace TreasuryInboundTransferSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.InboundTransfer;

        previous_attributes?: Partial<Treasury.InboundTransfer>;
      }
    }

    /**
     * Occurs whenever an OutboundPayment is canceled.
     */
    interface TreasuryOutboundPaymentCanceledEvent extends EventBase {
      type: 'treasury.outbound_payment.canceled';
      data: TreasuryOutboundPaymentCanceledEvent.Data;
    }

    export namespace TreasuryOutboundPaymentCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever a new OutboundPayment is successfully created.
     */
    interface TreasuryOutboundPaymentCreatedEvent extends EventBase {
      type: 'treasury.outbound_payment.created';
      data: TreasuryOutboundPaymentCreatedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever the arrival date on an OutboundPayment updates.
     */
    interface TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent
      extends EventBase {
      type: 'treasury.outbound_payment.expected_arrival_date_updated';
      data: TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentExpectedArrivalDateUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever an OutboundPayment fails.
     */
    interface TreasuryOutboundPaymentFailedEvent extends EventBase {
      type: 'treasury.outbound_payment.failed';
      data: TreasuryOutboundPaymentFailedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever an OutboundPayment posts.
     */
    interface TreasuryOutboundPaymentPostedEvent extends EventBase {
      type: 'treasury.outbound_payment.posted';
      data: TreasuryOutboundPaymentPostedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentPostedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever an OutboundPayment was returned.
     */
    interface TreasuryOutboundPaymentReturnedEvent extends EventBase {
      type: 'treasury.outbound_payment.returned';
      data: TreasuryOutboundPaymentReturnedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentReturnedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever tracking_details on an OutboundPayment is updated.
     */
    interface TreasuryOutboundPaymentTrackingDetailsUpdatedEvent
      extends EventBase {
      type: 'treasury.outbound_payment.tracking_details_updated';
      data: TreasuryOutboundPaymentTrackingDetailsUpdatedEvent.Data;
    }

    export namespace TreasuryOutboundPaymentTrackingDetailsUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundPayment;

        previous_attributes?: Partial<Treasury.OutboundPayment>;
      }
    }

    /**
     * Occurs whenever an OutboundTransfer is canceled.
     */
    interface TreasuryOutboundTransferCanceledEvent extends EventBase {
      type: 'treasury.outbound_transfer.canceled';
      data: TreasuryOutboundTransferCanceledEvent.Data;
    }

    export namespace TreasuryOutboundTransferCanceledEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever an OutboundTransfer is created.
     */
    interface TreasuryOutboundTransferCreatedEvent extends EventBase {
      type: 'treasury.outbound_transfer.created';
      data: TreasuryOutboundTransferCreatedEvent.Data;
    }

    export namespace TreasuryOutboundTransferCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever the arrival date on an OutboundTransfer updates.
     */
    interface TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent
      extends EventBase {
      type: 'treasury.outbound_transfer.expected_arrival_date_updated';
      data: TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent.Data;
    }

    export namespace TreasuryOutboundTransferExpectedArrivalDateUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever an OutboundTransfer has failed.
     */
    interface TreasuryOutboundTransferFailedEvent extends EventBase {
      type: 'treasury.outbound_transfer.failed';
      data: TreasuryOutboundTransferFailedEvent.Data;
    }

    export namespace TreasuryOutboundTransferFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever an OutboundTransfer is posted.
     */
    interface TreasuryOutboundTransferPostedEvent extends EventBase {
      type: 'treasury.outbound_transfer.posted';
      data: TreasuryOutboundTransferPostedEvent.Data;
    }

    export namespace TreasuryOutboundTransferPostedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever an OutboundTransfer is returned.
     */
    interface TreasuryOutboundTransferReturnedEvent extends EventBase {
      type: 'treasury.outbound_transfer.returned';
      data: TreasuryOutboundTransferReturnedEvent.Data;
    }

    export namespace TreasuryOutboundTransferReturnedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever tracking_details on an OutboundTransfer is updated.
     */
    interface TreasuryOutboundTransferTrackingDetailsUpdatedEvent
      extends EventBase {
      type: 'treasury.outbound_transfer.tracking_details_updated';
      data: TreasuryOutboundTransferTrackingDetailsUpdatedEvent.Data;
    }

    export namespace TreasuryOutboundTransferTrackingDetailsUpdatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.OutboundTransfer;

        previous_attributes?: Partial<Treasury.OutboundTransfer>;
      }
    }

    /**
     * Occurs whenever a received_credit is created as a result of funds being pushed by another account.
     */
    interface TreasuryReceivedCreditCreatedEvent extends EventBase {
      type: 'treasury.received_credit.created';
      data: TreasuryReceivedCreditCreatedEvent.Data;
    }

    export namespace TreasuryReceivedCreditCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.ReceivedCredit;

        previous_attributes?: Partial<Treasury.ReceivedCredit>;
      }
    }

    /**
     * Occurs whenever a received_credit transitions to failed state. Only applicable for check deposits.
     */
    interface TreasuryReceivedCreditFailedEvent extends EventBase {
      type: 'treasury.received_credit.failed';
      data: TreasuryReceivedCreditFailedEvent.Data;
    }

    export namespace TreasuryReceivedCreditFailedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.ReceivedCredit;

        previous_attributes?: Partial<Treasury.ReceivedCredit>;
      }
    }

    /**
     * Occurs whenever a received_credit transitions to succeeded state. Only applicable for check deposits.
     */
    interface TreasuryReceivedCreditSucceededEvent extends EventBase {
      type: 'treasury.received_credit.succeeded';
      data: TreasuryReceivedCreditSucceededEvent.Data;
    }

    export namespace TreasuryReceivedCreditSucceededEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.ReceivedCredit;

        previous_attributes?: Partial<Treasury.ReceivedCredit>;
      }
    }

    /**
     * Occurs whenever a received_debit is created as a result of funds being pulled by another account.
     */
    interface TreasuryReceivedDebitCreatedEvent extends EventBase {
      type: 'treasury.received_debit.created';
      data: TreasuryReceivedDebitCreatedEvent.Data;
    }

    export namespace TreasuryReceivedDebitCreatedEvent {
      interface Data extends Stripe.Event.Data {
        object: Treasury.ReceivedDebit;

        previous_attributes?: Partial<Treasury.ReceivedDebit>;
      }
    }
  }
}
