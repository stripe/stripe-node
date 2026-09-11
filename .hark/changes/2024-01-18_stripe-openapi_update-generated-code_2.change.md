---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1993
is_stripe_api_change: true
released_in_version: 14.15.0-beta.1
---

* Add support for new value `nn` on enum `ConfirmationToken.payment_method_preview.ideal.bank`
* Add support for new value `NNBANL2G` on enum `ConfirmationToken.payment_method_preview.ideal.bic`
* Change `Invoice.automatic_tax.liability`, `Invoice.issuer`, and `Subscription.automatic_tax.liability` to be required
