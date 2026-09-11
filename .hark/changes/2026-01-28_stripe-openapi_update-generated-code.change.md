---
title: Update generated code for private-preview
pr_link: https://github.com/stripe/stripe-node/pull/2565
is_stripe_api_change: true
released_in_version: 20.4.0-alpha.1
---

* Add support for new resources `FrMealVouchersOnboarding`, `Reserve.Hold`, `Reserve.Plan`, and `Reserve.Release`
* Add support for `create`, `list`, `retrieve`, and `update` methods on resource `FrMealVouchersOnboarding`
* Add support for `list` and `retrieve` methods on resources `Reserve.Hold` and `Reserve.Release`
* Add support for `retrieve` method on resource `Reserve.Plan`
* Add support for `pause` method on resource `Subscription`
* Add support for `service_period_details` on `Discount`
* Add support for `agentic_commerce_settings` on `AccountSession.components`
* Add support for new value `risk_reserved` on enum `BalanceTransaction.balance_type`
* Add support for new value `service_period` on enums `Checkout.SessionCreateParams.discounts[].coupon_data.duration`, `Checkout.SessionUpdateParams.discounts[].coupon_data.duration`, `Coupon.duration`, and `CouponCreateParams.duration`
* Add support for `service_period` on `CouponCreateParams` and `Coupon`
* Change type of `InvoiceItem.pricing.price_details.price` and `InvoiceLineItem.pricing.price_details.price` from `string` to `expandable(Price)`
* Add support for `settings` on `InvoiceCreatePreviewParams.discounts[]`, `InvoiceCreatePreviewParams.schedule_details.amendments[].discount_actions[].add`, `InvoiceCreatePreviewParams.schedule_details.amendments[].discount_actions[].set`, `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].add.discounts[]`, `InvoiceCreatePreviewParams.schedule_details.amendments[].item_actions[].set.discounts[]`, `InvoiceCreatePreviewParams.schedule_details.phases[].discounts[]`, `InvoiceCreatePreviewParams.schedule_details.phases[].items[].discounts[]`, `InvoiceCreatePreviewParams.subscription_details.items[].discounts[]`, `QuoteCreateParams.lines[].actions[].add_discount`, `QuoteCreateParams.lines[].actions[].add_item.discounts[]`, `QuoteCreateParams.lines[].actions[].set_discounts[]`, `QuoteCreateParams.lines[].actions[].set_items[].discounts[]`, `QuoteUpdateParams.lines[].actions[].add_discount`, `QuoteUpdateParams.lines[].actions[].add_item.discounts[]`, `QuoteUpdateParams.lines[].actions[].set_discounts[]`, `QuoteUpdateParams.lines[].actions[].set_items[].discounts[]`, `SubscriptionCreateParams.discounts[]`, `SubscriptionCreateParams.items[].discounts[]`, `SubscriptionItemCreateParams.discounts[]`, `SubscriptionItemUpdateParams.discounts[]`, `SubscriptionScheduleAmendParams.amendments[].discount_actions[].add`, `SubscriptionScheduleAmendParams.amendments[].discount_actions[].set`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].add.discounts[]`, `SubscriptionScheduleAmendParams.amendments[].item_actions[].set.discounts[]`, `SubscriptionScheduleCreateParams.phases[].discounts[]`, `SubscriptionScheduleCreateParams.phases[].items[].discounts[]`, `SubscriptionScheduleUpdateParams.phases[].discounts[]`, `SubscriptionScheduleUpdateParams.phases[].items[].discounts[]`, `SubscriptionUpdateParams.discounts[]`, and `SubscriptionUpdateParams.items[].discounts[]`
* Add support for `subtotal` on `InvoiceLineItem`
* Add support for `billing_cadence` on `SubscriptionListParams`
