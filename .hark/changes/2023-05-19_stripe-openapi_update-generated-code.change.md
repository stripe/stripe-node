---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/1787
is_stripe_api_change: true
released_in_version: 12.6.0
---

* Add support for `subscription_update_confirm` and `subscription_update` on `BillingPortal.Session.flow` and `BillingPortal.SessionCreateParams.flow_data`
* Add support for new values `subscription_update_confirm` and `subscription_update` on enums `BillingPortal.Session.flow.type` and `BillingPortal.SessionCreateParams.flow_data.type`
* Add support for `link` on `Charge.payment_method_details.card.wallet` and `PaymentMethod.card.wallet`
* Add support for `buyer_id` and `cashtag` on `Charge.payment_method_details.cashapp` and `PaymentMethod.cashapp`
* Add support for new values `amusement_tax` and `communications_tax` on enums `TaxRate.tax_type`, `TaxRateCreateParams.tax_type`, and `TaxRateUpdateParams.tax_type`
