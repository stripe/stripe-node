---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2748
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.3.0
---

* Add support for `release_details` on `Reserve.Hold`
* ⚠️ Add support for new value `tax_fund` on enum `BalanceTransaction.type`
* Change `Billing.CreditGrant.priority` to be required
* Add support for `buyer_id` on `Charge.payment_method_details.bizum`, `ConfirmationToken.payment_method_preview.bizum`, `ConfirmationToken.payment_method_preview.blik`, `PaymentAttemptRecord.payment_method_details.bizum`, `PaymentMethod.bizum`, `PaymentMethod.blik`, and `PaymentRecord.payment_method_details.bizum`
* Add support for `transaction_link_id` on `Charge.payment_method_details.card`
* ⚠️ Add support for new value `sui` on enums `Charge.payment_method_details.crypto.network`, `PaymentAttemptRecord.payment_method_details.crypto.network`, and `PaymentRecord.payment_method_details.crypto.network`
* ⚠️ Add support for new value `usdsui` on enums `Charge.payment_method_details.crypto.token_currency`, `PaymentAttemptRecord.payment_method_details.crypto.token_currency`, and `PaymentRecord.payment_method_details.crypto.token_currency`
* Add support for `fingerprint` on `Charge.payment_method_details.pix`, `ConfirmationToken.payment_method_preview.pix`, `PaymentMethod.pix`, and `SetupAttempt.payment_method_details.pix`
* Add support for `sunbit` on `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
* Add support for `billing_cycle_anchor_config` on `Checkout.SessionCreateParams.subscription_data`
* Add support for `wechat_pay` on `Checkout.Session.payment_method_options`
* Add support for `mastercard_compliance` on `Dispute.evidence.enhanced_evidence`, `Dispute.evidence_details.enhanced_eligibility`, and `DisputeUpdateParams.evidence.enhanced_evidence`
* ⚠️ Add support for new value `mastercard_compliance` on enum `Dispute.enhanced_eligibility_types`
* Add support for `status_details` on `FinancialConnections.Account`
* ⚠️ Add support for new value `validated` on enum `Identity.VerificationSession.redaction.status`
* Add support for new value `satispay` on enums `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* ⚠️ Add support for new value `satispay` on enums `Invoice.payment_settings.payment_method_types` and `Subscription.payment_settings.payment_method_types`
* ⚠️ Remove support for `stored_credential_usage` on `PaymentAttemptRecord.payment_method_details.card` and `PaymentRecord.payment_method_details.card`
* ⚠️ Change `PaymentAttemptRecord.payment_method_details.card.description` and `PaymentRecord.payment_method_details.card.description` to be optional
* ⚠️ Change `PaymentAttemptRecord.payment_method_details.card.iin` and `PaymentRecord.payment_method_details.card.iin` to be optional
* ⚠️ Change `PaymentAttemptRecord.payment_method_details.card.issuer` and `PaymentRecord.payment_method_details.card.issuer` to be optional
* Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.satispay`, `PaymentIntentConfirmParams.payment_method_options.satispay`, `PaymentIntentCreateParams.payment_method_options.satispay`, and `PaymentIntentUpdateParams.payment_method_options.satispay`
* Change `PaymentRecordReportRefundParams.refunded` to be optional
* Add support for `satispay` on `SetupAttempt.payment_method_details`
* Add support for `custom_fields`, `description`, and `footer` on `Subscription.invoice_settings`, `SubscriptionCreateParams.invoice_settings`, and `SubscriptionUpdateParams.invoice_settings`
* Add support for `payment_method_options` and `payment_method` on `TopupCreateParams`
* Add support for new value `2026-06-24.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `mode` on `V2.Commerce.ProductCatalogImport`
* ⚠️ Add support for new value `promotion` on enum `V2.Commerce.ProductCatalogImport.feed_type`
* Add support for `sunbit_payments` on `V2.Core.Account.configuration.merchant.capabilities`, `V2.Core.AccountCreateParams.configuration.merchant.capabilities`, and `V2.Core.AccountUpdateParams.configuration.merchant.capabilities`
* Add support for `crypto_money_manager` and `money_manager` on `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* ⚠️ Remove support for `crypto_storer` and `storer` on `V2.Core.AccountUpdateParams.identity.attestations.terms_of_service`
* Add support for new value `promotion` on enum `V2.Commerce.ProductCatalogImportCreateParams.feed_type`
* ⚠️ Add support for new value `sunbit_payments` on enum `EventsV2CoreAccountIncludingConfigurationMerchantCapabilityStatusUpdatedEvent.updated_capability`
* Add support for error codes `anomalous_money_movement_request`, `failed_tax_calculation`, `financial_account_balance_does_not_support_currency`, `financial_account_capability_not_enabled`, and `financial_account_capability_restricted` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, `StripeError`, and `Terminal.Reader.action.api_error`
