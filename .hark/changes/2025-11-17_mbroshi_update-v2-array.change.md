---
title: Update v2 array parameter serialization to use indexed format
pr_link: https://github.com/stripe/stripe-node/pull/2497
released_in_version: 20.0.0
---

- `Retrieve` and `List` calls for `/v2` endpoints now use indexed format (e.g., `?include[0]=foo&include[1]=bar`) instead of repeated parameter format (e.g., `?include=foo&include=bar`) when communicating with the Stripe API. This may break any unit tests that expect the latter behavior when setting up a mock server. Instead, they should now expect the former.
