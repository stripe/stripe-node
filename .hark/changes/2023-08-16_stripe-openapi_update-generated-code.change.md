---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1872
is_breaking: true
is_stripe_api_change: true
released_in_version: 13.0.0
---

* ⚠️Add support for new values `verification_directors_mismatch`, `verification_document_directors_mismatch`, `verification_extraneous_directors`, and `verification_missing_directors` on enums `Account.future_requirements.errors[].code`, `Account.requirements.errors[].code`, `BankAccount.future_requirements.errors[].code`, and `BankAccount.requirements.errors[].code`
* ⚠️Remove support for values `custom_account_update` and `custom_account_verification` from enum `AccountLinkCreateParams.type`
  * These values are not fully operational. Please use `account_update` and `account_onboarding` instead (see [API reference](https://stripe.com/docs/api/account_links/create#create_account_link-type)).
* ⚠️Remove support for `available_on` on `BalanceTransactionListParams`
  * Use of this parameter is discouraged. Suppress the Typescript error with `// @ts-ignore` or `any` if sending the parameter is still required.
* ⚠️Remove support for `alternate_statement_descriptors` and `dispute` on `Charge`
    * Use of these fields is discouraged.
* ⚠️Remove support for `destination` on `Charge`
  * Please use `transfer_data` or `on_behalf_of` instead.
* ⚠️Remove support for `shipping_rates` on `Checkout.SessionCreateParams`
  * Please use `shipping_options` instead.
* ⚠️Remove support for `coupon` and `trial_from_plan` on `Checkout.SessionCreateParams.subscription_data`
  * Please [migrate to the Prices API](https://stripe.com/docs/billing/migration/migrating-prices), or suppress the Typescript error with `// @ts-ignore` or `any` if sending the parameter is still required.
* ⚠️Remove support for value `card_present` from enums `CustomerListPaymentMethodsParams.type` and `PaymentMethodListParams.type`
  * This value was not fully operational.
* ⚠️Remove support for value `charge_refunded` from enum `Dispute.status`
  * This value was not fully operational.
* ⚠️Remove support for `blik` on `Mandate.payment_method_details`, `PaymentMethodUpdateParams`, `SetupAttempt.payment_method_details`, `SetupIntent.payment_method_options`, `SetupIntentConfirmParams.payment_method_options`, `SetupIntentCreateParams.payment_method_options`, and `SetupIntentUpdateParams.payment_method_options`
    * These fields were mistakenly released.
* ⚠️Remove support for `acss_debit`, `affirm`, `au_becs_debit`, `bacs_debit`, `cashapp`, `sepa_debit`, and `zip` on `PaymentMethodUpdateParams`
    * These fields are empty.
* ⚠️Remove support for `country` on `PaymentMethod.link`
    * This field was not fully operational.
* ⚠️Remove support for `recurring` on `PriceUpdateParams`
    * This property should be set on create only.
* ⚠️Remove support for `attributes`, `caption`, and `deactivate_on` on `ProductCreateParams`, `ProductUpdateParams`, and `Product`
  * These fields are not fully operational.
* ⚠️Add support for new value `2023-08-16` on enum `WebhookEndpointCreateParams.api_version`
