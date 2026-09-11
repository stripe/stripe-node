---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1995
is_stripe_api_change: true
released_in_version: 14.13.0
---

* Add support for providing `BankAccount`, `Card`, and `CardToken` details on the `external_account` parameter in `AccountUpdateParams`
* Add support for new value `nn` on enums `Charge.payment_method_details.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
* Add support for new value `NNBANL2G` on enums `Charge.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Change `CustomerSession.components.buy_button`, `CustomerSession.components.pricing_table`, and `Subscription.billing_cycle_anchor_config` to be required
* Add support for `issuer` on `InvoiceCreateParams`, `InvoiceUpcomingLinesParams`, `InvoiceUpcomingParams`, `InvoiceUpdateParams`, and `Invoice`
* Add support for `liability` on `Invoice.automatic_tax`, `InvoiceCreateParams.automatic_tax`, `InvoiceUpcomingLinesParams.automatic_tax`, `InvoiceUpcomingParams.automatic_tax`, `InvoiceUpdateParams.automatic_tax`, `Subscription.automatic_tax`, `SubscriptionCreateParams.automatic_tax`, and `SubscriptionUpdateParams.automatic_tax`
* Add support for `on_behalf_of` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Add support for `pin` on `Issuing.CardCreateParams`
* Add support for `revocation_reason` on `Mandate.payment_method_details.bacs_debit`
* Add support for `customer_balance` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `invoice_settings` on `SubscriptionCreateParams` and `SubscriptionUpdateParams`
