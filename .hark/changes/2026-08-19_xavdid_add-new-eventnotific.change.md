---
title: Add new `EventNotificationHandler` class for better thin event management
pr_link: https://github.com/stripe/stripe-node/pull/2818
released_in_version: 22.6.0
---

- We've been putting a lot of time into rethinking the event handling experience in the SDKs. This new class is the culmination [of that effort](https://stripe.dev/blog/event-notification-handlers-thin-events).
- They're designed for a tight coupling with both `StripeClient` and the fully-typed nature of [thin events](https://docs.stripe.com/event-destinations#thin-events). This delivers painless event destination upgrades, in-editor checks for common mistakes, and better code modularity.
- Now that we've released [thin event notifications for v1 objects](https://docs.stripe.com/changelog#2026-08-26.dahlia), these new handlers are our recommended path for all integrations using thin event notifications.
- See more detailed docs here: https://docs.stripe.com/webhooks/event-notification-handlers
