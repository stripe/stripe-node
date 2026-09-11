---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1919
is_stripe_api_change: true
released_in_version: 13.11.0-beta.1
---

* Add support for new resources `AccountNotice` and `Issuing.CreditUnderwritingRecord`
* Add support for `list`, `retrieve`, and `update` methods on resource `AccountNotice`
* Add support for `correct`, `create_from_application`, `create_from_proactive_review`, `list`, `report_decision`, and `retrieve` methods on resource `CreditUnderwritingRecord`
* Change type of `Checkout.Session.automatic_tax.liability.account`, `Checkout.Session.invoice_creation.invoice_data.issuer.account`, `Invoice.automatic_tax.liability.account`, `Invoice.issuer.account`, `Quote.automatic_tax.liability.account`, `Quote.invoice_settings.issuer.account`, `Subscription.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.invoice_settings.issuer.account`, `SubscriptionSchedule.phases[].automatic_tax.liability.account`, and `SubscriptionSchedule.phases[].invoice_settings.issuer.account` from `expandable(Account) | null` to `expandable(Account)`
* Change `Checkout.Session.automatic_tax.liability.account`, `Checkout.Session.invoice_creation.invoice_data.issuer.account`, `Invoice.automatic_tax.liability.account`, `Invoice.issuer.account`, `Issuing.Transaction.network_data.processing_date`, `Quote.automatic_tax.liability.account`, `Quote.invoice_settings.issuer.account`, `Subscription.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.automatic_tax.liability.account`, `SubscriptionSchedule.default_settings.invoice_settings.issuer.account`, `SubscriptionSchedule.phases[].automatic_tax.liability.account`, and `SubscriptionSchedule.phases[].invoice_settings.issuer.account` to be optional
* Add support for new values `account_notice.created` and `account_notice.updated` on enum `Event.type`
* Add support for new values `local_amusement_tax` and `state_communications_tax` on enums `Tax.Registration.country_options.us.type` and `Tax.RegistrationCreateParams.country_options.us.type`
* Add support for new values `account_notice.created` and `account_notice.updated` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
