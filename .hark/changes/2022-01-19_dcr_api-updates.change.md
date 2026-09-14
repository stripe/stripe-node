---
title: API Updates
pr_url: https://github.com/stripe/stripe-node/pull/1331
is_stripe_api_change: true
released_in_version: 8.198.0
---

* Change type of `Charge.status` from `string` to `enum('failed'|'pending'|'succeeded')`
* Add support for `bacs_debit` and `eps` on `PaymentIntentCreateParams.payment_method_options`, `PaymentIntentUpdateParams.payment_method_options`, `PaymentIntentConfirmParams.payment_method_options`, and `PaymentIntent.payment_method_options`
* Add support for `image_url_png` and `image_url_svg` on `PaymentIntent.next_action.wechat_pay_display_qr_code`
