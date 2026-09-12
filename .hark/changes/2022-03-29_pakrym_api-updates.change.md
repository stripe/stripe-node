---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1386
is_stripe_api_change: true
released_in_version: 8.214.0
---

* Add support for `cancel_action`, `process_payment_intent`, `process_setup_intent`, and `set_reader_display` methods on resource `Terminal.Reader`
* Change `Charge.failure_balance_transaction`, `Invoice.payment_settings.payment_method_options.us_bank_account`, `PaymentIntent.next_action.verify_with_microdeposits.microdeposit_type`, `SetupIntent.next_action.verify_with_microdeposits.microdeposit_type`, and `Subscription.payment_settings.payment_method_options.us_bank_account` to be required
* Add support for `action` on `Terminal.Reader`
