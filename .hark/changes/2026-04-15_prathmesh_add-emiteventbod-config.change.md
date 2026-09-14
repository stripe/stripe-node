---
title: Add emitEventBodies config to include bodies in request/response events
pr_url: https://github.com/stripe/stripe-node/pull/2681
released_in_version: 22.0.2
---

- Added `emitEventBodies` config option to include request and response bodies in `request`/`response` events.
- Changed `httpClient` config type from `HttpClient` class to `HttpClientInterface` interface.
