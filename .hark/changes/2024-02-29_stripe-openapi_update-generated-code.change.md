---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2029
is_stripe_api_change: true
released_in_version: 14.19.0
---

* Change `Identity.VerificationReport.type`, `SubscriptionSchedule.default_settings.invoice_settings.account_tax_ids`, `SubscriptionSchedule.phases[].invoice_settings.account_tax_ids`, and `TaxId.owner` to be required
* Change type of `Identity.VerificationSession.type` from `enum('document'|'id_number') | null` to `enum('document'|'id_number')`
* Add support for `number` on `InvoiceCreateParams` and `InvoiceUpdateParams`
* Add support for `enable_customer_cancellation` on `Terminal.Reader.action.process_payment_intent.process_config`, `Terminal.Reader.action.process_setup_intent.process_config`, `Terminal.ReaderProcessPaymentIntentParams.process_config`, and `Terminal.ReaderProcessSetupIntentParams.process_config`
* Add support for `refund_payment_config` on `Terminal.Reader.action.refund_payment` and `Terminal.ReaderRefundPaymentParams`
* Add support for `payment_method` on `TokenCreateParams.bank_account`
