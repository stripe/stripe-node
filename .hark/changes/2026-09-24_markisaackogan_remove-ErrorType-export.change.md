---
title: Remove `ErrorType` export
pr_url: https://github.com/stripe/stripe-node/pull/2865
semver_level: major
jira_tickets_closed:
  - DEVSDK-3165
---

Remove the ErrorType interface from the top level client. Users can use .errors instead since it works as both a type and a value