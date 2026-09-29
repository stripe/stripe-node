---
title: Update verifyHeader and verifyHeaderAsync methods to use DEFAULT_TOLERANCE
pr_url: https://github.com/stripe/stripe-node/pull/2876
semver_level: major
---

Previous default values fell to 0, but now they use DEFAULT_TOLERANCE as defined in Webhooks instance
