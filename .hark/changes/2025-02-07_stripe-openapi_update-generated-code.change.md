---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2254
is_stripe_api_change: true
released_in_version: 17.7.0-beta.1
---

* Add support for `rejected_reason` on `Account.risk_controls`
* Add support for `product_tax_code_selector` on `AccountSessionCreateParams.components`
* Add support for `prices` on `Billing.CreditBalanceSummaryRetrieveParams.filter.applicability_scope`, `Billing.CreditGrant.applicability_config.scope`, and `Billing.CreditGrantCreateParams.applicability_config.scope`
* Change `Billing.CreditGrant.applicability_config.scope.price_type`, `Checkout.Session.collected_information.business_name`, `Checkout.Session.collected_information.email`, `Checkout.Session.collected_information.phone`, `Checkout.Session.collected_information.shipping_details`, and `Checkout.Session.collected_information.tax_ids` to be optional
* Add support for `brand_product` on `Charge.payment_method_details.amazon_pay.funding.card` and `Charge.payment_method_details.revolut_pay.funding.card`
* Add support for `restrictions` on `Checkout.Session.payment_method_options.card` and `Checkout.SessionCreateParams.payment_method_options.card`
* Change `Checkout.Session.discounts` to be required
* Change type of `TokenCreateParams.person.political_exposure` from `string` to `enum('existing'|'none')`
