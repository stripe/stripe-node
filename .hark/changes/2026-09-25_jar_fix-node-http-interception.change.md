---
title: Fix `NodeHttpClient` compatibility with HTTP request interceptors
semver_level: patch
---

- Fix `NodeHttpClient` requests hanging when using Nock 14 or MSW interceptors ([#2211](https://github.com/stripe/stripe-node/issues/2211)).
