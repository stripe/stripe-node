---
title: Multiple API changes
pr_url: https://github.com/stripe/stripe-node/pull/864
is_stripe_api_change: true
released_in_version: 8.39.2
---

* Make `payment_intent` expandable on `Charge`
* Add support for `sg_gst` as a value for `type` on `TaxId` and related APIs
* Add `cancellation_reason` and new enum values for `replacement_reason` on Issuing `Card`
