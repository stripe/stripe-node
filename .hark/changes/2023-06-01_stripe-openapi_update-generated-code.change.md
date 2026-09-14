---
title: Update generated code for beta
pr_url: https://github.com/stripe/stripe-node/pull/1801
is_stripe_api_change: true
released_in_version: 12.9.0-beta.1
---

* Add support for `subscription_details` on `Invoice`
* Add support for new values `aba` and `swift` on enums `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`, and `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.requested_address_types[]`
* Add support for new value `us_bank_transfer` on enums `Order.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, `OrderCreateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`, and `OrderUpdateParams.payment.settings.payment_method_options.customer_balance.bank_transfer.type`
* Add support for `set_pause_collection` on `QuoteCreateParams.lines[]`, `QuoteLine`, `QuoteUpdateParams.lines[]`, and `SubscriptionScheduleAmendParams.amendments[]`
* Add support for new value `pause_collection_start` on enums `Quote.subscription_data.bill_on_acceptance.bill_from.type`, `Quote.subscription_data_overrides[].bill_on_acceptance.bill_from.type`, `QuoteCreateParams.subscription_data.bill_on_acceptance.bill_from.type`, `QuoteCreateParams.subscription_data_overrides[].bill_on_acceptance.bill_from.type`, `QuoteUpdateParams.subscription_data.bill_on_acceptance.bill_from.type`, and `QuoteUpdateParams.subscription_data_overrides[].bill_on_acceptance.bill_from.type`
* Add support for `pause_collection` on `SubscriptionSchedule.phases[]`, `SubscriptionScheduleCreateParams.phases[]`, and `SubscriptionScheduleUpdateParams.phases[]`
* Add support for `local_amusement_tax` on `Tax.Registration.country_options.us` and `TaxRegistrationCreateParams.country_options.us`
* Remove support for `locations` on `Tax.Settings` and `TaxSettingUpdateParams`
* Add support for new values `customer.subscription.collection_paused` and `customer.subscription.collection_resumed` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
