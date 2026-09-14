---
title: Update generated code for private-preview
pr_url: https://github.com/stripe/stripe-node/pull/2471
is_stripe_api_change: true
released_in_version: 19.2.0-alpha.4
---

* Add support for new resource `V2.Billing.PricingPlanSubscriptionComponents`
* Add support for `retrieve` method on resource `V2.Billing.PricingPlanSubscriptionComponents`
* Add support for `dimension_payload_keys` on `Billing.MeterCreateParams` and `Billing.Meter`
* Add support for `dimension_filters` and `dimension_group_by_keys` on `Billing.MeterListMeterEventSummariesParams`
* Add support for `dimensions` on `Billing.MeterEventSummary`
* Add support for `fulfillment_details` and `payment_method_data` on `DelegatedCheckout.RequestedSessionCreateParams` and `DelegatedCheckout.RequestedSessionUpdateParams`
* Add support for `line_item_details`, `metadata`, `payment_method`, and `shared_metadata` on `DelegatedCheckout.RequestedSessionCreateParams`, `DelegatedCheckout.RequestedSessionUpdateParams`, and `DelegatedCheckout.RequestedSession`
* Add support for `currency`, `customer`, and `risk_details` on `DelegatedCheckout.RequestedSessionCreateParams`
* Add support for `seller_details` and `setup_future_usage` on `DelegatedCheckout.RequestedSessionCreateParams` and `DelegatedCheckout.RequestedSession`
* Add support for `amount_subtotal`, `amount_total`, `created_at`, `expires_at`, `order_details`, `shared_payment_issued_token`, `status`, `total_details`, and `updated_at` on `DelegatedCheckout.RequestedSession`
* Add support for `address`, `email`, `fulfillment_options`, `name`, `phone`, and `selected_fulfillment_option` on `DelegatedCheckout.RequestedSession.fulfillment_details`
* Add support for new values `billie`, `crypto`, `kr_card`, `kriya`, `mb_way`, `mondu`, `ng_bank_transfer`, `ng_bank`, `ng_card`, `ng_market`, `ng_ussd`, `ng_wallet`, `payco`, `paypay`, `rechnung`, `samsung_pay`, `satispay`, `scalapay`, `sequra`, `sunbit`, `us_bank_account`, and `vipps` on enums `EventsV2CoreHealthAuthorizationRateDropFiringEvent.impact.payment_method_type`, `EventsV2CoreHealthAuthorizationRateDropResolvedEvent.impact.payment_method_type`, `EventsV2CoreHealthPaymentMethodErrorFiringEvent.impact.payment_method_type`, and `EventsV2CoreHealthPaymentMethodErrorResolvedEvent.impact.payment_method_type`
