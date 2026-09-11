---
title: Update generated code for beta
pr_link: https://github.com/stripe/stripe-node/pull/1861
is_stripe_api_change: true
released_in_version: 12.18.0-beta.1
---

* Add support for `submit_card` test helper method on resource `Issuing.Card`
* Add support for `address_validation` on `Issuing.Card.shipping` and `Issuing.CardCreateParams.shipping`
* Add support for `shipping` on `Issuing.CardUpdateParams`
* Add support for new value `submitted` on enum `Issuing.Card.shipping.status`
* Change type of `OrderCreateParams.line_items[].product_data.description`, `OrderCreateParams.line_items[].product_data.tax_code`, `OrderCreateParams.shipping_details.phone`, `OrderUpdateParams.description`, `OrderUpdateParams.line_items[].product_data.description`, `OrderUpdateParams.line_items[].product_data.tax_code`, `OrderUpdateParams.shipping_details.phone`, `PaymentMethodConfigurationListParams.application`, and `QuoteUpdateParams.subscription_data_overrides[].description` from `string` to `emptyStringable(string)`
* Add support for `reason` on `QuoteMarkStaleQuoteParams`
* Add support for `marked_stale` on `Quote.status_details.stale.last_reason`
* Change `Tax.FormListParams.payee.type` to be optional
