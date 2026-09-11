---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1977
is_stripe_api_change: true
released_in_version: 14.11.0-beta.1
---

* Add support for `capital_financing_promotion` on `AccountSession.components` and `AccountSessionCreateParams.components`
* Add support for new value `shipping_address_invalid` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Change `FinancialConnections.Account.balance_refresh.next_refresh_available_at`, `FinancialConnections.Account.subscriptions`, and `FinancialConnections.Account.transaction_refresh` to be required
* Change type of `Invoice.issuer` and `SubscriptionSchedule.default_settings.invoice_settings.issuer` from `ConnectAccountReference | null` to `ConnectAccountReference`
* Change type of `PaymentLink.subscription_data.invoice_settings` from `PaymentLinksResourceSubscriptionDataInvoiceSettings | null` to `PaymentLinksResourceSubscriptionDataInvoiceSettings`
* Add support for `ship_from_details` on `Tax.CalculationCreateParams`, `Tax.Calculation`, and `Tax.Transaction`
