---
title: Update generated code
pr_url: https://github.com/stripe/stripe-node/pull/2564
is_stripe_api_change: true
released_in_version: 20.3.0
---

* Add support for new resource `Radar.PaymentEvaluation`
* Add support for `create` method on resource `Radar.PaymentEvaluation`
* Add support for `adjustable_quantity` on `LineItem`
* Add support for new value `risk_reserved` on enum `BalanceTransaction.balance_type`
* Add support for new values `reserve_hold` and `reserve_release` on enum `BalanceTransaction.type`
* Add support for new values `2.3.0` and `2.3.1` on enums `Charge.payment_method_details.card.three_d_secure.version`, `PaymentIntentConfirmParams.payment_method_options.card.three_d_secure.version`, `PaymentIntentCreateParams.payment_method_options.card.three_d_secure.version`, `PaymentIntentUpdateParams.payment_method_options.card.three_d_secure.version`, `SetupAttempt.payment_method_details.card.three_d_secure.version`, `SetupIntentConfirmParams.payment_method_options.card.three_d_secure.version`, `SetupIntentCreateParams.payment_method_options.card.three_d_secure.version`, and `SetupIntentUpdateParams.payment_method_options.card.three_d_secure.version`
* Add support for new value `adyen` on enums `Charge.payment_method_details.ideal.bank`, `ConfirmationToken.payment_method_preview.ideal.bank`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.ideal.bank`, `PaymentAttemptRecord.payment_method_details.ideal.bank`, `PaymentIntentConfirmParams.payment_method_data.ideal.bank`, `PaymentIntentCreateParams.payment_method_data.ideal.bank`, `PaymentIntentUpdateParams.payment_method_data.ideal.bank`, `PaymentMethod.ideal.bank`, `PaymentMethodCreateParams.ideal.bank`, `PaymentRecord.payment_method_details.ideal.bank`, `SetupAttempt.payment_method_details.ideal.bank`, `SetupIntentConfirmParams.payment_method_data.ideal.bank`, `SetupIntentCreateParams.payment_method_data.ideal.bank`, and `SetupIntentUpdateParams.payment_method_data.ideal.bank`
* Add support for new value `ADYBNL2A` on enums `Charge.payment_method_details.ideal.bic`, `ConfirmationToken.payment_method_preview.ideal.bic`, `PaymentAttemptRecord.payment_method_details.ideal.bic`, `PaymentMethod.ideal.bic`, `PaymentRecord.payment_method_details.ideal.bic`, and `SetupAttempt.payment_method_details.ideal.bic`
* Add support for new value `pl_nip` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for new value `pl_nip` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Change `Invoice.payment_settings.payment_method_options.payto` and `Subscription.payment_settings.payment_method_options.payto` to be required
* Add support for `enforce_arithmetic_validation` on `PaymentIntentCaptureParams.amount_details`, `PaymentIntentConfirmParams.amount_details`, `PaymentIntentCreateParams.amount_details`, `PaymentIntentIncrementAuthorizationParams.amount_details`, and `PaymentIntentUpdateParams.amount_details`
* Add support for `error` on `PaymentIntent.amount_details`
* Remove support for `bgn` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for `topup` on `Treasury.ReceivedDebit.linked_flows`
* Add support for `contact_phone` on `V2.Core.AccountCreateParams`, `V2.Core.AccountTokenCreateParams`, `V2.Core.AccountUpdateParams`, and `V2.Core.Account`
* Add support for `registration_date` on `V2.Core.Account.identity.business_details`, `V2.Core.AccountCreateParams.identity.business_details`, `V2.Core.AccountTokenCreateParams.identity.business_details`, and `V2.Core.AccountUpdateParams.identity.business_details`
* Add support for new value `gb_vat` on enums `V2.Core.Account.identity.business_details.id_numbers[].type`, `V2.Core.AccountCreateParams.identity.business_details.id_numbers[].type`, `V2.Core.AccountTokenCreateParams.identity.business_details.id_numbers[].type`, and `V2.Core.AccountUpdateParams.identity.business_details.id_numbers[].type`
* Add support for error code `request_blocked` on `Invoice.last_finalization_error`, `PaymentIntent.last_payment_error`, `SetupAttempt.setup_error`, `SetupIntent.last_setup_error`, and `StripeError`
