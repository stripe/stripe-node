---
title: Remove V1-only fields from V2 list response types
pr_url: https://github.com/stripe/stripe-node/pull/2856
semver_level: major
jira_tickets_closed:
  - DEVSDK-2534
---

Remove the V1-only `object`, `has_more`, and `url` fields from `Stripe.V2List<T>`. Use `next_page_url` and `previous_page_url` to paginate V2 list responses.
