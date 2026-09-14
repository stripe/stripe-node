---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/1957
is_stripe_api_change: true
released_in_version: 14.5.0
---

* Add support for `bacs_debit_payments` on `AccountCreateParams.settings` and `AccountUpdateParams.settings`
* Add support for `service_user_number` on `Account.settings.bacs_debit_payments`
* Change type of `Account.settings.bacs_debit_payments.display_name` from `string` to `string | null`
* Add support for `capture_before` on `Charge.payment_method_details.card`
* Add support for `paypal` on `Checkout.Session.payment_method_options`
* Add support for `tax_amounts` on `CreditNoteCreateParams.lines[]`, `CreditNotePreviewLinesParams.lines[]`, and `CreditNotePreviewParams.lines[]`
* Add support for `network_data` on `Issuing.Transaction`
