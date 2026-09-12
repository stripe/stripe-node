---
title: Add strongly typed EventNotifications
pr_url: https://github.com/stripe/stripe-node/pull/2370
is_breaking: true
released_in_version: 19.0.0
---

We've overhauled how V2 Events are handled in the SDK! This approach should provide a lot more information at authoring and compile time, leading to more robust integrations. As part of this process, there are a number of changes to be aware of.
- ⚠️ Rename function `StripeClient.parseThinEvent` to `StripeClient.parseEventNotification` and remove the `Stripe.ThinEvent` interface.
    - This function now returns a `Stripe.V2.EventNotification` which is a union of all possible event notifications instead of `Stripe.ThinEvent`. When applicable, these event notifications will have the `relatedObject` field and a function `fetchRelatedObject()`. They also have a `fetchEvent()` method to retrieve their corresponding event.
    - If this union type does not cover a new event notification that you parsed, you can cast it to `UnknownEventNotification` to then access the `relatedObject` field and the function `fetchRelatedObject()`
