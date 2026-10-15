---
title: Fix notification handling and discarded fetch retries
pr_url: https://github.com/stripe/stripe-node/pull/0000
semver_level: patch
---

- Fix `EventNotificationHandler.handle()` to verify signatures asynchronously, so it works with async crypto providers (e.g. the web platform).
- Fall back to the full `EventNotification` union type for `on()` callbacks when a specific notification type can't be narrowed, instead of resolving to `never`.
- Dispose discarded `fetch` responses before retrying a request, releasing the timeout and canceling the unread body.
