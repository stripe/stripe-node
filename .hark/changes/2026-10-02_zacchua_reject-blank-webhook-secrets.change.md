---
title: Reject ASCII-whitespace-only webhook secrets
pr_url: https://github.com/stripe/stripe-node/pull/2885
semver_level: patch
jira_tickets_closed:
- RUN_DEVSDK-3378
---

- Reject webhook signing secrets made entirely of ASCII whitespace instead of using them as HMAC keys.
