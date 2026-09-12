---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2774
is_breaking: true
is_stripe_api_change: true
released_in_version: 22.4.0-alpha.2
---

* Add support for new resources `Crypto.CustomerConsumerWallet`, `Crypto.CustomerPaymentToken`, `Crypto.Customer`, `Crypto.OnrampSession`, and `Crypto.OnrampTransactionLimits`
* Add support for `list` and `retrieve` methods on resource `Crypto.Customer`
* Add support for `checkout`, `create`, `list`, `quote`, and `retrieve` methods on resource `Crypto.OnrampSession`
* Add support for `retrieve` method on resource `Crypto.OnrampTransactionLimits`
* Add support for `redaction` on `Card`, `Charge`, `Checkout.Session`, `Customer`, `Issuing.Authorization`, `Issuing.Card`, `Issuing.Cardholder`, `Issuing.Dispute`, `Issuing.Transaction`, `PaymentIntent`, `PaymentMethod`, `SetupIntent`, `Source`, and `Token`
* ⚠️  Add support for new value `tax_fund` on enum `BalanceTransaction.type`
* Change `Billing.CreditGrant.priority` to be required
* Add support for `disclaimer_variant` on `Capital.FinancingOffer` and `Capital.FinancingSummary.details`
* Add support for `buyer_id` on `Charge.payment_method_details.bizum`, `ConfirmationToken.payment_method_preview.bizum`, `ConfirmationToken.payment_method_preview.blik`, `PaymentAttemptRecord.payment_method_details.bizum`, `PaymentMethod.bizum`, `PaymentMethod.blik`, `PaymentRecord.payment_method_details.bizum`, `SharedPayment.GrantedToken.payment_method_details.bizum`, and `SharedPayment.GrantedToken.payment_method_details.blik`
* Add support for `electronic_commerce_indicator` and `transaction_link_id` on `Charge.payment_method_details.card`
* Add support for `amount_received` and `amount_requested` on `Charge.payment_method_details.crypto`, `PaymentAttemptRecord.payment_method_details.crypto`, and `PaymentRecord.payment_method_details.crypto`
* ⚠️  Add support for new value `sui` on enums `Charge.payment_method_details.crypto.network`, `PaymentAttemptRecord.payment_method_details.crypto.network`, and `PaymentRecord.payment_method_details.crypto.network`
* ⚠️  Add support for new value `usdsui` on enums `Charge.payment_method_details.crypto.token_currency`, `PaymentAttemptRecord.payment_method_details.crypto.token_currency`, and `PaymentRecord.payment_method_details.crypto.token_currency`
* Add support for `fingerprint` on `Charge.payment_method_details.gift_card`, `Charge.payment_method_details.pix`, `ConfirmationToken.payment_method_preview.pix`, `PaymentAttemptRecord.payment_method_details.gift_card`, `PaymentMethod.pix`, `PaymentRecord.payment_method_details.gift_card`, `SetupAttempt.payment_method_details.pix`, and `SharedPayment.GrantedToken.payment_method_details.pix`
* Add support for `address_collection_precision` on `Checkout.SessionCreateParams.automatic_tax`
* Add support for `sunbit` on `Checkout.Session.payment_method_options`, `Checkout.SessionCreateParams.payment_method_options`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
* Add support for `billing_cycle_anchor_config` on `Checkout.SessionCreateParams.subscription_data`
* Add support for `subscription` on `Checkout.Session.items[]`
* Add support for `wechat_pay` on `Checkout.Session.payment_method_options`
* Add support for `mastercard_compliance` on `Dispute.evidence.enhanced_evidence`, `Dispute.evidence_details.enhanced_eligibility`, and `DisputeUpdateParams.evidence.enhanced_evidence`
* ⚠️  Add support for new value `mastercard_compliance` on enum `Dispute.enhanced_eligibility_types`
* Add support for `active` on `FinancialConnections.Account.status_details` and `FinancialConnections.Authorization.status_details`
* Change type of `FinancialConnections.SessionCreateParams.limits.accounts` from `longInteger` to `emptyable(longInteger)`
* ⚠️  Remove support for `deactivation` on `GiftCardOperation`
* ⚠️  Remove support for value `deactivation` from enum `GiftCardOperation.type`
* ⚠️  Add support for new value `validated` on enum `Identity.VerificationSession.redaction.status`
* Add support for new value `satispay` on enums `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Add support for `pause` on `InvoiceCreatePreviewParams.subscription_details`
* ⚠️  Add support for new value `satispay` on enums `Invoice.payment_settings.payment_method_types`, `QuotePreviewInvoice.payment_settings.payment_method_types`, and `Subscription.payment_settings.payment_method_types`
* Add support for `merchant_amount_exchange_rate` on `Issuing.Authorization` and `Issuing.Transaction`
* Add support for `device_id` on `Issuing.Authorization.token_details.network_data.device` and `Issuing.Token.network_data.device`
* Add support for `program` on `Issuing.Card`
* Add support for `payment_method_details` on `PaymentAttemptRecordReportFailedParams` and `PaymentRecordReportPaymentAttemptFailedParams`
* Add support for `reason` on `PaymentAttemptRecordReportRefundParams` and `PaymentRecordReportRefundParams`
* ⚠️  Remove support for `stored_credential_usage` on `PaymentAttemptRecord.payment_method_details.card` and `PaymentRecord.payment_method_details.card`
* ⚠️  Change `PaymentAttemptRecord.payment_method_details.card.description` and `PaymentRecord.payment_method_details.card.description` to be optional
* ⚠️  Change `PaymentAttemptRecord.payment_method_details.card.iin` and `PaymentRecord.payment_method_details.card.iin` to be optional
* ⚠️  Change `PaymentAttemptRecord.payment_method_details.card.issuer` and `PaymentRecord.payment_method_details.card.issuer` to be optional
* Add support for `amount_reconciliation` on `PaymentIntent.payment_method_options.crypto`, `PaymentIntentConfirmParams.payment_method_options.crypto`, `PaymentIntentCreateParams.payment_method_options.crypto`, and `PaymentIntentUpdateParams.payment_method_options.crypto`
* Add support for `setup_future_usage` on `PaymentIntent.payment_method_options.satispay`, `PaymentIntentConfirmParams.payment_method_options.satispay`, `PaymentIntentCreateParams.payment_method_options.satispay`, and `PaymentIntentUpdateParams.payment_method_options.satispay`
* Add support for `release_details` on `Reserve.Hold`
* Add support for `satispay` on `SetupAttempt.payment_method_details`
* Add support for `custom_fields`, `description`, and `footer` on `Subscription.invoice_settings`, `SubscriptionCreateParams.invoice_settings`, and `SubscriptionUpdateParams.invoice_settings`
* Add support for `payment_method_options` and `payment_method` on `TopupCreateParams`
* ⚠️  Remove support for value `invoice_payment.detached` from enums `WebhookEndpointCreateParams.enabled_events` and `WebhookEndpointUpdateParams.enabled_events`
* Add support for new value `2026-06-24.dahlia` on enum `WebhookEndpointCreateParams.api_version`
* Add support for `connect_permissions` and `permissions` on `V2.Iam.ApiKeyCreateParams`, `V2.Iam.ApiKeyUpdateParams`, and `V2.Iam.ApiKey`
* Add support for `credit` on `V2.MoneyManagement.FinancialAccount`
* ⚠️  Add support for new value `credit` on enum `V2.MoneyManagement.FinancialAccount.type`
* Add support for new value `currency_required` on enum `V2.MoneyManagement.PayoutIntent.next_action.handle_failure.failure_reason`
* Add support for new values `issuing_authorization`, `issuing_transaction`, and `platform_funded_credit_transaction` on enums `V2.MoneyManagement.Transaction.category` and `V2.MoneyManagement.TransactionEntry.transaction_details.category`
* Add support for `account`, `issuing_authorization`, `issuing_dispute`, and `issuing_transaction` on `V2.MoneyManagement.Transaction.flow` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow`
* Add support for new values `issuing_authorization`, `issuing_dispute`, and `issuing_transaction` on enums `V2.MoneyManagement.Transaction.flow.type` and `V2.MoneyManagement.TransactionEntry.transaction_details.flow.type`
* Add support for new value `credit` on enum `V2.MoneyManagement.FinancialAccountListParams.types`
* Change type of `V2.MoneyManagement.FinancialAccountCreateParams.type` from `literal('storage')` to `enum('credit'|'storage')`
* Add support for `expires_at` on `V2.Iam.ApiKeyCreateParams`
* Add support for error codes `anomalous_money_movement_request`, `failed_tax_calculation`, `financial_account_balance_does_not_support_currency`, `financial_account_capability_not_enabled`, and `financial_account_capability_restricted` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `QuotePreviewInvoice.last_finalization_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, `StripeError`, and `Terminal.Reader.action.api_error`
