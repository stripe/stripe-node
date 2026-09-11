---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1910
is_stripe_api_change: true
released_in_version: 13.9.0-beta.1
---

* Rename resources `Issuing.CardDesign` and `Issuing.CardBundle` to `Issuing.PersonalizationDesign` and `Issuing.PhysicalBundle`
* Add support for new values `capital_financing_offer` and `capital_financing_reporting` on enum `AccountLinkCreateParams.type`
* Add support for `features` on `AccountSession.components.payment_details`, `AccountSession.components.payments`, `AccountSession.components.payouts`, `AccountSessionCreateParams.components.account_onboarding`, `AccountSessionCreateParams.components.payment_details`, `AccountSessionCreateParams.components.payments`, and `AccountSessionCreateParams.components.payouts`
* Change `ConfirmationToken.payment_method_preview.us_bank_account.financial_connections_account` and `ConfirmationToken.payment_method_preview.us_bank_account.status_details` to be required
* Add support for `reason` on `Event`
