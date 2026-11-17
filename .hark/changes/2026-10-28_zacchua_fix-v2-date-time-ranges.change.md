---
title: Accept RFC 3339 strings for V2 date-time range filters
semver_level: minor
---

V2 date-time range filters now accept RFC 3339 strings. Numeric bounds remain in place to avoid breaking the interface, although the API does not accept them.
