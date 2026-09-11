---
title: "Fix file upload regression: restore multipart request data processor"
pr_link: https://github.com/stripe/stripe-node/pull/2704
released_in_version: 22.1.1
---

- Fixed file uploads failing with `StripeInvalidRequestError` on the `/v1/files` endpoint since v22.
