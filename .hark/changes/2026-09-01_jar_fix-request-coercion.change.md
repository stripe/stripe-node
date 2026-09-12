---
title: Fix request coercion for GET and DELETE parameters
pr_url: https://github.com/stripe/stripe-node/pull/2835
released_in_version: 22.6.1
---

- Fixes serialization of schema-coerced values, including `Decimal`, in GET and DELETE query parameters.
