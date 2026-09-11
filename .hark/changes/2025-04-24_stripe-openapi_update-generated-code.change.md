---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2311
is_stripe_api_change: true
released_in_version: 18.1.0
---

* Add support for `minority_owned_business_designation` on `Account.business_profile`, `AccountCreateParams.business_profile`, and `AccountUpdateParams.business_profile`
* Add support for `registration_date` on `Account.company`, `AccountCreateParams.company`, `AccountUpdateParams.company`, and `TokenCreateParams.account.company`
* Add support for `us_cfpb_data` on `AccountCreatePersonParams`, `AccountUpdatePersonParams`, `Person`, and `TokenCreateParams.person`
* Add support for new value `verification_legal_entity_structure_mismatch` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, `BankAccount.requirements.errors[].code`, `Capability.future_requirements.errors[].code`, `Capability.requirements.errors[].code`, `Person.future_requirements.errors[].code`, and `Person.requirements.errors[].code`
* Add support for new value `tax_id_prohibited` on enums `Invoice.last_finalization_error.code`, `PaymentIntent.last_payment_error.code`, `SetupAttempt.setup_error.code`, `SetupIntent.last_setup_error.code`, and `StripeError.code`
* Add support for `tax_id` on `Charge.billing_details`, `ConfirmationToken.payment_method_preview.billing_details`, `ConfirmationTokenCreateParams.testHelpers.payment_method_data.billing_details`, `PaymentIntentConfirmParams.payment_method_data.billing_details`, `PaymentIntentCreateParams.payment_method_data.billing_details`, `PaymentIntentUpdateParams.payment_method_data.billing_details`, `PaymentMethod.billing_details`, `PaymentMethodCreateParams.billing_details`, `PaymentMethodUpdateParams.billing_details`, `SetupIntentConfirmParams.payment_method_data.billing_details`, `SetupIntentCreateParams.payment_method_data.billing_details`, and `SetupIntentUpdateParams.payment_method_data.billing_details`
* Add support for `wallet_options` on `Checkout.SessionCreateParams` and `Checkout.Session`
* Add support for `provider` on `Checkout.Session.automatic_tax`, `Invoice.automatic_tax`, and `Quote.automatic_tax`
* Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `Checkout.Session.customer_details.tax_ids[].type`, `Invoice.customer_tax_ids[].type`, `Tax.Calculation.customer_details.tax_ids[].type`, `Tax.Transaction.customer_details.tax_ids[].type`, and `TaxId.type`
* Add support for `payment_method_options` on `ConfirmationTokenCreateParams.testHelpers`
* Add support for `installments` on `ConfirmationToken.payment_method_options.card`
* Add support for new values `aw_tin`, `az_tin`, `bd_bin`, `bf_ifu`, `bj_ifu`, `cm_niu`, `cv_nif`, `et_tin`, `kg_tin`, and `la_tin` on enums `CustomerCreateParams.tax_id_data[].type`, `CustomerCreateTaxIdParams.type`, `InvoiceCreatePreviewParams.customer_details.tax_ids[].type`, `Tax.CalculationCreateParams.customer_details.tax_ids[].type`, and `TaxIdCreateParams.type`
* Add support for `context` on `Event`
* Add support for new value `affirm` on enums `Invoice.payment_settings.payment_method_types`, `InvoiceCreateParams.payment_settings.payment_method_types`, `InvoiceUpdateParams.payment_settings.payment_method_types`, `Subscription.payment_settings.payment_method_types`, `SubscriptionCreateParams.payment_settings.payment_method_types`, and `SubscriptionUpdateParams.payment_settings.payment_method_types`
* Change type of `InvoiceLineItem.parent.subscription_item_details.subscription` from `string` to `string | null`
* Add support for `billie` on `PaymentIntent.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, `PaymentIntentCreateParams.payment_method_options`, and `PaymentIntentUpdateParams.payment_method_options`
* Add support for `pix` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `klarna` on `PaymentMethodDomain`
* Add support for `pending_reason` on `Refund`
* Change type of `Tax.CalculationLineItem.reference` from `string | null` to `string`
* Add support for `aw`, `az`, `bd`, `bf`, `bj`, `cm`, `cv`, `et`, `in`, `kg`, `la`, and `ph` on `Tax.Registration.country_options` and `Tax.RegistrationCreateParams.country_options`
* Add support for new value `2025-04-30.basil` on enum `WebhookEndpointCreateParams.api_version`
