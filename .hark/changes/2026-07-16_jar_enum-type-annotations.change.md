---
title: Enum type annotations for non-exhaustive ("open") enums now include a shared `OtherString` type in their unions. Many Stripe enums are open, meaning new values may appear even on older API versions. This change ensures these fields have the correct type for both the values known at SDK release time and other values that may be added later. Refer to the [API Reference](https://docs.stripe.com) for the latest set of allowed values.
pr_link: https://github.com/stripe/stripe-node/pull/2786
released_in_version: 22.4.0
---
