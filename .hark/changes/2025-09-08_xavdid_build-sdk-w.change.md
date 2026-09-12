---
title: Build SDK w/ V2 OpenAPI spec
pr_url: https://github.com/stripe/stripe-node/pull/2398
is_breaking: true
released_in_version: 19.0.0
---

- ⚠️ The delete methods for v2 APIs (the ones in the `StripeClient.v2` namespace) now return a `V2DeletedObject` which has the id of the object that has been deleted and a string representing the type of the object that has been deleted.
- ⚠️ Change the types of nullable properties in objects returned by v2 APIs (the ones in the `StripeClient.v2` namespace) from a null union to optional (e.g. `prop: string | null` -> `prop?: string`).
