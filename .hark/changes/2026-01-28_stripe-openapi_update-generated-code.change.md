---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2552
is_stripe_api_change: true
released_in_version: 20.4.0-beta.1
---

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
