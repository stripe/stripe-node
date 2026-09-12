<!--
THIS IS A GENERATED FILE. Any changes you make to it directly will be blown away.
Instead, edit a corresponding `.change.md` file and run `hark build`.
-->

# Changelog

> This changelog only covers the **public preview** releases. Each release builds on the most recent GA release; see those notes in [the GA changelog](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md).

## 22.7.0-beta.1 - 2026-08-26
This release changes the pinned API version to `2026-08-26.preview`.

* [#2813](https://github.com/stripe/stripe-node/pull/2813) Add non-verified methods to managed handlers
* ⚠️ [#2807](https://github.com/stripe/stripe-node/pull/2807) Update generated code for beta
  * Add support for new resources `V2.Core.ApprovalRequest`, `V2.Signals.AccountActivity`, `V2.Signals.AccountEvaluation`, and `V2.Signals.AccountSignal`
  * Add support for `list` and `retrieve` methods on resource `V2.Signals.AccountSignal`
  * Add support for `create` and `retrieve` methods on resource `V2.Signals.AccountEvaluation`
  * Add support for `create`, `del`, and `retrieve` methods on resource `V2.Signals.AccountActivity`
  * Add support for `cancel`, `list`, `retrieve`, and `update` methods on resource `V2.Core.ApprovalRequest`
  * Add support for `disable` method on resource `V2.MoneyManagement.PayoutMethod`
  * Add support for `disable_stripe_user_authentication` on `AccountSessionCreateParams.components.payment_method_settings.features`
  * ⚠️ Remove support for `payment_method_types` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `SetupIntentCreateParams`, and `SetupIntentUpdateParams`
  * ⚠️ Change type of `ProductCatalog.TrialOffer.end_behavior.transition.price` and `ProductCatalog.TrialOffer.price` from `Price` to `deletable($Price)`
  * Add support for `billie` on `QuotePreviewInvoice.payment_settings.payment_method_options`
  * Add support for new value `billie` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for `payout_methods` on `V2.Core.Account.defaults` and `V2.Core.AccountUpdateParams.defaults`
  * Add support for `restricted` on `V2.Core.Vault.GbBankAccount` and `V2.Core.Vault.UsBankAccount`
  * Add support for `enabled_delivery_schemes` on `V2.MoneyManagement.PayoutMethod.bank_account`
  * ⚠️ Remove support for `enabled_delivery_options` on `V2.MoneyManagement.PayoutMethod.bank_account`
  * ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.payments`
  * ⚠️ Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethod.usage_status.transfers`
  * Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.payments`
  * Add support for new value `disabled` on enum `V2.MoneyManagement.PayoutMethodListParams.usage_status.transfers`
  * Add support for event notifications `V2CoreApprovalRequestApprovedEvent`, `V2CoreApprovalRequestCanceledEvent`, `V2CoreApprovalRequestCreatedEvent`, `V2CoreApprovalRequestExpiredEvent`, `V2CoreApprovalRequestFailedEvent`, `V2CoreApprovalRequestRejectedEvent`, and `V2CoreApprovalRequestSucceededEvent` with related object `V2.Core.ApprovalRequest`
  * Add support for event notification `V2SignalsAccountEvaluationCompleteEvent` with related object `V2.Signals.AccountEvaluation`
  * Add support for error codes `authentication_failure`, `capability_not_active`, `expired_payment_method`, `incorrect_postal_code`, `invalid_canceled_subscription_fields`, and `payment_method_restricted` on `QuotePreviewInvoice.last_finalization_error`
  * Add support for error code `default_payout_method_cannot_be_disabled` on `CannotProceedError`

## 22.5.0-beta.1 - 2026-07-29
This release changes the pinned API version to `2026-07-29.preview`.

* ⚠️ [#2772](https://github.com/stripe/stripe-node/pull/2772) Update generated code for beta
  * Add support for `list` and `retrieve` methods on resource `ProductCatalog.TrialOffer`
  * Add support for `tax_items` on `ChargeCaptureParams.payment_details.car_rental_data[].total.tax`, `ChargeCaptureParams.payment_details.flight_data[].total.tax`, `ChargeCaptureParams.payment_details.lodging_data[].total.tax`, `ChargeUpdateParams.payment_details.car_rental_data[].total.tax`, `ChargeUpdateParams.payment_details.flight_data[].total.tax`, `ChargeUpdateParams.payment_details.lodging_data[].total.tax`, `PaymentIntent.payment_details.car_rental_data[].total.tax`, `PaymentIntent.payment_details.flight_data[].total.tax`, `PaymentIntent.payment_details.lodging_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.flight_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.lodging_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.flight_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.lodging_data[].total.tax`, `PaymentIntentCreateParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentCreateParams.payment_details.flight_data[].total.tax`, `PaymentIntentCreateParams.payment_details.lodging_data[].total.tax`, `PaymentIntentUpdateParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentUpdateParams.payment_details.flight_data[].total.tax`, and `PaymentIntentUpdateParams.payment_details.lodging_data[].total.tax`
  * ⚠️ Remove support for `taxes` on `ChargeCaptureParams.payment_details.car_rental_data[].total.tax`, `ChargeCaptureParams.payment_details.flight_data[].total.tax`, `ChargeCaptureParams.payment_details.lodging_data[].total.tax`, `ChargeUpdateParams.payment_details.car_rental_data[].total.tax`, `ChargeUpdateParams.payment_details.flight_data[].total.tax`, `ChargeUpdateParams.payment_details.lodging_data[].total.tax`, `PaymentIntent.payment_details.car_rental_data[].total.tax`, `PaymentIntent.payment_details.flight_data[].total.tax`, `PaymentIntent.payment_details.lodging_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.flight_data[].total.tax`, `PaymentIntentCaptureParams.payment_details.lodging_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.flight_data[].total.tax`, `PaymentIntentConfirmParams.payment_details.lodging_data[].total.tax`, `PaymentIntentCreateParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentCreateParams.payment_details.flight_data[].total.tax`, `PaymentIntentCreateParams.payment_details.lodging_data[].total.tax`, `PaymentIntentUpdateParams.payment_details.car_rental_data[].total.tax`, `PaymentIntentUpdateParams.payment_details.flight_data[].total.tax`, and `PaymentIntentUpdateParams.payment_details.lodging_data[].total.tax`
  * Add support for `tax_id` on `Checkout.Session.collected_information`
  * ⚠️ Remove support for `tax_ids` on `Checkout.Session.collected_information`
  * Add support for new value `disabled` on enum `FinancialConnections.SessionCreateParams.manual_entry.mode`
  * Add support for `mode` on `FinancialConnections.Session.manual_entry`
  * Add support for `name` on `Issuing.CardholderUpdateParams`
  * Add support for new value `ic_nif` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * ⚠️ Add support for new value `ic_nif` on enums `Order.tax_details.tax_ids[].type` and `QuotePreviewInvoice.customer_tax_ids[].type`
  * Add support for new values `alipay` and `mb_way` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for `custom_fields`, `description`, and `footer` on `QuotePreviewSubscriptionSchedule.default_settings.invoice_settings` and `QuotePreviewSubscriptionSchedule.phases[].invoice_settings`
  * Add support for `trial` on `QuotePreviewSubscriptionSchedule.phases[]`
  * ⚠️ Remove support for `acss_debit`, `afterpay_clearpay`, `alipay`, `alma`, `amazon_pay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `billie`, `bizum`, `blik`, `boleto`, `card_present`, `cashapp`, `crypto`, `customer_balance`, `eps`, `fpx`, `giropay`, `gopay`, `grabpay`, `id_bank_transfer`, `ideal`, `interac_present`, `kakao_pay`, `konbini`, `kr_card`, `mb_way`, `mobilepay`, `multibanco`, `naver_pay`, `nz_bank_account`, `oxxo`, `p24`, `pay_by_bank`, `payco`, `paynow`, `paypal`, `paypay`, `payto`, `pix`, `promptpay`, `qris`, `rechnung`, `revolut_pay`, `samsung_pay`, `satispay`, `scalapay`, `sepa_debit`, `shopeepay`, `sofort`, `stripe_balance`, `sunbit`, `swish`, `twint`, `upi`, `us_bank_account`, `wechat_pay`, and `zip` on `SharedPayment.GrantedToken.payment_method_details`
  * ⚠️ Remove support for values `acss_debit`, `afterpay_clearpay`, `alipay`, `alma`, `amazon_pay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `billie`, `bizum`, `blik`, `boleto`, `card_present`, `cashapp`, `crypto`, `custom`, `customer_balance`, `eps`, `fpx`, `giropay`, `gopay`, `grabpay`, `id_bank_transfer`, `ideal`, `interac_present`, `kakao_pay`, `konbini`, `kr_card`, `mb_way`, `mobilepay`, `multibanco`, `naver_pay`, `nz_bank_account`, `oxxo`, `p24`, `pay_by_bank`, `payco`, `paynow`, `paypal`, `paypay`, `payto`, `pix`, `promptpay`, `qris`, `rechnung`, `revolut_pay`, `samsung_pay`, `satispay`, `scalapay`, `sepa_debit`, `shopeepay`, `sofort`, `stripe_balance`, `sunbit`, `swish`, `twint`, `upi`, `us_bank_account`, `wechat_pay`, and `zip` from enum `SharedPayment.GrantedToken.payment_method_details.type`
  * Add support for `use_stripe_sdk` on `SharedPayment.IssuedTokenCreateParams` and `SharedPayment.IssuedToken`
  * Add support for `redirect_to_url` on `SharedPayment.IssuedToken.next_action`
  * ⚠️ Change type of `SharedPayment.IssuedToken.next_action.type` from `literal('use_stripe_sdk')` to `enum('redirect_to_url'|'use_stripe_sdk')`
  * Add support for `livemode` on `Tax.Location`
  * Add support for `source` on `V2.Iam.ActivityLog.details.user_roles`
  * Add support for `payout` on `V2.MoneyManagement.ReceivedCredit.balance_transfer`
  * ⚠️ Remove support for `payout_v1` on `V2.MoneyManagement.ReceivedCredit.balance_transfer`
  * Add support for new value `payout` on enum `V2.MoneyManagement.ReceivedCredit.balance_transfer.type`
  * ⚠️ Change `V2.MoneyManagement.ReceivedDebit.bank_transfer.us_bank_account` to be optional
  * Add support for error codes `us_bank_account_microdeposits_cannot_be_confirmed` and `us_bank_account_microdeposits_cannot_be_sent` on `ControlledByAlternateResourceError`

## 22.4.0-beta.1 - 2026-06-24
This release changes the pinned API version to `2026-06-24.preview`.

* ⚠️ [#2726](https://github.com/stripe/stripe-node/pull/2726) Update generated code for beta
  * Add support for `redaction` on `Card`, `Charge`, `Checkout.Session`, `Customer`, `Issuing.Authorization`, `Issuing.Card`, `Issuing.Cardholder`, `Issuing.Dispute`, `Issuing.Transaction`, `PaymentIntent`, `PaymentMethod`, `SetupIntent`, `Source`, and `Token`
  * Add support for `disclaimer_variant` on `Capital.FinancingOffer` and `Capital.FinancingSummary.details`
  * Add support for `active` on `FinancialConnections.Account.status_details` and `FinancialConnections.Authorization.status_details`
  * ⚠️ Add support for new value `institution_requirement` on enum `FinancialConnections.Account.status_details.inactive.cause`
  * Change type of `FinancialConnections.SessionCreateParams.limits.accounts` from `longInteger` to `emptyable(longInteger)`
  * Add support for `pause` on `InvoiceCreatePreviewParams.subscription_details`
  * ⚠️ Add support for new value `satispay` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for `release_details` on `Reserve.Hold`
  * Add support for `buyer_id` on `SharedPayment.GrantedToken.payment_method_details.bizum` and `SharedPayment.GrantedToken.payment_method_details.blik`
  * Add support for `fingerprint` on `SharedPayment.GrantedToken.payment_method_details.pix`
  * ⚠️ Remove support for value `invoice_payment.detached` from enum `WebhookEndpointUpdateParams.enabled_events`
  * ⚠️ Add support for new value `money_manager` on enums `EventsV2CoreAccountLinkReturnedEvent.configurations`, `V2.Core.AccountLink.use_case.account_onboarding.configurations`, and `V2.Core.AccountLink.use_case.account_update.configurations`
  * ⚠️ Add support for new value `money_manager` on enums `V2.Core.Account.applied_configurations`, `V2.Core.AccountCloseParams.applied_configurations`, and `V2.Core.AccountListParams.applied_configurations`
  * ⚠️ Remove support for value `storer` from enums `V2.Core.Account.applied_configurations`, `V2.Core.AccountCloseParams.applied_configurations`, and `V2.Core.AccountListParams.applied_configurations`
  * Add support for `money_manager` on `V2.Core.Account.configuration`, `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.configuration`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, `V2.Core.AccountTokenCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.configuration`
  * ⚠️ Remove support for `storer` on `V2.Core.Account.configuration`, `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.configuration`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, `V2.Core.AccountTokenCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.configuration`
  * ⚠️ Add support for new values `business_storage.inbound.eur`, `business_storage.inbound.gbp`, `business_storage.inbound.usd`, `business_storage.outbound.eur`, `business_storage.outbound.gbp`, `business_storage.outbound.usd`, `received_credits.bank_accounts`, and `received_debits.bank_accounts` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].capability` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
  * ⚠️ Add support for new value `money_manager` on enums `V2.Core.Account.future_requirements.entries[].impact.restricts_capabilities[].configuration` and `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].configuration`
  * ⚠️ Remove support for `maximum_rps` on `V2.Core.BatchJobCreateParams` and `V2.Core.BatchJob`
  * Add support for `bic` on `V2.MoneyManagement.FinancialAddress.credentials.us_bank_account`
  * ⚠️ Remove support for `swift_code` on `V2.MoneyManagement.FinancialAddress.credentials.us_bank_account`
  * Add support for `processing` on `V2.MoneyManagement.OutboundPayment.status_details` and `V2.MoneyManagement.OutboundTransfer.status_details`
  * ⚠️ Add support for new values `fx_rate_drift_exceeded_after_review`, `payout_method_amount_limit_exceeded`, and `review_rejected` on enum `V2.MoneyManagement.OutboundPayment.status_details.failed.reason`
  * ⚠️ Add support for new values `fx_rate_drift_exceeded_after_review` and `review_rejected` on enum `V2.MoneyManagement.OutboundTransfer.status_details.failed.reason`
  * Add support for `account_holder_name` on `V2.MoneyManagement.ReceivedCredit.bank_transfer.us_bank_account`
  * ⚠️ Add support for new value `capability_inactive` on enum `V2.MoneyManagement.ReceivedDebit.status_details.failed.reason`
  * Add support for `statuses` on `V2.MoneyManagement.FinancialAccountListParams`
  * ⚠️ Remove support for `status` on `V2.MoneyManagement.FinancialAccountListParams`
  * Change `V2.Core.BatchJobCreateParams.metadata` to be optional
  * Add support for new value `money_manager` on enums `V2.Core.AccountLinkCreateParams.use_case.account_onboarding.configurations` and `V2.Core.AccountLinkCreateParams.use_case.account_update.configurations`
  * ⚠️ Add support for new value `configuration.money_manager` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
  * ⚠️ Remove support for value `configuration.storer` from enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
  * Add support for event notifications `V2CoreAccountIncludingConfigurationMoneyManagerCapabilityStatusUpdatedEvent` and `V2CoreAccountIncludingConfigurationMoneyManagerUpdatedEvent` with related object `V2.Core.Account`
  * Add support for event notification `V2MoneyManagementOutboundPaymentUnderReviewEvent` with related object `V2.MoneyManagement.OutboundPayment`
  * Add support for event notification `V2MoneyManagementOutboundTransferUnderReviewEvent` with related object `V2.MoneyManagement.OutboundTransfer`
  * ⚠️ Remove support for event notifications `V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent` and `V2CoreAccountIncludingConfigurationStorerUpdatedEvent` with related object `V2.Core.Account`
  * Add support for error codes `anomalous_money_movement_request`, `failed_tax_calculation`, `financial_account_balance_does_not_support_currency`, `financial_account_capability_not_enabled`, and `financial_account_capability_restricted` on `QuotePreviewInvoice.last_finalization_error`
  * Add support for error code `default_us_bank_account_cannot_be_archived` on `CannotProceedError`

## 22.3.0-beta.1 - 2026-05-27
This release changes the pinned API version to `2026-05-27.preview`.

* ⚠️ [#2720](https://github.com/stripe/stripe-node/pull/2720) Update generated code for beta
  * Add support for `pause` method on resource `Subscription`
  * Add support for `retrieve` method on resource `V2.Iam.ActivityLog`
  * ⚠️ Add support for new value `mastercard` on enum `Issuing.Settlement.network`
  * ⚠️ Change type of `ProductCatalog.TrialOffer.end_behavior.transition.price` from `string` to `expandable(Price)`
  * Add support for `amount_paid_off_stripe` on `QuotePreviewInvoice`
  * ⚠️ Add support for new value `twint` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for `discountable` on `QuotePreviewSubscriptionSchedule.phases[].add_invoice_items[]`
  * Add support for `bizum` and `scalapay` on `SharedPayment.GrantedToken.payment_method_details`
  * ⚠️ Add support for new values `bizum` and `scalapay` on enum `SharedPayment.GrantedToken.payment_method_details.type`
  * Change `SharedPayment.GrantedToken.agent_details` to be required
  * Change type of `SubscriptionItem.billed_until` from `DateTime | null` to `DateTime`
  * Add support for `payment_behavior` on `SubscriptionResumeParams`
  * Add support for `status_details` on `Subscription`
  * Change `Subscription.billing_schedules` to be required
  * ⚠️ Add support for new values `ao_bank_account`, `az_bank_account`, `bd_bank_account`, `bo_bank_account`, `br_bank_account`, `cl_bank_account`, `ga_bank_account`, `gh_bank_account`, `gi_bank_account`, `hn_bank_account`, `kr_bank_account`, `kz_bank_account`, `la_bank_account`, `ne_bank_account`, `ng_bank_account`, `ni_bank_account`, `py_bank_account`, `sa_bank_account`, `sm_bank_account`, and `uy_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * ⚠️ Change type of `V2.MoneyManagement.ReceivedCredit.bank_transfer.gb_bank_account.network` from `literal('fps')` to `enum('chaps'|'fps')`
  * Add support for new value `chaps` on enum `V2.FinancialAddressCreditSimulationCreditParams.network`
  * Add support for error codes `payment_method_microdeposit_processing_error` and `siret_invalid` on `QuotePreviewInvoice.last_finalization_error`

## 22.2.0-beta.3 - 2026-05-07

## 22.2.0-beta.2 - 2026-04-24
* ⚠️ [#2693](https://github.com/stripe/stripe-node/pull/2693) Update generated code for beta
  * Add support for new resources `V2.Commerce.ProductCatalogImport`, `V2.Data.Reporting.QueryRun`, `V2.Extend.WorkflowRun`, `V2.Extend.Workflow`, `V2.Iam.ActivityLog`, `V2.Network.BusinessProfile`, and `V2.OrchestratedCommerce.Agreement`
  * Add support for `confirm`, `create`, `list`, `retrieve`, and `terminate` methods on resource `V2.OrchestratedCommerce.Agreement`
  * Add support for `me` and `retrieve` methods on resource `V2.Network.BusinessProfile`
  * Add support for `list` method on resource `V2.Iam.ActivityLog`
  * Add support for `list` and `retrieve` methods on resource `V2.Extend.WorkflowRun`
  * Add support for `invoke`, `list`, and `retrieve` methods on resource `V2.Extend.Workflow`
  * Add support for `create` and `retrieve` methods on resources `V2.Commerce.ProductCatalogImport` and `V2.Data.Reporting.QueryRun`
  * ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.konbini`, `V2.Billing.CollectionSetting.payment_method_options.konbini`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.konbini`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.konbini`, and `V2.Billing.CollectionSettingVersion.payment_method_options.konbini` from `map(string: dynamic)` to `an object`
  * ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.sepa_debit`, `V2.Billing.CollectionSetting.payment_method_options.sepa_debit`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.sepa_debit`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.sepa_debit`, and `V2.Billing.CollectionSettingVersion.payment_method_options.sepa_debit` from `map(string: dynamic)` to `an object`
  * ⚠️ Add support for new values `cn_bank_account` and `jp_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * ⚠️ Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccount.bank_account_type` and `V2.MoneyManagement.PayoutMethod.bank_account.bank_account_type`
  * ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_processing` from `map(string: dynamic)` to `an object`
  * ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_queued` from `map(string: dynamic)` to `an object`
  * ⚠️ Change type of `V2.MoneyManagement.InboundTransfer.transfer_history[].bank_debit_succeeded` from `map(string: dynamic)` to `an object`
  * ⚠️ Add support for new value `payout_method_amount_limit_exceeded` on enum `V2.MoneyManagement.OutboundTransfer.status_details.failed.reason`
  * ⚠️ Add support for new values `inbound_transfer_reversal`, `outbound_payment_reversal`, `outbound_transfer_reversal`, `received_credit_reversal`, `received_debit_reversal`, and `stripe_fee_tax` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
  * ⚠️ Remove support for value `return` from enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
  * Add support for new values `futsu` and `toza` on enums `V2.Core.Vault.GbBankAccountCreateParams.bank_account_type`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.bank_account.bank_account_type`, and `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.bank_account.bank_account_type`
  * Change type of `V2.Core.BatchJobCreateParams.endpoint.http_method` from `literal('post')` to `enum('delete'|'post')`
  * ⚠️ Add support for new value `meter_event_value_too_many_digits` on enums `EventsV1BillingMeterErrorReportTriggeredEvent.reason.error_types[].code` and `EventsV1BillingMeterNoMeterFoundEvent.reason.error_types[].code`
  * Add support for `treasury_transaction` on `EventsV2MoneyManagementTransactionCreatedEvent`
  * Add support for event notifications `V2CommerceProductCatalogImportsFailedEvent`, `V2CommerceProductCatalogImportsProcessingEvent`, `V2CommerceProductCatalogImportsSucceededEvent`, and `V2CommerceProductCatalogImportsSucceededWithErrorsEvent` with related object `V2.Commerce.ProductCatalogImport`
  * Add support for event notifications `V2DataReportingQueryRunCreatedEvent`, `V2DataReportingQueryRunFailedEvent`, `V2DataReportingQueryRunSucceededEvent`, and `V2DataReportingQueryRunUpdatedEvent` with related object `V2.Data.Reporting.QueryRun`
  * Add support for event notifications `V2ExtendWorkflowRunFailedEvent`, `V2ExtendWorkflowRunStartedEvent`, and `V2ExtendWorkflowRunSucceededEvent` with related object `V2.Extend.WorkflowRun`
  * Add support for event notifications `V2OrchestratedCommerceAgreementConfirmedEvent`, `V2OrchestratedCommerceAgreementCreatedEvent`, `V2OrchestratedCommerceAgreementPartiallyConfirmedEvent`, and `V2OrchestratedCommerceAgreementTerminatedEvent` with related object `V2.OrchestratedCommerce.Agreement`
  * Add support for error type `CannotProceedError`

## 22.2.0-beta.1 - 2026-04-23
This release changes the pinned API version to `2026-04-22.preview`.

* ⚠️ [#2656](https://github.com/stripe/stripe-node/pull/2656) Update generated code for beta
  * Add support for new resources `SharedPayment.GrantedToken` and `SharedPayment.IssuedToken`
  * Add support for `retrieve` method on resource `SharedPayment.GrantedToken`
  * Add support for `create` and `revoke` test helper methods on resource `SharedPayment.GrantedToken`
  * Add support for `create`, `retrieve`, and `revoke` methods on resource `SharedPayment.IssuedToken`
  * Add support for `blik` on `Checkout.SessionCreateParams.payment_method_options`, `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
  * ⚠️ Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
  * Change `Checkout.Session.managed_payments`, `PaymentIntent.managed_payments`, `PaymentLink.managed_payments`, and `Subscription.managed_payments` to be required
  * Add support for `shared_payment_granted_token` on `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Change `Invoice.payment_settings.payment_method_options.pix`, `QuotePreviewInvoice.payment_settings.payment_method_options.pix`, and `Subscription.payment_settings.payment_method_options.pix` to be required
  * Change `Invoice.payment_settings.payment_method_options.upi`, `QuotePreviewInvoice.payment_settings.payment_method_options.upi`, and `Subscription.payment_settings.payment_method_options.upi` to be required
  * Add support for new values `fo_vat`, `gi_tin`, `it_cf`, and `py_ruc` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for `validation_errors` on `Privacy.RedactionJob`
  * Add support for `tax_details` on `Product`
  * ⚠️ Add support for new value `blik` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * ⚠️ Change type of `QuotePreviewInvoice.total_taxes[].tax_rate_details.tax_rate` from `string` to `expandable(TaxRate)`
  * ⚠️ Change type of `Radar.PaymentEvaluation.client_device_metadata_details.radar_session` from `string` to `string | null`
  * Change `SetupIntent.next_action.pix_display_qr_code.data` to be required
  * Change `SetupIntent.next_action.pix_display_qr_code.expires_at` to be required
  * Change `SetupIntent.next_action.pix_display_qr_code.hosted_instructions_url` to be required
  * Change `SetupIntent.next_action.pix_display_qr_code.image_url_png` to be required
  * Change `SetupIntent.next_action.pix_display_qr_code.image_url_svg` to be required
  * Add support for `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on `Tax.RegistrationCreateParams.country_options.us`
  * Add support for `purpose` on `Treasury.OutboundPaymentCreateParams` and `Treasury.OutboundPayment`
  * Add support for error codes `action_blocked` and `approval_required` on `QuotePreviewInvoice.last_finalization_error`

## 22.1.0-beta.3 - 2026-04-16
Please review the [changelog for 22.0.2](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md#2202---2026-04-16) for more information about changes in this release.

## 22.1.0-beta.2 - 2026-04-08
Please review the [changelog for 22.0.1](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md#2201---2026-04-08) for more information about changes in this release.

## 22.1.0-beta.1 - 2026-04-02
Please review the [changelog for 22.0.0](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md#2200---2026-04-02) for more information about changes in this release.

## 21.1.0-beta.2 - 2026-03-26
* [#2627](https://github.com/stripe/stripe-node/pull/2627) Fix export for Stripe.Decimal in CJS and ESM. Resolves [#2625](https://github.com/stripe/stripe-node/issues/2625)

## 21.1.0-beta.1 - 2026-03-25
This release changes the pinned API version to `2026-03-25.preview`.

It is built on top of SDK version 21.0.0 which contains breaking changes. Please review the [changelog for 21.0.0](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md#2100---2026-03-25) if upgrading from older SDK versions.

* ⚠️ [#2587](https://github.com/stripe/stripe-node/pull/2587) Update generated code for beta
  * Add support for new resources `ProductCatalog.TrialOffer`, `Tax.Location`, and `V2.Core.BatchJob`
  * Add support for `create` method on resource `ProductCatalog.TrialOffer`
  * Add support for `create`, `list`, and `retrieve` methods on resource `Tax.Location`
  * Add support for `cancel`, `create`, and `retrieve` methods on resource `V2.Core.BatchJob`
  * Add support for `performance_location` on `Tax.CalculationCreateParams.line_items[]` and `Tax.CalculationLineItem`
  * ⚠️ Add support for new value `performance` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].sourcing`, `Tax.CalculationLineItem.tax_breakdown[].sourcing`, and `Tax.Transaction.shipping_cost.tax_breakdown[].sourcing`
  * ⚠️ Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, and `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`
  * Add support for `trial_offer` on `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].add`, `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].set`, `InvoiceCreatePreviewParams.schedule_details.phases[].items[]`, `QuoteCreateParams.lines[].actions[].add_item`, `QuoteCreateParams.lines[].actions[].set_items[]`, `QuoteLine.actions[].add_item`, `QuoteLine.actions[].set_items[]`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, `QuoteUpdateParams.lines[].actions[].add_item`, `QuoteUpdateParams.lines[].actions[].set_items[]`, `SubscriptionSchedule.phases[].items[]`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].add`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].set`, `SubscriptionScheduleCreateParams.phases[].items[]`, and `SubscriptionScheduleUpdateParams.phases[].items[]`
  * Add support for `risk_reserved` on `Balance`
  * ⚠️ Remove support for `source_type` on `Charge.payment_method_details.stripe_balance`, `ConfirmationToken.payment_method_preview.stripe_balance`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.stripe_balance`, `PaymentAttemptRecord.payment_method_details.stripe_balance`, `PaymentIntentConfirmParams.payment_method_data.stripe_balance`, `PaymentIntentCreateParams.payment_method_data.stripe_balance`, `PaymentIntentUpdateParams.payment_method_data.stripe_balance`, `PaymentMethod.stripe_balance`, `PaymentMethodCreateParams.stripe_balance`, `PaymentRecord.payment_method_details.stripe_balance`, `SetupIntentConfirmParams.payment_method_data.stripe_balance`, `SetupIntentCreateParams.payment_method_data.stripe_balance`, and `SetupIntentUpdateParams.payment_method_data.stripe_balance`
  * Add support for `tax_details` on `Checkout.SessionCreateParams.line_items[].price_data.product_data`, `Checkout.SessionUpdateParams.line_items[].price_data.product_data`, `InvoiceAddLinesParams.lines[].price_data.product_data`, `InvoiceLineItemUpdateParams.price_data.product_data`, `InvoiceUpdateLinesParams.lines[].price_data.product_data`, `PaymentLinkCreateParams.line_items[].price_data.product_data`, `PlanCreateParams.product[0]`, `PriceCreateParams.product_data`, `ProductCreateParams`, and `ProductUpdateParams`
  * Add support for `pending_invoice_item_interval` on `Checkout.SessionUpdateParams.subscription_data`
  * Add support for `hosted` and `ui_mode` on `FinancialConnections.SessionCreateParams` and `FinancialConnections.Session`
  * Add support for `url` on `FinancialConnections.Session`
  * Add support for `expires_after_seconds` on `Invoice.payment_settings.payment_method_options.pix`, `InvoiceCreateParams.payment_settings.payment_method_options.pix`, `InvoiceUpdateParams.payment_settings.payment_method_options.pix`, `QuotePreviewInvoice.payment_settings.payment_method_options.pix`, `Subscription.payment_settings.payment_method_options.pix`, `SubscriptionCreateParams.payment_settings.payment_method_options.pix`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.pix`
  * Add support for `current_trial` on `InvoiceCreatePreviewParams.subscription_details.items[]`, `SubscriptionCreateParams.items[]`, `SubscriptionItemCreateParams`, `SubscriptionItemUpdateParams`, `SubscriptionItem`, and `SubscriptionUpdateParams.items[]`
  * Add support for `surcharge` on `PaymentIntent.amount_details`, `PaymentIntentCaptureParams.amount_details`, `PaymentIntentConfirmParams.amount_details`, `PaymentIntentCreateParams.amount_details`, `PaymentIntentIncrementAuthorizationParams.amount_details`, and `PaymentIntentUpdateParams.amount_details`
  * Add support for `amount_details` and `payment_details` on `PaymentIntentDecrementAuthorizationParams`
  * Add support for `mandate_options` on `PaymentIntent.payment_method_options.stripe_balance`
  * Add support for `managed_payments` on `PaymentLinkCreateParams` and `PaymentLink`
  * Add support for `stripe_balance` on `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
  * Add support for `billing_cycle_anchor` on `Subscription.trial_settings.end_behavior`, `SubscriptionCreateParams.trial_settings.end_behavior`, and `SubscriptionUpdateParams.trial_settings.end_behavior`
  * ⚠️ Add support for new values `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
  * Add support for `admissions_tax`, `attendance_tax`, `entertainment_tax`, `gross_receipts_tax`, `hospitality_tax`, `luxury_tax`, `resort_tax`, and `tourism_tax` on `Tax.Registration.country_options.us`
  * Add support for `requirements` on `TaxCode`
  * ⚠️ Change type of `V2.Billing.Cadence.settings_data.collection.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSetting.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSettingCreateParams.payment_method_options.card.mandate_options.amount`, `V2.Billing.CollectionSettingUpdateParams.payment_method_options.card.mandate_options.amount`, and `V2.Billing.CollectionSettingVersion.payment_method_options.card.mandate_options.amount` from `longInteger` to `int64_string`
  * ⚠️ Add support for new values `ar_bank_account`, `co_bank_account`, and `eg_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * Add support for `timezone` on `V2.Core.Account.defaults`, `V2.Core.AccountCreateParams.defaults`, and `V2.Core.AccountUpdateParams.defaults`
  * Add support for `azure_event_grid` on `V2.Core.EventDestinationCreateParams` and `V2.Core.EventDestination`
  * ⚠️ Add support for new value `no_azure_partner_topic_exists` on enum `V2.Core.EventDestination.status_details.disabled.reason`
  * ⚠️ Add support for new value `azure_event_grid` on enums `V2.Core.EventDestination.type` and `V2.Core.EventDestinationCreateParams.type`
  * Add support for `supported_currencies` on `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`, and `V2.MoneyManagement.PayoutMethod.card`
  * ⚠️ Change `V2.Core.Vault.GbBankAccount.sort_code` and `V2.Core.Vault.GbBankAccountCreateParams.sort_code` to be optional
  * Add support for `restricted` on `V2.MoneyManagement.PayoutMethod`
  * Add support for `currencies` on `V2.MoneyManagement.PayoutMethodsBankAccountSpec.countries.value.fields[]`
  * Add support for `counterparty` and `description` on `V2.MoneyManagement.Transaction`
  * ⚠️ Add support for `currency` on `V2.Core.Vault.GbBankAccountCreateParams`, `V2.Core.Vault.UsBankAccountCreateParams`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.bank_account`, `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.card`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.bank_account`, and `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.card`
  * Add support for `iban` on `V2.Core.Vault.GbBankAccountCreateParams`
  * Change `V2.Core.Vault.GbBankAccountCreateParams.account_number` to be optional
  * ⚠️ Add support for new value `currency` on enum `InvalidPaymentMethodError.invalid_param`
  * Add support for event notifications `V2CoreBatchJobBatchFailedEvent`, `V2CoreBatchJobCanceledEvent`, `V2CoreBatchJobCompletedEvent`, `V2CoreBatchJobCreatedEvent`, `V2CoreBatchJobReadyForUploadEvent`, `V2CoreBatchJobTimeoutEvent`, `V2CoreBatchJobUpdatedEvent`, `V2CoreBatchJobUploadTimeoutEvent`, `V2CoreBatchJobValidatingEvent`, and `V2CoreBatchJobValidationFailedEvent` with related object `V2.Core.BatchJob`
  * Add support for error code `service_period_coupon_with_metered_tiered_item_unsupported` on `QuotePreviewInvoice.last_finalization_error`
* [#2621](https://github.com/stripe/stripe-node/pull/2621) Update generated code for beta

## 20.5.0-beta.1 - 2026-02-25
This release changes the pinned API version to `2026-02-25.preview`.

* [#2566](https://github.com/stripe/stripe-node/pull/2566) Update generated code for beta
  * Add support for `smart_disputes` on `Account.settings`, `AccountCreateParams.settings`, `AccountUpdateParams.settings`, `V2.Core.Account.configuration.merchant`, `V2.Core.AccountCreateParams.configuration.merchant`, and `V2.Core.AccountUpdateParams.configuration.merchant`
  * Add support for `email_customers_on_successful_payment` on `Account.settings.payments`, `AccountCreateParams.settings.payments`, and `AccountUpdateParams.settings.payments`
  * Add support for `managed_payments` on `Checkout.SessionCreateParams`, `Checkout.Session`, `PaymentIntent`, `SetupIntent`, and `Subscription`
  * Add support for new value `lk_vat` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
  * Add support for new value `lk_vat` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `pay_by_bank` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for new values `bt_bank_account`, `cr_bank_account`, `do_bank_account`, `gt_bank_account`, `md_bank_account`, `mk_bank_account`, `mo_bank_account`, `mz_bank_account`, `pe_bank_account`, `pk_bank_account`, `tw_bank_account`, and `uz_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * Add support for `purpose` on `V2.MoneyManagement.OutboundPaymentCreateParams` and `V2.MoneyManagement.OutboundPayment`
  * Add support for `branch_number` and `swift_code` on `V2.MoneyManagement.PayoutMethod.bank_account`
  * Change `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow` to be optional
  * Add support for error codes `storer_capability_missing` and `storer_capability_not_active` on `QuotePreviewInvoice.last_finalization_error`

## 20.4.0-beta.2 - 2026-02-05
* [#2571](https://github.com/stripe/stripe-node/pull/2571) Fix `UnhandledPromiseRejection` error on failed V2 List operations
  - Fixes a bug where any error returned from the Stripe API on a V2 List call (e.g. a 4xx or 5xx) would crash Node due to an `UnhandledPromiseRejection`

## 20.4.0-beta.1 - 2026-01-28
This release changes the pinned API version to `2026-01-28.preview`.

* [#2552](https://github.com/stripe/stripe-node/pull/2552) Update generated code for beta
  * Add support for new resource `FinancialConnections.Authorization`
  * Add support for `retrieve` method on resource `FinancialConnections.Authorization`
  * Add support for `detach_payment` method on resource `Invoice`
  * Remove support for `cancel`, `list_line_items`, and `reopen` methods on resource `Order`
  * Remove support for `attach_cadence` method on resource `Subscription`
  * Add support for `additional_files` and `site` on `Account.settings.paypay_payments`, `AccountCreateParams.settings.paypay_payments`, and `AccountUpdateParams.settings.paypay_payments`
  * Remove support for `capital` on `Account.settings`
  * Change type of `Charge.payment_method_details.stripe_balance.source_type`, `ConfirmationToken.payment_method_preview.stripe_balance.source_type`, `PaymentAttemptRecord.payment_method_details.stripe_balance.source_type`, `PaymentMethod.stripe_balance.source_type`, and `PaymentRecord.payment_method_details.stripe_balance.source_type` from `enum('bank_account'|'card'|'fpx')` to `enum('bank_account'|'card'|'fpx') | null`
  * Add support for new value `pl_nip` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
  * Add support for new value `capital.financing_summary.line_of_credit_update` on enum `Event.type`
  * Add support for `authorization` and `status_details` on `FinancialConnections.Account`
  * Add support for `relink_options` on `FinancialConnections.SessionCreateParams` and `FinancialConnections.Session`
  * Change `FinancialConnections.SessionCreateParams.account_holder` to be optional
  * Add support for `relink_result` on `FinancialConnections.Session`
  * Remove support for `billing_cadence` on `InvoiceCreatePreviewParams`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
  * Remove support for `billing_cadence_details` on `Invoice.parent` and `QuotePreviewInvoice.parent`
  * Remove support for value `billing_cadence_details` from enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`
  * Add support for new value `pl_nip` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for `car_rental_data`, `flight_data`, and `lodging_data` on `PaymentIntent.payment_details`
  * Change `QuotePreviewInvoice.payment_settings.payment_method_options.payto` to be required
  * Add support for new value `capital.financing_summary.line_of_credit_update` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
  * Add support for new values `ae_bank_account`, `ag_bank_account`, `bh_bank_account`, `gm_bank_account`, `hk_bank_account`, `kh_bank_account`, `lc_bank_account`, `mc_bank_account`, `mg_bank_account`, `my_bank_account`, `qa_bank_account`, `rw_bank_account`, `th_bank_account`, `tt_bank_account`, and `vn_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * Add support for `alternative_reference` on `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`, and `V2.MoneyManagement.PayoutMethod`
  * Add support for `account_holder_address` and `account_holder_name` on `V2.MoneyManagement.FinancialAddress.credentials.us_bank_account`
  * Add support for `fingerprint` on `V2.MoneyManagement.PayoutMethod.card`
  * Add support for snapshot event `InvoicePaymentDetachedEvent` with resource `InvoicePayment`
  * Add support for error code `request_blocked` on `QuotePreviewInvoice.last_finalization_error`
  * Add support for error codes `blocked_payout_method` and `unsupported_payout_method` on `BlockedByStripeError`
  * Add support for error code `invalid_payout_method_data` on `InvalidPayoutMethodError`
  * Add support for error code `limit_payout_method` on `QuotaExceededError`

## 20.2.0-beta.2 - 2026-01-08
This release is purely for pulling in fixes from the releases 20.1.1 and 20.1.2 into the public preview release.

## 20.2.0-beta.1 - 2025-12-16
This release changes the pinned API version to `2025-12-15.preview`.

* [#2498](https://github.com/stripe/stripe-node/pull/2498) Add EventNotificationHandler
  * This is a new, simplified way to handle event notifications (AKA thin event webhooks). Learn more in the docs: https://docs.stripe.com/webhooks/event-notification-handlers?lang=node
* [#2509](https://github.com/stripe/stripe-node/pull/2509) Update generated code for beta
  * Add support for new resources `Reserve.Hold`, `Reserve.Plan`, and `Reserve.Release`
  * Add support for `list` and `retrieve` methods on resources `Reserve.Hold` and `Reserve.Release`
  * Add support for `retrieve` method on resource `Reserve.Plan`
  * Change `Billing.CreditBalanceSummary.customer_account`, `Billing.CreditGrant.customer_account`, `BillingPortal.Session.customer_account`, `CashBalance.customer_account`, `Checkout.Session.customer_account`, `ConfirmationToken.payment_method_preview.customer_account`, `CreditNote.customer_account`, `CustomerBalanceTransaction.customer_account`, `CustomerCashBalanceTransaction.customer_account`, `CustomerSession.customer_account`, `Discount.customer_account`, `Invoice.customer_account`, `InvoiceItem.customer_account`, `PaymentIntent.customer_account`, `PaymentMethod.customer_account`, `PromotionCode.customer_account`, `Quote.customer_account`, `QuotePreviewInvoice.customer_account`, `QuotePreviewSubscriptionSchedule.customer_account`, `SetupAttempt.customer_account`, `Subscription.customer_account`, `SubscriptionSchedule.customer_account`, `TaxId.customer_account`, and `TaxId.owner.customer_account` to be required
  * Change type of `V2.FinancialAddressGeneratedMicrodeposits.amounts` from `amount` to `an object`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.amount`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.amount`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.amount`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.amount`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.amount`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.amount`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.amount` from `longInteger` to `emptyable(longInteger)`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.amount_type`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.amount_type`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.amount_type`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.amount_type`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.amount_type`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.amount_type`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.amount_type` from `enum('fixed'|'maximum')` to `emptyable(enum('fixed'|'maximum'))`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.end_date`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.end_date`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.end_date`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.end_date`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.end_date`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.end_date`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.end_date` from `string` to `emptyable(string)`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.payment_schedule`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.payment_schedule`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.payment_schedule`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.payment_schedule`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.payment_schedule`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.payment_schedule`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.payment_schedule` from `enum` to `emptyable(enum)`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.payments_per_period`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.payments_per_period`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.payments_per_period`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.payments_per_period`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.payments_per_period`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.payments_per_period`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.payments_per_period` from `longInteger` to `emptyable(longInteger)`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.purpose`, `PaymentIntentConfirmParams.payment_method_options.payto.mandate_options.purpose`, `PaymentIntentCreateParams.payment_method_options.payto.mandate_options.purpose`, `PaymentIntentUpdateParams.payment_method_options.payto.mandate_options.purpose`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.purpose`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.purpose`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.purpose` from `enum` to `emptyable(enum)`
  * Change type of `Checkout.SessionCreateParams.payment_method_options.payto.mandate_options.start_date`, `SetupIntentConfirmParams.payment_method_options.payto.mandate_options.start_date`, `SetupIntentCreateParams.payment_method_options.payto.mandate_options.start_date`, and `SetupIntentUpdateParams.payment_method_options.payto.mandate_options.start_date` from `string` to `emptyable(string)`
  * Change `Identity.VerificationSession.related_customer_account` to be required
  * Add support for `async_workflows` on `PaymentIntent`
  * Add support for `payto` on `QuotePreviewInvoice.payment_settings.payment_method_options`
  * Add support for new value `payto` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Remove support for `requested` on `V2.Core.Account.configuration.customer.capabilities.automatic_indirect_tax`, `V2.Core.Account.configuration.merchant.capabilities.ach_debit_payments`, `V2.Core.Account.configuration.merchant.capabilities.acss_debit_payments`, `V2.Core.Account.configuration.merchant.capabilities.affirm_payments`, `V2.Core.Account.configuration.merchant.capabilities.afterpay_clearpay_payments`, `V2.Core.Account.configuration.merchant.capabilities.alma_payments`, `V2.Core.Account.configuration.merchant.capabilities.amazon_pay_payments`, `V2.Core.Account.configuration.merchant.capabilities.au_becs_debit_payments`, `V2.Core.Account.configuration.merchant.capabilities.bacs_debit_payments`, `V2.Core.Account.configuration.merchant.capabilities.bancontact_payments`, `V2.Core.Account.configuration.merchant.capabilities.blik_payments`, `V2.Core.Account.configuration.merchant.capabilities.boleto_payments`, `V2.Core.Account.configuration.merchant.capabilities.card_payments`, `V2.Core.Account.configuration.merchant.capabilities.cartes_bancaires_payments`, `V2.Core.Account.configuration.merchant.capabilities.cashapp_payments`, `V2.Core.Account.configuration.merchant.capabilities.eps_payments`, `V2.Core.Account.configuration.merchant.capabilities.fpx_payments`, `V2.Core.Account.configuration.merchant.capabilities.gb_bank_transfer_payments`, `V2.Core.Account.configuration.merchant.capabilities.grabpay_payments`, `V2.Core.Account.configuration.merchant.capabilities.ideal_payments`, `V2.Core.Account.configuration.merchant.capabilities.jcb_payments`, `V2.Core.Account.configuration.merchant.capabilities.jp_bank_transfer_payments`, `V2.Core.Account.configuration.merchant.capabilities.kakao_pay_payments`, `V2.Core.Account.configuration.merchant.capabilities.klarna_payments`, `V2.Core.Account.configuration.merchant.capabilities.konbini_payments`, `V2.Core.Account.configuration.merchant.capabilities.kr_card_payments`, `V2.Core.Account.configuration.merchant.capabilities.link_payments`, `V2.Core.Account.configuration.merchant.capabilities.mobilepay_payments`, `V2.Core.Account.configuration.merchant.capabilities.multibanco_payments`, `V2.Core.Account.configuration.merchant.capabilities.mx_bank_transfer_payments`, `V2.Core.Account.configuration.merchant.capabilities.naver_pay_payments`, `V2.Core.Account.configuration.merchant.capabilities.oxxo_payments`, `V2.Core.Account.configuration.merchant.capabilities.p24_payments`, `V2.Core.Account.configuration.merchant.capabilities.pay_by_bank_payments`, `V2.Core.Account.configuration.merchant.capabilities.payco_payments`, `V2.Core.Account.configuration.merchant.capabilities.paynow_payments`, `V2.Core.Account.configuration.merchant.capabilities.promptpay_payments`, `V2.Core.Account.configuration.merchant.capabilities.revolut_pay_payments`, `V2.Core.Account.configuration.merchant.capabilities.samsung_pay_payments`, `V2.Core.Account.configuration.merchant.capabilities.sepa_bank_transfer_payments`, `V2.Core.Account.configuration.merchant.capabilities.sepa_debit_payments`, `V2.Core.Account.configuration.merchant.capabilities.stripe_balance.payouts`, `V2.Core.Account.configuration.merchant.capabilities.swish_payments`, `V2.Core.Account.configuration.merchant.capabilities.twint_payments`, `V2.Core.Account.configuration.merchant.capabilities.us_bank_transfer_payments`, `V2.Core.Account.configuration.merchant.capabilities.zip_payments`, `V2.Core.Account.configuration.recipient.capabilities.bank_accounts.local`, `V2.Core.Account.configuration.recipient.capabilities.bank_accounts.wire`, `V2.Core.Account.configuration.recipient.capabilities.cards`, `V2.Core.Account.configuration.recipient.capabilities.stripe_balance.payouts`, `V2.Core.Account.configuration.recipient.capabilities.stripe_balance.stripe_transfers`, `V2.Core.Account.configuration.storer.capabilities.financial_addresses.bank_accounts`, `V2.Core.Account.configuration.storer.capabilities.holds_currencies.eur`, `V2.Core.Account.configuration.storer.capabilities.holds_currencies.gbp`, `V2.Core.Account.configuration.storer.capabilities.holds_currencies.usd`, `V2.Core.Account.configuration.storer.capabilities.inbound_transfers.bank_accounts`, `V2.Core.Account.configuration.storer.capabilities.outbound_payments.bank_accounts`, `V2.Core.Account.configuration.storer.capabilities.outbound_payments.cards`, `V2.Core.Account.configuration.storer.capabilities.outbound_payments.financial_accounts`, `V2.Core.Account.configuration.storer.capabilities.outbound_transfers.bank_accounts`, and `V2.Core.Account.configuration.storer.capabilities.outbound_transfers.financial_accounts`
  * Add support for new values `al_bank_account`, `am_bank_account`, `bn_bank_account`, `bw_bank_account`, `dz_bank_account`, `gy_bank_account`, `jm_bank_account`, `jo_bank_account`, `kw_bank_account`, `lk_bank_account`, `ma_bank_account`, `om_bank_account`, and `tz_bank_account` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * Change type of `V2.Core.Account.identity.business_details.annual_revenue.amount`, `V2.Core.Account.identity.business_details.monthly_estimated_revenue.amount`, `V2.Core.AccountCreateParams.identity.business_details.annual_revenue.amount`, `V2.Core.AccountCreateParams.identity.business_details.monthly_estimated_revenue.amount`, `V2.Core.AccountTokenCreateParams.identity.business_details.annual_revenue.amount`, `V2.Core.AccountTokenCreateParams.identity.business_details.monthly_estimated_revenue.amount`, `V2.Core.AccountUpdateParams.identity.business_details.annual_revenue.amount`, `V2.Core.AccountUpdateParams.identity.business_details.monthly_estimated_revenue.amount`, `V2.FinancialAddressCreditSimulationCreditParams.amount`, `V2.MoneyManagement.Adjustment.amount`, `V2.MoneyManagement.InboundTransfer.amount`, `V2.MoneyManagement.InboundTransferCreateParams.amount`, `V2.MoneyManagement.OutboundPayment.amount`, `V2.MoneyManagement.OutboundPaymentCreateParams.amount`, `V2.MoneyManagement.OutboundPaymentQuote.amount`, `V2.MoneyManagement.OutboundPaymentQuote.estimated_fees[].amount`, `V2.MoneyManagement.OutboundPaymentQuoteCreateParams.amount`, `V2.MoneyManagement.OutboundTransfer.amount`, `V2.MoneyManagement.OutboundTransferCreateParams.amount`, `V2.MoneyManagement.ReceivedCredit.amount`, `V2.MoneyManagement.ReceivedDebit.amount`, and `V2.MoneyManagement.Transaction.amount` from `amount` to `an object`
  * Add support for new values `at_stn`, `at_vat`, `be_vat`, `bg_vat`, `ca_gst_hst`, `cy_he`, `cy_vat`, `cz_vat`, `de_stn`, `dk_vat`, `ee_vat`, `es_vat`, `fi_vat`, `fr_rna`, `gr_afm`, `gr_vat`, `hr_mbs`, `hr_oib`, `hr_vat`, `hu_tin`, `hu_vat`, `ie_trn`, `ie_vat`, `lt_vat`, `lu_nif`, `lu_vat`, `lv_vat`, `mt_tin`, `mt_vat`, `my_itn`, `nl_rsin`, `nl_vat`, `nz_ird`, `pl_nip`, `pl_vat`, `ro_orc`, `ro_vat`, `se_vat`, `si_tin`, `si_vat`, `sk_dic`, and `sk_vat` on enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
  * Remove support for value `hk_mbs` from enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
  * Add support for new values `ar_cuil`, `at_stn`, `be_nrn`, `bg_ucn`, `bn_nric`, `ca_sin`, `ch_oasi`, `cl_rut`, `cn_pp`, `co_nuip`, `cr_ci`, `cy_tic`, `cz_rc`, `dk_cpr`, `do_cie`, `ec_ci`, `ee_ik`, `es_nif`, `fi_hetu`, `fr_nir`, `gb_nino`, `gr_afm`, `hr_oib`, `hu_ad`, `id_nik`, `ie_ppsn`, `is_kt`, `it_cf`, `jp_inc`, `ke_pin`, `li_peid`, `lt_ak`, `lu_nif`, `lv_pk`, `ng_nin`, `no_nin`, `nz_ird`, `pl_pesel`, `pt_nif`, `ro_cnp`, `se_pin`, `sk_dic`, `tr_tin`, `uy_dni`, and `za_id` on enums `V2.Core.Account.identity.individual.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.individual.id_numbers[].type`, `V2.Core.AccountPerson.id_numbers[].type`, `V2.Core.AccountPersonCreateParams.id_numbers[].type`, `V2.Core.AccountPersonTokenCreateParams.id_numbers[].type`, `V2.Core.AccountPersonUpdateParams.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.individual.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.individual.id_numbers[].type`
  * Change `V2.Core.Account.defaults.responsibilities` to be required
  * Change `V2.Core.Account.defaults.responsibilities.fees_collector` to be optional
  * Change `V2.Core.Account.defaults.responsibilities.losses_collector` to be optional
  * Add support for `financial_connections_account` on `V2.Core.Vault.UsBankAccount` and `V2.MoneyManagement.PayoutMethod.bank_account`
  * Change type of `V2.MoneyManagement.FinancialAccount.balance.available`, `V2.MoneyManagement.Transaction.balance_impact.available`, and `V2.MoneyManagement.TransactionEntry.balance_impact.available` from `amount` to `an object`
  * Change type of `V2.MoneyManagement.FinancialAccount.balance.inbound_pending`, `V2.MoneyManagement.Transaction.balance_impact.inbound_pending`, and `V2.MoneyManagement.TransactionEntry.balance_impact.inbound_pending` from `amount` to `an object`
  * Change type of `V2.MoneyManagement.FinancialAccount.balance.outbound_pending`, `V2.MoneyManagement.Transaction.balance_impact.outbound_pending`, and `V2.MoneyManagement.TransactionEntry.balance_impact.outbound_pending` from `amount` to `an object`
  * Change type of `V2.MoneyManagement.InboundTransfer.from.debited`, `V2.MoneyManagement.OutboundPayment.from.debited`, `V2.MoneyManagement.OutboundPaymentQuote.from.debited`, and `V2.MoneyManagement.OutboundTransfer.from.debited` from `amount` to `an object`
  * Change type of `V2.MoneyManagement.InboundTransfer.to.credited`, `V2.MoneyManagement.OutboundPayment.to.credited`, `V2.MoneyManagement.OutboundPaymentQuote.to.credited`, and `V2.MoneyManagement.OutboundTransfer.to.credited` from `amount` to `an object`
  * Add support for `transfer` on `V2.MoneyManagement.ReceivedCredit.balance_transfer`
  * Add support for new value `transfer` on enum `V2.MoneyManagement.ReceivedCredit.balance_transfer.type`
  * Change `V2.Core.AccountTokenCreateParams.identity` to be optional
  * Change type of `V2.Core.AccountListParams.applied_configurations` from `string` to `enum('customer'|'merchant'|'recipient'|'storer')`
  * Add support for event notification `V2MoneyManagementPayoutMethodCreatedEvent` with related object `V2.MoneyManagement.PayoutMethod`
  * Add support for error type `ControlledByAlternateResourceError`
  * Remove support for error type `RateLimitError`
  * Add support for error code `account_token_required_for_v2_account` on `QuotePreviewInvoice.last_finalization_error`

## 20.1.0-beta.1 - 2025-11-18
This release changes the pinned API version to `2025-11-17.preview`.

* [#2487](https://github.com/stripe/stripe-node/pull/2487) Update generated code for beta
  * Add support for new resources `V2.Core.AccountPersonToken` and `V2.Core.AccountToken`
  * Remove support for resource `V2.Payments.OffSessionPayment`
  * Add support for `create` and `retrieve` methods on resources `V2.Core.AccountPersonToken` and `V2.Core.AccountToken`
  * Remove support for `cancel`, `capture`, `create`, `list`, and `retrieve` methods on resource `V2.Payments.OffSessionPayment`
  * Add support for `specified_commercial_transactions_act_url` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
  * Add support for `paypay_payments` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
  * Change `Tax.Association.tax_transaction_attempts` to be required
  * Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].dimension_filters` from `string` to `array(string)`
  * Change type of `Billing.Analytics.MeterUsageRetrieveParams.meters[].tenant_filters` from `string` to `array(string)`
  * Add support for `car_rental_data`, `flight_data`, and `lodging_data` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
  * Add support for `supplementary_purchase_data` on `OrderCreateParams.payment.settings.payment_method_options.klarna`, `OrderUpdateParams.payment.settings.payment_method_options.klarna`, `PaymentIntentConfirmParams.payment_method_options.klarna`, `PaymentIntentCreateParams.payment_method_options.klarna`, and `PaymentIntentUpdateParams.payment_method_options.klarna`
  * Add support for `allow_redisplay` and `customer_account` on `PaymentMethodListParams`
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
  * Add support for `changes` on `V2.Core.Event`
  * Remove support for value `sepa_bank_account` from enums `V2.MoneyManagement.FinancialAddress.credentials.type` and `V2.MoneyManagement.FinancialAddressCreateParams.type`
  * Add support for `account_token` on `V2.Core.AccountCreateParams` and `V2.Core.AccountUpdateParams`
  * Add support for new value `future_requirements` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
  * Add support for `person_token` on `V2.Core.AccountPersonCreateParams` and `V2.Core.AccountPersonUpdateParams`
  * Add support for `changes` on `v2.core.Event`
  * Add support for thin event `V2CoreHealthEventGenerationFailureResolvedEvent`
  * Remove support for thin events `V2PaymentsOffSessionPaymentAuthorizationAttemptFailedEvent`, `V2PaymentsOffSessionPaymentAuthorizationAttemptStartedEvent`, `V2PaymentsOffSessionPaymentCanceledEvent`, `V2PaymentsOffSessionPaymentCreatedEvent`, `V2PaymentsOffSessionPaymentFailedEvent`, `V2PaymentsOffSessionPaymentRequiresCaptureEvent`, and `V2PaymentsOffSessionPaymentSucceededEvent` with related object `V2.Payments.OffSessionPayment`

## 19.3.0-beta.1 - 2025-10-29
This release changes the pinned API version to `2025-10-29.preview`.

* [#2443](https://github.com/stripe/stripe-node/pull/2443) Update generated code for beta
  * Add support for `update` method on resource `V2.MoneyManagement.FinancialAccount`
  * Add support for `confirm_microdeposits`, `list`, and `send_microdeposits` methods on resource `V2.Core.Vault.UsBankAccount`
  * Add support for `list` method on resource `V2.Core.Vault.GbBankAccount`
  * Add support for new value `verification_data_not_found` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, `BankAccount.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
  * Add support for `payment_portal_url` on `Charge.payment_method_details.rechnung`, `PaymentAttemptRecord.payment_method_details.rechnung`, and `PaymentRecord.payment_method_details.rechnung`
  * Add support for `tax_id_element` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
  * Add support for `starting_after` on `PaymentAttemptRecordListParams`
  * Add support for new value `solana` on enums `PaymentAttemptRecord.payment_method_details.crypto.network` and `PaymentRecord.payment_method_details.crypto.network`
  * Add support for `reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`, `PaymentIntentCaptureParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentConfirmParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentCreateParams.amount_details.line_items[].payment_method_options.klarna`, `PaymentIntentIncrementAuthorizationParams.amount_details.line_items[].payment_method_options.klarna`, and `PaymentIntentUpdateParams.amount_details.line_items[].payment_method_options.klarna`
  * Change `PaymentIntent.payment_details.customer_reference` to be required
  * Change `PaymentIntent.payment_details.order_reference` to be required
  * Add support for `subscription_reference` on `PaymentIntentAmountDetailsLineItem.payment_method_options.klarna`
  * Add support for `closed` on `V2.Core.AccountListParams` and `V2.Core.Account`
  * Add support for new value `payment_method` on enums `V2.Core.Account.configuration.customer.automatic_indirect_tax.location_source`, `V2.Core.AccountCreateParams.configuration.customer.automatic_indirect_tax.location_source`, and `V2.Core.AccountUpdateParams.configuration.customer.automatic_indirect_tax.location_source`
  * Add support for `usd` on `V2.Core.Account.configuration.storer.capabilities.holds_currencies`, `V2.Core.AccountCreateParams.configuration.storer.capabilities.holds_currencies`, and `V2.Core.AccountUpdateParams.configuration.storer.capabilities.holds_currencies`
  * Add support for new values `application_custom` and `application_express` on enums `V2.Core.Account.defaults.responsibilities.fees_collector`, `V2.Core.AccountCreateParams.defaults.responsibilities.fees_collector`, and `V2.Core.AccountUpdateParams.defaults.responsibilities.fees_collector`
  * Add support for `representative_declaration` on `V2.Core.Account.identity.attestations`, `V2.Core.AccountCreateParams.identity.attestations`, and `V2.Core.AccountUpdateParams.identity.attestations`
  * Add support for new value `holds_currencies.usd` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
  * Add support for `verification` on `V2.Core.Vault.UsBankAccount`
  * Add support for `v1_id` on `EventsV2MoneyManagementTransactionCreatedEvent`
  * Remove support for thin event `V2BillingBillSettingUpdatedEvent` with related object `V2.Billing.BillSetting`
  * Add support for error code `payment_intent_rate_limit_exceeded` on `QuotePreviewInvoice.last_finalization_error`
  * Add support for error codes `blocked_payout_method_crypto_wallet` and `unsupported_payout_method_crypto_wallet` on `BlockedByStripeError`
  * Add support for error code `outbound_flow_from_closed_financial_account_unsupported` on `FeatureNotEnabledError`
  * Add support for error code `limit_payout_method_crypto_wallet` on `QuotaExceededError`
* [#2475](https://github.com/stripe/stripe-node/pull/2475) Update generated code for beta
  * Add support for `crypto_storer` on `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`

## 19.2.0-beta.1 - 2025-10-03
* Contains bug fixes and improvements from [v19.1.0](https://github.com/stripe/stripe-node/blob/master/CHANGELOG.md#1910---2025-10-03).

## 19.1.0-beta.1 - 2025-09-30
This release changes the pinned API version to `2025-09-30.preview`.

It is built on top of SDK version 19.0.0 which contains breaking changes. Please review the [changelog for 19.0.0](https://github.com/stripe/stripe-go/blob/master/CHANGELOG.md#1900---2025-09-30) if upgrading from older SDK versions.

* [#2397](https://github.com/stripe/stripe-node/pull/2397) Update generated code for beta
  * Add support for new resources `Billing.Analytics.MeterUsageRow` and `Billing.Analytics.MeterUsage`
  * Remove support for resources `Billing.MeterUsageRow` and `Billing.MeterUsage`
  * Add support for `retrieve` method on resource `Billing.Analytics.MeterUsage`
  * Remove support for `retrieve` method on resource `Billing.MeterUsage`
  * Add support for `report_payment_attempt_informational` method on resource `PaymentRecord`
  * Add support for `minimum_balance_by_currency` on `BalanceSettingUpdateParams.payments.payouts` and `BalanceSettings.payments.payouts`
  * Remove support for values `saturday` and `sunday` from enums `BalanceSettingUpdateParams.payments.payouts.schedule.weekly_payout_days` and `BalanceSettings.payments.payouts.schedule.weekly_payout_days`
  * Change type of `BalanceSettingUpdateParams.payments.settlement_timing.delay_days_override` from `longInteger` to `emptyable(longInteger)`
  * Change `BalanceSettingUpdateParams.payments` to be optional
  * Add support for `delay_days_override` on `BalanceSettings.payments.settlement_timing`
  * Add support for `automatic_tax` and `invoice_creation` on `Checkout.SessionUpdateParams`
  * Add support for `unit_label` on `Checkout.SessionUpdateParams.line_items[].price_data.product_data`
  * Add support for `invoice_settings` on `Checkout.SessionUpdateParams.subscription_data`
  * Change `Checkout.Session.collected_information.business_name` to be required
  * Add support for `intended_submission_method` on `DisputeUpdateParams` and `Dispute`
  * Change type of `Dispute.smart_disputes.recommended_evidence` from `string` to `array(string)`
  * Add support for `pix` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
  * Add support for new value `pix` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
  * Add support for `billing_schedules` on `InvoiceCreatePreviewParams.subscription_details`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
  * Add support for `paypay` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
  * Add support for `wallet` on `PaymentAttemptRecord.payment_method_details.card` and `PaymentRecord.payment_method_details.card`
  * Change type of `PaymentAttemptRecord.processor_details.custom.payment_reference` and `PaymentRecord.processor_details.custom.payment_reference` from `string` to `string | null`
  * Add support for `flexible` on `QuotePreviewSubscriptionSchedule.billing_mode`
  * Add support for `billed_until` on `SubscriptionItem`
  * Add support for error codes `financial_connections_account_pending_account_numbers` and `financial_connections_account_unavailable_account_numbers` on `QuotePreviewInvoice.last_finalization_error`
* [#2410](https://github.com/stripe/stripe-node/pull/2410) Update generated code for beta
  * Add support for new resources `V2.Billing.BillSettingVersion`, `V2.Billing.BillSetting`, `V2.Billing.Cadence`, `V2.Billing.CollectionSettingVersion`, `V2.Billing.CollectionSetting`, and `V2.Billing.Profile`
  * Add support for `create`, `list`, `retrieve`, and `update` methods on resources `V2.Billing.BillSetting`, `V2.Billing.CollectionSetting`, and `V2.Billing.Profile`
  * Add support for `list` and `retrieve` methods on resources `V2.Billing.BillSettingVersion` and `V2.Billing.CollectionSettingVersion`
  * Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Billing.Cadence`
  * Add support for new value `crypto_wallet` on enum `V2.Core.Account.configuration.recipient.default_outbound_destination.type`
  * Add support for `profile` on `V2.Core.Account.defaults`, `V2.Core.AccountCreateParams.defaults`, and `V2.Core.AccountUpdateParams.defaults`
  * Add support for `i_p` on `V2.Core.Account.identity.attestations.directorship_declaration`, `V2.Core.Account.identity.attestations.ownership_declaration`, `V2.Core.Account.identity.attestations.terms_of_service.account`, `V2.Core.Account.identity.attestations.terms_of_service.storer`, `V2.Core.Account.identity.individual.additional_terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.storer`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.storer`, `V2.Core.Person.additional_terms_of_service.account`, `V2.Core.PersonCreateParams.additional_terms_of_service.account`, and `V2.Core.PersonUpdateParams.additional_terms_of_service.account`
  * Remove support for `ip` on `V2.Core.Account.identity.attestations.directorship_declaration`, `V2.Core.Account.identity.attestations.ownership_declaration`, `V2.Core.Account.identity.attestations.terms_of_service.account`, `V2.Core.Account.identity.attestations.terms_of_service.storer`, `V2.Core.Account.identity.individual.additional_terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service.storer`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.account`, `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service.storer`, `V2.Core.Person.additional_terms_of_service.account`, `V2.Core.PersonCreateParams.additional_terms_of_service.account`, and `V2.Core.PersonUpdateParams.additional_terms_of_service.account`
  * Remove support for `doing_business_as`, `product_description`, and `url` on `V2.Core.Account.identity.business_details`, `V2.Core.AccountCreateParams.identity.business_details`, and `V2.Core.AccountUpdateParams.identity.business_details`
  * Add support for `settlement_currency` on `V2.MoneyManagement.FinancialAddress`
  * Add support for `sepa_bank_account` on `V2.MoneyManagement.FinancialAddress.credentials` and `V2.MoneyManagement.ReceivedCredit.bank_transfer`
  * Add support for new value `sepa_bank_account` on enum `V2.MoneyManagement.FinancialAddress.credentials.type`
  * Add support for `amount_details` and `payments_orchestration` on `V2.Payments.OffSessionPaymentCreateParams` and `V2.Payments.OffSessionPayment`
  * Add support for new value `authorization_expired` on enum `V2.Payments.OffSessionPayment.failure_reason`
  * Add support for `retry_policy` on `V2.Payments.OffSessionPayment.retry_details` and `V2.Payments.OffSessionPaymentCreateParams.retry_details`
  * Add support for new values `heuristic` and `scheduled` on enums `V2.Payments.OffSessionPayment.retry_details.retry_strategy` and `V2.Payments.OffSessionPaymentCreateParams.retry_details.retry_strategy`
  * Change type of `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_duration` from `literal('five_minutes')` to `enum('five_minutes'|'none')`
  * Change type of `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_expires_at` from `DateTime` to `DateTime | null`
  * Add support for new value `none` on enum `V2.MoneyManagement.OutboundPaymentQuote.fx_quote.lock_status`
  * Add support for new value `crypto_wallet` on enums `V2.MoneyManagement.OutboundSetupIntentCreateParams.payout_method_data.type`, `V2.MoneyManagement.OutboundSetupIntentUpdateParams.payout_method_data.type`, and `V2.MoneyManagement.PayoutMethod.type`
  * Add support for `origin_type` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
  * Remove support for `payment_method_type` on `V2.MoneyManagement.ReceivedCredit.bank_transfer`
  * Add support for new value `prevented` on enum `Dispute.status`
  * Add support for `mandate_data` and `payment_method_options` on `V2.Payments.OffSessionPaymentCreateParams`
  * Add support for `type` on `V2.MoneyManagement.FinancialAddressCreateParams`
  * Remove support for `currency` on `V2.MoneyManagement.FinancialAddressCreateParams`
  * Add support for new values `financial_addressses.crypto_wallets`, `holds_currencies.usdc`, `outbound_payments.crypto_wallets`, and `outbound_transfers.crypto_wallets` on enum `EventsV2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent.updated_capability`
  * Add support for thin event `V2BillingBillSettingUpdatedEvent` with related object `V2.Billing.BillSetting`
  * Add support for error type `RateLimitError`
  * Add support for error code `invalid_payout_method_crypto_wallet` on `InvalidPayoutMethodError`
* [#2422](https://github.com/stripe/stripe-node/pull/2422) Update generated code for beta
  * Add support for `attach_cadence` method on resource `Subscription`
  * Add support for `billing_cadence` on `InvoiceCreatePreviewParams`, `SubscriptionCreateParams`, `SubscriptionUpdateParams`, and `Subscription`
  * Add support for `billing_cadence_details` on `Invoice.parent` and `QuotePreviewInvoice.parent`
  * Add support for new value `billing_cadence_details` on enums `Invoice.parent.type` and `QuotePreviewInvoice.parent.type`

## 18.6.0-beta.1 - 2025-08-27
This release changes the pinned API version to `2025-08-27.preview`.

* [#2381](https://github.com/stripe/stripe-node/pull/2381) Update generated code for beta
  * Add support for `list` and `retrieve` methods on resource `InvoicePayment`
  * Add support for `list` method on resource `Mandate`
  * Add support for `applied` on `V2.Core.Account.configuration.customer`, `V2.Core.Account.configuration.merchant`, `V2.Core.Account.configuration.recipient`, `V2.Core.Account.configuration.storer`, `V2.Core.AccountUpdateParams.configuration.customer`, `V2.Core.AccountUpdateParams.configuration.merchant`, `V2.Core.AccountUpdateParams.configuration.recipient`, and `V2.Core.AccountUpdateParams.configuration.storer`
  * Add support for new values `ao_nif`, `az_tin`, `bd_etin`, `cr_cpj`, `cr_nite`, `do_rcn`, `gt_nit`, `kz_bin`, `mz_nuit`, `pe_ruc`, `pk_ntn`, `sa_crn`, and `sa_tin` on enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
  * Add support for new values `ao_nif`, `az_tin`, `bd_brc`, `bd_etin`, `bd_nid`, `cr_cpf`, `cr_dimex`, `cr_nite`, `do_rcn`, `gt_nit`, `kz_iin`, `mz_nuit`, `pe_dni`, `pk_cnic`, `pk_snic`, and `sa_tin` on enums `V2.Core.Account.identity.individual.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.individual.id_numbers[].type`, `V2.Core.AccountUpdateParams.identity.individual.id_numbers[].type`, `V2.Core.Person.id_numbers[].type`, `V2.Core.PersonCreateParams.id_numbers[].type`, and `V2.Core.PersonUpdateParams.id_numbers[].type`
  * Change type of `Billing.AlertTriggered.value` from `longInteger` to `decimal_string`
  * Add support for `display_name` on `V2.MoneyManagement.FinancialAccountCreateParams` and `V2.MoneyManagement.FinancialAccount`
  * Add support for new value `currency_conversion` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
  * Add support for `currency_conversion` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
  * Add support for new value `currency_conversion` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
  * Add support for `payments` on `BalanceSettingUpdateParams` and `BalanceSettings`
  * Remove support for `debit_negative_balances`, `payouts`, and `settlement_timing` on `BalanceSettingUpdateParams` and `BalanceSettings`
  * Add support for `mandate` on `Charge.payment_method_details.pix`, `PaymentAttemptRecord.payment_method_details.pix`, and `PaymentRecord.payment_method_details.pix`
  * Add support for `coupon_data` on `Checkout.SessionCreateParams.discounts[]`
  * Add support for `mandate_options` on `Checkout.Session.payment_method_options.pix`, `Checkout.SessionCreateParams.payment_method_options.pix`, `PaymentIntent.payment_method_options.pix`, `PaymentIntentConfirmParams.payment_method_options.pix`, `PaymentIntentCreateParams.payment_method_options.pix`, and `PaymentIntentUpdateParams.payment_method_options.pix`
  * Change type of `Checkout.Session.payment_method_options.pix.setup_future_usage`, `Checkout.SessionCreateParams.payment_method_options.pix.setup_future_usage`, `PaymentIntent.payment_method_options.pix.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.pix.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.pix.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.pix.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
  * Add support for `amount` on `Mandate.multi_use`, `PaymentAttemptRecord`, and `PaymentRecord`
  * Add support for `currency` on `Mandate.multi_use`
  * Add support for `pix` on `Mandate.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
  * Add support for `limit` on `PaymentAttemptRecordListParams`
  * Add support for `amount_authorized`, `amount_refunded`, and `application` on `PaymentAttemptRecord` and `PaymentRecord`
  * Add support for `processor_details` on `PaymentAttemptRecord`, `PaymentRecordReportPaymentParams`, and `PaymentRecord`
  * Remove support for `payment_reference` on `PaymentAttemptRecord`, `PaymentRecordReportPaymentParams`, and `PaymentRecord`
  * Add support for `installments` on `PaymentAttemptRecord.payment_method_details.alma` and `PaymentRecord.payment_method_details.alma`
  * Add support for `transaction_id` on `PaymentAttemptRecord.payment_method_details.alma`, `PaymentAttemptRecord.payment_method_details.amazon_pay`, `PaymentAttemptRecord.payment_method_details.billie`, `PaymentAttemptRecord.payment_method_details.kakao_pay`, `PaymentAttemptRecord.payment_method_details.kr_card`, `PaymentAttemptRecord.payment_method_details.naver_pay`, `PaymentAttemptRecord.payment_method_details.payco`, `PaymentAttemptRecord.payment_method_details.revolut_pay`, `PaymentAttemptRecord.payment_method_details.samsung_pay`, `PaymentAttemptRecord.payment_method_details.satispay`, `PaymentRecord.payment_method_details.alma`, `PaymentRecord.payment_method_details.amazon_pay`, `PaymentRecord.payment_method_details.billie`, `PaymentRecord.payment_method_details.kakao_pay`, `PaymentRecord.payment_method_details.kr_card`, `PaymentRecord.payment_method_details.naver_pay`, `PaymentRecord.payment_method_details.payco`, `PaymentRecord.payment_method_details.revolut_pay`, `PaymentRecord.payment_method_details.samsung_pay`, and `PaymentRecord.payment_method_details.satispay`
  * Add support for `location` and `reader` on `PaymentAttemptRecord.payment_method_details.paynow` and `PaymentRecord.payment_method_details.paynow`
  * Add support for `latest_active_mandate` on `PaymentMethod`
  * Change `Payout.payout_method` to be required
  * Add support for `metadata` and `period` on `QuotePreviewSubscriptionSchedule.phases[].add_invoice_items[]`
  * Add support for `pix_display_qr_code` on `SetupIntent.next_action`
  * Add support for `reader_security` on `Terminal.ConfigurationCreateParams`, `Terminal.ConfigurationUpdateParams`, and `Terminal.Configuration`
  * Add support for error codes `customer_session_expired` and `india_recurring_payment_mandate_canceled` on `QuotePreviewInvoice.last_finalization_error`

## 18.5.0-beta.2 - 2025-08-06
* [#2383](https://github.com/stripe/stripe-node/pull/2383) Bring back GA invoice payments APIs that were missing in the public preview SDKs
  * Add support for new resource `InvoicePayment`
  * Add support for `list` and `retrieve` methods on resource `InvoicePayment`

## 18.5.0-beta.1 - 2025-07-30
This release changes the pinned API version to `2025-07-30.preview`.

* [#2363](https://github.com/stripe/stripe-node/pull/2363) Update generated code for beta
  * Add support for new resources `Billing.MeterUsageRow`, `Billing.MeterUsage`, and `Terminal.OnboardingLink`
  * Add support for `retrieve` method on resource `Billing.MeterUsage`
  * Add support for `create` method on resource `Terminal.OnboardingLink`
  * Add support for `monthly_payout_days` and `weekly_payout_days` on `BalanceSettingUpdateParams.payouts.schedule` and `BalanceSettings.payouts.schedule`
  * Remove support for `monthly_anchor` and `weekly_anchor` on `BalanceSettingUpdateParams.payouts.schedule` and `BalanceSettings.payouts.schedule`
  * Add support for `delay_days_override` on `BalanceSettingUpdateParams.settlement_timing`
  * Remove support for `delay_days` on `BalanceSettingUpdateParams.settlement_timing`
  * Add support for `update_discounts` on `Checkout.SessionCreateParams.permissions`
  * Add support for `discounts` and `subscription_data` on `Checkout.SessionUpdateParams`
  * Add support for `smart_disputes` on `Dispute`
  * Add support for `upi` on `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `QuotePreviewInvoice.payment_settings.payment_method_options`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
  * Add support for new value `upi` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
  * Add support for `transaction_id` on `PaymentAttemptRecord.payment_method_details.cashapp` and `PaymentRecord.payment_method_details.cashapp`
  * Add support for `amount_details` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentIncrementAuthorizationParams`, and `PaymentIntentUpdateParams`
  * Add support for `payment_details` on `PaymentIntentIncrementAuthorizationParams`
  * Add support for `storer` on `V2.Core.Account.identity.attestations.terms_of_service`, `V2.Core.AccountCreateParams.identity.attestations.terms_of_service`, and `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
  * Add support for `collection_options` on `V2.Core.AccountLink.use_case.account_onboarding`, `V2.Core.AccountLink.use_case.account_update`, `V2.Core.AccountLinkCreateParams.use_case.account_onboarding`, and `V2.Core.AccountLinkCreateParams.use_case.account_update`
  * Change type of `V2.Core.AccountLink.use_case.account_onboarding.configurations`, `V2.Core.AccountLink.use_case.account_update.configurations`, `V2.Core.AccountLinkCreateParams.use_case.account_onboarding.configurations`, and `V2.Core.AccountLinkCreateParams.use_case.account_update.configurations` from `literal('recipient')` to `enum('customer'|'merchant'|'recipient'|'storer')`
  * Add support for `bank_account_type` on `V2.MoneyManagement.PayoutMethod.bank_account`
  * Add support for thin event `V2CoreAccountLinkReturnedEvent`
  * Add support for thin event `V2MoneyManagementPayoutMethodUpdatedEvent` with related object `V2.MoneyManagement.PayoutMethod`
  * Remove support for thin event `V2CoreAccountLinkCompletedEvent`
  * Remove support for thin event `V2OffSessionPaymentRequiresCaptureEvent` with related object `V2.Payments.OffSessionPayment`

## 18.4.0-beta.2 - 2025-07-09
* [#2367](https://github.com/stripe/stripe-node/pull/2367) Pull in V2 FinancialAccount changes for June release
  * Add support for `close` and `create` methods on resource `V2.MoneyManagement.FinancialAccount`
  * Add support for new value `storer` on enums `V2.Core.Account.applied_configurations` and `V2.Core.AccountCloseParams.applied_configurations`
  * Add support for `storer` on `V2.Core.Account.configuration`, `V2.Core.AccountCreateParams.configuration`, and `V2.Core.AccountUpdateParams.configuration`
  * Add support for new values `financial_addresses.bank_accounts`, `holds_currencies.gbp`, `inbound_transfers.financial_accounts`, `outbound_payments.bank_accounts`, `outbound_payments.cards`, `outbound_payments.financial_accounts`, `outbound_transfers.bank_accounts`, and `outbound_transfers.financial_accounts` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].capability`
  * Add support for new value `storer` on enum `V2.Core.Account.requirements.entries[].impact.restricts_capabilities[].configuration`
  * Add support for `status_details` on `V2.MoneyManagement.FinancialAccount`
  * Add support for `status` on `V2.MoneyManagement.FinancialAccountListParams`
  * Add support for new value `configuration.storer` on enums `V2.Core.AccountCreateParams.include`, `V2.Core.AccountRetrieveParams.include`, and `V2.Core.AccountUpdateParams.include`
  * Add support for thin events `V2CoreAccountIncludingConfigurationStorerCapabilityStatusUpdatedEvent` and `V2CoreAccountIncludingConfigurationStorerUpdatedEvent` with related object `V2.Core.Account`
  * Add support for error types `AlreadyExistsError` and `NonZeroBalanceError`

## 18.4.0-beta.1 - 2025-07-01
This release changes the pinned API version to `2025-06-30.preview`.

* [#2344](https://github.com/stripe/stripe-node/pull/2344) Update generated code for beta
  * Change type of `Checkout.SessionCreateParams.subscription_data.billing_mode`, `InvoiceCreatePreviewParams.schedule_details.billing_mode`, `InvoiceCreatePreviewParams.subscription_details.billing_mode`, `Quote.subscription_data.billing_mode`, `QuoteCreateParams.subscription_data.billing_mode`, `SubscriptionCreateParams.billing_mode`, and `SubscriptionScheduleCreateParams.billing_mode` from `enum('classic'|'flexible')` to `billing_mode`
  * Add support for `submission_method` on `Dispute.evidence_details`
  * Add support for `on_demand` and `subscriptions` on `OrderCreateParams.payment.settings.payment_method_options.klarna` and `OrderUpdateParams.payment.settings.payment_method_options.klarna`
  * Change type of `Order.payment.settings.payment_method_options.klarna.setup_future_usage`, `OrderCreateParams.payment.settings.payment_method_options.klarna.setup_future_usage`, and `OrderUpdateParams.payment.settings.payment_method_options.klarna.setup_future_usage` from `literal('none')` to `enum('none'|'off_session'|'on_session')`
  * Add support for `crypto` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
  * Add support for new value `buut` on enums `PaymentAttemptRecord.payment_method_details.ideal.bank` and `PaymentRecord.payment_method_details.ideal.bank`
  * Add support for new value `BUUTNL2A` on enums `PaymentAttemptRecord.payment_method_details.ideal.bic` and `PaymentRecord.payment_method_details.ideal.bic`
  * Change type of `PaymentIntent.payment_method_options.gopay.setup_future_usage`, `PaymentIntentConfirmParams.payment_method_options.gopay.setup_future_usage`, `PaymentIntentCreateParams.payment_method_options.gopay.setup_future_usage`, and `PaymentIntentUpdateParams.payment_method_options.gopay.setup_future_usage` from `literal('none')` to `enum('none'|'off_session')`
  * Change `Quote.subscription_data.billing_mode`, `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, and `SubscriptionSchedule.billing_mode` to be required
  * Add support for new value `crypto` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Change type of `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, and `SubscriptionSchedule.billing_mode` from `enum('classic'|'flexible')` to `SubscriptionsResourceBillingMode`
  * Change type of `SubscriptionMigrateParams.billing_mode` from `literal('flexible')` to `billing_mode_migrate`
  * Remove support for `billing_mode_details` on `Subscription`
  * Add support for new value `xx` on enums `V2.Core.Account.configuration.customer.automatic_indirect_tax.location.country`, `V2.Core.Account.configuration.customer.shipping.address.country`, `V2.Core.Account.configuration.merchant.support.address.country`, `V2.Core.Account.identity.business_details.address.country`, `V2.Core.Account.identity.business_details.script_addresses.kana.country`, `V2.Core.Account.identity.business_details.script_addresses.kanji.country`, `V2.Core.Account.identity.country`, `V2.Core.Account.identity.individual.additional_addresses[].country`, `V2.Core.Account.identity.individual.address.country`, `V2.Core.Account.identity.individual.script_addresses.kana.country`, `V2.Core.Account.identity.individual.script_addresses.kanji.country`, `V2.Core.AccountCreateParams.configuration.customer.shipping.address.country`, `V2.Core.AccountCreateParams.configuration.merchant.support.address.country`, `V2.Core.AccountCreateParams.identity.business_details.address.country`, `V2.Core.AccountCreateParams.identity.business_details.script_addresses.kana.country`, `V2.Core.AccountCreateParams.identity.business_details.script_addresses.kanji.country`, `V2.Core.AccountCreateParams.identity.country`, `V2.Core.AccountCreateParams.identity.individual.additional_addresses[].country`, `V2.Core.AccountCreateParams.identity.individual.address.country`, `V2.Core.AccountCreateParams.identity.individual.script_addresses.kana.country`, `V2.Core.AccountCreateParams.identity.individual.script_addresses.kanji.country`, `V2.Core.AccountUpdateParams.configuration.customer.shipping.address.country`, `V2.Core.AccountUpdateParams.configuration.merchant.support.address.country`, `V2.Core.AccountUpdateParams.identity.business_details.address.country`, `V2.Core.AccountUpdateParams.identity.business_details.script_addresses.kana.country`, `V2.Core.AccountUpdateParams.identity.business_details.script_addresses.kanji.country`, `V2.Core.AccountUpdateParams.identity.country`, `V2.Core.AccountUpdateParams.identity.individual.additional_addresses[].country`, `V2.Core.AccountUpdateParams.identity.individual.address.country`, `V2.Core.AccountUpdateParams.identity.individual.script_addresses.kana.country`, `V2.Core.AccountUpdateParams.identity.individual.script_addresses.kanji.country`, `V2.Core.Person.additional_addresses[].country`, `V2.Core.Person.address.country`, `V2.Core.Person.script_addresses.kana.country`, `V2.Core.Person.script_addresses.kanji.country`, `V2.Core.PersonCreateParams.additional_addresses[].country`, `V2.Core.PersonCreateParams.address.country`, `V2.Core.PersonCreateParams.script_addresses.kana.country`, `V2.Core.PersonCreateParams.script_addresses.kanji.country`, `V2.Core.PersonUpdateParams.additional_addresses[].country`, `V2.Core.PersonUpdateParams.address.country`, `V2.Core.PersonUpdateParams.script_addresses.kana.country`, `V2.Core.PersonUpdateParams.script_addresses.kanji.country`, and `V2.MoneyManagement.FinancialAccount.country`
  * Add support for new value `unsupported_entity_type` on enums `V2.Core.Account.configuration.customer.capabilities.automatic_indirect_tax.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.ach_debit_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.acss_debit_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.affirm_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.afterpay_clearpay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.alma_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.amazon_pay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.au_becs_debit_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.bacs_debit_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.bancontact_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.blik_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.boleto_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.card_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.cartes_bancaires_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.cashapp_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.eps_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.fpx_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.gb_bank_transfer_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.grabpay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.ideal_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.jcb_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.jp_bank_transfer_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.kakao_pay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.klarna_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.konbini_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.kr_card_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.link_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.mobilepay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.multibanco_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.mx_bank_transfer_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.naver_pay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.oxxo_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.p24_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.pay_by_bank_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.payco_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.paynow_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.promptpay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.revolut_pay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.samsung_pay_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.sepa_bank_transfer_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.sepa_debit_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.stripe_balance.payouts.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.swish_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.twint_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.us_bank_transfer_payments.status_details[].code`, `V2.Core.Account.configuration.merchant.capabilities.zip_payments.status_details[].code`, `V2.Core.Account.configuration.recipient.capabilities.bank_accounts.local.status_details[].code`, `V2.Core.Account.configuration.recipient.capabilities.bank_accounts.wire.status_details[].code`, `V2.Core.Account.configuration.recipient.capabilities.cards.status_details[].code`, `V2.Core.Account.configuration.recipient.capabilities.stripe_balance.payouts.status_details[].code`, and `V2.Core.Account.configuration.recipient.capabilities.stripe_balance.stripe_transfers.status_details[].code`
  * Add support for `proof_of_address` on `V2.Core.Account.identity.business_details.documents`, `V2.Core.AccountCreateParams.identity.business_details.documents`, and `V2.Core.AccountUpdateParams.identity.business_details.documents`
  * Add support for new value `xx` on enums `V2.Core.Account.identity.individual.nationalities`, `V2.Core.AccountCreateParams.identity.individual.nationalities`, `V2.Core.AccountUpdateParams.identity.individual.nationalities`, `V2.Core.Person.nationalities`, `V2.Core.PersonCreateParams.nationalities`, and `V2.Core.PersonUpdateParams.nationalities`
  * Add support for `metadata` on `V2.MoneyManagement.FinancialAccount`
  * Remove support for `description` on `V2.MoneyManagement.FinancialAccount`
  * Add support for new value `pending` on enum `V2.MoneyManagement.FinancialAccount.status`
  * Remove support for `attempts` on `V2.Payments.OffSessionPayment`
  * Change type of `V2.Payments.OffSessionPayment.transfer_data.amount` from `integer` to `integer | null`
  * Add support for `from_account`, `outbound_payment`, and `outbound_transfer` on `V2.MoneyManagement.ReceivedCredit.balance_transfer`
  * Change type of `V2.MoneyManagement.ReceivedCredit.balance_transfer.type` from `literal('payout_v1')` to `enum('outbound_payment'|'outbound_transfer'|'payout_v1')`
  * Change type of `V2.MoneyManagement.ReceivedCredit.balance_transfer.payout_v1` from `string` to `string | null`
  * Change `V2.Payments.OffSessionPaymentCreateParams.transfer_data.amount` to be optional
  * Add support for error codes `recipient_feature_not_active`, `storer_capability_missing`, and `storer_capability_not_active` on `FeatureNotEnabledError`
  * Remove support for error code `outbound_payment_recipient_feature_not_active` on `FeatureNotEnabledError`
  * Add support for error code `insufficient_funds` on `InsufficientFundsError`
  * Remove support for error codes `outbound_payment_insufficient_funds` and `outbound_transfer_insufficient_funds` on `InsufficientFundsError`
  * Add support for error codes `recipient_amount_limit_exceeded` and `recipient_count_limit_exceeded` on `QuotaExceededError`
  * Remove support for error codes `outbound_payment_recipient_amount_limit_exceeded` and `outbound_payment_recipient_count_limit_exceeded` on `QuotaExceededError`
  * Add support for error code `recipient_email_does_not_exist` on `RecipientNotNotifiableError`
  * Remove support for error code `outbound_payment_recipient_email_does_not_exist` on `RecipientNotNotifiableError`

## 18.3.0-beta.2 - 2025-06-26
* [#2358](https://github.com/stripe/stripe-node/pull/2358) Pull in OffSessionPayment changes for the May release

## 18.3.0-beta.1 - 2025-05-29
This release changes the pinned API version to `2025-05-28.preview`.

* [#2324](https://github.com/stripe/stripe-node/pull/2324) Update generated code for beta
  ### Breaking changes
  * Remove support for deprecated previews
    * Remove support for resources `Billing.MeterErrorReport`, `GiftCards.Card`, and `GiftCards.Transaction`
    * Remove support for `create`, `list`, `retrieve`, `update`, and `validate` methods on resource `GiftCards.Card`
    * Remove support for `cancel`, `confirm`, `create`, `list`, `retrieve`, and `update` methods on resource `GiftCards.Transaction`
    * Remove support for `provisioning` on `ProductCreateParams` and `Product`
    * Remove support for snapshot event `BillingMeterErrorReportTriggeredEvent` with resource `Billing.MeterErrorReport`
    * Remove support for error codes `gift_card_balance_insufficient`, `gift_card_code_exists`, and `gift_card_inactive` on `QuotePreviewInvoice.last_finalization_error` and `StripeError`
  * Remove support for values `credits_attributed_to_debits` and `legacy_prorations` from enums `Checkout.SessionCreateParams.subscription_data.billing_mode`, `InvoiceCreatePreviewParams.schedule_details.billing_mode`, `InvoiceCreatePreviewParams.subscription_details.billing_mode`, `Quote.subscription_data.billing_mode`, `QuoteCreateParams.subscription_data.billing_mode`, `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, `SubscriptionCreateParams.billing_mode`, `SubscriptionSchedule.billing_mode`, and `SubscriptionScheduleCreateParams.billing_mode`
  * Change type of `Checkout.SessionUpdateParams.line_items[].quantity` from `emptyable(longInteger)` to `longInteger`
  * Change `CreditNote.post_payment_amount` to be required
  * Change `CreditNote.pre_payment_amount` to be required
  * Change type of `InvoiceCreatePreviewParams.subscription_details.cancel_at`, `SubscriptionCreateParams.cancel_at`, and `SubscriptionUpdateParams.cancel_at` from `DateTime` to `DateTime | enum('max_period_end'|'min_period_end')`
  * Remove support for `credits` on `OrderCreateParams`, `OrderUpdateParams`, and `Order`
  * Remove support for `amount_remaining` on `Order`
  * Remove support for `amount_credit` on `Order.total_details`
  * Change type of `PaymentAttemptRecord.metadata` and `PaymentRecord.metadata` from `map(string: string) | null` to `map(string: string)`
  * Change type of `PaymentRecordReportPaymentAttemptCanceledParams.metadata`, `PaymentRecordReportPaymentAttemptFailedParams.metadata`, `PaymentRecordReportPaymentAttemptGuaranteedParams.metadata`, `PaymentRecordReportPaymentAttemptParams.metadata`, and `PaymentRecordReportPaymentParams.metadata` from `map(string: string)` to `emptyable(map(string: string))`
  * Change type of `Privacy.RedactionJob.status` from `string` to `enum`
  * Change type of `Privacy.RedactionJob.validation_behavior` from `string` to `enum('error'|'fix')`
  * Change type of `Privacy.RedactionJobValidationError.code` from `string` to `enum`
  * Change type of `Privacy.RedactionJobValidationError.erroring_object` from `map(string: string)` to `RedactionResourceErroringObject`
  * Remove support for `status_details` and `status` on `Tax.Association`

  ### Other changes
  * Add support for `migrate` method on resource `Subscription`
  * Add support for `distance`, `pickup_location_name`, `return_location_name`, and `vehicle_identification_number` on `ChargeCaptureParams.payment_details.car_rental`, `ChargeUpdateParams.payment_details.car_rental`, `PaymentIntent.payment_details.car_rental`, `PaymentIntentCaptureParams.payment_details.car_rental`, `PaymentIntentConfirmParams.payment_details.car_rental`, `PaymentIntentCreateParams.payment_details.car_rental`, and `PaymentIntentUpdateParams.payment_details.car_rental`
  * Add support for `driver_identification_number` and `driver_tax_number` on `ChargeCaptureParams.payment_details.car_rental.drivers[]`, `ChargeUpdateParams.payment_details.car_rental.drivers[]`, `PaymentIntent.payment_details.car_rental.drivers[]`, `PaymentIntentCaptureParams.payment_details.car_rental.drivers[]`, `PaymentIntentConfirmParams.payment_details.car_rental.drivers[]`, `PaymentIntentCreateParams.payment_details.car_rental.drivers[]`, and `PaymentIntentUpdateParams.payment_details.car_rental.drivers[]`
  * Add support for new values `classic` and `flexible` on enums `Checkout.SessionCreateParams.subscription_data.billing_mode`, `InvoiceCreatePreviewParams.schedule_details.billing_mode`, `InvoiceCreatePreviewParams.subscription_details.billing_mode`, `Quote.subscription_data.billing_mode`, `QuoteCreateParams.subscription_data.billing_mode`, `QuotePreviewSubscriptionSchedule.billing_mode`, `Subscription.billing_mode`, `SubscriptionCreateParams.billing_mode`, `SubscriptionSchedule.billing_mode`, and `SubscriptionScheduleCreateParams.billing_mode`
  * Add support for `institution` on `FinancialConnections.Account`
  * Add support for `countries` on `FinancialConnections.Institution`
  * Add support for `location` and `reader` on `PaymentAttemptRecord.payment_method_details.affirm`, `PaymentAttemptRecord.payment_method_details.wechat_pay`, `PaymentRecord.payment_method_details.affirm`, and `PaymentRecord.payment_method_details.wechat_pay`
  * Add support for `hooks` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
  * Remove support for `async_workflows` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
  * Add support for `card_present` on `PaymentIntentAmountDetailsLineItem.payment_method_options`
  * Add support for `livemode` on `Privacy.RedactionJob`
  * Add support for `billing_thresholds` on `QuotePreviewSubscriptionSchedule.default_settings`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, and `QuotePreviewSubscriptionSchedule.phases[]`
  * Add support for `billing_mode_details` on `Subscription`
  * Add support for `tax_transaction_attempts` on `Tax.Association`
  * Add support for `confirm_config` on `Terminal.Reader.action.confirm_payment_intent` and `Terminal.ReaderConfirmPaymentIntentParams`
  * Add support for error code `forwarding_api_upstream_error` on `QuotePreviewInvoice.last_finalization_error`

## 18.2.0-beta.1 - 2025-04-30
This release changes the pinned API version to `2025-04-30.preview`.

* [#2307](https://github.com/stripe/stripe-node/pull/2307) Update generated code for beta
  This release changes the pinned API version to `2025-04-30.preview`.

  * Add support for `billing_mode` on `Checkout.SessionCreateParams.subscription_data`, `InvoiceCreatePreviewParams.schedule_details`, `InvoiceCreatePreviewParams.subscription_details`, `Quote.subscription_data`, `QuoteCreateParams.subscription_data`, `QuotePreviewSubscriptionSchedule`, `SubscriptionCreateParams`, `SubscriptionScheduleCreateParams`, `SubscriptionSchedule`, and `Subscription`
  * Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Order.tax_details.tax_ids[].type`, and `QuotePreviewInvoice.customer_tax_ids[].type`
  * Change `Checkout.Session.automatic_tax.provider`, `Invoice.automatic_tax.provider`, `Quote.automatic_tax.provider`, and `QuotePreviewInvoice.automatic_tax.provider` to be required
  * Add support for `account_number` on `ConfirmationToken.payment_method_preview.acss_debit` and `PaymentMethod.acss_debit`
  * Add support for new value `balance_settings.updated` on enum `Event.type`
  * Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `balance_settings.updated` on enums `WebhookEndpointUpdateParams.enabled_events`

## 18.1.0-beta.3 - 2025-04-17
* [#2302](https://github.com/stripe/stripe-node/pull/2302) Update generated code for beta
  * Add support for new resources `FxQuote` and `PaymentIntentAmountDetailsLineItem`
  * Add support for `create`, `list`, and `retrieve` methods on resource `FxQuote`
  * Remove support for `attach_payment_intent` method on resource `Invoice`
  * Add support for `registration_date` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
  * Add support for `customer_reference` and `order_reference` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntent.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
  * Add support for `tax_id` on `Charge.billing_details`, `ConfirmationToken.payment_method_preview.billing_details`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.billing_details`, `PaymentIntentConfirmParams.payment_method_data.billing_details`, `PaymentIntentCreateParams.payment_method_data.billing_details`, `PaymentIntentUpdateParams.payment_method_data.billing_details`, `PaymentMethod.billing_details`, `PaymentMethodCreateParams.billing_details`, `PaymentMethodUpdateParams.billing_details`, `SetupIntentConfirmParams.payment_method_data.billing_details`, `SetupIntentCreateParams.payment_method_data.billing_details`, `SetupIntentUpdateParams.payment_method_data.billing_details`, and `Treasury.OutboundPaymentCreateParams.destination_payment_method_data.billing_details`
  * Add support for `price_data` on `Checkout.SessionUpdateParams.line_items[]`
  * Change type of `Checkout.SessionUpdateParams.line_items[].quantity` from `longInteger` to `emptyable(longInteger)`
  * Add support for `script` on `CouponCreateParams` and `Coupon`
  * Add support for `type` on `Coupon`
  * Add support for new value `fx_quote.expired` on enum `Event.type`
  * Add support for new value `affirm` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
  * Add support for `fx_quote` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, `PaymentIntent`, `TransferCreateParams`, and `Transfer`
  * Add support for `discount_amount`, `line_items`, `shipping`, and `tax` on `PaymentIntent.amount_details`
  * Add support for `pix` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
  * Add support for `us_cfpb_data` on `Person` and `TokenCreateParams.person`
  * Add support for `pending_reason` on `Refund`
  * Add support for `aw`, `az`, `bd`, `bj`, `et`, `kg`, `la`, and `ph` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
  * Add support for new value `fx_quote.expired` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
  * Add support for snapshot event `FxQuoteExpiredEvent` with resource `FxQuote`

## 18.1.0-beta.2 - 2025-04-10
* [#2300](https://github.com/stripe/stripe-node/pull/2300) Handle external_resource field
  - Changes `external_account` field in `ExternalAccountsCreateParams` from a `string` to a union type.
* [#2298](https://github.com/stripe/stripe-node/pull/2298) Update generated code for beta
  ### Breaking changes
  * Change type of `V2.MoneyManagement.ReceivedDebit.status_transitions` from `an object` to `an object | null`
  * Remove support for values `bank_accounts.local_uk`, `bank_accounts.wire_uk`, `cards_uk`, and `crypto_wallets_v2` from enum `EventsV2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent.updated_capability`

  ### Additions
  * Add support for new resources `Privacy.RedactionJobRootObjects`, `Privacy.RedactionJobValidationError`, and `Privacy.RedactionJob`
  * Add support for `cancel`, `create`, `list`, `retrieve`, `run`, `update`, and `validate` methods on resource `RedactionJob`
  * Add support for `list` and `retrieve` methods on resource `RedactionJobValidationError`
  * Add support for `minority_owned_business_designation` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
  * Add support for new value `verification_legal_entity_structure_mismatch` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `AccountCapability.future_requirements.errors[].code`, `AccountCapability.requirements.errors[].code`, `AccountPerson.future_requirements.errors[].code`, `AccountPerson.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
  * Add support for `export_tax_transactions` and `payment_disputes` on `AccountSessionCreateParams.components`
  * Add support for new value `tax_id_prohibited` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `QuotePreviewInvoice.last_finalization_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Add support for new value `fixed_term_loan` on enum `Capital.FinancingOffer.type`
  * Add support for `wallet_options` on `Checkout.SessionCreateParams` and `Checkout.Session`
  * Add support for new values `privacy.redaction_job.canceled`, `privacy.redaction_job.created`, `privacy.redaction_job.ready`, `privacy.redaction_job.succeeded`, and `privacy.redaction_job.validation_error` on enum `Event.type`
  * Add support for `klarna` on `PaymentMethodDomain`
  * Change type of `Tax.CalculationLineItem.reference` from `string | null` to `string`
  * Add support for `in` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
  * Add support for new values `privacy.redaction_job.canceled`, `privacy.redaction_job.created`, `privacy.redaction_job.ready`, `privacy.redaction_job.succeeded`, and `privacy.redaction_job.validation_error` on enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`

## 18.1.0-beta.1 - 2025-04-02
This release changes the pinned API version to `2025-03-31.preview`.

* [#2288](https://github.com/stripe/stripe-node/pull/2288) Update generated code for beta
  This release changes the pinned API version to `2025-03-31.preview`

  ### Breaking Changes
  * Remove support for `amount_overpaid` on `InvoicePayment`
  * Remove support for values `out_of_band_payment` and `payment_record` from enum `InvoicePayment.payment.type`
  * Remove support for `interchange_fees`, `net_total`, `network_fees`, and `transaction_volume` on `Issuing.Settlement`
  * Remove support for `billing_thresholds` on `QuotePreviewSubscriptionSchedule.default_settings`, `QuotePreviewSubscriptionSchedule.phases[].items[]`, and `QuotePreviewSubscriptionSchedule.phases[]`
  * Remove support for `coupon` on `QuotePreviewSubscriptionSchedule.phases[]`
  * Remove support for `value` on `Terminal.Reader.action.collect_inputs.inputs[].selection.choices[]`, `Terminal.Reader.action.collect_inputs.inputs[].selection`, and `Terminal.ReaderCollectInputsParams.inputs[].selection.choices[]`
  * Change `Checkout.Session.permissions.update` to be optional
  * Change type of `InvoicePayment.is_default` from `boolean | null` to `boolean`
  * Change `Invoice.amount_overpaid` and `QuotePreviewInvoice.amount_overpaid` to be required
  * Change type of `PaymentAttemptRecord.payment_method_details.type` and `PaymentRecord.payment_method_details.type` from `literal('custom')` to `string`
  * Change type of `PaymentAttemptRecord.payment_record` from `string` to `string | null`
  * Change `PaymentAttemptRecord.payment_method_details.custom` and `PaymentRecord.payment_method_details.custom` to be optional
  * Change `PaymentRecordReportPaymentParams.payment_reference` to be optional
  * Change type of `PaymentRecord.latest_payment_attempt_record` from `string` to `string | null`

  ### Additions
  * Add support for new resources `BalanceSettings`
  * Add support for `retrieve` and `update` methods on resource `BalanceSettings`
  * Add support for `create`, `del`, `list`, `retrieve`, and `update` methods on a new `ExternalAccountService` class to access cards and bank accounts made available in the new path `v1/external_accounts`. Access this via `StripeClient.externalAccounts`
  * Add support for `stripe_balance_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `customer_account` on `Billing.CreditBalanceSummaryRetrieveParams`, `Billing.CreditBalanceSummary`, `Billing.CreditBalanceTransactionListParams`, `Billing.CreditGrantCreateParams`, `Billing.CreditGrantListParams`, `Billing.CreditGrant`, `BillingPortal.SessionCreateParams`, `BillingPortal.Session`, `Checkout.SessionCreateParams`, `Checkout.SessionListParams`, `Checkout.Session`, `ConfirmationToken.payment_method_preview`, `CreditNoteListParams`, `CreditNote`, `CustomerBalanceTransaction`, `CustomerCashBalanceTransaction`, `CustomerCashBalance`, `CustomerPaymentMethod`, `CustomerSessionCreateParams`, `CustomerSession`, `CustomerTaxId.owner`, `CustomerTaxId`, `Customer`, `Discount`, `FinancialConnections.Account.account_holder`, `FinancialConnections.AccountListParams.account_holder`, `FinancialConnections.Session.account_holder`, `FinancialConnections.SessionCreateParams.account_holder`, `InvoiceCreateParams`, `InvoiceCreatePreviewParams`, `InvoiceItemCreateParams`, `InvoiceItemListParams`, `InvoiceItem`, `InvoiceListParams`, `Invoice`, `PaymentIntentCreateParams`, `PaymentIntentListParams`, `PaymentIntentUpdateParams`, `PaymentIntent`, `PaymentMethodAttachParams`, `PaymentMethod`, `PromotionCodeCreateParams`, `PromotionCodeListParams`, `PromotionCode`, `QuoteCreateParams`, `QuoteListParams`, `QuotePreviewInvoice`, `QuotePreviewSubscriptionSchedule`, `QuoteUpdateParams`, `Quote`, `SetupAttempt`, `SetupIntentCreateParams`, `SetupIntentListParams`, `SetupIntentUpdateParams`, `SetupIntent`, `SubscriptionCreateParams`, `SubscriptionListParams`, `SubscriptionScheduleCreateParams`, `SubscriptionScheduleListParams`, `SubscriptionSchedule`, `Subscription`, `TaxId.owner`, `TaxIdCreateParams.owner`, `TaxIdListParams.owner`, and `TaxId`
  * Add support for `stripe_balance` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `CustomerPaymentMethod`, `PaymentAttemptRecord.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `PaymentRecord.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `update_line_items` and `update_shipping_details` on `Checkout.Session.permissions` and `Checkout.SessionCreateParams.permissions`
  * Add support for `provider` on `Checkout.Session.automatic_tax`, `Invoice.automatic_tax`, `Quote.automatic_tax`, and `QuotePreviewInvoice.automatic_tax`
  * Add support for `tax_calculation_reference` on `CreditNoteLineItem`, `CreditNotePreviewLines`, `InvoiceLineItem`, `LineItem`, `PaymentLinkLineItem`, `QuoteComputedUpfrontLineItems`, `QuoteLineItem`, and `SessionLineItem`
  * Add support for `payment_method_options` on `ConfirmationTokenCreateParams.testHelpers`
  * Add support for `installments` on `ConfirmationToken.payment_method_options.card`
  * Add support for `context` on `Event`
  * Add support for `related_customer_account` on `Identity.VerificationSession`, `identity.VerificationSessionCreateParams`, and `identity.VerificationSessionListParams`
  * Add support for `network_data` on `Issuing.DisputeSettlementDetail`
  * Add support for `interchange_fees_amount`, `net_total_amount`, `network_fees_amount`, `other_fees_amount`, `other_fees_count`, and `transaction_amount` on `Issuing.Settlement`
  * Add support for `reported_by` on `PaymentAttemptRecord`
  * Add support for `ach_credit_transfer`, `ach_debit`, `acss_debit`, `affirm`, `afterpay_clearpay`, `alipay`, `alma`, `amazon_pay`, `au_becs_debit`, `bacs_debit`, `bancontact`, `blik`, `boleto`, `card_present`, `card`, `cashapp`, `customer_balance`, `eps`, `fpx`, `giropay`, `gopay`, `grabpay`, `id_bank_transfer`, `ideal`, `interac_present`, `kakao_pay`, `klarna`, `konbini`, `kr_card`, `link`, `mb_way`, `mobilepay`, `multibanco`, `naver_pay`, `nz_bank_account`, `oxxo`, `p24`, `pay_by_bank`, `payco`, `paynow`, `paypal`, `payto`, `pix`, `promptpay`, `qris`, `rechnung`, `revolut_pay`, `samsung_pay`, `satispay`, `sepa_credit_transfer`, `sepa_debit`, `shopeepay`, `sofort`, `stripe_account`, `swish`, `twint`, `us_bank_account`, `wechat_pay`, `wechat`, and `zip` on `PaymentAttemptRecord.payment_method_details` and `PaymentRecord.payment_method_details`
  * Add support for `payout_method` on `PayoutCreateParams` and `Payout`
  * Add support for `confirmation_secret`, `parent`, and `total_taxes` on `QuotePreviewInvoice`
  * Add support for new values `forwarding_api_retryable_upstream_error`, `setup_intent_mobile_wallet_unsupported`, `v2_account_disconnection_unsupported`, and `v2_account_missing_configuration` on enum `QuotePreviewInvoice.last_finalization_error.code`
  * Add support for new values `klarna`, `nz_bank_account`, and `stripe_balance` on enum `QuotePreviewInvoice.payment_settings.payment_method_types`
  * Add support for `id` and `text` on `Terminal.Reader.action.collect_inputs.inputs[].selection.choices[]`, `Terminal.Reader.action.collect_inputs.inputs[].selection`, and `Terminal.ReaderCollectInputsParams.inputs[].selection.choices[]`

  #### New APIs for Money CardManagement

  * Add support for new resources `V2.FinancialAddressCreditSimulation`, `V2.FinancialAddressGeneratedMicrodeposits`, `V2.MoneyManagement.Adjustment`, `V2.MoneyManagement.FinancialAccount`, `V2.MoneyManagement.FinancialAddress`, `V2.MoneyManagement.InboundTransfer`, `V2.MoneyManagement.OutboundPaymentQuote`, `V2.MoneyManagement.OutboundPayment`, `V2.MoneyManagement.OutboundSetupIntent`, `V2.MoneyManagement.OutboundTransfer`, `V2.MoneyManagement.PayoutMethod`, `V2.MoneyManagement.PayoutMethodsBankAccountSpec`, `V2.MoneyManagement.ReceivedCredit`, `V2.MoneyManagement.ReceivedDebit`, `V2.MoneyManagement.TransactionEntry`, and `V2.MoneyManagement.Transaction`
  * Add support for `create` method on resource `V2.MoneyManagement.OutboundPaymentQuote`
  * Add support for `list` and `retrieve` methods on resources `V2.MoneyManagement.Adjustment`, `V2.MoneyManagement.FinancialAccount`, `V2.MoneyManagement.ReceivedCredit`, `V2.MoneyManagement.ReceivedDebit`, `V2.MoneyManagement.TransactionEntry`, and `V2.MoneyManagement.Transaction`
  * Add support for `create`, `list`, and `retrieve` methods on resources `V2.MoneyManagement.FinancialAddress` and `V2.MoneyManagement.InboundTransfer`
  * Add support for `cancel`, `create`, `list`, and `retrieve` methods on resources `V2.MoneyManagement.OutboundPayment` and `V2.MoneyManagement.OutboundTransfer`
  * Add support for `archive`, `list`, `retrieve`, and `unarchive` methods on resource `V2.MoneyManagement.PayoutMethod`
  * Add support for `cancel`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.MoneyManagement.OutboundSetupIntent`
  * Add support for `retrieve` method on resource `V2.MoneyManagement.PayoutMethodsBankAccountSpec`
  * Add support for new values `account_number`, `fedwire_routing_number`, and `routing_number` on enum `invalid_payment_method.invalid_param`
  * Add support for new thin event `V2MoneyManagementFinancialAccountCreatedEvent` with related object `V2.MoneyManagement.FinancialAccount`
  * Add support for new thin events `V2MoneyManagementFinancialAddressActivatedEvent` and `V2MoneyManagementFinancialAddressFailedEvent` with related object `V2.MoneyManagement.FinancialAddress`
  * Add support for new thin events `V2MoneyManagementInboundTransferAvailableEvent`, `V2MoneyManagementInboundTransferBankDebitFailedEvent`, `V2MoneyManagementInboundTransferBankDebitProcessingEvent`, `V2MoneyManagementInboundTransferBankDebitQueuedEvent`, `V2MoneyManagementInboundTransferBankDebitReturnedEvent`, and `V2MoneyManagementInboundTransferBankDebitSucceededEvent` with related object `V2.MoneyManagement.InboundTransfer`
  * Add support for new thin events `V2MoneyManagementOutboundPaymentCanceledEvent`, `V2MoneyManagementOutboundPaymentCreatedEvent`, `V2MoneyManagementOutboundPaymentFailedEvent`, `V2MoneyManagementOutboundPaymentPostedEvent`, and `V2MoneyManagementOutboundPaymentReturnedEvent` with related object `V2.MoneyManagement.OutboundPayment`
  * Add support for new thin events `V2MoneyManagementOutboundTransferCanceledEvent`, `V2MoneyManagementOutboundTransferCreatedEvent`, `V2MoneyManagementOutboundTransferFailedEvent`, `V2MoneyManagementOutboundTransferPostedEvent`, and `V2MoneyManagementOutboundTransferReturnedEvent` with related object `V2.MoneyManagement.OutboundTransfer`
  * Add support for new thin events `V2MoneyManagementReceivedCreditAvailableEvent`, `V2MoneyManagementReceivedCreditFailedEvent`, `V2MoneyManagementReceivedCreditReturnedEvent`, and `V2MoneyManagementReceivedCreditSucceededEvent` with related object `V2.MoneyManagement.ReceivedCredit`
  * Add support for new thin events `V2MoneyManagementReceivedDebitCanceledEvent`, `V2MoneyManagementReceivedDebitFailedEvent`, `V2MoneyManagementReceivedDebitPendingEvent`, `V2MoneyManagementReceivedDebitSucceededEvent`, and `V2MoneyManagementReceivedDebitUpdatedEvent` with related object `V2.MoneyManagement.ReceivedDebit`
  * Add support for new error types `AlreadyCanceledError`, `BlockedByStripeError`, `ControlledByDashboardError`, `FeatureNotEnabledError`, `FinancialAccountNotOpenError`, `InsufficientFundsError`, `InvalidPayoutMethodError`, `NotCancelableError`, and `RecipientNotNotifiableError`


  #### New APIs for Accounts v2 in private preview
  See [SaaS platform payments with subscription billing using Accounts v2](https://docs.stripe.com/connect/accounts-v2/saas-platform-payments-billing)

  * Add support for new resources `V2.Core.AccountLink`, `V2.Core.Account`, `V2.Core.Person`, `V2.Core.Vault.GbBankAccount`, `V2.Core.Vault.UsBankAccount`
  * Add support for `close`, `create`, `list`, `retrieve`, and `update` methods on resource `V2.Core.Account`
  * Add support for `create` method on resource `V2.Core.AccountLink`
  * Add support for `acknowledge_confirmation_of_payee`, `archive`, `create`, `initiate_confirmation_of_payee`, and `retrieve` methods on resource `V2.Core.Vault.GbBankAccount`
  * Add support for `archive`, `create`, `retrieve`, and `update` methods on resource `V2.Core.Vault.UsBankAccount`
  * Add support for new thin events `V2CoreAccountIncludingConfigurationCustomerCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationCustomerUpdatedEvent`, `V2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationMerchantUpdatedEvent`, `V2CoreAccountIncludingConfigurationRecipientCapabilityStatusUpdatedEvent`, `V2CoreAccountIncludingConfigurationRecipientUpdatedEvent`, `V2CoreAccountIncludingIdentityUpdatedEvent`, and `V2CoreAccountIncludingRequirementsUpdatedEvent`
  * Add support for new thin event `V2CoreAccountLinkCompletedEvent` with related object `V2.Core.AccountLink`
  * Add support for new thin events `V2CoreAccountPersonCreatedEvent`, `V2CoreAccountPersonDeletedEvent`, and `V2CoreAccountPersonUpdatedEvent` with related object `V2.Core.Person`

  ### Changes
  * Change `Billing.CreditBalanceSummaryRetrieveParams.customer`, `Billing.CreditBalanceTransactionListParams.customer`, `Billing.CreditGrantCreateParams.customer`, `BillingPortal.SessionCreateParams.customer`, `CustomerSessionCreateParams.customer`, `InvoiceItemCreateParams.customer`, `PaymentMethodAttachParams.customer`, and `SubscriptionCreateParams.customer` to be optional
  * Change `CreditNote.refunds` to be required
  * Change type of `PaymentAttemptRecord.payment_method_details.custom` and `PaymentRecord.payment_method_details.custom` from `PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails | null` to `PaymentsPrimitivesPaymentRecordsResourcePaymentMethodCustomDetails`
  * Change `OrderCreateParams.payment.settings.payment_method_options.wechat_pay.client` and `OrderUpdateParams.payment.settings.payment_method_options.wechat_pay.client` to be optional

## 17.8.0-beta.1 - 2025-03-18
This release changes the pinned API version to `2025-02-24.acacia`.

* [#2271](https://github.com/stripe/stripe-node/pull/2271) Beta SDK updates between Open API versions 1473 and 1505
  * Add support for `succeed_input_collection` and `timeout_input_collection` test helper methods on resource `Terminal.Reader`
  * Change type of `Account.risk_controls.rejected_reason` from enum to enum | null
  * Change `Checkout.Session.collected_information.shipping_details` and `Checkout.Session.collected_information` to be required
  * Add support for `target_date` on `Order.payment.settings.payment_method_options.acss_debit`, `Order.payment.settings.payment_method_options.sepa_debit`, `OrderCreateParams.payment.settings.payment_method_options.acss_debit`, `OrderCreateParams.payment.settings.payment_method_options.sepa_debit`, `OrderUpdateParams.payment.settings.payment_method_options.acss_debit`, and `OrderUpdateParams.payment.settings.payment_method_options.sepa_debit`

## 17.7.0-beta.1 - 2025-02-07
* [#2254](https://github.com/stripe/stripe-node/pull/2254) Update generated code for beta
  * Add support for `rejected_reason` on `Account.risk_controls`
  * Add support for `product_tax_code_selector` on `AccountSessionCreateParams.components`
  * Add support for `prices` on `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope`, `Billing.CreditGrant.applicability_config.scope`, and `Billing.CreditGrantCreateParams.applicability_config.scope`
  * Change `Billing.CreditGrant.applicability_config.scope.price_type`, `Checkout.Session.collected_information.business_name`, `Checkout.Session.collected_information.email`, `Checkout.Session.collected_information.phone`, `Checkout.Session.collected_information.shipping_details`, and `Checkout.Session.collected_information.tax_ids` to be optional
  * Add support for `brand_product` on `Charge.payment_method_details.amazon_pay.funding.card` and `Charge.payment_method_details.revolut_pay.funding.card`
  * Add support for `restrictions` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
  * Change `Checkout.Session.discounts` to be required
  * Change type of `TokenCreateParams.person.political_exposure` from `string` to `enum('existing'|'none')`

## 17.6.0-beta.3 - 2025-01-23
* [#2253](https://github.com/stripe/stripe-node/pull/2253) Update generated code for beta
  * Change `Refund.destination_details.blik.network_decline_code` and `Refund.destination_details.swish.network_decline_code` to be required
  * Remove support for `stripe_account` on `Terminal.Reader.action.collect_payment_method`, `Terminal.Reader.action.confirm_payment_intent`, `Terminal.Reader.action.process_payment_intent`, and `Terminal.Reader.action.refund_payment`

## 17.6.0-beta.2 - 2025-01-17
This release changes the pinned API version to `2025-01-27.acacia`.

* [#2247](https://github.com/stripe/stripe-node/pull/2247) Update generated code for beta
  * Add support for `pay_by_bank_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `directorship_declaration` on `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
  * Add support for `proof_of_ultimate_beneficial_ownership` on `AccountCreateParams.documents` and `AccountUpdateParams.documents`
  * Add support for `tax_threshold_monitoring` on `AccountSessionCreateParams.components`
  * Add support for `financial_account_transactions`, `financial_account`, `issuing_card`, and `issuing_cards_list` on `AccountSession.components`
  * Change `Billing.CreditBalanceTransaction.credit.credits_application_invoice_voided` to be required
  * Add support for new value `always_invoice` on enums `BillingPortal.Configuration.features.subscription_cancel.proration_behavior`, `BillingPortal.ConfigurationCreateParams.features.subscription_cancel.proration_behavior`, and `BillingPortal.ConfigurationUpdateParams.features.subscription_cancel.proration_behavior`
  * Add support for `pay_by_bank` on `Charge.payment_method_details`, `Checkout.SessionCreateParams.payment_method_options`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `pay_by_bank` on enum `Checkout.SessionCreateParams.payment_method_types[]`
  * Add support for new value `SD` on enums `Checkout.Session.shipping_address_collection.allowed_countries[]`, `Checkout.SessionCreateParams.shipping_address_collection.allowed_countries[]`, `PaymentLink.shipping_address_collection.allowed_countries[]`, `PaymentLinkCreateParams.shipping_address_collection.allowed_countries[]`, and `PaymentLinkUpdateParams.shipping_address_collection.allowed_countries[]`
  * Add support for `discounts` on `Checkout.Session`
  * Add support for new value `pay_by_bank` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `pay_by_bank` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
  * Add support for new value `pay_by_bank` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
  * Add support for new value `pay_by_bank` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for `jpy` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
  * Add support for new value `2025-01-27.acacia` on enum `WebhookEndpointCreateParams.api_version`

## 17.6.0-beta.1 - 2025-01-09
* [#2239](https://github.com/stripe/stripe-node/pull/2239) Update generated code for beta
  * Add support for `close` method on resource `Treasury.FinancialAccount`
  * Add support for `ownership_exemption_reason` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
  * Add support for `directorship_declaration` on `Account.company`
  * Add support for `advice_code` on `Charge.outcome`, `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
  * Remove support for value `always_invoice` from enums `BillingPortal.Configuration.features.subscription_cancel.proration_behavior`, `BillingPortal.ConfigurationCreateParams.features.subscription_cancel.proration_behavior`, and `BillingPortal.ConfigurationUpdateParams.features.subscription_cancel.proration_behavior`
  * Add support for `brand_product` on `Card`, `Source.card_present`, `Source.card`, and `Source.three_d_secure`
  * Change `Card.regulated_status`, `Charge.payment_method_details.card.network_transaction_id`, `Charge.payment_method_details.card.regulated_status`, `ConfirmationToken.payment_method_preview.card.regulated_status`, `CreditNote.pretax_credit_amounts`, `Invoice.total_pretax_credit_amounts`, `Issuing.Authorization.merchant_data.tax_id`, `Issuing.Transaction.merchant_data.tax_id`, and `PaymentMethod.card.regulated_status` to be required
  * Add support for `country` on `Charge.payment_method_details.paypal`, `ConfirmationToken.payment_method_preview.paypal`, and `PaymentMethod.paypal`
  * Add support for new value `al_tin` on enums `Checkout.Session.collected_information.tax_ids[].type` and `Order.tax_details.tax_ids[].type`
  * Add support for new value `al_tin` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for `phone_number_collection` on `PaymentLinkUpdateParams`
  * Add support for `nickname` on `Treasury.FinancialAccountCreateParams`, `Treasury.FinancialAccountUpdateParams`, and `Treasury.FinancialAccount`
  * Add support for `forwarding_settings` on `Treasury.FinancialAccountUpdateParams`
  * Add support for `is_default` on `Treasury.FinancialAccount`
  * Add support for `destination_payment_method_data` on `Treasury.OutboundTransferCreateParams`
  * Add support for `financial_account` on `Treasury.OutboundTransfer.destination_payment_method_details`
  * Change type of `Treasury.OutboundTransfer.destination_payment_method_details.type` from `literal('us_bank_account')` to `enum('financial_account'|'us_bank_account')`
  * Add support for new value `outbound_transfer` on enums `Treasury.ReceivedCredit.linked_flows.source_flow_details.type` and `Treasury.ReceivedCreditListParams.linked_flows.source_flow_type`
  * Add support for `outbound_transfer` on `Treasury.ReceivedCredit.linked_flows.source_flow_details`

## 17.5.0-beta.3 - 2024-12-12
This release changes the pinned API version to `2024-12-18.acacia`.

* [#2235](https://github.com/stripe/stripe-node/pull/2235) Update generated code for beta
  * Change `Account.business_profile.annual_revenue` and `Account.business_profile.estimated_worker_count` to be optional
  * Add support for `allow_redisplay` on `Card` and `Source`
  * Add support for new values `am_tin`, `ao_tin`, `ba_tin`, `bb_tin`, `bs_tin`, `cd_nif`, `gn_nif`, `kh_tin`, `me_pib`, `mk_vat`, `mr_nif`, `np_pan`, `sn_ninea`, `sr_fin`, `tj_tin`, `ug_tin`, `zm_tin`, and `zw_tin` on enums `Checkout.Session.collected_information.tax_ids[].type` and `Order.tax_details.tax_ids[].type`
  * Add support for new value `network_fallback` on enum `Issuing.Authorization.request_history[].reason`
  * Add support for new values `am_tin`, `ao_tin`, `ba_tin`, `bb_tin`, `bs_tin`, `cd_nif`, `gn_nif`, `kh_tin`, `me_pib`, `mk_vat`, `mr_nif`, `np_pan`, `sn_ninea`, `sr_fin`, `tj_tin`, `ug_tin`, `zm_tin`, and `zw_tin` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Remove support for `amount_refunded` on `PaymentRecord`
  * Add support for `account` on `Terminal.Reader.action.collect_payment_method`, `Terminal.Reader.action.confirm_payment_intent`, `Terminal.Reader.action.process_payment_intent`, and `Terminal.Reader.action.refund_payment`

## 17.5.0-beta.2 - 2024-12-05
* [#2232](https://github.com/stripe/stripe-node/pull/2232) Update generated code for beta
  * Add support for `automatic_indirect_tax` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for new values `payout_minimum_balance_hold` and `payout_minimum_balance_release` on enum `BalanceTransaction.type`
  * Add support for `reference_prefix` on `Checkout.Session.payment_method_options.bacs_debit.mandate_options`, `Checkout.Session.payment_method_options.sepa_debit.mandate_options`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit.mandate_options`, `Checkout.SessionCreateParams.payment_method_options.sepa_debit.mandate_options`, `Order.payment.settings.payment_method_options.sepa_debit.mandate_options`, `OrderCreateParams.payment.settings.payment_method_options.sepa_debit.mandate_options`, `OrderUpdateParams.payment.settings.payment_method_options.sepa_debit.mandate_options`, `PaymentIntent.payment_method_options.bacs_debit.mandate_options`, `PaymentIntent.payment_method_options.sepa_debit.mandate_options`, `PaymentIntentConfirmParams.payment_method_options.bacs_debit.mandate_options`, `PaymentIntentConfirmParams.payment_method_options.sepa_debit.mandate_options`, `PaymentIntentCreateParams.payment_method_options.bacs_debit.mandate_options`, `PaymentIntentCreateParams.payment_method_options.sepa_debit.mandate_options`, `PaymentIntentUpdateParams.payment_method_options.bacs_debit.mandate_options`, `PaymentIntentUpdateParams.payment_method_options.sepa_debit.mandate_options`, `SetupIntent.payment_method_options.bacs_debit.mandate_options`, `SetupIntent.payment_method_options.sepa_debit.mandate_options`, `SetupIntentConfirmParams.payment_method_options.bacs_debit.mandate_options`, `SetupIntentConfirmParams.payment_method_options.sepa_debit.mandate_options`, `SetupIntentCreateParams.payment_method_options.bacs_debit.mandate_options`, `SetupIntentCreateParams.payment_method_options.sepa_debit.mandate_options`, `SetupIntentUpdateParams.payment_method_options.bacs_debit.mandate_options`, and `SetupIntentUpdateParams.payment_method_options.sepa_debit.mandate_options`
  * Add support for `disabled_reason` on `Invoice.automatic_tax`, `Subscription.automatic_tax`, `SubscriptionSchedule.default_settings.automatic_tax`, and `SubscriptionSchedule.phases[].automatic_tax`
  * Change `Issuing.Authorization.verified_by_fraud_challenge` to be required
  * Add support for `trial_period_days` on `PaymentLinkUpdateParams.subscription_data`

## 17.5.0-beta.1 - 2024-11-21
* [#2229](https://github.com/stripe/stripe-node/pull/2229) Update generated code for beta
  * Add support for `network_advice_code` and `network_decline_code` on `Charge.outcome`, `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
  * Change `BillingPortal.Configuration.features.subscription_update.schedule_at_period_end` and `LineItem.description` to be required
  * Add support for `funding` on `Charge.payment_method_details.amazon_pay` and `Charge.payment_method_details.revolut_pay`
  * Add support for `amount_requested` and `partial_authorization` on `Charge.payment_method_details.card`
  * Add support for `metadata` on `Checkout.SessionCreateParams.line_items[]` and `LineItem`
  * Add support for `line_items` on `Checkout.Session.permissions.update`, `Checkout.SessionCreateParams.permissions.update`, and `Checkout.SessionUpdateParams`
  * Add support for new value `invoice.overpaid` on enum `Event.type`
  * Add support for `adjustable_quantity` and `display` on `LineItem`
  * Change type of `LineItem.description` from `string` to `string | null`
  * Add support for `request_partial_authorization` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`
  * Add support for `payment_method_options` on `PaymentIntentIncrementAuthorizationParams`
  * Add support for new value `invoice.overpaid` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 17.4.0-beta.3 - 2024-11-14
This release changes the pinned API version to `2024-11-20.acacia`.

* [#2225](https://github.com/stripe/stripe-node/pull/2225) Update generated code for beta
  * Add support for `respond` test helper method on resource `Issuing.Authorization`
  * Add support for `fraud_challenges` and `verified_by_fraud_challenge` on `Issuing.Authorization`
* [#2226](https://github.com/stripe/stripe-node/pull/2226) Update generated code for beta
  * Add support for `account_holder_address` and `bank_address` on `FundingInstructions.bank_transfer.financial_addresses[].iban`, `FundingInstructions.bank_transfer.financial_addresses[].sort_code`, `FundingInstructions.bank_transfer.financial_addresses[].spei`, `FundingInstructions.bank_transfer.financial_addresses[].zengin`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].iban`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].sort_code`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].spei`, and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].zengin`
  * Add support for `account_holder_name` on `FundingInstructions.bank_transfer.financial_addresses[].spei` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].spei`
  * Add support for new value `subscribe` on enum `PaymentLinkUpdateParams.submit_type`

## 17.4.0-beta.2 - 2024-11-07
* [#2219](https://github.com/stripe/stripe-node/pull/2219) Update generated code for beta
  * Add support for new resources `Issuing.FraudLiabilityDebit`, `PaymentAttemptRecord`, and `PaymentRecord`
  * Add support for `list` and `retrieve` methods on resources `FraudLiabilityDebit` and `PaymentAttemptRecord`
  * Add support for `report_payment_attempt_canceled`, `report_payment_attempt_failed`, `report_payment_attempt_guaranteed`, `report_payment_attempt`, `report_payment`, and `retrieve` methods on resource `PaymentRecord`
  * Change type of `Account.future_requirements.disabled_reason` and `Account.requirements.disabled_reason` from `string` to `enum`
  * Remove support for `money_movement` on `AccountSessionCreateParams.components.financial_account.features`
  * Add support for `card_management`, `card_spend_dispute_management`, `cardholder_management`, and `spend_control_management` on `AccountSessionCreateParams.components.issuing_card.features`
  * Add support for `disable_stripe_user_authentication` on `AccountSessionCreateParams.components.issuing_cards_list.features`
  * Change `AccountSession.components.account_management.features.disable_stripe_user_authentication`, `AccountSession.components.account_onboarding.features.disable_stripe_user_authentication`, `AccountSession.components.balances.features.disable_stripe_user_authentication`, `AccountSession.components.notification_banner.features.disable_stripe_user_authentication`, and `AccountSession.components.payouts.features.disable_stripe_user_authentication` to be required
  * Add support for `adaptive_pricing` on `Checkout.SessionCreateParams` and `Checkout.Session`
  * Add support for `mandate_options` on `Checkout.Session.payment_method_options.bacs_debit`, `Checkout.Session.payment_method_options.sepa_debit`, `Checkout.SessionCreateParams.payment_method_options.bacs_debit`, and `Checkout.SessionCreateParams.payment_method_options.sepa_debit`
  * Add support for `request_decremental_authorization`, `request_extended_authorization`, `request_incremental_authorization`, `request_multicapture`, and `request_overcapture` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
  * Add support for `capture_method` on `Checkout.SessionCreateParams.payment_method_options.kakao_pay`, `Checkout.SessionCreateParams.payment_method_options.kr_card`, `Checkout.SessionCreateParams.payment_method_options.naver_pay`, `Checkout.SessionCreateParams.payment_method_options.payco`, and `Checkout.SessionCreateParams.payment_method_options.samsung_pay`
  * Add support for new value `li_vat` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
  * Add support for new value `li_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Add support for new values `invoice.payment_attempt_required` and `issuing_fraud_liability_debit.created` on enum `Event.type`
  * Add support for `account_holder_address`, `account_holder_name`, `account_type`, and `bank_address` on `FundingInstructions.bank_transfer.financial_addresses[].aba`, `FundingInstructions.bank_transfer.financial_addresses[].swift`, `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].aba`, and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].swift`
  * Add support for new value `custom` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Add support for new value `service_tax` on enums `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
  * Add support for `payment_record_data` and `payment_record` on `InvoiceAttachPaymentParams`
  * Remove support for `out_of_band_payment` on `InvoiceAttachPaymentParams`
  * Add support for `amount_overpaid` on `Invoice`
  * Add support for `merchant_amount` and `merchant_currency` on `Issuing.AuthorizationCreateParams.testHelpers`
  * Change `Issuing.AuthorizationCreateParams.testHelpers.amount` to be optional
  * Add support for new value `link` on enums `PaymentIntent.payment_method_options.card.network`, `PaymentIntentConfirmParams.payment_method_options.card.network`, `PaymentIntentCreateParams.payment_method_options.card.network`, `PaymentIntentUpdateParams.payment_method_options.card.network`, `SetupIntent.payment_method_options.card.network`, `SetupIntentConfirmParams.payment_method_options.card.network`, `SetupIntentCreateParams.payment_method_options.card.network`, `SetupIntentUpdateParams.payment_method_options.card.network`, `Subscription.payment_settings.payment_method_options.card.network`, `SubscriptionCreateParams.payment_settings.payment_method_options.card.network`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.card.network`
  * Add support for `submit_type` on `PaymentLinkUpdateParams`
  * Change type of `Treasury.InboundTransfer.origin_payment_method` from `string` to `string | null`
  * Add support for new values `invoice.payment_attempt_required` and `issuing_fraud_liability_debit.created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 17.4.0-beta.1 - 2024-10-29
This release changes the pinned API version to `2024-10-28.acacia`.

* [#2216](https://github.com/stripe/stripe-node/pull/2216) Update generated code for beta
  * Add support for `trigger_action` method on resource `PaymentIntent`
  * Add support for `id_bank_transfer_payments_bca` and `id_bank_transfer_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `bank_bca_onboarding` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
  * Add support for `send_money` on `AccountSessionCreateParams.components.recipients.features`
  * Remove support for value `payout_statement_descriptor_profanity` from enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Add support for `id_bank_transfer` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `Invoice.payment_settings.payment_method_options`, `InvoiceCreateParams.payment_settings.payment_method_options`, `InvoiceUpdateParams.payment_settings.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `Refund.destination_details`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, `SetupIntentUpdateParams.payment_method_data`, `Subscription.payment_settings.payment_method_options`, `SubscriptionCreateParams.payment_settings.payment_method_options`, and `SubscriptionUpdateParams.payment_settings.payment_method_options`
  * Change `Dispute.enhanced_eligibility_types`, `Dispute.evidence.enhanced_evidence`, and `Dispute.evidence_details.enhanced_eligibility` to be required
  * Add support for `gopay`, `qris`, and `shopeepay` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`

## 17.3.0-beta.1 - 2024-10-18
* [#2206](https://github.com/stripe/stripe-node/pull/2206) Update generated code for beta
  * Add support for `alma_payments`, `gopay_payments`, `kakao_pay_payments`, `kr_card_payments`, `naver_pay_payments`, `payco_payments`, `qris_payments`, `samsung_pay_payments`, `shopeepay_payments`, `treasury_evolve`, `treasury_fifth_third`, and `treasury_goldman_sachs` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `schedule_at_period_end` on `BillingPortal.Configuration.features.subscription_update`, `BillingPortal.ConfigurationCreateParams.features.subscription_update`, and `BillingPortal.ConfigurationUpdateParams.features.subscription_update`
  * Change `BillingPortal.ConfigurationCreateParams.business_profile` to be optional
  * Add support for `alma` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `Refund.destination_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `gopay`, `qris`, and `shopeepay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `Checkout.SessionCreateParams.payment_method_types[]`, `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
  * Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
  * Add support for new value `auto` on enum `CustomerUpdateParams.tax.validate_location`
  * Add support for `metadata` on `Forwarding.RequestCreateParams`
  * Add support for new values `jp_credit_transfer`, `kakao_pay`, `kr_card`, `naver_pay`, and `payco` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
  * Remove support for value `expired` from enums `Issuing.Authorization.status` and `Issuing.AuthorizationListParams.status`
  * Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for `amazon_pay` on `PaymentMethodDomain`
  * Change `Tax.Calculation.tax_breakdown[].tax_rate_details.flat_amount`, `Tax.Calculation.tax_breakdown[].tax_rate_details.rate_type`, `TaxRate.flat_amount`, and `TaxRate.rate_type` to be required
  * Add support for `external_reference` on `Tax.Form.payee` and `Tax.FormListParams.payee`
  * Change type of `Tax.Form.payee.type` and `Tax.FormListParams.payee.type` from `literal('account')` to `enum('account'|'external_reference')`
  * Add support for new values `au_serr`, `ca_mrdp`, `eu_dac7`, `gb_mrdp`, and `nz_mrdp` on enums `Tax.Form.type` and `Tax.FormListParams.type`
  * Add support for `au_serr`, `ca_mrdp`, `eu_dac7`, `gb_mrdp`, and `nz_mrdp` on `Tax.Form`
  * Add support for `pln` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
  * Add support for `bank` on `Treasury.FinancialAccountCreateParams.features.financial_addresses.aba`, `Treasury.FinancialAccountFeatures.financial_addresses.aba`, `Treasury.FinancialAccountUpdateFeaturesParams.financial_addresses.aba`, and `Treasury.FinancialAccountUpdateParams.features.financial_addresses.aba`

## 17.2.0-beta.2 - 2024-10-08
* [#2180](https://github.com/stripe/stripe-node/pull/2180) Update generated code for beta
  * Add support for `submit_card` test helper method on resource `Issuing.Card`
  * Add support for `groups` on `AccountCreateParams`, `AccountUpdateParams`, and `Account`
  * Add support for `disable_stripe_user_authentication` on `AccountSession.components.account_management.features`, `AccountSession.components.account_onboarding.features`, `AccountSession.components.balances.features`, `AccountSession.components.notification_banner.features`, `AccountSession.components.payouts.features`, `AccountSessionCreateParams.components.account_management.features`, `AccountSessionCreateParams.components.account_onboarding.features`, `AccountSessionCreateParams.components.balances.features`, `AccountSessionCreateParams.components.financial_account.features`, `AccountSessionCreateParams.components.notification_banner.features`, and `AccountSessionCreateParams.components.payouts.features`
  * Add support for `card_spend_dispute_management` and `spend_control_management` on `AccountSessionCreateParams.components.issuing_cards_list.features`
  * Add support for new value `payout_statement_descriptor_profanity` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Add support for `kakao_pay` and `kr_card` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `Mandate.payment_method_details`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupAttempt.payment_method_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `naver_pay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `payco` and `samsung_pay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new values `kakao_pay`, `kr_card`, `naver_pay`, `payco`, and `samsung_pay` on enums `Checkout.SessionCreateParams.payment_method_types[]`, `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
  * Add support for new values `by_tin`, `ma_vat`, `md_vat`, `tz_vat`, `uz_tin`, and `uz_vat` on enums `Checkout.Session.collected_information.tax_ids[].type`, `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Order.tax_details.tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
  * Add support for new values `kakao_pay`, `kr_card`, `naver_pay`, `payco`, and `samsung_pay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new values `kakao_pay`, `kr_card`, `naver_pay`, `payco`, and `samsung_pay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
  * Add support for new values `by_tin`, `ma_vat`, `md_vat`, `tz_vat`, `uz_tin`, and `uz_vat` on enums `CustomerCreateParams.tax_id_data[].type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `InvoiceUpcomingLinesParams.customer_details.tax_ids[].type`, `InvoiceUpcomingParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, `OrderUpdateParams.tax_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
  * Add support for new value `refund.failed` on enum `Event.type`
  * Add support for `metadata` on `Forwarding.Request`
  * Add support for new value `retail_delivery_fee` on enums `InvoiceAddLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `InvoiceUpdateLinesParams.lines[].tax_amounts[].tax_rate_data.tax_type`, `Tax.Calculation.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`, `Tax.CalculationLineItem.tax_breakdown[].tax_rate_details.tax_type`, `Tax.Transaction.shipping_cost.tax_breakdown[].tax_rate_details.tax_type`, `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
  * Add support for new value `expired` on enums `Issuing.Authorization.status` and `Issuing.AuthorizationListParams.status`
  * Add support for `line_items` on `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, and `PaymentIntentUpdateParams.payment_method_options.paypal`
  * Add support for `flat_amount` and `rate_type` on `Tax.Calculation.tax_breakdown[].tax_rate_details` and `TaxRate`
  * Add support for `by`, `cr`, `ec`, `ma`, `md`, `rs`, `ru`, `tz`, and `uz` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
  * Add support for new value `state_retail_delivery_fee` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
  * Add support for new value `refund.failed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 17.2.0-beta.1 - 2024-10-03
This release changes the pinned API version to `2024-09-30.acacia`.

* [#2200](https://github.com/stripe/stripe-node/pull/2200) Updates beta branch with changes in master
  * Add support for `reporting_chart` on `AccountSessionCreateParams.components`
  * Remove support for `from_schedule` on `Quote.subscription_data`
  * Add support for `allow_redisplay` on `Terminal.ReaderCollectPaymentMethodParams.collect_config`

## 16.13.0-beta.1 - 2024-09-18
* [#2178](https://github.com/stripe/stripe-node/pull/2178) Update generated code for beta
  * Remove support for resource `QuotePhase`
  * Remove support for `list_line_items` and `retrieve` methods on resource `QuotePhase`
  * Add support for `send_money` and `transfer_balance` on `AccountSessionCreateParams.components.financial_account.features`
  * Add support for new value `rechnung` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Change `Quote.subscription_data_overrides[].end_behavior` to be optional

## 16.12.0-beta.1 - 2024-09-13
* [#2170](https://github.com/stripe/stripe-node/pull/2170) Update generated code for beta
  * Add support for new resources `Issuing.DisputeSettlementDetail` and `Issuing.Settlement`
  * Add support for `list` and `retrieve` methods on resource `DisputeSettlementDetail`
  * Remove support for `list` method on resource `QuotePhase`
  * Add support for new value `rechnung` on enum `Checkout.SessionCreateParams.payment_method_types[]`
  * Add support for new values `issuing_dispute_settlement_detail.created`, `issuing_dispute_settlement_detail.updated`, `issuing_settlement.created`, and `issuing_settlement.updated` on enum `Event.type`
  * Add support for `settlement` on `Issuing.TransactionListParams` and `Issuing.Transaction`
  * Add support for new values `issuing_dispute_settlement_detail.created`, `issuing_dispute_settlement_detail.updated`, `issuing_settlement.created`, and `issuing_settlement.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 16.11.0-beta.1 - 2024-09-05
* [#2162](https://github.com/stripe/stripe-node/pull/2162) Update generated code for beta
  * Add support for new resources `Billing.MeterErrorReport` and `Terminal.ReaderCollectedData`
  * Add support for `retrieve` method on resource `ReaderCollectedData`
  * Add support for `recipients` on `AccountSessionCreateParams.components`
  * Add support for new value `terminal_reader_collected_data_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Add support for new value `mb_way` on enum `Checkout.SessionCreateParams.payment_method_types[]`
  * Add support for `business_name`, `email`, `phone`, and `tax_ids` on `Checkout.Session.collected_information`
  * Add support for new value `billing.meter_error_report.triggered` on enum `Event.type`
  * Add support for `regulatory_reporting_file` on `Issuing.CreditUnderwritingRecordCorrectParams`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams`, `Issuing.CreditUnderwritingRecordReportDecisionParams`, and `Issuing.CreditUnderwritingRecord`
  * Add support for new value `mb_way` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Remove support for `rechnung` on `PaymentMethodUpdateParams`
  * Add support for new value `billing.meter_error_report.triggered` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 16.9.0-beta.2 - 2024-08-22
* [#2159](https://github.com/stripe/stripe-node/pull/2159) Update generated code for beta
  * Add support for `mb_way_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `mb_way` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for new value `mb_way` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `mb_way` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
  * Add support for new value `mb_way` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
  * Remove support for values `accepted`, `partner_rejected`, and `submitted` from enum `Dispute.evidence_details.enhanced_eligibility.visa_compelling_evidence_3.status`
  * Add support for new value `hr_oib` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `hr_oib` on enum `Order.tax_details.tax_ids[].type`
  * Remove support for `phases` on `QuoteCreateParams` and `QuoteUpdateParams`
  * Remove support for `from_schedule` on `QuoteCreateParams.subscription_data`

## 16.9.0-beta.1 - 2024-08-15
* [#2157](https://github.com/stripe/stripe-node/pull/2157) Update generated code for beta
  * Add support for `capital_financing_application` and `capital_financing` on `AccountSessionCreateParams.components`
  * Add support for `permissions` on `Checkout.SessionCreateParams` and `Checkout.Session`
  * Add support for `collected_information` on `Checkout.SessionUpdateParams` and `Checkout.Session`
  * Add support for `shipping_options` on `Checkout.SessionUpdateParams`

## 16.8.0-beta.1 - 2024-08-12
* ⚠️ [#2148](https://github.com/stripe/stripe-node/pull/2148) Update generated code for beta
  * Add support for `capital_financing_application` and `capital_financing` on `AccountSession.components`
  * Add support for `payto` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
  * Add support for new value `payto` on enum `Checkout.SessionCreateParams.payment_method_types[]`
  * Add support for new value `custom` on enums `Checkout.Session.ui_mode` and `Checkout.SessionCreateParams.ui_mode`
  * ⚠️ Remove support for `risk_correlation_id` on `PaymentIntent.payment_method_options.rechnung`, `PaymentIntentConfirmParams.payment_method_options.rechnung`, `PaymentIntentCreateParams.payment_method_options.rechnung`, and `PaymentIntentUpdateParams.payment_method_options.rechnung`
  * Add support for new value `payto` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Change `QuoteLine.cancel_subscription_schedule` to be required

## 16.7.0-beta.1 - 2024-08-01
* [#2145](https://github.com/stripe/stripe-node/pull/2145) Update generated code for beta
  * Add support for `attach_payment` method on resource `Invoice`
  * Add support for `app_install` and `app_viewport` on `AccountSessionCreateParams.components`
  * Remove support for `partner_rejected_details` on `Dispute.evidence_details.enhanced_eligibility.visa_compelling_evidence_3`
  * Add support for `lines_invalid` on `Quote.status_details.stale.last_reason`
  * Add support for new value `lines_invalid` on enum `Quote.status_details.stale.last_reason.type`
  * Add support for `last_price_migration_error` on `SubscriptionSchedule` and `Subscription`

## 16.6.0-beta.1 - 2024-07-25
* [#2137](https://github.com/stripe/stripe-node/pull/2137) Update generated code for beta
  * Add support for new resources `Billing.AlertTriggered`, `Billing.Alert`, and `Tax.Association`
  * Add support for `activate`, `archive`, `create`, `deactivate`, `list`, and `retrieve` methods on resource `Alert`
  * Add support for `find` method on resource `Association`
  * Add support for `capital` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
  * Add support for new values `issuing.account_closed_for_not_providing_business_model_clarification`, `issuing.account_closed_for_not_providing_url_clarification`, and `issuing.account_closed_for_not_providing_use_case_clarification` on enum `AccountNotice.reason`
  * Add support for `async_workflows` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
  * Add support for `payto` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
  * Add support for `display_name` on `Treasury.FinancialAccountCreateParams`, `Treasury.FinancialAccountUpdateParams`, and `Treasury.FinancialAccount`

## 16.4.0-beta.1 - 2024-07-11
* [#2128](https://github.com/stripe/stripe-node/pull/2128) Update generated code for beta
  * Change `ConfirmationToken.payment_method_options` and `CustomerSession.components.payment_element` to be required
  * Add support for new value `not_qualified` on enum `Dispute.evidence_details.enhanced_eligibility.visa_compelling_evidence_3.status`

## 16.3.0-beta.1 - 2024-07-05
* ⚠️ [#2126](https://github.com/stripe/stripe-node/pull/2126) Update generated code for beta
  * ⚠️ Remove support for `payment_method_update` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`. Users are expected to completely migrate from using `payment_method_update`.
  * Add support for new resource `FinancialConnections.Institution`
  * Add support for `list` and `retrieve` methods on resource `Institution`
  * Add support for `institution` on `Checkout.Session.payment_method_options.us_bank_account.financial_connections.filters`, `FinancialConnections.Session.filters`, `FinancialConnections.SessionCreateParams.filters`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `InvoiceCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `InvoiceUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentCreateParams.payment_method_options.us_bank_account.financial_connections.filters`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntent.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentConfirmParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentCreateParams.payment_method_options.us_bank_account.financial_connections.filters`, `SetupIntentUpdateParams.payment_method_options.us_bank_account.financial_connections.filters`, `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, `SubscriptionCreateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`, and `SubscriptionUpdateParams.payment_settings.payment_method_options.us_bank_account.financial_connections.filters`
  * Add support for `payment_method_allow_redisplay_filters`, `payment_method_redisplay_limit`, `payment_method_redisplay`, and `payment_method_save_usage` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
  * Add support for new value `balance` on enums `FinancialConnections.Account.subscriptions[]`, `FinancialConnections.AccountSubscribeParams.features[]`, and `FinancialConnections.AccountUnsubscribeParams.features[]`

## 16.2.0-beta.1 - 2024-06-27
This release changes the pinned API version to `2024-06-20`.

* [#2110](https://github.com/stripe/stripe-node/pull/2110) Update generated code for beta
  * Remove support for `payment_method_set_as_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
  * Add support for new value `ch_uid` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `ch_uid` on enum `Order.tax_details.tax_ids[].type`

## 15.12.0-beta.1 - 2024-06-13
* [#2103](https://github.com/stripe/stripe-node/pull/2103) Update generated code for beta
  * Add support for new value `de_stn` on enums `OrderCreateParams.tax_details.tax_ids[].type` and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `de_stn` on enum `Order.tax_details.tax_ids[].type`

## 15.11.0-beta.1 - 2024-06-06
* [#2098](https://github.com/stripe/stripe-node/pull/2098) Update generated code for beta
  * Add support for `twint` on `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`

## 15.10.0-beta.1 - 2024-05-30
* [#2094](https://github.com/stripe/stripe-node/pull/2094) Update generated code for beta
  * Add support for new values `en-RO` and `ro-RO` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale` and `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`

## 15.9.0-beta.1 - 2024-05-23
* [#2093](https://github.com/stripe/stripe-node/pull/2093) Update generated code for beta
  * Change `CreditNoteCreateParams.refunds[].refund`, `CreditNotePreviewLinesParams.refunds[].refund`, and `CreditNotePreviewParams.refunds[].refund` to be optional

## 15.8.0-beta.1 - 2024-05-16
* [#2087](https://github.com/stripe/stripe-node/pull/2087) Update generated code for beta

## 15.7.0-beta.1 - 2024-05-09
* [#2079](https://github.com/stripe/stripe-node/pull/2079) Update generated code for beta
  * No new beta features. Merging changes from the main branch.

## 15.6.0-beta.1 - 2024-05-02
* [#2073](https://github.com/stripe/stripe-node/pull/2073) Update generated code for beta
  * Add support for `rechnung_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for `rechnung` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethodUpdateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
  * Add support for `multibanco` on `Checkout.Session.payment_method_options` and `Checkout.SessionCreateParams.payment_method_options`
  * Add support for new value `multibanco` on enum `Checkout.SessionCreateParams.payment_method_types[]`
  * Add support for new value `rechnung` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
  * Add support for new value `rechnung` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
  * Add support for new value `rechnung` on enums `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
  * Change `GiftCards.Card.code` and `GiftCards.Card.transactions` to be optional
  * Change `Tax.Calculation.ship_from_details` and `Tax.Transaction.ship_from_details` to be required

## 15.5.0-beta.1 - 2024-04-25
* [#2070](https://github.com/stripe/stripe-node/pull/2070) Update generated code for beta
  * Add support for `payment_method_settings` on `AccountSessionCreateParams.components`
  * Add support for `cancel_subscription_schedule` on `QuoteCreateParams.lines[]`, `QuoteLine`, and `QuoteUpdateParams.lines[]`

## 15.4.0-beta.1 - 2024-04-18
* [#2065](https://github.com/stripe/stripe-node/pull/2065) Update generated code for beta
  * Add support for `capital_overview`, `tax_registrations`, and `tax_settings` on `AccountSessionCreateParams.components`
  * Add support for `external_account_collection` on `AccountSessionCreateParams.components.financial_account.features`
  * Add support for `subscription_trial_from_plan` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`

## 15.2.0-beta.1 - 2024-04-11
This release changes the pinned API version to `2024-04-10`.

* [#2058](https://github.com/stripe/stripe-node/pull/2058) Update generated code for beta
  * Add support for `retrieve` method on resources `Entitlements.ActiveEntitlement` and `Entitlements.Feature`
  * Add support for `fees`, `losses`, `requirement_collection`, and `stripe_dashboard` on `AccountCreateParams.controller`
  * Change type of `Entitlements.Feature.metadata` from `map(string: string) | null` to `map(string: string)`
  * Change `FinancialConnections.Account.ownership_refresh.next_refresh_available_at` to be required
  * Add support for new values `bh_vat`, `kz_bin`, `ng_tin`, and `om_vat` on enums `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new values `bh_vat`, `kz_bin`, `ng_tin`, and `om_vat` on enum `Order.tax_details.tax_ids[].type`
  * Add support for `hosted_voucher_url` on `PaymentIntent.next_action.multibanco_display_details`
  * Add support for `toggles` on `Terminal.Reader.action.collect_inputs.inputs[]` and `Terminal.ReaderCollectInputsParams.inputs[]`
  * Add support for new values `email`, `numeric`, `phone`, and `text` on enum `Terminal.ReaderCollectInputsParams.inputs[].type`
  * Add support for `email`, `numeric`, `phone`, and `text` on `Terminal.Reader.action.collect_inputs.inputs[]`

## 14.25.0-beta.1 - 2024-04-04
* [#2054](https://github.com/stripe/stripe-node/pull/2054) Update generated code for beta
  * Add support for `update` method on resource `Entitlements.Feature`
  * Add support for `risk_controls` on `AccountCreateParams`, `AccountUpdateParams`, and `Account`
  * Change `Discount.subscription_item`, `QuoteLine.actions[].add_discount`, `QuoteLine.actions[].add_item.discounts`, `QuoteLine.actions[].remove_discount`, `QuoteLine.actions[].set_discounts`, `QuoteLine.actions[].set_items[].discounts`, `Subscription.discounts`, `SubscriptionItem.discounts`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts`, `SubscriptionSchedule.phases[].discounts`, and `SubscriptionSchedule.phases[].items[].discounts` to be required
  * Add support for `promotion_code` on `InvoiceAddLinesParams.lines[].discounts[]`, `InvoiceUpdateLinesParams.lines[].discounts[]`, `QuoteCreateParams.line_items[].discounts[]`, `QuoteCreateParams.lines[].actions[].add_discount`, `QuoteCreateParams.phases[].line_items[].discounts[]`, `QuoteUpdateParams.line_items[].discounts[]`, `QuoteUpdateParams.lines[].actions[].add_discount`, and `QuoteUpdateParams.phases[].line_items[].discounts[]`
  * Change type of `QuoteLine.actions[].add_item.discounts`, `QuoteLine.actions[].set_items[].discounts`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts`, `SubscriptionSchedule.phases[].discounts`, and `SubscriptionSchedule.phases[].items[].discounts` from `array(DiscountsResourceStackableDiscount) | null` to `array(DiscountsResourceStackableDiscount)`
  * Change type of `Subscription.discounts` and `SubscriptionItem.discounts` from `array(expandable(Discount)) | null` to `array(expandable(Discount))`

## 14.24.0-beta.1 - 2024-03-28
* [#2047](https://github.com/stripe/stripe-node/pull/2047) Update generated code for beta
  * Add support for `financial_account_transactions`, `financial_account`, `issuing_card`, and `issuing_cards_list` on `AccountSessionCreateParams.components`
  * Remove support for `subscription_billing_cycle_anchor`, `subscription_cancel_at_period_end`, `subscription_cancel_at`, `subscription_cancel_now`, `subscription_default_tax_rates`, `subscription_items`, `subscription_prebilling`, `subscription_proration_behavior`, `subscription_proration_date`, `subscription_resume_at`, `subscription_start_date`, and `subscription_trial_end` on `InvoiceCreatePreviewParams`

## 14.23.0-beta.1 - 2024-03-21
* [#2039](https://github.com/stripe/stripe-node/pull/2039) Update generated code for beta
  * Add support for new resources `Entitlements.ActiveEntitlementSummary` and `Entitlements.ActiveEntitlement`
  * Add support for `list` method on resource `ActiveEntitlement`
  * Add support for `mobilepay` on `ConfirmationToken.payment_method_preview` and `ConfirmationTokenCreateParams.testHelpers.payment_method_data`
  * Add support for new value `mobilepay` on enum `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`
  * Add support for `use_stripe_sdk` on `ConfirmationToken`
  * Remove support for `payment_method` on `ConfirmationToken`
  * Change type of `ConfirmationToken.mandate_data` from `ConfirmationTokensResourceMandateData` to `ConfirmationTokensResourceMandateData | null`
  * Add support for new value `mobilepay` on enum `ConfirmationToken.payment_method_preview.type`
  * Add support for `metadata` on `Entitlements.FeatureCreateParams` and `Entitlements.Feature`
  * Add support for `active` on `Entitlements.Feature`
  * Add support for new value `entitlements.active_entitlement_summary.updated` on enum `Event.type`
  * Remove support for value `customer.entitlement_summary.updated` from enum `Event.type`
  * Add support for new value `entitlements.active_entitlement_summary.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
  * Remove support for value `customer.entitlement_summary.updated` from enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 14.22.0-beta.1 - 2024-03-14
* [#2036](https://github.com/stripe/stripe-node/pull/2036) Update generated code for beta
  * Add support for new resources `Billing.MeterEventAdjustment`, `Billing.MeterEvent`, and `Billing.Meter`
  * Add support for `create`, `deactivate`, `list`, `reactivate`, `retrieve`, and `update` methods on resource `Meter`
  * Add support for `create` method on resources `MeterEventAdjustment` and `MeterEvent`
  * Add support for `create` test helper method on resource `ConfirmationToken`
  * Add support for `add_lines`, `remove_lines`, and `update_lines` methods on resource `Invoice`
  * Add support for `multibanco` payment method throughout the API.
  * Add support for `second_line` on `Issuing.PhysicalBundle.features`
  * Add support for `multibanco_display_details` on `PaymentIntent.next_action`
  * Add support for `meter` on `PlanCreateParams`, `Plan`, `Price.recurring`, `PriceCreateParams.recurring`, and `PriceListParams.recurring`

## 14.21.0-beta.1 - 2024-03-07
* [#2032](https://github.com/stripe/stripe-node/pull/2032) Update generated code for beta
  * Add support for new value `billing_period_end` on enums `QuoteCreateParams.lines[].ends_at.type`, `QuoteLine.ends_at.type`, and `QuoteUpdateParams.lines[].ends_at.type`

## 14.20.0-beta.1 - 2024-02-29
* [#2026](https://github.com/stripe/stripe-node/pull/2026) Update generated code for beta
  * Remove support for resource `Entitlements.Event`
  * Change type of `ConfirmationToken.mandate_data` from `ConfirmationTokensResourceMandateData | null` to `ConfirmationTokensResourceMandateData`
  * Change `ConfirmationToken.mandate_data`, `ConfirmationToken.payment_method_options`, and `ConfirmationToken.payment_method` to be optional
  * Remove support for `quantity` and `type` on `Entitlements.FeatureCreateParams` and `Entitlements.Feature`
  * Add support for `livemode` on `Issuing.PersonalizationDesign`
  * Add support for `application_fee_amount`, `description`, `metadata`, and `transfer_data` on `PaymentIntentDecrementAuthorizationParams`
  * Add support for `enable_customer_cancellation` on `Terminal.Reader.action.collect_payment_method.collect_config` and `Terminal.ReaderCollectPaymentMethodParams.collect_config`

## 14.19.0-beta.1 - 2024-02-22
* [#2023](https://github.com/stripe/stripe-node/pull/2023) Update generated code for beta

## 14.18.0-beta.1 - 2024-02-16
* [#2017](https://github.com/stripe/stripe-node/pull/2017) Update generated code for beta
  * Add support for `payto` and `twint` payment method throughout the API
  * Add support for `decrement_authorization` method on resource `PaymentIntent`
  * Add support for `decremental_authorization` on `Charge.payment_method_details.card`
  * Add support for `display_brand` on `ConfirmationToken.payment_method_preview.card`
  * Add support for new value `no_voec` on enums `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `OrderCreateParams.tax_details.tax_ids[].type`, and `OrderUpdateParams.tax_details.tax_ids[].type`
  * Add support for new value `no_voec` on enum `Order.tax_details.tax_ids[].type`
  * Add support for `request_decremental_authorization` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`

## 14.17.0-beta.1 - 2024-02-08
* [#2014](https://github.com/stripe/stripe-node/pull/2014) Update generated code for beta
  * Add support for `payment_method_options` on `ConfirmationToken`
  * Add support for new value `velobank` on enum `ConfirmationToken.payment_method_preview.p24.bank`

## 14.15.0-beta.2 - 2024-02-01
* [#2002](https://github.com/stripe/stripe-node/pull/2002) Update generated code for beta
  * Add support for new resources `Entitlements.Event` and `Entitlements.Feature`
  * Add support for `create` method on resource `Event`
  * Add support for `create` and `list` methods on resource `Feature`
  * Add support for `swish` on `ConfirmationToken.payment_method_preview`
  * Add support for new value `swish` on enum `ConfirmationToken.payment_method_preview.type`
  * Add support for new value `customer.entitlement_summary.updated` on enum `Event.type`
  * Add support for `account_tax_ids` on `InvoiceCreatePreviewParams.schedule_details.phases[].invoice_settings`, `InvoiceUpcomingLinesParams.schedule_details.phases[].invoice_settings`, and `InvoiceUpcomingParams.schedule_details.phases[].invoice_settings`
  * Add support for `feature` on `Product.features[]`, `ProductCreateParams.features[]`, and `ProductUpdateParams.features[]`
  * Add support for new value `customer.entitlement_summary.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 14.15.0-beta.1 - 2024-01-25
* [#1994](https://github.com/stripe/stripe-node/pull/1994) Beta: report `raw_request` usage
* [#1996](https://github.com/stripe/stripe-node/pull/1996) Update generated code for beta
  Release specs are identical.
* [#1993](https://github.com/stripe/stripe-node/pull/1993) Update generated code for beta
  * Add support for new value `nn` on enum `ConfirmationToken.payment_method_preview.ideal.bank`
  * Add support for new value `NNBANL2G` on enum `ConfirmationToken.payment_method_preview.ideal.bic`
  * Change `Invoice.automatic_tax.liability`, `Invoice.issuer`, and `Subscription.automatic_tax.liability` to be required
* [#1997](https://github.com/stripe/stripe-node/pull/1997) Update generated code for beta
  * Add support for `create_preview` method on resource `Invoice`
  * Add support for `charged_off_at` on `Capital.FinancingOffer`
  * Change `Checkout.Session.automatic_tax.liability`, `Checkout.Session.invoice_creation.invoice_data.issuer`, `PaymentLink.automatic_tax.liability`, `PaymentLink.invoice_creation.invoice_data.issuer`, `PaymentLink.subscription_data.invoice_settings.issuer`, `PaymentLink.subscription_data.invoice_settings`, `Quote.automatic_tax.liability`, `Quote.invoice_settings.issuer`, `SubscriptionSchedule.default_settings.automatic_tax.liability`, `SubscriptionSchedule.default_settings.invoice_settings.issuer`, `SubscriptionSchedule.phases[].automatic_tax.liability`, and `SubscriptionSchedule.phases[].invoice_settings.issuer` to be required
  * Add support for new values `disabled` and `enabled` on enums `CustomerSession.components.payment_element.features.payment_method_remove`, `CustomerSession.components.payment_element.features.payment_method_save`, `CustomerSession.components.payment_element.features.payment_method_set_as_default`, `CustomerSession.components.payment_element.features.payment_method_update`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_remove`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_save`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_set_as_default`, and `CustomerSessionCreateParams.components.payment_element.features.payment_method_update`
  * Remove support for values `auto` and `never` from enums `CustomerSession.components.payment_element.features.payment_method_remove`, `CustomerSession.components.payment_element.features.payment_method_save`, `CustomerSession.components.payment_element.features.payment_method_set_as_default`, `CustomerSession.components.payment_element.features.payment_method_update`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_remove`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_save`, `CustomerSessionCreateParams.components.payment_element.features.payment_method_set_as_default`, and `CustomerSessionCreateParams.components.payment_element.features.payment_method_update`
  * Add support for `enhanced_evidence` on `Dispute.evidence` and `DisputeUpdateParams.evidence`
  * Add support for `enhanced_eligibility_types` on `Dispute`
  * Add support for `enhanced_eligibility` on `Dispute.evidence_details`
  * Add support for `promotion_code` on `InvoiceUpcomingLinesParams.schedule_details.amendments[].discount_actions[].add`, `InvoiceUpcomingLinesParams.schedule_details.amendments[].discount_actions[].remove`, `InvoiceUpcomingLinesParams.schedule_details.amendments[].discount_actions[].set`, `InvoiceUpcomingLinesParams.schedule_details.amendments[].item_actions[].add.discounts[]`, `InvoiceUpcomingLinesParams.schedule_details.amendments[].item_actions[].set.discounts[]`, `InvoiceUpcomingLinesParams.schedule_details.phases[].add_invoice_items[].discounts[]`, `InvoiceUpcomingLinesParams.schedule_details.phases[].discounts[]`, `InvoiceUpcomingLinesParams.schedule_details.phases[].items[].discounts[]`, `InvoiceUpcomingLinesParams.subscription_details.items[].discounts[]`, `InvoiceUpcomingLinesParams.subscription_items[].discounts[]`, `InvoiceUpcomingParams.schedule_details.amendments[].discount_actions[].add`, `InvoiceUpcomingParams.schedule_details.amendments[].discount_actions[].remove`, `InvoiceUpcomingParams.schedule_details.amendments[].discount_actions[].set`, `InvoiceUpcomingParams.schedule_details.amendments[].item_actions[].add.discounts[]`, `InvoiceUpcomingParams.schedule_details.amendments[].item_actions[].set.discounts[]`, `InvoiceUpcomingParams.schedule_details.phases[].add_invoice_items[].discounts[]`, `InvoiceUpcomingParams.schedule_details.phases[].discounts[]`, `InvoiceUpcomingParams.schedule_details.phases[].items[].discounts[]`, `InvoiceUpcomingParams.subscription_details.items[].discounts[]`, `InvoiceUpcomingParams.subscription_items[].discounts[]`, `QuoteCreateParams.lines[].actions[].add_item.discounts[]`, `QuoteCreateParams.lines[].actions[].remove_discount`, `QuoteCreateParams.lines[].actions[].set_discounts[]`, `QuoteCreateParams.lines[].actions[].set_items[].discounts[]`, `QuoteCreateParams.phases[].discounts[]`, `QuoteLine.actions[].add_discount`, `QuoteLine.actions[].add_item.discounts[]`, `QuoteLine.actions[].remove_discount`, `QuoteLine.actions[].set_discounts[]`, `QuoteLine.actions[].set_items[].discounts[]`, `QuoteUpdateParams.lines[].actions[].add_item.discounts[]`, `QuoteUpdateParams.lines[].actions[].remove_discount`, `QuoteUpdateParams.lines[].actions[].set_discounts[]`, `QuoteUpdateParams.lines[].actions[].set_items[].discounts[]`, `QuoteUpdateParams.phases[].discounts[]`, `SubscriptionCreateParams.add_invoice_items[].discounts[]`, `SubscriptionCreateParams.discounts[]`, `SubscriptionCreateParams.items[].discounts[]`, `SubscriptionItemCreateParams.discounts[]`, `SubscriptionItemUpdateParams.discounts[]`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts[]`, `SubscriptionSchedule.phases[].discounts[]`, `SubscriptionSchedule.phases[].items[].discounts[]`, `SubscriptionScheduleAmendParams.amendments[].discount_actions[].add`, `SubscriptionScheduleAmendParams.amendments[].discount_actions[].remove`, `SubscriptionScheduleAmendParams.amendments[].discount_actions[].set`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].add.discounts[]`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].set.discounts[]`, `SubscriptionScheduleCreateParams.phases[].add_invoice_items[].discounts[]`, `SubscriptionScheduleCreateParams.phases[].discounts[]`, `SubscriptionScheduleCreateParams.phases[].items[].discounts[]`, `SubscriptionScheduleUpdateParams.phases[].add_invoice_items[].discounts[]`, `SubscriptionScheduleUpdateParams.phases[].discounts[]`, `SubscriptionScheduleUpdateParams.phases[].items[].discounts[]`, `SubscriptionUpdateParams.add_invoice_items[].discounts[]`, `SubscriptionUpdateParams.discounts[]`, and `SubscriptionUpdateParams.items[].discounts[]`

## 14.14.0-beta.1 - 2024-01-18
* [#1994](https://github.com/stripe/stripe-node/pull/1994) Beta: report `raw_request` usage
* [#1996](https://github.com/stripe/stripe-node/pull/1996) Update generated code for beta
  Release specs are identical.
* [#1993](https://github.com/stripe/stripe-node/pull/1993) Update generated code for beta
  * Add support for new value `nn` on enum `ConfirmationToken.payment_method_preview.ideal.bank`
  * Add support for new value `NNBANL2G` on enum `ConfirmationToken.payment_method_preview.ideal.bic`
  * Change `Invoice.automatic_tax.liability`, `Invoice.issuer`, and `Subscription.automatic_tax.liability` to be required

## 14.13.0-beta.1 - 2024-01-12
* [#1986](https://github.com/stripe/stripe-node/pull/1986) Update generated code for beta
  * Change `AccountSession.components.capital_financing_promotion.features` to be required
* [#1989](https://github.com/stripe/stripe-node/pull/1989) Update generated code for beta
  * Add support for `amount` on `ChargeCaptureParams.payment_details.flight.segments[]`, `ChargeUpdateParams.payment_details.flight.segments[]`, `PaymentIntentCaptureParams.payment_details.flight.segments[]`, `PaymentIntentConfirmParams.payment_details.flight.segments[]`, `PaymentIntentCreateParams.payment_details.flight.segments[]`, and `PaymentIntentUpdateParams.payment_details.flight.segments[]`
  * Add support for `number_of_rooms` and `room_class` on `ChargeCaptureParams.payment_details.lodging`, `ChargeUpdateParams.payment_details.lodging`, `PaymentIntentCaptureParams.payment_details.lodging`, `PaymentIntentConfirmParams.payment_details.lodging`, `PaymentIntentCreateParams.payment_details.lodging`, and `PaymentIntentUpdateParams.payment_details.lodging`
  * Change `ConfirmationToken.setup_future_usage` to be required
  * Add support for `buy_button` on `CustomerSession.components` and `CustomerSessionCreateParams.components`
  * Add support for new values `high_risk_industry`, `insufficient_margin_ratio`, `insufficient_operating_profit`, `insufficient_reserves`, `insufficient_time_in_network`, `lacking_cash_account`, and `poor_payment_history_with_platform` on enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
  * Add support for new values `high_risk_industry`, `insufficient_margin_ratio`, `insufficient_operating_profit`, `insufficient_reserves`, `insufficient_time_in_network`, and `lacking_cash_account` on enums `Issuing.CreditUnderwritingRecord.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecord.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_limit_decreased.reasons[]`, and `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_line_closed.reasons[]`

## 14.12.0-beta.1 - 2024-01-04
* [#1986](https://github.com/stripe/stripe-node/pull/1986) Update generated code for beta
  * Change `AccountSession.components.capital_financing_promotion.features` to be required
  * Updated stable APIs to the latest version

## 14.11.0-beta.1 - 2023-12-22
* [#1977](https://github.com/stripe/stripe-node/pull/1977) Update generated code for beta
  * Add support for `capital_financing_promotion` on `AccountSession.components` and `AccountSessionCreateParams.components`
  * Add support for new value `shipping_address_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Change `FinancialConnections.Account.balance_refresh.next_refresh_available_at`, `FinancialConnections.Account.subscriptions`, and `FinancialConnections.Account.transaction_refresh` to be required
  * Change type of `Invoice.issuer` and `SubscriptionSchedule.default_settings.invoice_settings.issuer` from `ConnectAccountReference | null` to `ConnectAccountReference`
  * Change type of `PaymentLink.subscription_data.invoice_settings` from `PaymentLinksResourceSubscriptionDataInvoiceSettings | null` to `PaymentLinksResourceSubscriptionDataInvoiceSettings`
  * Add support for `ship_from_details` on `Tax.CalculationCreateParams`, `Tax.Calculation`, and `Tax.Transaction`

## 14.10.0-beta.1 - 2023-12-14
* [#1975](https://github.com/stripe/stripe-node/pull/1975) Update generated code for beta
  * Add support for `preview_mode` and `subscription_details` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
  * Remove support for `subscription_trial_from_plan` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
  * Add support for `billing_behavior`, `end_behavior`, and `proration_behavior` on `InvoiceUpcomingLinesParams.schedule_details` and `InvoiceUpcomingParams.schedule_details`

## 14.9.0-beta.1 - 2023-12-08
* [#1969](https://github.com/stripe/stripe-node/pull/1969) Update generated code for beta
  * Add support for `retrieve` method on resource `FinancialConnections.Transaction`
  * Remove support for `issuing_card` and `issuing_cards_list` on `AccountSessionCreateParams.components`
  * Add support for `payment_method_remove`, `payment_method_save`, and `payment_method_set_as_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
  * Remove support for `payment_method_detach` and `payment_method_set_as_customer_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`

## 14.8.0-beta.1 - 2023-11-30
* [#1967](https://github.com/stripe/stripe-node/pull/1967) Update generated code for beta

## 14.7.0-beta.2 - 2023-11-27
* [#1966](https://github.com/stripe/stripe-node/pull/1966) beta: climate APIs
  * Add support for new resources `Climate.Order`, `Climate.Product`, and `Climate.Supplier`
  * Add support for new value `financial_connections_account_inactive` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
  * Add support for new values `climate.order.canceled`, `climate.order.created`, `climate.order.delayed`, `climate.order.delivered`, `climate.order.product_substituted`, `climate.product.created`, and `climate.product.pricing_updated` on enum `Event.type`
  * Add support for new values `climate.order.canceled`, `climate.order.created`, `climate.order.delayed`, `climate.order.delivered`, `climate.order.product_substituted`, `climate.product.created`, and `climate.product.pricing_updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 14.7.0-beta.1 - 2023-11-21
* [#1962](https://github.com/stripe/stripe-node/pull/1962) Update generated code for beta
  * Rename `.delivery.receipient` to `.delivery.recipient` on `Charge` and `PaymentIntent` APIs.
  * Add support for `components` on `CustomerSessionCreateParams` and `CustomerSession`

## 14.6.0-beta.1 - 2023-11-16
* [#1954](https://github.com/stripe/stripe-node/pull/1954) Update generated code for beta
  * Add support for `issuing_card` and `issuing_cards_list` on `AccountSessionCreateParams.components`
* [#1959](https://github.com/stripe/stripe-node/pull/1959) Update generated code for beta
  * Add support for `event_details` and `subscription` on `ChargeCaptureParams.payment_details`, `ChargeUpdateParams.payment_details`, `PaymentIntent.payment_details`, `PaymentIntentCaptureParams.payment_details`, `PaymentIntentConfirmParams.payment_details`, `PaymentIntentCreateParams.payment_details`, and `PaymentIntentUpdateParams.payment_details`
  * Add support for `affiliate` and `delivery` on `ChargeCaptureParams.payment_details.car_rental`, `ChargeCaptureParams.payment_details.flight`, `ChargeCaptureParams.payment_details.lodging`, `ChargeUpdateParams.payment_details.car_rental`, `ChargeUpdateParams.payment_details.flight`, `ChargeUpdateParams.payment_details.lodging`, `PaymentIntent.payment_details.car_rental`, `PaymentIntentCaptureParams.payment_details.car_rental`, `PaymentIntentCaptureParams.payment_details.flight`, `PaymentIntentCaptureParams.payment_details.lodging`, `PaymentIntentConfirmParams.payment_details.car_rental`, `PaymentIntentConfirmParams.payment_details.flight`, `PaymentIntentConfirmParams.payment_details.lodging`, `PaymentIntentCreateParams.payment_details.car_rental`, `PaymentIntentCreateParams.payment_details.flight`, `PaymentIntentCreateParams.payment_details.lodging`, `PaymentIntentUpdateParams.payment_details.car_rental`, `PaymentIntentUpdateParams.payment_details.flight`, and `PaymentIntentUpdateParams.payment_details.lodging`
  * Add support for `drivers` on `ChargeCaptureParams.payment_details.car_rental`, `ChargeUpdateParams.payment_details.car_rental`, `PaymentIntent.payment_details.car_rental`, `PaymentIntentCaptureParams.payment_details.car_rental`, `PaymentIntentConfirmParams.payment_details.car_rental`, `PaymentIntentCreateParams.payment_details.car_rental`, and `PaymentIntentUpdateParams.payment_details.car_rental`
  * Add support for `passengers` on `ChargeCaptureParams.payment_details.flight`, `ChargeCaptureParams.payment_details.lodging`, `ChargeUpdateParams.payment_details.flight`, `ChargeUpdateParams.payment_details.lodging`, `PaymentIntentCaptureParams.payment_details.flight`, `PaymentIntentCaptureParams.payment_details.lodging`, `PaymentIntentConfirmParams.payment_details.flight`, `PaymentIntentConfirmParams.payment_details.lodging`, `PaymentIntentCreateParams.payment_details.flight`, `PaymentIntentCreateParams.payment_details.lodging`, `PaymentIntentUpdateParams.payment_details.flight`, and `PaymentIntentUpdateParams.payment_details.lodging`
  * Add support for `created` on `CustomerSession`

## 14.5.0-beta.1 - 2023-11-10
* [#1948](https://github.com/stripe/stripe-node/pull/1948) Update generated code for beta
  * Add support for new value `quote.reestimate_failed` on enum `Event.type`
  * Add support for `metadata` on `QuoteCreateParams.phases[]`, `QuotePhase`, and `QuoteUpdateParams.phases[]`
  * Add support for `last_reestimation_details` on `Quote.computed`
  * Add support for new value `quote.reestimate_failed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 14.4.0-beta.1 - 2023-11-02
* [#1945](https://github.com/stripe/stripe-node/pull/1945) Update generated code for beta
  * Add support for `attach_payment_intent` method on resource `Invoice`
  * Add support for `revolut_pay` on `ConfirmationToken.payment_method_preview`
  * Add support for new value `revolut_pay` on enum `ConfirmationToken.payment_method_preview.type`
  * Change `ConfirmationToken.payment_method_preview.paypal.payer_email`, `ConfirmationToken.payment_method_preview.paypal.payer_id`, `Issuing.Authorization.merchant_data.url`, `Issuing.Authorization.verification_data.three_d_secure`, `Issuing.Transaction.merchant_data.url`, `Order.payment.settings.payment_method_options.paypal.reference`, and `QuoteLine.set_schedule_end` to be required
  * Add support for `refunds` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, `CreditNotePreviewParams`, and `CreditNote`
  * Add support for `post_payment_amount` and `pre_payment_amount` on `CreditNote`
  * Add support for new value `invoice.payment.overpaid` on enum `Event.type`
  * Add support for `schedule_details` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
  * Add support for `amounts_due` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
  * Add support for `payments` on `Invoice`
  * Add support for `created` on `Issuing.PersonalizationDesign`
  * Add support for `ending_before`, `limit`, and `starting_after` on `Tax.RegistrationListParams`
  * Change type of `Tax.RegistrationCreateParams.active_from` to be `'now' | DateTime`
  * Add support for new value `invoice.payment.overpaid` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 14.3.0-beta.1 - 2023-10-26
* [#1938](https://github.com/stripe/stripe-node/pull/1938) Update generated code for beta
  * Add support for new resource `Margin`
  * Add support for `create`, `list`, `retrieve`, and `update` methods on resource `Margin`
  * Add support for `subsellers` on `Checkout.SessionCreateParams.payment_method_options.paypal`, `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, `PaymentIntentUpdateParams.payment_method_options.paypal`, `SetupIntent.payment_method_options.paypal`, `SetupIntentConfirmParams.payment_method_options.paypal`, `SetupIntentCreateParams.payment_method_options.paypal`, and `SetupIntentUpdateParams.payment_method_options.paypal`
  * Add support for `default_margins` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
  * Add support for `total_margin_amounts` on `Invoice`
  * Add support for `margins` on `InvoiceItemCreateParams`, `InvoiceItemUpdateParams`, and `InvoiceItem`
  * Add support for new values `applicant_is_not_beneficial_owner`, `current_account_tier_ineligible`, `customer_requested_account_closure`, `dispute_rate_too_high`, and `invalid_business_license` on enums `Issuing.CreditUnderwritingRecord.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecord.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_limit_decreased.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.credit_line_closed.reasons[]`, `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_limit_decreased.reasons[]`, and `Issuing.CreditUnderwritingRecordCreateFromProactiveReviewParams.decision.credit_line_closed.reasons[]`
  * Add support for new values `applicant_is_not_beneficial_owner`, `current_account_tier_ineligible`, `customer_requested_account_closure`, `dispute_rate_too_high`, and `invalid_business_license` on enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
  * Remove support for values `change_in_financial_state`, `change_in_utilization_of_credit_line`, `decrease_in_income_to_expense_ratio`, `decrease_in_social_media_performance`, `exceeds_acceptable_platform_exposure`, `has_recent_credit_limit_increase`, `insufficient_credit_utilization`, `insufficient_usage_as_qualified_expenses`, and `poor_payment_history_with_platform` from enums `Issuing.CreditUnderwritingRecord.decision.application_rejected.reasons[]`, `Issuing.CreditUnderwritingRecordCorrectParams.decision.application_rejected.reasons[]`, and `Issuing.CreditUnderwritingRecordReportDecisionParams.decision.application_rejected.reasons[]`
  * Add support for `is_default` on `Issuing.PersonalizationDesign.preferences`, `Issuing.PersonalizationDesignCreateParams.preferences`, `Issuing.PersonalizationDesignListParams.preferences`, and `Issuing.PersonalizationDesignUpdateParams.preferences`
  * Add support for `is_platform_default` on `Issuing.PersonalizationDesign.preferences` and `Issuing.PersonalizationDesignListParams.preferences`
  * Remove support for `account_default` on `Issuing.PersonalizationDesign.preferences`, `Issuing.PersonalizationDesignCreateParams.preferences`, `Issuing.PersonalizationDesignListParams.preferences`, and `Issuing.PersonalizationDesignUpdateParams.preferences`
  * Remove support for `platform_default` on `Issuing.PersonalizationDesign.preferences` and `Issuing.PersonalizationDesignListParams.preferences`
  * Add support for `liability` on `PaymentLink.automatic_tax`, `PaymentLinkCreateParams.automatic_tax`, and `PaymentLinkUpdateParams.automatic_tax`
  * Add support for `issuer` on `PaymentLink.invoice_creation.invoice_data`, `PaymentLinkCreateParams.invoice_creation.invoice_data`, and `PaymentLinkUpdateParams.invoice_creation.invoice_data`
  * Add support for `invoice_settings` on `PaymentLink.subscription_data`, `PaymentLinkCreateParams.subscription_data`, and `PaymentLinkUpdateParams.subscription_data`
  * Add support for new value `accept_failed_validations` on enum `Quote.status_details.stale.last_reason.type`

## 14.2.0-beta.1 - 2023-10-17
This release changes the pinned API version to `2023-10-16`.

* [#1935](https://github.com/stripe/stripe-node/pull/1935) Update generated code for beta
* [#1930](https://github.com/stripe/stripe-node/pull/1930) Update generated code for beta
  - Update pinned API version to `2023-10-16`

## 13.12.0-beta.1 - 2023-10-16
* [#1925](https://github.com/stripe/stripe-node/pull/1925) Update generated code for beta

## 13.11.0-beta.1 - 2023-10-11
* [#1919](https://github.com/stripe/stripe-node/pull/1919) Update generated code for beta
  * Add support for new resources `AccountNotice` and `Issuing.CreditUnderwritingRecord`
  * Add support for `list`, `retrieve`, and `update` methods on resource `AccountNotice`
  * Add support for `correct`, `create_from_application`, `create_from_proactive_review`, `list`, `report_decision`, and `retrieve` methods on resource `CreditUnderwritingRecord`
  * Change type of `Checkout.Session.automatic_tax.liability.account`, `Checkout.Session.invoice_creation.invoice_data.issuer.account`, `Invoice.automatic_tax.liability.account`, `Invoice.issuer.account`, `Quote.automatic_tax.liability.account`, `Quote.invoice_settings.issuer.account`, `Subscription.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.invoice_settings.issuer.account`, `SubscriptionSchedule.phases[].automatic_tax.liability.account`, and `SubscriptionSchedule.phases[].invoice_settings.issuer.account` from `expandable(Account) | null` to `expandable(Account)`
  * Change `Checkout.Session.automatic_tax.liability.account`, `Checkout.Session.invoice_creation.invoice_data.issuer.account`, `Invoice.automatic_tax.liability.account`, `Invoice.issuer.account`, `Issuing.Transaction.network_data.processing_date`, `Quote.automatic_tax.liability.account`, `Quote.invoice_settings.issuer.account`, `Subscription.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.invoice_settings.issuer.account`, `SubscriptionSchedule.phases[].automatic_tax.liability.account`, and `SubscriptionSchedule.phases[].invoice_settings.issuer.account` to be optional
  * Add support for new values `account_notice.created` and `account_notice.updated` on enum `Event.type`
  * Add support for new values `local_amusement_tax` and `state_communications_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
  * Add support for new values `account_notice.created` and `account_notice.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 13.10.0-beta.1 - 2023-10-05
* [#1917](https://github.com/stripe/stripe-node/pull/1917) Update generated code for beta
  * Add support for `mark_draft` and `mark_stale` methods on resource `Quote`
  * Remove support for `draft_quote`, `mark_stale_quote`, and `preview_invoice_lines` methods on resource `Quote`
  * Add support for `liability` on `Checkout.Session.automatic_tax` and `Checkout.SessionCreateParams.automatic_tax`
  * Add support for `issuer` on `Checkout.Session.invoice_creation.invoice_data` and `Checkout.SessionCreateParams.invoice_creation.invoice_data`
  * Add support for `invoice_settings` on `Checkout.SessionCreateParams.subscription_data`
  * Add support for `personalization_design` on `Issuing.CardListParams`
  * Add support for `allow_backdated_lines` on `QuoteCreateParams`, `QuoteUpdateParams`, and `Quote`

## 13.9.0-beta.1 - 2023-09-28
* [#1910](https://github.com/stripe/stripe-node/pull/1910) Update generated code for beta
  * Rename resources `Issuing.CardDesign` and `Issuing.CardBundle` to `Issuing.PersonalizationDesign` and `Issuing.PhysicalBundle`
  * Add support for new values `capital_financing_offer` and `capital_financing_reporting` on enum `AccountLinkCreateParams.type`
  * Add support for `features` on `AccountSession.components.payment_details`, `AccountSession.components.payments`, `AccountSession.components.payouts`, `AccountSessionCreateParams.components.account_onboarding`, `AccountSessionCreateParams.components.payment_details`, `AccountSessionCreateParams.components.payments`, and `AccountSessionCreateParams.components.payouts`
  * Change `ConfirmationToken.payment_method_preview.us_bank_account.financial_connections_account` and `ConfirmationToken.payment_method_preview.us_bank_account.status_details` to be required
  * Add support for `reason` on `Event`

## 13.8.0-beta.1 - 2023-09-21
* [#1906](https://github.com/stripe/stripe-node/pull/1906) Update generated code for beta
  * Remove support for `customer` on `ConfirmationToken`
  * Add support for `issuer` on `InvoiceCreateParams`, `InvoiceUpcomingLinesParams`, `InvoiceUpcomingParams`, `InvoiceUpdateParams`, `Invoice`, `Quote.invoice_settings`, `QuoteCreateParams.invoice_settings`, `QuoteUpdateParams.invoice_settings`, `SubscriptionSchedule.default_settings.invoice_settings`, `SubscriptionSchedule.phases[].invoice_settings`, `SubscriptionScheduleCreateParams.default_settings.invoice_settings`, `SubscriptionScheduleCreateParams.phases[].invoice_settings`, `SubscriptionScheduleUpdateParams.default_settings.invoice_settings`, and `SubscriptionScheduleUpdateParams.phases[].invoice_settings`
  * Add support for `on_behalf_of` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
  * Add support for `liability` on `Invoice.automatic_tax`, `InvoiceCreateParams.automatic_tax`, `InvoiceUpcomingLinesParams.automatic_tax`, `InvoiceUpcomingParams.automatic_tax`, `InvoiceUpdateParams.automatic_tax`, `Quote.automatic_tax`, `QuoteCreateParams.automatic_tax`, `QuoteUpdateParams.automatic_tax`, `Subscription.automatic_tax`, `SubscriptionCreateParams.automatic_tax`, `SubscriptionSchedule.default_settings.automatic_tax`, `SubscriptionSchedule.phases[].automatic_tax`, `SubscriptionScheduleCreateParams.default_settings.automatic_tax`, `SubscriptionScheduleCreateParams.phases[].automatic_tax`, `SubscriptionScheduleUpdateParams.default_settings.automatic_tax`, `SubscriptionScheduleUpdateParams.phases[].automatic_tax`, and `SubscriptionUpdateParams.automatic_tax`
  * Change type of `Issuing.CardDesignUpdateParams.carrier_text` from `carrier_text_param` to `emptyStringable(carrier_text_param)`
  * Add support for `invoice_settings` on `SubscriptionCreateParams` and `SubscriptionUpdateParams`

## 13.7.0-beta.1 - 2023-09-14
* [#1900](https://github.com/stripe/stripe-node/pull/1900) Update generated code for beta
  * Add support for new resource `ConfirmationToken`
  * Add support for `retrieve` method on resource `ConfirmationToken`
  * Add support for `create` method on resource `Issuing.CardDesign`
  * Add support for `reject_testmode` test helper method on resource `Issuing.CardDesign`
  * Add support for new value `issuing_card_design.rejected` on enum `Event.type`
  * Add support for `features` on `Issuing.CardBundle`
  * Add support for `preferences` on `Issuing.CardDesignListParams`, `Issuing.CardDesignUpdateParams`, and `Issuing.CardDesign`
  * Remove support for `preference` on `Issuing.CardDesignListParams`, `Issuing.CardDesignUpdateParams`, and `Issuing.CardDesign`
  * Add support for `card_bundle` on `Issuing.CardDesignUpdateParams`
  * Add support for `card_logo` and `carrier_text` on `Issuing.CardDesignUpdateParams` and `Issuing.CardDesign`
  * Change type of `Issuing.CardDesignUpdateParams.lookup_key` and `Issuing.CardDesignUpdateParams.name` from `string` to `emptyStringable(string)`
  * Add support for `rejection_reasons` on `Issuing.CardDesign`
  * Add support for `confirmation_token` on `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `SetupIntentConfirmParams`, and `SetupIntentCreateParams`
  * Add support for new value `issuing_card_design.rejected` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 13.6.0-beta.1 - 2023-09-07
* [#1898](https://github.com/stripe/stripe-node/pull/1898) Update generated code for beta
  * Release specs are identical.
* [#1892](https://github.com/stripe/stripe-node/pull/1892) Update generated code for beta
  * Remove support for `submit_card` test helper method on resource `Issuing.Card`
  * Add support for `tax_forms` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
  * Add support for `card_design` on `Issuing.CardUpdateParams`
  * Remove support for value `submitted` from enum `Issuing.Card.shipping.status`
  * Add support for new value `platform_default` on enums `Issuing.CardDesign.preference` and `Issuing.CardDesignListParams.preference`

## 13.5.0-beta.1 - 2023-08-31
* [#1883](https://github.com/stripe/stripe-node/pull/1883) Update generated code for beta
  * Rename `Quote.listPreviewSubscriptionSchedules` to `Quote.listPreviewSchedules` and `Quote.listPreview

## 13.0.0-beta.1 - 2023-08-24
This release changes the pinned API version to `2023-08-16`.

* [#1873](https://github.com/stripe/stripe-node/pull/1873) Update generated code for beta
  * Add support for new resources `QuotePreviewInvoice` and `QuotePreviewSchedule`
  * Change `Checkout.Session.payment_method_options.us_bank_account.financial_connections.prefetch`, `FinancialConnections.Session.prefetch`, `Invoice.charge`, `Invoice.customer`, `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections.prefetch`, `SetupIntent.payment_method_options.us_bank_account.financial_connections.prefetch`, and `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.prefetch` to be required
  * Remove support for `applies_to` on `Invoice` and `SubscriptionSchedule`
  * Add support for `cl`, `co`, `id`, `kr`, `mx`, `my`, `sa`, `th`, `tr`, and `vn` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
  * Remove support for `hk` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`

## 12.19.0-beta.1 - 2023-08-10
* [#1868](https://github.com/stripe/stripe-node/pull/1868) Update generated code for beta
  * Add support for `paypal` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
  * Add support for new value `quote.accept_failed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 12.18.0-beta.1 - 2023-08-03
* [#1864](https://github.com/stripe/stripe-node/pull/1864) Remove developer_message support
* [#1861](https://github.com/stripe/stripe-node/pull/1861) Update generated code for beta
  * Add support for `submit_card` test helper method on resource `Issuing.Card`
  * Add support for `address_validation` on `Issuing.Card.shipping` and `Issuing.CardCreateParams.shipping`
  * Add support for `shipping` on `Issuing.CardUpdateParams`
  * Add support for new value `submitted` on enum `Issuing.Card.shipping.status`
  * Change type of `OrderCreateParams.line_items[].product_data.description`, `OrderCreateParams.line_items[].product_data.tax_code`, `OrderCreateParams.shipping_details.phone`, `OrderUpdateParams.description`, `OrderUpdateParams.line_items[].product_data.description`, `OrderUpdateParams.line_items[].product_data.tax_code`, `OrderUpdateParams.shipping_details.phone`, `PaymentMethodConfigurationListParams.application`, and `QuoteUpdateParams.subscription_data_overrides[].description` from `string` to `emptyStringable(string)`
  * Add support for `reason` on `QuoteMarkStaleQuoteParams`
  * Add support for `marked_stale` on `Quote.status_details.stale.last_reason`
  * Change `Tax.FormListParams.payee.type` to be optional

## 12.17.0-beta.1 - 2023-07-27
  * Updated stable APIs to the latest version

## 12.14.0-beta.1 - 2023-07-13
* [#1832](https://github.com/stripe/stripe-node/pull/1832) Update generated code for beta
* [#1840](https://github.com/stripe/stripe-node/pull/1840) Update generated code for beta
  Release specs are identical.
* [#1837](https://github.com/stripe/stripe-node/pull/1837) Update generated code for beta
  * Add support for new resource `PaymentMethodConfiguration`
  * Add support for `create`, `list`, `retrieve`, and `update` methods on resource `PaymentMethodConfiguration`
  * Add support for `payment_method_configuration` on `PaymentIntentCreateParams` and `PaymentIntentUpdateParams`
  * Add support for `payment_method_configuration_details` on `PaymentIntent`
  * Rename `Tax.SettingRetrieveParam` to `Tax.SettingsRetrieveParam` and `Tax.SettingUpdateParams` to `Tax.SettingsUpdateParams` (parity with main release)

## 12.12.0-beta.1 - 2023-06-29
* [#1824](https://github.com/stripe/stripe-node/pull/1824) Update generated code for beta
  * Add support for `metadata` on `Invoice.subscription_details`
  * Change `Invoice.subscription_details.pause_collection` to be optional

## 12.11.0-beta.1 - 2023-06-22
* [#1821](https://github.com/stripe/stripe-node/pull/1821) Update generated code for beta
  * Add support for new resource `CustomerSession`
  * Add support for `create` method on resource `CustomerSession`
  * Change type of `Tax.Registration.country_options.us.type` and `TaxRegistrationCreateParams.country_options.us.type` from `literal('state_sales_tax')` to `enum('local_lease_tax'|'state_sales_tax')`

## 12.10.0-beta.2 - 2023-06-15
* [#1814](https://github.com/stripe/stripe-node/pull/1814) Update generated code for beta
* [#1818](https://github.com/stripe/stripe-node/pull/1818) Update generated code for beta
  * Add support for `payment_details` on `ChargeCaptureParams`, `ChargeUpdateParams`, `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
  * Add support for `statement_details` on `PaymentIntent.payment_method_options.card`, `PaymentIntentConfirmParams.payment_method_options.card`, `PaymentIntentCreateParams.payment_method_options.card`, and `PaymentIntentUpdateParams.payment_method_options.card`

## 12.10.0-beta.1 - 2023-06-08
* [#1811](https://github.com/stripe/stripe-node/pull/1811) Update generated code for beta

## 12.9.0-beta.1 - 2023-06-01
* [#1775](https://github.com/stripe/stripe-node/pull/1775) Introduce stripe.rawRequest as a canonical way to request APIs without definitions
  * Please refer to the [Custom Requests README section](https://github.com/stripe/stripe-node/tree/beta#custom-requests) for usage instructions.
* [#1801](https://github.com/stripe/stripe-node/pull/1801) Update generated code for beta
  * Add support for `subscription_details` on `Invoice`
  * Add support for new values `aba` and `swift` on enums `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, and `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`
  * Add support for new value `us_bank_transfer` on enums `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, and `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`
  * Add support for `set_pause_collection` on `QuoteCreateParams.lines[]`, `QuoteLine`, `QuoteUpdateParams.lines[]`, and `SubscriptionScheduleAmendParams.amendments[]`
  * Add support for new value `pause_collection_start` on enums `Quote.subscription_data.bill_on_acceptance.bill_from.type`, `Quote.subscription_data_overrides[].bill_on_acceptance.bill_from.type`, `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_from.type`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_from.type`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_from.type`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_from.type`
  * Add support for `pause_collection` on `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, and `SubscriptionScheduleUpdateParams.phases[]`
  * Add support for `local_amusement_tax` on `Tax.Registration.country_options.us` and `TaxRegistrationCreateParams.country_options.us`
  * Remove support for `locations` on `Tax.Settings` and `TaxSettingUpdateParams`
  * Add support for new values `customer.subscription.collection_paused` and `customer.subscription.collection_resumed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 12.8.0-beta.1 - 2023-05-25
* [#1795](https://github.com/stripe/stripe-node/pull/1795) Update generated code for beta

## 12.7.0-beta.1 - 2023-05-19
* [#1788](https://github.com/stripe/stripe-node/pull/1788) Update generated code for beta
  * Add support for `subscribe` and `unsubscribe` methods on resource `FinancialConnections.Account`
  * Add support for `next_refresh_available_at` on `FinancialConnections.Account.balance_refresh`, `FinancialConnections.Account.inferred_balances_refresh`, `FinancialConnections.Account.ownership_refresh`, and `FinancialConnections.Account.transaction_refresh`
  * Add support for `status_details` and `status` on `Tax.Settings`
  * Add support for new value `tax.settings.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 12.6.0-beta.1 - 2023-05-11
* [#1786](https://github.com/stripe/stripe-node/pull/1786) Update generated code for beta
  * Add support for `payer_email`, `payer_name`, and `seller_protection` on `Charge.payment_method_details.paypal`
  * Change `Charge.payment_method_details.paypal.payer_id`, `Charge.payment_method_details.paypal.verified_email`, `Charge.payment_method_details.paypal.verified_name`, `SetupIntent.payment_method_options.paypal.currency`, and `Tax.Settings.locations` to be optional
  * Add support for `capture_method`, `preferred_locale`, `reference_id`, and `setup_future_usage` on `CheckoutSessionCreateParams.payment_method_options.paypal`
  * Add support for `reference` on `CheckoutSessionCreateParams.payment_method_options.paypal`, `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, and `PaymentIntentUpdateParams.payment_method_options.paypal`
  * Add support for `risk_correlation_id` on `CheckoutSessionCreateParams.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, and `PaymentIntentUpdateParams.payment_method_options.paypal`
  * Remove support for `billing_agreement_id` and `currency` on `CheckoutSessionCreateParams.payment_method_options.paypal`
  * Add support for `fingerprint`, `payer_id`, and `verified_email` on `Mandate.payment_method_details.paypal` and `PaymentMethod.paypal`
  * Add support for `taxability_reason` and `taxable_amount` on `Order.shipping_cost.taxes[]`, `Order.total_details.breakdown.taxes[]`, and `QuotePhase.total_details.breakdown.taxes[]`
  * Add support for `head_office` on `Tax.Settings` and `TaxSettingUpdateParams`

## 12.5.0-beta.1 - 2023-05-04
* [#1773](https://github.com/stripe/stripe-node/pull/1773) Update generated code for beta
  * Updated stable APIs to the latest version

## 12.4.0-beta.1 - 2023-04-27
* [#1769](https://github.com/stripe/stripe-node/pull/1769) Update generated code for beta
  * Add support for `billing_cycle_anchor` and `proration_behavior` on `CheckoutSessionCreateParams.subscription_data`
  * Add support for `terminal_id` on `Issuing.Authorization.merchant_data` and `Issuing.Transaction.merchant_data`
  * Add support for `metadata` on `PaymentIntentCaptureParams`
  * Add support for `checks` on `SetupAttempt.payment_method_details.card`
  * Add support for `tax_breakdown` on `Tax.Calculation.shipping_cost` and `Tax.Transaction.shipping_cost`
  * Change type of `TaxRegistrationCreateParams.active_from`, `TaxRegistrationUpdateParams.active_from`, and `TaxRegistrationUpdateParams.expires_at` from `longInteger` to `longInteger | literal('now')`

## 12.3.0-beta.1 - 2023-04-20
* [#1760](https://github.com/stripe/stripe-node/pull/1760) Update generated code for beta
  * Add support for `zip` on `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
  * Add support for `country_options` on `Tax.Registration` and `TaxRegistrationCreateParams`
  * Remove support for `state` and `type` on `Tax.Registration` and `TaxRegistrationCreateParams`

## 12.2.0-beta.1 - 2023-04-13
* [#1751](https://github.com/stripe/stripe-node/pull/1751) Update generated code for beta
  * Add support for `collect_payment_method` and `confirm_payment_intent` methods on resource `Terminal.Reader`
  * Add support for `paypal_payments` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
  * Add support for new value `REVOIE23` on enums `Charge.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
  * Add support for `collect_payment_method` and `confirm_payment_intent` on `Terminal.Reader.action`
  * Add support for `stripe_account` on `Terminal.Reader.action.process_payment_intent` and `Terminal.Reader.action.refund_payment`
  * Add support for new values `collect_payment_method` and `confirm_payment_intent` on enum `Terminal.Reader.action.type`
  * Add support for new value `terminal.reader.action_updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 12.1.0-beta.1 - 2023-04-06
* [#1737](https://github.com/stripe/stripe-node/pull/1737) Update generated code for beta
  * Add support for `treasury_transaction` on `CapitalFinancingTransactionListParams`
  * Add support for `transaction` on `Capital.FinancingTransaction.details`
  * Add support for new value `link` on enums `Charge.payment_method_details.card.wallet.type` and `PaymentMethod.card.wallet.type`
  * Change `IssuingCardholderCreateParams.type` to be optional
  * Add support for `country` on `PaymentMethod.link`
  * Add support for `status_details` on `PaymentMethod.us_bank_account`

## 11.18.0-beta.1 - 2023-03-30
* [#1735](https://github.com/stripe/stripe-node/pull/1735) Update generated code
  * Add support for new value `ioss` on enums `Tax.Registration.type` and `TaxRegistrationCreateParams.type`
  * Change `TerminalReaderCollectInputsParams.inputs[].custom_text.description` to be optional

## 11.17.0-beta.1 - 2023-03-23
* [#1724](https://github.com/stripe/stripe-node/pull/1724) Update generated code for beta (new)
  * Add support for new resources `Tax.CalculationLineItem` and `Tax.TransactionLineItem`
  * Add support for `collect_inputs` method on resource `Terminal.Reader`
  * Add support for `financing_offer` on `Capital.FinancingSummary`
  * Add support for new value `link` on enum `CheckoutSessionCreateParams.payment_method_types[]`
  * Add support for `fx_rate` on `Checkout.Session.currency_conversion`
  * Add support for new value `link` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
  * Add support for `automatic_payment_methods` on `SetupIntentCreateParams` and `SetupIntent`
  * Remove support for `preview` on `TaxCalculationCreateParams`
  * Change type of `Tax.Calculation.line_items[]` from `LineItem` to `Tax.CalculationLineItem`
  * Change type of `Tax.Transaction.line_items[]` from `LineItem` to `Tax.TransactionLineItem`
  * Add support for `collect_inputs` on `Terminal.Reader.action`
  * Add support for new value `collect_inputs` on enum `Terminal.Reader.action.type`

## 11.16.0-beta.1 - 2023-03-17
* [#1713](https://github.com/stripe/stripe-node/pull/1713) API Updates
  * Add support for `create_from_calculation` method on resource `Tax.Transaction`
  * Change type of `Invoice.applies_to` from `QuotesResourceQuoteLinesAppliesTo | null` to `QuotesResourceQuoteLinesAppliesTo`
  * Add support for `paypal` on `Mandate.payment_method_details`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
  * Add support for new value `automatic_async` on enums `Order.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, `Order.payment.settings.payment_method_options.card.capture_method`, `OrderCreateParams.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, `OrderCreateParams.payment.settings.payment_method_options.card.capture_method`, `OrderUpdateParams.payment.settings.payment_method_options.afterpay_clearpay.capture_method`, and `OrderUpdateParams.payment.settings.payment_method_options.card.capture_method`
  * Add support for `setup_future_usage` on `Order.payment.settings.payment_method_options.paypal`, `OrderCreateParams.payment.settings.payment_method_options.paypal`, `OrderUpdateParams.payment.settings.payment_method_options.paypal`, `PaymentIntent.payment_method_options.paypal`, `PaymentIntentConfirmParams.payment_method_options.paypal`, `PaymentIntentCreateParams.payment_method_options.paypal`, and `PaymentIntentUpdateParams.payment_method_options.paypal`
  * Change `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.hosted_instructions_url`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.expires_at`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_png`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_svg`, `PaymentIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.hosted_instructions_url`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.mobile_auth_url`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.expires_at`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_png`, `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code.image_url_svg`, and `SetupIntent.next_action.cashapp_handle_redirect_or_display_qr_code.qr_code` to be required
  * Remove support for `applies_to` on `QuotePreviewInvoiceLinesParams`
  * Add support for `shipping_cost` on `Tax.Calculation`, `Tax.Transaction`, `TaxCalculationCreateParams`, and `TaxTransactionCreateReversalParams`
  * Add support for `tax_breakdown` on `Tax.Calculation`
  * Remove support for `tax_summary` on `Tax.Calculation`

## 11.15.0-beta.1 - 2023-03-09
* [#1705](https://github.com/stripe/stripe-node/pull/1705) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Remove support for `list_transactions` method on resource `Tax.Transaction`
  * Add support for `amendment_start` and `timestamp` on `SubscriptionScheduleAmendParams.prebilling[].bill_from`
  * Change type of `SubscriptionScheduleAmendParams.prebilling[].bill_from.type` from `literal('now')` to `enum('amendment_start'|'now'|'timestamp')`
  * Change type of `SubscriptionSchedule.applies_to` from `QuotesResourceQuoteLinesAppliesTo | null` to `QuotesResourceQuoteLinesAppliesTo`
  * Add support for new value `lease_tax` on enum `Tax.Calculation.tax_summary[].tax_rate_details.tax_type`
  * Add support for `tax_behavior` on `Tax.Settings.defaults` and `TaxSettingUpdateParams.defaults`

## 11.14.0-beta.2 - 2023-03-03
* [#1698](https://github.com/stripe/stripe-node/pull/1698) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `update_behavior` on `Subscription.prebilling`, `SubscriptionCreateParams.prebilling`, `SubscriptionSchedule.prebilling`, `SubscriptionScheduleCreateParams.prebilling`, `SubscriptionScheduleUpdateParams.prebilling`, and `SubscriptionUpdateParams.prebilling`
  * Add support for `prebilling` on `SubscriptionScheduleAmendParams`
  * Add support for `taxability_override` on `Tax.Calculation.customer_details`, `Tax.Transaction.customer_details`, and `TaxCalculationCreateParams.customer_details`
  * Add support for `tax_summary` on `Tax.Calculation`
  * Remove support for `tax_breakdown` on `Tax.Calculation`

## 11.14.0-beta.1 - 2023-03-02
* [#1697](https://github.com/stripe/stripe-node/pull/1697) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for new resources `Issuing.CardBundle` and `Issuing.CardDesign`
  * Add support for `list` and `retrieve` methods on resource `CardBundle`
  * Add support for `list`, `retrieve`, and `update` methods on resource `CardDesign`
  * Remove support for `controller` on `AccountUpdateParams`
  * Add support for `card_design` on `Issuing.Card` and `IssuingCardCreateParams`
  * Add support for new values `issuing_card_design.activated`, `issuing_card_design.deactivated`, and `issuing_card_design.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 11.13.0-beta.1 - 2023-02-23
* [#1690](https://github.com/stripe/stripe-node/pull/1690) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `manual_entry` on `Checkout.Session.payment_method_options.us_bank_account.financial_connections`, `PaymentIntent.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentConfirmParams.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentCreateParams.payment_method_options.us_bank_account.financial_connections`, `PaymentIntentUpdateParams.payment_method_options.us_bank_account.financial_connections`, `SetupIntent.payment_method_options.us_bank_account.financial_connections`, `SetupIntentConfirmParams.payment_method_options.us_bank_account.financial_connections`, `SetupIntentCreateParams.payment_method_options.us_bank_account.financial_connections`, and `SetupIntentUpdateParams.payment_method_options.us_bank_account.financial_connections`
  * Add support for new value `igst` on enum `Tax.Calculation.tax_breakdown[].tax_rate_details.tax_type`
  * Change `TaxTransactionCreateParams.reference` to be required
  * Add support for new values `capital.financing_offer.accepted`, `capital.financing_offer.canceled`, `capital.financing_offer.created`, `capital.financing_offer.expired`, `capital.financing_offer.fully_repaid`, `capital.financing_offer.paid_out`, `capital.financing_offer.rejected`, and `capital.financing_offer.replacement_created` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 11.12.0-beta.1 - 2023-02-16
* [#1686](https://github.com/stripe/stripe-node/pull/1686) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Change type of `Quote.status_details.canceled` from `QuotesResourceStatusDetailsCanceledStatusDetails | null` to `QuotesResourceStatusDetailsCanceledStatusDetails`
  * Change type of `Quote.status_details.stale` from `QuotesResourceStatusDetailsStaleStatusDetails | null` to `QuotesResourceStatusDetailsStaleStatusDetails`
  * Change `Quote.status_details.canceled` and `Quote.status_details.stale` to be optional
  * Remove support for `reference` on `Tax.Calculation` and `TaxCalculationCreateParams`
  * Add support for `reference` on `TaxTransactionCreateParams`

## 11.11.0-beta.1 - 2023-02-13
* [#1676](https://github.com/stripe/stripe-node/pull/1676) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `currency_conversion` on `Checkout.Session`
  * Add support for `limits` on `FinancialConnections.Session` and `FinancialConnectionsSessionCreateParams`
  * Remove support for `enabled` on `FinancialConnectionsSessionCreateParams.manual_entry`

## 11.10.0-beta.1 - 2023-02-02
* [#1671](https://github.com/stripe/stripe-node/pull/1671) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for new resource `FinancialConnections.Transaction`
  * Add support for `list` method on resource `Transaction`
  * Add support for `prefetch` on `.payment_method_options.us_bank_account.financial_connections` across several APIs
  * Change `CheckoutSessionCreateParams.payment_method_options.paypal.currency`, `IssuingCardholderCreateParams.individual.first_name`, `IssuingCardholderCreateParams.individual.last_name`, `IssuingCardholderUpdateParams.individual.first_name`, `IssuingCardholderUpdateParams.individual.last_name`, and `Quote.subscription_data_overrides[].bill_on_acceptance` to be optional
  * Add support for new values `inferred_balances` and `transactions` on enum `FinancialConnectionsAccountRefreshParams.features[]`
  * Add support for `inferred_balances_refresh`, `subscriptions`, and `transaction_refresh` on `FinancialConnections.Account`
  * Add support for `manual_entry` on `FinancialConnections.Session` and `FinancialConnectionsSessionCreateParams`
  * Add support for `status_details` and `status` on `FinancialConnections.Session`
  * Add support for new value `ownership` on enums `Invoice.payment_settings.payment_method_options.us_bank_account.financial_connections.permissions[]` and `Subscription.payment_settings.payment_method_options.us_bank_account.financial_connections.permissions[]`
  * Add support for `account_number` on `PaymentMethod.us_bank_account`
  * Remove support for `id` on `QuoteCreateParams.lines[].starts_at.line_ends_at`
  * Add support for new values `customer.subscription.paused`, `customer.subscription.resumed`, `financial_connections.account.refreshed_inferred_balances`, `financial_connections.account.refreshed_ownership`, `financial_connections.account.refreshed_transactions`, and `financial_connections.session.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

## 11.9.0-beta.1 - 2023-01-26
* [#1666](https://github.com/stripe/stripe-node/pull/1666) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `billing_agreement_id` on `CheckoutSessionCreateParams.payment_method_options.paypal`
  * Add support for `list_transactions` method on resource `Tax.Transaction`
  * Change type of `QuoteUpdateParams.subscription_data_overrides` from `array(create_specs)` to `emptyStringable(array(update_specs))`

## 11.8.0-beta.1 - 2023-01-19
* [#1662](https://github.com/stripe/stripe-node/pull/1662) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `Tax.Settings` resource.

## 11.7.0-beta.2 - 2023-01-12
* [#1653](https://github.com/stripe/stripe-node/pull/1653) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for new resource `Tax.Registration`
  * Add support for `create`, `list`, and `update` methods on resource `Registration`
  * Add support for `controller` on `AccountCreateParams` and `AccountUpdateParams`
  * Add support for `application` and `dashboard` on `Account.controller`
  * Change type of `Quote.subscription_data_overrides[].proration_behavior` from `enum('always_invoice'|'create_prorations'|'none')` to `enum('always_invoice'|'create_prorations'|'none') | null`
  * Remove support for `timestamp` on `QuoteLine.actions[].add_discount.discount_end`
  * Change type of `QuoteLine.actions[].add_discount.discount_end.type` from `literal('timestamp')` to `literal('line_ends_at')`
  * Remove support for `index` on `QuoteLine.actions[].add_item.discounts[]`, `QuoteLine.actions[].remove_discount`, `QuoteLine.actions[].set_discounts[]`, `QuoteLine.actions[].set_items[].discounts[]`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts[]`, `SubscriptionSchedule.phases[].discounts[]`, and `SubscriptionSchedule.phases[].items[].discounts[]`
  * Change `QuoteLine.actions[].add_discount.index` to be required
  * Add support for new values `quote.accepting`, `quote.reestimated`, and `quote.stale` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`

  * Change `quote.draft_quote` implementation from hitting `POST /v1/quotes/{quote}/draft` to `POST /v1/quotes/{quote}/mark_draft`

## 11.7.0-beta.1 - 2023-01-05
* [#1648](https://github.com/stripe/stripe-node/pull/1648) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for `mark_stale_quote` method on resource `Quote`
  * Add support for `duration` and `line_ends_at` on `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_until`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_until`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`
  * Remove support for `line_starts_at` on `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_until`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_until`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_until`
  * Add support for `metadata` on `Terminal.Reader.action.refund_payment` and `TerminalReaderRefundPaymentParams`

## 11.6.0-beta.1 - 2022-12-22
* [#1643](https://github.com/stripe/stripe-node/pull/1643) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Move `stripe.taxCalculations` to `stripe.tax.calculations` and `stripe.taxTransactions` to `stripe.tax.transactions`.

## 11.5.0-beta.1 - 2022-12-15
* [#1640](https://github.com/stripe/stripe-node/pull/1640) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for new resources `QuoteLine`, `TaxCalculation`, and `TaxTransaction`
  * Add support for `create` and `list_line_items` methods on resource `TaxCalculation`
  * Add support for `create_reversal`, `create`, and `retrieve` methods on resource `TaxTransaction`

## 11.3.0-beta.1 - 2022-12-08
This release changes the pinned API version to `2022-11-15`.

* [#1635](https://github.com/stripe/stripe-node/pull/1635) API Updates for beta branch
  * Updated stable APIs to the latest version
* [#1633](https://github.com/stripe/stripe-node/pull/1633) API Updates for beta branch
  * Updated stable APIs to the latest version

## 10.18.0-beta.1 - 2022-11-10
* [#1616](https://github.com/stripe/stripe-node/pull/1616) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add `discount_end` to `Discount`.
  * Add `url` to `MerchantData`.

## 10.16.0-beta.2 - 2022-11-02
* [#1598](https://github.com/stripe/stripe-node/pull/1598) API Updates for beta branch
  * Updated beta APIs to the latest stable version
  * Add support for `cashappPayments` and `zipPayments` on `Account`.
  * Add support for `cashapp` and `zip` on `Charge`, `PaymentMethod`.
  * Add support for `trialSettings` on `SubscriptionSchedule`.

## 10.16.0-beta.1 - 2022-10-21
* [#1589](https://github.com/stripe/stripe-node/pull/1589) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for new value `revoked` on enum `CapitalFinancingOfferListParams.status`
  * Add support for `paypal` on `Charge.payment_method_details` and `Source`
  * Add support for `network_data` on `Issuing.Transaction`
  * Add support for new value `paypal` on enum `Source.type`
  * Add support for `billing_cycle_anchor` on `SubscriptionScheduleAmendParams.amendments[]`

## 10.15.0-beta.1 - 2022-10-14
* Add support for new value `upcoming_invoice` on enum `SubscriptionScheduleAmendParams.amendments[].amendment_end.type`
* Add support for new values `schedule_end` and `upcoming_invoice` on enum `SubscriptionScheduleAmendParams.amendments[].amendment_start.type`
* Add support for `schedule_settings` on `SubscriptionScheduleAmendParams`

## 10.14.0-beta.1 - 2022-10-07
* [#1572](https://github.com/stripe/stripe-node/pull/1572) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add `reference_id` to `Paypal` interface.

## 10.12.0-beta.1 - 2022-09-26
* [#1561](https://github.com/stripe/stripe-node/pull/1561) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add `FinancingOffer`, `FinancingSummary` and `FinancingTransaction` resources.

## 10.6.0-beta.1 - 2022-08-26
* [#1529](https://github.com/stripe/stripe-node/pull/1529) API Updates for beta branch
  * Updated stable APIs to the latest version
  * Add support for the beta [Gift Card API](https://stripe.com/docs/gift-cards).

## 10.4.0-beta.1 - 2022-08-23
* [#1521](https://github.com/stripe/stripe-node/pull/1521) fix: Update FetchHttpClient to send empty string for empty POST/PUT/PATCH requests.
* [#1523](https://github.com/stripe/stripe-node/pull/1523) API Updates for beta branch
  - Updated stable APIs to the latest version
  - `Stripe-Version` beta headers are not pinned by-default and need to be manually specified, please refer to [beta SDKs README section](https://github.com/stripe/stripe-node/blob/master/README.md#beta-sdks)

## 10.3.0-beta.1 - 2022-08-11
* [#1511](https://github.com/stripe/stripe-node/pull/1511) API Updates for beta branch
  - Updated stable APIs to the latest version
  - Add refund_payment method to Terminal resource

## 10.1.0-beta.1 - 2022-08-03
* [#1498](https://github.com/stripe/stripe-node/pull/1498) API Updates for beta branch
  - Updated stable APIs to the latest version
  - Added the `Order` resource support

## 9.15.0-beta.1 - 2022-07-22
* [#1479](https://github.com/stripe/stripe-node/pull/1479) API Updates for beta branch
  - Updated stable APIs to the latest version
  - Add `Price.migrate_to` property
  - Add `SubscriptionSchedule.amend` method.
  - Add `Discount.subscription_item` property.
  - Add `Quote.subscription_data.billing_behavior`, `billing_cycle_anchor`, `end_behavior`, `from_schedule`, `from_subscription`, `prebilling`, `proration_behavior` properties.
  - Add `phases` parameter to `Quote.create`
  - Add `Subscription.discounts`, `prebilling` properties.
* [#1483](https://github.com/stripe/stripe-node/pull/1483) API Updates for beta branch
  - Updated stable APIs to the latest version
  - Add `QuotePhase` resource
* [#1485](https://github.com/stripe/stripe-node/pull/1485) API Updates for beta branch
  - Updated stable APIs to the latest version

## 9.13.0-beta.1 - 2022-07-07
* [#1445](https://github.com/stripe/stripe-node/pull/1445) Support updating pre-release versions
* [#1457](https://github.com/stripe/stripe-node/pull/1457) Use the generated API version
* [#1442](https://github.com/stripe/stripe-node/pull/1442) API Updates
  * Add support for `network_details` method on resource `ReceivedCredits`/`ReceivedDebits`
* [#1451](https://github.com/stripe/stripe-node/pull/1451) API Updates
  - Updated stable APIs to the latest version
* [#1469](https://github.com/stripe/stripe-node/pull/1469) API Updates for beta branch
  - Include `server_side_confirmation_beta=v1` beta
  - Add `secretKeyConfirmation` to `PaymentIntent`

## 9.8.0-beta.1 - 2022-06-08
* [#1442](https://github.com/stripe/stripe-node/pull/1442) API Updates
  * Add support for `network_details` method on resource `ReceivedCredits`/`ReceivedDebits`
