---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1969
is_stripe_api_change: true
released_in_version: 14.9.0-beta.1
---

* Add support for `retrieve` method on resource `FinancialConnections.Transaction`
* Remove support for `issuing_card` and `issuing_cards_list` on `AccountSessionCreateParams.components`
* Add support for `payment_method_remove`, `payment_method_save`, and `payment_method_set_as_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
* Remove support for `payment_method_detach` and `payment_method_set_as_customer_default` on `CustomerSession.components.payment_element.features` and `CustomerSessionCreateParams.components.payment_element.features`
