---
title: Improve webhook signature verification error messages
semver_level: patch
---

- When diagnostic metadata is present in the `Stripe-Signature` header, error messages help identify an incorrect signing secret or altered request body.
