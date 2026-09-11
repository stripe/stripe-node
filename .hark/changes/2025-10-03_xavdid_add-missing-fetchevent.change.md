---
title: add missing fetchEvent type for UnknownEventNotification
pr_link: https://github.com/stripe/stripe-node/pull/2453
released_in_version: 19.1.0
---

- Add missing `fetchEvent()` declaration to the `Stripe.Events.UnknownEventNotification` interface
- Tweak `Stripe.Events.fetchRelatedObject` so that it's always defined and returns `null` if there's no `related_object`. This fixes the situation where the `UnknownEventNotification` says that `fetchRelatedObject()` is defined, but calling it throws an error.
