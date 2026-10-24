---
title: Fix lastResponse.statusCode for fetch responses
semver_level: patch
released_in_version: 23.0.1
---

- Populate `lastResponse.statusCode` with the HTTP status for successful JSON responses when using the fetch HTTP client.
