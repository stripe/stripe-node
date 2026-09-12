---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/2206
is_stripe_api_change: true
released_in_version: 17.3.0-beta.1
---

* Add support for `alma_payments`, `gopay_payments`, `kakao_pay_payments`, `kr_card_payments`, `naver_pay_payments`, `payco_payments`, `qris_payments`, `samsung_pay_payments`, `shopeepay_payments`, `treasury_evolve`, `treasury_fifth_third`, and `treasury_goldman_sachs` on `Account.capabilities`, `AccountCreateParams.capabilities`, and `AccountUpdateParams.capabilities`
* Add support for `schedule_at_period_end` on `BillingPortal.Configuration.features.subscription_update`, `BillingPortal.ConfigurationCreateParams.features.subscription_update`, and `BillingPortal.ConfigurationUpdateParams.features.subscription_update`
* Change `BillingPortal.ConfigurationCreateParams.business_profile` to be optional
* Add support for `alma` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, `PaymentMethodConfiguration`, `PaymentMethodCreateParams`, `PaymentMethod`, `Refund.destination_details`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for `gopay`, `qris`, and `shopeepay` on `Charge.payment_method_details`, `ConfirmationToken.payment_method_preview`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data`, `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_data`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_data`, `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_data`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentMethodCreateParams`, `PaymentMethod`, `SetupIntentConfirmParams.payment_method_data`, `SetupIntentCreateParams.payment_method_data`, and `SetupIntentUpdateParams.payment_method_data`
* Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `Checkout.SessionCreateParams.payment_method_types[]`, `CustomerListPaymentMethodsParams.type`, `PaymentMethodCreateParams.type`, and `PaymentMethodListParams.type`
* Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `ConfirmationTokenCreateParams.testHelpers.payment_method_data.type`, `PaymentIntentConfirmParams.payment_method_data.type`, `PaymentIntentCreateParams.payment_method_data.type`, `PaymentIntentUpdateParams.payment_method_data.type`, `SetupIntentConfirmParams.payment_method_data.type`, `SetupIntentCreateParams.payment_method_data.type`, and `SetupIntentUpdateParams.payment_method_data.type`
* Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `ConfirmationToken.payment_method_preview.type` and `PaymentMethod.type`
* Add support for new value `auto` on enum `CustomerUpdateParams.tax.validate_location`
* Add support for `metadata` on `Forwarding.RequestCreateParams`
* Add support for new values `jp_credit_transfer`, `kakao_pay`, `kr_card`, `naver_pay`, and `payco` on enums `Invoice.payment_settings.payment_method_types[]`, `InvoiceCreateParams.payment_settings.payment_method_types[]`, `InvoiceUpdateParams.payment_settings.payment_method_types[]`, `Subscription.payment_settings.payment_method_types[]`, `SubscriptionCreateParams.payment_settings.payment_method_types[]`, and `SubscriptionUpdateParams.payment_settings.payment_method_types[]`
* Remove support for value `expired` from enums `Issuing.Authorization.status` and `Issuing.AuthorizationListParams.status`
* Add support for new values `alma`, `gopay`, `qris`, and `shopeepay` on enums `PaymentLink.payment_method_types[]`, `PaymentLinkCreateParams.payment_method_types[]`, and `PaymentLinkUpdateParams.payment_method_types[]`
* Add support for `amazon_pay` on `PaymentMethodDomain`
* Change `Tax.Calculation.tax_breakdown[].tax_rate_details.flat_amount`, `Tax.Calculation.tax_breakdown[].tax_rate_details.rate_type`, `TaxRate.flat_amount`, and `TaxRate.rate_type` to be required
* Add support for `external_reference` on `Tax.Form.payee` and `Tax.FormListParams.payee`
* Change type of `Tax.Form.payee.type` and `Tax.FormListParams.payee.type` from `literal('account')` to `enum('account'|'external_reference')`
* Add support for new values `au_serr`, `ca_mrdp`, `eu_dac7`, `gb_mrdp`, and `nz_mrdp` on enums `Tax.Form.type` and `Tax.FormListParams.type`
* Add support for `au_serr`, `ca_mrdp`, `eu_dac7`, `gb_mrdp`, and `nz_mrdp` on `Tax.Form`
* Add support for `pln` on `Terminal.Configuration.tipping`, `Terminal.ConfigurationCreateParams.tipping`, and `Terminal.ConfigurationUpdateParams.tipping`
* Add support for `bank` on `Treasury.FinancialAccountCreateParams.features.financial_addresses.aba`, `Treasury.FinancialAccountFeatures.financial_addresses.aba`, `Treasury.FinancialAccountUpdateFeaturesParams.financial_addresses.aba`, and `Treasury.FinancialAccountUpdateParams.features.financial_addresses.aba`
