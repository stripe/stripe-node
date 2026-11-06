---
title: Fix account scoping for event notification fetch helpers
pr_url: https://github.com/stripe/stripe-node/pull/2924
semver_level: patch
---

- Fix `EventNotification.fetchEvent()` and `fetchRelatedObject()` (attached by `parseEventNotification`/`parseEventNotificationAsync`/`parseEventNotificationWithoutVerification`) to issue their request through a client scoped to the event's own context instead of the parent client, so a client-level `stripeAccount` default no longer conflicts with the event's `Stripe-Context` header, and a client-level `stripeContext` default is no longer applied to a platform-owned event.
