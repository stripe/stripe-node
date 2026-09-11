---
title: API Updates
pr_link: https://github.com/stripe/stripe-node/pull/1439
is_stripe_api_change: true
released_in_version: 9.6.0
---

* Add support for `radar_options` on `ChargeCreateParams`, `Charge`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `account_holder_name`, `account_number`, `account_type`, `bank_code`, `bank_name`, `branch_code`, and `branch_name` on `FundingInstructions.bank_transfer.financial_addresses[].zengin` and `PaymentIntent.next_action.display_bank_transfer_instructions.financial_addresses[].zengin`
* Add support for new values `en-AU` and `en-NZ` on enums `OrderCreateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `OrderUpdateParams.payment.settings.payment_method_options.klarna.preferred_locale`, `PaymentIntentConfirmParams.payment_method_options.klarna.preferred_locale`, `PaymentIntentCreateParams.payment_method_options.klarna.preferred_locale`, and `PaymentIntentUpdateParams.payment_method_options.klarna.preferred_locale`
* Change type of `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.type` and `PaymentIntent.payment_method_options.customer_balance.bank_transfer.type` from `enum` to `literal('jp_bank_transfer')`
  * This is technically breaking in Typescript, but now accurately represents the behavior that was allowed by the server. We haven't historically treated breaking Typescript changes as requiring a major.
* Change `PaymentIntent.next_action.display_bank_transfer_instructions.hosted_instructions_url` to be required
* Add support for `network` on `SetupIntent.payment_method_options.card`
* Add support for new value `simulated_wisepos_e` on enums `Terminal.Reader.device_type` and `Terminal.ReaderListParams.device_type`
