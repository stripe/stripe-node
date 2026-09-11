---
title: Add discriminatedUnion kind to V2RuntimeSchema coercion
pr_link: https://github.com/stripe/stripe-node/pull/2801
is_breaking: true
released_in_version: 22.6.0
---

- Adds runtime support for coercing int64/decimal fields within discriminated union variants in V2 API requests and responses.
- ⚠️ Throws when serializing a discriminated union parameter whose discriminator is missing or is not a string. This avoids skipping coercion entirely which could silently truncate `int64` fields above `Number.MAX_SAFE_INTEGER`.
