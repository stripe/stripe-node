---
title: Fix multipart encoding of `undefined`, `null`, and `Date` params in `files.create`
semver_level: patch
jira_tickets_closed:
- RUN_DEVSDK-3616
---

- Multipart requests now follow the same rules as other requests: `undefined` params are omitted, `null` is sent as an empty string, and `Date` values are sent as Unix timestamps. Previously `undefined` and `null` were sent as the strings `"undefined"` and `"null"`, and `Date` params were dropped.
