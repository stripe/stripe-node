---
title: Fix `parseEventNotification` and `parseEventNotificationAsync` ignoring a `tolerance` of `0`
semver_level: major
---

A `tolerance` of `0` now skips the timestamp check, as it does in `constructEvent` and `verifyHeader`. Previously these two methods replaced `0` with the default tolerance of 300 seconds. Omitting `tolerance` still uses the default. If you pass `0` and want the default, pass `300` or omit `tolerance`.
