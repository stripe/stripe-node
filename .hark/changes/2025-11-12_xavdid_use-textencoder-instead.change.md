---
title: Use `TextEncoder` instead of `Buffer` to ensure support in other JS environments
pr_link: https://github.com/stripe/stripe-node/pull/2500
released_in_version: 19.3.1
---

* Fixes issues like [#2499](https://github.com/stripe/stripe-node/issues/2499) and [#2493](https://github.com/stripe/stripe-node/issues/2493) where use of `Buffer.byteLength` was causing errors in some runtime environments.
