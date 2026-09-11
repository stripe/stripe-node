---
title: parseThinEvent__experimental is no longer needed
pr_link: https://github.com/stripe/stripe-node/pull/2417
is_breaking: true
released_in_version: 19.1.0-alpha.1
---

* ⚠️ Remove the `StripeClient.parseThinEvent__experimental` and `PushedThinEvent` classes. They've been replaced with `StripeClient.parseEventNotification` and the *`EventNotification` classes respectively.
