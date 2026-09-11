---
title: Update generated code
pr_link: https://github.com/stripe/stripe-node/pull/2140
is_stripe_api_change: true
released_in_version: 16.5.0
---

* Add support for `update` method on resource `Checkout.Session`
* Add support for `transaction_id` on `Charge.payment_method_details.affirm`
* Add support for `buyer_id` on `Charge.payment_method_details.blik`
* Add support for `authorization_code` on `Charge.payment_method_details.card`
* Add support for `brand_product` on `Charge.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, `ConfirmationToken.payment_method_preview.card_present`, `PaymentMethod.card.generated_from.payment_method_details.card_present`, and `PaymentMethod.card_present`
* Add support for `network_transaction_id` on `Charge.payment_method_details.card_present`, `Charge.payment_method_details.interac_present`, `ConfirmationToken.payment_method_preview.card.generated_from.payment_method_details.card_present`, and `PaymentMethod.card.generated_from.payment_method_details.card_present`
* Add support for `case_type` on `Dispute.payment_method_details.card`
* Add support for new values `invoice.overdue` and `invoice.will_be_due` on enum `Event.type`
* Add support for `twint` on `PaymentMethodConfigurationCreateParams`, `PaymentMethodConfigurationUpdateParams`, and `PaymentMethodConfiguration`
* Add support for new values `invoice.overdue` and `invoice.will_be_due` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
