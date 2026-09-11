---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2137
is_stripe_api_change: true
released_in_version: 16.6.0-beta.1
---

* Add support for new resources `Billing.AlertTriggered`, `Billing.Alert`, and `Tax.Association`
* Add support for `activate`, `archive`, `create`, `deactivate`, `list`, and `retrieve` methods on resource `Alert`
* Add support for `find` method on resource `Association`
* Add support for `capital` on `Account.settings`, `AccountCreateParams.settings`, and `AccountUpdateParams.settings`
* Add support for new values `issuing.account_closed_for_not_providing_business_model_clarification`, `issuing.account_closed_for_not_providing_url_clarification`, and `issuing.account_closed_for_not_providing_use_case_clarification` on enum `AccountNotice.reason`
* Add support for `async_workflows` on `PaymentIntentCaptureParams`, `PaymentIntentConfirmParams`, `PaymentIntentCreateParams`, `PaymentIntentDecrementAuthorizationParams`, `PaymentIntentIncrementAuthorizationParams`, `PaymentIntentUpdateParams`, and `PaymentIntent`
* Add support for `payto` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for `display_name` on `Treasury.FinancialAccountCreateParams`, `Treasury.FinancialAccountUpdateParams`, and `Treasury.FinancialAccount`
