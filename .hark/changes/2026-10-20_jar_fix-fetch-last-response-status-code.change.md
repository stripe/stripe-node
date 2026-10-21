---
title: Fix lastResponse.statusCode for fetch responses
semver_level: patch
---

- Populate `lastResponse.statusCode` with the HTTP status for successful JSON responses when using the fetch HTTP client.
