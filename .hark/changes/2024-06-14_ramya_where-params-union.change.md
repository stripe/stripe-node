---
title: Where params are union of types, merge the types instead of having numbered suffixes in type names
pr_link: https://github.com/stripe/stripe-node/pull/2111
is_stripe_api_change: true
released_in_version: 15.12.0
---

* Change type of `PaymentIntentConfirmParams.mandate_data` from `Stripe.Emptyable<PaymentIntentConfirmParams.MandateData1 | PaymentIntentConfirmParams.MandateData2>` to `Stripe.Emptyable<PaymentIntentConfirmParams.MandateData>` where the new MandateData is a union of all the properties of MandateData1 and MandateData2
* Change type of `PaymentMethodCreateParams.card` from `PaymentMethodCreateParams.Card1 | PaymentMethodCreateParams.Card2` to `PaymentMethodCreateParams.Card` where the new Card is a union of all the properties of Card1 and Card2
* Change type of `SetupIntentConfirmParams.mandate_data` from `Stripe.Emptyable<SetupIntentConfirmParams.MandateData1 | SetupIntentConfirmParams.MandateData2>` to `Stripe.Emptyable<SetupIntentConfirmParams.MandateData>` where the new MandateData is a union of all the properties of MandateData1 and MandateData2
