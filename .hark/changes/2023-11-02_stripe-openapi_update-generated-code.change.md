---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1945
is_stripe_api_change: true
released_in_version: 14.4.0-beta.1
---

* Add support for `attach_payment_intent` method on resource `Invoice`
* Add support for `revolut_pay` on `ConfirmationToken.payment_method_preview`
* Add support for new value `revolut_pay` on enum `ConfirmationToken.payment_method_preview.type`
* Change `ConfirmationToken.payment_method_preview.paypal.payer_email`, `ConfirmationToken.payment_method_preview.paypal.payer_id`, `Issuing.Authorization.merchant_data.url`, `Issuing.Authorization.verification_data.three_d_secure`, `Issuing.Transaction.merchant_data.url`, `Order.payment.settings.payment_method_options.paypal.reference`, and `QuoteLine.set_schedule_end` to be required
* Add support for `refunds` on `CreditNoteCreateParams`, `CreditNotePreviewLinesParams`, `CreditNotePreviewParams`, and `CreditNote`
* Add support for `post_payment_amount` and `pre_payment_amount` on `CreditNote`
* Add support for new value `invoice.payment.overpaid` on enum `Event.type`
* Add support for `schedule_details` on `InvoiceUpcomingLinesParams` and `InvoiceUpcomingParams`
* Add support for `amounts_due` on `InvoiceCreateParams`, `InvoiceUpdateParams`, and `Invoice`
* Add support for `payments` on `Invoice`
* Add support for `created` on `Issuing.PersonalizationDesign`
* Add support for `ending_before`, `limit`, and `starting_after` on `Tax.RegistrationListParams`
* Change type of `Tax.RegistrationCreateParams.active_from` to be `'now' | DateTime`
* Add support for new value `invoice.payment.overpaid` on enums `WebhookEndpointCreateParams.enabled_events[]` and `WebhookEndpointUpdateParams.enabled_events[]`
