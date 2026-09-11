---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/2054
is_stripe_api_change: true
released_in_version: 14.25.0-beta.1
---

* Add support for `update` method on resource `Entitlements.Feature`
* Add support for `risk_controls` on `AccountCreateParams`, `AccountUpdateParams`, and `Account`
* Change `Discount.subscription_item`, `QuoteLine.actions[].add_discount`, `QuoteLine.actions[].add_item.discounts`, `QuoteLine.actions[].remove_discount`, `QuoteLine.actions[].set_discounts`, `QuoteLine.actions[].set_items[].discounts`, `Subscription.discounts`, `SubscriptionItem.discounts`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts`, `SubscriptionSchedule.phases[].discounts`, and `SubscriptionSchedule.phases[].items[].discounts` to be required
* Add support for `promotion_code` on `InvoiceAddLinesParams.lines[].discounts[]`, `InvoiceUpdateLinesParams.lines[].discounts[]`, `QuoteCreateParams.line_items[].discounts[]`, `QuoteCreateParams.lines[].actions[].add_discount`, `QuoteCreateParams.phases[].line_items[].discounts[]`, `QuoteUpdateParams.line_items[].discounts[]`, `QuoteUpdateParams.lines[].actions[].add_discount`, and `QuoteUpdateParams.phases[].line_items[].discounts[]`
* Change type of `QuoteLine.actions[].add_item.discounts`, `QuoteLine.actions[].set_items[].discounts`, `SubscriptionSchedule.phases[].add_invoice_items[].discounts`, `SubscriptionSchedule.phases[].discounts`, and `SubscriptionSchedule.phases[].items[].discounts` from `array(DiscountsResourceStackableDiscount) | null` to `array(DiscountsResourceStackableDiscount)`
* Change type of `Subscription.discounts` and `SubscriptionItem.discounts` from `array(expandable(Discount)) | null` to `array(expandable(Discount))`
