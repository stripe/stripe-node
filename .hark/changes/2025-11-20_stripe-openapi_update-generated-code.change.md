---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2510
is_stripe_api_change: true
released_in_version: 20.1.0-alpha.2
---

* Add support for new resources `V2.Core.AccountPersonToken`, `V2.Core.AccountToken`, and `V2.MoneyManagement.CurrencyConversion`
* Add support for `create`, `list`, and `retrieve` methods on resource `V2.MoneyManagement.CurrencyConversion`
* Add support for `create` and `retrieve` methods on resources `V2.Core.AccountPersonToken` and `V2.Core.AccountToken`
* Add support for `effective_at` on `InvoiceCreatePreviewParams.schedule_details.amendments[]`, `InvoiceCreatePreviewParams.schedule_details.phases[]`, `QuoteCreateParams.lines[]`, `QuoteLine`, `QuotePreviewSubscriptionSchedule.phases[]`, `QuoteUpdateParams.lines[]`, `SubscriptionSchedule.phases[]`, `SubscriptionScheduleAmendParams.amendments[]`, `SubscriptionScheduleCreateParams.phases[]`, and `SubscriptionScheduleUpdateParams.phases[]`
* Add support for `trial_offer` on `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].add`, `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].set`, `InvoiceCreatePreviewParams.schedule_details.phases[].items[]`, `QuoteCreateParams.lines[].actions[].add_item`, `QuoteCreateParams.lines[].actions[].set_items[]`, `QuoteLine.actions[].add_item`, `QuoteLine.actions[].set_items[]`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, `QuoteUpdateParams.lines[].actions[].add_item`, `QuoteUpdateParams.lines[].actions[].set_items[]`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].add`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].set`, `SubscriptionScheduleCreateParams.phases[].items[]`, and `SubscriptionScheduleUpdateParams.phases[].items[]`
* Change type of `DelegatedCheckout.RequestedSession.amount_subtotal` from `longInteger` to `longInteger | null`
* Change type of `DelegatedCheckout.RequestedSession.amount_total` from `longInteger` to `longInteger | null`
* Add support for `amount_discount`, `amount_subtotal`, `amount_total`, `unit_amount_after_discount`, and `unit_discount` on `DelegatedCheckout.RequestedSession.line_item_details[]`
* Add support for `amount_subtotal_after_discount` on `DelegatedCheckout.RequestedSession.line_item_details[]` and `DelegatedCheckout.RequestedSession.total_details`
* Change type of `InvoiceCreatePreviewParams.schedule_details.billing_schedules` from `array(billing_schedules_update_params)` to `emptyable(array(billing_schedules_update_params))`
* Remove support for values `amendment_end`, `line_ends_at`, `schedule_end`, and `upcoming_invoice` from enums `InvoiceCreatePreviewParams.subscription_details.billing_schedules[].bill_until.type`, `Subscription.billing_schedules[].bill_until.type`, `SubscriptionCreateParams.billing_schedules[].bill_until.type`, `SubscriptionScheduleCreateParams.billing_schedules[].bill_until.type`, `SubscriptionScheduleUpdateParams.billing_schedules[].bill_until.type`, and `SubscriptionUpdateParams.billing_schedules[].bill_until.type`
* Add support for `current_trial` on `InvoiceCreatePreviewParams.subscription_details.items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, and `SubscriptionUpdateParams.items[]`
* Change type of `QuoteCreateParams.subscription_data.billing_schedules` and `QuoteCreateParams.subscription_data_overrides[].billing_schedules` from `emptyable(array(billing_schedules_create_specs))` to `array(billing_schedules_create_specs)`
* Add support for new value `line_start` on enums `QuoteCreateParams.subscription_data.phase_effective_at`, `QuoteCreateParams.subscription_data_overrides[].phase_effective_at`, `QuoteUpdateParams.subscription_data.phase_effective_at`, and `QuoteUpdateParams.subscription_data_overrides[].phase_effective_at`
* Remove support for value `phase_start` from enums `QuoteCreateParams.subscription_data.phase_effective_at`, `QuoteCreateParams.subscription_data_overrides[].phase_effective_at`, `QuoteUpdateParams.subscription_data.phase_effective_at`, and `QuoteUpdateParams.subscription_data_overrides[].phase_effective_at`
* Change type of `Quote.subscription_data.billing_schedules` and `Quote.subscription_data_overrides[].billing_schedules` from `array(SubscriptionsResourceBillingSchedules) | null` to `array(QuotesResourceSubscriptionDataBillingSchedules)`
* Change type of `Quote.subscription_data.phase_effective_at` and `Quote.subscription_data_overrides[].phase_effective_at` from `enum('billing_period_start'|'phase_start') | null` to `enum('billing_period_start'|'line_start')`
* Change type of `QuotePreviewSubscriptionSchedule.default_settings.phase_effective_at` and `SubscriptionSchedule.default_settings.phase_effective_at` from `enum('billing_period_start'|'phase_start') | null` to `enum('billing_period_start'|'phase_start')`
* Change type of `QuotePreviewSubscriptionSchedule.billing_schedules` and `SubscriptionSchedule.billing_schedules` from `array(SubscriptionsResourceBillingSchedules) | null` to `array(SubscriptionsResourceBillingSchedules)`
* Remove support for `amendment_start`, `line_starts_at`, and `relative` on `Subscription.billing_schedules[].bill_from`
* Change type of `Subscription.billing_schedules[].bill_from.computed_timestamp` from `DateTime | null` to `DateTime`
* Change type of `Subscription.billing_schedules[].bill_from.type` from `enum` to `literal('timestamp')`
* Remove support for `amendment_end` and `line_ends_at` on `Subscription.billing_schedules[].bill_until`
* Change type of `V2.Billing.ServiceAction.credit_grant.amount.monetary`, `V2.Billing.ServiceAction.credit_grant_per_tenant.amount.monetary`, `V2.Billing.ServiceActionCreateParams.credit_grant.amount.monetary`, and `V2.Billing.ServiceActionCreateParams.credit_grant_per_tenant.amount.monetary` from `amount` to `an object`
* Add support for `future_requirements` on `V2.Core.Account`
* Add support for `konbini_payments` and `script_statement_descriptor` on `V2.Core.Account.configuration.merchant`, `V2.Core.AccountCreateParams.configuration.merchant`, and `V2.Core.AccountUpdateParams.configuration.merchant`
* Add support for `eur` on `V2.Core.Account.configuration.storer.capabilities.holds_currencies`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.holds_currencies`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.holds_currencies`
* Add support for `requirements_collector` on `V2.Core.Account.defaults.responsibilities`
* Add support for new value `ar_cuit` on enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
* Add support for new value `ar_dni` on enums `V2.Core.Account.identity.individual.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.individual.id_numbers[].type`, `V2.Core.AccountPerson.id_numbers[].type`, `V2.Core.AccountPersonCreateParams.id_numbers[].type`, `V2.Core.AccountPersonUpdateParams.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.individual.id_numbers[].type`
* Remove support for `collector` on `V2.Core.Account.requirements`
* Add support for new value `holds_currencies.eur` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
* Add support for new values `payment_method` and `person` on enum `V2.Core.Account.requirements.entries[].reference.type`
* Remove support for value `resource` from enum `V2.Core.Account.requirements.entries[].reference.type`
* Remove support for value `future_requirements` from enum `V2.Core.Account.requirements.entries[].requested_reasons[].code`
* Remove support for `v1_event_id` on `V2.Core.Event`
* Remove support for `amount_details` and `capture_method` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
* Change type of `V2.Payments.OffSessionPayment.amount_capturable` from `amount` to `an object`
* Change type of `V2.Payments.OffSessionPayment.amount_requested` from `amount` to `an object`
* Change type of `V2.Payments.OffSessionPaymentCreateParams.amount` from `amount` to `an object`
* Add support for new value `best_available` on enum `V2.Payments.OffSessionPaymentCreateParams.retry_details.retry_strategy`
* Remove support for values `heuristic`, `scheduled`, and `smart` from enum `V2.Payments.OffSessionPaymentCreateParams.retry_details.retry_strategy`
* Change `V2.Payments.OffSessionPaymentCreateParams.retry_details.retry_strategy` to be optional
* Remove support for `destination` on `V2.Payments.OffSessionPaymentCaptureParams.transfer_data`
* Change `V2.Payments.OffSessionPaymentCaptureParams.amount_to_capture` to be optional
* Add support for `created` on `V2.Core.EventListParams`
* Remove support for `gt`, `gte`, `lt`, and `lte` on `V2.Core.EventListParams`
* Add support for `account_token` on `V2.Core.AccountCreateParams` and `V2.Core.AccountUpdateParams`
* Add support for new value `future_requirements` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
* Add support for `person_token` on `V2.Core.AccountPersonCreateParams` and `V2.Core.AccountPersonUpdateParams`
* Add support for `impacted_requests_percentage` on `EventsV2CoreHealthApiErrorFiringEvent.impact`, `EventsV2CoreHealthApiErrorResolvedEvent.impact`, `EventsV2CoreHealthApiLatencyFiringEvent.impact`, `EventsV2CoreHealthApiLatencyResolvedEvent.impact`, `EventsV2CoreHealthPaymentMethodErrorFiringEvent.impact`, and `EventsV2CoreHealthPaymentMethodErrorResolvedEvent.impact`
* Add support for `context` and `related_object` on `EventsV2CoreHealthEventGenerationFailureResolvedEvent.impact`
* Remove support for `account`, `livemode`, `missing_delivery_attempts`, and `related_object_id` on `EventsV2CoreHealthEventGenerationFailureResolvedEvent.impact`
* Change type of `EventsV2CoreHealthFraudRateIncreasedEvent.impact.realized_fraud_amount` from `amount` to `an object`
* Change type of `EventsV2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.impact.approved_amount`, `EventsV2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.impact.approved_amount`, `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.impact.approved_amount`, and `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.impact.approved_amount` from `amount` to `an object`
* Change type of `EventsV2CoreHealthIssuingAuthorizationRequestErrorsFiringEvent.impact.declined_amount`, `EventsV2CoreHealthIssuingAuthorizationRequestErrorsResolvedEvent.impact.declined_amount`, `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutFiringEvent.impact.declined_amount`, and `EventsV2CoreHealthIssuingAuthorizationRequestTimeoutResolvedEvent.impact.declined_amount` from `amount` to `an object`
* Add support for thin events `V2PaymentsOffSessionPaymentAttemptFailedEvent` and `V2PaymentsOffSessionPaymentAttemptStartedEvent` with related object `V2.Payments.OffSessionPayment`
* Remove support for thin event `V1AccountUpdatedEvent` with related object `Account`
* Remove support for thin events `V1ApplicationFeeCreatedEvent` and `V1ApplicationFeeRefundedEvent` with related object `ApplicationFee`
* Remove support for thin events `V1BillingPortalConfigurationCreatedEvent` and `V1BillingPortalConfigurationUpdatedEvent` with related object `BillingPortal.Configuration`
* Remove support for thin event `V1CapabilityUpdatedEvent` with related object `Capability`
* Remove support for thin events `V1ChargeCapturedEvent`, `V1ChargeExpiredEvent`, `V1ChargeFailedEvent`, `V1ChargePendingEvent`, `V1ChargeRefundedEvent`, `V1ChargeSucceededEvent`, and `V1ChargeUpdatedEvent` with related object `Charge`
* Remove support for thin events `V1ChargeDisputeClosedEvent`, `V1ChargeDisputeCreatedEvent`, `V1ChargeDisputeFundsReinstatedEvent`, `V1ChargeDisputeFundsWithdrawnEvent`, and `V1ChargeDisputeUpdatedEvent` with related object `Dispute`
* Remove support for thin events `V1ChargeRefundUpdatedEvent`, `V1RefundCreatedEvent`, `V1RefundFailedEvent`, and `V1RefundUpdatedEvent` with related object `Refund`
* Remove support for thin events `V1CheckoutSessionAsyncPaymentFailedEvent`, `V1CheckoutSessionAsyncPaymentSucceededEvent`, `V1CheckoutSessionCompletedEvent`, and `V1CheckoutSessionExpiredEvent` with related object `Checkout.Session`
* Remove support for thin events `V1ClimateOrderCanceledEvent`, `V1ClimateOrderCreatedEvent`, `V1ClimateOrderDelayedEvent`, `V1ClimateOrderDeliveredEvent`, and `V1ClimateOrderProductSubstitutedEvent` with related object `Climate.Order`
* Remove support for thin events `V1ClimateProductCreatedEvent` and `V1ClimateProductPricingUpdatedEvent` with related object `Climate.Product`
* Remove support for thin events `V1CouponCreatedEvent`, `V1CouponDeletedEvent`, and `V1CouponUpdatedEvent` with related object `Coupon`
* Remove support for thin events `V1CreditNoteCreatedEvent`, `V1CreditNoteUpdatedEvent`, and `V1CreditNoteVoidedEvent` with related object `CreditNote`
* Remove support for thin events `V1CustomerCreatedEvent`, `V1CustomerDeletedEvent`, and `V1CustomerUpdatedEvent` with related object `Customer`
* Remove support for thin events `V1CustomerSubscriptionCreatedEvent`, `V1CustomerSubscriptionDeletedEvent`, `V1CustomerSubscriptionPausedEvent`, `V1CustomerSubscriptionPendingUpdateAppliedEvent`, `V1CustomerSubscriptionPendingUpdateExpiredEvent`, `V1CustomerSubscriptionResumedEvent`, `V1CustomerSubscriptionTrialWillEndEvent`, and `V1CustomerSubscriptionUpdatedEvent` with related object `Subscription`
* Remove support for thin events `V1CustomerTaxIdCreatedEvent`, `V1CustomerTaxIdDeletedEvent`, and `V1CustomerTaxIdUpdatedEvent` with related object `TaxId`
* Remove support for thin event `V1FileCreatedEvent` with related object `File`
* Remove support for thin events `V1FinancialConnectionsAccountCreatedEvent`, `V1FinancialConnectionsAccountDeactivatedEvent`, `V1FinancialConnectionsAccountDisconnectedEvent`, `V1FinancialConnectionsAccountReactivatedEvent`, `V1FinancialConnectionsAccountRefreshedBalanceEvent`, `V1FinancialConnectionsAccountRefreshedOwnershipEvent`, and `V1FinancialConnectionsAccountRefreshedTransactionsEvent` with related object `FinancialConnections.Account`
* Remove support for thin events `V1IdentityVerificationSessionCanceledEvent`, `V1IdentityVerificationSessionCreatedEvent`, `V1IdentityVerificationSessionProcessingEvent`, `V1IdentityVerificationSessionRedactedEvent`, `V1IdentityVerificationSessionRequiresInputEvent`, and `V1IdentityVerificationSessionVerifiedEvent` with related object `Identity.VerificationSession`
* Remove support for thin events `V1InvoiceCreatedEvent`, `V1InvoiceDeletedEvent`, `V1InvoiceFinalizationFailedEvent`, `V1InvoiceFinalizedEvent`, `V1InvoiceMarkedUncollectibleEvent`, `V1InvoiceOverdueEvent`, `V1InvoiceOverpaidEvent`, `V1InvoicePaidEvent`, `V1InvoicePaymentActionRequiredEvent`, `V1InvoicePaymentFailedEvent`, `V1InvoicePaymentSucceededEvent`, `V1InvoiceSentEvent`, `V1InvoiceUpcomingEvent`, `V1InvoiceUpdatedEvent`, `V1InvoiceVoidedEvent`, and `V1InvoiceWillBeDueEvent` with related object `Invoice`
* Remove support for thin event `V1InvoicePaymentPaidEvent` with related object `InvoicePayment`
* Remove support for thin events `V1InvoiceitemCreatedEvent` and `V1InvoiceitemDeletedEvent` with related object `InvoiceItem`
* Remove support for thin events `V1IssuingAuthorizationCreatedEvent`, `V1IssuingAuthorizationRequestEvent`, and `V1IssuingAuthorizationUpdatedEvent` with related object `Issuing.Authorization`
* Remove support for thin events `V1IssuingCardCreatedEvent` and `V1IssuingCardUpdatedEvent` with related object `Issuing.Card`
* Remove support for thin events `V1IssuingCardholderCreatedEvent` and `V1IssuingCardholderUpdatedEvent` with related object `Issuing.Cardholder`
* Remove support for thin events `V1IssuingDisputeClosedEvent`, `V1IssuingDisputeCreatedEvent`, `V1IssuingDisputeFundsReinstatedEvent`, `V1IssuingDisputeFundsRescindedEvent`, `V1IssuingDisputeSubmittedEvent`, and `V1IssuingDisputeUpdatedEvent` with related object `Issuing.Dispute`
* Remove support for thin events `V1IssuingPersonalizationDesignActivatedEvent`, `V1IssuingPersonalizationDesignDeactivatedEvent`, `V1IssuingPersonalizationDesignRejectedEvent`, and `V1IssuingPersonalizationDesignUpdatedEvent` with related object `Issuing.PersonalizationDesign`
* Remove support for thin events `V1IssuingTokenCreatedEvent` and `V1IssuingTokenUpdatedEvent` with related object `Issuing.Token`
* Remove support for thin events `V1IssuingTransactionCreatedEvent`, `V1IssuingTransactionPurchaseDetailsReceiptUpdatedEvent`, and `V1IssuingTransactionUpdatedEvent` with related object `Issuing.Transaction`
* Remove support for thin event `V1MandateUpdatedEvent` with related object `Mandate`
* Remove support for thin events `V1PaymentIntentAmountCapturableUpdatedEvent`, `V1PaymentIntentCanceledEvent`, `V1PaymentIntentCreatedEvent`, `V1PaymentIntentPartiallyFundedEvent`, `V1PaymentIntentPaymentFailedEvent`, `V1PaymentIntentProcessingEvent`, `V1PaymentIntentRequiresActionEvent`, and `V1PaymentIntentSucceededEvent` with related object `PaymentIntent`
* Remove support for thin events `V1PaymentLinkCreatedEvent` and `V1PaymentLinkUpdatedEvent` with related object `PaymentLink`
* Remove support for thin events `V1PaymentMethodAttachedEvent`, `V1PaymentMethodAutomaticallyUpdatedEvent`, `V1PaymentMethodDetachedEvent`, and `V1PaymentMethodUpdatedEvent` with related object `PaymentMethod`
* Remove support for thin events `V1PayoutCanceledEvent`, `V1PayoutCreatedEvent`, `V1PayoutFailedEvent`, `V1PayoutPaidEvent`, `V1PayoutReconciliationCompletedEvent`, and `V1PayoutUpdatedEvent` with related object `Payout`
* Remove support for thin events `V1PersonCreatedEvent`, `V1PersonDeletedEvent`, and `V1PersonUpdatedEvent` with related object `Person`
* Remove support for thin events `V1PlanCreatedEvent`, `V1PlanDeletedEvent`, and `V1PlanUpdatedEvent` with related object `Plan`
* Remove support for thin events `V1PriceCreatedEvent`, `V1PriceDeletedEvent`, and `V1PriceUpdatedEvent` with related object `Price`
* Remove support for thin events `V1ProductCreatedEvent`, `V1ProductDeletedEvent`, and `V1ProductUpdatedEvent` with related object `Product`
* Remove support for thin events `V1PromotionCodeCreatedEvent` and `V1PromotionCodeUpdatedEvent` with related object `PromotionCode`
* Remove support for thin events `V1QuoteAcceptedEvent`, `V1QuoteCanceledEvent`, `V1QuoteCreatedEvent`, and `V1QuoteFinalizedEvent` with related object `Quote`
* Remove support for thin events `V1RadarEarlyFraudWarningCreatedEvent` and `V1RadarEarlyFraudWarningUpdatedEvent` with related object `Radar.EarlyFraudWarning`
* Remove support for thin events `V1ReviewClosedEvent` and `V1ReviewOpenedEvent` with related object `Review`
* Remove support for thin events `V1SetupIntentCanceledEvent`, `V1SetupIntentCreatedEvent`, `V1SetupIntentRequiresActionEvent`, `V1SetupIntentSetupFailedEvent`, and `V1SetupIntentSucceededEvent` with related object `SetupIntent`
* Remove support for thin event `V1SigmaScheduledQueryRunCreatedEvent` with related object `Sigma.ScheduledQueryRun`
* Remove support for thin events `V1SourceCanceledEvent`, `V1SourceChargeableEvent`, `V1SourceFailedEvent`, and `V1SourceRefundAttributesRequiredEvent` with related object `Source`
* Remove support for thin events `V1SubscriptionScheduleAbortedEvent`, `V1SubscriptionScheduleCanceledEvent`, `V1SubscriptionScheduleCompletedEvent`, `V1SubscriptionScheduleCreatedEvent`, `V1SubscriptionScheduleExpiringEvent`, `V1SubscriptionScheduleReleasedEvent`, and `V1SubscriptionScheduleUpdatedEvent` with related object `SubscriptionSchedule`
* Remove support for thin events `V1TaxRateCreatedEvent` and `V1TaxRateUpdatedEvent` with related object `TaxRate`
* Remove support for thin events `V1TerminalReaderActionFailedEvent`, `V1TerminalReaderActionSucceededEvent`, and `V1TerminalReaderActionUpdatedEvent` with related object `Terminal.Reader`
* Remove support for thin events `V1TestHelpersTestClockAdvancingEvent`, `V1TestHelpersTestClockCreatedEvent`, `V1TestHelpersTestClockDeletedEvent`, `V1TestHelpersTestClockInternalFailureEvent`, and `V1TestHelpersTestClockReadyEvent` with related object `TestHelpers.TestClock`
* Remove support for thin events `V1TopupCanceledEvent`, `V1TopupCreatedEvent`, `V1TopupFailedEvent`, `V1TopupReversedEvent`, and `V1TopupSucceededEvent` with related object `Topup`
* Remove support for thin events `V1TransferCreatedEvent`, `V1TransferReversedEvent`, and `V1TransferUpdatedEvent` with related object `Transfer`
