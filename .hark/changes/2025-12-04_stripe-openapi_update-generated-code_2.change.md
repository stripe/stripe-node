---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2517
is_stripe_api_change: true
released_in_version: 20.1.0-alpha.4
---

* Add support for `check_scanning` on `AccountSession.components`
* Add support for `client` on `V2.Core.Event.reason.request`
* Add support for `stripe_balance_payment` on `V2.MoneyManagement.ReceivedCredit` and `V2.MoneyManagement.ReceivedDebit`
* Add support for new value `stripe_balance_payment` on enum `V2.MoneyManagement.ReceivedCredit.type`
* Add support for `balance_transfer` on `V2.MoneyManagement.ReceivedDebit`
* Add support for new values `balance_transfer` and `stripe_balance_payment` on enum `V2.MoneyManagement.ReceivedDebit.type`
* Add support for `include` on `V2.Core.EventListParams` and `V2.Core.EventRetrieveParams`
