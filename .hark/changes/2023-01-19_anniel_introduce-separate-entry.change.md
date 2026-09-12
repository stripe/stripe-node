---
title: Introduce separate entry point for worker environments
pr_url: https://github.com/stripe/stripe-node/pull/1660
released_in_version: 11.8.0
---

* This is technically a breaking change that explicitly defines package entry points and was mistakenly released in a minor version. If your application previously imported other internal files from stripe-node and this change breaks it, please open an issue detailing your use case.
