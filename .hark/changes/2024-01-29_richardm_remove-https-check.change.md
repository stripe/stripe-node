---
title: Remove https check for *.stripe.com
pr_link: https://github.com/stripe/stripe-node/pull/2009
released_in_version: 14.15.0
---

* Stops throwing exceptions if `protocol: 'http'` is set for requests to `api.stripe.com`.
